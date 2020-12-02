// OBJETO é uma coleção/conjunto de chave/valor

const prod1 = {} // o par de chaves representa um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço!!!

console.log(prod1)
console.log('Preço: R$' + prod1.preco)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

/* 
Importante: JSON é DIFERENTE de objeto.
JSON é um FORMATO TEXTUAL. 
É possível gerar um JSON a partir de um objeto.
EXEMPLO de objeto transformado em JSON:

{ "nome": "Camisa Polo", "preco": 79.90}

*/