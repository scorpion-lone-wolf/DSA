function mergeSort(arr) {
  const n = arr.length;
  return _mergeSort(arr, 0, n - 1);
}

function _mergeSort(arr, start, end) {
  if (start == end) return arr;
  const mid = Math.floor((start + end) / 2);
  arr = _mergeSort(arr, start, mid);
  arr = _mergeSort(arr, mid + 1, end);
  arr = merge(arr, start, mid, end);
  return arr;
}

function merge(arr, start, mid, end) {
  let s1 = start;
  let s2 = mid + 1;
  const e1 = mid;
  const e2 = end;
  const tempArray = [];

  while (s1 <= e1 && s2 <= e2) {
    if (arr[s1] <= arr[s2]) {
      tempArray.push(arr[s1++]);
    } else {
      tempArray.push(arr[s2++]);
    }
  }
  while (s1 <= e1) {
    tempArray.push(arr[s1++]);
  }
  while (s2 <= e2) {
    tempArray.push(arr[s2++]);
  }

  for (let i = end; i >= start; i--) {
    arr[i] = tempArray.pop();
  }
  return arr;
}

const arr = [
  [5, 4, 3, 1, 6, 2],
  [1, 2, 3, 4],
  [5, 4, 3, 2, 1],
  [7, 5, 4, 6, 7, 3, 2, 1, 9, 5],
];
mergeSort(arr);
arr.map(ar => {
  console.log(mergeSort(ar));
});
