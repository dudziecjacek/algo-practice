# Valid Braces

Given a string containing `(){}[]`, return `true` if the brackets are
balanced and correctly nested, `false` otherwise.

```js
export function validBraces(s) {
  // ...
}
```

## Examples

```js
validBraces("(){}[]")   // -> true
validBraces("([{}])")   // -> true
validBraces("(}")       // -> false
validBraces("[(])")     // -> false
validBraces("[({})](]") // -> false
```

## Pattern / gotcha

Counts alone are not enough with multiple bracket types — `[(])` has a
correct count of every type but is invalid, because *which* opener is
innermost matters. Use a stack: push openers; on a closer, `pop` and it
must equal the matching opener (via a small fixed lookup, not tracked
"variations"); the stack must be empty at the end. `stack.pop()` on an
empty array returns `undefined`, which never equals an opener, so a
leading closer like `")"` fails correctly without a separate check.
