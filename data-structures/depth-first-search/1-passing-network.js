
/**
A football coach is analyzing how the ball moves between players.
Each player is a node, and each pass is an edge.
We want to check if all players are reachable when the ball starts at player 0.
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
    const visited = []

    function dfs(index, nodes, visited) {
        if (visited.includes(index)) {
            return;
        }
        visited.push(index)

        for (var neighbor of nodes[index]) {
            dfs(neighbor, nodes, visited)
        }
    }

    dfs(0, nodes, visited)
    console.log('visited', visited)
}

let num = 5
let passes = [
    [0,1],
    [1,2],
    [2,3],
    [3,4]
]

passingNetwork(num, passes)