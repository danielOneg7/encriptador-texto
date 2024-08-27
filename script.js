const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")
const mensajesc2 = document.querySelector(".contenedorMensaje")

  // La letra "e" es convertida para "enter"
  // La letra "i" es convertida para "imes"
  // La letra "a" es convertida para "ai"
  // La letra "o" es convertida para "ober"
  // La letra "u" es convertida para "ufat"
function btnEncriptar(){
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage="none"
  mensajesc2.remove()
}
function encriptar (stringEncriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado =stringEncriptado.toLowerCase()
  for(let i=0; i<matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringEncriptado
}
function btnDesencriptar(){
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}
function desencriptar (stringDesencriptado){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptado =stringDesencriptado.toLowerCase()
  for(let i=0; i<matrizCodigo.length;i++){
    if(stringDesencriptado.includes(matrizCodigo[i][1])){
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
  }
  return stringDesencriptado
}
async function copiarTexto() {
  try {
      // Obtén el área de texto
      var textarea = document.querySelector(".mensaje");
      // Copia el contenido al portapapeles usando la API moderna
      await navigator.clipboard.writeText(textarea.value);
      // Muestra un mensaje de confirmación
      alert("Texto copiado al portapapeles!");
  } catch (err) {
      console.error("Error al copiar el texto: ", err);
      alert("No se pudo copiar el texto.");
  }
}
