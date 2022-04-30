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

function cript64(texto){
    codmsg64 = window.btoa(texto)
    return codmsg64
}

function decript64(texto){
    codmsg64 = window.atob(texto)
    return codmsg64
}

function codSelected(){
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        alert("Codificar César");
    }else {
        cript64(msgsecreta)
        retorno.innerText = `${codmsg64}`
    }
}

function decodSelected(){
    if(select.options[select.selectedIndex].text == "Cifra de César"){
        alert("Decodificar César");
     }else{
        decript64(msgsecreta)
        retorno.innerText = `${codmsg64}`
}
}