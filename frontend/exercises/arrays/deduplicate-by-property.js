/**
 * 🧱 1️⃣ Arrays
 * 
 * Exercise: Deduplicate by property

You get:

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" }
]

👉 Return array with unique users by id.
 */

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" },
];

const uniqueByIdSolution1 = (arr) =>
  arr.filter(
    (item, index, self) =>
      index === self.findIndex((selfItem) => selfItem.id === item.id),
  );

console.log(uniqueByIdSolution1(users));

/**

✔ Correct: Yes
⏱ Complexity: ❌ O(n²) (findIndex inside filter)

Better:

const seen = new Set()
return arr.filter(item => {
  if (seen.has(item.id)) return false
  seen.add(item.id)
  return true
})

 */
