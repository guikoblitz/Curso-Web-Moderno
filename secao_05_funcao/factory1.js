/*
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

Construir objetos dessa forma se tornaria muito repetitivo e pesado para o programa
*/

// Factory Simples
function criarPessoa() {
    return { // a função factory RETORNA UM OBJETO, uma instância de objeto
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())