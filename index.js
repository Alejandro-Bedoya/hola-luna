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
