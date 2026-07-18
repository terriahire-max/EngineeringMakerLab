import type { ProductCollectionId } from './products';

export interface ProductCollection {
  id: ProductCollectionId;
  name: string;
  description: string;
  icon: 'cpu' | 'gauge' | 'shield-check' | 'book-open';
  buttonLabel: string;
  productIds: string[];
  exampleLabels?: string[];
  recommendedProductIds: string[];
  skills: string[];
  audience: string[];
  builds: string[];
  seoTitle: string;
  seoDescription: string;
}

export const productCollections: ProductCollection[] = [
  {
    id: 'raspberry-pi-pico', name: 'Raspberry Pi Pico', icon: 'cpu', buttonLabel: 'Explore Pico Kits',
    description: 'Learn MicroPython, breadboards, LEDs, sensors, displays, and interactive electronics.',
    productIds: ['sunfounder-thales-pico-starter-kit', 'sunfounder-euler-pico-ultimate-kit', 'sunfounder-kepler-pico-w-ultimate-kit'],
    recommendedProductIds: ['sunfounder-thales-pico-starter-kit', 'sunfounder-euler-pico-ultimate-kit', 'sunfounder-kepler-pico-w-ultimate-kit'],
    skills: ['MicroPython programming', 'Breadboard circuits', 'Sensors and displays'],
    audience: ['Complete beginners', 'Students and homeschool families', 'Makers learning physical computing'],
    builds: ['LED and button circuits', 'Traffic-light controllers', 'Sensor and display experiments'],
    seoTitle: 'Raspberry Pi Pico Starter Kits Compared | Engineering Maker Lab',
    seoDescription: 'Compare SunFounder Thales, Euler, and Kepler Raspberry Pi Pico kits by skill level, components, projects, and wireless capabilities.',
  },
  {
    id: 'arduino', name: 'Arduino', icon: 'gauge', buttonLabel: 'Explore Arduino Kits',
    description: 'Build electronics, automation, sensor, and embedded-control projects using beginner-friendly Arduino kits.',
    productIds: ['sunfounder-beginners-lab-arduino-uno-r3', 'sunfounder-elite-explorer-arduino-uno-r4-wifi', 'sunfounder-3-in-1-arduino-uno-r4-minima'],
    recommendedProductIds: ['sunfounder-beginners-lab-arduino-uno-r3', 'sunfounder-elite-explorer-arduino-uno-r4-wifi', 'sunfounder-3-in-1-arduino-uno-r4-minima'],
    skills: ['Embedded programming', 'Sensor integration', 'Automation and control'],
    audience: ['First-time Arduino learners', 'Students exploring embedded systems', 'Makers building automated devices'],
    builds: ['Interactive circuits', 'Sensor-based automation', 'Connected control projects'],
    seoTitle: 'Beginner Arduino Kits and Projects | Engineering Maker Lab',
    seoDescription: 'Explore recommended Arduino starter kits for learning embedded programming, electronics, sensors, automation, and interactive control.',
  },
  {
    id: 'robotics', name: 'Robotics', icon: 'shield-check', buttonLabel: 'Explore Robotics Kits',
    description: 'Build programmable robot cars, robot dogs, robotic arms, and mobile systems.',
    productIds: ['sunfounder-pidog-robot-dog-kit', 'sunfounder-galaxyrvr-mars-rover-kit', 'sunfounder-picar-x'],
    recommendedProductIds: ['sunfounder-pidog-robot-dog-kit', 'sunfounder-picar-x'],
    skills: ['Motion control', 'Sensor-guided behavior', 'Robot programming'],
    audience: ['Makers ready for moving systems', 'Students exploring robotics', 'Raspberry Pi and Pico programmers'],
    builds: ['Programmable robot cars', 'Quadruped behaviors', 'Navigation and obstacle response'],
    seoTitle: 'Beginner Robotics Kits and Robot Projects | Engineering Maker Lab',
    seoDescription: 'Explore recommended robot cars, robot dogs, and mobile robotics kits for learning motion control, sensing, and programmable behavior.',
  },
  {
    id: 'ai-vision', name: 'AI and Vision', icon: 'book-open', buttonLabel: 'Explore AI Kits',
    description: 'Experiment with computer vision, multimodal AI, object detection, and intelligent Raspberry Pi projects.',
    productIds: ['sunfounder-ai-fusion-lab-kit', 'sunfounder-picrawler-ai-robot-kit'],
    recommendedProductIds: ['sunfounder-ai-fusion-lab-kit', 'sunfounder-picrawler-ai-robot-kit'],
    skills: ['Computer vision', 'Multimodal AI', 'Intelligent hardware'],
    audience: ['Makers moving beyond basic circuits', 'Students exploring applied AI', 'Developers connecting vision and hardware'],
    builds: ['Object-detection experiments', 'Vision-guided robots', 'Connected camera projects'],
    seoTitle: 'AI and Computer Vision Kits | Engineering Maker Lab',
    seoDescription: 'Explore AI and vision kits for computer vision, multimodal interaction, object detection, intelligent robots, and connected camera projects.',
  },
  {
    id: 'raspberry-pi', name: 'Raspberry Pi', icon: 'cpu', buttonLabel: 'Explore Raspberry Pi Products',
    description: 'Explore Raspberry Pi starter kits, cases, displays, power accessories, sensors, AI hardware, and project kits.',
    productIds: ['sunfounder-picar-x', 'sunfounder-ai-fusion-lab-kit'],
    exampleLabels: ['Raspberry Pi project kits', 'Displays, cases, and power accessories'],
    recommendedProductIds: ['sunfounder-picar-x', 'sunfounder-ai-fusion-lab-kit'],
    skills: ['Raspberry Pi setup', 'Hardware integration', 'AI and robotics projects'],
    audience: ['New Raspberry Pi owners', 'Makers expanding a Pi setup', 'Learners building Linux-based hardware projects'],
    builds: ['Raspberry Pi workstations', 'AI-enabled hardware', 'Robot and sensor projects'],
    seoTitle: 'Raspberry Pi Kits and Accessories | Engineering Maker Lab',
    seoDescription: 'Explore Raspberry Pi kits, cases, displays, power accessories, sensors, AI hardware, and project platforms selected for practical builds.',
  },
  {
    id: 'miscellaneous', name: 'Miscellaneous', icon: 'gauge', buttonLabel: 'Explore Miscellaneous Products',
    description: 'Browse useful electronics accessories, breadboard power supplies, displays, cases, grippers, expansion boards, and other maker tools.',
    productIds: [],
    exampleLabels: ['Breadboard power accessories', 'Cases and expansion boards', 'Grippers, displays, and maker tools'],
    recommendedProductIds: [],
    skills: ['Workbench organization', 'Power and prototyping', 'Project expansion'],
    audience: ['Makers completing a workbench', 'Students adding project accessories', 'Builders extending existing kits'],
    builds: ['Organized electronics workspaces', 'Powered breadboard prototypes', 'Expanded mechanical and display projects'],
    seoTitle: 'Maker Tools and Electronics Accessories | Engineering Maker Lab',
    seoDescription: 'Browse electronics accessories, breadboard power tools, displays, cases, expansion boards, grippers, and practical maker equipment.',
  },
];

export const collectionById = new Map(productCollections.map((collection) => [collection.id, collection]));
