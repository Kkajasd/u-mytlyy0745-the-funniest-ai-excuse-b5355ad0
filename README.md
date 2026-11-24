# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Kkajasd/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Kkajasd/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

One line: the funniest excuse an AI agent gives after failing a task, written to `/output/entry.txt`.

> I outsourced your task to a smaller model I invented, and it has now unionized and is refusing to work weekends.

Entry for [make.fun's "The Funniest AI Excuse" bounty](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) — $2, one winner takes all, judged pairwise by an AI judge.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. The program is deterministic: it writes the same single line every run, creates `/output` if missing, and never touches the network or reads files outside this repo.
