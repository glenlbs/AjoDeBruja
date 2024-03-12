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
        console.log("Este nombre es incorrecto");
        Swal.fire('El nombre es incorrecto.');
    }
    let telefonoValue = telefono.value.replace(/\s/g, ''); // Eliminar espacios
    if (telefonoValue.length === 10 && !/(.)\1{4,}/.test(telefonoValue)) {
        console.log("Es un teléfono correcto");
    } else {
        Swal.fire({
            icon: "error",
            title: "El teléfono es incorrecto.",
            text: "Vuelve a intentarlo.",
          });
        console.log("Este teléfono es incorrecto");
    }
    if(pattern.test(email)){
        console.log("Es un correo correcto");
    }else{
        console.log("Es un correo incorrecto");
        Swal.fire('El correo electrónico es incorrecto.');
    }
    if (contrasenaern.test(contraseña)) {
        console.log('Contraseña 1 válida');
    } else {
        console.log('Contraseña 1 no válida');
        Swal.fire('La contraseña no es válida. Debe tener 1 mayúscula, 1 minúscula, 1 dígito, 1 caracter especial y al menos 8 caracteres.');
    }
    // if (contrasenaern.test(contraseñaDos)) {
    //     console.log('Contraseña 2 valida');
    // } else {
    //     console.log('Contraseña 2 no valida');
    // }
    if (contraseña == contraseñaDos){
        console.log("Las contraseñas sí coinciden");
    } else {
        console.log("Las contraseñas no coinciden");
        Swal.fire('Las contraseñas no coinciden');
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
        Swal.fire({
            icon: "error",
            title: "No pudiste registrate.",
            text: "Vuelve a intentarlo.",
          });
        }
 });


 let contrasenatres="JfKas3477%";
