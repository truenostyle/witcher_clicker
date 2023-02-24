'use strict'

class FactoryEnemys {  
    static create(type) {  
        switch (type) {
            case "chydo": return new Create_chydo();
                break;
            case "dog": return new Create_dog();
                break;
        
            default: console.log("Error");
                break;
        }  
    }
} 

class Create_pers {
    constructor() {
        this.hp = 19;
        this.damage = 10; 
    } 
}

class Create_chydo {
    constructor() {
        this.hp = 250;
        this.width = 100; 
        this.damage = 15;
    } 
}

class Create_dog {
    constructor() {
        this.hp = 400;
        this.width = 100; 
        this.damage = 25;
    }
}

var pers = new Create_pers();
var chydo1 = FactoryEnemys.create("chydo");
var dog1 = FactoryEnemys.create("dog");

function fight_chydo() {
    var elem = document.getElementById("Chydo_Bar");    
    var proc = (100 * pers.damage) / chydo1.hp; 
    chydo1.width -= proc;
    elem.style.width = chydo1.width + '%'; 
    elem.innerHTML = chydo1.width * 1  + '%'; 
}

function fight_dog() {
    var elem = document.getElementById("Dog_Bar");    
    var proc = (100 * pers.damage) / dog1.hp; 
    dog1.width -= proc;
    elem.style.width = dog1.width + '%'; 
    elem.innerHTML = dog1.width * 1  + '%'; 
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