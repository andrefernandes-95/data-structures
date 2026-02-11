// BST Node
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// BFS Traversall (Level-order)

function bfs(root) {
    if (!root) {
        return;
    }

    const queue = []
    queue.push(root)

    while(queue.length > 0) {
        const node = queue.shift() // Remove the front element
        console.log(node.value)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
}

// Example usage
const root = new Node(8);
root.left = new Node(3);
root.right = new Node(10);
root.left.left = new Node(1);
root.left.right = new Node(6);
root.right.right = new Node(14);

console.log("BFS (Level-order) Traversal:");
bfs(root);

