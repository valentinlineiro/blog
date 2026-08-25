---
title: "How I Think About Software"
date: 2026-08-25
description: "I am less interested in writing more code than in making the system around the code easier to understand, change, and live with."
---

I used to think software engineering was mostly about finding the right solution.

Over time, I started to see a different problem underneath it: deciding what deserves to be solved in the first place.

Most software systems do not become difficult because a single function is too complex. They become difficult because decisions accumulate without enough structure around them. Requirements are ambiguous. Ownership is unclear. Feedback arrives late. A small change crosses five boundaries. The team spends more time coordinating than creating.

That is the kind of problem I am interested in now.

## Reduce friction before adding machinery

My instinct in a difficult system is not to add another abstraction immediately.

First I try to find the friction.

What is slowing the system down? What uncertainty is blocking a decision? Which dependency is forcing everyone to understand something they should not have to understand?

Sometimes the answer is architectural. Sometimes it is a missing interface. Sometimes it is a better test. Sometimes it is simply that we are doing work that does not need to exist.

That last one matters more than it sounds.

The cheapest operation in a system is the one you decide not to perform.

## Architecture is about preserving options

I like architecture when it creates freedom rather than ceremony.

A good boundary lets one part of the system change without forcing unrelated parts to change with it. A good interface hides complexity without hiding important information. A good abstraction makes the next decision easier.

This is why I am drawn to simple, explicit systems. Complexity is sometimes necessary. Accidental complexity rarely is.

I do not think every system should become a collection of microservices, nor that every problem needs a formal methodology. The architecture should follow the pressure in the system.

The goal is not to build the most sophisticated structure.

The goal is to keep the cost of change low.

## AI changes the economics of execution

The arrival of capable coding models changed one assumption that shaped software engineering for years: execution is no longer always the expensive part.

When implementation becomes cheap, delaying implementation in order to think indefinitely becomes less attractive.

That does not mean thinking matters less. It means the loop can become tighter.

Observe. Act. Inspect the result. Learn. Act again.

I use AI this way. Not as a competitor, and not as an oracle. It is a tool for reducing the cost of experiments, exploring alternatives, and turning decisions into executable feedback faster.

The interesting question is therefore no longer only, "Can we build this?"

It is also, "Should we build this?"

## The decision before the implementation

That question has become central to my work.

A plan can be technically excellent and still be the wrong plan. A beautifully implemented feature can still be unnecessary. A highly automated workflow can still optimise a process that should have been removed.

So I care about the quality of the decision before I care about the efficiency of the execution.

This changes how I work with both people and machines.

I want requirements to be explicit enough for a system to act on. I want uncertainty to be visible instead of quietly converted into assumptions. I want humans to remain responsible for decisions that actually require human judgement.

The implementation can then become relatively mechanical.

That is a much better use of engineering effort.

## What I am trying to build

I am interested in software systems that are small enough to understand, strong enough to evolve, and explicit enough to trust.

I am also interested in the systems around software: the workflows, interfaces, decision rules, and tools that determine how quickly a team can move without losing coherence.

That is the territory I will explore here.

Software. Systems. AI-assisted engineering. Architecture. And the occasional idea that survives long enough to be worth writing down.
