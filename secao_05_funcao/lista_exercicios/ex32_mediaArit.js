const mediaVetor = function (vetor) {
    let somatorio = 0
    let media = 0
    for (let i = 0; i < vetor.length; i++) {
        somatorio += vetor[i]
    }
    media = somatorio / vetor.length
    return media
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))