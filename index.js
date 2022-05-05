var form = document.getElementById('passinho');
var campo = document.getElementById('msg');
var msgsecreta = ''
var retorno = document.getElementById('result')   
var btn = document.getElementById('submit')
var select = document.getElementById('codemode')
var label = document.getElementById('inc')
var seletor = document.getElementById('incr')
var codmsg64= ''
var radios = document.getElementsByName("cod-decod")

form.addEventListener('submit', function(e) {
    msgsecreta = campo.value;
    submited();
    e.preventDefault();
});

form.addEventListener('submit', submited()) 

function codificar(){
    btn.value="Codificar!"
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        label.style.display="inline";
        seletor.style.display="inline";
    }else if(select.options[select.selectedIndex].text == "Base 64"){
        label.style.display="none";
        seletor.style.display="none";
    }else{
        label.style.display="none";
        seletor.style.display="none";
        alert("Selecione o método de codificar")
    }
    
}

function decodificar(){
    btn.value="Decodificar!"
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        label.style.display="inline";
        seletor.style.display="inline"
    }else{
        label.style.display="none";
        seletor.style.display="none"
    }
}

function submited(){
    if(radios[0].checked == true ){
        codSelected()
    }else if(radios[1].checked = true){
        decodSelected()
    }else{
    alert("algo deu errado")
    }
}


function codSelected(){
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        retorno.innerText = `${retornaCodCesar()}`;

    }else {
        cript64(msgsecreta)
        retorno.innerText = `${codmsg64}`
    }
}

function decodSelected(){
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        retorno.innerText = `${retornaDecodCesar()}`;;
     }else{
        decript64(msgsecreta)
        retorno.innerText = `${codmsg64}`
}
}

function cript64(texto){
    codmsg64 = window.btoa(texto)
    return codmsg64
}

function decript64(texto){
    codmsg64 = window.atob(texto)
    return codmsg64
}

function abcToNumber(texto){
    var arrayUCod = []
    for(i=0; i < texto.length; i++){
        arrayUCod.push(texto.charCodeAt(i))
    }
    return arrayUCod
}

function codCesar (){
    var arrayUCod = abcToNumber(msgsecreta)
    for(i=0 ; i < arrayUCod.length; i++){  
        if(arrayUCod[i] >= 65 && arrayUCod[i] < 91){
            arrayUCod[i]= (arrayUCod[i]-65+ parseInt(seletor.value)) % 26 +65 
        }else if(arrayUCod[i] >=97 && arrayUCod[i] < 123){
            arrayUCod[i]= (arrayUCod[i]-97+ parseInt(seletor.value)) % 26 +97 
           
        } else {
            arrayUCod[i] = arrayUCod [i]
        }
}

    return arrayUCod
}

function retornaCodCesar (){
    var arrayUCod = codCesar()
    var arraystring = ''
    var msgcodificada = ''
    for(i=0; i < arrayUCod.length; i++){
        arraystring = arrayUCod[i]
        msgcodificada += String.fromCharCode(arraystring)
    }
    return msgcodificada
}

function decodCesar (){
    var arrayUCod = abcToNumber(msgsecreta)
    for(i=0 ; i < arrayUCod.length; i++){  
        if(arrayUCod[i] >= 65 && arrayUCod[i] < 91){
            arrayUCod[i]= (arrayUCod[i]-90- parseInt(seletor.value)) % 26 +90 
        }else if(arrayUCod[i] >=97 && arrayUCod[i] < 123){
            arrayUCod[i]= (arrayUCod[i]-122- parseInt(seletor.value)) % 26 +122 
           
        } else {
            arrayUCod[i] = arrayUCod [i]
        }
}

    return arrayUCod
}

function retornaDecodCesar (){
    var arrayUCod = decodCesar()
    var arraystring = ''
    var msgcodificada = ''
    for(i=0; i < arrayUCod.length; i++){
        arraystring = arrayUCod[i]
        msgcodificada += String.fromCharCode(arraystring)
    }
    return msgcodificada
}