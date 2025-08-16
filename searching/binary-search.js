// Array indices     ->↑...............................................↑
//          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
const arr = [1, 2, 3, 3, 4, 5, 5, 6, 6, 12, 13, 22, 44, 55, 65, 67, 78, 99];
let noOfComparision = 0;

// Function to perform binary search recursively
function binarySearch(arr, start, end, target) {
  if (start > end) return -1;

  noOfComparision++;

  //  Calculate middle index safely to avoid potential overflow
  const mid = start + Math.floor((end - start) / 2);

  if (arr[mid] === target) return mid;

  // search the left half (elements before mid)
  if (arr[mid] > target) {
    return binarySearch(arr, start, mid - 1, target);
  }
  // search the right half (elements after mid)
  else {
    return binarySearch(arr, mid + 1, end, target);
  }
}

// Starting the binary search for the target value '1'
console.log(binarySearch(arr, 0, arr.length - 1, 1)); // Output: index of 1 if found, else -1

// Display total number of comparisons done
console.log("noOfComparision :->", noOfComparision);
