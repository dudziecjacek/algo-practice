# Reverse a Linked List

A singly linked list node is `{ val, next }`, where `next` is the next
node or `null`. Given the `head`, reverse the list and return the **new
head**.

```js
export function reverseList(head) {
  // ...
}
```

## Examples

```js
// 1 -> 2 -> 3 -> 4 -> 5
reverseList(head); // -> 5 -> 4 -> 3 -> 2 -> 1
reverseList(null); // -> null
```

## Constraints

- The clean solution is **iterative with three pointers** — `prev`,
  `curr`, and a saved `next`. Walk the list once, flipping each node's
  `next` to point backward. Time **O(n)**, space **O(1)**.
- The classic bug: overwriting `curr.next` before saving the next node —
  you lose the rest of the list. Save `next` *first*.
