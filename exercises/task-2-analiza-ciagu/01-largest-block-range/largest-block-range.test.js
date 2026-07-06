import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { largestBlockRange } = process.env.REF ? solution : practice;

describe("Largest Block Range", () => {
  it("fixed tests", () => {
    expect(largestBlockRange([1, 5, 2, 8, 3, 3], 3)).toBe(6);
    expect(largestBlockRange([10, 1, 2, 9], 2)).toBe(9);
    expect(largestBlockRange([7, 7, 1, 2, 3, 100], 3)).toBe(97);
    expect(largestBlockRange([4, 4, 4, 4], 2)).toBe(0);
  });

  it("edge cases", () => {
    expect(largestBlockRange([5, 3, 8, 1, 9, 2], 1)).toBe(8); // k=1: whole array is one block
    expect(largestBlockRange([-5, 5, 0, 0], 2)).toBe(10); // negatives
    expect(largestBlockRange([42], 1)).toBe(0); // single element block
  });

  it("handles 1M elements as one block without stack overflow (Math.min(...) would throw)", () => {
    const n = 1_000_000;
    const arr = Array.from({ length: n }, (_, i) => i);
    expect(largestBlockRange(arr, 1)).toBe(n - 1);
  });
});
