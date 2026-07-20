---
title: Ultrasonic Distance Sensor
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Measure distance with an HC-SR04 sensor and display live readings in centimeters.
summary: This project measures the travel time of an ultrasonic pulse and converts it to distance. It introduces digital timing, sensor protocols, 5 V-to-3.3 V level protection, and filtering unstable readings.
difficulty: Intermediate
estimatedTime: 50-75 minutes
estimatedCost: $12-$20
platform: Raspberry Pi Pico
featuredImage:
  alt: HC-SR04 ultrasonic sensor wired to a Raspberry Pi Pico
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, Ultrasonic, Sensors, Timing]
featured: true
learningPathOrder: 4
learningGoals:
  - Trigger and time a digital sensor pulse
  - Convert pulse duration into distance
  - Protect a 3.3 V input with a voltage divider
  - Diagnose noisy or out-of-range measurements
parts:
  - { quantity: "1", name: Raspberry Pi Pico, notes: MicroPython installed }
  - { quantity: "1", name: HC-SR04 ultrasonic module, notes: 5 V module }
  - { quantity: "1", name: 1 kohm resistor, notes: Echo voltage divider }
  - { quantity: "1", name: 2 kohm resistor, notes: Echo voltage divider }
  - { quantity: "1", name: Breadboard, notes: Half-size or larger }
  - { quantity: "6", name: Jumper wires, notes: Male-to-male }
circuit:
  title: Pico ultrasonic sensor circuit
  description: TRIG connects to GP3. ECHO reaches GP2 through a 1 kohm and 2 kohm divider so the 5 V echo signal is reduced for the Pico input.
  alt: HC-SR04 level-shifted circuit diagram for Raspberry Pi Pico
  width: 1200
  height: 800
code:
  filename: distance.py
  language: python
  content: |
    from machine import Pin, time_pulse_us
    from time import sleep_us, sleep

    trigger = Pin(3, Pin.OUT)
    echo = Pin(2, Pin.IN)

    def distance_cm():
        trigger.low()
        sleep_us(2)
        trigger.high()
        sleep_us(10)
        trigger.low()
        duration = time_pulse_us(echo, 1, 30000)
        return duration / 58.0

    while True:
        try:
            print("{:.1f} cm".format(distance_cm()))
        except OSError:
            print("Out of range")
        sleep(0.25)
troubleshooting:
  - { question: Every reading times out, answer: Confirm TRIG and ECHO are not swapped, the module has 5 V power, and all grounds are connected. }
  - { question: Readings jump randomly, answer: Aim at a broad flat target, keep jumper wires short, and average several measurements. }
  - { question: The Pico input may have received 5 V, answer: Disconnect power and verify the echo voltage divider before continuing; never connect HC-SR04 ECHO directly to a Pico GPIO. }
faq:
  - { question: Why divide the echo voltage?, answer: The HC-SR04 echo can be 5 V while Raspberry Pi Pico GPIO inputs are designed for 3.3 V logic. }
  - { question: What objects are difficult to detect?, answer: Soft, angled, narrow, or irregular surfaces may absorb or reflect sound away from the sensor. }
  - { question: Can I show the result on a display?, answer: Yes. An I2C OLED or LCD is a useful next step after serial readings are reliable. }
relatedTutorials:
  - { title: GPIO Explained, href: /tutorials/gpio-explained }
  - { title: Power Supplies, href: /tutorials/power-supplies }
relatedBuyingGuide: { title: Raspberry Pi Pico Collection, href: /collections/raspberry-pi-pico }
relatedProjects:
  - { title: Servo Motor Control, description: Add controlled movement to a sensor platform., difficulty: Beginner, href: /projects/servo-motor-control }
  - { title: Traffic Light, description: Turn distance ranges into colored indicators., difficulty: Beginner, href: /projects/traffic-light }
  - { title: Password Lock, description: Practice a larger multi-component system., difficulty: Intermediate, href: /projects/password-lock }
---

## 1. Power the sensor

Connect HC-SR04 VCC to 5 V, GND to Pico GND, and TRIG to GP3. Keep the system unpowered while building the echo divider.

## 2. Protect the echo input

Connect ECHO through 1 kohm to a junction connected to GP2. Connect 2 kohm from that junction to ground. Verify the divider before powering the circuit.

## 3. Run the measurement code

Point the sensor toward a flat object 10 to 50 cm away and run the program. Stable centimeter readings should appear four times per second.

## 4. Test the useful range

Move the target closer and farther away. Note where readings become unstable so your future project can reject unreliable values.
