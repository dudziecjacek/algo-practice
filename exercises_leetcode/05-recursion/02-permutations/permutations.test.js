import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { permutations } = process.env.REF ? solution : practice;

describe("Permutations", () => {
  it("fixed tests (backtracking order)", () => {
    expect(permutations([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
    expect(permutations([1, 2])).toStrictEqual([
      [1, 2],
      [2, 1],
    ]);
    expect(permutations([1])).toStrictEqual([[1]]);
  });

  it("edge cases", () => {
    expect(permutations([])).toStrictEqual([[]]); // one empty permutation
    expect(permutations([7, 8, 9]).length).toBe(6); // 3! = 6
    expect(permutations([1, 2, 3, 4]).length).toBe(24); // 4! = 24
  });

  it("produces distinct permutations", () => {
    const perms = permutations([1, 2, 3, 4]);
    const asStrings = new Set(perms.map((p) => p.join(",")));
    expect(asStrings.size).toBe(24);
  });
});
