const calculadora = function(x, y, operacao){
    switch(operacao){
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, 3, '+'))
console.log(calculadora(2, 3, '-'))
console.log(calculadora(2, 3, '*'))
console.log(calculadora(2, 3, '/'))
console.log(calculadora(2, 3, 'a'))
