class MinHeap {
  constructor() {
    this.heap = [];
  }

  // ==================
  // Inserting a value into a heap. Time =  n * log(n)
  // ==================

  insertIntoHeap(val) {
    this.heap.push(val);
    this.#maintainHeapPropertyAfterInsertion(this.heap.length - 1);
    return val;
  }
  #maintainHeapPropertyAfterInsertion(indx) {
    // percolate up
    const parentIndx = Math.floor((indx - 1) / 2);

    if (parentIndx >= 0 && this.heap[indx] < this.heap[parentIndx]) {
      [this.heap[indx], this.heap[parentIndx]] = [this.heap[parentIndx], this.heap[indx]];
      return this.#maintainHeapPropertyAfterInsertion(parentIndx);
    }
    return true;
  }

  // ==================
  // Deleting a root value from a heap . Time =  n * log(n)
  // ==================
  deletion() {
    const len = this.heap.length;
    if (len === 0) return null;

    const lastInsertedIndex = len - 1;
    if (lastInsertedIndex === 0) {
      return this.heap.pop();
    }
    [this.heap[0], this.heap[lastInsertedIndex]] = [this.heap[lastInsertedIndex], this.heap[0]];
    const popValue = this.heap.pop();

    // maintain heap property
    this.#maintainHeapPropertyAfterDeletion(0);
    return popValue;
  }
  #maintainHeapPropertyAfterDeletion(indx) {
    // percolate down
    const len = this.heap.length;
    const leftChild = indx * 2 + 1;
    const rightChild = leftChild + 1;
    let swappedIndex = indx;
    if (leftChild < len && this.heap[leftChild] < this.heap[swappedIndex]) {
      swappedIndex = leftChild;
    }
    if (rightChild < len && this.heap[rightChild] < this.heap[swappedIndex]) {
      swappedIndex = rightChild;
    }
    if (swappedIndex == indx) return;
    [this.heap[swappedIndex], this.heap[indx]] = [this.heap[indx], this.heap[swappedIndex]];
    return this.#maintainHeapPropertyAfterDeletion(swappedIndex);
  }

  // ==================
  // Build heap or Heapify. Time = O(n)
  // ==================

  heapify(arr) {
    const len = arr.length;
    this.heap = arr.slice();
    const midIndex = Math.floor(len / 2);

    for (let i = midIndex; i >= 0; i--) {
      this.#maintainHeapPropertyAfterDeletion(i);
    }
    return this.heap;
  }
}

const heap = new MinHeap();

console.log("Inserting values:");
[10, 4, 15, 2, 7, 1].forEach(val => {
  heap.insertIntoHeap(val);
  console.log(`Inserted ${val}:`, heap.heap);
});

console.log("\nDeleting min values:");
while (heap.heap.length > 0) {
  const minValue = heap.deletion();
  console.log(`Deleted ${minValue}:`, heap.heap);
}
