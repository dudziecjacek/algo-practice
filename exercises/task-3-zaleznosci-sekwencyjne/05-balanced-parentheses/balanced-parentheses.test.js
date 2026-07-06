import { describe, it, expect } from "vitest";
import * as solution from "./solution.js";
import * as practice from "./practice.js";

const { balancedParens } = process.env.REF ? solution : practice;

describe("Balanced Parentheses", () => {
  it("fixed tests", () => {
    expect(balancedParens("(())")).toBe(true);
    expect(balancedParens("()()")).toBe(true);
    expect(balancedParens("(()")).toBe(false);
    expect(balancedParens("())(")).toBe(false);
  });

  it("edge cases", () => {
    expect(balancedParens("")).toBe(true);
    expect(balancedParens("(")).toBe(false);
    expect(balancedParens(")")).toBe(false);
    expect(balancedParens(")(")).toBe(false); // nets to 0 but out of order
    expect(balancedParens("(".repeat(1000) + ")".repeat(1000))).toBe(true);
  });

  it(
    "stays fast on 400k+ chars (a replace('()','') loop is O(n^2) and would time out)",
    () => {
      expect(balancedParens("()".repeat(200_000))).toBe(true);
      expect(balancedParens("(".repeat(300_000) + ")".repeat(300_000))).toBe(true);
      expect(balancedParens("()".repeat(200_000) + ")(")).toBe(false);
    },
    2000
  );
});
