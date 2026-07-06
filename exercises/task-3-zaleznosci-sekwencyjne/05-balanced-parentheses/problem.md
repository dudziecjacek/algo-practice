# Balanced Parentheses (single type)

Given a string of only `(` and `)`, return `true` if the parentheses are
balanced and correctly ordered, `false` otherwise.

```js
export function balancedParens(s) {
  // ...
}
```

## Examples

```js
balancedParens("(())") // -> true
balancedParens("()()") // -> true
balancedParens("(()")  // -> false  (one never closes)
balancedParens("())(") // -> false  (closes too early, then reopens)
balancedParens("")     // -> true
```

## Pattern / gotcha

With a single bracket type you don't need a stack — a running counter is
enough (this is the O(1)-space version of Valid Braces). Add 1 for `(`,
subtract 1 for `)`. Two order-sensitive checks: the counter must **never
go below 0** mid-string (a `)` with nothing open → invalid immediately),
and it must be **exactly 0** at the end (nothing left open). Checking only
the final total misses `")("`, which nets to 0 but is out of order.
