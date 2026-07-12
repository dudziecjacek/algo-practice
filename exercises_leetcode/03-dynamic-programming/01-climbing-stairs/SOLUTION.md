# Solution: Climbing Stairs

## Intuition

To reach step `n`, your **last** move was either a 1-step (from `n-1`) or a
2-step (from `n-2`). So the number of ways to reach `n` is the sum of the
ways to reach those two steps:

```
ways(n) = ways(n-1) + ways(n-2)
```

That's the Fibonacci recurrence. The naive recursive version recomputes
the same `ways(k)` exponentially many times — DP fixes that by computing
each once.

## Step by step

1. Base cases: `ways(1) = 1`, `ways(2) = 2`.
2. Walk upward from 3 to `n`, each time computing the next value as the sum
   of the previous two.
3. You only ever need the **last two** values, so keep two variables `a`
   and `b` and slide them forward — no full array needed.

```js
let a = 1, b = 2;          // ways(1), ways(2)
for (let i = 3; i <= n; i++) {
  const next = a + b;
  a = b; b = next;
}
return b;
```

## From naive to efficient

- **Naive recursion:** O(2ⁿ) time — recomputes overlapping subproblems.
- **Memoized (top-down):** cache results → O(n) time, O(n) space.
- **Tabulated (bottom-up):** array of size n → O(n) time, O(n) space.
- **Rolling variables (this solution):** O(n) time, **O(1) space** — the
  cleanest form once you notice only two prior values matter.

## Complexity

- **Time: O(n)** — one pass.
- **Space: O(1)** — two variables.

## Edge cases & pitfalls

- `n = 1` → 1, `n = 2` → 2 handled by the early `if (n <= 2) return n`.
- Large `n` (e.g. 45) stays instant — the whole point of avoiding the
  exponential recursion.
