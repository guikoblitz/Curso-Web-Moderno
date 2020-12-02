const buscarPalavrasSemelhantes1 = function (busca, arrayStrings) {
    const resultado = []
    for (let palavra of arrayStrings) {
        if (palavra.includes(busca)) {
            resultado.push(palavra)
        }
    }
    return resultado
}

const buscarPalavrasSemelhantes = function (busca, arrayStrings) {
    return arrayStrings.filter(palavra => palavra.includes(busca))
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []