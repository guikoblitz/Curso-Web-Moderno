function inverso(valor) {
    const tipo = typeof valor

    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else return 'Booleano ou número esperado, mas o parâmetro é de outro tipo'
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))