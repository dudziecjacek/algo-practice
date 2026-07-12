# Solution: Kth Largest Element (Quickselect)

## Intuition

Sorting the whole array (O(n log n)) then reading index `n - k` works —
but it's overkill. You don't need everything in order; you only need the
one element that *ends up* at sorted position `n - k`. Quickselect finds
exactly that by **partitioning** around a pivot and recursing into **only
the side that contains the answer**.

The k-th **largest** in ascending order sits at index `target = n - k`
(e.g. the 1st largest is the last element, index `n - 1`).

## Step by step

1. Work on a **copy** (partitioning shuffles the array).
2. Compute `target = n - k`.
3. Loop with a window `[lo, hi]`:
   - `partition(arr, lo, hi)` rearranges the window so everything smaller
     than the pivot is left of it and everything larger is right, then
     returns the pivot's final index `p`. **The pivot is now in its true
     sorted position.**
   - If `p === target` → `arr[p]` is the answer.
   - If `p < target` → answer is to the right → `lo = p + 1`.
   - Else → answer is to the left → `hi = p - 1`.

**Partition (Lomuto):** pick a pivot, sweep `j` across the window moving
every element `< pivot` to the front with a boundary pointer `i`, then
swap the pivot into slot `i`.

## The efficiency fix: randomized pivot

A fixed pivot (always the last element) makes **sorted input** degrade to
O(n²) — each partition peels off just one element. The solution first
swaps in a **random** element as the pivot:

```js
const r = lo + Math.floor(Math.random() * (hi - lo + 1));
[arr[r], arr[hi]] = [arr[hi], arr[r]];
```

This makes the expected split balanced regardless of input order.

## Complexity

- **Time: O(n) expected** (n + n/2 + n/4 + … ≈ 2n), **O(n²) worst case**
  (astronomically unlikely with a random pivot).
- **Space: O(1)** extra — partitioning is in place (plus the initial
  copy).

## Edge cases & pitfalls

- Work on a copy so the caller's array isn't mutated.
- All-equal elements still work (nothing is `< pivot`, pivot lands at
  `lo`).
- Iterative loop instead of recursion avoids any stack-depth worry.
