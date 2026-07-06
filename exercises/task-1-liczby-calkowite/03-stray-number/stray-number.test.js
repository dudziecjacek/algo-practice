import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { stray } = process.env.REF ? solution : practice;

describe("Find the Stray Number", () => {
  it("fixed tests", () => {
    expect(stray([1, 1, 1, 1, 2, 1, 1])).toBe(2);
    expect(stray([17, 17, 3, 17, 17])).toBe(3);
  });

  it("edge cases", () => {
    expect(stray([5, 5, 5, 5, 9])).toBe(9);
    expect(stray([2, 4, 4])).toBe(2); // stray at the front
  });
});
