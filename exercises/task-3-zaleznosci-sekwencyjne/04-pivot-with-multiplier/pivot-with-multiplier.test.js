import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { pivotMultiplier } = process.env.REF ? solution : practice;

describe("Pivot with Multiplier", () => {
  it("fixed tests", () => {
    expect(pivotMultiplier([1, 2, 3, 6], 2)).toBe(2);
    expect(pivotMultiplier([4, 0, 8], 2)).toBe(1);
    expect(pivotMultiplier([-3, 1, 2, 1], 1)).toBe(3); // k=1 reduces to plain equilibrium
    expect(pivotMultiplier([1, 2, 3], 5)).toBe(-1);
  });

  it("edge cases", () => {
    expect(pivotMultiplier([0, 0, 0, 0], 5)).toBe(0);
    expect(pivotMultiplier([10], 3)).toBe(0);
    expect(pivotMultiplier([], 2)).toBe(-1);
    expect(pivotMultiplier([2, 1, 1, 1, 2], 1)).toBe(2);
  });
});
