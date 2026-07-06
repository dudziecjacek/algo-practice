import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { smallestMissingPositive } = process.env.REF ? solution : practice;

describe("Smallest Missing Positive Integer", () => {
  it("fixed tests", () => {
    expect(smallestMissingPositive([1, 3, 6, 4, 1, 2])).toBe(5);
    expect(smallestMissingPositive([1, 2, 3])).toBe(4);
    expect(smallestMissingPositive([-1, -3])).toBe(1);
  });

  it("edge cases", () => {
    expect(smallestMissingPositive([1])).toBe(2);
    expect(smallestMissingPositive([2])).toBe(1);
    // values far larger than the array length must not confuse the bound
    expect(smallestMissingPositive([5000, 1, 2, 3, 4])).toBe(5);
    expect(smallestMissingPositive([100, 200, 300])).toBe(1);
  });

  it("never falls through to undefined on a full run of 1..N", () => {
    const n = 100_000;
    const arr = Array.from({ length: n }, (_, i) => i + 1); // [1..100000]
    expect(smallestMissingPositive(arr)).toBe(n + 1);
  });
});
