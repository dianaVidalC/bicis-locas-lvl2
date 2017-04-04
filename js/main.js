function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name");
 var apellido = document.getElementById("lastname");
 var email = document.getElementById("input-email");
 var password = document.getElementById("input-password");
 var indice = document.getElementById("opcion");
 var namError=document.getElementById("name-error");
 var lastnamError=document.getElementById("lastname-error");
 var emailError=document.getElementById("email-error");
 var passwordError=document.getElementById("password-error");
 var selectError=document.getElementById("select-error");
//validar los 4 campos

    if(nombre.value==""){
      namError.appendChild(document.createTextNode("El Nombre es obligatorio"));
      nombre.focus();
    }else if (apellido.value=="") {
    lastnamError.appendChild(document.createTextNode("El Apellido es obligatorio"));
      apellido.focus();
    }else if(email.value==""){
      emailError.appendChild(document.createTextNode("El email es obligatorio"));
      email.focus();
   }else if(password.value==""){
     passwordError.appendChild(document.createTextNode("La contraseña es obligatoria"));
     password.focus();
   }else if(indice.value==0){
     selectError.appendChild(document.createTextNode("Seleccione un tipo de bicicleta"));
   }
 var patron=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
     if(!patron.test(nombre.value)){ //validar nombre
       namError.appendChild(document.createTextNode("Escriba la primera letra de su nombre con Mayúscula"));
       nombre.focus();
     }
     if(!patron.test(apellido.value)){//validar apellido
       lastnamError.appendChild(document.createTextNode("Escriba la primera letra de su apellido con Mayúscula"));
       apellido.focus();
     }
 var patron2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

     if(!patron2.test(email.value)){//validar correo
         emailError.appendChild(document.createTextNode("Ingrese un correo válido\nEjemplo : yo@ejemplo.com"));
       email.focus();
     }
         //validar password
     if(password.value.length<6){
       passwordError.appendChild(document.createTextNode("Su contraseña debe tener al menos 6 caracteres"));
       password.focus();
     }else if (password.value=="password"||password.value=="123456"|| password.value=="098754") {
       passwordError.appendChild(document.createTextNode("Su contraseña no puede ser " + password.value));
       password.focus();
     }
}
