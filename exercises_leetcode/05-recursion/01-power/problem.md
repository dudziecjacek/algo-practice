# Power (x^n)

Implement `power(x, n)` — `x` raised to the integer power `n` — using
**recursion**. `n` can be negative, zero, or positive.

```js
export function power(x, n) {
  // ...
}
```

## Examples

```js
power(2, 10);  // -> 1024
power(2, -2);  // -> 0.25
power(3, 0);   // -> 1
power(2, 1);   // -> 2
```

## Constraints

- Don't loop `n` times (O(n)) and don't use `Math.pow`. Use **fast
  exponentiation** — a divide-and-conquer recursion:
  `x^n = (x^(n/2))²`, times an extra `x` when `n` is odd. That makes it
  **O(log n)**.
- Handle the base case `n === 0 -> 1` and negative `n` by taking the
  reciprocal of the positive-power result.
