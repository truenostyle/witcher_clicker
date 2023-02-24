'use strict'
let randomTime = Math.floor(Math.random() * 3000);
let randomY = Math.floor(Math.random() * window.innerHeight);
let randomX = Math.floor(Math.random() * window.innerWidth);

for(let i = 0; i < 5; i++)
{
    let image = document.createElement("img");
    image.src = "./photo/items/healpotion.png";
    image.style.position = "absolute";
    image.style.top = randomY + "px";
    image.style.left = randomX + "px";
    image.style.width = "100px";
    image.style.height = "100px";
    setTimeout(function() {
        document.body.appendChild(image);
        }, randomTime);

}


