# Solution: Coin Change

## Intuition

To make `amount` with the fewest coins, imagine the **last** coin you add
is `c`. Then the rest of the problem is "make `amount - c` with the fewest
coins" — a smaller version of the same problem. Try every coin as that
last one and keep the best:

```
dp[a] = 1 + min(dp[a - c])   over every coin c with c <= a
```

Greedy (always grab the biggest coin) is **wrong** — with `[1,3,4]` making
`6`, greedy gives `4+1+1` (3) but the optimum is `3+3` (2). You must
consider combinations, which is what DP does.

## Step by step

1. Make `dp` of size `amount + 1`, filled with `Infinity` ("unreachable"),
   except `dp[0] = 0` (zero coins make zero).
2. For each sub-amount `a` from `1` to `amount`:
   - For each coin `c` that fits (`c <= a`):
     - If using it improves things (`dp[a - c] + 1 < dp[a]`), take it.
3. `dp[amount]` is the answer, or `-1` if it's still `Infinity`
   (impossible).

## Why bottom-up order works

By the time you compute `dp[a]`, every smaller `dp[a - c]` is already
final — you built the table from `0` upward. No subproblem is ever
revisited or recomputed.

## Complexity

- **Time: O(amount × number_of_coins)** — two nested loops.
- **Space: O(amount)** for the `dp` table.

## Edge cases & pitfalls

- `amount = 0` → `dp[0] = 0` → returns 0 immediately.
- Impossible targets (e.g. coins `[2]`, amount `3`) stay `Infinity` →
  `-1`. The `Infinity` sentinel makes the `min` logic clean and avoids
  special-casing.
- This counts **minimum coins** (unbounded supply). "Number of *ways* to
  make change" is a different DP (loop coins on the outside to avoid
  double-counting orderings).
