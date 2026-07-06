export function firstUnsortedIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return i;
    }
  }
  return -1;
}
