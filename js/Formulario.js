let btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    var form = document.getElementById('inventario');

    // Captura los valores del formulario
    var nombre = document.getElementById('name').value;
    var imagenFile = document.getElementById('image').files[0]; // Obtiene el archivo de imagen
    var descripcion = document.getElementById('description').value;
    var precio = document.getElementById('price').value;

    let nombresern = new RegExp("^[A-ZÑa-z0-9ñáéíóúÁÉÍÓÚ'° ]+$");
    let descripcionern = new RegExp("^(?=.*[a-zA-Z0-9]).{3,100}$");
    let precioern = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
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
    if (imagenern.test(imagenFile.name)) {
        console.log('Nombre de archivo válido');
    } else {
        console.log('Nombre de archivo inválido');
    }

    if(nombresern.test(nombre)==true && descripcionern.test(descripcion)==true && precioern.test(precio)==true && imagenern.test(imagenFile.name)==true){
        var productos = JSON.parse(localStorage.getItem('productos')) || [];
        
        // Crear un FileReader para leer el archivo de imagen como base64
        var reader = new FileReader();
        reader.onload = function(event) {
            // Obtener la representación base64 de la imagen
            var base64Image = event.target.result;

            // Crear un objeto JSON con los valores capturados
            var producto = {
                "nombre": nombre,
                "img": base64Image, // Guarda la imagen como base64
                "descripcion": descripcion,
                "precio": "$" + precio
            };
            productos.push(producto);
        
            // Convierte la lista de objetos a una cadena JSON
            var productosJSON = JSON.stringify(productos);
        
            // Guarda la lista de objetos en localStorage
            localStorage.setItem('productos', productosJSON);
            // Puedes almacenar el JSON en una variable, enviarlo a través de una solicitud HTTP, etc.
            console.log(productosJSON); // Muestra el JSON en la consola para propósitos de depuración

            Swal.fire("Producto añadido correctamente");
            form.reset();
        };
        // Leer el archivo de imagen como base64
        reader.readAsDataURL(imagenFile);
        
    }else{
        Swal.fire({
            icon: "Error.",
            title: "No se agregó el producto.",
            text: "Vuelve a intentarlo.",
          });
    }

});