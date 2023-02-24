'use strict'

let hitAnim = document.getElementsByClassName("img_enemy"); 

for (let i = 0; i < hit.length; i++)
{
    hitAnim[i].addEventListener("click", function(event) {
        shakeImage(hitAnim[i]);
    });
}

function shakeImage(img) {
    var intervalId;
    var x = 0;
  
    intervalId = setInterval(function() {
      x = x + 0.1;
      var y = Math.sin(x) * 10;
      img.style.transform = "translate(" + y + "px, " + y + "px)";
      if (x >= 3) {
        clearInterval(intervalId);
        img.style.transform = "none";
      }
    }, 20);
  }