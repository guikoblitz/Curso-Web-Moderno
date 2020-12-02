const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// A função callback passada por um foreach possui 3 parâmetros

aprovados.forEach(function (nome, indice, array) { // O ÍNDICE SEMPRE DEVE SER PASSADO COMO SEGUNDO PARAMETRO
    console.log(`${indice + 1}: ${nome}`) // índice +1 pois o índice começa em 0
    console.log(array) // O ARRAY DEVE SER O TERCEIRO PARÂMETRO, e se houver um quarto parâmetro, ele será um undefined
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(indice +1, aprovado)
aprovados.forEach(exibirAprovados)