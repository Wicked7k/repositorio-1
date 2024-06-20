document.addEventListener('DOMContentLoaded', function() {
    const selectProductos = document.getElementById('productos');

    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    function actualizarProductosSeleccionados() {
        selectProductos.innerHTML = '';

        carrito.forEach(producto => {
            const opcion = document.createElement('option');
            opcion.text = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            opcion.value = `${producto.nombre}:${producto.precio}`;
            selectProductos.appendChild(opcion);
        });
    }

    actualizarProductosSeleccionados();

    selectProductos.addEventListener('change', function(event) {
        const selectedOption = event.target.value;
        
        if (selectedOption === '') {
            selectProductos.selectedIndex = -1; 
        }
    });

    window.addEventListener('beforeunload', function(event) {
        sessionStorage.removeItem('carrito');
    });

    document.getElementById('formulario-pedido').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const fechaEntrega = document.getElementById('fechaEntrega').value;

        const productosSeleccionados = Array.from(selectProductos.selectedOptions).map(option => option.value);


        sessionStorage.removeItem('carrito');

        window.location.href = "exito.html";
    });

    document.querySelector('.hamburguer').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
        document.querySelector('.hamburguer').classList.toggle('active');
    });
});
