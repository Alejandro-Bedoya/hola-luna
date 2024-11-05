// Seleccionamos el ícono del menú y la barra de navegación
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a'); // Seleccionamos todos los enlaces del menú

// Agregamos un evento de clic al ícono del menú
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Activa/desactiva el menú
});

// Agregamos un evento de clic a cada enlace de navegación para cerrar el menú
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Cierra el menú cuando se hace clic en un enlace
    });
});


// Agrega un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const section = document.querySelector(this.getAttribute('href')); // Obtiene la sección correspondiente
        section.scrollIntoView({ behavior: 'smooth' }); // Realiza el scroll a la sección
    });
});


// SECCION FECHA
const countdownDate = new Date("November 15, 2024 09:00:00").getTime();
const message = document.getElementById("message");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Mostrar mensaje al llegar a cero
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown-timer").style.display = "none";
        message.style.display = "block";
        message.textContent = "¡Felíz Cumpleaños Preciosa...! En un momento te darás cuentas de algo, ¡Un beso hermosha!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

