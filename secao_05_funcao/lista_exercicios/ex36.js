let vetor = [1, 2, 3, 4, 5]

const multiplicaVetor = function (vetor, multiplicador) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * multiplicador)
    }
    return resultado
}

console.log(multiplicaVetor(vetor, 3))