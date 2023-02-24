var _damageSword = 10;
var HP_pers = 19;
var HP_chydo = 250;
var HP_dog = 400;
var width_chydo = 100;
var width_dog = 100;


function fight_chydo() {
    var elem = document.getElementById("Chydo_Bar");    
    var proc = (100 * _damageSword) / HP_chydo; 
    width_chydo -= proc;
    elem.style.width = width_chydo + '%'; 
    elem.innerHTML = width_chydo * 1  + '%'; 
}


function fight_dog() {
    var elem = document.getElementById("Dog_Bar");    
    var proc = (100 * _damageSword) / HP_dog; 
    width_dog -= proc;
    elem.style.width = width_dog + '%'; 
    elem.innerHTML = width_dog * 1  + '%'; 
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