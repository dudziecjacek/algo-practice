import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { mergeSort } = process.env.REF ? solution : practice;

describe("Merge Sort", () => {
  it("fixed tests", () => {
    expect(mergeSort([5, 2, 4, 1, 3])).toStrictEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([1])).toStrictEqual([1]);
    expect(mergeSort([])).toStrictEqual([]);
  });

  it("edge cases", () => {
    expect(mergeSort([2, 1])).toStrictEqual([1, 2]);
    expect(mergeSort([3, 3, 1, 1, 2])).toStrictEqual([1, 1, 2, 3, 3]); // duplicates
    expect(mergeSort([-2, 5, -8, 0])).toStrictEqual([-8, -2, 0, 5]); // negatives
  });

  it("does not mutate the input", () => {
    const input = [3, 1, 2];
    mergeSort(input);
    expect(input).toStrictEqual([3, 1, 2]);
  });

  it("sorts a large shuffled array", () => {
    const n = 100_000;
    const arr = Array.from({ length: n }, (_, i) => (i * 7919) % n);
    const expected = Array.from({ length: n }, (_, i) => i);
    expect(mergeSort(arr)).toStrictEqual(expected);
  });
});
