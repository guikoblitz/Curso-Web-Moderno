let pontuacao1 = "10, 20, 20, 8, 25, 3, 0, 30, 1"
let pontuacao2 = "30, 40, 20, 4, 51, 8, 42, 38, 56, 0"

function avaliaPontuacao(pontuacao) {
    let pontuacoes = pontuacao.split(", ")
    let recordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        console.log(`indice: ${i} pontos: ${pontuacoes[i]}`)
        if (Number(pontuacoes[i]) > Number(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            console.log("Novo recorde")
            recordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [recordes, piorJogo]
}

console.log(avaliaPontuacao(pontuacao1))
console.log(avaliaPontuacao(pontuacao2))