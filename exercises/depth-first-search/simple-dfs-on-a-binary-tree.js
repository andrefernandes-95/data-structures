// BST Node
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// DFS Traversals

// In-Order: Left -> Root -> Right
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}

// Pre-Order: Root -> Left -> Right
function preOrder(node) {
    if (node !== null) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

// Post-Order: Left -> Right -> Root
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}

// Usage
const root = new Node(8)
root.left = new Node(3)
root.right = new Node(10)

root.left.left = new Node(1)
root.left.right = new Node(6)

root.right.right = new Node(14)

// inOrder(root)
// preOrder(root)
postOrder(root)
