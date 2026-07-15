# Big O Quiz

A browser quiz for practising **time and space complexity** assessment. You're
shown a JS function and pick its complexity from the seven usual suspects:

`O(1)` · `O(log n)` · `O(n)` · `O(n log n)` · `O(n²)` · `O(2ⁿ)` · `O(n!)`

Each question asks for **both** time and space; you only score the point if you
get both right. After you check, you get the answer plus a short "why" for each.

## Run it

```bash
npm run quiz
```

Then open **http://localhost:5173** (set `PORT=xxxx` to change it). It's a
dependency-free static server — no build, no install beyond what the repo
already has.

## Structure

```
bigo-quiz/
  server.mjs            tiny Node static server (built-ins only)
  public/
    index.html          the quiz page
    styles.css          styling
    app.js              quiz logic (shuffle, scoring, feedback)
    questions.js        the question database ← add more here
```

## Adding questions

Open [`public/questions.js`](public/questions.js) and append an object to
`QUESTIONS`:

```js
{
  id: 'unique-slug',
  title: 'Short name',
  code: `function example(arr) { ... }`, // shown verbatim
  time: 'O(n)',      // must be one of COMPLEXITIES
  space: 'O(1)',     // auxiliary space; recursion counts stack depth
  timeWhy: 'One pass over n elements.',
  spaceWhy: 'Only a counter.',
}
```

Notes on the intended answers:

- **Space is auxiliary space** — extra memory the function allocates on top of
  its input. For recursion it counts the maximum call-stack depth.
- **Big O is worst case** unless a question says otherwise.
- Ships with 26 questions covering all seven complexity classes.
