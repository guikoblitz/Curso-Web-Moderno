// É um princípio da OO que faz com que o objeto receba do pai atributos e comportamentos e com isso, o código seja reutilizado
// Se tiver que escolher entre herança e composição, preferir composição, já que herança só há 1 ancestral/pai
// Composição pode ser múltipla, aumentando a flexibilidade

// [[Prototype]] != prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // __proto__ mostra quem é o pai, onde será procurado um atributo caso não encontre em ferrari
//console.log(ferrari.prototype) // irá retornar undefined
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // Object.prototype é o mais alto da hierarquia

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)