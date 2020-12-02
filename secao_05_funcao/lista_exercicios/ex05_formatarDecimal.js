function formataDecimal(valorDecimal) {
    let emReais = `R$${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(emReais)
}

formataDecimal(0.1 + 0.2)