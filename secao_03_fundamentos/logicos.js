function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // operador bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // a diferença "simula" um xor (ou exclusivo)
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
Operador E -> &&
v e v -> v
v e f -> f
f e ? -> f

Operador OU -> ||
v ou ? -> v
f ou v -> v
f ou f -> f

Operador XOR (OU EXCLUSIVO)
v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

Negação lógica
!v = f
!f = v
*/
