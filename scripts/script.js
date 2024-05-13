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

// RESPONSIVE MENU - NAV BAR

document.querySelector('.menu .mobile-nav').addEventListener('click', function() {
    document.querySelector('.menu ul').classList.toggle('show');
});

/* function toggleMenu(navSelector, menuSelector) {
    document.querySelector(navSelector).addEventListener('click', function() {
        document.querySelector(menuSelector).classList.toggle('show');
    });
}

toggleMenu('.menu .mobile-nav', '.menu ul'); */