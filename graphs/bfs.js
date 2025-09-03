// Find the shorted path from top left to bottom right corner of a given grid

const grid1 = [
  [0, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
];

const grid2 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const grid3 = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

function bfs(grid) {
  const visited = new Set();
  const nRows = grid.length;
  const nCols = grid[0].length;
  const queue = [];

  // add starting point (0,0)
  queue.push([0, 0]);
  visited.add(`0-0`);

  let length = 0;

  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [curRow, curCol] = queue.shift();
      if (curRow === nRows - 1 && curCol === nCols - 1) {
        return length;
      }
      const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ];

      for ([dr, dc] of directions) {
        const newRow = dr + curRow;
        const newCol = dc + curCol;
        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < nRows &&
          newCol < nCols &&
          grid[newRow][newCol] !== 1 &&
          !visited.has(`${newRow}-${newCol}`)
        ) {
          queue.push([newRow, newCol]);
          visited.add(`${newRow}-${newCol}`);
        }
      }
    }
    length++;
  }
  return -1;
}

const shortestPath1 = bfs(grid1);
const shortestPath2 = bfs(grid2);
const shortestPath3 = bfs(grid3);

console.log("for grid 1 we have :", shortestPath1, " shortest paths");
console.log("for grid 2 we have :", shortestPath2, " shortest paths");
console.log("for grid 3 we have :", shortestPath3, " shortest paths");
