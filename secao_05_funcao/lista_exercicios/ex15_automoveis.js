const vendaAuto = function (auto) {
    switch(auto) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan': case 'motocicleta': case 'moto': case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

vendaAuto('hatch')
vendaAuto('perua')
vendaAuto('sedan')
vendaAuto('caminhonete')
vendaAuto('motocicleta')
vendaAuto('moto')
vendaAuto('jetski')