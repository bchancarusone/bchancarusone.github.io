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
        { src: 'photos/02.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Kodak Gold 200', date: '2023/3/15', location: 'Toronto, ON' },
        { src: 'photos/03.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Kodak Gold 200', date: '2023/7/9', location: 'New York, NY' },
        { src: 'photos/04.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Kodak Gold 200', date: '2023/8/21', location: 'Burlington, ON' },
        { src: 'photos/05.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Fuji Superia 400', date: '2024/3/11', location: 'Toronto, ON' },
        { src: 'photos/05a.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Cinestill 800T', date: '2024/4/30', location: 'Etobicoke, ON' },
        { src: 'photos/06.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Cinestill 800T', date: '2024/5/10', location: 'Toronto, ON' },
        { src: 'photos/06a.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Cinestill 800T', date: '2024/5/10', location: 'Toronto, ON' },
        { src: 'photos/07.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Fuji Superia 400', date: '2024/5/19', location: 'Hamilton, ON' },
        { src: 'photos/08.png', camera: 'Olympus Stylus Epic Zoom 80 w/ Fuji Superia 400', date: '2024/5/25', location: 'Toronto, ON' },
        { src: 'photos/08a.png', camera: 'Sony ICLE-6100', date: '2024/5/31', location: 'Burlington, ON' },
        { src: 'photos/09.png', camera: 'Canon Powershot SD880 IS', date: '2024/6/13', location: 'Hamilton, ON' },
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
            galleryDiv.classList.add('flex');
            tilesDiv.classList.remove('flex');
            tilesDiv.classList.add('hidden');
            toggleViewBtn.textContent = 'Tile View';
        } else {
            tilesDiv.classList.remove('hidden');
            tilesDiv.classList.add('flex');
            galleryDiv.classList.remove('flex');
            galleryDiv.classList.add('hidden');
            toggleViewBtn.textContent = 'Gallery View';
        }
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateImage(index);
            currentIndex = index;
            tilesDiv.classList.remove('flex');
            tilesDiv.classList.add('hidden');
            galleryDiv.classList.remove('hidden');
            galleryDiv.classList.add('flex');
            toggleViewBtn.textContent = 'Tile View';
        });
    });

    // Initialize the gallery
    updateImage(currentIndex);
});
