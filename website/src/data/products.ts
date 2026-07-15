export type ProductLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type ProductCategoryId =
  | 'starter-kits'
  | 'raspberry-pi-pico'
  | 'arduino'
  | 'sensors'
  | 'displays'
  | 'motors'
  | 'breadboards'
  | 'tools'
  | 'power'
  | 'accessories';

export interface AffiliateLinks {
  amazon: string;
  sunfounder: string;
  additionalVendors?: Record<string, string>;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategoryId;
  shortDescription: string;
  image: {
    src: string;
    alt: string;
  };
  level: ProductLevel;
  featured: boolean;
  tags: string[];
  includedComponents: string[];
  affiliateLinks: AffiliateLinks;
}

export interface ProductCategory {
  id: ProductCategoryId;
  name: string;
  description: string;
}

export const affiliatePlaceholders = {
  amazon: 'AFFILIATE_LINK_AMAZON',
  sunfounder: 'AFFILIATE_LINK_SUNFOUNDER',
} as const;

export function isActiveAffiliateLink(url: string): boolean {
  return /^https?:\/\//i.test(url) && !url.startsWith('AFFILIATE_LINK_');
}

export function hasActiveAffiliateLinks(links: AffiliateLinks): boolean {
  return [links.amazon, links.sunfounder, ...Object.values(links.additionalVendors ?? {})]
    .some(isActiveAffiliateLink);
}

export const productCategories: ProductCategory[] = [
  { id: 'starter-kits', name: 'Starter Kits', description: 'All-in-one component collections for a confident first build.' },
  { id: 'raspberry-pi-pico', name: 'Raspberry Pi Pico', description: 'Boards, kits, and accessories for the Pico platform.' },
  { id: 'arduino', name: 'Arduino', description: 'Arduino-compatible boards, shields, and learning kits.' },
  { id: 'sensors', name: 'Sensors', description: 'Modules for measuring light, motion, temperature, distance, and more.' },
  { id: 'displays', name: 'Displays', description: 'LCD, OLED, LED matrix, and indicator display modules.' },
  { id: 'motors', name: 'Motors', description: 'Motors, drivers, servos, and motion-control accessories.' },
  { id: 'breadboards', name: 'Breadboards', description: 'Solderless prototyping boards, jumper wires, and organizers.' },
  { id: 'tools', name: 'Tools', description: 'Meters, cutters, soldering tools, and practical bench essentials.' },
  { id: 'power', name: 'Power', description: 'Safe project power supplies, battery holders, and regulators.' },
  { id: 'accessories', name: 'Accessories', description: 'Useful cables, cases, connectors, and project extras.' },
];

export const products: Product[] = [
  {
    id: 'sunfounder-raspberry-pi-pico-ultimate-starter-kit',
    name: 'SunFounder Raspberry Pi Pico Ultimate Starter Kit',
    brand: 'SunFounder',
    category: 'starter-kits',
    shortDescription:
      'A beginner-friendly Raspberry Pi Pico kit with a broad component selection for learning circuits, sensors, displays, and physical computing.',
    image: {
      src: '/product-images/sunfounder-pico-ultimate-starter-kit.svg',
      alt: 'Illustration of a Raspberry Pi Pico starter kit and electronic components',
    },
    level: 'Beginner',
    featured: true,
    tags: ['Raspberry Pi Pico', 'MicroPython', 'Sensors', 'Displays', 'Starter Kit'],
    includedComponents: ['Raspberry Pi Pico with headers', 'Solderless breadboard', 'LEDs and resistor assortment', 'Ultrasonic sensor', 'Micro servo', '4x4 matrix keypad', 'I2C LCD display', 'Jumper wires'],
    affiliateLinks: {
      amazon: affiliatePlaceholders.amazon,
      sunfounder: affiliatePlaceholders.sunfounder,
    },
  },
  {
    id: 'elegoo-uno-r3-super-starter-kit',
    name: 'ELEGOO UNO R3 Super Starter Kit',
    brand: 'ELEGOO',
    category: 'starter-kits',
    shortDescription:
      'An Arduino-compatible learning kit with an UNO-style controller, breadboard, common components, modules, and guided lessons for first electronics experiments.',
    image: {
      src: '/product-images/electronics-product.svg',
      alt: 'Illustration of an electronics starter kit with a controller board and components',
    },
    level: 'Beginner',
    featured: false,
    tags: ['Arduino', 'UNO R3', 'Breadboard', 'Starter Kit'],
    includedComponents: ['UNO R3-compatible board', 'Solderless breadboard', 'LED assortment', 'Resistors and capacitors', 'Sensor modules', 'Stepper motor and driver', 'Servo motor', 'Jumper wires'],
    affiliateLinks: {
      amazon: affiliatePlaceholders.amazon,
      sunfounder: affiliatePlaceholders.sunfounder,
      additionalVendors: { ELEGOO: 'AFFILIATE_LINK_ELEGOO' },
    },
  },
  {
    id: 'ifixit-essential-electronics-toolkit',
    name: 'iFixit Essential Electronics Toolkit',
    brand: 'iFixit',
    category: 'tools',
    shortDescription:
      'A compact precision toolkit with a bit driver, common specialty bits, tweezers, and opening tools for enclosures and electronics repair tasks.',
    image: {
      src: '/product-images/electronics-product.svg',
      alt: 'Illustration representing a precision electronics toolkit',
    },
    level: 'Beginner',
    featured: false,
    tags: ['Hand Tools', 'Precision Driver', 'Tweezers', 'Repair'],
    includedComponents: ['Precision bit driver', '16 precision bits', 'Angled tweezers', 'Spudger', 'Opening picks', 'Opening tool', 'Suction handle', 'Organized tool case'],
    affiliateLinks: {
      amazon: affiliatePlaceholders.amazon,
      sunfounder: affiliatePlaceholders.sunfounder,
      additionalVendors: { iFixit: 'AFFILIATE_LINK_IFIXIT' },
    },
  },
];

export const productById = new Map(products.map((product) => [product.id, product]));

export function getProductsByCategory(category: ProductCategoryId): Product[] {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}
