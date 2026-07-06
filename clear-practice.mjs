import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

function findPracticeFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...findPracticeFiles(full));
    } else if (entry === "practice.js") {
      results.push(full);
    }
  }
  return results;
}

function clearFunctionBody(source) {
  // Find the start of the function body (opening brace of the function declaration)
  const funcMatch = source.match(/export\s+function\s+\w+\s*\([^)]*\)\s*\{/);
  if (!funcMatch) return null;

  const bodyStart = funcMatch.index + funcMatch[0].length - 1; // position of '{'
  let depth = 0;
  let bodyEnd = -1;

  for (let i = bodyStart; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        bodyEnd = i;
        break;
      }
    }
  }

  if (bodyEnd === -1) return null;

  return source.slice(0, bodyStart) + "{}" + source.slice(bodyEnd + 1);
}

const exercisesDir = fileURLToPath(new URL("./exercises", import.meta.url));
const files = findPracticeFiles(exercisesDir);
let cleared = 0;

for (const file of files) {
  const original = readFileSync(file, "utf8");
  const updated = clearFunctionBody(original);
  if (updated === null) {
    console.log(`SKIP (no function found): ${file}`);
    continue;
  }
  if (updated === original) {
    console.log(`SKIP (already empty): ${file}`);
    continue;
  }
  writeFileSync(file, updated, "utf8");
  console.log(`CLEARED: ${file}`);
  cleared++;
}

console.log(`\nDone. ${cleared} file(s) cleared.`);
