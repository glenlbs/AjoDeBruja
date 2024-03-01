let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores del formulario
    var nombre = document.getElementById('name').value;
    var imagen = document.getElementById('image').value;
    var descripcion = document.getElementById('description').value;
    var precio = document.getElementById('price').value;

    let nombresern = new RegExp("^[A-ZÑa-z0-9ñáéíóúÁÉÍÓÚ'° ]+$");
    let descripcionern = new RegExp("^(?=.*[a-zA-Z0-9]).{3,100}$");
    let precioern = new RegExp("^(?!0{4}$)[0-9]{1,4}$");
    let imagenern = new RegExp("\.(png|jpg)$");

    if(nombresern.test(nombre)){
        console.log("Es un nombre correcto");
    }else{
        console.log("Este no es nombre correcto");
    }
    if(descripcionern.test(descripcion)){
        console.log("Es una descripción correcta");
    }else{
        console.log("No es una descripción correcta");
    }
    if(precioern.test(precio)){
        console.log("Es un precio correcto");
    }else{
        console.log("No es un precio correcto");
    }
    if (imagenern.test(imagen)) {
        console.log('Nombre de archivo válido');
    } else {
        console.log('Nombre de archivo inválido');
    }

    if(nombresern.test(nombre)==true && descripcionern.test(descripcion)==true && precioern.test(precio)==true && imagenern.test(imagen)==true){
    // Crea un objeto JSON con los valores capturados
        var producto = {
            "nombre": nombre,
            "img": imagen,
            "descripcion": descripcion,
            "precio": precio
        };
    
        // Convierte el objeto JSON a una cadena JSON
        var productoJSON = JSON.stringify(producto);
    
        // Guarda el JSON en localStorage
        localStorage.setItem('producto', productoJSON);
        // Puedes almacenar el JSON en una variable, enviarlo a través de una solicitud HTTP, etc.
        console.log(productoJSON); // Muestra el JSON en la consola para propósitos de depuración

        Swal.fire("Producto añadido correctamente")
    }else{
        Swal.fire({
            icon: "error",
            title: "No se agregó el producto",
            text: "Vuelve a intentarlo.",
          });
    }

  });