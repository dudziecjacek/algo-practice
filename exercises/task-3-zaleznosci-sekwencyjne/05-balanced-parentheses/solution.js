export function balancedParens(s) {
  let open = 0;

  for (const ch of s) {
    if (ch === "(") {
      open++;
    } else if (ch === ")") {
      open--;
      if (open < 0) return false; // closed something never opened
    }
  }

  return open === 0;
}
