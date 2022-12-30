

/* función para encriptar texto */
function encryptText(){
    const text = document.getElementById("input_text").value.toLowerCase();

    if (text == "") { 
  
        alert(" Ingresa texto para encriptar");
    
    } else {
        let encryptedText = text.replace(/e/igm, "enter");
        encryptedText = text.replace(/é/igm, "enter");
        encryptedText = encryptedText.replace(/o/igm, "ober");
        encryptedText = encryptedText.replace(/ó/igm, "ober");
        encryptedText = encryptedText.replace(/i/igm, "imes");
        encryptedText = encryptedText.replace(/í/igm, "imes");
        encryptedText = encryptedText.replace(/a/igm, "ai");
        encryptedText = encryptedText.replace(/á/igm, "ai");
        encryptedText = encryptedText.replace(/u/igm, "ufat");
        encryptedText = encryptedText.replace(/ú/igm, "ufat");

        document.getElementById("img").style.display = "none";
       
       document.getElementById("texto2").style.display = "show";
       document.getElementById("texto2").style.display = "inherit";
       document.getElementById("texto2").innerHTML = encryptedText;
       document.getElementById("copy").style.display = "show";
       document.getElementById("copy").style.display = "inherit";
       document.getElementById("nuevo").style.display = "show";
       document.getElementById("nuevo").style.display = "inherit";
       
    }

}

const btnEncrypt = document.getElementById("btn-encrypt");
btnEncrypt.addEventListener("click", encryptText);

/* función para desencriptar texto */
function decryptText(){
    const text = document.getElementById("input_text").value.toLowerCase();

    if (text == "") { 
  
        alert("Ingresa texto para desencriptar");
    
    } else {

        let decryptedText = text.replace(/enter/igm, "e");
        decryptedText = text.replace(/enter/igm, "é");
        decryptedText = decryptedText.replace(/ober/igm, "o");
        decryptedText = decryptedText.replace(/imes/igm, "i");
        decryptedText = decryptedText.replace(/ai/igm, "a");
        decryptedText = decryptedText.replace(/ufat/igm, "u");
        decryptedText = decryptedText.replace(/ufat/igm, "ú");

      
        document.getElementById("texto2").innerHTML = decryptedText;
        

    }
}

const btnDecrypt = document.getElementById("btn-decrypt");
btnDecrypt.addEventListener("click", decryptText);

/* función para copiar texto */
function copyText(){
    const content = document.querySelector("#texto2");
    const text = document.getElementById("input_text");
    content.select();
    
   navigator.clipboard.writeText(content.value);
   // document.execCommand("copy");
    alert("Texto copiado");

    text.value = "";
    

}

const btnCopy = document.getElementById("copy");
btnCopy.addEventListener("click", copyText);


/* vaciar input */

 const inputText = document.getElementById('input_text');
  inputText.addEventListener('click', function() {
    this.value = '';
  });

/* nueva palabra */

    const btnNew = document.getElementById('nuevo');
    btnNew.addEventListener('click', function() {
    
    document.getElementById("input_text").value = " ";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("copy").style.display = "none";
    document.getElementById("img").style.display = "show";
    document.getElementById("img").style.display = "inherit";
    });
         
