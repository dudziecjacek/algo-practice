import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { reverseList } = process.env.REF ? solution : practice;

function fromArray(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) head = { val: arr[i], next: head };
  return head;
}
function toArray(head) {
  const out = [];
  while (head !== null) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

describe("Reverse a Linked List", () => {
  it("fixed tests", () => {
    expect(toArray(reverseList(fromArray([1, 2, 3, 4, 5])))).toStrictEqual([5, 4, 3, 2, 1]);
    expect(reverseList(null)).toBe(null);
  });

  it("edge cases", () => {
    expect(toArray(reverseList(fromArray([1])))).toStrictEqual([1]);
    expect(toArray(reverseList(fromArray([1, 2])))).toStrictEqual([2, 1]);
  });

  it("stays fast (O(n)) on a long list", () => {
    const n = 1_000_000;
    const arr = Array.from({ length: n }, (_, i) => i);
    const reversed = toArray(reverseList(fromArray(arr)));
    expect(reversed[0]).toBe(n - 1);
    expect(reversed[n - 1]).toBe(0);
    expect(reversed.length).toBe(n);
  });
});
