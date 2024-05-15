//MODO CLARO - MODO OSCURO
const brush = document.querySelector(".menu .brush");
const body = document.body;


// Local Storage
let state = localStorage.getItem("theme") === "dark";

if (state) {
    applyDarkTheme();
} else {
    applyLightTheme();
}

brush.addEventListener("click", function () {
    if (!state) {
        applyDarkTheme();
        state = true;
    } else {
        applyLightTheme();
        state = false;
    }
    
    // Local Storage
    localStorage.setItem("theme", state ? "dark" : "light");
});

function applyDarkTheme() {
    body.classList.remove("light");
}

function applyLightTheme() {
    body.classList.add("light");
}

// RESPONSIVE MENU - NAV BAR

const menuButton = document.querySelector(".menu .mobile-nav");

menuButton.addEventListener("click", function () {
    document.querySelector(".menu ul").classList.toggle("show");
});

// email for subscribing - local storage
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    
    const storedEmail = localStorage.getItem('email');

    if (storedEmail === email) {
        alert('You are already subscribed with this email!');
        return; 
    }
    localStorage.setItem('email', email);

    document.getElementById('email').value = '';

    alert('Thank you for subscribing!');
});


/* function toggleMenu(navSelector, menuSelector) {
    document.querySelector(navSelector).addEventListener('click', function() {
        document.querySelector(menuSelector).classList.toggle('show');
    });
}

toggleMenu('.menu .mobile-nav', '.menu ul'); */
