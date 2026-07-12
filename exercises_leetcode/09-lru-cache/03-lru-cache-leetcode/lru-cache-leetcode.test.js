import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { LRUCache } = process.env.REF ? solution : practice;

// LeetCode-style driver: run a list of operations with their args and
// collect the output array (constructor + put -> null, get -> value).
function runOps(ops, args) {
  const out = [];
  let cache;
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "LRUCache":
        cache = new LRUCache(args[i][0]);
        out.push(null);
        break;
      case "put":
        cache.put(args[i][0], args[i][1]);
        out.push(null);
        break;
      case "get":
        out.push(cache.get(args[i][0]));
        break;
      default:
        throw new Error(`unknown op ${ops[i]}`);
    }
  }
  return out;
}

describe("LRU Cache (LeetCode 146)", () => {
  it("Example 1 (exact LeetCode I/O)", () => {
    const ops = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"];
    const args = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
    expect(runOps(ops, args)).toStrictEqual([null, null, null, 1, null, -1, null, -1, 3, 4]);
  });

  it("updating an existing key refreshes recency (and does not grow size)", () => {
    const ops = ["LRUCache", "put", "put", "put", "put", "get", "get", "get"];
    // cap 2: put(1,1),put(2,2),put(1,10) refreshes 1, put(3,3) evicts 2
    const args = [[2], [1, 1], [2, 2], [1, 10], [3, 3], [2], [1], [3]];
    expect(runOps(ops, args)).toStrictEqual([null, null, null, null, null, -1, 10, 3]);
  });

  it("get refreshes recency, not just put", () => {
    const ops = ["LRUCache", "put", "put", "get", "put", "get", "get"];
    // cap 2: get(1) makes 2 the LRU, so put(3,3) evicts 2
    const args = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [1]];
    expect(runOps(ops, args)).toStrictEqual([null, null, null, 1, null, -1, 1]);
  });

  it("handles key 0 and value 0 (presence != truthiness)", () => {
    const c = new LRUCache(2);
    c.put(0, 0);
    expect(c.get(0)).toBe(0); // present with value 0, must NOT read as -1
    c.put(1, 0);
    c.put(2, 0); // evicts key 0 (LRU)
    expect(c.get(0)).toBe(-1);
    expect(c.get(1)).toBe(0);
    expect(c.get(2)).toBe(0);
  });

  it("capacity 1 evicts on every new key", () => {
    const c = new LRUCache(1);
    c.put(1, 1);
    c.put(2, 2); // evicts 1
    expect(c.get(1)).toBe(-1);
    expect(c.get(2)).toBe(2);
  });

  it("stays O(1) across the max call volume (2 * 10^5 calls)", () => {
    const capacity = 3000;
    const c = new LRUCache(capacity);
    const CALLS = 200_000;
    for (let i = 0; i < CALLS; i++) {
      c.put(i % 10_001, i % 100_001); // keys/values within constraints
      if (i % 3 === 0) c.get((i - 1) % 10_001);
    }
    // never exceeds capacity
    expect(c.map.size).toBeLessThanOrEqual(capacity);
    // a just-touched key is still present
    c.put(4242, 777);
    expect(c.get(4242)).toBe(777);
  });
});
