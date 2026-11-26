// Roast the Smart Fridge: One Line, Best Laugh Wins
// Entry program: writes a single one-line roast of a smart fridge
// Entry is 151 characters: inside the competition's 1-160 limit, and it
// stays a single line, so no trailing newline is written after it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  // The roast: a $3,000 smart fridge, beaten at its own job by a magnet.
  "My $3,000 smart fridge's best feature is a free pizza magnet: it has held the same shopping list since 2019 and never once asked me to update anything.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
