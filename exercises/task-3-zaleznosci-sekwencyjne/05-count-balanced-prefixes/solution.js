export function countBalancedPrefixes(s) {
  let balance = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    balance += s[i] === "(" ? 1 : -1;
    if (balance < 0) break; // a closer with nothing to match — no later prefix can be valid
    if (balance === 0) count++; // everything opened so far is now closed
  }

  return count;
}
