const body = document.querySelector('#user-input')
const key = document.querySelector('.key');
const keyCode = document.querySelector('.keycode');
const code = document.querySelector('.code');
const written = document.querySelector('.written');


function clicked (e){
    key.textContent = e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code
}

let vari = "";


function text(e){

    if(e.key === 'Backspace'){
        vari = vari.slice(0,-1)
    }
    else{
    vari = vari + e.key;
    }
    written.textContent = vari;
    
    
}

body.addEventListener('keypress' , clicked) 
body.addEventListener('keypress' , text)

