import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { canJump } = process.env.REF ? solution : practice;

describe("Jump Game", () => {
  it("fixed tests", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    expect(canJump([0])).toBe(true);
  });

  it("edge cases", () => {
    expect(canJump([1, 0])).toBe(true);
    expect(canJump([0, 1])).toBe(false); // stuck at index 0
    expect(canJump([2, 0, 0])).toBe(true); // jump over the zeros
    expect(canJump([1, 1, 1, 1])).toBe(true);
    expect(canJump([5, 0, 0, 0, 0, 0])).toBe(true); // one big jump
  });

  it("stays fast on large inputs", () => {
    const n = 1_000_000;
    const arr = new Array(n).fill(1);
    expect(canJump(arr)).toBe(true);
    arr[n - 2] = 0; // a dead 0 right before the end...
    expect(canJump(arr)).toBe(false); // ...you land on it and get stuck
    arr[n - 3] = 2; // give n-3 enough reach to jump over the 0
    expect(canJump(arr)).toBe(true);
  });
});
