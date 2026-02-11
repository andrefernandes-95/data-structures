function flatten(arr) {
    const stack = [...arr]
    const result = []

    while(stack.length) {
        const next = stack.pop()

        if (Array.isArray(next)) {
            // if it's an array, unpack it onto the stack
            stack.push(...next)
        } else {
            result.push(next)
        }
    }

    // Reverse since we inserted from last to first
    return result.reverse()
}

const output = flatten([1, [2, [3, [4, 5]]]])
console.log(output)

// Sidenote: Syntax of pushing a spread array
const arrayTeste = []
// The spread operator ... “expands” that array into individual arguments.
arrayTeste.push(...[1, 2, 3]) // equivalent to arrayTeste.push(1, 2, 3)
console.log(arrayTeste)

// push(...[1, 2, 3]) → pushes each element individually
// push([1, 2, 3]) → pushes the array as one element