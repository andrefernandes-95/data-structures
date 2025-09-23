/**
 * Recursively subtracts 1 from the given number `n` until it reaches 0,
 * logging each value of `n` and finally logging 'End'.
 *
 * Recursion tree example for subtract(3):
 * 
 * subtract(3)
 *   └─ logs: 3
 *   └─ subtract(2)
 *        └─ logs: 2
 *        └─ subtract(1)
 *             └─ logs: 1
 *             └─ subtract(0)
 *                  └─ logs: 0
 *                  └─ logs: 'End'
 *
 * @param {number} n - The number to subtract from.
 * @returns {void}
 */
function subtract(n) {
    console.log(n)
    if (n > 0) {
        subtract(n-1)
    } else {
        console.log('End')
    }
}

subtract(3)
