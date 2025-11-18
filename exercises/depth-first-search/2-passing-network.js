
/**
A football coach is analyzing how the ball moves between players.
Each player is a node, and each pass is an edge.
We want to check if all players are reachable when the ball starts at player 0.

Let’s extend your football DFS example to count connected components — i.e., groups of players where the ball can move freely among them.

Concept

- Each connected component is a group of players reachable from one another.
- DFS can explore one component at a time.
- Every time you start DFS from an unvisited player, you’ve found a new component.

*/
function passingNetwork(numberOfPlayers, passes) {

    const nodes = {}

    // Build an adjacent list

    // initialize each player with an empty list
    for (let i = 0; i < numberOfPlayers; i++) {
        nodes[i] = [];
    }

    // loop over each pass once
    for (const [a, b] of passes) {
        nodes[a].push(b) // a → b
        nodes[b].push(a) // b → a (because undirected, meaning the connection goes both ways)
    }

    // Start traversing via first player
    const visited = new Set()
    let components = 0;

    function dfs(index, nodes, visited) {
        if (visited.has(index)) {
            return;
        }

        visited.add(index)

        for (var neighbor of nodes[index]) {
            dfs(neighbor, nodes, visited)
        }
    }

    // Loop through all players
    for (let i = 0; i < numberOfPlayers; i++) {
        if (!visited.has(i)) {
            dfs(i, nodes, visited)
            components++
        }
    }

    return components;
}

let numberOfPlayers = 6
let passes = [
    [0,1],
    [1,2],
    [2,3],
    [3,4]
]

console.log(passingNetwork(numberOfPlayers, passes))
