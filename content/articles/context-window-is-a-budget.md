---
title: "Your Context Window Is a Budget"
description: "What cloud cost engineering taught me about managing LLM context, with real numbers from a live session."
topic: "FINOPS + AI"
date: "2026-09-04"
displayDate: "Published September 2026"
fieldNote: "FIELD NOTE 02"
marginNote: "Available is not the same as valuable."
visual: "context-ledger"
draft: false
---

In cloud engineering, we have a principle so obvious it took an entire discipline — FinOps — to make people actually follow it: **just because a resource is available doesn't mean you should consume it.**

Teams spin up oversized EC2 instances "just in case." They leave S3 buckets unrestricted. They let Kubernetes nodes scale without limits. And then, at the end of the month, they stare at a bill they didn't expect.

I've watched the same pattern emerge in AI-assisted development. Developers open Claude Code, start building, and treat the context window like a free, infinite scratchpad. It isn't. And when it runs out — or degrades — the cost isn't on an invoice. It's in lost reasoning quality, forgotten decisions, and sessions that slowly become unreliable.

This post is about applying the same discipline we use in FinOps to something I'm calling **Tokenomics**: the intentional management of your LLM context budget.

Here's the data from a real session of mine that triggered all of this thinking:

```
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

21% used. Comfortable on the surface. But 170,000 tokens in conversation history — nearly the size of a small novel — for a single feature-building session. That number is where the story starts.

---

## What Is Tokenomics?

Borrow the mental model from cloud FinOps for a moment.

In FinOps, every resource has a cost. You don't just ask "does this work?" — you ask "does this work efficiently, and are we spending where it matters?" You distinguish between **reserved capacity** (fixed, unavoidable), **on-demand usage** (variable, controllable), and **waste** (neither necessary nor valuable).

**Tokenomics** applies this lens to your LLM context window:

| FinOps Concept | Tokenomics Equivalent |
|---|---|
| Reserved instances | System prompt + tool definitions (fixed overhead) |
| On-demand compute | Active conversation messages (variable, your control) |
| Idle resources | Repeated explanations, pasted file contents, stale context |
| Reserved capacity buffer | Autocompact buffer (33k held back for compaction) |
| Cost anomaly alert | Context crossing 60% → auto-compaction kicks in |
| Rightsizing | CLAUDE.md replacing conversation history |
| Tagging for attribution | Per-session context auditing with `/context` |

The context window is a **finite compute resource**. It has a hard ceiling (967k tokens in Sonnet 5). It has fixed costs you can't avoid. And it has variable costs that, left unmanaged, will balloon — just like an untagged cloud workload.

---

## Your Context Bill, Line by Line

Let's read that screenshot the way a FinOps engineer reads a cost breakdown.

### Fixed costs — non-negotiable overhead

**System prompt: 8.8k (0.9%)**
Claude Code's own operating instructions. You don't control this. It's the equivalent of your baseline EC2 instance cost — it's there whether you do anything or not.

**Skills: 2.9k (0.3%)**
Your installed skills loaded at startup. Roughly analogous to reserved capacity you've pre-purchased. Manageable — don't install skills you don't use.

**Autocompact buffer: 33k (3.4%)**
This is reserved capacity held back deliberately. When the context hits ~60%, Claude Code uses this buffer to summarise and compress the conversation history. Think of it as your rollback budget — it's reserved so the compaction process itself doesn't run out of space to write the summary.

### Variable costs — where the opportunity is

**System tools: 20.8k (2.2%)**
MCP tool schemas loaded into the context. Every connected tool definition costs tokens whether you use that tool or not. This is the LLM equivalent of a running service you forgot about — idle compute spending money. Load MCP tools on-demand, not upfront.

**Messages: 170.7k (17.7%)**
This is the number that matters. This is your variable spend. In FinOps terms, this is your on-demand EC2 usage — entirely in your control, entirely driven by your behaviour. In a well-managed session, this should be a fraction of what I recorded. Instead, it was nearly 18% of the entire window.

What was in those 170k tokens? Mostly:
- Re-explaining the project architecture at the start of sub-tasks
- Pasting file contents into the conversation instead of referencing paths
- Long exploratory threads where direction changed midway
- Claude confirming my requirements back to me in full — my own words, doubled

**This is FinOps waste.** Not malicious. Not even visible while it's happening. But cumulative, and entirely preventable.

---

## The 60% Threshold: Your Cost Anomaly Alert

In FinOps, you set budget alerts. When AWS spend crosses a threshold, you get notified before things spiral. Claude Code has an equivalent: **autocompaction at 60%**.

When your context hits roughly 60% of the window, Claude Code automatically compresses older conversation history into a summary to free up space. This is Claude trying to keep your session alive — and it mostly works.

But here's what the FinOps analogy reveals: **by the time your budget alert fires, you've already spent the money.** The compaction is a recovery mechanism, not a prevention mechanism. And recovery has costs:

- The exact wording of architectural decisions gets rounded off
- Nuanced reasoning from earlier in the session gets summarised into bullet points
- Specific constraints you mentioned ("don't use this library," "this API has a quirk") may survive only as paraphrases
- Claude's responses start to feel slightly less precise — subtly, then noticeably

The goal in FinOps isn't to respond to cost alerts. It's to never trigger them in the first place. Same principle applies here.

---

## Tokenomics in Practice: The FinOps Playbook, Translated

### 1. Rightsizing: Replace conversation with CLAUDE.md

In cloud rightsizing, you replace an oversized general-purpose instance with a smaller, purpose-built one. In Tokenomics, you replace repeated conversational context with a single, purpose-built project file.

`CLAUDE.md` sits in your system prompt tier — loaded fresh every session at roughly 1–2k tokens. Compare that to 170k tokens of conversation history carrying the same information, accumulated over one session.

```markdown
# Project: [Your product name]
## What this is
## Tech stack and folder structure
## Decisions already made (don't revisit)
## What's built
## Current task context
## Known constraints and gotchas
```

Every piece of project context in `CLAUDE.md` costs approximately **nothing** per session compared to rebuilding it in conversation. This is the single highest-ROI Tokenomics action.

### 2. Reserved vs on-demand: Classify your context deliberately

Not all context has the same value-per-token. Start thinking about your context the way a FinOps team thinks about compute purchasing:

**High value — load once, reference many times:**
- Architecture decisions → CLAUDE.md
- Tech stack and conventions → CLAUDE.md
- File structure → CLAUDE.md

**Medium value — per-feature context that expires:**
- Current task description → CLAUDE.md current task section, updated per session
- Active file being worked on → referenced by path, not pasted

**Low value — pure waste:**
- Restating what you already told Claude three messages ago
- Pasting file contents when a path reference works
- Letting Claude recap your requirements before every response

Audit your session the way you'd audit a cloud bill. Ask: does this token have a job, or is it just taking up space?

### 3. FinOps tagging: Audit with /context

You can't optimise what you can't measure. FinOps teams tag every resource so they can attribute cost to a team, a service, or a feature. The Claude Code equivalent is running `/context` regularly during a session.

```
/context
```

Make this a habit at natural transitions — after finishing a feature, before starting a new thread, when something feels slow. Watch the Messages line. If it's climbing faster than your output is growing, you have a waste problem.

A useful mental benchmark from the screenshot data:

| Category | Healthy target | My actual | Delta |
|---|---|---|---|
| Messages | ≤ 5% of window | 17.7% | +12.7% |
| System tools | ≤ 1% | 2.2% | +1.2% |
| Skills | ≤ 0.5% | 0.3% | — |

The messages delta represents roughly **120,000 tokens of recoverable waste** — context that could have lived in `CLAUDE.md` instead of conversation history.

### 4. Auto-scaling with guardrails: Use /compact proactively

In cloud infrastructure, auto-scaling is good — but auto-scaling without limits is how you end up with a surprise bill. You set a maximum. You set a scaling policy.

`/compact` in Claude Code is your manual scaling control. Use it before the auto-compaction fires — at natural feature boundaries, after exploratory threads, before switching context.

```json
{ "autoCompact": true }
```

You can also enable auto-compact in `~/.claude/settings.json`. The autocompact buffer (33k in the screenshot) is pre-reserved for exactly this: it's the headroom the compaction process needs to write its summary without running out of space mid-operation. Think of it as your minimum reserved capacity — you can't dip below it.

### 5. Session boundaries as billing periods

In FinOps, the billing period creates a forcing function for accountability. At the end of the month, you look at what you spent and why.

In Tokenomics, the **session boundary** is your billing period. End it intentionally. Before closing any significant session, run this prompt:

```
Summarise this session into a CLAUDE.md update:
1. What we built and which files were created or modified
2. Architectural decisions made and the reasoning behind them
3. APIs, schemas, or contracts now fixed and shouldn't change
4. Constraints and gotchas discovered
5. Immediate next steps when we resume
```

Paste it into `CLAUDE.md`. Commit it alongside your code. The next session starts with full project intelligence at 1–2k tokens, not 170k.

**One feature. One session. One CLAUDE.md update.** That's your billing cycle.

### 6. Load on-demand: Stop paying for idle MCP tools

The 20.8k tokens in system tools represents MCP schemas loaded upfront — tool definitions for tools you may never call in this session. In cloud terms, this is a running service generating cost while idle.

```json
{
  "mcpServers": {
    "your-server": {
      "loadOnDemand": true
    }
  }
}
```

Load MCP tools when the task needs them. A frontend session doesn't need your database introspection schema consuming context.

---

## The Token Economy of a Well-Managed Session

Here's what a Tokenomics-optimised session looks like, compared to my actual session:

| Category | My session | Optimised session | Saving |
|---|---|---|---|
| System prompt | 8.8k (fixed) | 8.8k (fixed) | — |
| System tools | 20.8k | ~10k (on-demand) | ~10k |
| Skills | 2.9k | 2.9k | — |
| Messages | 170.7k | ~20–40k | ~130–150k |
| Autocompact buffer | 33k (reserved) | 33k (reserved) | — |
| **Total used** | **203.2k (21%)** | **~75k (7–8%)** | **~130k** |

That ~130k token saving isn't theoretical. It's repeatable, session after session, compounding. At scale — multiple developers, multiple sessions per day — this is the difference between a team that runs comfortably within context limits and one that routinely hits degraded sessions and wonders why Claude "forgot" things.

---

## Why This Matters Beyond Productivity

There's a harder reason to care about Tokenomics, and it's one FinOps practitioners will recognise immediately.

**Waste is a symptom of a missing mental model.**

When a cloud bill is high, it's rarely because someone made one bad decision. It's because there was no shared framework for thinking about resource cost. No tagging strategy. No rightsizing reviews. No one person accountable for the bill.

The same dynamic is emerging in AI-assisted development. Teams are adopting Claude Code, GitHub Copilot, Cursor — powerful tools, all consuming context, all with limits. The developers getting the most out of these tools aren't the ones who write the cleverest prompts. They're the ones who've built a **system around their AI collaboration**.

That system is Tokenomics:
- CLAUDE.md as your project's persistent memory
- Session boundaries as intentional billing periods
- `/context` as your cost monitoring dashboard
- `/compact` as your manual rightsizing lever
- File path references instead of inline pasting

It takes maybe five minutes at the end of each session to maintain. The payoff is sessions that start fast, stay coherent, and don't silently degrade because a compaction summary lost the nuance of a decision you made three hours ago.

---

## The FinOps Maturity Model, Applied to Tokenomics

FinOps defines a maturity model: Crawl → Walk → Run. Here's what that looks like for LLM context management:

**Crawl — basic visibility**
- Run `/context` at least once per session
- Know your token breakdown before the session ends
- Identify your biggest cost category (usually messages)

**Walk — active management**
- Maintain a `CLAUDE.md` for every active project
- Run end-of-session summaries and commit them
- Load MCP tools on-demand
- Run `/compact` at feature boundaries

**Run — systematic optimisation**
- One feature per session, always
- CLAUDE.md updated every session as part of your git commit
- Regular `/context` audits mid-session
- Sub-agents for isolated tasks (each gets its own context window)
- Context usage tracked as a team metric alongside code quality

Most teams are at Crawl without knowing it. The goal of this post is to get you to Walk. Run comes with practice.

---

## Closing: The Budget Mindset

Every token in your context window is a unit of compute. Some tokens are doing real work — carrying decisions, holding file state, enabling reasoning. Others are just there because no one told them to leave.

The context window is not a scratchpad. It's a budget. And like any budget, the teams that manage it intentionally will consistently outperform those that don't — not because they have better AI tools, but because they've built the operational discipline to use them well.

That discipline has a name in cloud engineering: FinOps. In LLM development, we're just starting to need it.

I'm calling it Tokenomics. The playbook is the same.

---

*Rafique Syed is a Director of SRE and Platform Engineering with 25 years across cloud platforms, regulated financial institutions, and AI tooling. He is the founder of [DataGridz](https://datagridz.com), a cloud transformation venture, and writes about platform engineering, AI-assisted development, and building in public at [rafiquesyed.in](https://rafiquesyed.in).*

---

*Tags: Tokenomics, FinOps, Claude Code, LLM engineering, AI-assisted development, context window, platform engineering, developer productivity, cloud cost management*

