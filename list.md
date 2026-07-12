Here's the list filtered against your three assessment task types (integer relations + first pair · split-into-ranges min/max · sequential-ordering conditions) and the skill list (arrays, hash sets, min/max, splitting into ranges, loops/counters, edge cases, O(n)).

Do these — direct hits
Task 1 (integer relations, hash sets, "first" something)

MissingInteger (L4) — the one. It's literally your capstone puzzle: smallest positive integer not present, Set + pigeonhole, O(n).
PermCheck (L4) — Set/boolean presence, "is this a valid 1..N permutation." Core hash-set + edge cases.
FrogRiverOne (L4) — doubles as Task 1 and Task 3: Set of seen positions, return the first moment all of 1..X are covered. High value.
PermMissingElem (L3) — find the missing element (sum or XOR, or set). Same family as your stray/opposite-pair work.
Distinct (L6) — count distinct via Set. Quick reinforcement.
Task 2 (split into ranges, compare parts, min/max)

TapeEquilibrium (L3) — split into two parts, minimize the difference via a running/prefix sum. The exact "divide into ranges and compare" shape.
MaxProfit (L9) — track min-so-far while sweeping (running min + best difference). Clean min/max single pass.
Task 3 (sequential-ordering conditions, valid sequence)

Brackets (L7) — multi-type nesting via a stack. This is your Valid Braces, 1:1.
Nesting (L7) — single-type via a counter. Your Balanced Parentheses, 1:1.
PassingCars (L5) — running counter of zeros seen, count ordered pairs. Perfect "loops & counters + ordering" drill.
Fish (L7) — stack simulation of who-eats-whom by order. Good stack/sequential practice.
Optional — good practice, partial fit
MaxCounters (L4) — loops/counters + a running max (watch the O(n) trap).
Dominator / EquiLeader (L8) — "element related to the rest of the array" (like stray); EquiLeader adds a prefix + "index where condition holds."
MaxSliceSum (L9), MinAvgTwoSlice (L5) — range/slice analysis; useful but a notch more specialized.
Peaks (L10) — thematically the closest to "podziel tablicę na zakresy" (split into equal blocks), but its divisor enumeration is beyond your scope, so treat it as a stretch.
Skip for this assessment
FrogJmp (L3) — O(1) arithmetic, no pattern to train.
CountDiv (L5), CountFactors / MinPerimeterRectangle / Flags (L10) — number theory; the brief explicitly says no domain math.
GenomicRangeQuery (L5) — niche prefix-count-per-symbol.
Triangle, NumberOfDiscIntersections (L6), MaxDoubleSliceSum (L9), StoneWall (L7) — geometry/sorting/harder variants outside the three target shapes.
MaxProductOfThree (L6) — only tangentially min/max.
If you want a tight plan
Do the four L4 Counting tasks first (MissingInteger, PermCheck, FrogRiverOne, +PermMissingElem) — they're the densest overlap with Task 1. Then Brackets + Nesting + PassingCars for Task 3, and TapeEquilibrium + MaxProfit for Task 2. That's ~9 tasks covering all three types; everything else is reinforcement.

Want me to add local practice folders (stub + tests) for any of these, matching the repo format?
