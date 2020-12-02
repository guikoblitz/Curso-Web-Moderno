const observarIntervalo = function (vetor) {
    let dentroIntervalo = 0
    let foraIntervalo = 0

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentroIntervalo++
        } else if (vetor[i] < 10 || vetor[i] > 20) {
            foraIntervalo++
        }
    }
    return `Dentro do intervalo: ${dentroIntervalo} Fora do intervalo: ${foraIntervalo}`
}

vetor = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))