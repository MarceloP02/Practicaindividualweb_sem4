// 1. Buscar los elementos del DOM
const mensaje = document.querySelector('#mensaje');
const miBoton = document.querySelector('#miBoton');
const nombre = document.querySelector('#nombre');
const botonEnviar = document.querySelector('#botonEnviar');
// 2. Escuchar el evento click del botón
miBoton.addEventListener('click', function() {
  // 3. Cambiar el contenido del mensaje
  mensaje.textContent = '¡Hola, mundo!';
});

botonEnviar.addEventListener('click', function() {
  const nombreEscrito = nombre.value.trim();

  if (!nombreEscrito) {
    mensaje.textContent = 'Por favor, debe escribir su nombre.';
  } else if (nombreEscrito.length > 50) {
    mensaje.textContent = 'El nombre no es válido.';
  } else {
    mensaje.textContent = `¡Bienvenido, ${nombreEscrito}!`;
  }
});

const tarjeta = document.querySelector('#tarjeta');

document.querySelector('#colorAzul').addEventListener('click', function() {
  tarjeta.style.backgroundColor = 'blue';
});

document.querySelector('#colorVerde').addEventListener('click', function() {
  tarjeta.style.backgroundColor = 'green';
});

document.querySelector('#colorRojo').addEventListener('click', function() {
  tarjeta.style.backgroundColor = 'red';
});

document.querySelector('#restablecer').addEventListener('click', function() {
  tarjeta.style.backgroundColor = '#f2f2f2';
});