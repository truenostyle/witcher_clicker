var _damageSword = 10;
var HP_pers = 100;
var HP_chydo = 250;
var width = 100;
 
function move() {
    var elem = document.getElementById("myBar");    
    var proc = (100 * _damageSword) / HP_chydo; 
    width -= proc;
    elem.style.width = width + '%'; 
    elem.innerHTML = width * 1  + '%'; 
}





/*
function move() {
    var elem = document.getElementById("myBar");   
    var width = 100;
    var id = setInterval(frame, 10);
    function frame() { 
        if (width <= HP_chydo - _damageSword) {
        clearInterval(id);
        HP_chydo = HP_chydo - _damageSword;
        } 
        else {
        width -= _damageSword; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
        }
    }
}*/