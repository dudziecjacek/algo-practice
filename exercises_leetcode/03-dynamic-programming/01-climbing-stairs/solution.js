export function climbStairs(n) {
  if (n <= 2) return n;

  let a = 1; // ways(1)
  let b = 2; // ways(2)
  for (let i = 3; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}
