/**
 * 🧪 Exercise: Optimize
 * 
 * Given:
 
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true
    }
  }
  return false
}

👉 Rewrite to O(n).

 */

function hasDuplicate(arr) {
    const visited = new Map()

    let hasDuplicate = false;
    for (const n of arr) {
        if (visited.has(n)) {
            hasDuplicate = true;
            break;
        }

        visited.set(n, n)
    }

    return hasDuplicate
}

console.log(hasDuplicate([1, 2, 3, 2]))
