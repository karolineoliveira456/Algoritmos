const leitor = require("readline-sync");

let nome = leitor.question("insira seu nome: ");
let cor = leitor.question("insira sua cor favorita: ");

console.log("a cor favorita de"+ nome +"e"+ cor);
console.log(`a cor favorita de ${nome} e ${cor}`);