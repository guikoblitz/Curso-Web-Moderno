const aumentoSalario = function(plano, salarioAtual){

    let novoSalario = 0

    switch(plano){
        case 'A':
            novoSalario = salarioAtual * 1.10
            return novoSalario
        case 'B':
            novoSalario = salarioAtual * 1.15
            return novoSalario
        case 'C':
            novoSalario = salarioAtual * 1.20
            return novoSalario
        default:
            return 'Plano de aumento inválido'
    }
}

console.log(aumentoSalario('A', 1000));
console.log(aumentoSalario('B', 1000));
console.log(aumentoSalario('C', 1000));
console.log(aumentoSalario('D', 1000));