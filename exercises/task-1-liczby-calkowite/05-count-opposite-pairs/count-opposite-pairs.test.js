import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { countOppositePairs } = process.env.REF ? solution : practice;

describe("Count Opposite Pairs", () => {
  it("fixed tests", () => {
    expect(countOppositePairs([1, -1, 2, -2, 1])).toBe(3);
    expect(countOppositePairs([0, 0, 0])).toBe(3);
    expect(countOppositePairs([1, 2, 3])).toBe(0);
    expect(countOppositePairs([-4, 4])).toBe(1);
  });

  it("edge cases", () => {
    expect(countOppositePairs([])).toBe(0);
    expect(countOppositePairs([5])).toBe(0);
    expect(countOppositePairs([0, 0])).toBe(1); // one pair of zeros
    expect(countOppositePairs([2, 2, -2])).toBe(2); // two 2s each pair with the single -2
    expect(countOppositePairs([3, -3, 3, -3])).toBe(4); // 2 * 2
  });

  it("stays fast on large inputs (an O(n^2) pair scan would time out here)", () => {
    const arr = Array.from({ length: 500_000 }, (_, i) =>
      i % 2 === 0 ? 1 : -1,
    );
    // 250k ones and 250k minus-ones -> 250000 * 250000 pairs
    expect(countOppositePairs(arr)).toBe(250_000 * 250_000);
  });
});
