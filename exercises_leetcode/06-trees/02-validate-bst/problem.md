# Validate Binary Search Tree

A binary tree node is `{ val, left, right }`. Return `true` if the tree is
a valid **binary search tree (BST)**:

- every node in the **left** subtree is **strictly less** than the node,
- every node in the **right** subtree is **strictly greater**,
- and both subtrees are themselves valid BSTs.

```js
export function isValidBST(root) {
  // ...
}
```

## Examples

```js
//   2          5
//  / \        / \
// 1   3      1   4      <- 4's subtree has 3 which is < 5
isValidBST(twoTree);  // -> true
isValidBST(fiveTree); // -> false
isValidBST(null);     // -> true (empty tree)
```

## Constraints

- The trap: checking only `node.left.val < node.val < node.right.val`
  locally is **wrong** — a deep descendant can violate the range. Carry a
  valid `(lo, hi)` **range** down the recursion: each node must satisfy
  `lo < val < hi`, then recurse with the range **tightened** by the
  current value.
- Time **O(n)**. Use `-Infinity` / `+Infinity` as the initial bounds.
