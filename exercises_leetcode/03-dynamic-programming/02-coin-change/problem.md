# Coin Change

Given an array of `coins` (denominations, unlimited supply of each) and an
`amount`, return the **fewest coins** needed to make up that amount, or
`-1` if it cannot be made.

```js
export function coinChange(coins, amount) {
  // ...
}
```

## Examples

```js
coinChange([1, 2, 5], 11); // -> 3   (5 + 5 + 1)
coinChange([2], 3);        // -> -1  (impossible)
coinChange([1], 0);        // -> 0   (no coins needed)
```

## Constraints

- Greedy (always take the biggest coin) is **wrong** here — e.g.
  `coins=[1,3,4], amount=6` is `3+3` (2 coins), not `4+1+1` (3). You need
  DP.
- Build `dp[a]` = fewest coins to make amount `a`, for `a` from `1` to
  `amount`: `dp[a] = 1 + min(dp[a - c])` over each coin `c <= a`. Time
  **O(amount × coins.length)**.
