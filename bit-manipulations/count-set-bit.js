// 23  =    101111

function countSetBit(n) {
  let count = 0;
  while (n) {
    if (n & 1) count++;
    n = n >> 1;
  }
  return count;
}

console.log(countSetBit(23));
