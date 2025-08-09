function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else {
        break;
      }
    }
  }
}

const values = [6, 5, 4, 3, 2, 1];
insertionSort(values);
console.log(values);
