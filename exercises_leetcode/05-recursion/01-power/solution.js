export function power(x, n) {
  if (n < 0) return 1 / power(x, -n);
  if (n === 0) return 1;

  const half = power(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : half * half * x;
}
