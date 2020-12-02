const filtrarNumeros = function (vetor) {
    const arrayNumeros = []
    for (let item of vetor) {
        if (typeof item === "number") {
            arrayNumeros.push(item)
        }
    }
    return arrayNumeros
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))