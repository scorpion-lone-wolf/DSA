// One way to represent adjacency list is using a "GraphNode"
class GraphNode {
  constructor(val) {
    this.val = val;
    this.neighbour = [];
  }
}
// Other and Most common in Coding interview is using HashMap
// { "A" : [list of neighbours(connected node)]}

// create a adjacency list from the given directed edges
const edges = [
  ["A", "B"],
  ["B", "C"],
  ["B", "E"],
  ["C", "E"],
  ["E", "D"],
];

const adjList = {};

for (let [src, des] of edges) {
  if (!adjList[src]) {
    adjList[src] = [];
  }
  if (!adjList[des]) {
    adjList[des] = [];
  }
  adjList[src].push(des);
}

console.log(adjList); //{ A: [ 'B' ], B: [ 'C', 'E' ], C: [ 'E' ], E: [ 'D' ], D: [] }

// dfs on adjacency list

function dfs(adjList, start, end, visited) {
  if (visited.has(start)) return 0;
  if (start === end) return 1;

  let count = 0;
  visited.add(start);
  // loop al the neighbours
  for (let neighbour of adjList[start]) {
    count += dfs(adjList, neighbour, end, visited);
  }
  visited.delete(start);
  return count;
}

const nWays = dfs(adjList, "A", "E", new Set());
console.log("number of ways", nWays);
