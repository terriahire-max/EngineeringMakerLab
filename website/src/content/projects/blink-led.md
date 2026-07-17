---
title: Blink an LED with Raspberry Pi Pico
publishedDate: 2026-07-16
updatedDate: 2026-07-16
description: Build your first Raspberry Pi Pico circuit by blinking an LED with MicroPython while learning GPIO, polarity, resistors, and breadboard wiring.
summary: Build a small light that switches on and off automatically. In about 20–30 minutes, you will connect an LED safely to a Raspberry Pi Pico and control it with your first MicroPython program.
difficulty: Beginner
estimatedTime: 20–30 minutes
estimatedCost: Included in the recommended starter kit
platform: Raspberry Pi Pico
recommendedProductId: sunfounder-thales-pico-starter-kit
featuredImage:
  src: /project-images/blink-led-hero.svg
  alt: Original illustration of a Raspberry Pi Pico connected to a glowing LED on a breadboard
  width: 1200
  height: 900
tags: [First Steps, Raspberry Pi Pico, LED, GPIO, MicroPython]
featured: true
recommendedFor: [Middle School, High School, Adult Beginners, Homeschool]
learningPathOrder: 1
learningGoals:
  - Learn what a GPIO pin is
  - Understand LED polarity
  - Learn why resistors are necessary
  - Upload and run your first MicroPython program
  - Build confidence using a breadboard
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: With header pins installed }
  - { quantity: "1", name: Breadboard, notes: Solderless breadboard }
  - { quantity: "1", name: LED, notes: A standard through-hole LED }
  - { quantity: "1", name: 220 ohm resistor, notes: Limits current through the LED }
  - { quantity: "2", name: Jumper wires, notes: Male-to-male }
  - { quantity: "1", name: USB cable, notes: Data-capable cable for programming the Pico }
teacherTip: An LED needs correct polarity, and a resistor limits current to protect both the LED and the Pico GPIO output. The long LED leg is normally the anode, but beginners should verify the component's markings and documentation instead of relying only on leg length.
officialGuide:
  title: Complete Official Build Guide
  href: https://docs.sunfounder.com/projects/thales-kit/en/latest/components/led.html
  description: Already have the kit? SunFounder's official Thales Kit documentation provides the detailed component information, wiring guidance, and code needed to complete this build.
  buttonLabel: Open the Official SunFounder LED Guide
code:
  filename: main.py
  language: python
  content: |
    from machine import Pin
    from time import sleep

    led = Pin(15, Pin.OUT)

    while True:
        led.on()
        sleep(1)
        led.off()
        sleep(1)
codeExplanation:
  - Pin identifies GP15 and configures it as an output that the Pico can switch.
  - The while True loop repeats forever while the program is running.
  - Calling led.on() turns the LED on; calling led.off() turns it off.
  - Each sleep call pauses for one second, creating a steady blink.
troubleshooting:
  - { question: The LED does not light, answer: Confirm the Pico has power and test each connection from GP15 through the resistor and LED to GND. }
  - { question: The LED is installed backward, answer: Disconnect USB power and rotate the LED so its longer anode leg faces the resistor and its shorter cathode leg faces GND. }
  - { question: A lead is in the wrong breadboard row, answer: Check the top-down wiring visual. Parts connect only when their leads share the correct internally connected row. }
  - { question: The circuit has no shared ground, answer: Connect the LED cathode row back to a GND pin on the same Pico controlling GP15. }
  - { question: The code uses the wrong GPIO pin, answer: This project uses GP15. Confirm the program says Pin(15, Pin.OUT) and the red jumper starts at physical GP15. }
  - { question: The resistor or jumper is misplaced, answer: Trace the path in order—GP15, resistor, LED anode, LED cathode, then GND—and reseat loose leads. }
  - { question: The code is not running on the Pico, answer: Select the MicroPython Raspberry Pi Pico interpreter, use a data-capable USB cable, and run or save main.py on the Pico. }
faq:
  - { question: Which LED leg is positive?, answer: The longer leg is usually the positive anode. The shorter leg and flat edge of the LED body identify the negative cathode. }
  - { question: Why is a resistor required?, answer: It limits current to a safe level, protecting both the LED and the Pico GPIO output. }
  - { question: Can I use a resistor other than 220 ohms?, answer: A nearby value such as 330 ohms is generally suitable and may make the LED slightly dimmer. Avoid very low resistance values. }
  - { question: Will connecting the LED backward damage it?, answer: At the Pico voltage it normally will not light and is unlikely to be damaged briefly. Disconnect power and correct its orientation rather than leaving it reversed. }
  - { question: Can I use the Pico onboard LED instead?, answer: Yes, but the correct onboard LED pin varies by Pico model. This project uses an external LED on GP15 so you can learn polarity, resistance, and breadboard wiring. }
relatedTutorials:
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Push Button Input, description: Read a digital input and use it to control an LED., difficulty: Beginner, href: /projects/push-button-input }
  - { title: Traffic Light, description: Coordinate three LEDs to create a timed signal sequence., difficulty: Beginner, href: /projects/traffic-light }
---

An LED, or light-emitting diode, produces light when current flows through it in the correct direction. Blinking one is the traditional first electronics project because a simple circuit and a short program produce an immediate result you can see.

You will build a breadboard circuit in which Raspberry Pi Pico GPIO 15 controls an external LED. A 220 ohm resistor keeps the current at a safe level, while a MicroPython loop turns the light on and off every second.

The recommended kit supplies the core parts for this first experiment and leaves room for later beginner projects. If you already own the kit, use the official SunFounder guide later on this page for complete component, wiring, and programming guidance.
---
