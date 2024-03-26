let btnEnviar = document.getElementById("btnEnviar");
let txtname = document.getElementById("name");
let txtemail = document.getElementById("email");
let telefono = document.getElementById("telefono");
let txtmessage = document.getElementById("message");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidacionesTexto2 = document.getElementById("alertValidacionesTexto2");
let alertValidaciones = document.getElementById("alertValidaciones");
let textErrores = "";

document.addEventListener("DOMContentLoaded", function() {
   // Verificar si el usuario ya ha iniciado sesión en sesiones anteriores
var sesionIniciada = localStorage.getItem('sesionIniciada');
if (sesionIniciada && sesionIniciada === 'true') {
    // Agregar una clase al elemento <li> de la barra de navegación
    document.getElementById('cuentaNavItem').classList.add('sesion-iniciada');
}
});

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let pattern = new RegExp("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}");
    let telefonoern = new RegExp("^(?!.*(.)(?:.*\\1){4})[0-9]{10}$");
    let nombresern = new RegExp("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$");
    let messageern = new RegExp("^(?=.*[a-zA-Z0-9]).{3,100}$");
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    alertValidacionesTexto2.innerHTML="";
    alertValidaciones2.style.display="none";
    if(nombresern.test(txtname.value)){
        console.log("Es un nombre correcto");
    }else{
        // Swal.fire({
        //     icon: "error",
        //     title: "El nombre es incorrecto.",
        //     text: "Vuelve a intentarlo.",
        //   });
        // console.log("Este nombre es incorrecto");
        textErrores += `El nombre no permite caractéres especiales y números.`;
    }
    if(pattern.test(txtemail.value)){
        console.log("Es un correo correcto");
    }else{
        // console.log("Este correo es incorrecto");
        // Swal.fire({
        //     icon: "error",
        //     title: "El correo es incorrecto.",
        //     text: "Vuelve a intentarlo.",
        //   });
          textErrores += "<br/>El correo no debe estar sin caracteres antes y después del dominio, y del punto.";
    }
    let telefonoValue = telefono.value.replace(/\s/g, ''); // Eliminar espacios
    if (telefonoValue.length === 10 && !/(.)\1{4,}/.test(telefonoValue)) {
        console.log("Es un teléfono correcto");
    } else {
        // Swal.fire({
        //     icon: "error",
        //     title: "El teléfono es incorrecto.",
        //     text: "Vuelve a intentarlo.",
        //   });
        // console.log("Este teléfono es incorrecto");
        textErrores += "<br/>El teléfono debe ser de 10 caractéres y de diferentes digitos entre sí.";
    }
        
    if(messageern.test(txtmessage.value)){
        console.log("Es un mensaje correcto");
    }else{
        // Swal.fire({
        //     icon: "error",
        //     title: "El mensaje es incorrecto.",
        //     text: "Vuelve a intentarlo.",
        //   });
        // console.log("Este mensaje es incorrecto");
        textErrores += "<br/>El mensaje debe ser mayor a 3 caracteres y sin muchos caracteres especiales.";
    }

    if(nombresern.test(txtname.value)==true && pattern.test(txtemail.value) && telefonoern.test(telefono.value) && messageern.test(txtmessage.value)){
        alertValidaciones2.style.display="block";
        sendMail();
        Swal.fire("Gracias por contactarnos");
        // Limpiar los campos después de enviar correctamente
        txtname.value = "";
        txtemail.value = "";
        telefono.value = "";
        txtmessage.value = "";
        txtname.focus();
    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Vuelve a intentarlo.",
          });
        alertValidacionesTexto.insertAdjacentHTML("beforebegin", textErrores);
        alertValidaciones.style.display="block";
        textErrores = "";
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
        alertValidacionesTexto2.insertAdjacentHTML("beforebegin", `
        El correo se envió correctamente.<br/>`);
        alertValidaciones2.style.display="block";
        console.log("El correo se envió correctamente.");
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
