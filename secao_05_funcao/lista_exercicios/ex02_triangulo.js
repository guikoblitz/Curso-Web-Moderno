function defTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Triângulo Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Triângulo Isósceles'
    } else {
        return 'Triângulo Escaleno'
    }
}

console.log(defTriangulo(2, 2, 2))
console.log(defTriangulo(2, 3, 3))
console.log(defTriangulo(2, 3, 4))