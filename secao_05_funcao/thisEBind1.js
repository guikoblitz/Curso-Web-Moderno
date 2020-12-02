const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // sem o this, ocorrerá erro de variável não definida
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e orientação à objeto
// nesse segundo caso, o falar está em outro contexto quando chamado direto no node

const falarDePessoa = pessoa.falar.bind(pessoa) 
// O bind é o método responsável por amarrar um objeto para que ele seja o "dono" da execução daquele método
// sempre que o this for referenciado, ele será o objeto passado na função bind
falarDePessoa()

// o bind não altera o pessoa.falar anterior, apenas o que está amarrado ao bind.