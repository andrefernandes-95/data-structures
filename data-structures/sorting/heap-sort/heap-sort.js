const heapSort = (arr) => {
  const n = arr.length;

  // Step 1: Build a max heap (like a pyramid where parent >= children)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    // Check each parent and push the largest value to the top of the subtree
    heapify(arr, n, i);
  }

  // Step 2: Extract the largest elements one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current largest (root of heap) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Rebuild the heap for the remaining elements (ignore the sorted part)
    heapify(arr, i, 0);
  }

  return arr;
};

const heapify = (array, heapLength, parentIdx) => {
  let largestIdx = parentIdx;

  const leftChildIdx = 2 * parentIdx + 1;
  const rightChildIdx = 2 * parentIdx + 2;

  // If left child exists and is bigger than current largest
  if (leftChildIdx < heapLength && array[leftChildIdx] > array[largestIdx]) {
    largestIdx = leftChildIdx;
  }

  // If right child exists and is bigger than current largest
  if (rightChildIdx < heapLength && array[rightChildIdx] > array[largestIdx]) {
    largestIdx = rightChildIdx;
  }

  // If a child is larger than the parent, swap and keep pushing down
  if (largestIdx !== parentIdx) {
    [array[parentIdx], array[largestIdx]] = [
      array[largestIdx],
      array[parentIdx],
    ];

    heapify(array, heapLength, largestIdx);
  }
};

const nums = [4, 10, 3, 5, 1];

console.log(heapSort(nums));

/*
Step 0: Initial array
[4, 10, 3, 5, 1]

Tree:
            4
        /       \
      10         3
     /   \
    5     1

---------------------------------
Step 1: Build max heap (heapify index 1)
Array: [4, 10, 3, 5, 1] → already fine

Tree:
            4
        /       \
      10         3
     /   \
    5     1

---------------------------------
Step 2: Build max heap (heapify index 0)
Array: [10, 5, 3, 4, 1]

Tree:
            10
        /       \
      5           3
     / \
    4   1

---------------------------------
Step 3: Swap root with last element (10 goes to end)
Array: [1, 5, 3, 4, 10]

Heap portion after swap:
[1, 5, 3, 4]

Tree:
            1
        /       \
      5           3
     /
    4

Heapify root:
[5, 4, 3, 1, 10]

Tree:
            5
        /       \
      4           3
     /
    1

---------------------------------
Step 4: Swap root with last heap element (5 → index 3)
Array: [1, 4, 3, 5, 10]

Heap portion: [1, 4, 3]

Tree:
            1
        /       \
      4           3

Heapify root:
[4, 1, 3, 5, 10]

Tree:
            4
        /       \
      1           3

---------------------------------
Step 5: Swap root with last heap element (4 → index 2)
Array: [3, 1, 4, 5, 10]

Heap portion: [3, 1]

Tree:
            3
          /
         1

Heapify root: no change needed
[3, 1, 4, 5, 10]

---------------------------------
Step 6: Swap root with last heap element (3 → index 1)
Array: [1, 3, 4, 5, 10]

Heap portion: [1]

Tree:
            1

Heap is size 1 → done

---------------------------------
Final sorted array:
[1, 3, 4, 5, 10]
*/
