---
title: Power Supplies
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Choose safe voltages, share grounds, and power motors without resetting your controller.
summary: Reliable electronics starts with suitable power. Learn the difference between voltage and available current, why grounds must often be shared, and when a motor or servo deserves a separate regulated supply.
level: Beginner
estimatedTime: 22 minutes
tags: [Power, Voltage, Current, Safety]
order: 5
featured: true
relatedTutorials:
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
  - { title: Servo Motors, href: /tutorials/servo-motors }
---

## Voltage must match

Supply voltage must stay within the allowed range for every connected device. Too much voltage can damage a component quickly. A supply's current rating is capacity; the circuit draws the current it needs, provided the voltage is correct.

## Logic power versus load power

A microcontroller may power LEDs and small sensors, but motors, pumps, relays, and servos can create current spikes and electrical noise. Give demanding loads an appropriate external supply and switching hardware.

## Share ground for signals

Separate supplies usually need a common ground when one circuit sends a signal to the other. Without it, the signal voltage has no shared reference.

## Avoid common bench mistakes

- Check polarity before applying power.
- Set an adjustable supply voltage before connecting the circuit.
- Do not move breadboard wires while energized.
- Add current limiting when testing an unfamiliar circuit.
- Disconnect immediately if a part heats unexpectedly.

## Batteries are not all equivalent

A rectangular 9 V battery is poor for many motor or servo projects because it cannot sustain large current. Use a regulated USB supply or suitable battery pack matched to the load.
