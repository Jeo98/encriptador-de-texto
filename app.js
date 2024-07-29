document.getElementById('boton-encriptar').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encriptarTexto(inputText);
    
    document.getElementById('mensaje-titulo-salida').innerText = 'Texto Encriptado';
    document.getElementById('mensaje-info').innerText = encryptedText;
    document.getElementById('boton-copiarTexto').style.display = 'block';
});

document.getElementById('boton-copiarTexto').addEventListener('click', function() {
    const encryptedText = document.getElementById('mensaje-info').innerText;
    copiarTextoAlPortapapeles(encryptedText);
});

function encriptarTexto(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function copiarTextoAlPortapapeles(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado al portapapeles');
}
