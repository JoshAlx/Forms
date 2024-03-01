document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el formulario
  const form = document.getElementById('myForm');

  // Escuchamos el evento 'submit' del formulario
  form.addEventListener('submit', function(event) {
    // Prevenimos el comportamiento por defecto del formulario
    event.preventDefault();

    // Obtenemos los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Creamos un objeto con los datos del formulario
    const formData = {
      nombre: nombre,
      email: email,
      telefono: telefono
    };

    // Convertimos el objeto a JSON
    const formDataJSON = JSON.stringify(formData);

    // Guardamos los datos en el localStorage
    localStorage.setItem('formData', formDataJSON);

    // Mostramos un mensaje de éxito
    alert('¡Datos almacenados en el localStorage con éxito!');
    
    // Resetear el formulario después de enviarlo
    form.reset();
  });
});
  