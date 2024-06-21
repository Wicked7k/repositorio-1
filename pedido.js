document.addEventListener('DOMContentLoaded', function() {
    const selectProductos = document.getElementById('productos');
    const btnEliminarProducto = document.getElementById('eliminar-producto');

    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];

    function actualizarProductosSeleccionados() {
        selectProductos.innerHTML = '';

        carrito.forEach((producto, index) => {
            const opcion = document.createElement('option');
            opcion.text = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            opcion.value = index; 
            selectProductos.appendChild(opcion);
        });
    }

    actualizarProductosSeleccionados();

    btnEliminarProducto.addEventListener('click', function() {
        const selectedIndex = selectProductos.selectedIndex;
        if (selectedIndex !== -1) {
            carrito.splice(selectedIndex, 1); 
            sessionStorage.setItem('carrito', JSON.stringify(carrito)); 
            actualizarProductosSeleccionados(); 
        } else {
            alert('Por favor, seleccione un producto para eliminar.');
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
    })

    document.querySelector('.hamburguer').addEventListener('click', function() {
        document.querySelector('.navbar ul').classList.toggle('active');
        document.querySelector('.hamburguer').classList.toggle('active');
    });
});

