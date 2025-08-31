// implementing hasing with chaining
class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
  }
}

class MyHashTable {
  constructor(initialSize = 20) {
    this.arr = new Array(initialSize);
  }
  #hashingFn(key) {
    const val = String(key);
    let sumOfAllChar = 0;
    for (let ele of val) {
      sumOfAllChar += ele.charCodeAt(0);
    }
    return sumOfAllChar % this.arr.length;
  }

  insert(key, value) {
    const indx = this.#hashingFn(key);
    if (this.arr[indx]) {
      let head = this.arr[indx];
      while (head && head.next) {
        if (head.key === key) {
          console.log(key, "is already present");
          return false;
        }
        head = head.next;
      }
      if (head.key === key) {
        console.log(key, "is already present");
        return false;
      }
      head.next = new Node(key, value);
      return true;
    }
    this.arr[indx] = new Node(key, value);
    return true;
  }

  has(key) {
    const indx = this.#hashingFn(key);
    let head = this.arr[indx];
    while (head) {
      if (head.key === key) return true;
      head = head.next;
    }
    return false;
  }

  delete(key) {
    const indx = this.#hashingFn(key);
    let head = this.arr[indx];
    if (!head) return false;

    if (head.key === key) {
      this.arr[indx] = head.next;
      return true;
    }
    while (head.next) {
      if (head.next.key === key) {
        head.next = head.next.next;
        return true;
      }
      head = head.next;
    }
    return false;
  }
}

const hashTable = new MyHashTable();

hashTable.insert(1);
hashTable.insert(2);
hashTable.insert(4);
hashTable.insert(33);
hashTable.insert(22);
hashTable.insert(22);
hashTable.insert(33);
hashTable.insert(44);
hashTable.insert(18);
hashTable.insert(10);

console.log(hashTable.has(1));
console.log(hashTable.has(18));
console.log(hashTable.has(12));
console.log(hashTable.has(133));
console.log(hashTable.has(15));
console.log(hashTable.has(44));
console.log(hashTable.has(10));
console.log(hashTable.has(11));
console.log(hashTable.has(13));

hashTable.delete(1);
console.log("after deleting 1");
console.log(hashTable.has(1));
