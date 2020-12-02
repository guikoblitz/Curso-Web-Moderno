// O nome que é dado à variáveis, classes, constantes é MUITO IMPORTANTE!
var a = 3
let b = 4
// Evitar o uso de var, utilizar o let

var a = 30 // O var não ocasiona erro se chamado novamente
b = 40 // O let não precisa ser chamado novamente

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 não é possível modificar o valor de uma constante, irá gerar erro
console.log(c)

/*
var, let e const são PALAVRAS RESERVADAS da linguagem JavaScript
Quanto mais constantes no programa, mais fácil sua manutenção
Dessa forma, se não houver motivo para uma variável ser alterada, declarar como ~const~
Isso evita que o dado seja reatribuído 
*/