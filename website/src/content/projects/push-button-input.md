---
title: Read a Push Button with Raspberry Pi Pico
publishedDate: 2026-07-16
updatedDate: 2026-07-16
description: Read a push button with Raspberry Pi Pico and use a digital input on GP14 to control an LED on GP15 with beginner-friendly MicroPython.
summary: Add a push button to the LED circuit from Project 001 and make the light respond to you. In 20–30 minutes, you will read a digital input on GP14 and control an LED on GP15 using MicroPython.
difficulty: Beginner
estimatedTime: 20–30 minutes
estimatedCost: Included in the recommended starter kit
platform: Raspberry Pi Pico
featuredImage:
  alt: Original illustration of a Raspberry Pi Pico reading a push button and controlling an illuminated LED
  width: 1200
  height: 900
tags: [First Steps, Raspberry Pi Pico, Push Button, Digital Input, MicroPython]
featured: true
recommendedFor: [Middle School, High School, Adult Beginners, Homeschool]
learningPathOrder: 2
learningGoals:
  - Understand digital input
  - Learn how push buttons work
  - Learn pull-up and pull-down concepts
  - Read a GPIO input
  - Control an LED using a button
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: With header pins installed }
  - { quantity: "1", name: Breadboard, notes: Solderless breadboard }
  - { quantity: "1", name: Push button, notes: Four-leg momentary tactile switch }
  - { quantity: "1", name: LED, notes: Standard through-hole LED }
  - { quantity: "1", name: 220 ohm resistor, notes: Limits current through the LED }
  - { quantity: "4", name: Jumper wires, notes: Male-to-male }
  - { quantity: "1", name: USB cable, notes: Data-capable cable for programming }
circuit:
  title: Pico push-button input and LED output circuit
  description: The push button connects GP14 to GND when pressed; the Pico internal pull-up holds GP14 HIGH when released. GP15 connects through a 220 ohm resistor to the LED anode, and the LED cathode connects to GND.
  alt: Circuit diagram labeling GP14 button input with internal pull-up, GP15 LED output, 220 ohm resistor, LED polarity, and ground
  width: 1200
  height: 800
code:
  filename: main.py
  language: python
  content: |
    from machine import Pin
    from time import sleep

    # The internal pull-up keeps GP14 HIGH until the button connects it to GND.
    button = Pin(14, Pin.IN, Pin.PULL_UP)
    led = Pin(15, Pin.OUT)

    while True:
        if button.value() == 0:  # A pressed button reads LOW.
            led.on()
        else:
            led.off()

        sleep(0.02)  # A short pause keeps the loop stable.
codeExplanation:
  - GP14 is configured as a digital input with the Pico's internal pull-up resistor enabled.
  - The released button reads HIGH because the pull-up gives the input a known default state.
  - Pressing the button connects GP14 to GND, so button.value() becomes 0 and the LED turns on.
  - GP15 controls the external LED through its 220 ohm current-limiting resistor.
troubleshooting:
  - { question: The button always reads HIGH, answer: Confirm the switch bridges the breadboard center gap and that pressing it connects the GP14 side to the GND side. Rotate the switch 90 degrees if both jumpers are on permanently connected legs. }
  - { question: The button always reads LOW, answer: Check for an accidental direct connection between GP14 and GND, and verify the code uses Pin(14, Pin.IN, Pin.PULL_UP). }
  - { question: The input changes without pressing the button, answer: A floating input has no reliable default voltage. Enable Pin.PULL_UP exactly as shown and keep the GND connection secure. }
  - { question: The resistor is placed incorrectly, answer: The 220 ohm resistor belongs in series between GP15 and the LED anode. This version uses the Pico's internal pull-up, so no external 10K resistor is required for the button. }
  - { question: The LED does not respond, answer: Test its polarity and trace GP15 through the 220 ohm resistor and LED to GND, then confirm the program is running. }
  - { question: The code uses the wrong GPIO pin, answer: The button must connect to GP14 and the LED must connect to GP15. Match both physical pin labels to Pin(14) and Pin(15) in the code. }
faq:
  - { question: Why do buttons need pull-up or pull-down resistors?, answer: An open button otherwise leaves its input without a defined voltage. A pull resistor gives the pin a dependable default HIGH or LOW state. }
  - { question: What is a floating input?, answer: It is an input disconnected from a clear HIGH or LOW voltage. Electrical noise can then make its reading change unpredictably. }
  - { question: Can I use the Pico internal pull-up resistor?, answer: Yes. This project enables Pin.PULL_UP on GP14, so the button connects the input to GND when pressed and no external 10K resistor is needed. }
  - { question: Why doesn't my LED respond?, answer: Check the button orientation, GP14 and GP15 assignments, shared GND, LED polarity, resistor placement, and whether main.py is running on the Pico. }
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Blink an LED, description: Review the first GPIO output project., difficulty: Beginner, href: /projects/blink-led }
  - { title: Traffic Light, description: Use several LED outputs in a timed sequence., difficulty: Beginner, href: /projects/traffic-light }
nextPlannedProject: RGB LED
---

A push button is a temporary electrical switch. Pressing it joins two contacts; releasing it separates them. That simple change gives a microcontroller a way to sense a person's action and decide what should happen next.

Inputs matter because interactive systems need information from the world before they can respond. Buttons, switches, and sensors all turn real events into values a program can read. This project builds directly on Blink an LED: the Pico still controls an LED on GP15, but now a button on GP14 decides when the light turns on.

This implementation uses the Pico's internal pull-up resistor. GP14 normally reads HIGH, and pressing the button connects it to GND so it reads LOW. Follow the original diagrams for the circuit overview, then use the official SunFounder resources for the complete vendor-specific build walkthrough.

> **Engineering Teacher Tip:** An unconnected digital input is “floating,” so tiny amounts of electrical noise can make it jump unpredictably between HIGH and LOW. A pull-up or pull-down resistor weakly connects the input to a known voltage when the switch is open. That dependable default state is essential anywhere a digital signal might otherwise be left disconnected.
---
