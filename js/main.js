function validateForm(){
	/* Escribe tú código aquí */
  var nombre = document.getElementById("name");
 var apellido = document.getElementById("lastname");
 var email = document.getElementById("input-email");
 var password = document.getElementById("input-password");
 var indice = document.getElementById("opcion");
//validar los 4 campos

    if(nombre.value==""){
      alert("El Nombre es obligatorio");
      nombre.focus();
      return false;
    }else if (apellido.value=="") {
      alert("El Apellido es obligatorio");
      apellido.focus();
      return false;
    }else if(email.value==""){
      alert("El email es obligatorio");
      email.focus();
      return false;
   }else if(password.value==""){
     alert("La contraseña es obligatoria");
     password.focus();
     return false;
   }else if(indice.value==0){
      alert("Seleccione un tipo de bicicleta");
      return false;
   }
 var patron=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
     if(!patron.test(nombre.value)){ //validar nombre
       alert("Escriba la primera letra de su nombre con Mayúscula");
       nombre.focus();
       return false;
     }
     if(!patron.test(apellido.value)){//validar apellido
       alert("Escriba la primera letra de su apellido con Mayúscula");
       apellido.focus();
       return false;
     }
 var patron2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

     if(!patron2.test(email.value)){//validar correo
       alert("Ingrese un correo válido\nEjemplo : yo@ejemplo.com");
       email.focus();
       return false;
     }
         //validar password
     if(password.value.length<6){
       alert("Su contraseña debe tener al menos 6 caracteres");
       password.focus();
       return false;
     }else if (password.value=="password"||password.value=="123456"|| password.value=="098754") {
       alert("Su contraseña no puede ser " + password.value);
       password.focus();
       return false;
     }
}
