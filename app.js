document.addEventListener('DOMContentLoaded', () => {
    const encriptarBtn = document.querySelector('.button_slide.slide_left:nth-of-type(1)');
    const desencriptarBtn = document.querySelector('.button_slide.slide_left:nth-of-type(2)');
    const copiarTextoBtn = document.getElementById('copiarTexto');
    const inputTextArea = document.querySelector('.input-text');
    const outputSection = document.querySelector('.salida');
    const mensajeTituloSalida = document.querySelector('.mensaje_titulo_salida');
    const mensajeInfo = document.querySelector('.mensaje_info');
    const outputTextArea = document.createElement('textarea');
    outputTextArea.className = 'output-text';
    outputTextArea.setAttribute('readonly', true);
    
    // Función para encriptar el texto
    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Función para mostrar el texto encriptado/desencriptado en la caja de salida
    function mostrarResultado(texto) {
        outputTextArea.textContent = texto;
        mensajeTituloSalida.textContent = texto ? 'Texto procesado' : 'Ningún mensaje fue encontrado';
        mensajeInfo.textContent = texto ? '' : 'Ingresa el texto que desees encriptar o desencriptar.';
        copiarTextoBtn.style.display = texto ? 'block' : 'none';
        outputSection.appendChild(outputTextArea);
    }

    // Función para copiar el texto al portapapeles
    function copiarTexto() {
        outputTextArea.select();
        document.execCommand('copy');
    }

    // Evento del botón Encriptar
    encriptarBtn.addEventListener('click', () => {
        const texto = inputTextArea.value.toLowerCase();
        if (texto) {
            const textoEncriptado = encriptarTexto(texto);
            mostrarResultado(textoEncriptado);
        } else {
            mostrarResultado('');
        }
    });

    // Evento del botón Desencriptar
    desencriptarBtn.addEventListener('click', () => {
        const texto = inputTextArea.value;
        if (texto) {
            const textoDesencriptado = desencriptarTexto(texto);
            mostrarResultado(textoDesencriptado);
        } else {
            mostrarResultado('');
        }
    });

    // Evento del botón Copiar texto
    copiarTextoBtn.addEventListener('click', copiarTexto);
});
