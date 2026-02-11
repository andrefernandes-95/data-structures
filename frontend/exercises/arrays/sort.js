const unsorted = [5, 15, 10, 3, 1];

const sortBubbleArray = (arr) => {
  let isDone = false;

  let n = arr.length;

  while (!isDone) {
    let isSorted = true;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = false;
      }
    }

    n--; // Last element is now locked in place
    if (isSorted) isDone = true;
  }

  return arr;
};

console.log(sortBubbleArray(unsorted));
