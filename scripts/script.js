//MODO CLARO - MODO OSCURO
const brush = document.querySelector(".menu .brush");
const header = document.querySelector("header");
let state = false;

brush.addEventListener("click", function () {
    if (!state) {
        document.body.style.backgroundColor = "#FFF9F3";
        header.style.backgroundColor = "#8CA87C";
        state = true;
    } else {
        document.body.style.backgroundColor = "#8CA87C";
        header.style.backgroundColor = "#6D8261";
        state = false;
    }
});
<<<<<<< HEAD
=======

// responsive menu nav bar


// button slider
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slide = document.querySelector('.slide');

nextButton.addEventListener('click', slideForward);
prevButton.addEventListener('click', slideBackward);

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

// event: keyboard 
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        slideForward();
        highlightActiveButton(nextButton);
    } else if (event.key === 'ArrowLeft') {
        slideBackward();
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

>>>>>>> e335540 (menu media query)
