const leitor = require("readline-sync");


// FOR e uma funcao. - significa PARA;


//1:
for( let i = 0;i < 11; i++){
    console.log(i);
}

//2:
let numero = leitor.questionInt("diga um numero de 1 a 10: ");
for( let i = 0;i < 11; i++){
    console.log(i*numero);
}

//3:
for(let i = 0; i < 50; i++){
    console.log(i);
}

//4:
function primeNumber(num) {
    let num = 0;
    for (let i = 0; i <= num; i++){
        if ((num % 1 === 0) && (num % num === 0)){

        }
    }
}
console.log(primeNumber(num));

//5:
let fatorial = leitor.questionInt("escreva um numero: ");
let resultado = fatorial;
for (let i = 1; i < fatorial; i++){
    resultado *= i;
}
console.log(resultado);

