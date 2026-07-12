# Solution: Linked List Cycle Detection

## Intuition

Two runners on a track: one slow (1 step), one fast (2 steps). On a
straight track the fast runner reaches the end and it's over. On a
**circular** track the fast runner keeps lapping and *must eventually
catch* the slow one from behind. Same idea on a linked list — if `fast`
ever equals `slow`, there's a cycle. This is **Floyd's tortoise & hare**.

## Step by step

1. `slow = head`, `fast = head`.
2. While `fast` and `fast.next` are both non-null:
   - `slow = slow.next` (one step).
   - `fast = fast.next.next` (two steps).
   - If `slow === fast` → they met → **cycle** → `true`.
3. If `fast` runs off the end → **no cycle** → `false`.

```js
let slow = head, fast = head;
while (fast !== null && fast.next !== null) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true;
}
return false;
```

## Why they're guaranteed to meet

Inside a cycle, each iteration the gap between fast and slow shrinks by
exactly one node. A gap that decreases by 1 every step can't "jump over"
0 — it must hit it. So if a cycle exists, they collide within one lap.

## Complexity

- **Time: O(n)** — before any meeting, fast traverses at most ~n nodes.
- **Space: O(1)** — just two pointers. (A `Set` of visited nodes also
  works but costs O(n) memory — Floyd's is the tighter answer.)

## Edge cases & pitfalls

- `null` or single node with no self-loop → `false`.
- The loop guard **must** check both `fast` *and* `fast.next` before doing
  `fast.next.next`, or you'll dereference `null` on even-length acyclic
  lists.
- Compare **nodes by identity** (`===`), not values — values can repeat
  without a cycle.
