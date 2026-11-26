// One Word, One Username, One Reward — entry for make.fun
// The entry is the entrant's own make.fun username: cube-666.
// The username is sent exactly as the account holds it: lowercase,
// hyphen included, nothing added. The judge reads one word and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const USERNAME = "cube-666";

function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`username must be 1-30 characters, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("username must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("username must be a single word with no spaces");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(USERNAME);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
