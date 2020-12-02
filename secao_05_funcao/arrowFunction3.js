let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // em ambiente Node; no browser, seria comparação com "window"

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // contexto léxico
comparaComThisArrow(global) // função arrow não aponta para o global
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // a arrow function é mais forte que o bind
comparaComThisArrow(module.exports)
