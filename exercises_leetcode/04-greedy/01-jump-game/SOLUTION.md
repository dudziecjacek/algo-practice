# Solution: Jump Game

## Intuition

You don't need to know *how* you get somewhere, only *how far you can
possibly reach*. Sweep left to right tracking the **farthest index
reachable so far**. If you ever stand on an index that's beyond that
reach, you're stuck. If you get through the array without that happening,
the end is reachable.

## Step by step

1. `reach = 0` (farthest index reachable so far).
2. For each index `i`:
   - If `i > reach` → you can't even stand on `i` → return `false`.
   - Otherwise update `reach = max(reach, i + nums[i])` — from `i` you can
     fling yourself `nums[i]` steps further.
3. Survive the loop → the last index was reachable → return `true`.

```js
let reach = 0;
for (let i = 0; i < nums.length; i++) {
  if (i > reach) return false;
  if (i + nums[i] > reach) reach = i + nums[i];
}
return true;
```

## Why greedy is safe here

Tracking a single "farthest reachable" value never misses a better path:
any index reachable by *some* sequence of jumps is ≤ the running `reach`,
because `reach` already absorbed the best jump from every earlier stand-on
-able index. There's no combination to weigh, so no DP is needed.

## Complexity

- **Time: O(n)** — one pass.
- **Space: O(1)**.

## Edge cases & pitfalls

- Single element `[0]` → you're already at the end → `true`.
- A `0` you *land on* before the end is a trap (`[3,2,1,0,4]` → `false`);
  but a `0` you can **jump over** is fine (`[2,0,0]` → `true`). The
  `reach` check captures both automatically.
- Don't confuse with **Jump Game II** ("minimum jumps"), which needs a
  slightly different greedy (track current-jump end + farthest).
