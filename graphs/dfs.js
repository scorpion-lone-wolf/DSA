// Q. Count the unique Path from the top left to the bottom right. (0 = free space, 1 = blocked)
// If all 4 direction is allowed then you have to use visited set
// If only down and right are allowed then no need of visited set

const grid1 = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
];

const grid2 = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function dfs(grid, curRow, curCol, visited) {
  const nRows = grid.length - 1;
  const nCols = grid[0].length - 1;

  if (curRow < 0 || curCol < 0) return 0;
  if (curRow > nRows || curCol > nCols) return 0;
  if (grid[curRow][curCol] == 1) return 0;

  if (visited.has(`${curRow}-${curCol}`)) return 0;

  if (curRow === nRows && curCol === nCols) return 1;
  visited.add(`${curRow}-${curCol}`);
  let count = 0;
  //   count += dfs(grid, curRow - 1, curCol, visited); // going up
  count += dfs(grid, curRow + 1, curCol, visited); // going down
  //   count += dfs(grid, curRow, curCol - 1, visited); // going left
  count += dfs(grid, curRow, curCol + 1, visited); // going right

  // remove from visited
  visited.delete(`${curRow}-${curCol}`);
  return count;
}

const uniquePath1 = dfs(grid1, 0, 0, new Set());
const uniquePath2 = dfs(grid2, 0, 0, new Set());

console.log("for grid 1 we have :", uniquePath1, " unique paths");
console.log("for grid 2 we have :", uniquePath2, " unique paths");
