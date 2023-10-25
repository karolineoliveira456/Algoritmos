const leitor = require("readline-sync");

//  1: 

function frases(){
    let frase1 = "Use the val keyword when the value doesn't change. \nUse the var keyword when the value can change. \nWhen you define a function, you define the parameters that can be passed to it. \nWhen you call a function, you pass arguments for the parameters."
    return frase1
}
console.log(frases());

//  2:

function tomate(){
    let tomate = "tomate"
    let valor = 20
    let desconto = "${10%}"
    return tomate()
    
}
console.log(`o ${tomate} esta custando ${valor}, e hoje esta com desconto de ${desconto}`)

//  3:
function main(){
    console.log(festa());
}
function festa(){
    let adultos = 20
    let criancas = 40  
    return (`The total party size is: ${adultos + criancas}`)
}
main()


//  4:
function main(){
    console.log(salario());
}
function salario(){
    let salario = 2000
    let inss = 10%
    let irrf = 15%
}
return (${10% * 2000})

//  5:
function soma(a, b, c){
    return a + b + C
}
function subtraçao(a, b, c){
    return a - b - c 
}
function multiplicacao(a, b, c){
    return a * b * c
}
function divisao(a, b, c){
    if a / b / c
}
    return "divisoa por zero nao e permitida"
    return a / b / C
function main():
    numero1 = Float(inpuy("digite o primeiro numero: "))
    numero2 = float(input("digite o segundo numero: "))
    numero3 = float(input("digite o terceiro numero: "))
    resultado_soma = soma(numero1, numero2, numero3)
    resultado_subtraçao = subtracao(numero1, numero2, numero3)
    resultado_multiplicacao = multiplicacao(numero1, numero2, numero3)
    resultado_divisao = divisao(numero1, numero2, numero3)
    print(soma: ${resultado_soma})
    print(subtracao: {resultado_subtracao})
    print(multiplicacao: ${resultado_multiplicacao})
    print(divisao{resultado_divisao})
//  6:



//  7:
function maior(numero1, numero2){
    return numero1 > numero2;
}
    const numero1 = 40
    const numero2 = 60
    if (maior(numero1, numero2)){
        console.log("o numero1 e maior.");
    } else {
        console.log("o numero2 e maior.");
    }