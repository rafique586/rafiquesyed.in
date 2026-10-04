---
title: "Five Habits That Make Production Systems More Reliable"
description: "Hard-won lessons on SLOs, toil, alerting, postmortems and simplicity from running production systems across AWS and Azure."
topic: "SRE + RELIABILITY"
date: "2026-10-04"
displayDate: "Published October 2026"
fieldNote: "FIELD NOTE 04"
marginNote: "Reliability comes from a few good habits repeated consistently."
draft: false
---

There is a version of this article that lists twelve principles with complicated diagrams. This is not that.

After years of managing production systems across AWS and Azure, leading teams through outages, late-night incidents and the slow work of improving platforms that were not designed for reliability, I have reached a simpler conclusion.

Reliability usually comes down to five habits practised consistently, not fifty ideas applied occasionally.

The *Site Reliability Workbook* describes the foundations clearly: SLOs, monitoring, alerting, toil reduction and simplicity. Getting these basics right gives a team a strong base. Here is what that looks like in practice.

## 1. Stop chasing 100% uptime

This is often the hardest cultural shift.

Instead of promising perfect availability, agree on a Service Level Objective that reflects what users genuinely need. An SLO gives the team an error budget: the amount of failure the service can tolerate before reliability work must take priority.

If a release consumes most of the budget, the conversation changes. You are no longer saying, “We had an incident.” You can say, “This deployment consumed most of our reliability allowance, so we need to slow releases and fix the cause.”

Measure the service from the user's point of view. A healthy virtual machine returning failed requests is not a healthy service. Track successful journeys, useful responses and acceptable latency.

> Define what good means before production forces the team to debate it during an incident.

## 2. Treat toil as reliability debt

Toil is repetitive operational work that a machine could perform. Manual deployments, recurring access changes, hand-run scaling steps and routine alert clean-up all consume time that could have improved the system.

The problem is not only the hours spent today. Toil compounds. It increases fatigue, creates more opportunities for mistakes and leaves less time to remove the underlying cause.

I have seen teams repeatedly rotate credentials across many services by hand. Moving to managed identity took focused engineering effort, but it removed both the recurring work and an entire category of risk.

Ask your team one question every week:

**What did we do this week that we also did last week?**

That list is the beginning of your reliability backlog.

## 3. Alert on symptoms users feel

Many monitoring systems alert on causes: CPU above 80%, memory above 90% or disk usage crossing a threshold. These metrics are useful during diagnosis, but users do not experience CPU utilisation. They experience errors, slow responses and failed transactions.

Alert on service outcomes first. Watch error rate, failed journeys and tail latency. Use infrastructure metrics to investigate after the alert tells you that users are affected.

Avoid reacting to every brief spike. Connect alerting to error-budget burn and sustained impact. A short fluctuation may be noise. A small error rate that continues for twenty minutes may be an incident.

## 4. Make postmortems produce change

Blameless postmortems matter because blame stops learning. When people feel they must protect themselves, they leave out details and the organisation never sees the complete failure.

Blameless does not mean consequence-free. It means examining the system, the process and the information available at the time rather than blaming the person who made a difficult call under pressure.

The meeting must still produce action. “The engineer should have checked the deployment notes” is not a useful outcome. “Add a latency SLO alert for the payment service, assign an owner and complete it by an agreed date” is.

My rule is simple: every postmortem ends with at least one owned action in the team's work system. If it is not recorded and assigned, it does not exist.

## 5. Simplify relentlessly

Every dependency creates another way a system can fail. Every configuration option can be misconfigured. Every service call adds latency and a new failure mode.

Complexity slows incident response because engineers must understand more moving parts while the clock is running. Simplicity is therefore reliability work, not housekeeping.

Review what the platform no longer needs. Remove unused functions, idle databases, forgotten permissions, duplicated configuration and old services. The team that can explain its production architecture clearly is usually better prepared at 2 a.m. than the team that needs four diagrams to find the owner of a request.

## A practical reliability rhythm

Turn these principles into recurring habits:

1. **Define SLOs.** Agree on what good looks like before the incident.
2. **Measure toil.** Name it, track it and remove one recurring task each sprint.
3. **Alert on user experience.** Start with symptoms, then use infrastructure signals to diagnose.
4. **Close the loop after incidents.** Every postmortem should create an owned system improvement.
5. **Remove something.** Each quarter, retire one component or process the platform no longer needs.

These ideas are not new. The tools available across AWS and Azure have improved, but tools were never the difficult part. The difficult part is practising the discipline every week, especially when production appears calm.

**Reliable systems are built before the incident, one repeated habit at a time.**
