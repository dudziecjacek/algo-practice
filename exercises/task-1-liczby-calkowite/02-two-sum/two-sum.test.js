import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { twoSum } = process.env.REF ? solution : practice;

describe("Two Sum", () => {
  it("fixed tests", () => {
    expect(twoSum([1, 2, 3], 4)).toStrictEqual([0, 2]);
    expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
    expect(twoSum([2, 2, 3], 4)).toStrictEqual([0, 1]);
    expect(twoSum([1234, 5678, 9012], 14690)).toStrictEqual([1, 2]);
  });

  it("edge cases", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toStrictEqual([0, 3]); // two zeros
    expect(twoSum([2, 1, 1, 2, 0], 3)).toStrictEqual([2, 3]); // first is smaller than second
    expect(twoSum([-3, 3], 0)).toStrictEqual([0, 1]); // negatives
    expect(twoSum([5, 75, 25], 100)).toStrictEqual([1, 2]);
  });

  it("stays fast on large inputs", () => {
    const n = 500_000;
    const arr = Array.from({ length: n }, (_, i) => i); // 0..n-1
    expect(twoSum(arr, n - 3 + (n - 2))).toStrictEqual([n - 3, n - 2]);
  });
});
