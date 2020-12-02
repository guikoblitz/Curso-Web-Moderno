const repetir = function (repeat, qtd) {
    let retorno = []
    for (let i = 0; i < qtd; i++) {
        retorno.push(repeat)
    }
    return retorno
}

/* Outra solução:
function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}
*/

console.log(repetir("codigo", 2))
console.log(repetir(7, 3))