const leitor = require("readline-sync");

// FILA: 

class Fila {
    constructor() {
        this.ticket = [];
    }

    enfileirar(element) {
        this.ticket.push(element);
    }

    desenfileirar() {
        if (this.isEmpty()) {
            return "A fila está vazia."
        }
        return this.ticket.shift();
    }


    topo() {
        if (this.isEmpty()) {
            return "A fila está vazia";
        }
        return this.ticket[this.ticket.length - 1];
    }

    tamanho() {
        return this.ticket.length;
    }
}

let fila = new Fila();
fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);
fila.enfileirar(4);
fila.enfileirar(5);
fila.enfileirar(6);
fila.enfileirar(7);
fila.enfileirar(8);
fila.enfileirar(9);
fila.enfileirar(10);

console.log(fila.desenfileirar());
console.log(fila.topo());
console.log(fila.tamanho());


// PILHA: 

class Pilha {
    constructor() {
        this.acao = [];
    }
    empilhar(element) {
        this.acao.push(element);
    }
    desempilhar() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.acao.pop();
    }
    topo() {
        if (this.isEmpty()) {
            return "A pilha está vazia";
        }
        return this.acao[this.acao.length - 1];
    }
    tamanho() {
        return this.acao.length;
    }
}

let pilha = new Pilha();
pilha.empilhar(1);
pilha.empilhar(2);
pilha.empilhar(3);
console.log(pilha.desempilhar());
console.log(pilha.topo());
console.log(pilha.tamanho()); 