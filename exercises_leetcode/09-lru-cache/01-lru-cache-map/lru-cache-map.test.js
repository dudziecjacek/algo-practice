import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { LRUCache } = process.env.REF ? solution : practice;

describe("LRU Cache (Map approach)", () => {
  it("fixed tests (the classic sequence)", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    expect(c.get(1)).toBe(1);
    c.put(3, 3); // evicts 2
    expect(c.get(2)).toBe(-1);
    c.put(4, 4); // evicts 1
    expect(c.get(1)).toBe(-1);
    expect(c.get(3)).toBe(3);
    expect(c.get(4)).toBe(4);
  });

  it("updating an existing key refreshes its recency", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    c.put(1, 10); // update 1 -> 1 becomes most-recent
    c.put(3, 3); // evicts 2 (the LRU), not 1
    expect(c.get(2)).toBe(-1);
    expect(c.get(1)).toBe(10);
    expect(c.get(3)).toBe(3);
  });

  it("capacity of 1 evicts on every new key", () => {
    const c = new LRUCache(1);
    c.put(1, 1);
    expect(c.get(1)).toBe(1);
    c.put(2, 2); // evicts 1
    expect(c.get(1)).toBe(-1);
    expect(c.get(2)).toBe(2);
  });

  it("get refreshes recency (not just put)", () => {
    const c = new LRUCache(2);
    c.put(1, 1);
    c.put(2, 2);
    expect(c.get(1)).toBe(1); // touch 1 -> 2 is now LRU
    c.put(3, 3); // evicts 2
    expect(c.get(1)).toBe(1);
    expect(c.get(2)).toBe(-1);
  });

  it("stays O(1) across many operations", () => {
    const n = 1_000_000;
    const c = new LRUCache(1000);
    for (let i = 0; i < n; i++) c.put(i, i);
    // only the last 1000 keys survive
    expect(c.get(n - 1)).toBe(n - 1);
    expect(c.get(n - 1000)).toBe(n - 1000);
    expect(c.get(n - 1001)).toBe(-1);
    expect(c.get(0)).toBe(-1);
  });
});
