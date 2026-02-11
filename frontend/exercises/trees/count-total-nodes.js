/**
 🧪 Exercise: Count total nodes
const tree = {
  id: 1,
  children: [
    { id: 2, children: [] },
    { id: 3, children: [{ id: 4, children: [] }] }
  ]
}

👉 Return total node count.
 */

const tree = {
  id: 1,
  children: [
    { id: 2, children: [] },
    { id: 3, children: [{ id: 4, children: [] }] },
  ],
};

const countNodes = (node) => {
  let sum = 1;

  if (node.children.length) {
    node.children.forEach((element) => {
      sum += countNodes(element);
    });
  }

  return sum;
};

console.log(countNodes(tree));
