export type AuthoredSegment = {
  text: string;
  reading?: string;
  japanese: boolean;
};
export const n4Readings: Record<string, string> = {};
export const n4ContextReadings: Record<string, AuthoredSegment[]> = {};

/** Explicit author-supplied readings, never an automatic per-kanji guess. */
export function annotated(text: string, contextual = true) {
  const segments: AuthoredSegment[] = [];
  let offset = 0;
  const plain = (value: string) => {
    for (const part of value
      .split(
        /([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー、]+)/gu,
      )
      .filter(Boolean)) {
      segments.push({
        text: part,
        japanese:
          /^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー、]+$/u.test(
            part,
          ),
      });
    }
  };
  for (const match of text.matchAll(/\{([^{}:]+):([^{}:]+)\}/gu)) {
    plain(text.slice(offset, match.index));
    const [, word, reading] = match;
    segments.push({ text: word, reading, japanese: true });
    n4Readings[word] ??= reading;
    offset = match.index + match[0].length;
  }
  plain(text.slice(offset));
  const jp = segments.map((s) => s.text).join('');
  const kana = segments.map((s) => s.reading ?? s.text).join('');
  if (/[{}]/u.test(jp))
    throw new Error(`Malformed reading annotation: ${text}`);
  if (contextual && segments.some((s) => s.reading)) {
    n4ContextReadings[jp] = segments;
    const normalize = (value: string) =>
      value.normalize('NFKC').replace(/[\s\p{P}]/gu, '');
    n4ContextReadings[normalize(jp)] = segments
      .map((s) => ({
        ...s,
        text: normalize(s.text),
        reading: s.reading ? normalize(s.reading) : undefined,
      }))
      .filter((s) => s.text);
  }
  return { jp, kana };
}
