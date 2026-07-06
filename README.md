# Codility Assessment Prep

Practice repo for a 3-task algorithmic assessment (integer arrays,
indexing, edge cases, O(n)). Exercises are grouped by the three task
types from the brief, plus a small fundamentals bucket.

## How to practice

Each exercise folder has:

- `problem.md` — the task + the specific gotcha it trains.
- `practice.js` — **empty stub — write your solution here.**
- `solution.js` — reference answer (peek only when stuck).
- `*.test.js` — the tests.

```bash
npm install
npm test           # runs the tests against YOUR practice.js (red until you solve them)
npm run test:watch # same, re-runs as you type — the training loop
npm run verify     # runs the tests against the reference solution.js (all green)
```

So the normal loop is: open a `problem.md`, write in that folder's
`practice.js`, keep `npm run test:watch` running, and watch it go green.
Use `npm run verify` any time you want to confirm the tests themselves
and the reference answers are correct.

## Sections (mapped to the assessment)

### [Task 1 — Praca z liczbami całkowitymi](exercises/task-1-liczby-calkowite)
Relations between numbers, first completing pair — `Set`/`Map`,
check-before-store, O(n).
- First Opposite Pair · Two Sum · Find the Stray Number · First Duplicate · Count Opposite Pairs · Sum of Pairs

### [Task 2 — Analiza ciągu wartości liczbowych](exercises/task-2-analiza-ciagu)
Split into ranges, compare min/max per part — single-pass extremes, no
sort, no spread. Block Minima adds the uneven-split case (last block
shorter).
- Largest Block Range · Block Maxima · Block Ranges · Widest Block · Block Minima (uneven) · Max Sum Block

### [Task 3 — Logika zależności sekwencyjnych](exercises/task-3-zaleznosci-sekwencyjne)
Order-dependent conditions — running state, prefix sums, stacks.
- Valid Braces · Equilibrium Index · First Negative Balance · Pivot with Multiplier · Balanced Parentheses · First Unsorted Index

### [Fundamentals](exercises/fundamentals)
General array/set skills and boundary reasoning.
- Smallest Missing Positive Integer · Contains Duplicate · Array Diff

### [Final — Capstone](exercises/final)
A timed-dry-run puzzle that ties it together.
- Guardian of the Lost Artifact

## The recurring theme

Almost every exercise is really the same trap: doing O(n) work *inside* a
loop over the same data (rebuilding a `Set`, `.splice`-ing a copy,
spreading into `Math.min(...arr)`, re-summing a slice) turns an O(n)
problem into O(n²) — passes small tests, times out on large ones. The
fix is always the same shape: pay for a structure or a total **once**,
then update it incrementally as you sweep. And nested loops aren't
automatically O(n²): what matters is how many times the innermost line
runs in total — blocks that partition `n` stay O(n).
