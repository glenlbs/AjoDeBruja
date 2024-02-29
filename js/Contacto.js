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
    let telefonoern = new RegExp("^(?!0{10}$)[0-9]{10}$");
    let nombresern = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
    let messageern = new RegExp("^(?=.*[a-zA-Z0-9]).{3,100}$");
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
        console.log("Es un Teléfono correcto");
    }else{
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El <strong> Teléfono </strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        console.log("Este no es un Teléfono correcto");
    }
    if(messageern.test(txtmessage.value)){
        console.log("Es un mensaje correcto");
    }else{
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El <strong> mensaje </strong> no es correcto.<br/>`);
        alertValidaciones.style.display="block";
        console.log("Este no es un mensaje correcto");
    }

    if(nombresern.test(txtname.value)==true && pattern.test(txtemail.value) && telefonoern.test(telefono.value) && messageern.test(txtmessage.value)){
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        Gracias por contactarnos.<br/>`);
        alertValidaciones.style.display="block";
        sendMail();
    }

    });

    function sendMail() {
        (function() {
            emailjs.init("NuzuoTIw9_09mAdgG"); // ID EmailJS
        })();
        var params = {
            txtname: document.getElementById("name").value,
            txtemail: document.getElementById("email").value,
            telefono: document.getElementById("telefono").value,
            txtmessage: document.getElementById("message").value,
        };
        var serviceID = "service_suoyq8b"; /// Email Service ID
        var templateID = "template_6a6ay6j"; /// Email Template ID
        emailjs.send(serviceID, templateID, params)
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `
        El correo se envio correctamente.<br/>`);
        alertValidaciones.style.display="block";
        console.log("El correo se envio correctamente");
    }

//Pruebas
//let ExpRegNomApe="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";
 
//let NomApeValido="Joel Francisco Gómez Castro";//Cadena de Nombres y Apellidos
//let NomApeinvalido="10 Morales";//Cadena de Nombres y Apellidos
     
//Evaluación de Cadena Valida de Nombres y Apellidos
// if(NomApeValido.match(ExpRegNomApe)!=null){
//     console.log("Nombres y Apellidos Válido");
// }else{
//     console.log("Nombres y Apellidos Invalido");
// }
