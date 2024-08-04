const textArea = document.querySelector(".text_area"); // aquí guardo lo que el usuario ingresa
const mensaje = document.querySelector(".mensaje-final"); // Guardo el texto modificado (encriptado o desencriptado)


function clearTextAreas() {
    textArea.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('imagenes/busqueda_encriptado.png')";
}



function boton_encriptar() {
    const textoEncriptado = encriptarTexto(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    console.log("textoEncriptado");
}

function encriptarTexto(texto_usuario) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto_usuario = texto_usuario.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto_usuario.includes(matrizCodigo[i][0])) {
            texto_usuario = texto_usuario.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto_usuario;
}

function boton_desencriptar() {
    const textoDesencriptado = desencriptarTexto(textArea.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
}

function desencriptarTexto(texto_usuario) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    texto_usuario = texto_usuario.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto_usuario.includes(matrizCodigo[i][0])) {
            texto_usuario = texto_usuario.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto_usuario;
}

function CopiarTexto() {
    const textoSalida = document.querySelector(".mensaje-final");
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
