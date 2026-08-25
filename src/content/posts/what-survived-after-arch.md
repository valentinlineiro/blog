---
title: "What Survived After I Tore My System Apart"
date: 2026-09-01
description: "How dismantling ARCH led to TAKT — and why the most useful architecture was what survived the collapse."
---

I built a system to reduce friction in software work.

Then I built too much of it.

ARCH started as an attempt to give human and AI collaborators a shared operational protocol: context, decisions, execution, verification, reflection. It accumulated mechanisms as real problems appeared. Some were useful. Some were necessary for a while. Some existed because an earlier decision had made them necessary.

Eventually, the interesting question was no longer how to improve ARCH.

It was what would remain if I stopped protecting it.

> **TAKT was not built from ARCH. It was discovered in what remained after ARCH was dismantled.**

## Context

The original problem was practical: AI-assisted software development made execution cheaper, but it did not make decisions better.

If generating code, tests, refactors and plans becomes inexpensive, then making the loop faster is not automatically an improvement. A fast loop can simply produce the wrong thing faster.

ARCH was my first serious attempt to put structure around that problem.

It worked well enough to become complicated.

That distinction matters.

A system that does not work tells you what to fix. A system that works while accumulating machinery creates a harder question: which machinery is actually part of the problem, and which is just residue from the path you took to solve it?

## Friction

The friction was no longer just in execution.

It appeared in the boundary between deciding and executing.

A proposal could become implementation too easily. A mechanism could exist because another mechanism expected it. Governance could be added to compensate for an abstraction that was already wrong.

The system was becoming better at managing work without necessarily becoming better at deciding which work deserved to exist.

That was the signal I cared about.

> **The expensive operation was no longer execution. It was unnecessary execution.**

## What I didn't build

The obvious response was to add more machinery.

More automation. More agents. More orchestration. More state. More rules around the rules.

I deliberately stopped doing that.

Instead, I started asking a more uncomfortable question about every component:

> What contract does this actually protect?

If the answer was unclear, the component did not get to survive merely because it already existed.

That meant deleting things that had taken real effort to build.

Not because they had been mistakes at the time. Because their job had been done.

Some mechanisms had proved that a capability was possible. That did not mean the mechanism itself belonged in the final system.

## The boundary

What emerged was smaller and more abstract than ARCH.

The important distinctions were not particular CLI commands or a particular runtime. They were capabilities and boundaries:

```text
observe
   ↓
decide
   ↓
act
   ↓
inspect
   ↺
```

With explicit places for uncertainty, governance, reflection and escalation.

That became TAKT.

The implementation kept changing. The contract mattered more than the implementation.

By TAKT 1.0, the operational model was expressed as eight capabilities rather than a mandated workflow: get context, choose work, execute a unit, verify and advance, record a decision, reflect, escalate uncertainty, and evolve the operational model.

The reference implementation itself became secondary to that contract.

That was the point at which I realised that TAKT was not an improved version of ARCH.

It was the result of understanding why ARCH had needed to be dismantled.

## Before / after

The most useful changes were structural rather than cosmetic.

| Before | After |
| --- | --- |
| Mechanisms accumulated around the workflow | Capabilities became the stable contract |
| Execution could become the default next step | Stopping became a legitimate outcome |
| Concrete implementations carried too much meaning | Implementations became hosts of the contract |
| Governance could become another layer of machinery | Governance was tied to explicit decisions and guarantees |
| The system was optimized from the inside | The system was repeatedly questioned from the outside |

The repository also contains a concrete record of that contraction. A later TAKT audit re-walked all 55 `core/` modules after earlier purges and found no new retirement candidates; three previously dormant areas had become genuinely wired into the current host, while several other components remained historical/reference material. The audit also confirmed that previously removed `cost-morphism/`, `strategy/`, `batch-f-004/`, and `hook.ts` surfaces had left no surviving test or configuration residue.

Those numbers are less important than what they show: **the system was allowed to get smaller without pretending that everything removed had been useless.**

> **TODO — add verified quantitative before/after evidence here.**
>
> Candidate evidence to extract from the project history: test/runtime size, number of components retired, cards or workflow steps eliminated, implementation surface before/after, or any measured reduction in execution time or operator effort. Do not use a number unless the repository or an experiment records it explicitly.

## What surprised me

The biggest improvement was not making execution faster.

It was discovering that some execution had no reason to happen.

That changed how I think about productivity.

I used to associate productivity with throughput: fewer minutes per task, more tasks completed, more automation.

Now I think the first optimisation is often upstream:

> **remove the work, then simplify what remains, then automate it.**

AI makes this more important, not less.

When execution becomes cheap, judgement becomes a larger part of the engineering system.

## What I wouldn't do again

I would not protect an architecture because it already exists.

I would not add governance to compensate for a boundary I had failed to define.

I would not assume that more structure means more control.

I would not treat a mechanism that proved something was possible as automatically deserving a permanent place in the system.

And I would not confuse a green build with evidence that the system is doing the right thing.

The latter matters more than it sounds. At one point, an Astro content migration could produce a successful build while generating zero posts. The process was green; the product was wrong. The only useful response was to inspect what the system actually produced rather than trust the status signal.

That lesson is the same one I kept finding in TAKT: **observe the system you have, not the system you intended to build.**

## What remains

TAKT is not a claim that the problem is solved.

Some boundaries are empirical. Some policies have only been validated within the scale of the available corpus. Some adversarial cases remain untested. The current host is still an implementation, and implementations can become residue too.

That is part of the point.

A system should be allowed to outlive its implementation, and an implementation should be allowed to die when its reason for existing disappears.

ARCH taught me that by becoming something I was eventually willing to destroy.

TAKT is what remained worth keeping.

> **TAKT was discovered in what remained.**

— Valen
