function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i];
    var j = i - 1;

    // Shift elements to the right until the correct spot is found
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element in the correct position
    arr[j + 1] = current;

    console.log(arr);
  }
}

console.log(insertionSort([7, 3, 8, 5, 1]));

// 3, 7, 8, 5, 1
// 3, 7, 8, 8, 1
// 3, 7, 5, 8, 1
