function validateForm(){
	/* Escribe tú código aquí */
   var nombre = document.getElementById("name");
   var apellido = document.getElementById("lastname");
   var email = document.getElementById("input-email");
   var password = document.getElementById("input-password");
   var indice = document.getElementById("option");
   var divContenedor=document.getElementsByClassName("input-box");
//validar los 4 campos

function validacion(mensaje,i){
  var span=document.createElement("span");
  span.setAttribute("id","span"+i);
  span.appendChild(document.createTextNode(mensaje));
  return span;
}
    if(nombre.value==""){
      if(document.getElementById("span1")==undefined){
      var tooltipNombre=validacion("El Nombre es obligatorio",1);
      divContenedor[0].appendChild(tooltipNombre);
     }
    }else if (nombre.value!="") {
        var span=document.getElementById("span1");
        if(span!=null){
        divContenedor[0].removeChild(span);
        }
      }
    if (apellido.value=="") {
      if(document.getElementById("span2")==undefined){
      var tooltipApellido=validacion("El Apellido es obligatorio",2);
      divContenedor[1].appendChild(tooltipApellido);
     }
    }else if (apellido.value!="") {
        var span=document.getElementById("span2");
        if(span!=null){
        divContenedor[1].removeChild(span);
      }
    }
    if(email.value==""){
      if(document.getElementById("span3")==undefined){
      var tooltipEmail=validacion("El email es obligatorio",3);
      divContenedor[2].appendChild(tooltipEmail);
    }
   }else if (email.value!="") {
       var span=document.getElementById("span3");
       if(span!=null){
       divContenedor[2].removeChild(span);
     }
    }
   if(password.value==""){
     if(document.getElementById("span4")==undefined){
     var tooltipPassword=validacion("La contraseña es obligatoria",4);
     divContenedor[3].appendChild(tooltipPassword);
    }
   }else if (password.value!="") {
       var span=document.getElementById("span4");
       if(span!=null){
       divContenedor[3].removeChild(span);
     }
   }
   if(indice.value==0){
     if(document.getElementById("span5")==undefined){
     var tooltipSelect=validacion("Seleccione un tipo de bicicleta",5);
     divContenedor[4].appendChild(tooltipSelect);
    }
  }else if (indice.value!=0) {
       var span=document.getElementById("span5");
       if(span!=null){
       divContenedor[4].removeChild(span);
     }
   }
 var patron=/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
     if(!patron.test(nombre.value) && nombre.value!=""){ //validar nombre
       if(document.getElementById("span6")==undefined){
       tooltipNombre= validacion("Escriba la primera letra de su nombre con Mayúscula",6);
       divContenedor[0].appendChild(tooltipNombre);
      }
    }else {
         var span=document.getElementById("span6");
         if(span!=null){
         divContenedor[0].removeChild(span);
       }
     }
     if(!patron.test(apellido.value) && apellido.value!=""){//validar apellido
       if(document.getElementById("span7")==undefined){
       tooltipApellido=validacion("Escriba la primera letra de su apellido con Mayúscula",7);
       divContenedor[1].appendChild(tooltipApellido);
      }
    }else{
         var span=document.getElementById("span7");
         if(span!=null){
         divContenedor[1].removeChild(span);
       }
      }
 var patron2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

     if(!patron2.test(email.value) && email.value!=""){//validar correo
       if(document.getElementById("span8")==undefined){
         tooltipEmail=validacion("Ingrese un correo válido\nEjemplo : yo@ejemplo.com",8);
         divContenedor[2].appendChild(tooltipEmail);
       }
     }else {
         var span=document.getElementById("span8");
         if(span!=null){
         divContenedor[2].removeChild(span);
       }
     }
         //validar password
     if(password.value.length<6 && password.value!=""){
       if(document.getElementById("span9")==undefined){
       tooltipPassword=validacion("Su contraseña debe tener al menos 6 caracteres",9);
       divContenedor[3].appendChild(tooltipPassword);
       }
      }else if (password.value=="password"||password.value=="123456"|| password.value=="098754") {
        if(document.getElementById("span10")==undefined){
         tooltipPassword=validacion("Su contraseña no puede ser " + password.value,10);
         divContenedor[3].appendChild(tooltipPassword);
        }
       }else{
           var span=document.getElementById("span10");
           if(span!=null){
           divContenedor[3].removeChild(span);
         }
       }
}
