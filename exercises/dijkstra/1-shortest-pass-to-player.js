/**
 * Compute shortest pass times between players using Dijkstra's algorithm

* Input: 
 * - numberOfPlayers: number of nodes
 * - passes: edges with weights [from, to, weight]
 * - start: starting node

* Output: 
 * - distances: shortest distance from start to every node
 * - paths: shortest path from start to every node
 */
function dijkstra(numberOfPlayers, passes, start) {
    // 1. Build adjacency list with weights
    const graph = {}
    for (let i = 0; i < numberOfPlayers; i++) {
        graph[i] = []
    }

    for (const [a, b, weight] of passes) {
        graph[a].push([b, weight])
        graph[b].push([a, weight]) // Undirected
    }

    // 2. Initialize distances
    const distances = Array(numberOfPlayers).fill(Infinity)
    distances[start] = 0
    const visited = Array(numberOfPlayers).fill(false)

    for (let count = 0; count < numberOfPlayers; count++) {
        // a) Pick the unvisited node with smallest distance
        let current = -1
        let minDistance = Infinity

        for (let i = 0; i < numberOfPlayers; i++) {
            if (!visited[i] && distances[i] < minDistance) {
                minDistance = distances[i]
                current = i
            }
        }

        if (current === -1) break // No reachable nodes left

        // b) Mark current as visited
        visited[current] = true

        // c) Update neighbors
        for (const [neighbor, weight] of graph[current]) {
            if (!visited[neighbor]) {
                const newDist = distances[current] + weight
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist
                }
            }
        }
    }


    return { distances }

}

const numberOfPlayers = 4
const passes = [
    [0, 1, 4],
    [0, 2, 2],
    [1, 3, 1],
    [2, 3, 13]
]

dijkstra(numberOfPlayers, passes, 0)

// 0 Player 1 -> Player 2 (4s) 
// 0 Player 1 -> Player 3 (2s)
