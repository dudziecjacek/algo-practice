# Solution: Power (x^n)

## Intuition

Multiplying `x` by itself `n` times is O(n). But `x^n = (x^(n/2))²`, so if
you compute the half-power once and square it, you cut the exponent in
half every step — O(log n). This is divide-and-conquer applied to
exponentiation.

## Step by step

1. **Negative exponent:** `x^(-n) = 1 / x^n`. Recurse on `-n` and take the
   reciprocal.
2. **Base case:** `x^0 = 1`.
3. **Recursive case:** compute `half = power(x, floor(n/2))` **once**.
   - If `n` is even → `half * half`.
   - If `n` is odd → `half * half * x` (the extra `x` accounts for the
     dropped remainder).

```js
if (n < 0) return 1 / power(x, -n);
if (n === 0) return 1;
const half = power(x, Math.floor(n / 2));
return n % 2 === 0 ? half * half : half * half * x;
```

## The key efficiency detail

Compute `half` **once and store it**. The naive-looking
`power(x, n/2) * power(x, n/2)` calls the recursion *twice*, which
collapses back to O(n). Reusing the single `half` is what actually buys
the O(log n).

## Complexity

- **Time: O(log n)** — the exponent halves each call.
- **Space: O(log n)** — recursion depth (the call stack).

## Edge cases & pitfalls

- `n = 0` → `1` for any `x`.
- Negative base with odd/even exponent handles sign correctly
  (`(-2)^3 = -8`, `(-2)^2 = 4`).
- Negative exponent → fractional result via the reciprocal.
- Floating-point: results are doubles, so extremely large exponents lose
  precision — expected for JS numbers.
