import { n4Entries2630 } from './n4-26-30.ts';
import { n4Entries3135 } from './n4-31-35.ts';
import { n4Entries3640 } from './n4-36-40.ts';
import { n4Entries4145 } from './n4-41-45.ts';
import { n4Entries4650 } from './n4-46-50.ts';

const entries = [
  ...n4Entries2630,
  ...n4Entries3135,
  ...n4Entries3640,
  ...n4Entries4145,
  ...n4Entries4650,
];
export const n4Lessons = Object.fromEntries(
  entries.map(({ lesson }) => [lesson.id, lesson]),
);
export const n4LessonDetails = Object.fromEntries(
  entries.map(({ lesson, details }) => [lesson.id, details]),
);
