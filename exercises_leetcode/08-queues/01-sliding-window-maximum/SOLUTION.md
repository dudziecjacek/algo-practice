# Solution: Sliding Window Maximum

## Intuition

Re-scanning each window for its max is O(n·k). The insight: once a smaller
value has a **larger value to its right**, that smaller value can *never*
be the max of any future window — it's shadowed. So keep a **monotonic
deque** of indices whose values are strictly decreasing. The front is
always the current window's maximum.

## Step by step

For each index `i`:

1. **Expire the front:** if the front index has slid out of the window
   (`deque[head] <= i - k`), drop it.
2. **Maintain monotonicity:** pop indices from the **back** while their
   value is `<= nums[i]` — they're now shadowed by `nums[i]`.
3. **Push** `i` at the back.
4. **Record:** once the first full window is formed (`i >= k - 1`), the
   answer for this window is `nums[deque[front]]`.

## Why the front is always the max

The deque holds only "candidates that could still win," in decreasing
value order. Anything smaller than a newcomer got popped (step 2), and
anything too old got expired (step 1). What's left at the front is the
largest value still inside the window.

## An implementation note (good practice)

This solution uses an array with a `head` read-pointer instead of
`Array.shift()` for front removal, because `shift()` is **O(n)** in JS
(it reindexes the whole array) and would silently make the whole thing
O(n·k). The trade-off: the backing array isn't compacted, so memory is
O(n) rather than O(k). If O(k) memory matters, use a true ring-buffer /
doubly-linked deque — same time complexity, tighter space.

## Complexity

- **Time: O(n)** — each index is pushed once and popped at most once
  (amortized O(1) per element).
- **Space: O(n)** as implemented (O(k) with a compacting deque).

## Edge cases & pitfalls

- `k = 1` → every element is its own window max → returns the array.
- `k = n` → one window → the global max.
- The deque stores **indices**, not values — you need indices both to test
  the window boundary and to read the value.
