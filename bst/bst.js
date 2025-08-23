class BSTNode {
  constructor(val) {
    this.left = null;
    this.val = val;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  // ================================
  // insert a value into bst
  // ================================
  insert(val) {
    let currNode = this.head;
    this.head = this.#insert(currNode, val);
  }
  #insert(currNode, val) {
    // base case
    if (currNode == null) {
      return new BSTNode(val);
    }
    // go to left
    if (val < currNode.val) {
      currNode.left = this.#insert(currNode.left, val);
    } else {
      // or go to right
      currNode.right = this.#insert(currNode.right, val);
    }
    return currNode;
  }

  // ================================
  // ✅ removal of node
  // ================================
  remove(val) {
    let currNode = this.head;
    this.head = this.#remove(currNode, val);
    return this.head;
  }
  #remove(currNode, val) {
    //basecase
    if (!currNode) return currNode;

    if (currNode.val === val) {
      // ⭐️ case 1 : current node has no children (i.e it is leaf node)
      if (currNode.left === null && currNode.right === null) {
        return null;
      }
      // ⭐️ case 2 : current node has either left/right subtree.
      if (currNode.left === null || currNode.right === null) {
        if (currNode.left === null) {
          return currNode.right;
        } else {
          return currNode.left;
        }
      }

      // ⭐️ case 3 : current node has both left and right subtree.
      if (currNode.left !== null && currNode.right !== null) {
        const minNode = this.#findMinValueNode(currNode.right);
        [currNode.val, minNode.val] = [minNode.val, currNode.val];
        currNode.right = this.#remove(currNode.right, minNode.val);
      }
    } else if (val < currNode.val) {
      currNode.left = this.#remove(currNode.left, val);
    } else {
      currNode.right = this.#remove(currNode.right, val);
    }
    return currNode;
  }

  // ================================
  // find min value of the tree/subtree from a given node
  // ================================
  #findMinValueNode(currNode) {
    while (currNode && currNode.left) {
      currNode = currNode.left;
    }
    return currNode;
  }

  // ================================
  // inorder traversal
  // ================================
  inorderTraversal() {
    let tempHead = this.head;
    return this.#inorderTraversal(tempHead);
  }

  #inorderTraversal(tempHead) {
    if (tempHead == null) return;
    this.#inorderTraversal(tempHead.left);
    console.log(tempHead.val);
    this.#inorderTraversal(tempHead.right);
  }

  // ================================
  // check if particular value is present in bst or not
  // ================================
  search(val) {
    let currNode = this.head;
    return this.#search(currNode, val);
  }
  #search(currNode, val) {
    if (!currNode) return false;
    if (val == currNode.val) return true;
    if (val < currNode.val) return this.#search(currNode.left, val);
    else {
      return this.#search(currNode.right, val);
    }
  }
}

const arrEle = [11, 8, 9, 5, 18, 15, 19, 16, 17];

const bst = new BinarySearchTree();
// insert
for (let i = 0; i < arrEle.length; i++) {
  bst.insert(arrEle[i]);
}
// traversal
bst.inorderTraversal();
console.log(bst.search(8));
console.log(bst.search(9));
console.log(bst.search(7));

// removal of an value
bst.remove(11);
bst.inorderTraversal();
