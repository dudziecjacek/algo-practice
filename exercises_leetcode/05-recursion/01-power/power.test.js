import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { power } = process.env.REF ? solution : practice;

describe("Power (x^n)", () => {
  it("fixed tests", () => {
    expect(power(2, 10)).toBe(1024);
    expect(power(2, -2)).toBe(0.25);
    expect(power(3, 0)).toBe(1);
    expect(power(2, 1)).toBe(2);
  });

  it("edge cases", () => {
    expect(power(5, 0)).toBe(1);
    expect(power(1, 1000000)).toBe(1);
    expect(power(-2, 3)).toBe(-8); // negative base, odd power
    expect(power(-2, 2)).toBe(4); // negative base, even power
    expect(power(2, -3)).toBeCloseTo(0.125, 10);
  });

  it("uses log-depth recursion for large exponents", () => {
    expect(power(2, 30)).toBe(1073741824);
    expect(power(3, 20)).toBe(3486784401);
  });
});
