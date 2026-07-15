---
title: Servo Motors
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Understand hobby servo wiring, position pulses, calibration, and power needs.
summary: A hobby servo combines a motor, gearbox, position sensor, and controller. Give it power and a repeated control pulse, and it attempts to hold the corresponding shaft angle.
level: Beginner
estimatedTime: 18 minutes
tags: [Servos, PWM, Motion, Power]
order: 4
featured: true
relatedTutorials:
  - { title: PWM Explained, href: /tutorials/pwm-explained }
  - { title: Power Supplies, href: /tutorials/power-supplies }
---

## The three servo connections

Most hobby servos have power, ground, and signal wires. Wire colors vary, so check the product information. The signal connects to a GPIO used for PWM; power should come from a source sized for the servo current.

## Position comes from pulse width

A typical analog servo receives a control pulse about every 20 milliseconds. Shorter pulses command one end of travel and longer pulses command the other. Exact safe limits vary by servo.

## Use a common ground

When the servo uses an external supply, connect supply ground to microcontroller ground. The signal needs that shared electrical reference.

## Calibrate before attaching a mechanism

Test the servo unloaded. Narrow the pulse range if it buzzes or pushes against an endpoint. Attach the horn only after you know the center and safe travel limits.

> A servo that resets your board or jitters under load is often reporting a power problem, not a software problem.
