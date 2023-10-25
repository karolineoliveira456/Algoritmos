const leitor = require("readline-sync");


//  1 a:
function meusDados(){
    let nome = "Meu nome e Karoline, tenho 23 anos, moro em Sao Leopoldo e sou estudante";
    return nome
}
console.log(meusDados());

//  1 b:
function dados(nome2, idade, endereço, profissao){
    console.log(`meu nome e ${nome2}, tenho ${idade} anos, moro em ${endereço}, e trabalho como ${profissao}`);
}
let nome2 = leitor.question("diga seu nome: ");
let idade = leitor.questionInt("diga sua idade: ");
let endereço = leitor.question("qual seu endereço: ");
let profissao = leitor.question("qual sua profissao: ");
dados(nome2, idade, endereço, profissao)

//  2 a:
function numeros(numero1, numero2){
    console.log(`a soma de ${numero1} + ${numero2} da o total de: ${numero1 + numero2} `); //ou
    return numero1 + numero2
}
let numero1 = leitor.questionInt("diga o primeiro numero: ");
let numero2 = leitor.questionInt("diga o segundo numero: ");
numeros(numero1, numero2)

//  2 b:
function numero (num1, num2){
    return (num1 >= num2)
}
let num1 = leitor.questionInt("diga o primeiro numero: ");
let num2 = leitor.questionInt("diga o segundo numero: ");
numero(num1, num2)
console.log(`${num1 >= num2}`);

//  2 c:
function par (a){
    return (a%2)===0
}
let num = leitor.questionInt("diga um numero: ");
console.log(par(num));

//  2 d :
function frase(fraesTeste){
    console.log(fraesTeste.length);
    console.log(fraseTeste.toUpperCase());
}
let fraseTeste = leitor.question("insira uma frase: ")
frase(fraseTeste)

// 3:
