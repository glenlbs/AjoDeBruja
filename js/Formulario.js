 
 document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores del formulario
    var nombre = document.getElementById('name').value;
    var imagen = document.getElementById('image').value;
    var descripcion = document.getElementById('description').value;
    var precio = document.getElementById('price').value;

    // Crea un objeto JSON con los valores capturados
    var producto = {
      "Nombre": nombre,
      "Imagen": imagen,
      "Descripción": descripcion,
      "Precio": precio
    };

    // Convierte el objeto JSON a una cadena JSON
    var productoJSON = JSON.stringify(producto);

    // Guarda el JSON en localStorage
    localStorage.setItem('producto', productoJSON);
    // Puedes almacenar el JSON en una variable, enviarlo a través de una solicitud HTTP, etc.
    console.log(productoJSON); // Muestra el JSON en la consola para propósitos de depuración
  });