import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { sumPairs } = process.env.REF ? solution : practice;

describe("Sum of Pairs", () => {
  it("fixed tests", () => {
    expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toStrictEqual([1, 7]);
    expect(sumPairs([1, -2, 3, 0, -6, 1], -6)).toStrictEqual([0, -6]);
    expect(sumPairs([20, -13, 40], -7)).toBeUndefined();
    expect(sumPairs([1, 2, 3, 4, 1, 0], 2)).toStrictEqual([1, 1]);
    expect(sumPairs([10, 5, 2, 3, 7, 5], 10)).toStrictEqual([3, 7]);
  });

  it("edge cases", () => {
    expect(sumPairs([], 5)).toBeUndefined();
    expect(sumPairs([5], 5)).toBeUndefined(); // one element can't pair
    expect(sumPairs([0, 0], 0)).toStrictEqual([0, 0]);
    // earliest completion wins, not the smallest values
    expect(sumPairs([4, 5, 1, 6, 3], 7)).toStrictEqual([1, 6]);
  });

  it("stays fast on large inputs (an O(n^2) pair scan would time out here)", () => {
    const n = 500_000;
    const arr = Array.from({ length: n }, (_, i) => i); // 0..n-1, no pair sums to a huge target
    expect(sumPairs(arr, 2 * n)).toBeUndefined();
  });
});
