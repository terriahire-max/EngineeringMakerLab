---
title: Breadboard Basics
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Learn how solderless breadboard rows, power rails, and center gaps connect.
summary: A breadboard lets you build and revise circuits without solder. Learn which holes are electrically connected, how to route power clearly, and how to avoid the wiring mistakes that stop first projects from working.
level: Beginner
estimatedTime: 15 minutes
tags: [Breadboards, Prototyping, Wiring]
order: 1
featured: true
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: Power Supplies, href: /tutorials/power-supplies }
---

## How the holes connect

On a typical breadboard, each group of five holes beside the center gap is connected internally. The two sides do not cross the gap, which lets integrated circuits straddle it without shorting opposite pins together.

Long power rails usually run near the edges. Some boards split those rails in the middle, so test continuity or add a jumper if power must travel the full length.

## A reliable wiring order

1. Disconnect power.
2. Connect ground and the correct supply voltage to the rails.
3. Place components so each lead occupies the intended electrical row.
4. Add signal jumpers.
5. Inspect for shifted rows before applying power.

## Common beginner mistakes

- Putting both LED legs into the same connected row.
- Assuming every red or blue rail is continuous end to end.
- Moving a component while the circuit is powered.
- Using wire colors inconsistently, which makes faults harder to see.

> Build slowly enough that every wire has a reason. Clean wiring is a debugging tool, not decoration.
