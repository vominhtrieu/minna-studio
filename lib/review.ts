import { lessons, n5LessonIds, type Lesson } from './lessons.ts';

function roundRobin<T>(getItems: (lesson: Lesson) => T[]): T[] {
  const rows = n5LessonIds.map((id) => getItems(lessons[id]));
  const longest = Math.max(...rows.map((row) => row.length));
  const result: T[] = [];
  for (let index = 0; index < longest; index += 1) {
    for (const row of rows) {
      if (row[index]) result.push(row[index]);
    }
  }
  return result;
}

/**
 * One balanced N5 review bank. Round-robin ordering makes every early slice
 * include all 25 lessons instead of being dominated by lesson 1.
 */
export const reviewLesson: Lesson = {
  id: 0,
  words: roundRobin((lesson) =>
    lesson.words.map((word) => ({
      ...word,
      id: `review-${word.id}`,
      type: `Bài ${lesson.id} · ${word.type}`,
    })),
  ),
  grammar: roundRobin((lesson) =>
    lesson.grammar.map((grammar) => ({
      ...grammar,
      title: `Bài ${lesson.id} · ${grammar.title}`,
    })),
  ),
  choices: roundRobin((lesson) =>
    lesson.choices.map((question) => ({
      ...question,
      id: `review-${question.id}`,
      topic: `Bài ${lesson.id} · ${question.topic}`,
    })),
  ),
  translations: roundRobin((lesson) =>
    lesson.translations.map((question) => ({
      ...question,
      id: `review-${question.id}`,
      topic: `Bài ${lesson.id} · ${question.topic}`,
    })),
  ),
};

export const reviewTranslationCount = 100;
