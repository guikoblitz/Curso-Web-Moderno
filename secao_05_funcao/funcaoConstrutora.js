function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

// o this é o responsável por tornar algo visível ao publico

const uno = new Carro // nesse caso não precisa chamar os parenteses, porém a função utilizará os valores padrão
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)