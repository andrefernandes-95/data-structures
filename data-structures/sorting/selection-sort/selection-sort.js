function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let idxMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxMin]) {
        idxMin = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[idxMin];
    arr[idxMin] = temp;

    console.log();

    // Or Swap using destructuring
    // [arr[i], arr[idxMin]] = [arr[idxMin], arr[i]];
  }

  return arr;
}

console.log(selectionSort([10, 6, 3, 2, 9]));
