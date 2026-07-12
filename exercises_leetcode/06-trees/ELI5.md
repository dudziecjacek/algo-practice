# ELI5: Trees & Binary Trees

## A family tree for data

A **tree** is data shaped like a family tree (or a company org chart): one
**root** at the top, and every node has **children** below it. No loops,
no cycles — just branches spreading downward to **leaves** (nodes with no
children).

A **binary tree** simply means each node has **at most two** children,
called `left` and `right`. In code a node is just:

```js
{ val, left, right } // left/right are child nodes, or null
```

Because each child is itself the root of a smaller tree, trees and
**recursion** are best friends: "the depth of a tree = 1 + the deeper of
its two children's depths." You solve the whole thing by trusting the same
function on the smaller sub-trees.

## Two ways to visit every node

- **DFS (depth-first):** go as deep as possible down one branch before
  backing up. Natural to write with recursion (the call stack does the
  remembering). Used for depth, path sums, "does a path exist," etc.
- **BFS (breadth-first):** visit level by level, top to bottom, left to
  right. Uses a **queue** (see the Queues section). Used for "level order"
  and "shortest number of steps."

Visiting all nodes is **O(n)**. The recursion depth is the tree's
**height** — about log n for a balanced tree, but up to n for a
lopsided/"stick" tree.

## Binary Search Tree (BST): a sorted tree

A **BST** adds a rule: for every node, everything on the **left is
smaller** and everything on the **right is bigger**. That means searching
is like binary search — go left or right and skip half the tree each step
(O(log n) when balanced).

The classic gotcha: the rule is about **all** descendants, not just the
immediate children. A node deep on the right must still be bigger than an
ancestor far above it. So when validating, carry down a **(min, max)
range** and tighten it as you go.

**When you see:** hierarchical data, "parent/child," "ancestor,"
"levels," or "sorted + fast lookup" → think trees / BST.
