import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { isValidBST } = process.env.REF ? solution : practice;

function buildTree(arr) {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = { val: arr[0], left: null, right: null };
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = { val: arr[i], left: null, right: null };
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = { val: arr[i], left: null, right: null };
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

describe("Validate Binary Search Tree", () => {
  it("fixed tests", () => {
    expect(isValidBST(buildTree([2, 1, 3]))).toBe(true);
    expect(isValidBST(buildTree([5, 1, 4, null, null, 3, 6]))).toBe(false);
    expect(isValidBST(null)).toBe(true);
  });

  it("edge cases", () => {
    expect(isValidBST(buildTree([1]))).toBe(true);
    expect(isValidBST(buildTree([2, 2, 2]))).toBe(false); // equal values not allowed
    // the classic deep-violation trap: 3 sits under root's right but is < 5
    expect(isValidBST(buildTree([5, 4, 6, null, null, 3, 7]))).toBe(false);
    expect(isValidBST(buildTree([10, 5, 15, null, null, 6, 20]))).toBe(false); // 6 < 10
    expect(isValidBST(buildTree([10, 5, 15, 1, 8, 12, 20]))).toBe(true);
  });
});
