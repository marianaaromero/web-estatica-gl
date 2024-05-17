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




// MUSIC BUTTON
function toggleAudio() {
    const audio = document.getElementById("background-audio");
    const control = document.getElementById("audio-icon");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}



//SUBSCRIBE
// email for subscribing - local storage
document.getElementById('subscribe-form').addEventListener('submit', function (event) {
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



//UP BUTTON
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    const currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}

buttonUp = document.getElementById("button-up");


//SCROLL
window.onscroll = function () {

    const scroll = document.documentElement.scrollTop;

    if (scroll > 600) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 600) {
        buttonUp.style.transform = "scale(0)";
    }

}