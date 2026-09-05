import type {
  ChoiceQuestion,
  Grammar,
  Lesson,
  Translation,
  Word,
} from './lessons.ts';

type Content = {
  words: string;
  grammar: Grammar[];
  choices: Omit<ChoiceQuestion, 'id'>[];
  translations: Omit<Translation, 'id'>[];
};

function rows(text: string, expected: number, label: string): string[][] {
  return text
    .trim()
    .split('\n')
    .map((line, index) => {
      const fields = line.trim().split('|');
      if (fields.length !== expected || fields.some((field) => !field.trim())) {
        throw new Error(`Invalid ${label} row ${index + 1}`);
      }
      return fields;
    });
}

export function grammarRows(text: string): Grammar[] {
  return rows(text, 6, 'grammar').map(
    ([title, formula, explanation, example, translation, caution]) => ({
      title,
      formula,
      explanation,
      example,
      translation,
      caution,
    }),
  );
}

export function choiceRows(text: string): Omit<ChoiceQuestion, 'id'>[] {
  return rows(text, 5, 'choice').map(
    ([prompt, optionText, correct, topic, explanation]) => ({
      prompt,
      options: optionText.split('~'),
      correct: Number(correct),
      topic,
      explanation,
    }),
  );
}

export function translationRows(text: string): Omit<Translation, 'id'>[] {
  return rows(text, 5, 'translation').map(
    ([jp, kana, vi, topic, explanation]) => ({
      jp,
      kana,
      vi,
      topic,
      explanation,
    }),
  );
}

/** Compact vocabulary authoring; reject incomplete rows instead of shipping blank cards. */
export function defineLesson(id: number, content: Content): Lesson {
  const words: Word[] = content.words
    .trim()
    .split('\n')
    .map((line, i) => {
      const fields = line.trim().split('|');
      if (fields.length !== 6 || fields.some((field) => !field.trim())) {
        throw new Error(`Invalid vocabulary row ${id}:${i + 1}`);
      }
      const [jp, kana, vi, type, example, translation] = fields;
      return {
        id: `${id}-w${i + 1}`,
        jp,
        kana,
        vi,
        type,
        example,
        translation,
      };
    });
  return {
    id,
    words,
    grammar: content.grammar,
    choices: content.choices.map((q, i) => ({ ...q, id: `${id}-c${i + 1}` })),
    translations: content.translations.map((q, i) => ({
      ...q,
      id: `${id}-t${i + 1}`,
    })),
  };
}
