let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let textErrores = "";

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('Login');

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        var email = document.getElementById('user').value;
        var contraseña = document.getElementById('contrasena').value;

        // Obtener los datos del usuario almacenados en localStorage
        var currentIndex = localStorage.getItem('currentIndex');
        var usuarioEncontrado = false;

        alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";

        // Verificar si hay usuarios almacenados en localStorage
        if (currentIndex) {
            currentIndex = parseInt(currentIndex);
            for (var i = 1; i <= currentIndex; i++) {
                var claveUsuario = 'usuario_' + i;
                var usuarioJSON = localStorage.getItem(claveUsuario);
                var usuario = JSON.parse(usuarioJSON);
                
                // Comprobar si los datos coinciden con algún usuario almacenado
                if (usuario.email === email && usuario.contraseña === contraseña) {
                    usuarioEncontrado = true;
                    // Guardar el estado de sesión iniciada en localStorage
                    localStorage.setItem('sesionIniciada', 'true');
                    // Realizar acciones después de iniciar sesión, como redireccionar a otra página
                    // Por ejemplo, window.location.href = "página de inicio.html";
                    Swal.fire('Inicio de sesión exitoso');
                    window.location.href = "../index.html";
                    break;
                }// }else{
                //     Swal.fire({
                //         icon: "error",
                //         title: "Error",
                //         text: "Vuelve a intentarlo.",
                //       });
                //     alertValidacionesTexto.insertAdjacentHTML("beforeend", textErrores);
                //     alertValidaciones.style.display="block";
                //     textErrores = "";
                // }
            }
        }

        // Si no se encontró el usuario, mostrar un mensaje de error
        if (!usuarioEncontrado) {
            Swal.fire('Correo electrónico y/o contraseña incorrectas. Por favor, inténtalo de nuevo.');
        }

        // Limpiar el formulario después de intentar iniciar sesión
        form.reset();
    });

    // Verificar si el usuario ya ha iniciado sesión en sesiones anteriores
    var sesionIniciada = localStorage.getItem('sesionIniciada');
    if (sesionIniciada && sesionIniciada === 'true') {
        // Realizar acciones después de detectar que el usuario ya ha iniciado sesión
        // Por ejemplo, redirigir a la página de inicio
        Swal.fire('Inicio de sesión exitoso');
        window.location.href = "../index.html";
    }
});