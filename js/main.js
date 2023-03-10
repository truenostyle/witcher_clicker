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
        if (localStorage.getItem('pers.hp') !== null) {
            this.hp = localStorage.getItem('pers.hp');
            }
        else this.hp = 100;
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


var elem2 = document.getElementById("chydo1"); 
var elem21 = document.getElementById("chydo2"); 
var elem22 = document.getElementById("dog1");  

function fight_chydo() {
    if (localStorage.getItem('chydo1') !== null) chydo1.width = localStorage.getItem('chydo1');
    var elem = document.getElementById("Chydo_Bar");    
    var proc = (100 * pers.damage) / chydo1.hp; 
    chydo1.width -= proc;
    elem.style.width = chydo1.width + '%'; 
    elem.innerHTML = chydo1.width * 1  + '%';  
    localStorage.setItem('chydo1.width', chydo1.width); 
    if (chydo1.width <= 0) {   
        elem2.style.visibility = "hidden"; 
    }
    hit_Pers(chydo1.damage);
    checkLVL();
}

function fight_chydo2() {
    if (localStorage.getItem('chydo2') !== null) chydo2.width = localStorage.getItem('chydo2');

    var elem = document.getElementById("Chydo_Bar2");    
    var proc = (100 * pers.damage) / chydo2.hp; 
    chydo2.width -= proc;
    elem.style.width = chydo2.width + '%'; 
    elem.innerHTML = chydo2.width * 1  + '%';  
    localStorage.setItem('chydo2.width', chydo2.width); 
    if (chydo2.width <= 0) { 
        elem21.style.visibility = "hidden"; 
    }
    hit_Pers(chydo2.damage); 
    checkLVL();
}

function fight_dog() {
    if (localStorage.getItem('dog1') !== null) dog1.width = localStorage.getItem('dog1');
    var elem = document.getElementById("Dog_Bar");    
    var proc = (100 * pers.damage) / dog1.hp; 
    dog1.width -= proc;
    elem.style.width = dog1.width + '%'; 
    elem.innerHTML = dog1.width * 1  + '%';  
    localStorage.setItem('dog1.width', dog1.width);  
    if (dog1.width <= 0) {  
        elem22.style.visibility = "hidden";
    }
    hit_Pers(dog1.damage);
    checkLVL();
}

function hit_Pers(damage) {
    let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
    if (randomNum === 3 || randomNum === 6) {
        pers.hp -= damage;  
        Pers_damage(pers.hp) ;
    }
}

function Pers_damage(hp) {
    if (hp <= 0) 
    {
        hp = 100;
        pers.hp = 100;
        alert("game over");
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
    }
    
    var elem = document.getElementById("myBar");    
    elem.style.width = hp + '%'; 
    elem.innerHTML = hp * 1  + '%';  
    localStorage.setItem('pers.hp', pers.hp); 
}   

let lvl = 1;
function checkLVL()
{
    if (chydo1.width <= 0 && chydo2.width <= 0 && dog1.width <= 0 && lvl === 1) {
        alert("lvl2");
        var body = document.getElementById("body"); 
        body.style.backgroundImage = "url('./photo/background/Level\ 2.jpg')";
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
        lvl++;
    }
    if (chydo1.width <= 0 && chydo2.width <= 0 && dog1.width <= 0 && lvl === 2) {
        alert("lvl2");
        var body = document.getElementById("body"); 
        body.style.backgroundImage = "url('./photo/background/Level\ 3.png')";
        elem2.style.visibility = "visible";
        elem21.style.visibility = "visible";
        elem22.style.visibility = "visible";
        chydo1.width = 100;
        chydo2.width = 100;
        dog1.width = 100;
        lvl++;
    }
    
}