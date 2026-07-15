// Big O quiz database.
//
// Each question has:
//   id          — stable identifier
//   title       — short human name
//   code        — the JS function to analyse (as a string, verbatim)
//   time        — correct TIME complexity  (one of COMPLEXITIES)
//   space       — correct SPACE complexity (one of COMPLEXITIES, extra/auxiliary space)
//   timeWhy      — explanation for the time answer
//   spaceWhy     — explanation for the space answer
//
// Space is measured as AUXILIARY space (what the function allocates on top of
// its input), and for recursion it counts the maximum call-stack depth.
//
// Valid answer keys, matching the buttons in the UI:
export const COMPLEXITIES = [
  'O(1)',
  'O(log n)',
  'O(n)',
  'O(n log n)',
  'O(n^2)',
  'O(2^n)',
  'O(n!)',
];

export const QUESTIONS = [
  {
    id: 'first-element',
    title: 'Return the first element',
    code: `function firstElement(arr) {
  return arr[0];
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy:
      'A single indexed access. It does the same amount of work no matter how large the array is.',
    spaceWhy: 'No new data structures — only the returned reference.',
  },
  {
    id: 'sum-loop',
    title: 'Sum every element',
    code: `function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'One pass over n elements; the loop body is constant work.',
    spaceWhy: 'Only a single accumulator variable, regardless of n.',
  },
  {
    id: 'all-pairs',
    title: 'Print every pair',
    code: `function allPairs(arr) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs.length;
}`,
    time: 'O(n^2)',
    space: 'O(n^2)',
    timeWhy:
      'The inner loop runs n times for each of the n outer iterations → n × n = n² total.',
    spaceWhy: 'The pairs array grows to n² entries before we read its length.',
  },
  {
    id: 'binary-search',
    title: 'Binary search (sorted array)',
    code: `function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy:
      'Each step halves the search range, so it takes about log₂(n) steps to finish.',
    spaceWhy: 'Only a couple of index variables — iterative, no recursion.',
  },
  {
    id: 'merge-sort',
    title: 'Merge sort',
    code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const merged = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    merged.push(left[i] <= right[j] ? left[i++] : right[j++]);
  }
  while (i < left.length) merged.push(left[i++]);
  while (j < right.length) merged.push(right[j++]);
  return merged;
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy:
      'log n levels of recursion, and each level does O(n) work merging — n × log n.',
    spaceWhy:
      'The merged arrays allocated at each level total O(n) extra memory.',
  },
  {
    id: 'fib-naive',
    title: 'Naive recursive Fibonacci',
    code: `function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}`,
    time: 'O(2^n)',
    space: 'O(n)',
    timeWhy:
      'Each call spawns two more calls, doubling the work as n grows — an exponential call tree.',
    spaceWhy:
      'The call stack only goes n deep at any moment (one branch at a time), so space is linear.',
  },
  {
    id: 'permutations',
    title: 'Generate all permutations',
    code: `function permutations(arr) {
  const result = [];
  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(
        [...current, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
    }
  }
  permute([], arr);
  return result;
}`,
    time: 'O(n!)',
    space: 'O(n!)',
    timeWhy:
      'There are n! permutations of n items, and the function builds every one of them.',
    spaceWhy:
      'The result array holds all n! permutations, so the output dominates memory.',
  },
  {
    id: 'build-set',
    title: 'Collect unique values into a Set',
    code: `function unique(arr) {
  const seen = new Set();
  for (const x of arr) {
    seen.add(x);
  }
  return seen;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One pass over n elements; Set.add is amortized O(1).',
    spaceWhy: 'In the worst case the Set stores all n elements.',
  },
  {
    id: 'constant-math',
    title: 'Constant arithmetic',
    code: `function midpoint(a, b) {
  const diff = b - a;
  const half = diff / 2;
  return a + half;
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'A fixed number of arithmetic operations, independent of any input size.',
    spaceWhy: 'A couple of scalar locals.',
  },
  {
    id: 'reverse-string',
    title: 'Reverse a string into a new one',
    code: `function reverse(str) {
  let out = '';
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One pass over n characters.',
    spaceWhy: 'The output string grows to n characters.',
  },
  {
    id: 'two-pointer-palindrome',
    title: 'Palindrome check with two pointers',
    code: `function isPalindrome(str) {
  let lo = 0, hi = str.length - 1;
  while (lo < hi) {
    if (str[lo] !== str[hi]) return false;
    lo++;
    hi--;
  }
  return true;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'The two pointers together cover n characters once.',
    spaceWhy: 'Only two index variables.',
  },
  {
    id: 'bubble-sort',
    title: 'Bubble sort',
    code: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy:
      'Even though the inner loop shrinks, the total comparisons are ~n²/2, which is O(n²).',
    spaceWhy: 'Sorts in place — only a temp variable for swapping.',
  },
  {
    id: 'count-digits',
    title: 'Count digits of a number',
    code: `function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy:
      'Dividing by 10 each step; the number of iterations is proportional to log₁₀(n).',
    spaceWhy: 'A single counter.',
  },
  {
    id: 'grid-traversal',
    title: 'Visit every cell of an n×n grid',
    code: `function gridSum(grid) {
  // grid is n rows by n columns
  let total = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      total += grid[r][c];
    }
  }
  return total;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy:
      'For an n×n grid there are n² cells, each visited once. (In terms of the side length n.)',
    spaceWhy: 'A single accumulator.',
  },
  {
    id: 'fast-power',
    title: 'Fast exponentiation',
    code: `function power(base, exp) {
  if (exp === 0) return 1;
  const half = power(base, Math.floor(exp / 2));
  if (exp % 2 === 0) return half * half;
  return half * half * base;
}`,
    time: 'O(log n)',
    space: 'O(log n)',
    timeWhy: 'The exponent is halved each recursive call → log(exp) calls.',
    spaceWhy: 'The recursion goes log(exp) frames deep.',
  },
  {
    id: 'power-set',
    title: 'Generate the power set (all subsets)',
    code: `function subsets(arr) {
  const result = [[]];
  for (const x of arr) {
    const len = result.length;
    for (let i = 0; i < len; i++) {
      result.push([...result[i], x]);
    }
  }
  return result;
}`,
    time: 'O(2^n)',
    space: 'O(2^n)',
    timeWhy:
      'Each element doubles the number of subsets, giving 2ⁿ subsets built in total.',
    spaceWhy: 'The result holds all 2ⁿ subsets.',
  },
  {
    id: 'factorial',
    title: 'Recursive factorial',
    code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One recursive call per value from n down to 1 → n calls.',
    spaceWhy: 'The call stack is n frames deep before it unwinds.',
  },
  {
    id: 'sort-then-scan',
    title: 'Sort, then find max gap',
    code: `function maxGap(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  let gap = 0;
  for (let i = 1; i < sorted.length; i++) {
    gap = Math.max(gap, sorted[i] - sorted[i - 1]);
  }
  return gap;
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy:
      'The sort is O(n log n), which dominates the following O(n) linear scan.',
    spaceWhy: 'A sorted copy of the array is allocated (n elements).',
  },
  {
    id: 'fixed-inner',
    title: 'Nested loop with a constant inner bound',
    code: `function firstThreeSums(arr) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    let s = 0;
    for (let k = 0; k < 3; k++) {
      s += arr[i + k] ?? 0;
    }
    out.push(s);
  }
  return out;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy:
      'The inner loop always runs exactly 3 times — a constant — so total work is 3n = O(n).',
    spaceWhy: 'The output array grows with n.',
  },
  {
    id: 'triangular',
    title: 'Triangular nested loop',
    code: `function countAscendingPairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) count++;
    }
  }
  return count;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy:
      'The inner loop runs n-1, n-2, … times; the sum is ~n²/2, still O(n²).',
    spaceWhy: 'Only a counter — nothing scales with n.',
  },
  {
    id: 'contains-duplicate',
    title: 'Contains duplicate (with a Set)',
    code: `function containsDuplicate(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'A single pass with O(1) Set lookups.',
    spaceWhy: 'The Set can grow to hold up to n elements.',
  },
  {
    id: 'string-concat-loop',
    title: 'Repeatedly concatenate the growing prefix',
    code: `function stairs(str) {
  let out = '';
  let prefix = '';
  for (let i = 0; i < str.length; i++) {
    prefix += str[i];
    out += prefix + '\\n';
  }
  return out;
}`,
    time: 'O(n^2)',
    space: 'O(n^2)',
    timeWhy:
      'On iteration i we append a prefix of length i; 1+2+…+n characters copied ≈ n²/2.',
    spaceWhy: 'The output accumulates ~n²/2 characters.',
  },
  {
    id: 'halving-loop',
    title: 'Loop that halves each step',
    code: `function halvingCount(n) {
  let steps = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    steps++;
  }
  return steps;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'n is halved every iteration, so it takes about log₂(n) steps.',
    spaceWhy: 'A single counter.',
  },
  {
    id: 'hanoi',
    title: 'Towers of Hanoi',
    code: `function hanoi(n, from, to, via, moves) {
  if (n === 0) return;
  hanoi(n - 1, from, via, to, moves);
  moves.push([from, to]);
  hanoi(n - 1, via, to, from, moves);
}`,
    time: 'O(2^n)',
    space: 'O(n)',
    timeWhy:
      'Each call makes two recursive calls of size n-1, producing 2ⁿ-1 moves.',
    spaceWhy:
      'The recursion depth is at most n (the moves array aside, the stack is linear).',
  },
  {
    id: 'linear-search',
    title: 'Linear search',
    code: `function indexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy:
      'Worst case scans all n elements. (Big O describes the worst case here.)',
    spaceWhy: 'Only an index variable.',
  },
  {
    id: 'memoized-fib',
    title: 'Memoized Fibonacci',
    code: `function fib(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy:
      'Memoization means each of the n values is computed once; cached hits are O(1).',
    spaceWhy: 'The memo object stores n results, and the stack goes n deep.',
  },

  // ---- O(1) ----------------------------------------------------------
  {
    id: 'is-even',
    title: 'Is the number even?',
    code: `function isEven(n) {
  return n % 2 === 0;
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'A single modulo test, independent of any input size.',
    spaceWhy: 'No allocation.',
  },
  {
    id: 'get-last',
    title: 'Return the last element',
    code: `function last(arr) {
  return arr[arr.length - 1];
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'Reading .length and one indexed access are both constant.',
    spaceWhy: 'Only the returned reference.',
  },
  {
    id: 'circle-area',
    title: 'Area of a circle',
    code: `function circleArea(r) {
  return Math.PI * r * r;
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'A fixed arithmetic expression.',
    spaceWhy: 'No data structures.',
  },
  {
    id: 'swap-first-two',
    title: 'Swap the first two elements',
    code: `function swapFirstTwo(arr) {
  const t = arr[0];
  arr[0] = arr[1];
  arr[1] = t;
  return arr;
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'Three assignments, regardless of array size.',
    spaceWhy: 'One temp variable; the array is mutated in place.',
  },
  {
    id: 'map-lookup',
    title: 'Look up a value in a Map',
    code: `function priceOf(prices, item) {
  return prices.get(item) ?? 0;
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'Map.get is (amortized) constant time.',
    spaceWhy: 'No new allocation.',
  },
  {
    id: 'stack-peek',
    title: 'Peek at the top of a stack',
    code: `function peek(stack) {
  if (stack.length === 0) return null;
  return stack[stack.length - 1];
}`,
    time: 'O(1)',
    space: 'O(1)',
    timeWhy: 'A length check and one indexed read.',
    spaceWhy: 'No allocation.',
  },

  // ---- O(log n) ------------------------------------------------------
  {
    id: 'gcd-euclid',
    title: 'Greatest common divisor (Euclid)',
    code: `function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy:
      'Each step replaces the pair with (b, a mod b), shrinking it by a constant factor → logarithmic in the numbers.',
    spaceWhy: 'Iterative — only two variables.',
  },
  {
    id: 'binary-search-recursive',
    title: 'Binary search (recursive)',
    code: `function bsearch(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = (lo + hi) >> 1;
  if (arr[mid] === target) return mid;
  return arr[mid] < target
    ? bsearch(arr, target, mid + 1, hi)
    : bsearch(arr, target, lo, mid - 1);
}`,
    time: 'O(log n)',
    space: 'O(log n)',
    timeWhy: 'Each call halves the range → about log₂(n) calls.',
    spaceWhy: 'The recursion nests log n frames deep.',
  },
  {
    id: 'is-power-of-two',
    title: 'Is n a power of two?',
    code: `function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'Dividing by two each step runs at most log₂(n) times.',
    spaceWhy: 'A single reassigned variable.',
  },
  {
    id: 'bit-length',
    title: 'How many bits to represent n',
    code: `function bitLength(n) {
  let bits = 0;
  while (n > 0) {
    n >>= 1;
    bits++;
  }
  return bits;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'Right-shifting by one is dividing by two → log₂(n) steps.',
    spaceWhy: 'One counter.',
  },
  {
    id: 'steps-by-doubling',
    title: 'Steps to reach n by doubling',
    code: `function stepsToReach(n) {
  let value = 1, steps = 0;
  while (value < n) {
    value *= 2;
    steps++;
  }
  return steps;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'Doubling reaches n in about log₂(n) iterations.',
    spaceWhy: 'Two scalar variables.',
  },
  {
    id: 'first-true-predicate',
    title: 'Binary search a monotonic predicate',
    code: `function firstTrue(n, pred) {
  // pred is false...false,true...true; pred is O(1)
  let lo = 0, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (pred(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'Binary search over the range [0, n] halves it each step.',
    spaceWhy: 'Only index variables.',
  },
  {
    id: 'integer-sqrt',
    title: 'Integer square root by binary search',
    code: `function isqrt(n) {
  let lo = 0, hi = n;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (mid * mid <= n) lo = mid + 1;
    else hi = mid - 1;
  }
  return hi;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'The candidate range is halved each iteration.',
    spaceWhy: 'Only index variables.',
  },
  {
    id: 'divide-by-three',
    title: 'Divide down to 1 by a factor',
    code: `function divideUntilSmall(n) {
  let ops = 0;
  while (n > 1) {
    n = Math.floor(n / 3);
    ops++;
  }
  return ops;
}`,
    time: 'O(log n)',
    space: 'O(1)',
    timeWhy: 'Dividing by 3 each step → log₃(n), still O(log n).',
    spaceWhy: 'One counter.',
  },

  // ---- O(n) ----------------------------------------------------------
  {
    id: 'array-max',
    title: 'Maximum of an array',
    code: `function max(arr) {
  let m = -Infinity;
  for (const x of arr) {
    if (x > m) m = x;
  }
  return m;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'One pass, constant work per element.',
    spaceWhy: 'A single running maximum.',
  },
  {
    id: 'average',
    title: 'Average of an array',
    code: `function average(arr) {
  let total = 0;
  for (const x of arr) {
    total += x;
  }
  return total / arr.length;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'One pass to sum, then a single division.',
    spaceWhy: 'One accumulator.',
  },
  {
    id: 'count-vowels',
    title: 'Count vowels in a string',
    code: `function countVowels(str) {
  let count = 0;
  for (const ch of str) {
    if ('aeiou'.includes(ch)) count++;
  }
  return count;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy:
      'One pass over n characters; the membership check is against a fixed 5-char string, so it is constant.',
    spaceWhy: 'One counter.',
  },
  {
    id: 'reverse-in-place',
    title: 'Reverse an array in place',
    code: `function reverseInPlace(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
    [arr[lo], arr[hi]] = [arr[hi], arr[lo]];
    lo++;
    hi--;
  }
  return arr;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'The two pointers together touch each element once.',
    spaceWhy: 'Swaps in place — no copy.',
  },
  {
    id: 'frequency-map',
    title: 'Build a frequency map',
    code: `function frequencies(arr) {
  const freq = new Map();
  for (const x of arr) {
    freq.set(x, (freq.get(x) ?? 0) + 1);
  }
  return freq;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One pass with O(1) Map operations.',
    spaceWhy: 'The map can hold up to n distinct keys.',
  },
  {
    id: 'two-sum-map',
    title: 'Two Sum with a hash map',
    code: `function twoSum(arr, target) {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const need = target - arr[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(arr[i], i);
  }
  return null;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'A single pass with constant-time lookups.',
    spaceWhy: 'The map may store up to n entries.',
  },
  {
    id: 'filter-evens',
    title: 'Collect the even numbers',
    code: `function evens(arr) {
  const out = [];
  for (const x of arr) {
    if (x % 2 === 0) out.push(x);
  }
  return out;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One pass over n elements.',
    spaceWhy: 'The output can grow to n elements.',
  },
  {
    id: 'digit-sum-string',
    title: 'Sum the digits of a numeric string',
    code: `function digitSum(str) {
  let total = 0;
  for (const ch of str) {
    total += Number(ch);
  }
  return total;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'One pass over n characters.',
    spaceWhy: 'One accumulator.',
  },
  {
    id: 'kadane',
    title: 'Maximum subarray sum (Kadane)',
    code: `function maxSubarray(arr) {
  let best = arr[0], current = arr[0];
  for (let i = 1; i < arr.length; i++) {
    current = Math.max(arr[i], current + arr[i]);
    best = Math.max(best, current);
  }
  return best;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'A single pass tracking the running best.',
    spaceWhy: 'Two scalar variables.',
  },
  {
    id: 'prefix-sums',
    title: 'Build a prefix-sum array',
    code: `function prefixSums(arr) {
  const out = [0];
  for (let i = 0; i < arr.length; i++) {
    out.push(out[i] + arr[i]);
  }
  return out;
}`,
    time: 'O(n)',
    space: 'O(n)',
    timeWhy: 'One pass, constant work per element.',
    spaceWhy: 'The output has n+1 entries.',
  },
  {
    id: 'linked-list-length',
    title: 'Length of a linked list',
    code: `function length(head) {
  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'Walks each of the n nodes once.',
    spaceWhy: 'One counter and one cursor.',
  },
  {
    id: 'iterative-factorial',
    title: 'Iterative factorial',
    code: `function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}`,
    time: 'O(n)',
    space: 'O(1)',
    timeWhy: 'The loop runs n-1 times (work proportional to the value n).',
    spaceWhy: 'A single accumulator.',
  },

  // ---- O(n log n) ----------------------------------------------------
  {
    id: 'native-sort',
    title: 'Sort a numeric array',
    code: `function sortNumbers(arr) {
  return arr.slice().sort((a, b) => a - b);
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy: 'Comparison sorting is O(n log n).',
    spaceWhy: 'A full copy of the array is sorted and returned.',
  },
  {
    id: 'sort-then-dedup',
    title: 'Sort, then remove duplicates',
    code: `function sortedUnique(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0 || sorted[i] !== sorted[i - 1]) out.push(sorted[i]);
  }
  return out;
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy: 'The O(n log n) sort dominates the O(n) dedup pass.',
    spaceWhy: 'A sorted copy plus the output, each O(n).',
  },
  {
    id: 'loop-inner-halving',
    title: 'Outer loop, inner halving loop',
    code: `function work(n) {
  let ops = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      ops++;
    }
  }
  return ops;
}`,
    time: 'O(n log n)',
    space: 'O(1)',
    timeWhy: 'The outer loop runs n times; the inner (doubling j) runs log n times → n × log n.',
    spaceWhy: 'One counter.',
  },
  {
    id: 'sort-by-frequency',
    title: 'Sort elements by frequency',
    code: `function byFrequency(arr) {
  const freq = new Map();
  for (const x of arr) {
    freq.set(x, (freq.get(x) ?? 0) + 1);
  }
  return [...arr].sort((a, b) => freq.get(b) - freq.get(a));
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy: 'The O(n) counting is dominated by the O(n log n) sort.',
    spaceWhy: 'The map and the sorted copy are each O(n).',
  },
  {
    id: 'k-largest-by-sorting',
    title: 'k largest elements (by sorting)',
    code: `function kLargest(arr, k) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted.slice(0, k);
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy: 'Sorting the whole array is O(n log n), regardless of k.',
    spaceWhy: 'A sorted copy of the array.',
  },
  {
    id: 'sort-chars',
    title: 'Sort the characters of a string',
    code: `function sortChars(str) {
  return str.split('').sort().join('');
}`,
    time: 'O(n log n)',
    space: 'O(n)',
    timeWhy: 'Sorting n characters is O(n log n).',
    spaceWhy: 'The character array and result string are O(n).',
  },
  {
    id: 'binary-search-in-loop',
    title: 'n queries, each a binary search',
    code: `function countPresent(queries, sortedArr) {
  // queries has n items, sortedArr has n items
  let count = 0;
  for (const v of queries) {
    let lo = 0, hi = sortedArr.length - 1, found = false;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (sortedArr[mid] === v) { found = true; break; }
      if (sortedArr[mid] < v) lo = mid + 1;
      else hi = mid - 1;
    }
    if (found) count++;
  }
  return count;
}`,
    time: 'O(n log n)',
    space: 'O(1)',
    timeWhy: 'n queries, each an O(log n) binary search → n × log n.',
    spaceWhy: 'Only a few index variables.',
  },

  // ---- O(n^2) --------------------------------------------------------
  {
    id: 'selection-sort',
    title: 'Selection sort',
    code: `function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy: 'For each of n positions it scans the rest → ~n²/2 comparisons.',
    spaceWhy: 'Sorts in place.',
  },
  {
    id: 'insertion-sort',
    title: 'Insertion sort',
    code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy: 'Worst case (reverse-sorted) shifts ~n²/2 elements.',
    spaceWhy: 'Sorts in place.',
  },
  {
    id: 'two-sum-brute',
    title: 'Two Sum, brute force',
    code: `function twoSumBrute(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
  return null;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy: 'It checks every pair → ~n²/2 comparisons.',
    spaceWhy: 'No extra structures.',
  },
  {
    id: 'transpose-matrix',
    title: 'Transpose an n×n matrix',
    code: `function transpose(m) {
  const n = m.length;
  const out = Array.from({ length: n }, () => new Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      out[j][i] = m[i][j];
    }
  }
  return out;
}`,
    time: 'O(n^2)',
    space: 'O(n^2)',
    timeWhy: 'Every one of the n² cells is visited once (n = side length).',
    spaceWhy: 'A brand-new n×n matrix is allocated.',
  },
  {
    id: 'has-duplicate-brute',
    title: 'Contains duplicate, brute force',
    code: `function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy: 'Compares all pairs in the worst case.',
    spaceWhy: 'No extra memory (unlike the Set version).',
  },
  {
    id: 'count-unique-prefixes',
    title: 'Distinct count for each prefix (naive)',
    code: `function countUniquePrefixes(arr) {
  const counts = [];
  for (let i = 0; i < arr.length; i++) {
    const seen = new Set();
    for (let j = 0; j <= i; j++) {
      seen.add(arr[j]);
    }
    counts.push(seen.size);
  }
  return counts;
}`,
    time: 'O(n^2)',
    space: 'O(n)',
    timeWhy:
      'Rebuilding the Set from scratch inside the loop redoes O(i) work each step → ~n²/2 total. (Incremental updates would be O(n).)',
    spaceWhy: 'The Set and output each reach O(n).',
  },
  {
    id: 'max-pairwise-distance',
    title: 'Largest gap between any two values',
    code: `function maxDistance(values) {
  let best = 0;
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      const d = Math.abs(values[i] - values[j]);
      if (d > best) best = d;
    }
  }
  return best;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy: 'Every pair is compared.',
    spaceWhy: 'A single running maximum.',
  },
  {
    id: 'naive-substring',
    title: 'Naive substring search',
    code: `function indexOfNaive(text, pattern) {
  for (let i = 0; i + pattern.length <= text.length; i++) {
    let k = 0;
    while (k < pattern.length && text[i + k] === pattern[k]) k++;
    if (k === pattern.length) return i;
  }
  return -1;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy:
      'For each of ~n start positions it may re-check up to m characters; when m grows with n this is O(n²).',
    spaceWhy: 'Only index counters.',
  },
  {
    id: 'bubble-with-flag',
    title: 'Bubble sort with early-exit flag',
    code: `function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
}`,
    time: 'O(n^2)',
    space: 'O(1)',
    timeWhy:
      'The flag helps only on nearly-sorted input; the worst case is still ~n passes of n work.',
    spaceWhy: 'Sorts in place.',
  },

  // ---- O(2^n) --------------------------------------------------------
  {
    id: 'climbing-stairs-naive',
    title: 'Climbing stairs (naive recursion)',
    code: `function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}`,
    time: 'O(2^n)',
    space: 'O(n)',
    timeWhy: 'Two recursive calls per step recompute the same values → exponential.',
    spaceWhy: 'The call stack is at most n deep.',
  },
  {
    id: 'subset-sum',
    title: 'Subset sum (does any subset hit target?)',
    code: `function canSum(nums, target, i = 0) {
  if (target === 0) return true;
  if (target < 0 || i >= nums.length) return false;
  return canSum(nums, target - nums[i], i + 1)
    || canSum(nums, target, i + 1);
}`,
    time: 'O(2^n)',
    space: 'O(n)',
    timeWhy: 'Each element branches into take / skip → a 2ⁿ decision tree.',
    spaceWhy: 'Recursion depth is at most n.',
  },
  {
    id: 'binary-strings',
    title: 'Generate all binary strings of length n',
    code: `function binaryStrings(n, prefix = '') {
  if (prefix.length === n) return [prefix];
  return [
    ...binaryStrings(n, prefix + '0'),
    ...binaryStrings(n, prefix + '1'),
  ];
}`,
    time: 'O(2^n)',
    space: 'O(2^n)',
    timeWhy: 'There are 2ⁿ such strings and each is built.',
    spaceWhy: 'The result holds all 2ⁿ strings.',
  },
  {
    id: 'count-grid-paths',
    title: 'Count paths through a grid (recursive)',
    code: `function countPaths(rows, cols) {
  if (rows === 1 || cols === 1) return 1;
  return countPaths(rows - 1, cols) + countPaths(rows, cols - 1);
}`,
    time: 'O(2^n)',
    space: 'O(n)',
    timeWhy:
      'Two branches that each shrink one dimension → exponential (~2^(rows+cols)) without memoization.',
    spaceWhy: 'The recursion depth is rows+cols.',
  },
  {
    id: 'all-subsequences',
    title: 'All subsequences of a string',
    code: `function subsequences(str, i = 0, current = '') {
  if (i === str.length) return [current];
  return [
    ...subsequences(str, i + 1, current),
    ...subsequences(str, i + 1, current + str[i]),
  ];
}`,
    time: 'O(2^n)',
    space: 'O(2^n)',
    timeWhy: 'Each character is either included or not → 2ⁿ subsequences.',
    spaceWhy: 'All 2ⁿ subsequences are collected.',
  },

  // ---- O(n!) ---------------------------------------------------------
  {
    id: 'heaps-permutations',
    title: "Heap's algorithm (all permutations)",
    code: `function heapPermute(arr, k = arr.length, result = []) {
  if (k === 1) {
    result.push(arr.slice());
    return result;
  }
  for (let i = 0; i < k; i++) {
    heapPermute(arr, k - 1, result);
    const j = k % 2 === 0 ? i : 0;
    [arr[j], arr[k - 1]] = [arr[k - 1], arr[j]];
  }
  return result;
}`,
    time: 'O(n!)',
    space: 'O(n!)',
    timeWhy: 'It produces all n! permutations.',
    spaceWhy: 'The result array stores all n! permutations.',
  },
  {
    id: 'n-queens-count',
    title: 'Count N-Queens solutions',
    code: `function countQueens(n, row = 0, cols = new Set(), d1 = new Set(), d2 = new Set()) {
  if (row === n) return 1;
  let total = 0;
  for (let col = 0; col < n; col++) {
    if (cols.has(col) || d1.has(row - col) || d2.has(row + col)) continue;
    cols.add(col); d1.add(row - col); d2.add(row + col);
    total += countQueens(n, row + 1, cols, d1, d2);
    cols.delete(col); d1.delete(row - col); d2.delete(row + col);
  }
  return total;
}`,
    time: 'O(n!)',
    space: 'O(n)',
    timeWhy:
      'Places one queen per row trying up to n columns; the pruned search is bounded by n! arrangements.',
    spaceWhy: 'Recursion depth n, plus sets holding at most n entries.',
  },
  {
    id: 'tsp-brute',
    title: 'Travelling salesman, brute force',
    code: `function shortestRoute(dist, at = 0, visited = new Set([0]), count = 1) {
  if (count === dist.length) return dist[at][0];
  let best = Infinity;
  for (let next = 0; next < dist.length; next++) {
    if (visited.has(next)) continue;
    visited.add(next);
    best = Math.min(best, dist[at][next] + shortestRoute(dist, next, visited, count + 1));
    visited.delete(next);
  }
  return best;
}`,
    time: 'O(n!)',
    space: 'O(n)',
    timeWhy: 'It explores every ordering of the remaining cities → n! routes.',
    spaceWhy: 'Recursion depth and the visited set are both O(n).',
  },
];
