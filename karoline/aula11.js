const leitor = require("readline-sync");

//exercicio 1:
let a = leitor.questionInt("insira o primeiro valor: ");
let b = leitor.questionInt("insira o segundo valor: ");
let soma = a+b
console.log('a soma dos dois valores e: ${3+4}');
//exercicio 2:
let c = leitor.questionInt("insira o primeiro valor: ");
let d = leitor.questionInt("insira o segundo valor: ");
console.log('o resultado da multip. e ${(c+d)/c}');
//exercicio 3:
let e = leitor.questionInt("subtrair 5 de 4");
let f = leitor.questionInt("multiplicar o resultado por -1");
console.log('o valor final e: ${soma}');
//exercicio 4:
let g = leitor.questionInt("insira o primeiro valor: ");
let h = leitor.questionInt("insira o segundo valor: ");
let resto = a%b 
console.log('o resto da divisao e: %{soma}');