const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 

/*
o operador ternário utiliza 3 operandos
a primeira parte do operador ternário: verificação de V ou F entre nota e 7
a segunda parte atribui Aprovado se for true e Reprovado se for false
*/

console.log(resultado(7.1))
console.log(resultado(6.7))