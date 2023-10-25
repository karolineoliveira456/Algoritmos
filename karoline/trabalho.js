const leitor = require("readline-sync");

//   1:
let num = leitor.questionInt("diga um numero: ");
let num2 = leitor.questionInt("diga o segundo numero: ");
console.log(`${num + num2}`);

//   2:
let num4 = leitor.questionInt("diga um numero: ");
let num5 = leitor.questionInt("diga o outro numero: ");
console.log(`${num4 * num5}`);

//   3:
let num6 = leitor.question("diga um numero: ");
let num7 = leitor.questionInt("diga outro numero: ");
console.log(`${num6 / num7}`);

//   4:
let array = leitor.questionInt = [1, 2, 3, 4, 5]
array.splice(0, 1);
array.pop();
console.log(array);

//   5:
let string = leitor.question("escreva uma frase: ")
let vogais = string.match(/[aeiou]/g)
console.log(vogais);

//   6:
let consoantes1 = leitor.question("escreva uma frase: ")
let consoantes2 = consoantes1.match(/[^aeiou]/g)
console.log(consoantes2);

//   7:
let array2 = [1, 2, 3, 4, 5]

if(array2.length>=2){
    console.log(array2[array2.length - 1]);
} else {
    console.log("nao e possivel imprimir o ultimo numero pois o numero nao e maior que dois");
}

//   8:
let array3 = [1, 2]

if(array3.length<2){
    console.log(array3[array3.length - 2]);
} else {
    console.log("nao imprimiu pois so contem 1 numero");
}

// TIVE DIFICULDADE NA 7 E NA 8 !!!