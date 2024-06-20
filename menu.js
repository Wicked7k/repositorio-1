document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const precio = parseFloat(this.getAttribute('data-precio'));

            let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

            carrito.push({ nombre, precio });

            sessionStorage.setItem('carrito', JSON.stringify(carrito));

            alert(`Se agregó "${nombre}" al carrito.`); 

            window.location.href = 'pedidoenline.html';
        });
    });
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
        document.querySelector('.hamburger').classList.toggle('active');
    });
});
