import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

// `npm test` runs your practice.js; `npm run verify` runs the reference solution.js
const { firstOppositePair } = process.env.REF ? solution : practice;

describe("First Opposite Pair", () => {
  it("fixed tests", () => {
    expect(firstOppositePair([3, 1, -2, 5, -1, 7])).toBe(1);
    expect(firstOppositePair([4, 2, 6, -6, 1])).toBe(6);
    expect(firstOppositePair([1, 2, 3, 4])).toBe(-1);
    expect(firstOppositePair([5, -5])).toBe(5);
  });

  it("edge cases", () => {
    expect(firstOppositePair([])).toBe(-1);
    expect(firstOppositePair([7])).toBe(-1);
    expect(firstOppositePair([0, 0])).toBe(0);
    expect(firstOppositePair([-3, 3, -3])).toBe(3);
    // the pair that completes EARLIEST wins, not the smallest/largest value
    expect(firstOppositePair([2, -1, 1, -2])).toBe(1);
  });

  it("stays fast on large inputs (an O(n^2) rebuild would time out here)", () => {
    const arr = Array.from({ length: 200_000 }, (_, i) => i + 1); // no pair present
    expect(firstOppositePair(arr)).toBe(-1);
  });
});
