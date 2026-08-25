---
title: "Why I Care About Friction"
date: 2026-08-26
description: "The best engineering work is often not about doing more. It is about removing the things that should never have been necessary."
---

I have become increasingly suspicious of the word "productivity."

It often means doing the same amount of unnecessary work, only faster.

I am more interested in friction.

Friction is the part of a system that makes a reasonable action harder than it should be. A decision that requires three meetings. A deployment that depends on tribal knowledge. A test suite that cannot tell you whether a change is safe. A tool that makes you repeat context the system already knows.

These things look small in isolation. Together, they shape the speed and quality of an engineering organisation.

## Friction is information

When something feels unnecessarily difficult, I try not to work around it immediately.

I ask why it is difficult.

Sometimes the friction is protecting something important. A security check, a review, or a human decision may be deliberately expensive.

But accidental friction is different. It usually means the system is carrying complexity that has not found a better home.

That makes friction useful.

It tells you where the system is asking for more effort than the outcome justifies.

## The dangerous optimization

A common reaction is to automate the painful step.

That can be exactly the wrong move.

If a process should disappear, automating it creates a very efficient version of something nobody needed.

So I use a simple order of operations:

Remove it if it is unnecessary.

Simplify it if it is necessary but complicated.

Automate it if it is necessary, stable, and repeated.

The order matters.

## AI makes this even more important

AI-assisted engineering makes execution cheaper. That is powerful, but it changes where friction matters.

When generating a migration, writing a test, exploring an API, or producing a first implementation becomes inexpensive, the bottleneck moves toward judgement.

What should happen?

What should not happen?

What evidence would change the decision?

What part must remain under human authority?

The ability to produce output quickly is becoming less scarce than the ability to decide which output is worth producing.

## Systems should make good decisions easier

This is where architecture and workflow meet.

A system should not only execute correctly. It should make the next correct decision easier to reach.

Good interfaces do this. Good tests do this. Good observability does this. Good tooling does this. Clear ownership does this.

And sometimes the best design is simply removing a step from the process.

I think that is one of the most useful ways to look at engineering: not as the construction of more machinery, but as the continuous reduction of unnecessary effort.

The goal is not maximum activity.

It is maximum useful movement.
