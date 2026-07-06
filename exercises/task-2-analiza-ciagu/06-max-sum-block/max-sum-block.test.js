import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { maxSumBlock } = process.env.REF ? solution : practice;

describe("Max Sum Block", () => {
  it("fixed tests", () => {
    expect(maxSumBlock([1, 2, 3, 4, 5, 6], 3)).toBe(11);
    expect(maxSumBlock([1, 2, 3, 4], 2)).toBe(7);
    expect(maxSumBlock([-1, -2, -3, -4], 2)).toBe(-3);
    expect(maxSumBlock([5], 1)).toBe(5);
  });

  it("edge cases", () => {
    expect(maxSumBlock([5, 3, 8, 1, 9, 2], 1)).toBe(28); // one block = whole-array sum
    expect(maxSumBlock([0, 0, 0, 0], 2)).toBe(0);
    expect(maxSumBlock([-5, -5, 1, 0], 2)).toBe(1); // block sums -10, 1 -> 1
  });

  it(
    "handles 1M elements in 4 blocks (slice+reduce clones per block; a prefix rescan per block is O(n^2))",
    () => {
      const n = 1_000_000;
      const arr = new Array(n).fill(1);
      arr[600_000] = 1000; // block 2 sums to 250_999, the rest to 250_000
      expect(maxSumBlock(arr, 4)).toBe(250_999);
    },
    2000
  );
});
