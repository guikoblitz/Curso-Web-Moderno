// O array final que o MAP atuou em cima terá o mesmo número de elementos
// O map NÃO MODIFICA o array atual, ele gera UM NOVO array

const nums = [1, 2, 3, 4, 5]

// For com propósito -> map
let resultado = nums.map(function (e) {
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10 // return implícito no arrow
const triplo = e => e * 3
const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // transformação suscessiva
console.log(resultado)
