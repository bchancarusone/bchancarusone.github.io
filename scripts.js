document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const tileViewBtn = document.getElementById('tile-view');
    const galleryDiv = document.getElementById('gallery');
    const tilesDiv = document.getElementById('tiles');

    let currentIndex = 0;
    const images = [
        { src: 'path_to_image1.jpg', camera: 'Camera Model 1', date: 'Date 1', location: 'Location 1' },
        { src: 'path_to_image2.jpg', camera: 'Camera Model 2', date: 'Date 2', location: 'Location 2' },
        // Add more images as needed
    ];

    function updateImage(index) {
        const img = document.querySelector('.photo-display img');
        const info = document.querySelectorAll('.photo-info p');

        img.src = images[index].src;
        img.alt = 'Shot on ' + images[index].camera;
        info[0].textContent = 'Shot on: ' + images[index].camera;
        info[1].textContent = 'Date: ' + images[index].date;
        info[2].textContent = 'Location: ' + images[index].location;
    }

    leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage(currentIndex);
    });

    rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });

    tileViewBtn.addEventListener('click', () => {
        const isVisible = tilesDiv.classList.contains('hidden');
        tilesDiv.classList.toggle('hidden', !isVisible);
        galleryDiv.classList.toggle('hidden', isVisible);
    });

    // Initialize the gallery
    updateImage(currentIndex);
});

