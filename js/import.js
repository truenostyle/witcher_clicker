'use strict'

let imports = "chek_Save ";

for (let i = 0; i < chek_Save.length; i++) imports += chek_Save[i] + ","; 
imports += ";";
for (let j = 0; j < localArr.length; j++) imports += localStorage.getItem(localArr[j]) + ",";
imports += ";"; 

alert(imports);
