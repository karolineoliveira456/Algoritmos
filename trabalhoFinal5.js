const leitor = require("readline-sync");

//Questão 1: Operações Básicas.
//1
let soma1 = leitor.questionInt("diga um numero: ")
let soma2 = leitor.questionInt("diga um numero: ")
let resultado = soma1 + soma2
console.log(resultado);

//2
let mult1 = leitor.questionInt("diga um numero: ")
let mult2 = leitor.questionInt("diga um numero: ")
let resultado2 = mult1 * mult2
console.log(resultado2);

//3
let ex1 = 10
let ex2 = 10
let ex3 = 2
let resultado3 = ex1 + ex2 * ex3
console.log(resultado3);

//Questão 2: Manipulação de Strings.
//1

//Questão 3: Objetos e Métodos.
function Pessoa(nome, idade, profissao) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.apresentar = `Nome: ${this.nome} \nIdade: ${this.idade} \nProfisssao: ${this.profissao}`
}
function cadastro(){
    let nome = leitor.question("informe o seu nome: ")
    let idade = leitor.questionInt("informe a sua idade: ")
    let profissao = leitor.question("informe sua profissao: ")
    let Pessoas = new Pessoa(nome, idade, profissao)
    return Pessoas
}

let nomedois = cadastro()

console.log(nomedois.apresentar);

