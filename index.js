document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('show-menu');
    });

    const menuItems = document.querySelectorAll('navbar');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navbar.classList.remove('show-menu');
        });
    });
});

