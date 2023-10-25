const leitor = require("readline-sync");


//exercicio 2:
//nao ha nada de errado com a questao.
//exercicio 1:
let a = leitor.questionInt("qual sua idade? ");
let b = leitor.questionInt("qual a idade de sua melhor amiga? ");
console.log(`sua idade e maior do que a do seu melhor amigo? ${a === b}`);
console.log(`o primeiro numero e diferente do segundo? ${a!==b}`) 
console.log(`qual a diferença de a e b: ${a/b}`)

// exercicio 2:
let c = leitor.questionInt("insira um numero par: ");
console.log(`resto da divisao: ${c%2}`);


//exercicio 3:
let idade = idade * 12
let meses = meses * 30
let horas = dias *24
console.log(`idade: ${idade} \nidade em mesees: ${meses} \nidade em horas: ${horas}`);

//exercicio 4:
let d = leitor.questionInt(`O primeiro numero é maior que segundo? //true
O primeiro numero é igual ao segundo? //false
O primeiro numero é divisível pelo segundo? //true
O segundo numero é divisível pelo primeiro? //true`)