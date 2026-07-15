---
title: Blink an LED
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Wire and program an LED to blink at a steady interval with a Raspberry Pi Pico.
summary: Your first controlled output project teaches the complete edit-upload-test loop. You will identify LED polarity, choose a current-limiting resistor, connect a GPIO output, and change timing in MicroPython.
difficulty: Beginner
estimatedTime: 20-30 minutes
estimatedCost: $8-$15
platform: Raspberry Pi Pico
recommendedProductId: sunfounder-raspberry-pi-pico-ultimate-starter-kit
featuredImage:
  alt: Completed Raspberry Pi Pico blinking LED circuit on a breadboard
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, LED, GPIO, MicroPython]
featured: true
learningPathOrder: 1
learningGoals:
  - Identify LED anode and cathode polarity
  - Protect an LED with a current-limiting resistor
  - Configure and switch a GPIO output
  - Control timing with a simple program loop
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: With header pins installed }
  - { quantity: "1", name: Solderless breadboard, notes: Half-size is sufficient }
  - { quantity: "1", name: LED, notes: Any standard 5 mm color }
  - { quantity: "1", name: 220 ohm resistor, notes: Current limiting }
  - { quantity: "2", name: Jumper wires, notes: Male-to-male }
  - { quantity: "1", name: Micro-USB cable, notes: Data-capable cable }
circuit:
  title: Pico LED output circuit
  description: GP15 connects through a 220 ohm resistor to the LED anode; the cathode connects to GND.
  alt: Circuit diagram for an LED on Raspberry Pi Pico GP15
  width: 1200
  height: 800
code:
  filename: main.py
  language: python
  content: |
    from machine import Pin
    from time import sleep

    led = Pin(15, Pin.OUT)

    while True:
        led.toggle()
        sleep(0.5)
troubleshooting:
  - { question: The LED never lights, answer: Reverse the LED, confirm GP15 is wired through the resistor to the long leg, and verify the short leg reaches GND. }
  - { question: Thonny cannot find the Pico, answer: Try a known data-capable USB cable and select the MicroPython Raspberry Pi Pico interpreter. }
  - { question: The LED is very dim, answer: Check for a resistor value much larger than 220 ohms and make sure every jumper is firmly seated. }
faq:
  - { question: Can I use the onboard LED instead?, answer: Yes. On an original Pico use Pin 25; some Pico variants support Pin LED. }
  - { question: Can I change the blink speed?, answer: Yes. Reduce or increase the value passed to sleep; the value is measured in seconds. }
  - { question: Why is the resistor required?, answer: It limits current to protect both the LED and the Pico GPIO pin. }
relatedTutorials:
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Traffic Light, description: Sequence three LEDs with timed GPIO outputs., difficulty: Beginner, href: /projects/traffic-light }
  - { title: LED Night Light, description: Switch an LED using a light sensor., difficulty: Beginner, href: /projects/led-night-light }
  - { title: Servo Motor Control, description: Move from digital switching to PWM control., difficulty: Beginner, href: /projects/servo-motor-control }
---

## 1. Place the LED

Insert the LED across two separate breadboard rows. The longer anode leg will connect toward GP15; the shorter cathode leg will connect to ground.

## 2. Add the resistor and jumpers

Connect GP15 to one end of the 220 ohm resistor and the other end to the LED anode. Connect the cathode row to a Pico GND pin.

## 3. Run the program

Connect the Pico, open Thonny, select the MicroPython interpreter, and run the code below. Save it as `main.py` on the Pico to start automatically.

## 4. Experiment with timing

Change `sleep(0.5)` to `sleep(0.1)` or `sleep(1)` and run the program again to see how software timing changes a physical output.
