import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { hasCycle } = process.env.REF ? solution : practice;

// Build a list from values; if `pos` >= 0, the tail's next points back to node at index `pos`.
function buildList(arr, pos = -1) {
  const nodes = arr.map((val) => ({ val, next: null }));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  if (pos >= 0 && nodes.length > 0) nodes[nodes.length - 1].next = nodes[pos];
  return nodes[0] ?? null;
}

describe("Linked List Cycle Detection", () => {
  it("fixed tests", () => {
    expect(hasCycle(buildList([3, 2, 0, -4], 1))).toBe(true);
    expect(hasCycle(buildList([1, 2], -1))).toBe(false);
    expect(hasCycle(null)).toBe(false);
  });

  it("edge cases", () => {
    expect(hasCycle(buildList([1], -1))).toBe(false); // single node, no cycle
    expect(hasCycle(buildList([1], 0))).toBe(true); // single node pointing to itself
    expect(hasCycle(buildList([1, 2], 0))).toBe(true); // two-node cycle
    expect(hasCycle(buildList([1, 2, 3, 4, 5], 4))).toBe(true); // tail loops to itself
  });

  it("terminates on a long acyclic list", () => {
    const n = 1_000_000;
    const arr = Array.from({ length: n }, (_, i) => i);
    expect(hasCycle(buildList(arr, -1))).toBe(false);
  });
});
