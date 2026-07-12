# Jump Game

Each element `nums[i]` is the **maximum** number of steps you can jump
forward from index `i`. Starting at index `0`, return `true` if you can
reach the **last index**, otherwise `false`.

```js
export function canJump(nums) {
  // ...
}
```

## Examples

```js
canJump([2, 3, 1, 1, 4]); // -> true
canJump([3, 2, 1, 0, 4]); // -> false  (stuck at the 0 at index 3)
canJump([0]);             // -> true   (already at the end)
```

## Constraints

- Greedy in a **single O(n) pass**: track the **farthest** index reachable
  so far. If you ever stand on an index beyond that reach, you're stuck —
  return `false`. Otherwise extend the reach with `i + nums[i]`.
- No DP needed — the greedy reach is provably optimal here.
