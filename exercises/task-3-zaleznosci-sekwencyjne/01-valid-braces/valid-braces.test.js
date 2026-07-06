import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { validBraces } = process.env.REF ? solution : practice;

describe("Valid Braces", () => {
  it("fixed tests", () => {
    expect(validBraces("(){}[]")).toBe(true);
    expect(validBraces("([{}])")).toBe(true);
    expect(validBraces("(}")).toBe(false);
    expect(validBraces("[(])")).toBe(false);
    expect(validBraces("[({})](]")).toBe(false);
  });

  it("edge cases", () => {
    expect(validBraces("")).toBe(true); // nothing to close
    expect(validBraces("(")).toBe(false); // unclosed opener
    expect(validBraces(")")).toBe(false); // closer with nothing to close
    expect(validBraces("[({})]")).toBe(true);
  });

  it(
    "stays fast on a 600k-char string (a replace('()','')-style loop is O(n^2) and would time out)",
    () => {
      const k = 100_000;
      expect(validBraces("([{".repeat(k) + "}])".repeat(k))).toBe(true);
      expect(validBraces("([{".repeat(k) + "}])".repeat(k) + ")")).toBe(false);
    },
    2000
  );
});
