document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar ul').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
}); 

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const fechaReserva = document.getElementById('fechaReserva').value;

  window.location.href = "exito.html";
});

function calcularTiempoEspera(numClientesActuales, tiempoPromedioAtencion) {
  return numClientesActuales * tiempoPromedioAtencion;
}

function actualizarTiempoEspera() {
  var numClientesActuales = 8; 
  var tiempoPromedioAtencion = 7; 

  var tiempoEspera = calcularTiempoEspera(numClientesActuales, tiempoPromedioAtencion);

  var tiempoEsperaElemento = document.getElementById("tiempo-espera");
  tiempoEsperaElemento.textContent = tiempoEspera + " minutos";
}

actualizarTiempoEspera();
setInterval(actualizarTiempoEspera, 5000); 
