---
title: Password Lock
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Build a keypad-controlled lock that moves a servo when the correct code is entered.
summary: Combine a 4x4 matrix keypad, status LED, and servo into a complete input-process-output system. You will scan rows and columns, store user input, compare a passcode, and control a physical lock mechanism.
difficulty: Advanced
estimatedTime: 90-120 minutes
estimatedCost: $20-$35
platform: Raspberry Pi Pico
featuredImage:
  alt: Raspberry Pi Pico keypad password lock with micro servo
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, Keypad, Servo, Security]
featured: true
learningPathOrder: 5
learningGoals:
  - Scan a matrix keypad without a dedicated interface module
  - Build and compare a multi-digit input string
  - Coordinate status feedback and servo movement
  - Separate logic errors from wiring and power faults
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: MicroPython installed }
  - { quantity: "1", name: 4x4 matrix keypad, notes: Eight-pin membrane type }
  - { quantity: "1", name: SG90 micro servo, notes: Lock actuator }
  - { quantity: "1", name: Green LED, notes: Access feedback }
  - { quantity: "1", name: 220 ohm resistor, notes: LED current limiting }
  - { quantity: "1", name: Regulated 5 V supply, notes: Servo power }
  - { quantity: "12", name: Jumper wires, notes: Keypad and outputs }
circuit:
  title: Keypad password lock circuit
  description: Keypad rows use GP2-GP5 and columns use GP6-GP9. The servo signal uses GP16, and the status LED uses GP15 through 220 ohms. Servo and Pico grounds are common.
  alt: Circuit diagram for a Raspberry Pi Pico keypad and servo lock
  width: 1200
  height: 800
code:
  filename: password-lock.py
  language: python
  content: |
    from machine import Pin, PWM
    from time import sleep

    keys = (("1","2","3","A"), ("4","5","6","B"),
            ("7","8","9","C"), ("*","0","#","D"))
    rows = [Pin(p, Pin.OUT) for p in (2, 3, 4, 5)]
    cols = [Pin(p, Pin.IN, Pin.PULL_DOWN) for p in (6, 7, 8, 9)]
    servo = PWM(Pin(16)); servo.freq(50)
    status = Pin(15, Pin.OUT)
    entered = ""; password = "2580"

    def angle(degrees):
        pulse = 500 + degrees / 180 * 2000
        servo.duty_u16(int(pulse * 65535 / 20000))

    while True:
        for r, row in enumerate(rows):
            row.high()
            for c, col in enumerate(cols):
                if col.value():
                    key = keys[r][c]
                    if key == "#":
                        if entered == password:
                            status.high(); angle(90); sleep(3); angle(0)
                        status.low(); entered = ""
                    elif key == "*": entered = ""
                    else: entered = (entered + key)[-4:]
                    while col.value(): sleep(0.02)
            row.low()
troubleshooting:
  - { question: Keys produce the wrong characters, answer: Check the keypad pin order and adjust row or column pin lists to match its datasheet. }
  - { question: The servo resets the Pico, answer: Power the servo from a separate regulated 5 V source and connect the supply ground to Pico GND. }
  - { question: One key registers several times, answer: Keep the release-wait loop and add a short debounce delay after each accepted press. }
faq:
  - { question: Is this suitable for real security?, answer: No. It is an educational prototype; the passcode is visible in source code and the mechanism is not hardened. }
  - { question: How do I change the password?, answer: Replace the password string and save the updated program to the Pico. }
  - { question: Can I add a display?, answer: Yes. An I2C LCD can show masked input, prompts, and access status. }
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: PWM Explained, href: /tutorials/pwm-explained }
  - { title: Servo Motors, href: /tutorials/servo-motors }
relatedBuyingGuide: { title: Best Raspberry Pi Pico Starter Kit, href: /buying-guides/best-raspberry-pi-pico-starter-kit }
relatedProjects:
  - { title: Servo Motor Control, description: Learn the lock actuator first., difficulty: Beginner, href: /projects/servo-motor-control }
  - { title: Traffic Light, description: Practice coordinating several outputs., difficulty: Beginner, href: /projects/traffic-light }
  - { title: Ultrasonic Distance Sensor, description: Build confidence with sensor input logic., difficulty: Intermediate, href: /projects/ultrasonic-distance-sensor }
---

## 1. Test the keypad by itself

Wire the four row and four column pins. Run a small scan test or print each detected key before connecting the servo.

## 2. Add status feedback

Connect the green LED to GP15 through a 220 ohm resistor. Confirm it lights independently when GP15 is high.

## 3. Connect the servo safely

Power the servo from regulated 5 V, connect the grounds, and connect only the servo signal to GP16. Test open and closed angles before attaching a latch.

## 4. Run the lock program

Enter `2580` followed by `#`. The LED should light and the servo should unlock for three seconds. Press `*` to clear a partial entry.

## 5. Tune the mechanism

Mount the servo horn so neither locked nor unlocked position forces it against a mechanical stop. Treat this as a learning model, not a security device.
