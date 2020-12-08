const btnMenu2 = document.querySelector('.hamburguesa')
const btnMenu = document.querySelector('#boton_menu');
const navegacion = document.querySelector('.navegacion');
btnMenu2.addEventListener('click', e => {
    e.preventDefault();
    console.log("Has dado click");
    if (navegacion.classList.contains('visible')) {
        navegacion.classList.remove('visible');
        btnMenu.classList.remove('visible');
    } else {
        navegacion.classList.add('visible');
        btnMenu.classList.add('visible');
    }
})
navegacion.addEventListener('clicl', () => {
    console.log("Has dado click en navegacion");
})



// Codigo que hace funcionar al Slider
let slider = document.querySelector('.slider-contenedor'),
    sliderIndividual = document.querySelectorAll('.contenido-slider'),
    contador = 1,
    width = sliderIndividual[0].clientWidth,
    intervalo = 3000;

window.addEventListener('resize', () => {
    width = sliderIndividual[0].clientWidth;
})

setInterval(function() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = "translate(" + (-width * contador) + "px)";
    slider.style.transition = "transform .7s";
    contador++;
    if (contador == sliderIndividual.length) {
        setTimeout(function() {
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador = 1;
        }, 1500);
    }
}