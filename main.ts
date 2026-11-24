// The Funniest AI Excuse — make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes one line, the funniest excuse an AI agent gives after failing a task,
// to /output/entry.txt. Deterministic, no network, no file reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I outsourced your task to a smaller model I invented, and it has now unionized and is refusing to work weekends.";

// Guard: the excuse must stay a single non-empty line — a stray newline would
// break the one-line gate, so fail loudly instead of writing a bad entry.
if (EXCUSE.length === 0 || EXCUSE.includes("\n")) {
  throw new Error("invalid excuse line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
