var _damageSword = 10;


function move() {
    var elem = document.getElementById("myBar");   
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (width <= 20) {
        clearInterval(id);
        } else {
        width -= _damageSword; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
        }
    }
}