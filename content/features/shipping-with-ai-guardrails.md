---
title: "The checks I built because I don't write the code"
company: "Personal Projects"
date: "2026"
description: "An AI-assisted codebase doesn't rot the way a hand-written one does - the code stays fine and the claims about it go stale. Ten automated checks, a migration runner that refuses orders, and the deploy verification I only added after production served an old build for two days."
status: "Building"
tags: ["AI-Assisted Development", "Tooling", "Deploy", "Verification", "Solo Build"]
category: "feature"
tag:
  label: "Build Guardrails"
  color: "purple"
caseStudy:
  name: "Building a marketplace for a customer who runs it on a spreadsheet"
  slug: "marketlark"
---

**I direct the build and review the work. An AI writes the implementation. That combination fails in a specific way, and it isn't the way people expect.**

The code is usually fine. What rots is everything *around* the code. A doc says there are seven migrations when there are thirty-four. A comment describes a security filter nobody wrote. A version number in three files disagrees with what production is actually serving. None of that breaks a build, so nothing tells you.

Every one of those happened to me on this project. Each of them cost real time, and each one was a claim somebody had written down once and never re-checked. So I built tooling whose only job is to make that class of lie fail loudly.

---

## What I Built

**`npm run doctor` - ten checks across two sign-offs.** It runs in about a second and I run it at every stopping point. The checks are grouped by role: engineering answers "will this ship, and does the repo tell the truth about itself," and compliance answers "did the compliance layer see what shipped." Adding a new role later is one line.

**Four design rules, each learned by getting it wrong:**

- **Every check is relational.** It compares one artifact to another and never asserts a constant. A check that said "assert seven migrations" would make the checker itself a liar the moment an eighth landed. Version coherence doesn't know what the version *is* - it reads the value out of every place that carries one and fails if they disagree, then prints the list. That list has grown from four homes to six without me touching the check.
- **Offline skips rather than fails.** A checker that breaks on a plane is a checker that gets disabled.
- **Exactly one check asserts a claim about the code.** For weeks my own project instructions said the app was built on shadcn and Radix, in the section headed "decided, don't re-litigate." It had been false since the first commit. That specific lie now has a test. The rest of the tool stays relational, because a framework for asserting everything ends up asserting nothing.
- **Exit code equals the number of failures**, so it can gate a push.

**A check that fails the build if a backlog table reappears in the repo.** Open work used to live in a markdown table in my docs. The table stayed accurate; the prose around it rotted until the status file had grown to 561 lines with fourteen stacked "resume here" sections and a header that was flatly wrong. I moved the tracker out to Linear, and then I made the repo refuse to grow a new one. The rule underneath it generalizes: **never restate a checkable fact in prose**, because the prose is what drifts.

**A NUL-byte check**, from an afternoon I'd rather not repeat. A single raw NUL byte in a file makes POSIX `grep` silently report "no match" for that entire file. Not an error. A clean, confident, wrong answer. Everything I searched for in that file came back empty and I believed it.

---

## The Deploy Gate

Cloudflare builds on node 22 and npm 10.9.2, and it runs `npm clean-install`, which hard-fails on a lockfile that's out of sync. My machine runs npm 11, which resolves differently and can write a lockfile that npm 10 refuses.

That silently broke every deploy for two days across five versions. Production kept serving the last good build the whole time, my docs said a newer version was live, and nothing shouted, because a failed build just leaves the previous one running.

The fix is a check that reproduces Cloudflare's exact install with Cloudflare's exact npm, and it has to run before any push that matters. The trap worth naming: `npm ci --dry-run` on npm 11 is a false negative. It passed on the very lockfile Cloudflare was rejecting.

**And then verify the deploy actually shipped.** I grep the exact version string out of the bundle production is serving. Two details are load-bearing:

- **The exact string, never a pattern.** A regex shaped like `0.\d+.\d+` matched the old version and the new one identically. That bit me three times, including on the 0.99.0 to 0.100.0 hop.
- **The served bundle, never the local one.** A local build proves what my machine produced and nothing about what users get.

---

## A Migration Runner That Refuses Orders

Schema changes apply through a script rather than by hand, and its useful behavior is what it won't do.

It puts the schema change and its history row in a single transaction, so a failed bookkeeping insert rolls the schema change back with it. It refuses to re-apply anything. It refuses to let me mark a migration as applied just to make a check pass, which is exactly the shortcut a tired person reaches for at the end of a session.

And it refuses one specific migration by version number. That migration ships a view listing every confirmed vendor at a market, written before the product moved to double opt-in, where a vendor has to choose to appear. Applying it now would expose every confirmed vendor against their own default setting. It's blocked in the tool rather than in a comment, because a comment has never stopped anyone.

I also prove triggers before applying them. The test splices the pending migration into its own transaction, runs against the real hosted schema, and rolls the whole thing back. One case in each proof has to go red against the naive implementation - a test that passes against both the broken and the correct version is decoration.

---

## Two Traps That Make a Check Describe the Wrong Build

Both of these cost me a session, and both produce a verification that is coherent, confident, and about code I didn't write.

**A leftover dev server from an earlier session.** It answers on the port and renders old code perfectly. I once had three screens verified against a build that no longer existed. The fix is to assert that whatever is being served contains a string only the current build carries, before trusting a single thing it shows me.

**A build command that short-circuits.** My build script type-checks first and only then bundles, so a type error means the bundler never runs and the output directory keeps the previous build. When a verification contradicts a change I can see in the source, the rule is now to suspect the artifact before suspecting the change.

---

## Why This Is the Part I'd Bring to a Team

Directing an AI build is fast enough that the bottleneck stops being how much you can produce and becomes how much you can *trust*. Type-checking passing, 805 tests passing, and every one of my own checks green still told me nothing about seven real defects sitting on screens I hadn't opened on a phone. Static checks are strong evidence about logic and data, and no evidence at all about how something feels.

So the discipline that matters isn't prompting. It's knowing which of your green lights is actually measuring something, and building the ones that are missing.

---

## Skills

Developer tooling, deploy verification, database migration safety, technical writing, working with AI as a development partner
