---
title: PWM Explained
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Learn how pulse-width modulation controls apparent brightness, speed, and position.
summary: PWM switches a digital output quickly and changes the percentage of each cycle spent high. That duty cycle can approximate an adjustable output for LEDs and motors, while timed servo pulses encode a target angle.
level: Beginner
estimatedTime: 20 minutes
tags: [PWM, Duty Cycle, LEDs, Motors]
order: 3
featured: true
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: Servo Motors, href: /tutorials/servo-motors }
---

## Frequency and duty cycle

Frequency is how many PWM cycles occur per second. Duty cycle is the fraction of each cycle that the signal remains high. A 25 percent duty cycle is high for one quarter of every cycle.

For an LED, rapid switching is perceived as brightness. For a DC motor used with a proper driver, average delivered power influences speed.

## PWM is still digital

The pin is not producing every voltage between 0 V and 3.3 V. It switches between low and high. The load, your eyes, or an added filter averages those pulses.

## Choosing a frequency

The useful frequency depends on the load. LEDs should switch fast enough to avoid visible flicker. Standard hobby servos usually expect a roughly 50 Hz control frame, but their position depends on pulse width rather than ordinary brightness-style duty control.

## When you need extra hardware

Never drive a motor directly from a GPIO pin. Use a transistor, MOSFET, or motor driver plus appropriate power protection.
