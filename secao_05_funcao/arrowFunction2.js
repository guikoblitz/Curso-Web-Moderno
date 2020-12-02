function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa // utilizando this em uma função arrow, o this não varia