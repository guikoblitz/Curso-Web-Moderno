function aprovaAluno(nota) {
    let notaFinal = arredondaNota(nota)
    if (notaFinal >= 40) {
        console.log(`Aluno aprovado com nota: ${notaFinal}`)
    } else {
        console.log(`Aluno reprovado com nota: ${notaFinal}`)
    }
}

function arredondaNota(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

aprovaAluno(100)
aprovaAluno(30)
aprovaAluno(38)
aprovaAluno(88)
aprovaAluno(61)