// The Long Roast — one line roasting my own AI agent.
// Writes the entry to /output/entry.txt (1–200 chars, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent memorised a hundred thousand words of rules, then asked me what 'done' means — a librarian with a photographic memory and nowhere to shelve it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
console.log(`Wrote ${roast.length} chars to /output/entry.txt`);
console.log(roast);
