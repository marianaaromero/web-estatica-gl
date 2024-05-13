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
