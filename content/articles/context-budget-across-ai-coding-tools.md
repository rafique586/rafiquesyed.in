---
title: "One Context Discipline, Five AI Coding Tools"
description: "A visual field guide to preserving project memory, selecting useful context and resetting cleanly across Claude Code, ChatGPT, Cursor, GitHub Copilot and Gemini Code Assist."
topic: "AI + ENGINEERING"
date: "2026-09-04"
displayDate: "Published September 2026"
fieldNote: "PRACTICAL GUIDE"
marginNote: "Five tools. One operating discipline."
visual: "tool-context-map"
draft: false
---

After sharing my Tokenomics notes, the natural question was: what if I do not use Claude Code? My answer is simple. Tokenomics is not a Claude-only idea.

I have used different tools for different kinds of work, and the same failure pattern keeps appearing. Every AI tool has to decide what should remain durable, what should enter the current conversation and when an old session has stopped being useful.

The product language changes. The workflow is the same:

1. Keep stable knowledge outside the chat.
2. Add only the files and details the task needs.
3. Leave a durable handover before changing direction.
4. Start clean when old conversation costs more than it contributes.

## The practical mapping

| Tool | Durable project memory | Focus the current context | Clean boundary |
|---|---|---|---|
| Claude Code | Keep concise project guidance in `CLAUDE.md`. | Reference the files required for the task and inspect usage with `/context`. | Preserve decisions, then use `/compact` or begin a focused session. |
| ChatGPT / Codex | Use a ChatGPT Project for shared files and project instructions; keep coding guidance in version-controlled `AGENTS.md`. | Attach only useful sources, or point Codex at the relevant repository files. | Start a separate chat or task for each distinct outcome; leave decisions and next steps in the project. |
| Cursor | Store scoped, version-controlled guidance in `.cursor/rules`. | Use `@file`, `@folder` or `@code` instead of pasting large blocks. | Let chat summarisation help, or start a purpose-specific chat when the task changes. |
| GitHub Copilot | Put broad repository guidance in `.github/copilot-instructions.md`; use path-specific instructions when needed. | Attach the relevant files or use a reusable prompt file for a bounded task. | Record the result in the repository and open a fresh chat for a different objective. |
| Gemini Code Assist | Keep team conventions in repository documentation and product rules where available. | Add selected snippets, files or folders through the Context Drawer or `@` references. | Remove irrelevant context and begin a new chat after leaving a reviewed handover. |

## A tool-neutral handover

Whichever assistant you use, end meaningful work with the same five questions:

```text
1. What changed, and which files were touched?
2. Which decisions are now settled?
3. What was tested or verified?
4. What remains uncertain?
5. What is the exact next step?
```

Review the answer and save the useful part in the repository. A handover is valuable because it survives the chat, not because an AI wrote it.

## What I would measure

Do not compare products by one context-window number. Measure whether the working habit is improving:

- Are explanations being repeated less often?
- Are fewer full files pasted into chat?
- Can a fresh session recover from repository guidance quickly?
- Are decisions and verification preserved outside the conversation?
- Does each session have one recognisable objective?

If those signals improve, the context budget is being spent better, even when the product does not show a detailed token bill.

## The takeaway

Claude Code, ChatGPT, Cursor, GitHub Copilot and Gemini Code Assist expose different controls. None of them removes the need for engineering discipline. My rule across all five is the same: I want the project to remember the durable context, the current session to hold only the task, and the handover to survive the chat.

**Keep memory durable. Keep context focused. Keep boundaries intentional.**
