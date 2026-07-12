# Solution: Maximum Depth of Binary Tree

## Intuition

A tree is defined in terms of itself: a node's subtrees are just smaller
trees. So the depth is defined the same way — the depth of a tree is one
(for the current node) plus the depth of its **deeper** subtree. This maps
directly to recursion.

## Step by step

1. **Base case:** an empty tree (`root === null`) has depth `0`.
2. **Recursive case:** return `1 + max(depth(left), depth(right))`.

```js
if (root === null) return 0;
return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
```

That's the entire algorithm — the recursion does the bookkeeping via the
call stack.

## Why it's correct

Every node contributes exactly `1` to the paths that pass through it, and
the longest root-to-leaf path goes through whichever child subtree is
taller. Taking the `max` of the two children at every node bubbles the
longest path up to the root.

## Complexity

- **Time: O(n)** — each node is visited exactly once.
- **Space: O(h)** where `h` is the tree height — the depth of the call
  stack. Balanced tree → O(log n); fully skewed "stick" tree → O(n).

## Edge cases & pitfalls

- `null` root → `0`.
- Single node → `1`.
- **Deep skewed trees** can blow the recursion stack in extreme cases;
  an explicit-stack DFS or a BFS level count avoids that if `n` is huge.
  For interview-sized inputs the recursive form is the clear, idiomatic
  choice.
