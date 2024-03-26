let btnAgregar = document.getElementById("btnAgregar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let textErrores = "";

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    var form = document.getElementById('Registro');

     // Capturar los valores de los campos del formulario
     var nombre = document.getElementById('user').value;
     var telefono = document.getElementById('telefono').value;
     var email = document.getElementById('email').value;
     var contraseña = document.getElementById('contrasena').value;
     var contraseñaDos = document.getElementById('contrasenaDos').value;

    let pattern = new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}");
    let nombresern = new RegExp("^[A-ZÑa-zñ0-9áéíóúÁÉÍÓÚ'° ]+$");
    let telefonoern = new RegExp("^(?!.*(.)(?:.*\\1){4})[0-9]{10}$");
    let contrasenaern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\u0021-\u002b\u003c-\u0040])[A-Za-z0-9\u0021-\u002b\u003c-\u0040]{8,}$");
    //\u0021-\u002b\u003c-\u0040
    //let contrasenaern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$")
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    
    if (contraseña == contraseñaDos){
        console.log("Las contraseñas sí coinciden");
    } else {
        console.log("Las contraseñas no coinciden");
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden.",
            text: "Vuelve a intentarlo.",
          });
    }
    // if (contrasenaern.test(contraseñaDos)) {
    //     console.log('Contraseña 2 valida');
    // } else {
    //     console.log('Contraseña 2 no valida');
    // }
    if (contrasenaern.test(contraseña)) {
        console.log('Contraseña 1 válida');
    } else {
        //  console.log('Contraseña 1 no válida');
        //  Swal.fire({
        //      icon: "error",
        //      title: "La contraseña no es válida. Debe tener al menos 8 carácteres, entre ellos: 1 mayúscula, 1 minúscula, 1 dígito y 1 caracter especial.",
        //      text: "Vuelve a intentarlo.",
        //    });
        textErrores += `La contraseña debe ser de al menos ocho caracteres, una letra mayúscula, una letra minúscula, un dígito y un caracter especial.`;
    }
    if(pattern.test(email)){
        console.log("Es un correo correcto");
    }else{
        //  console.log("Es un correo incorrecto");
        //  Swal.fire({
        //      icon: "error",
        //      title: "El correo electrónico es incorrecto.",
        //      text: "Vuelve a intentarlo.",
        //    });
        textErrores += `<br/>El correo no debe estar sin caracteres antes y después del dominio, y del punto.`;
    }
    let telefonoValue = telefono.replace(/\s/g, ''); // Eliminar espacios
    if (telefonoValue.length === 10 && !/(.)\1{4,}/.test(telefonoValue)) {
        console.log("Es un teléfono correcto");
    } else {
        // Swal.fire({
        //      icon: "error",
        //      title: "El teléfono es incorrecto.",
        //      text: "Vuelve a intentarlo.",
        //    });
        // console.log("Este teléfono es incorrecto");
        textErrores += `<br/>El teléfono debe ser de 10 caractéres y de diferentes digitos entre sí.`;
    }
    if(nombresern.test(nombre)){
        console.log("Es un nombre correcto");
    }else{
        // console.log("Este nombre es incorrecto");
        // Swal.fire('El nombre es incorrecto.');
        textErrores += `<br/>El nombre no permite caractéres especiales y números.`;
    }

    // Obtener la cantidad total de usuarios registrados
    var totalUsuarios = localStorage.getItem('currentIndex');

    // Verificar si el nombre, correo o número telefónico ya están en uso
    for (var i = 1; i <= totalUsuarios; i++) {
        var claveUsuario = 'usuario_' + i;
        var usuarioJSON = localStorage.getItem(claveUsuario);
    
        // Verificar si usuarioJSON no es null
        if (usuarioJSON !== null) {
            var usuario = JSON.parse(usuarioJSON);
    
            if (usuario.nombre === nombre) {
                // El nombre ya está en uso
                Swal.fire('El nombre ' + nombre + ' ya está en uso.');
                console.log('El nombre ya está en uso');
                return; // Debes eliminar este return
            }
    
            if (usuario.email === email) {
                // El correo electrónico ya está en uso
                Swal.fire('El correo electrónico ' + email + ' ya está en uso.');
                console.log('El correo electrónico ya está en uso');
                return; // Debes eliminar este return
            }
    
            if (usuario.telefono === telefono) {
                // El número telefónico ya está en uso
                Swal.fire('El número telefónico ' + telefono + ' ya está en uso.');
                console.log('El número telefónico ya está en uso');
                return; // Debes eliminar este return
            }
        }
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
        //console.log("No pudiste registrarte.")
        Swal.fire({
               icon: "error",
               title: "No pudiste registrarte.",
               text: "Vuelve a intentarlo.",
           });
        alertValidacionesTexto.insertAdjacentHTML("beforebegin", textErrores);
        alertValidaciones.style.display="block";
        textErrores = "";
        }
 });

