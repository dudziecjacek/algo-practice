# Count Balanced Prefixes

Given a string of parentheses `(` and `)`, count how many **prefixes** of
the string are themselves fully balanced — equal numbers of `(` and `)`
with the brackets correctly ordered (the running balance never goes
negative). In other words, count the moments, reading left to right, at
which everything opened so far has just been closed.

```js
export function countBalancedPrefixes(s) {
  // ...
}
```

## Examples

```js
countBalancedPrefixes("()()")   // -> 2   ("()" at index 1, "()()" at index 3)
countBalancedPrefixes("(())")   // -> 1   (only the whole string returns to zero)
countBalancedPrefixes("()(")    // -> 1   (the trailing "(" never closes)
countBalancedPrefixes("())(")   // -> 1   (only "()"; after that the order breaks)
countBalancedPrefixes(")(")     // -> 0   (starts with an unmatched closer)
countBalancedPrefixes("")       // -> 0
```

## Constraints

- Length up to 1,000,000 — must be O(n), single pass.
- The string contains only `(` and `)`.

## Pattern / gotcha

Carry a single running `balance`: `+1` for `(`, `-1` for `)`. Every time
`balance` hits `0` you've closed a complete, well-ordered group → count
it. The order guard matters: the moment `balance` goes **negative** the
string has a closer with nothing to match, and no later prefix can ever
be valid again (a `(` can raise the balance but the earlier unmatched
`)` is baked in) — so you can stop counting there.

This is the counting cousin of Valid Braces / Balanced Parentheses: those
return one yes/no for the whole string, here you tally *every* balanced
moment. The O(n²) trap is re-scanning `s.slice(0, i)` for each prefix —
one running counter makes it O(n).
