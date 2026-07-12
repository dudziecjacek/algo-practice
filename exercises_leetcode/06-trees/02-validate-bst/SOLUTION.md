# Solution: Validate Binary Search Tree

## Intuition

The BST rule isn't just "left child < node < right child" — it's that
**every** node in the left subtree is smaller and **every** node in the
right subtree is larger. So each node lives inside an allowed **(lo, hi)
range**, and moving down tightens that range. Check the range at each node;
if any node falls outside, it's not a BST.

## Step by step

1. Start at the root with the widest possible range: `(-Infinity,
   +Infinity)`.
2. At each node:
   - If `node.val <= lo` or `node.val >= hi` → violation → `false`.
   - Recurse **left** with range `(lo, node.val)` — everything left must be
     smaller than this node.
   - Recurse **right** with range `(node.val, hi)` — everything right must
     be larger.
3. An empty subtree is trivially valid → `true`.

```js
function valid(node, lo, hi) {
  if (node === null) return true;
  if (node.val <= lo || node.val >= hi) return false;
  return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
}
return valid(root, -Infinity, Infinity);
```

## Why the range (not just parent) matters

The classic trap: a node can satisfy its immediate parent yet violate an
**ancestor**. Example — root `5`, right child `6`, and `6`'s left child
`3`. Locally `3 < 6` looks fine, but `3` sits in the *right* subtree of
`5`, so it must be `> 5`. The propagated `lo` bound (`5`) catches it; a
parent-only check does not.

## Complexity

- **Time: O(n)** — each node visited once.
- **Space: O(h)** — recursion depth (tree height).

## Edge cases & pitfalls

- Empty tree / single node → valid.
- **Equal values** are not allowed here (strict `<`/`>`), so `[2,2,2]` is
  invalid — matches the strict-BST definition.
- Using `-Infinity`/`+Infinity` as initial bounds avoids awkward
  null-checks and works for any integer values.
- An **in-order traversal** (which must come out strictly increasing) is an
  equally valid alternative approach.
