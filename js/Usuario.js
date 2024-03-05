let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    var form = document.getElementById('Registro');

     // Capturar los valores de los campos del formulario
     var nombre = document.getElementById('user').value;
     var telefono = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
     var contraseña = document.getElementById('contrasena').value;
     var contraseñaDos = document.getElementById('contrasenaDos').value;

    let pattern = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    let nombresern = new RegExp("^[A-ZÑa-zñ0-9áéíóúÁÉÍÓÚ'° ]+$");
    let telefonoern = new RegExp("^(?!^[0-4]{10}$)[0-9]{10,10}$");
    let contrasenaern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\u0021-\u002b\u003c-\u0040])[A-Za-z0-9\u0021-\u002b\u003c-\u0040]{8,}$");
    //\u0021-\u002b\u003c-\u0040
    //let contrasenaern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$")
    
    if(nombresern.test(nombre)){
        console.log("Es un nombre correcto");
    }else{
        console.log("Este no es nombre correcto");
    }
    if(telefonoern.test(telefono)){
        console.log("Es un telefono correcto");
    }else{
        console.log("No es un telefono correcto");
    }
    if(pattern.test(email)){
        console.log("Es un correo correcto");
    }else{
        console.log("No es un correo correcto");
    }
    if (contrasenaern.test(contraseña)) {
        console.log('Contraseña 1 valida');
    } else {
        console.log('Contraseña 1 no valida');
    }
    // if (contrasenaern.test(contraseñaDos)) {
    //     console.log('Contraseña 2 valida');
    // } else {
    //     console.log('Contraseña 2 no valida');
    // }
    if (contraseña == contraseñaDos){
        console.log("Contraseñas si coinciden");
    } else {
        console.log("Contraseñas no coinciden");
    }

    if(nombresern.test(nombre)==true && telefonoern.test(telefono)==true && pattern.test(email)==true && contrasenaern.test(contraseña)==true && contraseña == contraseñaDos){
        Swal.fire('Registrado exitosamente el usuario ' + nombre + '.');
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

    // alertValidacionesTexto.insertAdjacentHTML("beforeend", `
    //    Gracias por contactarnos.<br/>`);
    //    alertValidaciones.style.display="block";

    // Puedes redirigir a otra página aquí si lo deseas
    }else{
        Swal.fire({
            icon: "error",
            title: "No pudiste registrate.",
            text: "Vuelve a intentarlo.",
          });
        }
 });


 let contrasenatres="JfKas3477%";
