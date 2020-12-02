// let tem escopo de bloco, mesmo não sendo função
// também tem escopo de função e global

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)