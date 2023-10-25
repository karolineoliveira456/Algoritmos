const leitor = require("readline-sync");

//exercicio verificando idade:
let idade = leitor.questionInt("diga sua idade: ");
if (idade >= 18) {
    console.log("e maior de idade") 
} else {
    console.log("e menor de idade")
}

//exercicio numero positivo ou negativo:
let numero = leitor.questionInt("diga um numero: ");
if (numero > 0) {
    console.log("numero positivo"); 
} else if (numero < 0) {
    console.log("numero negativo"); 
} else if (numero === 0) {
    console.log("numero igual a zero")
}

//exercicio senha:
let senha = leitor.questionInt("digite a senha: ");
if (123 === senha) {
    console.log("senha correta");
} else {
    console.log("senha incorreta");
}

//exercicio calculadora basica:
let numiro = leitor.questionFloat("diga um numiro: ");
let numiro1 = leitor.questionFloat("diga outro numiro: ");
let op = leitor.question("insira uma das opçoes: \n +: soma \n -: subtraçao \n: /: divisao \n *: multiplicaçao")
if (op === "+") {
    console.log(numiro + numiro1);
} else if (op === "-") {
    console.log(numiro1 - numiro2);
} else if (op === "*") {
    console.log(op === "/");
} else ( incorreto, tente novamete)

//exercicio maior de tres numeros:
let a = leitor.questionFloat("diga o num1: ");
let b = leitor.questionFloat("diga o num2: ");
let c = leitor.questionFloat("diga o num3: ");
if (a > b && a > c) 
console.log("o primeiro valor e o maior dentre todos");