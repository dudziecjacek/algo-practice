# Solution: Reverse a Linked List

## Intuition

Reversing a list means flipping every `next` arrow to point at the
*previous* node instead of the next one. Walk the list once, and as you
pass each node, re-point it backward. Keep a `prev` pointer that trails
behind — it becomes the new head at the end.

## Step by step

1. `prev = null` (the reversed part behind you), `curr = head`.
2. While `curr` isn't null:
   - **Save** `next = curr.next` (before you overwrite it!).
   - **Flip:** `curr.next = prev`.
   - **Advance:** `prev = curr`, then `curr = next`.
3. When `curr` reaches the end, `prev` points at the last node processed —
   the new head. Return `prev`.

```js
let prev = null, curr = head;
while (curr !== null) {
  const next = curr.next;
  curr.next = prev;
  prev = curr;
  curr = next;
}
return prev;
```

## The one critical detail

**Save `next` before flipping `curr.next`.** The moment you do
`curr.next = prev`, the original link to the rest of the list is gone — if
you didn't stash it first, you've lost everything after `curr`. This is
*the* linked-list reversal bug.

## Complexity

- **Time: O(n)** — one pass.
- **Space: O(1)** — three pointers, no extra structures. (A recursive
  version is O(n) space from the call stack — the iterative form is
  strictly better here.)

## Edge cases & pitfalls

- Empty list (`null`) → the loop never runs → returns `null`. ✅
- Single node → its `next` becomes `null` (already was) → returns itself.
- Two nodes → the general logic handles it, no special-casing.
