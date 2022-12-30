

function encriptarTexto(){
    const texto = document.getElementById("input_texto").value.toLowerCase();

    if (texto == "") { 
  
        alert(" Ingresa texto para encriptar");
    
    } else {
        let txtCifrado = texto.replace(/e/igm, "enter");
         txtCifrado = texto.replace(/é/igm, "enter");
         txtCifrado = txtCifrado.replace(/o/igm, "ober");
         txtCifrado = txtCifrado.replace(/ó/igm, "ober");
         txtCifrado = txtCifrado.replace(/i/igm, "imes");
         txtCifrado = txtCifrado.replace(/í/igm, "imes");
         txtCifrado = txtCifrado.replace(/a/igm, "ai");
         txtCifrado = txtCifrado.replace(/á/igm, "ai");
         txtCifrado = txtCifrado.replace(/u/igm, "ufat");
         txtCifrado = txtCifrado.replace(/ú/igm, "ufat");

        document.getElementById("img").style.display = "none";
       // document.getElementById("texto").style.display = "none";
       document.getElementById("texto2").style.display = "show";
       document.getElementById("texto2").style.display = "inherit";
        document.getElementById("texto2").innerHTML = txtCifrado;
       document.getElementById("copiar").style.display = "show";
       document.getElementById("copiar").style.display = "inherit";
    }

}

const btnEncriptar = document.getElementById("btn-encriptar");
btnEncriptar.addEventListener("click", encriptarTexto);

function desencriptarTexto(){
    const texto = document.getElementById("input_texto").value.toLowerCase();

    if (texto == "") { 
  
        alert("Ingresa texto para desencriptar");
    
    } else {

        let txtCifrado = texto.replace(/enter/igm, "e");
        txtCifrado = texto.replace(/enter/igm, "é");
         txtCifrado = txtCifrado.replace(/ober/igm, "o");
         txtCifrado = txtCifrado.replace(/imes/igm, "i");
         txtCifrado = txtCifrado.replace(/ai/igm, "a");
         txtCifrado = txtCifrado.replace(/ufat/igm, "u");
         txtCifrado = txtCifrado.replace(/ufat/igm, "ú");

       // document.getElementById("imgDer").style.display = "none";
       // document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
       // document.getElementById("copiar").style.display = "show";
       // document.getElementById("copiar").style.display = "inherit";

    }
}

const btnDesencriptar = document.getElementById("btn-desencriptar");
btnDesencriptar.addEventListener("click", desencriptarTexto);

function copiar(){
    const contenido = document.querySelector("#texto2");
    const texto = document.getElementById("input_texto");
    contenido.select();
    
   // navigator.clipboard.writeText(contenido.value);
    document.execCommand("copy");
    alert("Texto copiado");

    texto.value = "";
    

}

const btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click", copiar);