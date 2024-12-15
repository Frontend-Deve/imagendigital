// Selecciona el formulario y el contenedor de mensajes
const formulario = document.querySelector('.formulario');
const mensaje = document.getElementById('mensaje');

// Escucha el evento de envío
formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = formulario.querySelector('input[placeholder="Tu Nombre"]').value.trim();
  const apellido = formulario.querySelector('input[placeholder="Tu Apellido"]').value.trim();
  const correo = formulario.querySelector('input[placeholder="Tu Email"]').value.trim();
  const mensajeTexto = formulario.querySelector('textarea').value.trim();

  // Limpia cualquier mensaje previo
  mensaje.textContent = '';
  mensaje.classList.remove('error', 'exito');
  mensaje.style.display = 'none';

  // Validación: Mostrar mensaje de error si algún campo está vacío
  if (!nombre || !apellido || !correo || !mensajeTexto) {
    mensaje.textContent = 'Todos los campos son requeridos.';
    mensaje.classList.add('error');
    mensaje.style.display = 'block'; // Muestra el mensaje

    // Oculta el mensaje después de 5 segundos
    setTimeout(() => {
      mensaje.style.display = 'none';
    }, 4000);

    return;
  }

  // Mostrar mensaje de éxito si todo está lleno
  mensaje.textContent = '¡Tu mensaje se envío con éxito, gracias!';
  mensaje.classList.add('exito');
  mensaje.style.display = 'block'; // Muestra el mensaje

  // Oculta el mensaje después de 5 segundos
  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 4000);

  // Limpia los campos del formulario
  formulario.reset();
});








