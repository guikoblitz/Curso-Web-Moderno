let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retira os parenteses quando tem um unico parametro / retorno implícito quando tira as chaves

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá' // O _ é um parâmetro válido e não significa ausência de parametro, mas ao chamar a função pode ser ignorado

console.log(ola())