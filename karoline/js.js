const leitor = require("readline-sync");

let a = leitor.questionInt("diga o primeiro numero: ");
let b = leitor.questionInt("diga o segundo numero: ");
function soma(a, b) {
    return a + b
}
console.log(a + b);
