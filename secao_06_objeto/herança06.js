function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando mais ou menos como acontece o new "por baixo dos panos"
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype // associou o prototipo do objeto ao prototype da função dada como parâmetro
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)