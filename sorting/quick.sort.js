function quickSort(arr) {
  const n = arr.length;
  return _quickSort(arr, 0, n - 1);
}

function _quickSort(arr, start, end) {
  //base case
  if (start >= end) return;
  const currPivotIndex = end;

  const finalPivotIndex = _findFinalPivotIndex(arr, start, end, currPivotIndex);
  // swap
  [arr[finalPivotIndex], arr[currPivotIndex]] = [arr[currPivotIndex], arr[finalPivotIndex]];
  // divide into two sub arr left and right branch
  _quickSort(arr, start, finalPivotIndex - 1);
  _quickSort(arr, finalPivotIndex + 1, end);
}

function _findFinalPivotIndex(arr, start, end, currPivotIndex) {
  let i = start,
    j = start;
  while (j < currPivotIndex) {
    if (arr[j] >= arr[currPivotIndex]) j++;
    else {
      if (i != j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
      j++;
    }
  }
  return i;
}

const arr = [5, 4, 3, 5, 6, 7, 8, 2, 5];
quickSort(arr);
console.log(arr);
