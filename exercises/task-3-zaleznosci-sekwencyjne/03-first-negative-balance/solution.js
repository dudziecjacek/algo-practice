export function firstNegative(transactions) {
  let currentBalance = 0;
  for (let i = 0; i < transactions.length; i++) {
    currentBalance += transactions[i];
    if (currentBalance < 0) {
      return i;
    }
  }
  return -1;
}
