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
