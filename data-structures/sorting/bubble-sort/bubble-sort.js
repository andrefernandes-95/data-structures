function bubbleSort(arr) {
    let n = arr.length
    let swapped

    for (let i = 0; i < n - 1; i++) {
        swapped = false

        // Why n - i - 1 ?
        // For each passage, the biggest element bubbles to the last position
        // So the first passage, the last element is already in last place, i = 0
        // Second passage, the two last elements are already in last place, i = 1
        // Third passage, the three last elements are already in last place, i = 2

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }

        // If no swap, array is already sorted
        if (!swapped) break
    }
}

console.log(bubbleSort([10, 8, 15, 5, 6]))
