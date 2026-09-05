import type { Translation } from './lessons.ts';

export type ListeningChoice = {
  options: string[];
  correct: number;
};

function hash(value: string) {
  let result = 2166136261;
  for (const character of value) {
    result ^= character.codePointAt(0) ?? 0;
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function deterministicShuffle<T>(items: readonly T[], seedText: string): T[] {
  const result = [...items];
  let seed = hash(seedText) || 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const swapWith = seed % (index + 1);
    [result[index], result[swapWith]] = [result[swapWith], result[index]];
  }
  return result;
}

export function buildListeningChoice(
  translation: Translation,
  lessonTranslations: readonly Translation[],
): ListeningChoice {
  const distractors = [
    ...new Set(
      lessonTranslations
        .filter((item) => item.id !== translation.id)
        .map((item) => item.vi)
        .filter((value) => value !== translation.vi),
    ),
  ];

  if (distractors.length < 3) {
    throw new Error(
      `Lesson needs at least four distinct translations for listening practice`,
    );
  }

  const options = deterministicShuffle(
    distractors,
    `${translation.id}-listening-distractors`,
  ).slice(0, 3);
  const correct = hash(`${translation.id}-listening-answer`) % 4;
  options.splice(correct, 0, translation.vi);

  return { options, correct };
}
