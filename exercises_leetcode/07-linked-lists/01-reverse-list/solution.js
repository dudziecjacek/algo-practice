export function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next; // save before overwriting
    curr.next = prev; // flip the link
    prev = curr;
    curr = next;
  }

  return prev; // new head
}
