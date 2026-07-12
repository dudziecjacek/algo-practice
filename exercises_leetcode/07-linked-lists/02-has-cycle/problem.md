# Linked List Cycle Detection

A singly linked list node is `{ val, next }`. Return `true` if the list
contains a **cycle** (some node's `next` points back to an earlier node),
otherwise `false`.

```js
export function hasCycle(head) {
  // ...
}
```

## Examples

```js
// 3 -> 2 -> 0 -> -4 -> (back to 2)
hasCycle(cyclicHead);  // -> true
// 1 -> 2 -> null
hasCycle(linearHead);  // -> false
hasCycle(null);        // -> false
```

## Constraints

- A `Set` of visited nodes works (O(n) time, O(n) space). The elegant
  answer is **Floyd's tortoise & hare**: a `slow` pointer moving one step
  and a `fast` pointer moving two. If there's a cycle they eventually
  meet; if `fast` hits `null`, there's no cycle. **O(n) time, O(1)
  space**.
- Guard against `fast` and `fast.next` being `null` before stepping twice.
