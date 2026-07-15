# Beginner learning path

Version 1.1 content roadmap for Engineering Maker Lab. This document defines project briefs and publishing order only; it does not contain full tutorials or change the public website.

## Path promise

A complete beginner buys one recommended kit, learns one concept at a time with MicroPython, and finishes with small systems that combine sensing, feedback, displays, and motion.

### Standard platform

- Board: Raspberry Pi Pico with headers
- Language: MicroPython
- Editor: Thonny
- Recommended kit: SunFounder Raspberry Pi Pico Ultimate Starter Kit — Euler, SKU `CN0359D`
- Engineering Maker Lab product ID: `sunfounder-raspberry-pi-pico-ultimate-starter-kit`

SunFounder describes the Euler kit as containing the Pico plus LEDs, resistors, breadboard parts, controls, sensors, displays, servo, keypad, ultrasonic and DHT11 modules, and a power supply module. See the [official Euler product page](https://www.sunfounder.com/products/sunfounder-euler-kit) and [official Euler component list](https://docs.sunfounder.com/projects/euler-kit/en/latest/component/what_is_included_in_this_kit.html).

Kit contents can change. Before producing a project, reconcile this roadmap with the exact packaged revision and update the central product record if needed.

### Kit-only definition

“Yes” means the project uses the recommended kit hardware plus an ordinary computer and USB cable for programming and power. Consumable mounting materials are optional and excluded. Projects involving a servo or power module must still be technically verified against the current kit instructions and safe current limits before publication.

## Progression rules

1. Introduce no more than one major new electrical concept per project.
2. Reuse earlier circuits and code patterns so learners recognize progress.
3. Keep First Steps circuits small enough to debug visually.
4. Introduce sensors and actuators independently before combining them.
5. Reserve Mini Projects for systems with at least one input, one decision, and one output.
6. End every project with one controlled experiment and a clear next project.

## Level 1 — First Steps

Goal: establish the edit-run-observe loop, breadboard confidence, digital GPIO, PWM, and basic color control.

| Priority | Project | Difficulty | Build time | Skills learned | Required components | Kit only? |
|---:|---|---|---|---|---|---|
| 1 | Pico Setup and First Script | Beginner | 20–30 min | Install MicroPython; select the interpreter; use the REPL; save and run `main.py` | Pico, USB cable | Yes |
| 2 | Blink an LED | Beginner | 20–30 min | Identify LED polarity; select a current-limiting resistor; configure digital output; use timed loops | Pico, breadboard, 1 LED, 220 Ω resistor, jumper wires | Yes |
| 3 | Alternating LEDs | Beginner | 30–40 min | Control two GPIO outputs; reason about state; create a repeatable sequence; debug mirrored circuits | Pico, breadboard, 2 LEDs, 2 × 220 Ω resistors, jumper wires | Yes |
| 4 | Button-Controlled LED | Beginner | 30–45 min | Read a digital input; use pull-up/pull-down logic; debounce a button; connect input to output | Pico, breadboard, button, LED, 220 Ω resistor, 10 kΩ resistor if using external pull-down, jumper wires | Yes |
| 5 | Fading LED | Easy | 30–45 min | Generate PWM; distinguish duty cycle from frequency; create smooth ramps; constrain values | Pico, breadboard, LED, 220 Ω resistor, jumper wires | Yes |
| 6 | RGB Color Mixer | Easy | 40–55 min | Control three PWM channels; mix RGB values; use tuples/functions; protect multiple LED channels | Pico, breadboard, RGB LED, 3 × 220 Ω resistors, jumper wires | Yes |

### Level 1 completion standard

Learners can place polarized components correctly, trace a small breadboard circuit, identify GPIO inputs and outputs, edit pin assignments, run MicroPython, and explain why each LED needs current limiting.

## Level 2 — Inputs & Outputs

Goal: read analog and digital sensors, produce sound and motion, show information, and apply safe interface circuits.

| Priority | Project | Difficulty | Build time | Skills learned | Required components | Kit only? |
|---:|---|---|---|---|---|---|
| 7 | Potentiometer Voltage Meter | Easy | 35–50 min | Read ADC values; scale raw readings; print formatted values; understand a voltage divider | Pico, breadboard, potentiometer, jumper wires | Yes |
| 8 | Traffic Light | Easy | 35–50 min | Coordinate three outputs; represent states; use functions and timing constants; verify repeated LED channels | Pico, breadboard, red/yellow/green LEDs, 3 × 220 Ω resistors, jumper wires | Yes |
| 9 | Reaction Timer | Easy | 45–60 min | Measure elapsed time; randomize a delay; debounce input; give LED/buzzer feedback; record a score | Pico, breadboard, button, LED, active buzzer, resistors, jumper wires | Yes |
| 10 | Light Level Meter | Easy | 45–60 min | Build a sensor voltage divider; read analog light values; calibrate minimum/maximum; classify ranges | Pico, breadboard, photoresistor, 10 kΩ resistor, jumper wires | Yes |
| 11 | Temperature Meter | Intermediate | 50–70 min | Read a thermistor divider; convert ADC readings; average noisy samples; compare measured and expected values | Pico, breadboard, thermistor, 10 kΩ resistor, jumper wires | Yes |
| 12 | Motion Alarm | Intermediate | 45–65 min | Read a PIR module; handle warm-up time; create alarm states; coordinate LED and buzzer feedback | Pico, breadboard, PIR motion sensor, LED, 220 Ω resistor, buzzer, jumper wires | Yes |
| 13 | Servo Knob Control | Intermediate | 50–75 min | Map ADC input to an angle; generate servo pulses; share grounds; separate signal from actuator power | Pico, breadboard, potentiometer, micro servo, power supply module, jumper wires | Yes* |
| 14 | Ultrasonic Distance Meter | Intermediate | 50–75 min | Trigger and time pulses; convert travel time to distance; protect a 3.3 V input; filter unstable readings | Pico, breadboard, ultrasonic module, 1 kΩ and 2 kΩ resistors for echo divider, jumper wires | Yes |

`Yes*` requires confirmation that the current kit power module and documented supply arrangement can power the included servo safely without exceeding Pico current limits.

### Level 2 completion standard

Learners can distinguish digital and analog inputs, calibrate sensor ranges, use PWM for feedback and motion, protect voltage-sensitive pins, share grounds correctly, and turn raw readings into meaningful units or states.

## Level 3 — Mini Projects

Goal: combine earlier skills into useful input-process-output systems with clearer architecture, reusable functions, and purposeful feedback.

| Priority | Project | Difficulty | Build time | Skills learned | Required components | Kit only? |
|---:|---|---|---|---|---|---|
| 15 | LCD Sensor Dashboard | Intermediate | 60–90 min | Use I2C; structure display updates; format labels/readings; refresh without flicker; combine a sensor and display | Pico, breadboard, I2C LCD1602, photoresistor or thermistor, resistor, jumper wires | Yes |
| 16 | Digital Dice | Intermediate | 60–90 min | Drive a 7-segment display; use 74HC595 serial output; generate random values; map numbers to segments | Pico, breadboard, button, 74HC595, 7-segment display, resistors, jumper wires | Yes |
| 17 | Parking Sensor | Intermediate | 60–90 min | Define distance zones; combine ultrasonic input with LED/buzzer feedback; vary alarm timing; handle out-of-range data | Pico, breadboard, ultrasonic module, buzzer, 3 LEDs, resistors including echo divider, jumper wires | Yes |
| 18 | Automatic Night Light | Intermediate | 60–90 min | Calibrate a light threshold; add hysteresis; control RGB brightness with PWM; prevent rapid switching | Pico, breadboard, photoresistor, 10 kΩ resistor, RGB LED, 3 × 220 Ω resistors, jumper wires | Yes |
| 19 | Password Lock | Advanced | 90–120 min | Scan a 4×4 keypad; collect and compare input; control a servo; provide status feedback; separate logic and power faults | Pico, breadboard, 4×4 keypad, micro servo, green/red LEDs, resistors, power supply module, jumper wires | Yes* |
| 20 | Mini Environment Station | Advanced | 90–120 min | Read a DHT11; validate sensor data; update an I2C display; indicate comfort ranges; organize code into functions | Pico, breadboard, DHT11 module, I2C LCD1602, RGB LED, resistors, jumper wires | Yes |

`Yes*` carries the same servo-power verification requirement as Project 13.

### Level 3 completion standard

Learners can decompose a small system into input, processing, and output responsibilities; reuse functions; combine modules without pin conflicts; provide useful feedback; and debug hardware, power, and software separately.

## Publishing priority list

Publish in dependency order. A project should not be promoted as the next step until its prerequisite project is live and internally linked.

| Rank | Project | Why it has this priority | Must follow |
|---:|---|---|---|
| 1 | Pico Setup and First Script | Removes environment and interpreter friction before hardware debugging begins | None |
| 2 | Blink an LED | Establishes the complete physical-computing loop with the smallest practical circuit | 1 |
| 3 | Alternating LEDs | Reinforces the first circuit while adding only state coordination | 2 |
| 4 | Button-Controlled LED | Introduces the first physical input using familiar LED output | 2–3 |
| 5 | Fading LED | Introduces PWM before RGB or servo projects depend on it | 2 |
| 6 | RGB Color Mixer | Applies three-channel PWM and creates reusable color functions | 5 |
| 7 | Potentiometer Voltage Meter | Introduces ADC input before analog sensors and mapped servo control | 4 |
| 8 | Traffic Light | Consolidates multiple outputs, functions, and timing into a recognizable build | 3 |
| 9 | Reaction Timer | Combines button input, timing, and feedback without new sensor complexity | 4 and 8 |
| 10 | Light Level Meter | Introduces a real analog sensor using the voltage-divider pattern | 7 |
| 11 | Temperature Meter | Extends analog sensing into conversion, calibration, and averaging | 7 and 10 |
| 12 | Motion Alarm | Introduces a digital sensor module and explicit state transitions | 4 and 9 |
| 13 | Servo Knob Control | Combines ADC mapping, PWM knowledge, common ground, and safe actuator power | 5 and 7 |
| 14 | Ultrasonic Distance Meter | Adds precise timing and 5 V-to-3.3 V input protection | 7 |
| 15 | LCD Sensor Dashboard | Introduces I2C display output using already familiar sensor data | 10 or 11 |
| 16 | Digital Dice | Introduces a shift register and compact display after learners understand state and buttons | 4 and 8 |
| 17 | Parking Sensor | Turns ultrasonic readings into a useful multi-output feedback system | 8, 9, and 14 |
| 18 | Automatic Night Light | Turns light sensing and PWM into a polished autonomous project | 6 and 10 |
| 19 | Password Lock | Combines keypad input, stored state, status outputs, servo motion, and power planning | 9 and 13 |
| 20 | Mini Environment Station | Culminates in validated sensor data, I2C display updates, and structured program design | 11 and 15 |

## Internal linking plan

Each project's completion CTA should recommend exactly one primary next project. Related-project cards may offer alternatives, but they must not compete with the main progression link.

| Current project | Primary next recommendation | Linking reason |
|---|---|---|
| Pico Setup and First Script | Blink an LED | Move immediately from software setup to a visible hardware result |
| Blink an LED | Alternating LEDs | Reuse the same circuit pattern while adding a second output |
| Alternating LEDs | Button-Controlled LED | Move from output sequencing to physical input |
| Button-Controlled LED | Fading LED | Add PWM after basic digital input/output is secure |
| Fading LED | RGB Color Mixer | Expand one PWM channel into purposeful three-channel control |
| RGB Color Mixer | Potentiometer Voltage Meter | Shift from creating analog-like output to reading analog input |
| Potentiometer Voltage Meter | Traffic Light | Apply structured functions and state logic to multiple outputs |
| Traffic Light | Reaction Timer | Combine familiar LEDs with button input and time measurement |
| Reaction Timer | Light Level Meter | Progress from digital input to a calibrated analog sensor |
| Light Level Meter | Temperature Meter | Reuse the voltage-divider and ADC pattern with a new physical quantity |
| Temperature Meter | Motion Alarm | Contrast analog measurement with event-driven digital sensing |
| Motion Alarm | Servo Knob Control | Move from sensing and alarm states to controlled physical motion |
| Servo Knob Control | Ultrasonic Distance Meter | Add timed sensing after PWM motion and power planning |
| Ultrasonic Distance Meter | LCD Sensor Dashboard | Present sensor data clearly instead of relying on the serial console |
| LCD Sensor Dashboard | Digital Dice | Add serial chip control and a compact numeric display |
| Digital Dice | Parking Sensor | Combine display/output logic with a practical distance input |
| Parking Sensor | Automatic Night Light | Build a second autonomous system using analog sensing and PWM |
| Automatic Night Light | Password Lock | Progress from one autonomous rule to a multi-step input/state/actuator system |
| Password Lock | Mini Environment Station | Finish with structured sensor validation and persistent display feedback |
| Mini Environment Station | Projects index and future Intermediate Path | Celebrate completion, invite review, and prevent a dead end until the next roadmap exists |

### Supporting link rules

- Every project links back to its immediate prerequisite when one exists.
- Add two or three related projects based on shared components, but preserve the primary next link above.
- Link to Breadboard Basics from Projects 2–7, GPIO Explained from Projects 2–9, PWM Explained from Projects 5–6 and 13, Servo Motors from Projects 13 and 19, and Power Supplies from Projects 13, 14, 17, and 19.
- Every project links to the single recommended Euler kit through the central product ID; no retailer URL belongs in project content.
- Mini Projects link back to the component skill projects they combine so learners can remediate gaps.

## Roadmap governance

- Do not reorder a live path casually. Review completion data, support questions, difficulty jumps, and prerequisite gaps first.
- A new project enters the primary chain only when it teaches a necessary skill more clearly than the current step.
- Record kit packaging changes and identify any project that stops being kit-only.
- Verify every circuit, code sample, diagram, time estimate, and safety boundary before publication.
- Keep this document at project-brief level; full instructions belong in the normal content production workflow.
