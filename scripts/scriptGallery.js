//Arreglo imagenes con sus descripciones 
const galleryItems = [
    {
        imageUrl: '../assets/gallery/meules.jpg',
        name: 'Meules (fin de l\'été)',
        date: '✦1890',
        description: 'Monet painted 25 pieces in the "Haystack" series, focusing on haystacks post-harvest and pioneering light and shadow experimentation...'
    },
    {
        imageUrl: '../assets/gallery/puenteDeArgenteuil.jpg',
        name: 'Le pont d\'Argenteuil',
        date: '✦1874',
        description: 'The Argenteuil Bridge captures the tranquil beauty of the Argenteuil bridge with vibrant brushstrokes and evocative colors...'
    },
    {
        imageUrl: '../assets/gallery/jardinArtiste.jpg',
        name: 'Jardin de l\'artiste',
        year: '✦1873',
        description: 'His signature style shines through, characterized by bold brushstrokes that breathe life into the lush garden scenery...'
    },
    {
        imageUrl: '../assets/gallery/waterLillies.jpg',
        name: 'Water Lillies',
        date: '✦1882',
        description: 'Monet offers a serene immersion into nature\'s beauty, where vibrant blooms dance upon the surface of the pond...'
    },
    {
        imageUrl: '../assets/gallery/twilightVenice.jpg',
        name: 'Crépuscule à Venise',
        date: '✦1908',
        description: 'In "Twilight Venice," Monet uses a warm, soft color palette to depict the calm and serene atmosphere of the city at dusk...'
    },
    {
        imageUrl: '../assets/gallery/grenouillere.jpg',
        name: 'La Grenouillère',
        date: '✦1869',
        description: 'Monet portrays a charming riverside popular setting, revealing his adeptness in capturing the play of light and color...'
    }
];



const slide = document.querySelector(".slide");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");


//Genera las imagenes con sus descripciones dinamicamente
function createGalleryItems() {
    galleryItems.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("item");
        galleryItem.style.backgroundImage = `url(${item.imageUrl})`;
        galleryItem.innerHTML = `
            <article class="content">
                <h2 class="name">${item.name} <span>${item.date}</span></h2>
                <p class="des">${item.description}</p>
                <button>See More</button>
            </article>
        `;
        slide.appendChild(galleryItem);
    });
}


//Botones

function slideForward() {
    const firstItem = slide.firstElementChild;
    slide.appendChild(firstItem);
    highlightActiveButton(nextButton);
}

function slideBackward() {
    const lastItem = slide.lastElementChild;
    slide.prepend(lastItem);
    highlightActiveButton(prevButton);
}

nextButton.addEventListener('click', () => {
    slideForward();
});

prevButton.addEventListener('click', () => {
    slideBackward();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        slideForward();
        highlightActiveButton(nextButton);
    } else if (event.key === 'ArrowLeft') {
        slideBackward();
        highlightActiveButton(prevButton);
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        removeActiveButtonHighlight();
    }
});

function highlightActiveButton(button) {

    removeActiveButtonHighlight();
    button.classList.add('active');
}

function removeActiveButtonHighlight() {
    const buttons = document.querySelectorAll('.gallery-button button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}


createGalleryItems();
