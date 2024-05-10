//MODO CLARO - MODO OSCURO
const brush = document.querySelector(".menu .brush");
let state = false;

brush.addEventListener("click", function() {
    if (!state) {
        document.body.style.backgroundColor = "#FFF9F3";
        state = true;
    } else {
        document.body.style.backgroundColor = "#8CA87C";
        state = false;
    }
});

// button elements
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', handleNextClick);
prevButton.addEventListener('click', handlePrevClick);

function handleNextClick() {
    const slide = document.querySelector('.slide');
    const firstItem = slide.firstElementChild;
    slide.appendChild(firstItem);
}

function handlePrevClick() {
    const slide = document.querySelector('.slide');
    const lastItem = slide.lastElementChild;
    slide.prepend(lastItem);
}

// event: keyboard 
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        handleNextClick();
        highlightActiveButton(nextButton);
    } else if (event.key === 'ArrowLeft') {
        handlePrevClick();
        highlightActiveButton(prevButton);
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        removeActiveButtonHighlight();
    }
});

// highlight active button

function highlightActiveButton(button) {

    document.querySelectorAll('.gallery-button button').forEach(btn => {
        btn.classList.remove('active-button');
    });

    button.classList.add('active-button');
}

function removeActiveButtonHighlight() {
    document.querySelectorAll('.gallery-button button').forEach(btn => {
        btn.classList.remove('active-button');
    })
}