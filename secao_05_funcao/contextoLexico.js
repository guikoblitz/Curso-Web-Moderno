const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // vai imprimir 'Global' por causa do contexto lexico de declaração da função minhaFUncao()