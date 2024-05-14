//MODO CLARO - MODO OSCURO
const brush = document.querySelector(".menu .brush");
const header = document.querySelector("header");

//Local Storage 
//Verifica si hay un tema almacenado en el localStorage
let state = localStorage.getItem("theme") === "dark";

if (state) {
    dark();
} else {
    light();
}


brush.addEventListener("click", function () {
    if (!state) {
        dark();
        state = true;
    } else {
        light();
        state = false;
    }

    //Local Storage 
    localStorage.setItem("theme", state ? "dark" : "light");
});


function dark() {
    document.body.style.backgroundColor = "#cfe1b9";
    header.style.backgroundColor = "#8CA87C";
}

function light() {
    document.body.style.backgroundColor = "#8CA87C";
    header.style.backgroundColor = "#6D8261";
}



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