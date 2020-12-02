class Pessoa {
    constructor(nome) {
        this.nome = nome // ao atribuit this.nome a variável se torna pública
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
console.log(p1.nome)
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    } // esse objeto tem consciência do contexto léxico em que foi declarado
}

const p2 = criarPessoa('João')
p2.falar()