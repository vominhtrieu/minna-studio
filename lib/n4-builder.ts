import type { Lesson } from './lessons.ts';
import { annotated } from './n4-readings.ts';

const types: Record<string, string> = {
  I: 'Động từ · Nhóm I',
  II: 'Động từ · Nhóm II',
  III: 'Động từ · Nhóm III',
  A: 'Tính từ い',
  NA: 'Tính từ な',
  N: 'Danh từ',
  P: 'Phó từ / Cụm từ',
};
function rows(text: string, fields: number) {
  return text
    .trim()
    .split('\n')
    .map((line) => {
      const values = line.trim().split('|');
      if (values.length !== fields || values.some((value) => !value.trim()))
        throw new Error(`Invalid N4 content: ${line}`);
      return values;
    });
}
export function defineN4(content: {
  id: number;
  title: string;
  description: string;
  words: string;
  grammar: string;
  choices: string;
  practice: string;
}) {
  const { id } = content;
  const grammar = rows(content.grammar, 6).map((row) => {
    const [title, formula, explanation, example, translation, caution] =
      row.map((value) => annotated(value).jp);
    return { title, formula, explanation, example, translation, caution };
  });
  const lesson: Lesson = {
    id,
    words: rows(content.words, 5).map(
      ([headword, vi, type, sentence, translation], index) => {
        const word = annotated(headword, false);
        if (!types[type]) throw new Error(`Unknown N4 word type: ${type}`);
        return {
          id: `${id}-w${index + 1}`,
          ...word,
          vi,
          type: types[type],
          example: annotated(sentence).jp,
          translation,
        };
      },
    ),
    grammar,
    choices: rows(content.choices, 3).map(
      ([prompt, optionsText, grammarIndex], index) => {
        const point = grammar[Number(grammarIndex) - 1];
        if (!point)
          throw new Error(`Invalid grammar reference: ${id}:${grammarIndex}`);
        const options = optionsText
          .split('~')
          .map((text) => annotated(text).jp);
        if (options.length !== 4 || new Set(options).size !== 4)
          throw new Error(`Invalid N4 options: ${prompt}`);
        const answer = options.shift()!;
        const correct = (id + index) % 4;
        options.splice(correct, 0, answer);
        return {
          id: `${id}-c${index + 1}`,
          prompt: annotated(prompt).jp,
          options,
          correct,
          topic: point.title,
          explanation: `Đáp án: ${answer}. ${point.explanation} ${point.caution}`,
        };
      },
    ),
    translations: rows(content.practice, 3).map(
      ([sentence, vi, grammarIndex], index) => {
        const point = grammar[Number(grammarIndex) - 1];
        if (!point)
          throw new Error(`Invalid practice reference: ${id}:${grammarIndex}`);
        return {
          id: `${id}-t${index + 1}`,
          ...annotated(sentence),
          vi,
          topic: point.title,
          explanation: point.explanation,
        };
      },
    ),
  };
  return {
    lesson,
    details: {
      title: content.title,
      description: content.description,
      tipTitle: grammar[0].title,
      tip: grammar[0].caution,
      grammarSource: `https://langoal.com/minnano-nihongo-teaching-plan/lesson-${id}.html`,
    },
  };
}
