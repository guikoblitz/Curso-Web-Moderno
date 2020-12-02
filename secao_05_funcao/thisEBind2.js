/*function Pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // recebe a função como parâmetro e um intervalo em milissegundos
}*/

function Pessoa() {
    this.idade = 0

    const self = this
    
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // recebe a função como parâmetro e um intervalo em milissegundos
}

new Pessoa