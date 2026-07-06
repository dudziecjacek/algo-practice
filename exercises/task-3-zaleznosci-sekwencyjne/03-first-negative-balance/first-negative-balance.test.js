import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { firstNegative } = process.env.REF ? solution : practice;

describe("First Negative Balance", () => {
  it("fixed tests", () => {
    expect(firstNegative([10, -5, -3, -4, 8])).toBe(3);
    expect(firstNegative([5, 5, 5])).toBe(-1);
    expect(firstNegative([-1, 10, 10])).toBe(0);
    expect(firstNegative([3, -3, -1])).toBe(2);
  });

  it("edge cases", () => {
    expect(firstNegative([])).toBe(-1);
    expect(firstNegative([0, 0, 0])).toBe(-1); // zero is not negative
    expect(firstNegative([1, -1, -1, 5])).toBe(2); // returns the first dip, not a later one
    expect(firstNegative([-5])).toBe(0);
  });
});
