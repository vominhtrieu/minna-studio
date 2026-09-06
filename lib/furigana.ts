import { lessons } from './lessons.ts';
import { readings1To9 } from './readings-1-9.ts';
import { readings12To15 } from './readings-12-15.ts';
import { readings16To25 } from './readings-16-25.ts';

export type ReadingSegment = {
  text: string;
  reading?: string;
  japanese: boolean;
};
const han = /[\p{Script=Han}々]/u;
const japaneseRun =
  /([\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー、]+)/gu;
// Curated whole-word readings for the current lessons, not per-character guesses.
// Longest match keeps counters and compound words together (四人, 一時間半…).
function deriveStemReadings(): Record<string, string> {
  const candidates = new Map<string, Set<string>>();
  for (const word of Object.values(lessons).flatMap((lesson) => lesson.words)) {
    if (!han.test(word.jp)) continue;
    let jp = word.jp.replace(/[～\s]/gu, '');
    let kana = word.kana.replace(/[～\s]/gu, '');
    if (jp.endsWith('ます') && kana.endsWith('ます')) {
      jp = jp.slice(0, -2);
      kana = kana.slice(0, -2);
    } else if (jp.endsWith('い') && kana.endsWith('い')) {
      jp = jp.slice(0, -1);
      kana = kana.slice(0, -1);
    } else continue;
    while (jp && kana && jp.at(-1) === kana.at(-1)) {
      jp = jp.slice(0, -1);
      kana = kana.slice(0, -1);
    }
    if (!jp || !kana || !han.test(jp)) continue;
    const values = candidates.get(jp) ?? new Set<string>();
    values.add(kana);
    candidates.set(jp, values);
  }
  return Object.fromEntries(
    [...candidates]
      .filter(([, values]) => values.size === 1)
      .map(([key, values]) => [key, [...values][0]]),
  );
}

const dictionary: Record<string, string> = {
  ...deriveStemReadings(),
  ...Object.fromEntries(
    Object.values(lessons).flatMap((lesson) =>
      lesson.words
        .filter((word) => han.test(word.jp) && !word.jp.includes('～'))
        .map((word) => [word.jp, word.kana]),
    ),
  ),
  六つ: 'むっつ',
  三: 'さん',
  五: 'ご',
  買いました: 'かいました',
  買います: 'かいます',
  食べました: 'たべました',
  食べます: 'たべます',
  書きました: 'かきました',
  見ます: 'みます',
  泳ぎます: 'およぎます',
  大きい: 'おおきい',
  一時間半: 'いちじかんはん',
  一時間: 'いちじかん',
  二時間: 'にじかん',
  一週間: 'いっしゅうかん',
  三週間: 'さんしゅうかん',
  六か月: 'ろっかげつ',
  六ヶ月: 'ろっかげつ',
  六カ月: 'ろっかげつ',
  二年: 'にねん',
  三十分: 'さんじゅっぷん',
  十五分: 'じゅうごふん',
  十分: 'じゅっぷん',
  二回: 'にかい',
  四回: 'よんかい',
  三人: 'さんにん',
  四人: 'よにん',
  五人: 'ごにん',
  二台: 'にだい',
  三台: 'さんだい',
  五台: 'ごだい',
  一枚: 'いちまい',
  二枚: 'にまい',
  三枚: 'さんまい',
  四枚: 'よんまい',
  五枚: 'ごまい',
  十枚: 'じゅうまい',
  二段目: 'にだんめ',
  何人: 'なんにん',
  何台: 'なんだい',
  何枚: 'なんまい',
  何回: 'なんかい',
  一時: 'いちじ',
  二時: 'にじ',
  一番上: 'いちばんうえ',
  一日: 'いちにち',
  日本語: 'にほんご',
  日本: 'にほん',
  大学生: 'だいがくせい',
  学生: 'がくせい',
  先生: 'せんせい',
  学校: 'がっこう',
  教室: 'きょうしつ',
  図書館: 'としょかん',
  駐車場: 'ちゅうしゃじょう',
  銀行: 'ぎんこう',
  郵便局: 'ゆうびんきょく',
  薬局: 'やっきょく',
  事務所: 'じむしょ',
  玄関: 'げんかん',
  受付: 'うけつけ',
  部屋: 'へや',
  友達: 'ともだち',
  子ども: 'こども',
  子供: 'こども',
  田中: 'たなか',
  毎日: 'まいにち',
  毎晩: 'まいばん',
  今日: 'きょう',
  明日: 'あした',
  会社: 'かいしゃ',
  勉強: 'べんきょう',
  映画: 'えいが',
  大阪: 'おおさか',
  奈良県: 'ならけん',
  荷物: 'にもつ',
  手紙: 'てがみ',
  牛乳: 'ぎゅうにゅう',
  時計: 'とけい',
  花屋: 'はなや',
  果物: 'くだもの',
  鳥: 'とり',
  靴: 'くつ',
  袋: 'ふくろ',
  何も: 'なにも',
  何が: 'なにが',
  何: 'なに',
  誰: 'だれ',
  家: 'うち',
  机: 'つくえ',
  庭: 'にわ',
  駅: 'えき',
  車: 'くるま',
  私: 'わたし',
  鍵: 'かぎ',
  本: 'ほん',
  時間: 'じかん',
  週間: 'しゅうかん',
  か月: 'かげつ',
  段目: 'だんめ',
  人: 'にん',
  台: 'だい',
  枚: 'まい',
  回: 'かい',
  年: 'ねん',
  店: 'みせ',
  千円: 'せんえん',
  ...readings1To9,
  ...readings12To15,
  ...readings16To25,
};
const entries = Object.entries(dictionary).sort(
  (a, b) => b[0].length - a[0].length,
);

export function segmentReadings(text: string): ReadingSegment[] {
  return text
    .split(japaneseRun)
    .filter(Boolean)
    .flatMap((run): ReadingSegment[] => {
      if (
        !/^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー、]+$/u.test(
          run,
        )
      )
        return [{ text: run, japanese: false }];
      const segments: ReadingSegment[] = [];
      let offset = 0;
      while (offset < run.length) {
        const match = entries.find(([word]) => run.startsWith(word, offset));
        if (match) {
          segments.push({ text: match[0], reading: match[1], japanese: true });
          offset += match[0].length;
        } else {
          const char = String.fromCodePoint(run.codePointAt(offset)!);
          const previous = segments.at(-1);
          if (previous && !previous.reading) previous.text += char;
          else segments.push({ text: char, japanese: true });
          offset += char.length;
        }
      }
      return segments;
    });
}
