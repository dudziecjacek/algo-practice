import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { climbStairs } = process.env.REF ? solution : practice;

describe("Climbing Stairs", () => {
  it("fixed tests", () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(5)).toBe(8);
  });

  it("edge cases", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(4)).toBe(5);
    expect(climbStairs(10)).toBe(89);
  });

  it("stays fast (no exponential recursion) for large n", () => {
    expect(climbStairs(45)).toBe(1_836_311_903);
  });
});
