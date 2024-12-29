// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Manejo del formulario
    const leadForm = document.getElementById('leadForm');
    
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Recoger datos del formulario
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            mensaje: document.getElementById('mensaje').value
        };

        // Aquí puedes agregar la lógica para enviar los datos a tu servidor
        console.log('Datos del formulario:', formData);
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
        leadForm.reset();
    });

    // Animación al hacer scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.service-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Llamada inicial
});
Last edited hace 24 minutos