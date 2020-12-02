const mult = function (num1, num2) {
    let total = 0
    if (num1 == 0 || num2 == 0) {
        return 0
    } else {
        for (let i = 0; i < num2; i++) {
            total += num1
        }
    }
    return total
}

console.log(mult(5, 5))
console.log(mult(0, 7))