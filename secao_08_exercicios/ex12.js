const removerPropriedade = function (objeto, propriedadeRemove) {
    const copia = { ...objeto }
    delete copia[propriedadeRemove]
    return copia
}


console.log(removerPropriedade({ a: 1, b: 2 }, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao"))

console.log(Object.is(removerPropriedade({ a: 1, b: 2 }, "a"), { a: 1, b: 2 }))