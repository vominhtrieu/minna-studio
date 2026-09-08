import type { Translation } from './lessons.ts';
import { segmentReadings } from './furigana.ts';
export function normalizeJapanese(
  value: string,
  preservePunctuation = false,
): string {
  let out = value
    .normalize('NFKC')
    .replace(preservePunctuation ? /\s/gu : /[\s\p{P}]/gu, '');
  const digits: Record<string, string> = {
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '7': '七',
    '8': '八',
    '9': '九',
    '10': '十',
    '15': '十五',
    '30': '三十',
  };
  out = out.replace(
    /\d+(?=つ|人|枚|台|回|時間|時|週間|分|か月|ヶ月|カ月)/g,
    (n) => digits[n] ?? n,
  );
  // Match at the current position, not global replacement: 話して must not
  // consume part of 電話しています before 電話 can be read as でんわ.
  out = segmentReadings(out)
    .map((segment) => segment.reading ?? segment.text)
    .join('');
  return out.replace(/くらい/g, 'ぐらい');
}
export function normalizeVietnamese(
  value: string,
  preservePunctuation = false,
): string {
  const normalized = value.normalize('NFC').toLocaleLowerCase('vi');
  if (preservePunctuation) {
    return normalized
      .replace(/\s*([\p{P}\p{S}])\s*/gu, '$1')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return normalized
    .replace(/[\p{P}\p{S}]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
export function gradeTranslation(
  q: Translation,
  direction: 'vi-ja' | 'ja-vi',
  input: string,
  options: { requirePunctuation?: boolean } = {},
): 'empty' | 'matched' | 'review' {
  if (!input.trim()) return 'empty';
  const normalize =
    direction === 'vi-ja' ? normalizeJapanese : normalizeVietnamese;
  const answers =
    direction === 'vi-ja'
      ? [q.jp, q.kana, ...(q.jpAlternatives ?? [])]
      : [q.vi, ...(q.viAlternatives ?? [])];
  return answers.some(
    (a) =>
      normalize(a, options.requirePunctuation) ===
      normalize(input, options.requirePunctuation),
  )
    ? 'matched'
    : 'review';
}
export function shuffled<T>(
  items: readonly T[],
  random: () => number = Math.random,
): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
