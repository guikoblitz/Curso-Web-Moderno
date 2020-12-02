function jurosSimples(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
    return (capitalInicial * (1 + taxa) ** tempo).toFixed(2)
}

console.log(jurosSimples(100, 0.1, 2));
console.log(jurosCompostos(100, 0.1, 2));