console.log(soma(3, 4))
// console.log(sub(3, 4)) -> sub is not defined nesse caso
// console.log(mult(3, 4)) -> mult ocorre o mesmo caso

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))

// named function expression - pouco utilizada
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))