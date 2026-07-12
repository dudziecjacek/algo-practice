# Maximum Depth of Binary Tree

A binary tree node is `{ val, left, right }`, where `left`/`right` are
child nodes or `null`. Given the `root` (which may be `null`), return the
tree's **maximum depth** — the number of nodes along the longest path from
the root down to a leaf.

```js
export function maxDepth(root) {
  // ...
}
```

## Examples

```js
//     3
//    / \
//   9  20
//     /  \
//    15   7
maxDepth(tree);      // -> 3
maxDepth(null);      // -> 0
maxDepth(singleNode) // -> 1
```

## Constraints

- Natural **recursion (DFS)**: an empty tree has depth `0`; otherwise the
  depth is `1 + max(depth(left), depth(right))`.
- Time **O(n)** — each node is visited once. Recursion depth is the height
  of the tree.
