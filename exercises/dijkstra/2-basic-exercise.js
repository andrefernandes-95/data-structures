// Define the graph
const graph = {
  Start: { Andre: 3, Lidl: 3 },
  Andre: { Stadium: 9 },
  Lidl: { Stadium: 3 },
  Stadium: {}
};

// Dijkstra's algorithm
function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const nodes = new Set(Object.keys(graph));

  // Initialize distances
  for (let node of nodes) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (nodes.size > 0) {
    // Get node with smallest distance
    let currentNode = null;
    let smallestDistance = Infinity;
    for (let node of nodes) {
      if (distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        currentNode = node;
      }
    }

    if (currentNode === end) break; // reached destination

    nodes.delete(currentNode);

    // Update distances for neighbors
    for (let neighbor in graph[currentNode]) {
      let newDist = distances[currentNode] + graph[currentNode][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = currentNode;
      }
    }
  }

  // Reconstruct path
  const path = [];
  let current = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return { distance: distances[end], path };
}

// Run the algorithm
const result = dijkstra(graph, "Start", "Stadium");
console.log("Shortest distance:", result.distance);
console.log("Path:", result.path.join(" → "));
