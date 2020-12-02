// "içamento" o interpretador joga a variável para cima; 
console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* 
Na prática, o interpretador leu o código da seguinte maneira:
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/

// O mesmo acontece se estiver dentro da função
function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}

teste()

// utilizando o let

console.log('b = ', b)
let b = 2
console.log('b = ', b)

// ao utilizar o let, não é feito o hoisting, portanto retorna erro