const button = document.querySelector('button');
const bodyElem = document.querySelector('body');
const img = document.querySelector('.moon');
let obj = 'star';

button.addEventListener('click' , () =>{
    if(button.innerHTML === 'Night'){
        button.innerHTML = 'Day';
        button.style.color = 'white';
        button.style.backgroundColor = 'black';
        bodyElem.classList.add('day');
        img.classList.add('sun');
        obj = 'bird';
    }

    else{
        bodyElem.classList.remove('day');
        button.innerHTML = 'Night';
        button.style.color = 'black';
        button.style.backgroundColor = 'white';
        img.classList.remove('sun');
        obj = 'star';
    }
})



bodyElem.addEventListener('mousemove' , (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const size = Math.random() * 100;
    const hue = Math.random() * 180;


    const fly = document.createElement('span');
    fly.classList.add(obj);
    fly.style.height = size + 'px';
    fly.style.width = size + 'px';
    // heart.style.filter = `hue-rotate(${hue}deg)`;

    fly.style.top = (yPos-50) + 'px';
    fly.style.left = (xPos-50) + 'px';

    bodyElem.appendChild(fly);

    setTimeout(() => {
        fly.remove();
    }, 2500);

});
