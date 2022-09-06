
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


const inputEncriptador = document.querySelector(".input-texto");
const mensaje  = document.querySelector(".mensaje");



function btnencriptar(){


      const  textoEncriptado = encriptar(inputEncriptador.value);
      mensaje.value = textoEncriptado;
      inputEncriptador.value = ""
     
      
 
  
}



function encriptar(mensajeEncriptado){

         
              let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "obter"], ["u", "ufat"]];
            
              mensajeEncriptado = mensajeEncriptado.toLowerCase();

     
              for ( let i = 0; i < matrizCodigo.length; i++) {

                      if (mensajeEncriptado.includes(matrizCodigo[i][0])){
                      
                          mensajeEncriptado = mensajeEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
                         
                      }
                     
              }   
              return mensajeEncriptado
              
             
              
}





function btndesencripta(){


  const  textoEncriptado = descencriptar(inputEncriptador.value);
  mensaje.value = textoEncriptado;
  inputEncriptador.value = ""
  
 


}


function descencriptar(mensajeDesencriptado) {

         
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "obter"], ["u", "ufat"]];

  mensajeDesencriptado = mensajeDesencriptado.toLowerCase();


  for ( let i = 0; i < matrizCodigo.length; i++) {

          if (mensajeDesencriptado.includes(matrizCodigo[i][1])){
          
              mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

          }

  }   
  return mensajeDesencriptado;
}



function copiar(){


mensaje.select()
navigator.clipboard.writeText(mensaje.value);
mensaje.value= "";
alert("El texto a sido copiado. ");




}








