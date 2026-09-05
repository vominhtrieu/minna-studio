import type { ChoiceQuestion, Lesson, Word } from './lessons.ts';

export const choiceQuestionTarget = 40;

function uniqueValues(words: Word[], pick: (word: Word) => string) {
  const values: string[] = [];
  const seen = new Set<string>();
  for (const word of words) {
    const value = pick(word);
    if (!seen.has(value)) {
      values.push(value);
      seen.add(value);
    }
  }
  return values;
}

/** Add deterministic, lesson-specific vocabulary questions up to the target. */
export function expandLessonChoices(lesson: Lesson): Lesson {
  const extraCount = Math.max(0, choiceQuestionTarget - lesson.choices.length);
  if (extraCount === 0) return lesson;
  const quizWords = lesson.words.filter((word) => !word.jp.includes('～'));

  const extras: ChoiceQuestion[] = Array.from(
    { length: extraCount },
    (_, index) => {
      const wordIndex = Math.floor((index * quizWords.length) / extraCount);
      const word = quizWords[wordIndex];
      const japaneseToVietnamese = index % 2 === 0;
      const answer = japaneseToVietnamese ? word.vi : word.jp;
      const candidates = [
        ...quizWords.slice(wordIndex + 1),
        ...quizWords.slice(0, wordIndex),
      ];
      const distractors = uniqueValues(
        candidates,
        japaneseToVietnamese ? (item) => item.vi : (item) => item.jp,
      ).filter((value) => value !== answer);

      if (distractors.length < 3) {
        throw new Error(
          `Lesson ${lesson.id} needs more vocabulary distractors`,
        );
      }

      const correct = (lesson.id + index) % 4;
      const options = distractors.slice(0, 3);
      options.splice(correct, 0, answer);

      return {
        id: `${lesson.id}-c${lesson.choices.length + index + 1}`,
        prompt: japaneseToVietnamese
          ? `「${word.jp}」có nghĩa gần đúng là gì?`
          : `Chọn từ tiếng Nhật có nghĩa “${word.vi}”.`,
        options,
        correct,
        topic: 'Từ vựng trong bài',
        explanation: `「${word.jp}」（${word.kana}）nghĩa là “${word.vi}”.`,
      };
    },
  );

  return { ...lesson, choices: [...lesson.choices, ...extras] };
}
