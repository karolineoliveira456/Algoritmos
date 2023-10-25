const leitor = require("readline-sync");
let a = 10
let b = 10
console.log(b) 
b = 5
console.log(a, b) 
//exercicio 2:
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c);
// exercicio 3: 
let p = leitor.questionInt("Quantas horas você trabalha por dia?", 8)
let t = leitor.questionInt("Quanto você recebe por dia?", 48)
console.log(Voce recebe ${t/p} por hora)
