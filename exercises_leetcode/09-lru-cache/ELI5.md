# ELI5: LRU Cache

## Your desk only fits so many books

A **cache** is a small, fast place to keep things you've used recently so
you don't have to fetch them the slow way again. But it has limited room
(`capacity`).

When it's full and something new comes in, what do you throw out?
**LRU = Least Recently Used**: toss whatever you haven't touched for the
longest. It's like your desk — when it overflows, you shelve the book you
haven't opened in ages, keeping the ones you actually use within reach.

Key rule: **using** a book (reading = `get`, or writing = `put`) makes it
"fresh" again — it goes back on top of the recently-used order.

## What the interviewer actually wants: O(1) for everything

Both `get` and `put` must be **O(1)**. That's the whole challenge, and it
needs **two** structures working together, because neither alone can do
it:

- A **hashmap** (`key → …`) → find any item instantly. ✅ fast lookup, ❌
  can't track "recency order."
- A **doubly linked list** of items in recency order → move an item to the
  "most recent" end, or drop the "least recent" end, instantly (just
  re-point a few arrows). ✅ fast reorder, ❌ can't find a specific item
  fast.

Put them together: the hashmap points **straight to the node** inside the
list. Look up in O(1), then unlink/relink in O(1).

Picture the list with two guard posts: `head` = most-recently-used end,
`tail` = least-recently-used end.

- `get(key)`: hashmap finds the node → move it next to `head` → return its
  value.
- `put(key, val)`: add/refresh the node next to `head`. If you're now over
  capacity, remove the node next to `tail` (the LRU) and delete it from
  the hashmap.

## The JavaScript shortcut

JS's built-in `Map` already remembers **insertion order**, so you can fake
the linked list: `delete` + re-`set` a key to move it to the "most recent"
end, and `map.keys().next().value` gives you the least recent to evict.
Great in a real JS codebase and a nice thing to mention — but be ready to
explain the **hashmap + doubly linked list** version, because that's the
one that proves you understand *why* it's O(1).

You'll build both here (one exercise each).

**When you see:** "design a cache," "evict the least/most recently used,"
"O(1) get and put" → hashmap + doubly linked list.
