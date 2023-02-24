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
        this.hp = 100;
        this.damage = 10; 
    } 
}

class Create_chydo {
    constructor() {
        this.hp = 100;
        this.width = 100; 
        this.damage = 15;
    } 
}

class Create_dog {
    constructor() {
        this.hp = 200;
        this.width = 100; 
        this.damage = 25;
    }
}

var pers = new Create_pers();
var chydo1 = FactoryEnemys.create("chydo");
var chydo2 = FactoryEnemys.create("chydo");

var dog1 = FactoryEnemys.create("dog");

function fight_chydo() {
    var elem = document.getElementById("Chydo_Bar");    
    var proc = (100 * pers.damage) / chydo1.hp; 
    chydo1.width -= proc;
    elem.style.width = chydo1.width + '%'; 
    elem.innerHTML = chydo1.width * 1  + '%'; 
    hit_Pers(chydo1.damage); 
    if (chydo1.width === 0) {
        var elem2 = document.getElementById("chydo1");  
        elem2.style.visibility = "hidden";
    }
}

function fight_chydo2() {
    var elem = document.getElementById("Chydo_Bar2");    
    var proc = (100 * pers.damage) / chydo2.hp; 
    chydo2.width -= proc;
    elem.style.width = chydo2.width + '%'; 
    elem.innerHTML = chydo2.width * 1  + '%'; 
    hit_Pers(chydo2.damage); 
    if (chydo2.width === 0) {
        var elem2 = document.getElementById("chydo2");  
        elem2.style.visibility = "hidden";
    }
}



function fight_dog() {
    var elem = document.getElementById("Dog_Bar");    
    var proc = (100 * pers.damage) / dog1.hp; 
    dog1.width -= proc;
    elem.style.width = dog1.width + '%'; 
    elem.innerHTML = dog1.width * 1  + '%';  
    hit_Pers(dog1.damage); 
}

function hit_Pers(damage) {
    let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    if (randomNum === 3 || randomNum === 6) {
        pers.hp -= damage;  
        Pers_damage(pers.hp) ;
    }
}

function Pers_damage(hp) {
    if (hp <= 0) {
        pers.hp = 0;
        hp = 0;
    } 
    var elem = document.getElementById("myBar");    
    elem.style.width = hp + '%'; 
    elem.innerHTML = hp * 1  + '%';  
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