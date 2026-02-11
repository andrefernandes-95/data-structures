function multiply(base, n) {
    if (n>0) {
        const sum = base + multiply(base, n-1)
        return sum
    }
    return 0
}

console.log(multiply(3, 5))

// Better with a for loop for negative numbers
function multiply(base, n) {
    let result = 0
    for (let i = 0; i < Math.abs(n); i++) {
        result += base
    }
    return n < 0 ? -result : result
}