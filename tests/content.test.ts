import test from 'node:test';
import assert from 'node:assert/strict';
import {
  lessons,
  lessonIds,
  n5LessonIds,
  n4LessonIds,
  isLessonId,
} from '../lib/lessons.ts';
import { lessonDetails } from '../lib/lesson-details.ts';
import { defineLesson } from '../lib/lesson-builder.ts';
import { annotated } from '../lib/n4-readings.ts';
import { segmentReadings } from '../lib/furigana.ts';
import { hanVietFor } from '../lib/han-viet.ts';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import AppLink from '../app/app-link.ts';
import {
  assembleTranslationTiles,
  buildTranslationTiles,
  isPunctuationTile,
  tokenizeTranslation,
  type TranslationMode,
} from '../lib/translation-tiles.ts';
import { buildListeningChoice } from '../lib/listening.ts';
import {
  buildPracticePools,
  normalizePracticeSentence,
} from '../lib/practice-pools.ts';
import { reviewLesson, reviewTranslationCount } from '../lib/review.ts';

void test('Route links render native anchors and do not intercept navigation', () => {
  const href = '/lessons/11/vocabulary';
  const element = AppLink({
    href,
    children: 'Từ vựng',
    className: 'selected',
    'aria-current': 'page',
  });
  assert.equal(element.type, 'a');
  assert.equal(element.props.href, href);
  assert.equal(element.props.onClick, undefined);
  assert.equal(element.props.onMouseEnter, undefined);
  const html = renderToStaticMarkup(
    createElement(AppLink, { href }, 'Từ vựng'),
  );
  assert.equal(html, '<a href="/lessons/11/vocabulary">Từ vựng</a>');
});

void test('Mixed formula preserves Vietnamese accents and isolates Japanese text', () => {
  const text = 'N を / が + Số lượng + V';
  const segments = segmentReadings(text);
  assert.equal(segments.map((s) => s.text).join(''), text);
  assert.ok(segments.some((s) => s.text.includes('Số lượng') && !s.japanese));
  assert.ok(
    segments.filter((s) => s.japanese).every((s) => !/[A-Za-z]/u.test(s.text)),
  );
});

void test('Furigana uses word readings, including irregular counters and compounds', () => {
  const pairs = segmentReadings('みかんを六つ買いました。')
    .filter((s) => s.reading)
    .map((s) => [s.text, s.reading]);
  assert.deepEqual(pairs, [
    ['六つ', 'むっつ'],
    ['買いました', 'かいました'],
  ]);
  assert.deepEqual(
    segmentReadings('四人').map((s) => s.reading),
    ['よにん'],
  );
  assert.deepEqual(
    segmentReadings('一時間半').map((s) => s.reading),
    ['いちじかんはん'],
  );
  assert.deepEqual(
    segmentReadings('日本語').map((s) => s.reading),
    ['にほんご'],
  );
  assert.deepEqual(
    segmentReadings('六か月').map((s) => s.reading),
    ['ろっかげつ'],
  );
  assert.ok(
    segmentReadings('二、三日休んでください。').some(
      (segment) =>
        segment.text === '二、三日' && segment.reading === 'に、さんにち',
    ),
  );
});

void test('Kanji hover data includes Hán-Việt readings', () => {
  assert.equal(hanVietFor('日本語'), '日: NHẬT · 本: BẢN · 語: NGỮ / NGỨ');
  assert.equal(hanVietFor('買いました'), '買: MÃI');
  assert.equal(hanVietFor('みかん'), undefined);
});

void test('All authored grammar, vocabulary examples and practice text have readings', () => {
  for (const lesson of Object.values(lessons)) {
    const texts = [
      ...lesson.grammar.flatMap((g) => [
        g.formula,
        g.explanation,
        g.example,
        g.caution,
        g.translation,
        ...(g.details ?? []).flatMap((detail) => [
          detail.title,
          detail.explanation,
          ...detail.examples,
          ...(detail.table
            ? [
                detail.table.caption,
                ...detail.table.headers,
                ...detail.table.rows.flat(),
              ]
            : []),
        ]),
      ]),
      ...lesson.words.map((w) => w.example),
      ...lesson.translations.map((q) => q.jp),
      ...lesson.translations.map((q) => q.explanation),
      ...lesson.translations.flatMap((q) => q.jpAlternatives ?? []),
      ...lesson.choices.flatMap((q) => [q.prompt, ...q.options, q.explanation]),
    ];
    for (const text of texts) {
      const segments = segmentReadings(text);
      assert.equal(segments.map((s) => s.text).join(''), text);
      assert.ok(
        segments.every(
          (s) => !/[\p{Script=Han}]/u.test(s.text) || Boolean(s.reading),
        ),
        text,
      );
      assert.ok(
        segments.every(
          (s) =>
            !s.reading ||
            !/[\p{Script=Han}]/u.test(s.text) ||
            hanVietFor(s.text),
        ),
        `Missing Hán-Việt reading: ${text}`,
      );
    }
  }
});

void test('Unknown kanji and learner text are preserved without invented readings', () => {
  const text = '龍 🐉 <script>  Số lượng e\u0302';
  const segments = segmentReadings(text);
  assert.equal(segments.map((s) => s.text).join(''), text);
  assert.ok(segments.every((s) => !s.reading));
  assert.deepEqual(segmentReadings(''), []);
});
import {
  gradeTranslation,
  normalizeJapanese,
  normalizeVietnamese,
  shuffled,
} from '../lib/grading.ts';
import { parseRatings } from '../lib/word-progress.ts';
import {
  conjugateVerb,
  conjugateVerbReading,
  conjugationForms,
  conjugationItemCount,
  counterCategories,
  counterItemCount,
  drillVerbs,
  type ConjugationForm,
} from '../lib/drills.ts';

void test('Counter drill covers all 18 declared groups and their irregular readings', () => {
  assert.equal(counterCategories.length, 18);
  assert.equal(counterItemCount, 206);
  assert.equal(
    new Set(counterCategories.map((category) => category.id)).size,
    18,
  );
  for (const category of counterCategories) {
    assert.ok(category.items.length >= 11, category.id);
    assert.equal(
      new Set(category.items.map((item) => item.display)).size,
      category.items.length,
      category.id,
    );
    for (const item of category.items) {
      assert.ok(item.display.length > 0);
      assert.ok(item.reading.length > 0);
    }
  }

  const expected = new Map([
    ['一人', 'ひとり'],
    ['二人', 'ふたり'],
    ['四人', 'よにん'],
    ['一本', 'いっぽん'],
    ['三本', 'さんぼん'],
    ['六本', 'ろっぽん'],
    ['一冊', 'いっさつ'],
    ['三階', 'さんがい'],
    ['二十歳', 'はたち'],
    ['四時', 'よじ'],
    ['七時', 'しちじ'],
    ['九時', 'くじ'],
    ['一日', 'ついたち'],
    ['二十日', 'はつか'],
    ['四月', 'しがつ'],
    ['七月', 'しちがつ'],
    ['九月', 'くがつ'],
  ]);
  const items = counterCategories.flatMap((category) => category.items);
  for (const [display, reading] of expected) {
    assert.equal(
      items.find((item) => item.display === display)?.reading,
      reading,
    );
  }
  for (const item of items.filter((entry) => entry.display.startsWith('十'))) {
    if (item.reading.startsWith('じゅっ')) {
      assert.equal(item.alternative, item.reading.replace('じゅっ', 'じっ'));
    }
  }
});

void test('Verb drill generates every form for every verb group and irregular verb', () => {
  assert.equal(conjugationForms.length, 18);
  assert.equal(drillVerbs.length, 16);
  assert.equal(conjugationItemCount, 288);
  for (const verb of drillVerbs) {
    for (const [form] of conjugationForms) {
      assert.ok(
        conjugateVerb(verb, form).length > 0,
        `${verb.dictionary}-${form}`,
      );
      assert.ok(
        conjugateVerbReading(verb, form).length > 0,
        `${verb.reading}-${form}`,
      );
    }
  }

  const answer = (dictionary: string, form: ConjugationForm) =>
    conjugateVerb(
      drillVerbs.find((verb) => verb.dictionary === dictionary)!,
      form,
    );
  assert.equal(answer('買う', 'negative'), '買わない');
  assert.equal(answer('買う', 'te'), '買って');
  assert.equal(answer('買う', 'potential'), '買える');
  assert.equal(answer('待つ', 'te'), '待って');
  assert.equal(answer('帰る', 'te'), '帰って');
  assert.equal(answer('読む', 'te'), '読んで');
  assert.equal(answer('遊ぶ', 'te'), '遊んで');
  assert.equal(answer('死ぬ', 'te'), '死んで');
  assert.equal(answer('書く', 'te'), '書いて');
  assert.equal(answer('泳ぐ', 'te'), '泳いで');
  assert.equal(answer('話す', 'te'), '話して');
  assert.equal(answer('行く', 'te'), '行って');
  assert.equal(answer('行く', 'ta'), '行った');
  assert.equal(answer('食べる', 'negative'), '食べない');
  assert.equal(answer('食べる', 'potential'), '食べられる');
  assert.equal(answer('する', 'potential'), 'できる');
  assert.equal(answer('勉強する', 'causative-passive'), '勉強させられる');
  assert.equal(answer('来る', 'negative'), '来ない');
  assert.equal(answer('来る', 'te'), '来て');
  assert.equal(answer('来る', 'potential'), '来られる');
  assert.equal(
    conjugateVerbReading(
      drillVerbs.find((verb) => verb.dictionary === '行く')!,
      'te',
    ),
    'いって',
  );
  assert.equal(
    conjugateVerbReading(
      drillVerbs.find((verb) => verb.dictionary === '来る')!,
      'potential',
    ),
    'こられる',
  );
});

void test('N5 content contains 1062 flashcards, 150 grammar notes and 1900 lesson exercises', () => {
  assert.deepEqual(n5LessonIds.map(String), [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
  ]);
  assert.equal(
    n5LessonIds
      .map((id) => lessons[id])
      .reduce((n, l) => n + l.words.length, 0),
    1062,
  );
  assert.equal(
    n5LessonIds
      .map((id) => lessons[id])
      .reduce((n, l) => n + l.grammar.length, 0),
    150,
  );
  assert.equal(
    n5LessonIds
      .map((id) => lessons[id])
      .reduce((n, l) => n + l.choices.length + 3 * l.translations.length, 0),
    1900,
  );
});
void test('Lesson 16 distinguishes 下ろします from 出します', () => {
  const withdraw = lessons[16].words.find((word) => word.jp === '下ろします');
  const takeOut = lessons[16].words.find((word) => word.jp === '出します');
  assert.equal(withdraw?.kana, 'おろします');
  assert.match(withdraw?.vi ?? '', /rút/);
  assert.doesNotMatch(takeOut?.vi ?? '', /rút tiền/);

  const segments = segmentReadings('お金を下ろしてから、買い物に行きます。');
  assert.ok(
    segments.some(
      (segment) =>
        segment.text === '下ろして' && segment.reading === 'おろして',
    ),
  );
});
void test('Lesson 18 explains dictionary forms, ability, hobbies and all three 前に patterns', () => {
  const lesson = lessons[18];
  assert.equal(lesson.grammar.length, 9);
  const dictionary = lesson.grammar[0];
  assert.equal(dictionary.details?.length, 3);
  const [groupI, groupII, groupIII] = dictionary.details!;
  const expectedReadings = [
    ['かいます', 'かう'],
    ['かきます', 'かく'],
    ['およぎます', 'およぐ'],
    ['はなします', 'はなす'],
    ['まちます', 'まつ'],
    ['しにます', 'しぬ'],
    ['あそびます', 'あそぶ'],
    ['よみます', 'よむ'],
    ['かえります', 'かえる'],
  ];
  assert.deepEqual(
    groupI.table?.rows.map((row) =>
      row.slice(1).map((text) => normalizeJapanese(text)),
    ),
    expectedReadings,
  );
  assert.deepEqual(
    groupI.table?.rows.map((row) => row[0]),
    [
      'い → う',
      'き → く',
      'ぎ → ぐ',
      'し → す',
      'ち → つ',
      'に → ぬ',
      'び → ぶ',
      'み → む',
      'り → る',
    ],
  );
  assert.ok(
    groupII.table?.rows.some(
      (row) => row[0] === '借ります' && row[1] === '借りる',
    ),
  );
  assert.ok(
    groupII.table?.rows.some(
      (row) => row[0] === 'できます' && row[1] === 'できる',
    ),
  );
  assert.ok(
    groupIII.table?.rows.some(
      (row) => row[0] === '来ます（きます）' && row[1] === '来る（くる）',
    ),
  );
  for (const detail of dictionary.details!) {
    assert.ok(detail.table!.caption);
    assert.ok(
      detail.table!.rows.every(
        (row) => row.length === detail.table!.headers.length,
      ),
    );
  }
  const text = JSON.stringify(lesson.grammar);
  assert.doesNotMatch(text, /trong hội thoại を đôi khi vẫn xuất hiện/);
  assert.match(text, /N ができます/);
  assert.match(text, /V thể từ điển \+ ことができます/);
  assert.match(text, /ことができませんでした/);
  assert.match(text, /日本語を話すことができます/);
  assert.match(text, /趣味は N です \/ 趣味は V thể từ điển \+ ことです/);
  assert.match(text, /昨日、寝る前に本を読みました/);
  assert.match(text, /N chỉ sự kiện hoặc hoạt động \+ の前に/);
  assert.match(text, /Khoảng thời gian \+ 前に/);
  assert.ok(
    lesson.grammar.some(
      (g) => g.title.startsWith('なかなか') && g.example.includes('できません'),
    ),
  );
  assert.ok(
    lesson.grammar.some(
      (g) =>
        g.title.startsWith('ぜひ') &&
        g.details?.some((d) =>
          d.examples.some((s) => s.includes('てください')),
        ),
    ),
  );
  assert.equal(
    lesson.choices.filter((q) => q.topic !== 'Từ vựng trong bài').length,
    24,
  );
  assert.equal(
    lesson.choices.filter((q) => q.topic === 'Từ vựng trong bài').length,
    16,
  );
  assert.equal(lesson.translations.length, 12);
});
void test('Navigation, lesson metadata and route validation cover only published lessons', () => {
  assert.deepEqual(
    lessonIds,
    Array.from({ length: 50 }, (_, index) => index + 1),
  );
  for (const id of lessonIds) {
    assert.equal(isLessonId(String(id)), true);
    assert.equal(lessons[id].id, id);
    assert.ok(lessonDetails[id].title.length > 0);
    assert.ok(lessonDetails[id].description.length > 0);
    assert.ok(lessons[id].grammar.length >= 5);
    assert.equal(lessons[id].choices.length, 40);
    assert.equal(lessons[id].translations.length, 12);
  }
  for (const invalid of [
    '-1',
    '51',
    '0',
    '012',
    '12.0',
    '12abc',
    'NaN',
    'toString',
  ]) {
    assert.equal(isLessonId(invalid), false);
  }
  assert.equal(lessons[10].words.length, 54);
  assert.equal(lessons[11].words.length, 66);
});
void test('N5 review combines every lesson into one large balanced bank', () => {
  assert.equal(reviewLesson.words.length, 1062);
  assert.equal(reviewLesson.grammar.length, 150);
  assert.equal(reviewLesson.choices.length, 1000);
  assert.equal(reviewLesson.translations.length, 300);

  const expectedLessonLabels = n5LessonIds.map((id) => `Bài ${id} ·`);
  for (const collection of [
    reviewLesson.words,
    reviewLesson.grammar,
    reviewLesson.choices,
    reviewLesson.translations,
  ]) {
    const labels = collection
      .slice(0, 25)
      .map((item) =>
        'type' in item ? item.type : 'title' in item ? item.title : item.topic,
      );
    assert.ok(
      expectedLessonLabels.every((label) =>
        labels.some((value) => value.startsWith(label)),
      ),
    );
  }

  const pools = buildPracticePools(reviewLesson, reviewTranslationCount);
  for (const pool of [pools.viJa, pools.jaVi, pools.listening]) {
    assert.equal(pool.length, reviewTranslationCount);
    assert.equal(
      new Set(pool.map((question) => normalizePracticeSentence(question.jp)))
        .size,
      reviewTranslationCount,
    );
  }
  assert.equal(
    new Set(
      [...pools.viJa, ...pools.jaVi, ...pools.listening].map((question) =>
        normalizePracticeSentence(question.jp),
      ),
    ).size,
    reviewTranslationCount * 3,
  );
});
void test('Minna II contains exactly lessons 26–50 with full practice banks', () => {
  assert.deepEqual(
    n4LessonIds,
    Array.from({ length: 25 }, (_, index) => index + 26),
  );
  const n4 = n4LessonIds.map((id) => lessons[id]);
  assert.equal(
    n4.reduce((sum, lesson) => sum + lesson.words.length, 0),
    1040,
  );
  assert.equal(
    n4.reduce((sum, lesson) => sum + lesson.grammar.length, 0),
    125,
  );
  assert.equal(
    n4.reduce((sum, lesson) => sum + lesson.choices.length, 0),
    1000,
  );
  for (const lesson of n4) {
    assert.ok(lesson.words.length >= 20);
    assert.match(
      lessonDetails[lesson.id].grammarSource,
      new RegExp(`lesson-${lesson.id}\\.html$`),
    );
    const pools = buildPracticePools(lesson);
    const sentences = [...pools.viJa, ...pools.jaVi, ...pools.listening].map(
      (q) => normalizePracticeSentence(q.jp),
    );
    assert.equal(
      new Set(sentences).size,
      36,
      `Lesson ${lesson.id}: no cross-mode duplicates`,
    );
    const completedChoices = new Set(
      lesson.choices.map((q) =>
        normalizePracticeSentence(
          q.prompt.replace(/（\s*）/u, q.options[q.correct]),
        ),
      ),
    );
    assert.ok(
      sentences.every((sentence) => !completedChoices.has(sentence)),
      `Lesson ${lesson.id}: no completed MC sentence reused`,
    );
    for (const word of lesson.words) {
      assert.equal(
        segmentReadings(word.jp, word.kana)
          .map((segment) => segment.reading ?? segment.text)
          .join(''),
        word.kana,
      );
      assert.doesNotMatch(word.kana, /[\p{Script=Han}{}]/u, word.id);
    }
  }
  for (const q of reviewLesson.choices)
    assert.ok(Number(q.topic.match(/^Bài (\d+)/u)?.[1]) <= 25);
});
void test('N4 explicit readings preserve homographs, sentence context and quiz hints', () => {
  const reading = (text: string) =>
    segmentReadings(text)
      .map((s) => s.reading ?? s.text)
      .join('');
  assert.equal(
    reading('料理の教室を開きます。'),
    'りょうりのきょうしつをひらきます。',
  );
  assert.equal(reading('窓が開いています。'), 'まどがあいています。');
  assert.equal(reading('私わたくし'), 'わたしわたくし'); // No invented context.
  assert.equal(
    normalizeJapanese('右へ曲がると、駅が見えます。'),
    'みぎへまがるとえきがみえます',
  );
  const word = lessons[50].words.find((item) => item.jp === '私')!;
  assert.equal(word.kana, 'わたくし');
  assert.equal(segmentReadings(word.jp, word.kana)[0].reading, 'わたくし');
  const hints = { 開きます: 'ひらきます' };
  assert.ok(
    segmentReadings('「開きます」の意味', undefined, hints).some(
      (segment) => segment.reading === 'ひらきます',
    ),
  );
  assert.equal(
    annotated('{本:ほん}を{読:よ}みます。', false).kana,
    'ほんをよみます。',
  );
  assert.throws(() => annotated('{本:ほん'), /Malformed/);
});
void test('All lesson Kanji have Hán-Việt data or an explicit Japanese-created-character note', () => {
  for (const lesson of Object.values(lessons)) {
    const texts = [
      ...lesson.words.flatMap((word) => [word.jp, word.example]),
      ...lesson.grammar.flatMap((g) => [
        g.formula,
        g.explanation,
        g.example,
        g.caution,
      ]),
      ...lesson.translations.map((q) => q.jp),
    ];
    for (const text of texts)
      for (const character of text.match(/[\p{Script=Han}]/gu) ?? []) {
        if (character === '々') continue;
        assert.ok(hanVietFor(character), `Lesson ${lesson.id}: ${character}`);
      }
  }
  assert.match(hanVietFor('込')!, /không có âm Hán Việt/);
});
void test('New vocabulary parsing rejects incomplete rows', () => {
  assert.throws(
    () =>
      defineLesson(12, {
        words: '雪|ゆき',
        grammar: [],
        choices: [],
        translations: [],
      }),
    /Invalid vocabulary/,
  );
});
void test('Compound readings remain intact across conjugations', () => {
  for (const [jp, kana] of [
    ['電話しています', 'でんわしています'],
    ['荷物を持っています', 'にもつをもっています'],
    ['買い物に行きます', 'かいものにいきます'],
    ['読み方を教えてください', 'よみかたをおしえてください'],
    ['七時に家を出ます', 'しちじにうちをでます'],
  ])
    assert.equal(normalizeJapanese(jp), kana);
  assert.equal(
    normalizeJapanese('７時に家を出ます'),
    normalizeJapanese('七時に家を出ます'),
  );
});
void test('New lessons reject changed tense, wish, permission, negation and place particles', () => {
  const examples: [number, number, string][] = [
    [12, 2, 'きのうは寒かったです。'],
    [12, 4, 'あの箱はこの箱より重いです。'],
    [13, 2, 'プールで泳ぎます。'],
    [13, 4, 'きょうは何か食べたいです。'],
    [14, 0, '窓を閉めてください。'],
    [14, 9, 'この荷物を持ってください。'],
    [15, 0, 'このいすに座ってください。'],
    [15, 3, 'ここに車を止めてもいいです。'],
    [15, 8, 'ホテルの電話番号を知っています。'],
    [15, 9, '姉は京都で住んでいます。'],
  ];
  for (const [id, index, input] of examples) {
    assert.equal(
      gradeTranslation(lessons[id].translations[index], 'vi-ja', input),
      'review',
      input,
    );
  }
});
for (const lesson of Object.values(lessons)) {
  void test(`Lesson ${lesson.id}: all vocabulary fields, unique IDs and examples`, () => {
    const ids = new Set<string>();
    const words = new Set<string>();
    for (const word of lesson.words) {
      assert.ok(!ids.has(word.id));
      ids.add(word.id);
      assert.ok(!words.has(word.jp));
      words.add(word.jp);
      for (const value of Object.values(word))
        assert.ok(value.trim().length > 0, word.id);
    }
  });
  void test(`Lesson ${lesson.id}: MC questions have exactly one indexed answer`, () => {
    assert.equal(lesson.choices.length, 40);
    const keys = new Set();
    for (const q of lesson.choices) {
      assert.ok(!keys.has(q.id));
      keys.add(q.id);
      assert.equal(q.options.length, 4);
      assert.equal(new Set(q.options).size, 4);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4);
      assert.ok(q.explanation.length > 15);
    }
    const authoredCount = lesson.id === 18 ? 24 : 12;
    const vocabularyPerDirection = (40 - authoredCount) / 2;
    const added = lesson.choices.slice(authoredCount);
    assert.equal(
      added.filter((question) => question.prompt.startsWith('「')).length,
      vocabularyPerDirection,
    );
    assert.equal(
      added.filter((question) =>
        question.prompt.startsWith('Chọn từ tiếng Nhật'),
      ).length,
      vocabularyPerDirection,
    );
  });
  void test(`Lesson ${lesson.id}: kanji, kana and every declared translation variant match`, () => {
    assert.equal(lesson.translations.length, 12);
    for (const q of lesson.translations) {
      assert.equal(normalizeJapanese(q.jp), normalizeJapanese(q.kana), q.id);
      for (const answer of [q.jp, q.kana, ...(q.jpAlternatives ?? [])])
        assert.equal(
          gradeTranslation(q, 'vi-ja', answer),
          'matched',
          q.id + answer,
        );
      for (const answer of [q.vi, ...(q.viAlternatives ?? [])])
        assert.equal(
          gradeTranslation(q, 'ja-vi', answer),
          'matched',
          q.id + answer,
        );
    }
  });
  void test(`Lesson ${lesson.id}: translation tiles rebuild the answer with bounded distractors`, () => {
    const pools = buildPracticePools(lesson);
    const cases: [TranslationMode, typeof pools.viJa][] = [
      ['vi-ja', pools.viJa],
      ['ja-vi', pools.jaVi],
    ];
    for (const [mode, translations] of cases) {
      for (const q of translations) {
        const expected = mode === 'vi-ja' ? q.jp : q.vi;
        const answerTokens = tokenizeTranslation(expected, mode);
        const answerTiles = answerTokens.map((text, index) => ({
          id: `answer-${index}`,
          text,
          answer: true,
        }));
        const assembled = assembleTranslationTiles(answerTiles, mode);
        assert.equal(
          gradeTranslation(q, mode, assembled, { requirePunctuation: true }),
          'matched',
          q.id,
        );
        assert.equal(
          assembled.replace(/\s/gu, ''),
          expected.replace(/\s/gu, ''),
          `${q.id}: no text or punctuation lost`,
        );
        assert.equal(
          gradeTranslation(q, mode, assembled.replace(/\p{P}/gu, ''), {
            requirePunctuation: true,
          }),
          'review',
          `${q.id}: punctuation is mandatory`,
        );

        const tiles = buildTranslationTiles(q, mode, pools.all);
        const distractors = tiles.filter((tile) => !tile.answer);
        assert.equal(
          tiles.filter((tile) => tile.answer).length,
          answerTokens.length,
        );
        assert.ok(distractors.length >= 4 && distractors.length <= 6, q.id);
        assert.ok(
          distractors.every((tile) => !isPunctuationTile(tile.text)),
          `${q.id}: keep word distractors`,
        );
        assert.deepEqual(
          tiles
            .filter((tile) => tile.answer)
            .map((tile) => tile.text)
            .sort(),
          [...answerTokens].sort(),
          `${q.id}: bank includes every punctuation occurrence`,
        );
        assert.equal(new Set(tiles.map((tile) => tile.id)).size, tiles.length);
        const answerValues = new Set(
          answerTokens.map((token) => token.toLowerCase()),
        );
        assert.ok(
          distractors.every(
            (tile) => !answerValues.has(tile.text.toLowerCase()),
          ),
          q.id,
        );
      }
    }
  });
  void test(`Lesson ${lesson.id}: listening questions have one meaning and three distinct distractors`, () => {
    const pools = buildPracticePools(lesson);
    for (const q of pools.listening) {
      const listening = buildListeningChoice(q, pools.all);
      assert.equal(listening.options.length, 4);
      assert.equal(new Set(listening.options).size, 4);
      assert.equal(listening.options[listening.correct], q.vi);
      assert.ok(listening.correct >= 0 && listening.correct < 4);
    }
  });
  void test(`Lesson ${lesson.id}: practice modes maximize distinct sentences and avoid exact MC reuse`, () => {
    const pools = buildPracticePools(lesson);
    const modePools = [pools.viJa, pools.jaVi, pools.listening];
    for (const pool of modePools) {
      assert.equal(pool.length, 12);
      assert.equal(
        new Set(pool.map((q) => normalizePracticeSentence(q.jp))).size,
        12,
      );
    }

    const allSentences = modePools
      .flat()
      .map((q) => normalizePracticeSentence(q.jp));
    assert.ok(new Set(allSentences).size >= 23);
    const choiceText = new Set(
      lesson.choices
        .flatMap((q) => [q.prompt, ...q.options])
        .map(normalizePracticeSentence),
    );
    assert.ok(allSentences.every((sentence) => !choiceText.has(sentence)));
  });
  void test(`Lesson ${lesson.id}: blanks and unrelated answers never auto-pass`, () => {
    for (const q of lesson.translations) {
      for (const mode of ['vi-ja', 'ja-vi'] as const) {
        assert.equal(gradeTranslation(q, mode, ' \n\t'), 'empty');
        assert.equal(
          gradeTranslation(q, mode, 'Không biết / わかりません'),
          'review',
        );
        assert.equal(gradeTranslation(q, mode, '。'), 'review');
      }
    }
  });
}
void test('Sentence assembly exposes punctuation as separate reusable occurrences', () => {
  const cases: [TranslationMode, string, string[]][] = [
    ['vi-ja', 'はい、私です。どうぞ。', ['、', '。', '。']],
    ['vi-ja', '「危ない！」と叫びました。', ['「', '！', '」', '。']],
    ['ja-vi', 'Vâng, tôi đây. Bạn khỏe không?', [',', '.', '?']],
    ['ja-vi', 'Đây là sô-cô-la Nhật Bản.', ['-', '-', '.']],
    ['ja-vi', 'Cảm ơn anh/chị! (Sau khi hỏi nhờ.)', ['/', '!', '(', '.', ')']],
    ['ja-vi', 'Tôi nói: “Chào bạn!”', [':', '“', '!', '”']],
    ['ja-vi', 'Tôi nói: "Chào bạn!"', [':', '"', '!', '"']],
    ['ja-vi', 'Có pin không? — Pin à? Có ở trên kệ.', ['?', '—', '?', '.']],
  ];
  for (const [mode, text, punctuation] of cases) {
    const tokens = tokenizeTranslation(text, mode);
    assert.deepEqual(tokens.filter(isPunctuationTile), punctuation, text);
    const tiles = tokens.map((text, i) => ({
      id: String(i),
      text,
      answer: true,
    }));
    assert.equal(assembleTranslationTiles(tiles, mode), text);
  }
});

void test('Assembled answers reject missing, repeated, incorrect and misplaced punctuation', () => {
  const q = {
    id: 'punctuation-test',
    topic: 'Dấu câu',
    explanation: 'Ghép đủ dấu câu.',
    jp: 'はい、私です。',
    kana: 'はい、わたしです。',
    vi: 'Vâng, là tôi.',
  };
  for (const mode of ['vi-ja', 'ja-vi'] as const) {
    const expected = mode === 'vi-ja' ? q.jp : q.vi;
    const tiles = tokenizeTranslation(expected, mode).map((text, i) => ({
      id: String(i),
      text,
      answer: true,
    }));
    const grade = (input: typeof tiles) =>
      gradeTranslation(q, mode, assembleTranslationTiles(input, mode), {
        requirePunctuation: true,
      });
    assert.equal(grade(tiles), 'matched');
    for (const [index, tile] of tiles.entries()) {
      if (!isPunctuationTile(tile.text)) continue;
      const without = tiles.filter((_, i) => i !== index);
      assert.equal(grade(without), 'review', `missing ${tile.text}`);
      assert.equal(
        grade([tile, ...without]),
        'review',
        `misplaced ${tile.text}`,
      );
      assert.equal(grade([...tiles, tile]), 'review', `extra ${tile.text}`);
      assert.equal(
        grade(tiles.map((t, i) => (i === index ? { ...t, text: '!' } : t))),
        'review',
        `wrong ${tile.text}`,
      );
    }
    assert.equal(grade([]), 'empty');
    assert.equal(
      grade(tiles.filter((tile) => isPunctuationTile(tile.text))),
      'review',
    );
  }
  assert.equal(
    gradeTranslation(q, 'vi-ja', q.kana, { requirePunctuation: true }),
    'matched',
  );
  assert.equal(
    gradeTranslation(q, 'ja-vi', q.vi.toUpperCase().normalize('NFD'), {
      requirePunctuation: true,
    }),
    'matched',
  );
  assert.equal(
    gradeTranslation(q, 'vi-ja', 'はい私です'),
    'matched',
    'legacy typed normalization stays available',
  );
});

void test('N5 review also includes and requires punctuation in both translation directions', () => {
  const pools = buildPracticePools(reviewLesson, reviewTranslationCount);
  for (const [mode, questions] of [
    ['vi-ja', pools.viJa],
    ['ja-vi', pools.jaVi],
  ] as const) {
    for (const q of questions) {
      const expected = mode === 'vi-ja' ? q.jp : q.vi;
      const bank = buildTranslationTiles(q, mode, pools.all);
      const answer = bank
        .filter((tile) => tile.answer)
        .sort(
          (a, b) =>
            Number(a.id.split('-').at(-1)) - Number(b.id.split('-').at(-1)),
        );
      const assembled = assembleTranslationTiles(answer, mode);
      assert.equal(
        assembled.replace(/\s/gu, ''),
        expected.replace(/\s/gu, ''),
        q.id,
      );
      assert.equal(
        gradeTranslation(q, mode, assembled, { requirePunctuation: true }),
        'matched',
        q.id,
      );
      const withoutPunctuation = answer.filter(
        (tile) => !isPunctuationTile(tile.text),
      );
      assert.equal(
        gradeTranslation(
          q,
          mode,
          assembleTranslationTiles(withoutPunctuation, mode),
          { requirePunctuation: true },
        ),
        'review',
        q.id,
      );
    }
  }
});

void test('Japanese: punctuation, widths, mixed kana and numeric counters', () => {
  assert.equal(
    gradeTranslation(
      lessons[11].translations[0],
      'vi-ja',
      'りんご を ３つ 買いました！',
    ),
    'matched',
  );
  assert.equal(
    gradeTranslation(lessons[11].translations[1], 'vi-ja', 'こどもが2人います'),
    'matched',
  );
  assert.equal(
    gradeTranslation(
      lessons[11].translations[3],
      'vi-ja',
      '毎日にじかん日本語をべんきょうします',
    ),
    'matched',
  );
  assert.equal(
    gradeTranslation(
      lessons[11].translations[5],
      'vi-ja',
      '家から駅まで１５分かかります。',
    ),
    'matched',
  );
  assert.equal(
    gradeTranslation(
      lessons[11].translations[9],
      'vi-ja',
      '30分くらいかかります',
    ),
    'matched',
  );
});
void test('Japanese: wrong particles, negation, quantity and tense do not auto-pass', () => {
  assert.equal(
    gradeTranslation(lessons[10].translations[0], 'vi-ja', '庭で犬がいます。'),
    'review',
  );
  assert.equal(
    gradeTranslation(
      lessons[10].translations[0],
      'vi-ja',
      '庭に犬がいません。',
    ),
    'review',
  );
  assert.equal(
    gradeTranslation(
      lessons[10].translations[0],
      'vi-ja',
      '庭に犬があります。',
    ),
    'review',
  );
  assert.equal(
    gradeTranslation(
      lessons[11].translations[0],
      'vi-ja',
      'りんごを四つ買いました。',
    ),
    'review',
  );
  assert.equal(
    gradeTranslation(
      lessons[11].translations[0],
      'vi-ja',
      'りんごを三つ買います。',
    ),
    'review',
  );
});
void test('Vietnamese: case, Unicode accents and punctuation, but preserve meaning', () => {
  assert.equal(
    normalizeVietnamese('  TÔI   CÓ HAI CON!!! '),
    normalizeVietnamese('Tôi có hai con.'),
  );
  const q = lessons[11].translations[0];
  assert.equal(
    gradeTranslation(q, 'ja-vi', q.vi.normalize('NFD').toUpperCase()),
    'matched',
  );
  assert.equal(
    gradeTranslation(q, 'ja-vi', 'Tôi chưa mua ba quả táo.'),
    'review',
  );
  assert.equal(
    gradeTranslation(q, 'ja-vi', 'Tôi đã mua bốn quả táo.'),
    'review',
  );
});
void test('Shuffle preserves every item without mutating the original', () => {
  const input = [1, 2, 3, 4, 5];
  const output = shuffled(input, () => 0);
  assert.deepEqual(input, [1, 2, 3, 4, 5]);
  assert.notDeepEqual(output, input);
  assert.deepEqual(
    [...output].sort((a, b) => a - b),
    input,
  );
  assert.deepEqual(shuffled([]), []);
  assert.deepEqual(shuffled([1]), [1]);
});
void test('Local progress validates saved IDs and ratings', () => {
  assert.deepEqual(parseRatings(null, ['a']), {});
  assert.deepEqual(
    parseRatings('{"a":"known","b":"review","foreign":"known","c":true}', [
      'a',
      'b',
      'c',
    ]),
    { a: 'known', b: 'review' },
  );
  assert.deepEqual(parseRatings('null', ['a']), {});
  assert.deepEqual(parseRatings('[]', ['a']), {});
  assert.throws(() => parseRatings('bad json', ['a']));
});
