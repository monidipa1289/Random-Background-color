const btn = document.querySelector('#first');
function change()
{
    
    let one =Math.floor(Math.random()*255) +1;
    let two =Math.floor(Math.random()*255) +1;
    let three =Math.floor(Math.random()*255) +1;
    document.body.style.backgroundColor= `rgb(${one} , ${two} , ${three})`;
    const h2=document.querySelector('h2');
    h2.innerText=`rgb(${one} , ${two} , ${three})`
}  
  
btn.addEventListener('click', change);