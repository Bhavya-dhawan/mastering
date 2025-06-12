
function createDiv(item) 
{
const div = document.createElement('li');
const text = document.createTextNode(item);
div.appendChild(text);

const button = document.createElement('button');
button.className = 'remove-item btn-link text-red';
button.innerHTML = '<i class="fa-solid fa-xmark"></i>';

div.appendChild(button);
document.querySelector('.items').appendChild(div);
}

createDiv('maple');



function run (){
    const itemlist = document.querySelector('ul')
    const item = document.querySelectorAll('li')

    item.forEach((item) => item.remove() )

}
const itemlist = document.querySelector('ul')
console.log(itemlist)
document.querySelector('#clear').onclick = run;

function open(){
    const nav = document.querySelector('.nav_container')
    nav.classList.remove('hidden')
}
function close(){
    const nav = document.querySelector('.nav_container')
    nav.classList.add('hidden')
}




document.querySelector('.button').addEventListener('click' , open)
document.querySelector('.close').addEventListener('click' , close)








