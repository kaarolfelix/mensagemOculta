var cesar = ()=>{
    msgCesar.style.display = 'flex'
    msgBase64.style.display = 'none'
}
var base64 = ()=>{
    msgCesar.style.display = 'none'
    msgBase64.style.display = 'flex'
}


function codificar(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return String.fromCharCode(((code - 65 + key) % 26) + 65)
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 + key) % 26) + 97)
        } else return c }).join('')    
}
function decodificar(arr, key){
    return arr.map((c)=>{
        let code = c.charCodeAt();
        if(code >= 65 && code <= 90){
            return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
        } else if(code >= 97 && code <= 122){
            return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
        } else return c }).join('')    
}
function bas64(input, decide){
    return (decide)? btoa(input) : atob(input)
}

var opcoes = document.getElementById('selecao');
var fieldset = document.getElementById('fieldset');
var msgCesar = document.getElementById('cesar');
var msgBase64 = document.getElementById('B64');

selecao.addEventListener('change',()=>{
    (selecao.value == 'base64')? base64() : cesar(); 
});

document.getElementById('input').addEventListener('keyup', (c)=>{
    let chave = parseInt(document.getElementById('chave').value);
    let input = document.getElementById('input').value.split('');
    let output = document.getElementById('output');
    let decide = document.getElementById('codfCesar').checked

    if(decide){
        output.value = codificar(input, chave);
    } else {
        output.value = decodificar(input, chave)
    }
       
})
document.getElementById('input2').addEventListener('keyup', (c)=>{
    let input = document.getElementById('input2').value
    let output = document.getElementById('output2');
    let decide = document.getElementById('opcao').checked
    output.value = bas64(input, decide)
})


