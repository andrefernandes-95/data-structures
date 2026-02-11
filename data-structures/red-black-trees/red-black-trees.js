const RED = true;
const BLACK = false;

class Node {
    constructor(key, color = RED, left = null, right = null, parent = null) {
        this.key = key;
        this.color = color;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}

class RedBlackTree {
    constructor() {
        // A Single NIL node that represents null leaves
        this.nil = new Node(null, BLACK)
        this.root = this.nil;
    }

    inorder(callback) {
        const walk = node => {
            if (node === this.nil) {
                return;
            }

            walk(node.left)
            callback(node.key, node.color)
            walk(node.right)
        }

        walk(this.root)
    }

    insert(key) {
        let newNode = new Node(key, RED, this.nil, this.nil, null)

        // Standard Binary Search Tree insert
        let parent = this.nil
        let current = this.root

        while (current !== this.nil) {
            parent = current
            if (newNode.key < current.key) {
                current = current.left
            } else {
                current = current.right
            }
        }

        // Attach new node to parent
        newNode.parent = parent

        // Is tree empty?
        if (parent === this.nil) {
            // Tree was empty, newNode becomes root
            this.root = newNode
        } else if (newNode.key < parent.key) {
            parent.left = newNode
        } else {
            parent.right = newNode
        }

        // Fix red-black violations
        this.fixInsert(newNode)
    }

    fixInsert(z) {
        // Loop as long as z's parent is RED
        // If parent is BLACK, no violation occurs, and we are done
        while (z.parent.color === RED) {

            // Check if z's parent is the left child of its grandparent
            if (z.parent === z.parent.parent.left) {
                let uncle = z.parent.parent.right // uncle is parent's sibling
                
                if (uncle.color === RED) {
                    // CASE 1: Uncle is RED
                    // Both parent and uncle are red -> violation
                    // Solution: recolor parent and uncle to black, grandparent to red
                    // Then move z pointer up to grandparent and continue checking

                    z.parent.color = BLACK
                    uncle.color = BLACK
                    z.parent.parent.color = RED // Grandparent becomes red
                    z = z.parent.parent // Move up to grandparent
                } else {
                    // CASE 2: Uncle is Black and z is right child
                    // Violation: Parent is red, uncle is black, z is on the "inner" side
                    if (z === z.parent.right) {
                        z = z.parent // Move z up to parent
                        this.rotateLeft(z) // Rotate left to make z a left child
                    }

                    // CASE 3: Uncle is Black and z is left child
                    // Violation: Parent is red, uncle is black, and z is on the "outer" side
                    // Solution: recolor parent to black, grandparent to red, then rotate right at grandparent
                    z.parent.color = BLACK
                    z.parent.parent.color = RED
                    this.rotateRight(z.parent.parent) // Rotate right at grandparent
                }
            }
            // z is inserted on the right, its the right child of the grandparent
            else {
                let uncle = z.parent.parent.left

                if (uncle.color === RED) {
                    z.parent.color = BLACK
                    uncle.color = BLACK
                    z.parent.parent.color = RED
                    z = z.parent.parent // Move up
                } else {
                    // CASE 2: Uncle is Black, z is left child
                    // Violation: Parent is red, uncle is black, z is on the outer side
                    if (z === z.parent.left) {
                        z = z.parent
                        this.rotateRight(z)
                    }

                    // CASE 3: Uncle is black, z is right child 
                    z.parent.color = BLACK
                    z.parent.parent.color = RED
                    this.rotateLeft(z.parent.parent) // Rotate left at the grandparent
                }
            }
        }

        // Always make sure the root is BLACK
        // This fixes any violation at the top
        this.root.color = BLACK
    }

    /**
     Before Rotation:
       x                                              
        \                                             
         y                                                         
        / \                                                     
       a   b   
     
    */
    /**
     After Rotation:
          
          y
         / \                                                        
        /   \                                                     
       x     b
        \
         a
    */
    rotateLeft(x) {
        // y becomes the new parent of x
        const y = x.right
        // Move y.left into x.right
        x.right = y.left
        if (y.left !== this.nil) {
            y.left.parent = x
        }
        // Connect y to x’s former parent.
        y.parent = x.parent
        if (x.parent === this.nil) {
            // y becomes the root, because x was the root
            this.root = y
        } else if (x === x.parent.left) {
            // If x was a left child of its parent, update the x parent to have y now
            x.parent.left = y
        } else {
            // Otherwise x was a right child of its parent, update the x parent to have y now
            x.parent.right = y
        }

        // Put x under y
        y.left = x
        x.parent = y
    }

    /**
 Before Rotation:     After Rotation:
       x                   y                                   
      /                   / \                       
     y                   /   \                                 
    / \                 a     x                             
   a   b                      /
                             b
*/
    rotateRight(x) {
        // y becomes the new parent of x
        const y = x.left
        // Move y.right into x.left
        x.left = y.right

        // Make b's parent x
        if (y.right !== this.nil) {
            y.right.parent = x
        }

        // Connect y to x’s former parent.
        y.parent = x.parent
        if (x.parent === this.nil) {
            // y becomes the root, because x was the root
            this.root = y
        } else if (x === x.parent.right) {
            // If x was a right child of its parent, update the x parent to have y now
            x.parent.right = y
        } else {
            x.parent.left = y
        }

        // Put x under y
        y.right = x
        x.parent = y
    }
}

const tree = new RedBlackTree()

Array.from([10, 5, 20, 1, 2]).forEach(n => tree.insert(n))

tree.inorder((key, color) => {
    console.log(`key: ${key}, color: ${color ? 'RED' : 'BLACK'}`)
})
