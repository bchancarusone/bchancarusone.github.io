document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const toggleViewBtn = document.getElementById('toggle-view');
    const galleryDiv = document.getElementById('gallery');
    const tilesDiv = document.getElementById('tiles');
    const thumbnails = document.querySelectorAll('.thumbnail img');

    let currentIndex = 0;
    const images = [
        { src: 'photos/01.png', camera: 'Pentax ES w/ Kodak Portra 800', date: '2022/10', location: 'Parry Sound, ON' },
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

    // Ensure initial visibility state is set correctly
    if (!galleryDiv.classList.contains('hidden') && !tilesDiv.classList.contains('hidden')) {
        // Assuming you want the gallery view to be visible first
        tilesDiv.classList.add('hidden');
    }

    toggleViewBtn.addEventListener('click', () => {
        if (galleryDiv.classList.contains('hidden')) {
            galleryDiv.classList.remove('hidden');
            tilesDiv.classList.add('hidden');
            toggleViewBtn.textContent = 'Tile View';
        } else {
            tilesDiv.classList.remove('hidden');
            galleryDiv.classList.add('hidden');
            toggleViewBtn.textContent = 'Gallery View';
        }
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateImage(index);
            currentIndex = index;
            tilesDiv.classList.add('hidden');
            galleryDiv.classList.remove('hidden');
            toggleViewBtn.textContent = 'Tile View';
        });
    });

    // Initialize the gallery
    updateImage(currentIndex);
});
