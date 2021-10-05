
// theme toggle

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const body = document.querySelector('body');
const circle = document.getElementById('circle');


one.addEventListener('click',function(){
    body.classList.remove('theme2');
    body.classList.remove('theme3');
    circle.style.left = '15%';
})


two.addEventListener('click',function(){
   
    body.classList.add('theme2');
    body.classList.remove('theme3');
    circle.style.left='50%';
})


three.addEventListener('click',function(){

    body.classList.add('theme3');
    body.classList.remove('theme2');
    circle.style.left='85%';
})


window.addEventListener('DOMContentLoaded', ()=> {
    one.click();
})

// Basic 

let equalsButton = document.getElementById('equals');
let display = document.getElementById('display');
let btns = document.querySelectorAll('.button');

btns.forEach(button => {
    button.addEventListener('click', (e)=> {

        switch(e.target.innerText){
            case 'RESET': 
                display.innerText = '0';
                break;
            case 'DEL':
                if(display.innerText.length > 1){
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                } else {
                    display.innerText = '0';
                    break;
                }
            case '=':
                try {
                    display.innerText = eval(display.innerText).toLocaleString('en');
                } catch {
                    display.innerText = 'Error!';
                }
                break;
            case '.': {
                if(display.innerText.includes('.')){
                    return;
                }
                display.innerText += e.target.innerText;
                break;
            }
            case 'x': {
               const changeToAsterisk = '*';
               display.innerText += changeToAsterisk;
               break;
            }
            default: 
               if(display.innerText === '0'){
                   display.innerText = e.target.innerText;
               }else {
                   display.innerText = display.innerText + e.target.innerText;
               }
        }
    })
})
