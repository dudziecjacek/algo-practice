# Sliding Window Maximum

Given an array `nums` and a window size `k`, return an array of the
**maximum** in every contiguous window of size `k` as it slides from left
to right.

```js
export function maxSlidingWindow(nums, k) {
  // ...
}
```

## Examples

```js
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3); // -> [3, 3, 5, 5, 6, 7]
maxSlidingWindow([1], 1);                          // -> [1]
maxSlidingWindow([9, 8, 7], 2);                    // -> [9, 8]
```

## Constraints

- Re-scanning each window is O(n·k). The optimal solution is **O(n)** with
  a **monotonic deque** (a double-ended queue) holding **indices** whose
  values are in decreasing order:
  - Before adding index `i`, pop from the **back** every index whose value
    is `<= nums[i]` (they can never be the max again).
  - Pop from the **front** any index that has fallen outside the window.
  - The front index always holds the current window's maximum.
- The deque is the star here — pushes/pops from both ends.
