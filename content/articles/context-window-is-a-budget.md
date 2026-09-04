---
title: "I Burned 120,000 Tokens I Didn't Need"
description: "The real cost of one overloaded AI coding session, and the six habits that would have kept it focused."
topic: "FINOPS + AI"
date: "2026-09-04"
displayDate: "Published September 2026"
fieldNote: "FIELD NOTE 02"
marginNote: "The session looked healthy. The message history told a different story."
visual: "context-ledger"
draft: false
---

I burned about 120,000 tokens I did not need. The surprising part was that the session looked healthy.

The context window was only 21% full. Nothing had failed, and there was plenty of space left. But when I looked at the breakdown, 170,700 tokens were sitting in message history. At a more focused level, closer to 48,000, the same work could have carried roughly 120,000 fewer tokens.

I had seen this pattern before in cloud engineering. Teams provision capacity “just in case”, leave workloads running and discover the waste when the bill arrives. FinOps taught us to make usage visible, understand its value and spend deliberately.

This time the bill was not from AWS, Azure or Google Cloud. It was inside my AI coding session.

Here is the actual readout that triggered this thinking:

```text
Context Usage  ·  Sonnet 5  ·  claude-sonnet-5
203.2k / 967k tokens (21%)

Estimated usage by category:
  System prompt:       8.8k tokens  (0.9%)
  System tools:       20.8k tokens  (2.2%)
  Skills:              2.9k tokens  (0.3%)
  Messages:          170.7k tokens (17.7%)
  Free space:        730.8k tokens (75.6%)
  Autocompact buffer:  33k tokens  (3.4%)
```

This is a snapshot from my working session, not a universal benchmark. Model limits and category names will change, but the problem is easy to see.

One feature-building session was carrying conversation history roughly the size of a small novel. That number is where this story starts.

## I call this Tokenomics

Tokenomics is the intentional management of an AI session’s context budget. It borrows a useful FinOps question:

> Is this resource doing valuable work, or is it simply still running?

Some context is fixed overhead: the system prompt, essential tools and reserved capacity. Messages are different. They grow through our working habits: repeated explanations, pasted files, long exploratory threads and requirements being restated in full.

The goal is not to use the fewest tokens. That would be like reducing a cloud bill by switching everything off. The goal is to spend context where it improves understanding, reasoning and verification.

## The gap was almost entirely conversation

![Bar chart comparing actual context usage with a best-practice target. Messages account for nearly all of the gap, with 170.7k tokens used against a target of about 48k.](/images/articles/context-window/context-actual-vs-target.png)

The fixed categories were not the real problem. System instructions, skills and the compaction buffer were mostly overhead I could not meaningfully change.

Messages were the opportunity. At roughly 5% of the window, the session would have carried about 48,000 message tokens instead of 170,700. That made approximately **120,000 tokens recoverable through better session hygiene**.

This is the number I would watch, not the size of the window. A large context window can hide poor habits for longer; it does not remove their cost.

## What created the bloat

![Breakdown of the behaviours that increased message context and the practices that would reduce it: durable project guidance, file references and compaction at feature boundaries.](/images/articles/context-window/context-drivers-and-fixes.png)

The causes were ordinary:

- I explained parts of the architecture again as the work changed direction.
- File contents travelled in the conversation when a path would have been enough.
- Exploratory threads stayed alive after their decisions had expired.

The fixes are ordinary too. Keep durable knowledge in the repository, reference files by path and end or compact a session at a natural feature boundary.

No clever prompt is required. This is operating discipline.

## How I would recover those 120,000 tokens

The chart is useful only if it changes how we work. These are the six habits I would apply to the next session.

### 1. Replace repeated conversation with project memory

Do not explain the architecture again every time the task changes. Keep a short project guide in the repository and let each session start from it.

```markdown
# Project
## What this system does
## Technology and important folders
## Decisions already made. Do not revisit
## Constraints and known surprises
## What is working now
## Current task and next step
```

Keep it short. This is not another documentation project. It is the minimum project information a new engineer or a new AI session needs before touching the system.

**Fixes:** re-explaining architecture and losing settled decisions.

### 2. Point to files instead of carrying copies

If the assistant can read the repository, say:

```text
Review app/writing/page.tsx and change only the article-card layout.
```

Do not paste the full file unless access is unavailable or a small fragment needs focused discussion. Once a pasted copy and the real file diverge, the conversation starts reasoning about yesterday’s state.

**Fixes:** duplicated content, stale context and unnecessarily large messages.

### 3. Check the context bill at transitions

In tools that expose a context report, check it after exploration, after completing a feature and before opening a different line of work. For Claude Code, that check is:

```text
/context
```

Do not chase a universal “healthy percentage”. Ask a more useful question: **is message history growing faster than the useful output?** In my session, the 17.7% message share mattered more than the 21% total.

**Fixes:** waste remaining invisible until the session becomes unreliable.

### 4. Compact when the work changes phase

Compaction is most useful at a natural boundary: the investigation is complete, an architectural decision is settled or one feature is verified.

Before compacting, preserve four things:

1. The decision and why it was made
2. The files or interfaces that changed
3. The evidence that the change works
4. The next unresolved action

Then use the product’s compaction option. In Claude Code, for example, use `/compact`. Compaction should remove expired discussion without removing the engineering trail.

**Fixes:** long exploratory threads travelling into unrelated implementation work.

### 5. Close with a handover that survives the chat

At the end of meaningful work, ask for a short handover and save the reviewed result in the repository:

```text
Create a concise handover covering:
1. What changed and which files were touched
2. Decisions that are now settled
3. What was tested or verified
4. Constraints and surprises discovered
5. The exact next step
```

Do not copy the answer blindly. Correct it, remove speculation and commit it with the code. The next session should recover from the repository, not from a heroic attempt to remember an old conversation.

**Fixes:** lost reasoning, repeated discovery and poor session restarts.

### 6. Load only the tools the task needs

Tool definitions also consume context. A writing task does not need database schemas; a CSS change does not need every infrastructure integration. Where the product supports selective or on-demand tools, keep the active set relevant to the task.

Do not optimise fixed overhead obsessively. In my numbers, tools were a smaller opportunity than messages. Start with the largest bar first.

**Fixes:** avoidable tool overhead without distracting from the real problem.

## A ten-minute reset for an overloaded session

If a session already feels heavy, I would do this:

1. Stop adding new requirements.
2. Record the current decision, changed files, verification and next action.
3. Move durable facts into the project guide.
4. Remove pasted material that the repository already holds.
5. Compact, or begin a clean session when the work has genuinely changed.
6. Give the new session one focused objective and file references.

That is Tokenomics in practice: visibility, ownership, rightsizing and a clean billing boundary. Here, we apply them to context rather than cloud spend.

**One feature. One focused session. One durable handover.**

Not using Claude Code? The names and controls change, but the discipline does not. I have put the equivalent workflow for ChatGPT, Cursor, GitHub Copilot and Gemini Code Assist into a separate visual guide: [How to manage context across AI coding tools](/writing/context-budget-across-ai-coding-tools).

## Crawl, walk, run

You do not need a large governance programme to begin.

| Stage | Useful habit |
|---|---|
| Crawl | Look at context usage once per session and identify the largest category. |
| Walk | Maintain project guidance, reference files and compact at feature boundaries. |
| Run | Make session hygiene part of the team’s normal engineering workflow. |

Most teams are probably at Crawl without naming it. Getting to Walk already creates value.

## The budget mindset

Waste is often a symptom of a missing operating model. Cloud waste grows when nobody owns visibility or design trade-offs. Context waste grows when a team has no shared way to preserve decisions and close a line of exploration.

The engineers who work well with AI tools will not only write better prompts. They will build a dependable system around the collaboration: clear guidance, focused tasks, intentional boundaries and evidence that survives outside the conversation.

I do not need a bigger context window to solve this problem. I need a cleaner session, fewer repeated explanations and a better handover.

That is the connection to FinOps. It is not about being miserly. It is about knowing what deserves the budget, and being honest about what I burned without getting value back.

**The next 120,000 tokens are mine to save.**
