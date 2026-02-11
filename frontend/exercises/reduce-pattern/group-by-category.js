/**

🧪 Exercise: Group by category
const products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" }
]


👉 Output:

{
  fruit: ["Apple", "Banana"],
  vegetable: ["Carrot"]
}
 */

const groupByCategory = (products) => {
  return products.reduce((prev, current) => {
    if (!prev[current.category]) {
      prev[current.category] = [];
    }

    prev[current.category].push(current.name);

    return prev;
  }, {});
};

console.log(
  groupByCategory([
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Banana", category: "fruit" },
  ]),
);
