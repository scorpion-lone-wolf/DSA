// ?? Q : Determine if a path exists from the root of the tree to a leaf node. It may not contain any zero?

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Build tree
//        1
//     /     \
//   2         4
//  / \      /   \
// 0   0    6     7
//        /  \   /
//       0    4 0

const head = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(0), new TreeNode(0)),
  new TreeNode(
    4,
    new TreeNode(6, new TreeNode(0), new TreeNode(4)),
    new TreeNode(7, new TreeNode(0))
  )
);

function checkIfPathExists(head, path) {
  if (!head) return false;
  if (head.val === 0) return false;
  path.push(head.val);

  // it is a leaf node
  if (!head.left && !head.right) {
    return true;
  }

  if (checkIfPathExists(head.left, path)) return true;
  if (checkIfPathExists(head.right, path)) return true;
  path.pop();
  return false;
}

let path = [];
const answer = checkIfPathExists(head, path);

console.log(answer, path);
