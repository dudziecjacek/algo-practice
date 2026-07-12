# Climbing Stairs

You are climbing a staircase of `n` steps. Each move you can climb either
**1 or 2** steps. Return how many **distinct ways** you can reach the top.

```js
export function climbStairs(n) {
  // ...
}
```

## Examples

```js
climbStairs(2); // -> 2   (1+1, 2)
climbStairs(3); // -> 3   (1+1+1, 1+2, 2+1)
climbStairs(5); // -> 8
```

## Constraints

- The recurrence is `ways(n) = ways(n-1) + ways(n-2)` — the last move was
  either a 1-step or a 2-step. (Yes, it's Fibonacci.)
- Naive recursion is O(2ⁿ) and recomputes the same subproblems. Use
  **DP / memoization** to make it **O(n)**; you only need the last two
  values, so O(1) space is possible.
