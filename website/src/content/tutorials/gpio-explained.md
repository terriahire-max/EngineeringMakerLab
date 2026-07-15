---
title: GPIO Explained
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Understand digital input, digital output, logic levels, and safe GPIO use.
summary: General-purpose input/output pins connect software to real circuits. This guide explains high and low states, input pull resistors, output limits, and why a GPIO pin is a signal source rather than a power supply.
level: Beginner
estimatedTime: 18 minutes
tags: [GPIO, Digital Logic, Raspberry Pi Pico]
order: 2
featured: true
relatedTutorials:
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
  - { title: PWM Explained, href: /tutorials/pwm-explained }
---

## Inputs and outputs

An output pin is controlled by your program. Setting it high produces the board's logic voltage; setting it low brings it near ground. Outputs can drive signals and small loads such as an LED through a resistor.

An input pin reads an external voltage as a logical high or low. A button circuit often uses an internal pull-up or pull-down resistor so the input has a known state when the button is open.

## GPIO is not a power rail

Microcontroller pins can supply only limited current. Motors, relays, large LED loads, and servos need a suitable driver or external supply. Always check the board and component limits.

## Protecting 3.3 V inputs

Raspberry Pi Pico GPIO uses 3.3 V logic. Do not apply a 5 V signal directly. Use a suitable divider or level shifter when connecting a 5 V output such as the echo pin on many HC-SR04 modules.

## A practical debugging checklist

- Confirm your code uses the same pin number as the wire.
- Make sure connected devices share ground.
- Check whether the signal is 3.3 V safe.
- Test one input or output before combining the whole project.
