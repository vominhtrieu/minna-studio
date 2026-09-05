import { segmentReadings } from './furigana.ts';
import type { Lesson, Translation } from './lessons.ts';

export type PracticePools = {
  viJa: Translation[];
  jaVi: Translation[];
  listening: Translation[];
  all: Translation[];
};

const modeKeys = ['viJa', 'jaVi', 'listening'] as const;

function sentenceKey(value: string) {
  return value.normalize('NFC').replace(/[\s。！？!?、,.]/gu, '');
}

function readingFor(value: string) {
  return segmentReadings(value)
    .map((segment) => segment.reading ?? segment.text)
    .join('');
}

function isPracticeSentence(value: string) {
  // Grammar notes sometimes demonstrate a transformation rather than a sentence
  // learners should translate (for example: 「読みます → 読まない」).
  return !/[→⇒]/u.test(value);
}

function candidatePool(lesson: Lesson) {
  const candidates: Translation[] = [];
  const maxLength = Math.max(
    lesson.translations.length,
    lesson.grammar.length,
    lesson.words.length,
  );

  for (let index = 0; index < maxLength; index += 1) {
    const authored = lesson.translations[index];
    if (authored) {
      candidates.push(authored);
      for (const [alternativeIndex, jp] of (
        authored.jpAlternatives ?? []
      ).entries()) {
        candidates.push({
          ...authored,
          id: `${authored.id}-jp-alt-${alternativeIndex + 1}`,
          jp,
          kana: readingFor(jp),
          jpAlternatives: undefined,
        });
      }
    }

    const grammar = lesson.grammar[index];
    if (grammar && isPracticeSentence(grammar.example)) {
      candidates.push({
        id: `${lesson.id}-practice-grammar-${index + 1}`,
        jp: grammar.example,
        kana: readingFor(grammar.example),
        vi: grammar.translation,
        topic: grammar.title,
        explanation: grammar.explanation,
      });
    }

    const word = lesson.words[index];
    if (word) {
      candidates.push({
        id: `${lesson.id}-practice-word-${index + 1}`,
        jp: word.example,
        kana: readingFor(word.example),
        vi: word.translation,
        topic: word.type,
        explanation: `Câu này luyện cách dùng 「${word.jp}」（${word.kana}）trong ngữ cảnh của bài ${lesson.id}.`,
      });
    }
  }

  const unique: Translation[] = [];
  const seen = new Set<string>();
  for (const candidate of candidates) {
    const key = sentenceKey(candidate.jp);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(candidate);
  }
  return unique;
}

/** Spread sentences across modes before reusing any, and avoid exact MC text. */
export function buildPracticePools(lesson: Lesson): PracticePools {
  const choiceText = new Set(
    lesson.choices
      .flatMap((question) => [question.prompt, ...question.options])
      .map(sentenceKey),
  );
  const candidates = candidatePool(lesson);
  const ordered = [
    ...candidates.filter(
      (candidate) => !choiceText.has(sentenceKey(candidate.jp)),
    ),
    ...candidates.filter((candidate) =>
      choiceText.has(sentenceKey(candidate.jp)),
    ),
  ];
  const pools: Record<(typeof modeKeys)[number], Translation[]> = {
    viJa: [],
    jaVi: [],
    listening: [],
  };

  for (const [index, candidate] of ordered.entries()) {
    const preferred = (index + lesson.id) % modeKeys.length;
    for (let offset = 0; offset < modeKeys.length; offset += 1) {
      const key = modeKeys[(preferred + offset) % modeKeys.length];
      if (pools[key].length < 12) {
        pools[key].push(candidate);
        break;
      }
    }
    if (modeKeys.every((key) => pools[key].length === 12)) break;
  }

  for (const [modeIndex, key] of modeKeys.entries()) {
    const used = new Set(
      pools[key].map((candidate) => sentenceKey(candidate.jp)),
    );
    const rotated = [
      ...ordered.slice(modeIndex * 4),
      ...ordered.slice(0, modeIndex * 4),
    ];
    for (const candidate of rotated) {
      const sentence = sentenceKey(candidate.jp);
      if (pools[key].length === 12) break;
      if (used.has(sentence)) continue;
      pools[key].push(candidate);
      used.add(sentence);
    }
  }

  if (modeKeys.some((key) => pools[key].length !== 12)) {
    throw new Error(
      `Lesson ${lesson.id} needs more distinct practice sentences`,
    );
  }

  return {
    ...pools,
    all: [...new Map(ordered.map((item) => [item.id, item])).values()],
  };
}

export function normalizePracticeSentence(value: string) {
  return sentenceKey(value);
}
