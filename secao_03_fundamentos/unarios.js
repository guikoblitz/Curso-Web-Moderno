let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // não tem diferença usar -- ou ++ antes ou depois
console.log(num1)

console.log(++num1 === num2--) // o valor dá verdadeiro pois a comparação === foi executada ANTES que num2 fosse subtraído com --
console.log(num1 === num2)