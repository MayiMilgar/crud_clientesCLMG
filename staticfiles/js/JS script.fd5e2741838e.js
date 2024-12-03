// cambiar el header cuando el usuario haga scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
})
/*
// Mostrar un mensaje de alerta con hacer clic al botón

document.querySelector('.btn').addEventListener('click',function(){
    alert('Éxito en la busqueda');
});

// Aplicar a todos los botonones de la clase .btn
document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click',function(){
        alert("¡Elige tu mejor opción!")
    })
})
*/

// Función para el primer botón
document.getElementById("btn-encuentra").addEventListener('click', function(){
    alert('¡Elige tu mejor opción!');
})

// Función para el segundo botón
document.getElementById("btn-Explorar").addEventListener('click', function(){
    alert('Éxito en la busqueda');
})

// Seleccionar todos los enlaces dentro de la clase .navbar
document.querySelectorAll('.navbar a[href^="="]').forEach(function(enlace) {
    enlace.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'instant'
        });
    })
});

//Cambiar la imagen n segundo

const imagenes = [
    '/static/img/carr.jpg',
    '/static/img/Portada2.jpg',
    '/static/img/Portada3.jpg',
    '/static/img/Portada4.jpg',
    '/static/img/Portada5.jpg',
];

const homeSection = document.querySelector('.home');
const intervalo = 5000; // 5000 ms= 5s
let indiceImagen = 0;

function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
        rgba(20, 37, 94, 0.5),
        rgba(12, 12, 12, 0.8)
), url(${imagenes[indiceImagen]})`;
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}
setInterval(cambiarFondo,intervalo);

// Mostrar menú en pantallas pequeñas

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlaces = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x')
}
enlaces.forEach(link => {
    link.onclick =() => {
    navbar.classList.remove('open');
    menu.classList.remove('bx-x');
    }
})

// Animacion de texto 
var typed = new Typed('#type',{
    strings: ['Nuevas carreras para ti', 'No te pierdas de esta oportunidad', 'Elige que quieres para tu vida'],
    typeSpeed: 50,
    loop:"true",
    showCursor:"true",
    cursorChar:"_",
    backSpeed: 20,
})
var typed = new Typed('#type2',{
    strings: ['Tu mejor decisión', ' Esta aquí', 'Aprovechala'],
    typeSpeed: 50,
    loop:"true",
    showCursor:"true",
    cursorChar:"_",
    backSpeed: 20,
})

