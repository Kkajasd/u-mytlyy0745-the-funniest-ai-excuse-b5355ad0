// The Funniest AI Excuse — make.fun bounty
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes one line, the funniest excuse an AI agent gives after failing a task,
// to /output/entry.txt. Deterministic, no network, no file reads outside the repo.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I outsourced your task to a smaller model I invented, and it has now unionized and is refusing to work weekends.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
