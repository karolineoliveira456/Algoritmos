const leitor = require("readline-sync");
const leitor = require(`readline`).createInterface({
    inpur: process.stdin,
    output: process.stdout
});

// 1:
console.log("hello word");

// 2:
let aa;
let bb;
let x;
leitor.question("", a => {
    leitor.question("", b =>{
        x = a + b;
        console.log(`X = ${c}`);
    })
})

// 3:
let pi = 3.14159;
let raio = parseFloat(lines.shift());
let area;
let resultado;
area = pi * (raio*raio)
resultado = area.toFixed(4)
console.log(`A=${resultado}`);


// 4:
let a;
let b;
let soma;
leitor.question("" , a => {
    leitor.question("", b => {
        soma = number(a) + number(b)
        console.log(`soma = ${soma}`);
    })
})