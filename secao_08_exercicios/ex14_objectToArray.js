// DUAS FORMAS

const objetoParaArray1 = function (objeto) {
    return Object.entries(objeto)
}

const objetoParaArray = function (objeto) {
    const resultado = []

    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
})) // irá retornar [["codigo", 11111], ["preco", 12000]]