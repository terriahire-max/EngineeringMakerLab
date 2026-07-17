---
title: Servo Motor Control
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Sweep a small hobby servo through precise angles using PWM from a Raspberry Pi Pico.
summary: Learn how timed pulses represent position. You will wire a servo with a shared ground, generate a 50 Hz PWM signal, convert angles into pulse widths, and avoid common power problems.
difficulty: Easy
estimatedTime: 40-60 minutes
estimatedCost: $12-$22
platform: Raspberry Pi Pico
featuredImage:
  alt: Raspberry Pi Pico controlling a small SG90 hobby servo
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, PWM, Servo, Motion]
featured: true
learningPathOrder: 3
learningGoals:
  - Understand pulse width control for hobby servos
  - Generate PWM with MicroPython
  - Share ground between control and power circuits
  - Recognize symptoms of an undersized power source
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: MicroPython installed }
  - { quantity: "1", name: SG90 micro servo, notes: 5 V hobby servo }
  - { quantity: "1", name: Breadboard, notes: For power distribution }
  - { quantity: "3", name: Jumper wires, notes: Signal, power, and ground }
  - { quantity: "1", name: Regulated 5 V supply, notes: Recommended for reliable motion }
circuit:
  title: Pico servo control circuit
  description: The servo signal wire connects to GP16. Servo power uses regulated 5 V, and the external supply ground must connect to Pico GND.
  alt: Circuit diagram for a servo controlled by Raspberry Pi Pico GP16
  width: 1200
  height: 800
code:
  filename: servo-sweep.py
  language: python
  content: |
    from machine import Pin, PWM
    from time import sleep

    servo = PWM(Pin(16))
    servo.freq(50)

    def set_angle(angle):
        pulse_us = 500 + (angle / 180) * 2000
        duty = int(pulse_us * 65535 / 20000)
        servo.duty_u16(duty)

    while True:
        for angle in (0, 90, 180, 90):
            set_angle(angle)
            sleep(1)
troubleshooting:
  - { question: The servo jitters or resets the Pico, answer: Use a separate regulated 5 V supply for the servo and connect its ground to Pico ground. }
  - { question: The servo moves in the wrong direction, answer: Swap the angle values in your sequence; direction depends on the order of commanded positions. }
  - { question: The servo buzzes at an endpoint, answer: Reduce the minimum or maximum pulse range so the horn is not driven against its mechanical stop. }
faq:
  - { question: Can the Pico power the servo directly?, answer: A tiny unloaded servo may move, but a separate regulated supply is safer and more reliable. }
  - { question: Why is PWM set to 50 Hz?, answer: Standard analog hobby servos typically expect one position pulse about every 20 milliseconds. }
  - { question: Can I control two servos?, answer: Yes, use another PWM-capable GPIO and ensure the power supply can handle both motors. }
relatedTutorials:
  - { title: PWM Explained, href: /tutorials/pwm-explained }
  - { title: Servo Motors, href: /tutorials/servo-motors }
  - { title: Power Supplies, href: /tutorials/power-supplies }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Password Lock, description: Use a servo as a lock actuator., difficulty: Intermediate, href: /projects/password-lock }
  - { title: Blink an LED, description: Review basic GPIO output control., difficulty: Beginner, href: /projects/blink-led }
  - { title: Ultrasonic Distance Sensor, description: Add distance sensing to a moving build., difficulty: Intermediate, href: /projects/ultrasonic-distance-sensor }
---

## 1. Connect a common ground

Connect the external 5 V supply ground to both the servo ground and a Pico GND pin. A common reference is required for the control pulse.

## 2. Wire power and signal

Connect servo power to regulated 5 V and its signal wire to GP16. Check the servo manufacturer's wire colors before applying power.

## 3. Upload the sweep program

Run the code with the servo horn unobstructed. It should move through 0, 90, 180, and back to 90 degrees.

## 4. Calibrate safe limits

If the servo strains near either end, narrow the pulse range in `set_angle` until motion is smooth and quiet.
