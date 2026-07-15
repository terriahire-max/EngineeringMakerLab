import type { CollectionEntry } from 'astro:content';

export const tutorialLearningOrder = [
  'breadboard-basics',
  'gpio-explained',
  'pwm-explained',
  'servo-motors',
  'power-supplies',
] as const;

export function sortProjectsByLearningPath(projects: CollectionEntry<'projects'>[]) {
  return projects
    .filter((entry) => entry.data.learningPathOrder !== undefined)
    .sort((a, b) => (a.data.learningPathOrder ?? 0) - (b.data.learningPathOrder ?? 0));
}

export function sortTutorialsByLearningPath(tutorials: CollectionEntry<'tutorials'>[]) {
  const tutorialMap = new Map(tutorials.map((entry) => [entry.id, entry]));
  return tutorialLearningOrder
    .map((id) => tutorialMap.get(id))
    .filter((entry): entry is CollectionEntry<'tutorials'> => entry !== undefined);
}
