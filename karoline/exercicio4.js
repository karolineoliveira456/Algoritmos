const leitor = require("readline-sync");

//exercicio 4: 
//a
let numero1 = leitor.questionInt
let numero2 = leitor.questionInt("diga outro numero: ");
console.log("O primeiro numero é maior que segundo?", numero1>numero2)
console.log(numero1===numero2)
