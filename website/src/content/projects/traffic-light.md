---
title: Traffic Light
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Build a timed red, yellow, and green traffic light sequence with three GPIO outputs.
summary: Expand a single blinking LED into a clear state sequence. This project introduces multiple outputs, reusable functions, readable timing constants, and systematic breadboard wiring.
difficulty: Easy
estimatedTime: 35-50 minutes
estimatedCost: $10-$18
platform: Raspberry Pi Pico
featuredImage:
  alt: Three-LED traffic light circuit controlled by a Raspberry Pi Pico
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, LEDs, GPIO, Sequencing]
featured: true
learningPathOrder: 3
learningGoals:
  - Control several GPIO outputs independently
  - Organize repeated behavior in a function
  - Build and verify repeated LED circuits
  - Translate a real sequence into program states
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: MicroPython installed }
  - { quantity: "1", name: Solderless breadboard, notes: Half-size or larger }
  - { quantity: "3", name: LEDs, notes: One red, one yellow, one green }
  - { quantity: "3", name: 220 ohm resistors, notes: One per LED }
  - { quantity: "4", name: Jumper wires, notes: Male-to-male }
circuit:
  title: Three-output traffic light circuit
  description: Red, yellow, and green LED anodes connect through 220 ohm resistors to GP15, GP14, and GP13. All cathodes share GND.
  alt: Circuit diagram for red yellow and green LEDs on Pico GPIO pins
  width: 1200
  height: 800
code:
  filename: traffic-light.py
  language: python
  content: |
    from machine import Pin
    from time import sleep

    red = Pin(15, Pin.OUT)
    yellow = Pin(14, Pin.OUT)
    green = Pin(13, Pin.OUT)

    def show(active, seconds):
        for light in (red, yellow, green):
            light.value(light is active)
        sleep(seconds)

    while True:
        show(red, 4)
        show(green, 4)
        show(yellow, 1)
troubleshooting:
  - { question: One color does not light, answer: Test that LED alone, check its polarity and resistor row, then confirm its GPIO number matches the code. }
  - { question: More than one LED stays on, answer: Confirm each anode has its own GPIO row and that the function sets every non-active output low. }
  - { question: The sequence order is wrong, answer: Match the physical LED colors to GP15, GP14, and GP13 or update the pin assignments. }
faq:
  - { question: Can I add a pedestrian button?, answer: Yes. Add a pushbutton input and check it between sequence states. }
  - { question: Why use a function?, answer: The function keeps repeated output and delay logic in one place, making the sequence easier to read. }
  - { question: Can all LEDs share one resistor?, answer: No. Each LED should have its own current-limiting resistor. }
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Blink an LED, description: Start with one GPIO output., difficulty: Beginner, href: /projects/blink-led }
  - { title: Password Lock, description: Combine multiple inputs and outputs., difficulty: Intermediate, href: /projects/password-lock }
  - { title: LED Night Light, description: Let a sensor control an LED., difficulty: Beginner, href: /projects/led-night-light }
---

## 1. Build three LED branches

Place the LEDs in traffic-light order. Connect each anode to its assigned GPIO through a separate 220 ohm resistor and connect all cathodes to ground.

## 2. Test one color at a time

Before running the full sequence, briefly set each GPIO high in Thonny's shell. Correct any color or polarity mistakes now.

## 3. Run the sequence

Upload the program and confirm the order is red, green, then yellow. The `show` function guarantees only one light is active.

## 4. Tune the timing

Change the duration values to model a faster tabletop demonstration or a more realistic intersection cycle.
