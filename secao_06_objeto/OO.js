// CÓDIGO NÃO EXECUTÁVEL
// Ideias sobre o paradigma orientado a objetos

// Procedural
// Funções que manipulam dados
processamento(valor1, valor2, valor3)

// OO
// Dados que possuem funções, valores, dentro deles
objeto = {
    valor1, 
    valor2,
    valor3,
    processamento () {
        //...
    }
} // agrupa atributos e comportamentos

objeto.processamento() // a função pertence ao objeto
/*
O objeto encapsula comportamentos e atributos
Objeto pode conter outros objetos
Existe o conceito de herança, onde filho herda características do pai
A ideia é mapear o mundo em cima de objetos e trazer essa realidade para o software
O foco passou a ser o OBJETO, e antes era a função
*/

// Princípios importantes
/*
1. Abstração - entender como mapear o mundo e trazer isso para dentro do software
2. Encapsulamento - agrupar detalhes de implementação e mostrar apenas o que é necessário por meio de uma interface de interação
        Mudar a implementação interna ("o que fica escondido") de um objeto não necessariamente exige uma adaptação do usuário
        Essa adaptação só é necessária se a interface de comunicação também mudar
        Diminuir a interdependência entre objetos é um benefício do encapsulamento ao manter detalhes internalizados, que não irá gerar impacto fora do objeto
3. Herança (prototype) - recebe atributos e comportamentos de um objeto "pai"; herança é implementa em cima do conceito de prototipo no JavaScript
        Relações do tipo "é um", diferente da relação "tem um": o carro "tem portas" "tem motor"
        Já o ser humano "é um animal" -> "é um mamífero" -> "é um ser humano"
        Porém é melhor PRIORIZAR CMOPOSIÇÃO (tem um) do que utilizar a herança
4. Polimorfismo (multiplas formas) - a partir de um conceito genérico é possível substitui-lo por conceitos mais especificos e concretos
        A partir de uma variável de um tipo mais genérico é possível atribuir objetos/tipos mais específicos e concretos
*/
