let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    var form = document.getElementById('Registro');

     // Capturar los valores de los campos del formulario
     var nombre = document.getElementById('user').value;
     var telefono = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
     var contraseña = document.getElementById('contrasena').value;

     // Crear un objeto JavaScript con los valores capturados
     var usuario = {
         "nombre": nombre,
         "telefono": telefono,
         "email": email,
         "contraseña": contraseña
     };
     var currentIndex = localStorage.getItem('currentIndex');
        if (!currentIndex) {
            currentIndex = 1;
        } else {
            currentIndex = parseInt(currentIndex);
        }

     // Convertir el objeto JavaScript en una cadena JSON
     var usuarioJSON = JSON.stringify(usuario);
     var claveUsuario = 'usuario_' + currentIndex;
     localStorage.setItem(claveUsuario, usuarioJSON);
     localStorage.setItem('currentIndex', currentIndex + 1);

     // Limpiar el formulario después de guardar los datos
     form.reset();

     alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        Gracias por contactarnos.<br/>`);
        alertValidaciones.style.display="block";

     // Puedes redirigir a otra página aquí si lo deseas
 });
