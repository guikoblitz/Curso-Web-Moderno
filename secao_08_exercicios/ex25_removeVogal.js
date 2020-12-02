const removerVogais = function (frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase
}

console.log(removerVogais("Cod3r")) // retornará "Cd3r"
console.log(removerVogais("Fundamentos")) // retornará "Fndmnts"