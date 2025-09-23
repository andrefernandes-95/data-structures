
/**
 * Recursively subtracts from `n` down to 1, printing each value after the recursive call returns.
 *
 * The function first makes a recursive call with `n - 1`, traversing down to the base case (`n <= 0`).
 * After reaching the base case, the call stack unwinds and each value of `n` is printed in ascending order.
 *
 * @param {number} n - The starting integer to subtract from.
 */
function subtract(n) {
    if (n > 0) {
        subtract(n-1)
        console.log(n)
    }
}

subtract(3)
