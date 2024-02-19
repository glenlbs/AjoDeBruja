let btnEnviar = document.getElementById("btnEnviar");
let txtname = document.getElementById("name");
let txtemail = document.getElementById("email");
let telefono = document.getElementById("telefono");
let txtmessage = document.getElementById("message");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let pattern = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    let telefonoern = new RegExp("[0-9]{10}");
    let nombresern = new RegExp("^[A-Za-z]{4,10}$");
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    if(nombresern.test(txtname.value)){
        console.log("Es un nombre correcto");
    }else{
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El <strong> Nombre </strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        console.log("Este no es nombre correcto");
    }
    if(pattern.test(txtemail.value)){
        console.log("Es un correo correcto");
    }else{
        console.log("Este no es correo correcto");
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El <strong> Correo </strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
    }
    if(telefonoern.test(telefono.value)){
        console.log("Es un telefono correcto");
    }else{
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El <strong> Telefono </strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        console.log("Este no es un telefono correcto");
    }
    });