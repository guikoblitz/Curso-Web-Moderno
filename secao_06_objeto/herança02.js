// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso!!!!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // irá encontrar attr3 em filho, sem precisar recorrer ao mesmo atributo em pai

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, vai sobrepor o atributo velMax de carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // relação entre ferrari e carro (ferrari tem carro como seu protótipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // mostra apenas os atributos locais
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status()) // nesse momento, mesmo o "this" na função status() de carro está referenciando ferrari, e não carro, por isso retorna a velMax de ferrari
