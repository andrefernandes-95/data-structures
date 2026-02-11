# 🔎 Binary Search Algorithm

**Binary Search** is an efficient algorithm used to find an element within a **sorted** list.  

It works by repeatedly dividing the search interval in half, eliminating half of the remaining elements at each step.

Binary search is significantly faster than linear search for large datasets but **requires the data to be sorted**.

---

## 🧠 Concept

Binary Search works as follows:

1. Start with two pointers: **low** (start of the list) and **high** (end of the list).
2. Compute the **middle index**.
3. Compare the middle element with the target:
   - If equal → **target found**.
   - If the target is smaller → search the **left half**.
   - If the target is larger → search the **right half**.
4. Repeat until the element is found or the interval becomes empty.

---

## 📈 Complexity

| Case        | Complexity |
|-------------|------------|
| Best case   | **O(1)**   |
| Average case| **O(log n)** |
| Worst case  | **O(log n)** |

Extra space:

- Iterative version: **O(1)**
- Recursive version: **O(log n)** (due to call stack)

---

## 🧪 Pseudocode

```text
function binary_search(list, target):
    low = 0
    high = length(list) - 1

    while low <= high:
        mid = floor((low + high) / 2)

        if list[mid] == target:
            return mid
        else if target < list[mid]:
            high = mid - 1
        else:
            low = mid + 1

    return -1
```

## Javascript Example (Iterative)

```js
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const value = array[mid];

    if (value === target) {
      return mid;
    }

    if (target < value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1; // not found
}
```

## 💡 Requirements

- Binary search only works if the list is sorted.
- If the list is unsorted, you must sort it first (e.g., using quicksort or mergesort).

## Advantages

- Very fast for large datasets.
- Only logarithmic time complexity.
- Simple to implement.
- Requires little memory.

## Limitations

- VWorks only on sorted lists.
- Sorting first may cost O(n log n).
- More complex than linear search for small lists.

## Applications

Binary search is widely used in:

- Searching within databases.
- Looking up words in dictionaries.
- Finding elements in sorted arrays.
- Implementing efficient set/map lookups.
- Algorithms like binary search trees and binary heaps.

## Conclusion

Binary search is one of the most efficient and foundational search algorithms in computer science.

Its divide-and-conquer strategy allows very fast lookups on large, sorted collections, making it a core technique in many systems and data structures.
