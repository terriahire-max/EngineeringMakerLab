export type ProjectResourceStatus = 'published' | 'planned' | 'external-only';
export type ProjectVisualMode = 'official-guide' | 'original-assets' | 'none';

export interface ProjectResource {
  id: string;
  title: string;
  slug: string;
  internalPath?: string;
  officialGuideUrl?: string;
  officialGuideLabel?: string;
  officialGuideTitle?: string;
  officialGuideDescription?: string;
  resourceVerified: boolean;
  visualMode: ProjectVisualMode;
  productIds: string[];
  platform: string;
  status: ProjectResourceStatus;
}

export const projectResources: ProjectResource[] = [
  {
    id: 'blink-led',
    title: 'Blink an LED',
    slug: 'blink-led',
    internalPath: '/projects/blink-led',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/hello_breadboard.html',
    officialGuideLabel: 'Open Official SunFounder Guide',
    officialGuideTitle: 'Hello, Breadboard!',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact external LED wiring, schematic, code, and step-by-step build instructions.',
    resourceVerified: true,
    visualMode: 'official-guide',
    productIds: ['sunfounder-thales-pico-starter-kit'],
    platform: 'Raspberry Pi Pico / MicroPython',
    status: 'published',
  },
  {
    id: 'push-button-input',
    title: 'Read a Push Button',
    slug: 'push-button-input',
    internalPath: '/projects/push-button-input',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/reading_button_value.html',
    officialGuideLabel: 'Open Official SunFounder Guide',
    officialGuideTitle: 'Reading Button Value',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact button wiring, schematic, code, and step-by-step build instructions.',
    resourceVerified: true,
    visualMode: 'official-guide',
    productIds: ['sunfounder-thales-pico-starter-kit'],
    platform: 'Raspberry Pi Pico / MicroPython',
    status: 'published',
  },
  {
    id: 'traffic-light',
    title: 'Traffic Light',
    slug: 'traffic-light',
    internalPath: '/projects/traffic-light',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/traffic_light.html',
    officialGuideLabel: 'Open Official SunFounder Guide',
    officialGuideTitle: 'Traffic Light',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact traffic-light wiring, schematic, code, and step-by-step build instructions.',
    resourceVerified: true,
    visualMode: 'official-guide',
    productIds: ['sunfounder-thales-pico-starter-kit'],
    platform: 'Raspberry Pi Pico / MicroPython',
    status: 'published',
  },
  {
    id: 'reaction-game', title: 'Reaction Game', slug: 'reaction-game',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/reaction_game.html',
    officialGuideLabel: 'Open Official SunFounder Guide',
    officialGuideTitle: 'Reaction Game',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact wiring, schematic, code, and step-by-step build instructions.',
    resourceVerified: true,
    visualMode: 'official-guide',
    productIds: ['sunfounder-thales-pico-starter-kit'], platform: 'Raspberry Pi Pico / MicroPython', status: 'external-only',
  },
  {
    id: 'colorful-light', title: 'Colorful Light', slug: 'colorful-light',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/colorful_light.html',
    officialGuideLabel: 'Open Official SunFounder Guide',
    officialGuideTitle: 'Colorful Light',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact wiring, schematic, code, and step-by-step build instructions.',
    resourceVerified: true,
    visualMode: 'official-guide',
    productIds: ['sunfounder-thales-pico-starter-kit'], platform: 'Raspberry Pi Pico / MicroPython', status: 'external-only',
  },
  {
    id: 'plant-monitor', title: 'Plant Monitor', slug: 'plant-monitor',
    productIds: ['sunfounder-euler-pico-ultimate-kit'], platform: 'Raspberry Pi Pico', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'display-experiments', title: 'Display Experiments', slug: 'display-experiments',
    productIds: ['sunfounder-euler-pico-ultimate-kit'], platform: 'Raspberry Pi Pico', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'motor-control-projects', title: 'Motor-control Projects', slug: 'motor-control-projects',
    productIds: ['sunfounder-euler-pico-ultimate-kit'], platform: 'Raspberry Pi Pico', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'multi-sensor-systems', title: 'Multi-sensor Systems', slug: 'multi-sensor-systems',
    productIds: ['sunfounder-euler-pico-ultimate-kit'], platform: 'Raspberry Pi Pico', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'digital-bubble-level', title: 'Digital Bubble Level', slug: 'digital-bubble-level',
    productIds: ['sunfounder-kepler-pico-w-ultimate-kit'], platform: 'Raspberry Pi Pico W', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'wireless-control-experiments', title: 'Wireless Control Experiments', slug: 'wireless-control-experiments',
    productIds: ['sunfounder-kepler-pico-w-ultimate-kit'], platform: 'Raspberry Pi Pico W', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'iot-sensor-monitoring', title: 'IoT Sensor Monitoring', slug: 'iot-sensor-monitoring',
    productIds: ['sunfounder-kepler-pico-w-ultimate-kit'], platform: 'Raspberry Pi Pico W', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'automated-motor-pump-projects', title: 'Automated Motor and Pump Projects', slug: 'automated-motor-pump-projects',
    productIds: ['sunfounder-kepler-pico-w-ultimate-kit'], platform: 'Raspberry Pi Pico W', status: 'planned', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'servo-motor-control', title: 'Servo Motor Control', slug: 'servo-motor-control', internalPath: '/projects/servo-motor-control',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/thales-kit/en/latest/micropython/swinging_servo.html',
    officialGuideLabel: 'Open Official SunFounder Guide', officialGuideTitle: 'Swinging Servo',
    officialGuideDescription: 'The verified Thales MicroPython lesson provides the exact servo wiring, schematic, code, and step-by-step build instructions.',
    productIds: ['sunfounder-thales-pico-starter-kit'], platform: 'Raspberry Pi Pico / MicroPython', status: 'published', resourceVerified: true, visualMode: 'official-guide',
  },
  {
    id: 'ultrasonic-distance-sensor', title: 'Ultrasonic Distance Sensor', slug: 'ultrasonic-distance-sensor', internalPath: '/projects/ultrasonic-distance-sensor',
    officialGuideUrl: 'https://docs.sunfounder.com/projects/umsk/en/latest/04_pi_pico/pico_lesson23_ultrasonic.html',
    officialGuideLabel: 'Open Official SunFounder Guide', officialGuideTitle: 'Ultrasonic Sensor Module with Raspberry Pi Pico',
    officialGuideDescription: 'This verified Universal Maker Sensor Kit lesson provides the exact ultrasonic sensor wiring, schematic, code, and step-by-step build instructions.',
    productIds: [], platform: 'Raspberry Pi Pico', status: 'published', resourceVerified: true, visualMode: 'official-guide',
  },
  {
    id: 'led-night-light', title: 'LED Night Light', slug: 'led-night-light', internalPath: '/projects/led-night-light',
    productIds: [], platform: 'Arduino', status: 'published', resourceVerified: false, visualMode: 'none',
  },
  {
    id: 'password-lock', title: 'Password Lock', slug: 'password-lock', internalPath: '/projects/password-lock',
    productIds: [], platform: 'Raspberry Pi Pico', status: 'published', resourceVerified: false, visualMode: 'none',
  },
];

export const projectResourceById = new Map(projectResources.map((project) => [project.id, project]));

export function getProjectHref(project: ProjectResource): string | undefined {
  if (project.status === 'published') return project.internalPath;
  return project.officialGuideUrl;
}

export function getProjectActionLabel(project: ProjectResource): string {
  if (project.status === 'published') return 'View Project';
  if (project.officialGuideUrl) return 'Open Official Guide';
  return 'Planned';
}
