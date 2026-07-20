---
title: {{TITLE_JSON}}
publishedDate: {{CURRENT_DATE}}
updatedDate: {{CURRENT_DATE}}
description: "Write a specific 120-160 character search description for this project."
summary: "Explain what the learner will build, why it is useful, and the main skills they will practice."
difficulty: Beginner
estimatedTime: "30-45 minutes"
estimatedCost: "$10-$25"
platform: "Raspberry Pi Pico"
recommendedProductId: sunfounder-raspberry-pi-pico-ultimate-starter-kit
featuredImage:
  # After adding an image, use: src: /images/projects/{{SLUG}}/hero.webp
  alt: {{HERO_ALT_JSON}}
  width: 1200
  height: 900
tags: [Raspberry Pi Pico, MicroPython, Beginner]
featured: false
recommendedFor: [Middle School, High School, Adult Beginners, Homeschool]
# Add learningPathOrder only when this project belongs to the curated Start Here sequence.
learningGoals:
  - "Describe the first measurable learning outcome"
  - "Describe the second measurable learning outcome"
  - "Describe the debugging or safety skill practiced"
parts:
  - { quantity: "1", name: "Raspberry Pi Pico", notes: "With header pins installed" }
  - { quantity: "1", name: "Solderless breadboard", notes: "Half-size or larger" }
  - { quantity: "1", name: "Data-capable USB cable", notes: "For power and programming" }
teacherTip: "Explain a safety principle, design decision, measurement, or debugging habit that transfers to later projects."
officialGuide:
  title: "Complete Official Build Guide"
  href: "https://example.com/replace-with-official-resource"
  description: "Already have the kit? Use the official documentation for detailed component information, wiring guidance, and code."
  buttonLabel: "Open the Official Guide"
circuit:
  title: {{CIRCUIT_TITLE_JSON}}
  description: "Describe every signal, power, ground, and protective connection in one concise paragraph."
  # After adding a diagram, use: image: /images/projects/{{SLUG}}/circuit.svg
  alt: {{CIRCUIT_ALT_JSON}}
  width: 1200
  height: 800
code:
  filename: main.py
  language: python
  content: |
    # Replace this example with tested project code.
    print({{TITLE_JSON}})
troubleshooting:
  - question: "What should I check if the project does not start?"
    answer: "Disconnect power, compare every connection with the circuit description, and confirm the correct board and interpreter are selected."
  - question: "What should I check if the output behaves unexpectedly?"
    answer: "Verify component orientation, pin numbers, supply voltage, and the values used in the program."
faq:
  - question: "What should a beginner understand before starting?"
    answer: "Explain the prerequisite concept and link to a relevant tutorial when available."
  - question: "How can I extend this project?"
    answer: "Suggest one safe, achievable experiment using the same hardware."
relatedTutorials:
  - { title: "GPIO Explained", href: "/tutorials/gpio-explained" }
relatedBuyingGuide: { title: "Raspberry Pi Pico Collection", href: "/collections/raspberry-pi-pico" }
relatedProjects: []
---

## 1. Prepare the workspace

State the safety boundary, identify the parts, and explain what must remain disconnected before wiring begins.

## 2. Build the circuit

Describe each connection in order. Use exact board pin names and explain component orientation where it matters.

## 3. Check the wiring

Provide a power-off inspection checklist covering voltage, ground, polarity, and accidental shorts.

## 4. Load and run the code

Explain the editor, board selection, file name, upload or run action, and the expected observable result.

## 5. Test and experiment

Give the learner one controlled change to make, a prediction to form, and a result to observe.
