# Smallest Missing Positive Integer

Given an array `A` of `N` integers, return the smallest positive integer
(greater than 0) that does not occur in `A`.

```js
export function smallestMissingPositive(A) {
  // ...
}
```

## Examples

```js
smallestMissingPositive([1, 3, 6, 4, 1, 2]) // -> 5
smallestMissingPositive([1, 2, 3])          // -> 4
smallestMissingPositive([-1, -3])           // -> 1
```

## Constraints

- `N` in `[1..100,000]`; each element in `[-1,000,000..1,000,000]`.

## Pattern / gotcha (pigeonhole)

The answer is always in `1..N+1` — an `N`-element array can't contain all
`N+1` of the candidates `1..N+1`, so one is always missing. Bound the
loop to the **array size**, not to a big constant: that's faster and
*provably complete* (a bound tied to the value range can fall through to
`undefined`). This holds no matter how large the actual values are — a
5-element array may contain `5000`; that value just never matches a
candidate in `1..6`, so it can only waste a slot, never fill one.
