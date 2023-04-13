// VARIABLES

const textarea = document.querySelector("textarea"),
encryptBtn = document.getElementById("encrypt-btn"),
dencryptBtn = document.getElementById("dencrypt-btn"),
copyBtn = document.getElementById("copy-btn"),
muñeco = document.getElementById("muñeco"),
textH2 = document.getElementById("text-h2"),
textP = document.getElementById("text-p")

/*
CONDICION DE EJERCICIO:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/


// FUNCIÓN ENCRIPTADORA
const encrypt = () => {

    // MODAL POPUP: Si el span de error está activado y se selecciona encriptar, aparece el Popup
    const span = document.querySelector(".error-name"),
    modal = document.querySelector(".modal-container")
    if (span.classList.contains("invalid")) {
        return modal.classList.add("show")
    }

    // ENCRIPTACIÓN: Reemplazamos los valores e,o,i,a,u, los cuales se buscan de manera global (g) y en varias línea (m)
    let text = textarea.value
    let textEncrypt = text.replace(/e/gm, "enter")
    textEncrypt = textEncrypt.replace(/o/gm, "ober")
    textEncrypt = textEncrypt.replace(/i/gm, "imes")
    textEncrypt = textEncrypt.replace(/a/gm, "ai")
    textEncrypt = textEncrypt.replace(/u/gm, "ufat")
    
    // Cuando se encripte, se oculta el muñeco y el texto
    muñeco.style.display = "none"
    textH2.style.display = "none"
    textP.style.display = "none"
    
    // Mostramos el textarea de resultado, el texto encriptado, el botón copiar y asignamos el nuevo valor encriptado
    document.querySelector(".textarea-result").style.display = "flex"
    document.querySelector("#text-encrypt").style.display = "block"
    document.querySelector("#copy-btn").style.display = "block"
    
    document.querySelector("#text-encrypt").value = textEncrypt
}

// FUNCIÓN DESENCRIPTADORA
const dencrypt = () => {

    // MODAL POPUP: Si el span de error está activado y se selecciona encriptar, aparece el Popup
    const span = document.querySelector(".error-name"),
    modal = document.querySelector(".modal-container")
    if (span.classList.contains("invalid")) {
        return modal.classList.add("show")
    }

    // DESENCRIPTACIÓN: Proceso inverso a la encriptación
    let text = textarea.value
    let textDencrypt = text.replace(/enter/gm, "e")
    textDencrypt = textDencrypt.replace(/ober/gm, "o")
    textDencrypt = textDencrypt.replace(/imes/gm, "i")
    textDencrypt = textDencrypt.replace(/ai/gm, "a")
    textDencrypt = textDencrypt.replace(/ufat/gm, "u")

    // Cuando se desencripte, se oculta el muñeco y el texto
    muñeco.style.display = "none"
    textH2.style.display = "none"
    textP.style.display = "none"
    
    // Mostramos el textarea de resultado, el texto encriptado, el botón copiar y asignamos el nuevo valor desencriptado
    document.querySelector(".textarea-result").style.display = "flex"
    document.querySelector("#text-encrypt").style.display = "block"
    document.querySelector("#copy-btn").style.display = "block"
    
    document.querySelector("#text-encrypt").value = textDencrypt
}

// FUNCIÓN DE COPIAR TEXTO
const copyText = () => {
    let text = document.querySelector("#text-encrypt")
    navigator.clipboard.writeText(text.value)
}

// FUNCIÓN CONDICIÓN DE PALABRAS
const checkInput = (e) => {

    //Creamos la expresión regular para permitir todas las letras minúsculas y espacios hasta el final del string
    const regexp = new RegExp(/^[a-z\s]+$/)
    const span = document.querySelector(".error-name")
    
    // Si el texto del textarea cumple la regExp y no está vacío, remueve la clase "invalid" del span de error
    if (regexp.test(e.target.value) && e.target.value != ""){
        return span.classList.remove("invalid")
    } // Si no, añade la clase "invalid" y el span de error aparece
    span.classList.add("invalid")
    
}

document.addEventListener("click", e => {
    if (e.target == encryptBtn) encrypt()

    if (e.target == dencryptBtn) dencrypt()

    if (e.target == copyBtn) copyText()
    
    if (e.target.matches(".back-button")) {
        const modal = document.querySelector(".modal-container")
        modal.classList.remove("show")
    }
})

// Evento para verificar el texto cadda vez que soltamos una tecla
document.addEventListener("keyup", e => {
    if (e.target == textarea) checkInput(e)
})

// Evento para remover el span de error cuando no exista valor en el texto y damos click afuera
textarea.addEventListener("blur", e => {
    const span = document.querySelector(".error-name")
    if (textarea.value === ""){
        span.classList.remove("invalid")
    }
})

// Evento para dejar el texto vacío al recargar página
window.addEventListener("load", () =>{
    textarea.value = ""
} )