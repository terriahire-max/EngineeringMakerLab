---
title: LED Night Light
publishedDate: 2026-07-15
updatedDate: 2026-07-15
description: Build an automatic LED night light that turns on when the room gets dark.
summary: This beginner build uses a photoresistor to measure ambient light and an Arduino to control an LED. Along the way, you will assemble a voltage divider, read an analog sensor, and tune a threshold for your room.
difficulty: Beginner
estimatedTime: 30–45 minutes
estimatedCost: $15–$25
platform: Arduino
featuredImage:
  alt: Illustration representing a completed LED night light project
  width: 1200
  height: 900
tags:
  - Arduino
  - Sensors
  - LEDs
  - Beginner
featured: true
learningGoals:
  - Read changing analog values from a photoresistor
  - Build a voltage divider on a breadboard
  - Control an LED from a digital output pin
  - Choose and calibrate a useful light threshold
parts:
  - quantity: "1"
    name: Arduino-compatible board
    notes: Uno-style board recommended
  - quantity: "1"
    name: Solderless breadboard
    notes: Half-size or larger
  - quantity: "1"
    name: Photoresistor (LDR)
    notes: Measures ambient light
  - quantity: "1"
    name: LED
    notes: Any standard 5 mm color
  - quantity: "1"
    name: 10 kΩ resistor
    notes: For the sensor voltage divider
  - quantity: "1"
    name: 220 Ω resistor
    notes: Limits current through the LED
  - quantity: 6–8
    name: Jumper wires
    notes: Male-to-male
  - quantity: "1"
    name: USB cable
    notes: For programming and power
circuit:
  title: LED night light circuit
  description: The photoresistor and 10 kΩ resistor form a voltage divider connected to A0. The LED connects to digital pin 9 through a 220 Ω resistor.
  alt: Circuit overview for the LED night light project
  width: 1200
  height: 800
code:
  filename: led-night-light.ino
  language: cpp
  content: |
    const int sensorPin = A0;
    const int ledPin = 9;
    const int lightThreshold = 500;

    void setup() {
      pinMode(ledPin, OUTPUT);
      Serial.begin(9600);
    }

    void loop() {
      int lightLevel = analogRead(sensorPin);
      Serial.println(lightLevel);

      if (lightLevel < lightThreshold) {
        digitalWrite(ledPin, HIGH);
      } else {
        digitalWrite(ledPin, LOW);
      }

      delay(100);
    }
troubleshooting:
  - question: The LED never turns on
    answer: Reverse the LED if its polarity is wrong, confirm the cathode reaches ground, and temporarily set lightThreshold to 1023 to test the output circuit.
  - question: The LED stays on in bright light
    answer: Open the Serial Monitor and note the sensor values in bright and dark conditions. Set lightThreshold to a number between those readings.
  - question: The sensor reading is stuck at 0 or 1023
    answer: Recheck the voltage divider. A0 must connect to the junction between the photoresistor and the 10 kΩ resistor, not directly to a power rail.
faq:
  - question: Can I use a different Arduino-compatible board?
    answer: Yes. Any board with an analog input and a 5V-compatible digital output should work, though pin labels and voltage limits may differ.
  - question: Can the LED fade on instead of switching instantly?
    answer: Yes. Pin 9 supports PWM on an Arduino Uno, so you can replace digitalWrite with analogWrite and map the sensor reading to brightness.
  - question: Does this need to stay connected to a computer?
    answer: No. After uploading the sketch, the board can run from a suitable USB wall adapter or battery pack.
relatedTutorials:
  - { title: Breadboard Basics, href: /tutorials/breadboard-basics }
  - { title: PWM Explained, href: /tutorials/pwm-explained }
  - { title: Power Supplies, href: /tutorials/power-supplies }
relatedBuyingGuide: { title: Best Electronics Kit for Beginners, href: /buying-guides/best-electronics-kit-for-beginners }
relatedProjects:
  - title: Blink an LED
    description: Start with a simple controlled LED output.
    difficulty: Beginner
    href: /projects/blink-led
  - title: Traffic Light
    description: Sequence several LEDs with timed outputs.
    difficulty: Beginner
    href: /projects/traffic-light
  - title: Servo Motor Control
    description: Move from LED brightness to PWM motion control.
    difficulty: Easy
    href: /projects/servo-motor-control
---

## 1. Prepare the breadboard power rails

Connect the Arduino 5V pin to the positive rail and GND to the negative rail. Keep power disconnected while placing the remaining components.

> **Builder tip:** Use consistent wire colors—red for 5V and black for ground—to make troubleshooting easier.

## 2. Build the light sensor

Place the photoresistor from 5V to a free row. Connect that row to A0, then place the 10 kΩ resistor from the same row to ground.

## 3. Connect the LED

Connect digital pin 9 to the LED anode through the 220 Ω resistor. Connect the shorter cathode leg to ground.

> **Builder tip:** The longer LED leg is normally the positive anode. The flat edge of the LED body marks the cathode.

## 4. Upload the sketch

Connect the board by USB, select the correct board and port in the Arduino IDE, and upload the code shown below.

## 5. Test and calibrate

Cover the photoresistor with your hand. If the LED switches at the wrong light level, watch the Serial Monitor values and adjust the `lightThreshold` constant.
