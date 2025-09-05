// find the numbe of unique paths from top left to bottom right of given empty grid

const gridRow = 3;
const gridCols = 4;

function bottomUp(rows, cols) {
  let prevRow = new Array(cols).fill(1);

  for (let i = rows - 2; i >= 0; i--) {
    const currRow = new Array(cols).fill(0);
    currRow[cols - 1] = 1;
    for (let j = cols - 2; j >= 0; j--) {
      currRow[j] = currRow[j + 1] + prevRow[j];
    }
    prevRow = currRow;
  }

  return prevRow[0];
}

console.log(bottomUp(gridRow, gridCols));

//  Time : O(n*m) ,  Space = O(m) ; where n = number of rows and m = number of columns
