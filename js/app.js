
  function vaciarInput() {
    document.getElementById("input_text").value = "";
  }
    
  
/* función para encriptar texto */
function encryptText(){
    let lowercaseLetter = /^[a-zñ\s]+$/g;
    
    const text = document.getElementById("input_text").value;

 
    if (text == "" ) { 
        
        

        Swal.fire({
            icon: 'info',
            title: 'Atenciòn',
            text: ' Ingresa algún texto para encriptar',
           
          })
    
    } else if (text.match(lowercaseLetter) == null) {
       

       Swal.fire({
        icon: 'warning',
        title: 'Atenciòn',
        text: 'Ingresa solo letras minúsculas y sin acentos',
       
      })

        vaciarInput();
    }
    else {
        let encryptedText = text.replace(/e/igm, "enter");
       
        encryptedText = encryptedText.replace(/o/igm, "ober");
       
        encryptedText = encryptedText.replace(/i/igm, "imes");
       
        encryptedText = encryptedText.replace(/a/igm, "ai");
       
        encryptedText = encryptedText.replace(/u/igm, "ufat");
       

        document.getElementById("img").style.display = "none";
        document.getElementById("aviso").style.display = "none";
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
  
        

        Swal.fire({
            icon: 'info',
            title: 'Atenciòn',
            text: 'Ingresa texto para desencriptar',
          })
    
    } else {

        let decryptedText = text.replace(/enter/igm, "e");
        decryptedText = decryptedText.replace(/ober/igm, "o");
        decryptedText = decryptedText.replace(/imes/igm, "i");
        decryptedText = decryptedText.replace(/ai/igm, "a");
        decryptedText = decryptedText.replace(/ufat/igm, "u");
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
   
   

   Swal.fire({
    icon: 'success',
    text: 'El texto fue copiado !',
  })

    text.value = "";
    

}

const btnCopy = document.getElementById("copy");
btnCopy.addEventListener("click", copyText);


/* vaciar input */

 const inputText = document.getElementById('input_text');
  inputText.addEventListener('click', function() {
    this.value = '';
  });

  

    function newText() {
        document.getElementById("input_text").value = "";
        document.getElementById("texto2").style.display = "none";
        document.getElementById("nuevo").style.display = "none";
        document.getElementById("copy").style.display = "none";
        document.getElementById("img").style.display = "show";
        document.getElementById("img").style.display = "inherit";
        document.getElementById("aviso").style.display = "show";
        document.getElementById("aviso").style.display = "inherit";
        
    }

    const btnNew2 = document.getElementById('nuevo');
    btnNew2.addEventListener('click', newText);
         
    