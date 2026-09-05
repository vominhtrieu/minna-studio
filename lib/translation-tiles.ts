import { segmentReadings } from './furigana.ts';
import type { Translation } from './lessons.ts';

export type TranslationMode = 'vi-ja' | 'ja-vi';

export type TranslationTile = {
  id: string;
  text: string;
  answer: boolean;
};

const japaneseSegmenter =
  typeof Intl.Segmenter === 'function'
    ? new Intl.Segmenter('ja', { granularity: 'word' })
    : null;

const politeSuffixes = new Set([
  'た',
  'たい',
  'て',
  'で',
  'ない',
  'なかった',
  'まし',
  'ます',
  'ませ',
  'ました',
  'ません',
  'ん',
]);

const particles = new Set([
  'か',
  'が',
  'から',
  'で',
  'と',
  'に',
  'の',
  'は',
  'へ',
  'まで',
  'も',
  'や',
  'よ',
  'より',
  'を',
]);

const fallbackTokens: Record<TranslationMode, string[]> = {
  'vi-ja': [
    '私',
    'です',
    'ます',
    'ません',
    'ました',
    'は',
    'が',
    'を',
    'に',
    'で',
    'と',
    'から',
    'まで',
  ],
  'ja-vi': [
    'tôi',
    'bạn',
    'đã',
    'đang',
    'không',
    'ở',
    'đến',
    'từ',
    'với',
    'mỗi',
    'một',
    'nhiều',
    'và',
  ],
};

function containsWordCharacter(value: string) {
  return /[\p{L}\p{N}]/u.test(value);
}

function tokenizeJapaneseRun(value: string): string[] {
  if (!japaneseSegmenter) return containsWordCharacter(value) ? [value] : [];

  const raw = [...japaneseSegmenter.segment(value)]
    .map((part) => part.segment)
    .filter(containsWordCharacter);
  const tokens: string[] = [];

  for (const token of raw) {
    const previous = tokens.at(-1);
    if (previous && politeSuffixes.has(token) && !particles.has(previous)) {
      tokens[tokens.length - 1] += token;
    } else {
      tokens.push(token);
    }
  }

  return tokens;
}

export function tokenizeTranslation(
  text: string,
  mode: TranslationMode,
): string[] {
  if (mode === 'ja-vi') {
    return (
      text.normalize('NFC').match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) ??
      []
    );
  }

  return segmentReadings(text).flatMap((segment) => {
    if (!containsWordCharacter(segment.text)) return [];
    if (!segment.japanese) {
      return segment.text.match(/[\p{L}\p{N}]+/gu) ?? [];
    }
    return segment.reading ? [segment.text] : tokenizeJapaneseRun(segment.text);
  });
}

export function assembleTranslationTiles(
  tiles: readonly TranslationTile[],
  mode: TranslationMode,
) {
  return tiles.map((tile) => tile.text).join(mode === 'vi-ja' ? '' : ' ');
}

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

export function buildTranslationTiles(
  translation: Translation,
  mode: TranslationMode,
  lessonTranslations: readonly Translation[],
): TranslationTile[] {
  const answerText = mode === 'vi-ja' ? translation.jp : translation.vi;
  const answerTokens = tokenizeTranslation(answerText, mode);
  const answerValues = new Set(
    answerTokens.map((token) => token.toLowerCase()),
  );
  const candidateValues = lessonTranslations
    .filter((item) => item.id !== translation.id)
    .flatMap((item) =>
      tokenizeTranslation(mode === 'vi-ja' ? item.jp : item.vi, mode),
    );
  const uniqueDistractors: string[] = [];
  const seen = new Set(answerValues);

  for (const token of [...candidateValues, ...fallbackTokens[mode]]) {
    const key = token.toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    uniqueDistractors.push(token);
  }

  const distractorCount = Math.min(
    uniqueDistractors.length,
    Math.max(4, Math.min(6, Math.ceil(answerTokens.length * 0.6))),
  );
  const distractors = deterministicShuffle(
    uniqueDistractors,
    `${translation.id}-${mode}-distractors`,
  ).slice(0, distractorCount);
  const tiles: TranslationTile[] = [
    ...answerTokens.map((text, index) => ({
      id: `${translation.id}-${mode}-answer-${index}`,
      text,
      answer: true,
    })),
    ...distractors.map((text, index) => ({
      id: `${translation.id}-${mode}-distractor-${index}`,
      text,
      answer: false,
    })),
  ];

  return deterministicShuffle(tiles, `${translation.id}-${mode}-tiles`);
}
