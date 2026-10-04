---
title: "The SDLC Has Stopped Being a Line"
description: "AI now works across the software lifecycle. The stages are blurring, and human judgement has moved to the centre."
topic: "AI + SDLC"
date: "2026-10-03"
displayDate: "Published October 2026"
fieldNote: "FIELD NOTE 03"
marginNote: "The lines can blur. Ownership cannot."
draft: false
---

AI now works at every stage of the software lifecycle. The stages are blurring, and human judgement has moved to the centre.

![The software lifecycle as a continuous loop around a human in the loop](/images/articles/ai-driven-sdlc.png)

I sketched this on a blank notebook page. Six bubbles around a circle, one circle in the middle, and a line underneath that I kept coming back to: **the lines are blurring.**

For most of my career, the SDLC was a relay race. Product planned, architects designed, developers coded, QA tested, release engineering deployed and operations watched. Every handoff came with a ticket, a meeting and a wait.

That model is quietly coming apart.

## Where this story starts

Look around the wheel today and there is an agent at every stage:

- **Plan:** agents draft a specification from a rough problem statement.
- **Design:** they offer options with trade-offs, and a person chooses.
- **Code:** agents write a first draft, and an engineer reviews it.
- **Test:** tests arrive with the code instead of after it.
- **Deploy:** agents read pipeline signals and hold release gates.
- **Monitor:** alerts become summaries, and summaries become the next ticket.

This is not a forecast. Many teams already have some version of it running.

> If agents are doing more of the work, what is the human actually doing?

## Where the lines blur

When one session can take a specification, write the code, generate the tests and open the pull request, where did design end and coding begin? When the system that judges a release is also watching production, is that deployment or monitoring?

The stages still exist. They have stopped being separate rooms. Work can move around the loop in minutes instead of sprints.

I saw a smaller version of this change when CI/CD arrived. Release day stopped being a special event and became a property of every commit. AI is doing something similar to the wider lifecycle.

## What stays at the centre

The outer loop speeds up. The centre has to become stronger.

### 1. Intent

Agents are good at answering *how*. Deciding what is worth building, which risks are acceptable and what “done” means still requires human judgement.

**Protects against:** delivering the wrong thing faster.

### 2. Guardrails as code

Security, reliability, cost, compliance, data privacy and observability are not individual stages. They wrap around every stage. If a rule lives only in someone's head, an agent cannot apply it consistently.

**Protects against:** speed without control.

### 3. Ownership you can audit

An agent can approve a deployment. It cannot own the outage. We spent years building observability for services. Now we need observability for the automation acting on them. What did the agent decide, which signals did it use and why did it act?

**Protects against:** a human who is near the loop but not meaningfully part of it.

## Where to start

You do not need a transformation programme. Start with three questions:

1. Which handoffs are we still paying for that an agent could absorb?
2. Which quality and safety rules exist only as tribal knowledge?
3. Is our review capacity growing as quickly as our generation capacity?

The third question is the one many teams miss. When generation becomes cheap, review becomes the bottleneck.

**Agents on the loop. Guardrails around it. A human at the centre.**

## The centre holds

The organisations that do well here will not be the ones with the most agents. They will be the ones that know exactly who owns the decision when an agent acts.

**The lines can blur. Ownership cannot.**
