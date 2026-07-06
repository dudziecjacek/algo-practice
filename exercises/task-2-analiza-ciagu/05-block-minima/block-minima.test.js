import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { blockMinima } = process.env.REF ? solution : practice;

describe("Block Minima", () => {
  it("fixed tests", () => {
    expect(blockMinima([1, 5, 2, 8, 3, 3], 2)).toStrictEqual([1, 2, 3]);
    expect(blockMinima([4, 4, 4, 4], 2)).toStrictEqual([4, 4]);
    expect(blockMinima([-5, -1, -9, -3], 2)).toStrictEqual([-5, -9]);
    expect(blockMinima([7], 1)).toStrictEqual([7]);
  });

  it("edge cases", () => {
    expect(blockMinima([3, 1, 4, 1, 5, 9], 6)).toStrictEqual([1]); // one block = whole array
    expect(blockMinima([3, 1, 4, 1, 5, 9], 1)).toStrictEqual([3, 1, 4, 1, 5, 9]); // block of 1 = identity
  });
});
