const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // acessa array que não existe e retorna 

valores[4] = 10
console.log(valores)

//caso seja inserido um valor em um índice muito maior
/*
valores[10] = 10
console.log(valores)

Nesse caso, ele retornaria o array explicando que há valores vazios entre 
o último índice que possui valor (4) e o índice adicionado (10)
*/

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adiciona valores ao array
console.log(valores)

// o ideal é ter arrays específicos para cada tipo no código 
// ou então para cada lista que você precisa organizar no código, exemplo:
// produtos, fornecedores, clientes, etc.

console.log(valores.pop()) // retira do array o valor e retorna o valor retirado
delete valores[0]
console.log(valores)

console.log(typeof valores)