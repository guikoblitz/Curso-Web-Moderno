const contarPalavras = function (string) {
    const palavras = string.split(' ')
    return palavras.length
}

console.log(contarPalavras("Sou uma frase")) // retornará 3
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5