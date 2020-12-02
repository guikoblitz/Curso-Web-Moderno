const paresImpares = function (vetor) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares++
        } else if (vetor[i] % 2 != 0) {
            impares++
        }
    }

    console.log(`O vetor possui ${pares} números pares e ${impares} números ímpares.`)
}


vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)