import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { equilibrium } = process.env.REF ? solution : practice;

describe("Equilibrium Index", () => {
  it("fixed tests", () => {
    expect(equilibrium([-7, 1, 5, 2, -4, 3, 0])).toBe(3);
    expect(equilibrium([1, 2, 3, 4, 3, 2, 1])).toBe(3);
    expect(equilibrium([1, 2, 3])).toBe(-1);
    expect(equilibrium([10])).toBe(0);
    expect(equilibrium([])).toBe(-1);
  });

  it("edge cases", () => {
    expect(equilibrium([0, 0, 0, 0])).toBe(0); // first match wins, not last
    expect(equilibrium([5, -5, 0])).toBe(2); // right side empty, left sums to 0
    expect(equilibrium([0, 5, -5])).toBe(0); // left side empty, right sums to 0
    expect(equilibrium([2, 3])).toBe(-1);
  });
});
