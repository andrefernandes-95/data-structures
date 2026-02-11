# 📘 Sequential Search Algorithm (Linear Search)

The **sequential search algorithm**, also known as **linear search**, is one of the simplest methods for finding an element inside a list or collection.  
It scans the structure **element by element**, in the order they appear, until the desired value is found or all elements have been checked.

---

## 🧠 Concept

The basic logic works as follows:

1. Start at the first element of the list.
2. Compare the current element with the target value.
3. If they match → **the value is found**.
4. If not, move to the next element.
5. If the end of the list is reached without a match → **the value does not exist in the list**.

---

## 🔍 When to Use Sequential Search?

Use linear search when:

- The list is **not sorted**.
- The list is **small**.
- Simplicity is more important than performance.
- You want an algorithm that is easy to implement without extra data structures.

It is **not ideal for large datasets**, especially unsorted ones.

---

## 📈 Complexity

| Case        | Complexity |
|-------------|------------|
| Best case   | **O(1)**   |
| Average case| **O(n)**   |
| Worst case  | **O(n)**   |

Extra space required: **O(1)**.

---

## 🧪 Pseudocode Example

```text
function linear_search(list, target):
    for i from 0 to length(list)-1:
        if list[i] == target:
            return i  // position found
    return -1  // value not found
```

## 💻 JavaScript Example

```js
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // index found
    }
  }
  return -1; // target not found
}
```

## Advantages

- Very simple to implement.
- Works on unsorted data.
- Works for any type of element.
- Requires zero extra memory.

## Limitations

- Slow for long lists.
- Must check elements sequentially.
- Less efficient than binary search on sorted data.

## Applications

- Searching in small or unsorted lists.
- Checking if a value exists in a dataset.
- Introductory algorithm teaching.
- Situations where clarity is more important than speed.

## Conclusion

Sequential search is a universal, simple, and accessible algorithm.

While inefficient for large datasets, its straightforward nature makes it useful in many practical and educational scenarios.
