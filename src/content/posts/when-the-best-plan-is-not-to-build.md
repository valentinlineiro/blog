---
title: "When the Best Plan Is Not to Build"
date: 2026-08-27
description: "Engineering judgement starts before implementation: some of the best outcomes come from changing the decision, not executing the plan."
---

There is a strange bias in software engineering: once a problem has been turned into a ticket, building the solution feels like progress.

It is not always progress.

Sometimes the most valuable engineering decision is to stop before implementation begins.

## A plan is still a hypothesis

A detailed plan can create a false sense of certainty.

Tasks have been decomposed. Dependencies are listed. The architecture is sketched. Someone estimates the effort.

The plan looks professional, so the decision starts to feel inevitable.

But a plan answers a different question from the one that matters first.

It can tell us how to build something. It cannot, by itself, tell us whether building it is the best available move.

That distinction has become more important as AI makes planning and implementation faster.

## Cheap execution changes the loop

I can ask an AI system to explore an implementation, generate a prototype, inspect a codebase, or compare alternatives much faster than I could do all of those things manually.

That changes my relationship with plans.

I do not want to spend a long time designing the perfect execution path before collecting evidence. I would rather make the smallest useful decision, run the cheapest informative experiment, and update the plan from reality.

The loop becomes:

**decide → execute → observe → revise.**

Not:

**plan → plan → plan → finally execute.**

The difference is not anti-planning. It is treating the plan as a living model instead of a contract with the future.

## Uncertainty should have a cost

Not every unknown deserves investigation.

I care about the uncertainty that could change the decision.

If discovering an answer would not affect what I do next, the answer is interesting but not necessarily useful.

That principle helps keep engineering work proportional.

Before spending an afternoon researching an edge case, I ask whether the result could change the action. Before building a sophisticated abstraction, I ask whether the uncertainty it addresses is real. Before automating a workflow, I ask whether the workflow should exist.

This is one reason I like small experiments.

They turn assumptions into observations without requiring commitment to the whole solution.

## The human role moves upstream

AI can increasingly handle more of the execution layer.

That does not make engineers less important. It changes where engineering judgement creates value.

The difficult part becomes framing the problem, identifying meaningful constraints, separating signal from noise, and deciding when the evidence is sufficient to move forward.

In other words, the engineer increasingly becomes a governor of the system rather than only an operator of it.

That is a role I find much more interesting.

## Progress is not the same as motion

A team can ship continuously and still move in the wrong direction.

A developer can be highly productive while solving the wrong problem.

An AI agent can produce thousands of lines of correct code for a feature nobody needs.

Speed amplifies whatever direction the system already has.

So I care less about maximising motion and more about improving direction.

Sometimes the right answer is to build.

Sometimes it is to simplify.

Sometimes it is to investigate.

And sometimes the best implementation is the one we never start.
