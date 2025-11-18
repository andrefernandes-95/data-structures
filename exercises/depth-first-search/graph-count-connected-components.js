/**
 * Consider a graph with num nodes,
 * labeled from 0 to num - 1. Given num and a list of edges where each edges[i] = [a, b]
 * represents an undirected connection between nodes a and b, determine the number of connected components in the graph.

In the context of a graph, a component of an undirected graph is a connected subgraph
that is not part of any larger connected subgraph.

Input
num: number: An integer, the number of nodes in the graph
edges: Array<[number, number]>: A 2D array where edges[i] = [a, b] represents an undirected edge between nodes a and b

Examples

Input: num = 6, edges = [[0,1],[4,5],[2,4],[1,3],[0,2]]
Output: 1
Explanation: All nodes are connected.

Input: num = 3, edges = [[0,1],[1,2]]
Output: 1
Explanation: All nodes are connected.

Input: num = 4, edges = [[0,1],[2,3]]
Output: 2
Explanation: There are two connected components: {0, 1} and {2, 3}.

Constraints
1 <= num <= 1000
1 <= edges.length <= 2000
edges[i].length == 2
0 <= a < b < num
a != b
There are no self-loops or duplicate edges
 */

// First attempt
function count1(num, edges) {

    const connectedNodes = []
    edges.forEach(edge => {
        const alreadyConnectedFirstElementIndex = connectedNodes.findIndex(node => node.includes(edge[0]))
        const alreadyConnectedSecondElementIndex = connectedNodes.findIndex(node => node.includes(edge[1]))
        
        // If shared elements belong to two different connections, we merge the second into the first
        if (alreadyConnectedFirstElementIndex !== -1 && alreadyConnectedSecondElementIndex !== -1
            && alreadyConnectedFirstElementIndex !== alreadyConnectedSecondElementIndex
        ) {
            const nodeToAttachToFirstConnection = connectedNodes.splice(alreadyConnectedSecondElementIndex, 1)
            connectedNodes[alreadyConnectedFirstElementIndex].push(...nodeToAttachToFirstConnection)
        }
        // If first element already belongs to a connection
        else if (alreadyConnectedFirstElementIndex !== -1) {
            connectedNodes[alreadyConnectedFirstElementIndex].push(edge[1])
        }
        // else if second element already belongs to a connection
        else if (alreadyConnectedSecondElementIndex !== -1) {
            connectedNodes[alreadyConnectedSecondElementIndex].push(edge[0])
        }
        // Both nodes of the edge do not belong, push as a new connected node
        else {
            connectedNodes.push([edge[0], edge[1]])
        }
    })

    connectedNodes.forEach(connectedNode => {
        console.log(`Connected Node: ${connectedNode}`)
    })

    return connectedNodes.length
}

// console.log(count1(3, [[0,1],[1, 2]])) // Passes
// console.log(count1(6, [[0,1],[4,5],[2,4],[1,3],[0,2]])) // Passes
// console.log(count1(4, [[0,1],[2, 3]])) // Passes

// Doesn't work for single edge nodes

// Union 
function count2(num, edges) {
    const parent = Array.from({ length: num }, (_, i) => i)

    function find(x) {
        if (parent[x] !== x){
            parent[x] = find(parent[x]) // Path compression
        }
        return parent[x]
    }

    function union(a,b) {
        const rootA = find(a)
        const rootB = find(b)
        if (rootA !== rootB) parent[rootB] = rootA
    }

    for (const [a, b] of edges) {
        union(a, b)
    }

    // Count unique roots
    const roots = new Set()
    for (let i = 0; i < num; i++) {
        roots.add(find(i))
    }

    return roots.size
}

// console.log(count2(3, [[0,1],[1, 2]])) // Passes

function count3(num, edges) {
    const nodes = {}

    for (let i = 0; i < num; i++) {
        nodes[i] = edges
            // Find edges that contain the node
            .filter(entry => entry.includes(i))
            .map(entry => entry[0] === i ? entry[1] : entry[0])
    }

    const visited = new Set()
    let components = 0

    // Loop through all nodes
    for (let i = 0; i < num; i++) {
        if (!visited.has(i)) {
            dfs(i, nodes, visited)
            components++
        }
    }

    return components
}

function dfs(node, nodes, visited) {
    if (visited.has(node)) return
    visited.add(node)

    for (const neighbor of nodes[node]) {
        dfs(neighbor, nodes, visited)
    }
}

//console.log(count3(3, [[0,1],[1, 2]])) // Passes
// console.log(count3(4, [[0,1],[1, 2], [2,3]])) // Passes
console.log(count3(6, [[0,1],[1, 2], [2,3], [4, 5]])) // Passes
// console.log(count3(4, [[0, 1],[2, 3]])) // Passes
