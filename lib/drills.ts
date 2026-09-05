export type CounterItem = {
  display: string;
  reading: string;
  alternative?: string;
};
export type CounterCategory = {
  id: string;
  label: string;
  description: string;
  items: CounterItem[];
};

function counterItems(text: string): CounterItem[] {
  return text
    .trim()
    .split('\n')
    .map((line) => {
      const [display, reading, alternative] = line.split('|');
      if (!display || !reading) throw new Error(`Invalid counter row: ${line}`);
      return { display, reading, alternative };
    });
}

export const counterCategories: CounterCategory[] = [
  {
    id: 'general',
    label: 'Đồ vật chung ～つ',
    description: 'Cách đếm thuần Nhật từ 1 đến 10.',
    items: counterItems(`
一つ|ひとつ
二つ|ふたつ
三つ|みっつ
四つ|よっつ
五つ|いつつ
六つ|むっつ
七つ|ななつ
八つ|やっつ
九つ|ここのつ
十|とお
いくつ|いくつ`),
  },
  {
    id: 'people',
    label: 'Người ～人',
    description: 'Chú ý 一人・二人 và cách đọc 4, 7, 9.',
    items: counterItems(`
一人|ひとり
二人|ふたり
三人|さんにん
四人|よにん
五人|ごにん
六人|ろくにん
七人|しちにん
八人|はちにん
九人|きゅうにん
十人|じゅうにん
何人|なんにん`),
  },
  {
    id: 'flat',
    label: 'Vật mỏng ～枚',
    description: 'Giấy, tem, áo và vật phẳng.',
    items: counterItems(`
一枚|いちまい
二枚|にまい
三枚|さんまい
四枚|よんまい
五枚|ごまい
六枚|ろくまい
七枚|ななまい
八枚|はちまい
九枚|きゅうまい
十枚|じゅうまい
何枚|なんまい`),
  },
  {
    id: 'machines',
    label: 'Máy móc ～台',
    description: 'Xe cộ và máy móc; không có biến âm.',
    items: counterItems(`
一台|いちだい
二台|にだい
三台|さんだい
四台|よんだい
五台|ごだい
六台|ろくだい
七台|ななだい
八台|はちだい
九台|きゅうだい
十台|じゅうだい
何台|なんだい`),
  },
  {
    id: 'books',
    label: 'Sách vở ～冊',
    description: 'Biến âm ở 1, 8, 10 và câu hỏi.',
    items: counterItems(`
一冊|いっさつ
二冊|にさつ
三冊|さんさつ
四冊|よんさつ
五冊|ごさつ
六冊|ろくさつ
七冊|ななさつ
八冊|はっさつ
九冊|きゅうさつ
十冊|じゅっさつ|じっさつ
何冊|なんさつ`),
  },
  {
    id: 'long',
    label: 'Vật dài ～本',
    description: 'Bút, chai, ô và vật thon dài; nhiều biến âm.',
    items: counterItems(`
一本|いっぽん
二本|にほん
三本|さんぼん
四本|よんほん
五本|ごほん
六本|ろっぽん
七本|ななほん
八本|はっぽん
九本|きゅうほん
十本|じゅっぽん|じっぽん
何本|なんぼん`),
  },
  {
    id: 'animals',
    label: 'Con vật nhỏ ～匹',
    description: 'Mèo, chó, cá nhỏ; biến âm p và b.',
    items: counterItems(`
一匹|いっぴき
二匹|にひき
三匹|さんびき
四匹|よんひき
五匹|ごひき
六匹|ろっぴき
七匹|ななひき
八匹|はっぴき
九匹|きゅうひき
十匹|じゅっぴき|じっぴき
何匹|なんびき`),
  },
  {
    id: 'cups',
    label: 'Cốc, chén ～杯',
    description: 'Đồ uống trong cốc hoặc bát; cùng kiểu biến âm với 本.',
    items: counterItems(`
一杯|いっぱい
二杯|にはい
三杯|さんばい
四杯|よんはい
五杯|ごはい
六杯|ろっぱい
七杯|ななはい
八杯|はっぱい
九杯|きゅうはい
十杯|じゅっぱい|じっぱい
何杯|なんばい`),
  },
  {
    id: 'times',
    label: 'Số lần ～回',
    description: 'Biến âm ở 1, 6, 8 và 10.',
    items: counterItems(`
一回|いっかい
二回|にかい
三回|さんかい
四回|よんかい
五回|ごかい
六回|ろっかい
七回|ななかい
八回|はっかい
九回|きゅうかい
十回|じゅっかい|じっかい
何回|なんかい`),
  },
  {
    id: 'floors',
    label: 'Tầng ～階',
    description: 'Ba tầng đọc さんがい; câu hỏi なんがい.',
    items: counterItems(`
一階|いっかい
二階|にかい
三階|さんがい
四階|よんかい
五階|ごかい
六階|ろっかい
七階|ななかい
八階|はっかい
九階|きゅうかい
十階|じゅっかい|じっかい
何階|なんがい`),
  },
  {
    id: 'ages',
    label: 'Tuổi ～歳',
    description: 'Một đến mười tuổi, hai mươi tuổi và câu hỏi.',
    items: counterItems(`
一歳|いっさい
二歳|にさい
三歳|さんさい
四歳|よんさい
五歳|ごさい
六歳|ろくさい
七歳|ななさい
八歳|はっさい
九歳|きゅうさい
十歳|じゅっさい|じっさい
二十歳|はたち
何歳|なんさい`),
  },
  {
    id: 'minutes',
    label: 'Phút ～分',
    description: 'Luân phiên ふん・ぷん và biến âm ngắt.',
    items: counterItems(`
一分|いっぷん
二分|にふん
三分|さんぷん
四分|よんぷん
五分|ごふん
六分|ろっぷん
七分|ななふん
八分|はっぷん
九分|きゅうふん
十分|じゅっぷん|じっぷん
何分|なんぷん`),
  },
  {
    id: 'hours',
    label: 'Giờ ～時',
    description: 'Chú ý bốn, bảy và chín giờ.',
    items: counterItems(`
一時|いちじ
二時|にじ
三時|さんじ
四時|よじ
五時|ごじ
六時|ろくじ
七時|しちじ
八時|はちじ
九時|くじ
十時|じゅうじ
十一時|じゅういちじ
十二時|じゅうにじ
何時|なんじ`),
  },
  {
    id: 'days',
    label: 'Ngày trong tháng ～日',
    description: 'Các ngày 1–10 và 14, 20, 24 có cách đọc cần nhớ.',
    items: counterItems(`
一日|ついたち
二日|ふつか
三日|みっか
四日|よっか
五日|いつか
六日|むいか
七日|なのか
八日|ようか
九日|ここのか
十日|とおか
十四日|じゅうよっか
二十日|はつか
二十四日|にじゅうよっか
何日|なんにち`),
  },
  {
    id: 'months',
    label: 'Tháng trong năm ～月',
    description: 'Chú ý tháng 4, 7 và 9.',
    items: counterItems(`
一月|いちがつ
二月|にがつ
三月|さんがつ
四月|しがつ
五月|ごがつ
六月|ろくがつ
七月|しちがつ
八月|はちがつ
九月|くがつ
十月|じゅうがつ
十一月|じゅういちがつ
十二月|じゅうにがつ
何月|なんがつ`),
  },
  {
    id: 'month-duration',
    label: 'Khoảng tháng ～か月',
    description: 'Đếm độ dài theo tháng, khác tên tháng trong năm.',
    items: counterItems(`
一か月|いっかげつ
二か月|にかげつ
三か月|さんかげつ
四か月|よんかげつ
五か月|ごかげつ
六か月|ろっかげつ
七か月|ななかげつ
八か月|はっかげつ
九か月|きゅうかげつ
十か月|じゅっかげつ|じっかげつ
何か月|なんかげつ`),
  },
  {
    id: 'years',
    label: 'Năm ～年',
    description: 'Khoảng thời gian theo năm.',
    items: counterItems(`
一年|いちねん
二年|にねん
三年|さんねん
四年|よねん
五年|ごねん
六年|ろくねん
七年|ななねん
八年|はちねん
九年|きゅうねん
十年|じゅうねん
何年|なんねん`),
  },
  {
    id: 'weeks',
    label: 'Tuần ～週間',
    description: 'Biến âm ở một, tám và mười tuần.',
    items: counterItems(`
一週間|いっしゅうかん
二週間|にしゅうかん
三週間|さんしゅうかん
四週間|よんしゅうかん
五週間|ごしゅうかん
六週間|ろくしゅうかん
七週間|ななしゅうかん
八週間|はっしゅうかん
九週間|きゅうしゅうかん
十週間|じゅっしゅうかん|じっしゅうかん
何週間|なんしゅうかん`),
  },
];

export type VerbKind = 'godan' | 'ichidan' | 'suru' | 'kuru';
export type VerbEntry = { dictionary: string; reading: string; kind: VerbKind };
export const drillVerbs: VerbEntry[] = [
  { dictionary: '買う', reading: 'かう', kind: 'godan' },
  { dictionary: '待つ', reading: 'まつ', kind: 'godan' },
  { dictionary: '帰る', reading: 'かえる', kind: 'godan' },
  { dictionary: '読む', reading: 'よむ', kind: 'godan' },
  { dictionary: '遊ぶ', reading: 'あそぶ', kind: 'godan' },
  { dictionary: '死ぬ', reading: 'しぬ', kind: 'godan' },
  { dictionary: '書く', reading: 'かく', kind: 'godan' },
  { dictionary: '泳ぐ', reading: 'およぐ', kind: 'godan' },
  { dictionary: '話す', reading: 'はなす', kind: 'godan' },
  { dictionary: '行く', reading: 'いく', kind: 'godan' },
  { dictionary: '食べる', reading: 'たべる', kind: 'ichidan' },
  { dictionary: '見る', reading: 'みる', kind: 'ichidan' },
  { dictionary: '起きる', reading: 'おきる', kind: 'ichidan' },
  { dictionary: 'する', reading: 'する', kind: 'suru' },
  { dictionary: '勉強する', reading: 'べんきょうする', kind: 'suru' },
  { dictionary: '来る', reading: 'くる', kind: 'kuru' },
];

export const conjugationForms = [
  ['polite', 'Lịch sự hiện tại', '～ます'],
  ['polite-negative', 'Lịch sự phủ định', '～ません'],
  ['polite-past', 'Lịch sự quá khứ', '～ました'],
  ['polite-past-negative', 'Lịch sự quá khứ phủ định', '～ませんでした'],
  ['dictionary', 'Thể từ điển', '辞書形'],
  ['negative', 'Thể ない', 'ない形'],
  ['te', 'Thể て', 'て形'],
  ['ta', 'Thể た', 'た形'],
  ['potential', 'Thể khả năng', '可能形'],
  ['volitional', 'Thể ý chí', '意向形'],
  ['imperative', 'Thể mệnh lệnh', '命令形'],
  ['prohibitive', 'Thể cấm đoán', '禁止形'],
  ['conditional-ba', 'Điều kiện ば', 'ば形'],
  ['conditional-tara', 'Điều kiện たら', 'たら形'],
  ['passive', 'Thể bị động', '受身形'],
  ['causative', 'Thể sai khiến', '使役形'],
  ['causative-passive', 'Sai khiến bị động', '使役受身形'],
  ['desire', 'Thể mong muốn', '～たい'],
] as const;
export type ConjugationForm = (typeof conjugationForms)[number][0];

const row: Record<string, { i: string; a: string; e: string; o: string }> = {
  う: { i: 'い', a: 'わ', e: 'え', o: 'お' },
  く: { i: 'き', a: 'か', e: 'け', o: 'こ' },
  ぐ: { i: 'ぎ', a: 'が', e: 'げ', o: 'ご' },
  す: { i: 'し', a: 'さ', e: 'せ', o: 'そ' },
  つ: { i: 'ち', a: 'た', e: 'て', o: 'と' },
  ぬ: { i: 'に', a: 'な', e: 'ね', o: 'の' },
  ぶ: { i: 'び', a: 'ば', e: 'べ', o: 'ぼ' },
  む: { i: 'み', a: 'ま', e: 'め', o: 'も' },
  る: { i: 'り', a: 'ら', e: 'れ', o: 'ろ' },
};

function godanParts(value: string) {
  const end = value.at(-1)!;
  const stem = value.slice(0, -1);
  const r = row[end];
  if (!r) throw new Error(`Unsupported godan verb: ${value}`);
  const te =
    end === 'う' || end === 'つ' || end === 'る'
      ? `${stem}って`
      : end === 'む' || end === 'ぶ' || end === 'ぬ'
        ? `${stem}んで`
        : end === 'く'
          ? `${stem}いて`
          : end === 'ぐ'
            ? `${stem}いで`
            : `${stem}して`;
  return {
    stem,
    end,
    ...r,
    masu: `${stem}${r.i}`,
    te,
    ta: te.endsWith('て') ? `${te.slice(0, -1)}た` : `${te.slice(0, -1)}だ`,
  };
}

export function conjugateVerb(verb: VerbEntry, form: ConjugationForm): string {
  const v = verb.dictionary;
  if (verb.kind === 'godan') {
    const p = godanParts(v);
    const isIku = verb.reading === 'いく';
    const te = isIku ? `${p.stem}って` : p.te;
    const ta = isIku ? `${p.stem}った` : p.ta;
    const endings: Record<ConjugationForm, string> = {
      polite: `${p.masu}ます`,
      'polite-negative': `${p.masu}ません`,
      'polite-past': `${p.masu}ました`,
      'polite-past-negative': `${p.masu}ませんでした`,
      dictionary: v,
      negative: `${p.stem}${p.a}ない`,
      te,
      ta,
      potential: `${p.stem}${p.e}る`,
      volitional: `${p.stem}${p.o}う`,
      imperative: `${p.stem}${p.e}`,
      prohibitive: `${v}な`,
      'conditional-ba': `${p.stem}${p.e}ば`,
      'conditional-tara': `${ta}ら`,
      passive: `${p.stem}${p.a}れる`,
      causative: `${p.stem}${p.a}せる`,
      'causative-passive': `${p.stem}${p.a}せられる`,
      desire: `${p.masu}たい`,
    };
    return endings[form];
  }
  const compound = verb.kind === 'suru' ? v.slice(0, -2) : '';
  const ichidanStem = verb.kind === 'ichidan' ? v.slice(0, -1) : '';
  const forms: Record<
    Exclude<VerbKind, 'godan'>,
    Record<ConjugationForm, string>
  > = {
    ichidan: {
      polite: `${ichidanStem}ます`,
      'polite-negative': `${ichidanStem}ません`,
      'polite-past': `${ichidanStem}ました`,
      'polite-past-negative': `${ichidanStem}ませんでした`,
      dictionary: v,
      negative: `${ichidanStem}ない`,
      te: `${ichidanStem}て`,
      ta: `${ichidanStem}た`,
      potential: `${ichidanStem}られる`,
      volitional: `${ichidanStem}よう`,
      imperative: `${ichidanStem}ろ`,
      prohibitive: `${v}な`,
      'conditional-ba': `${ichidanStem}れば`,
      'conditional-tara': `${ichidanStem}たら`,
      passive: `${ichidanStem}られる`,
      causative: `${ichidanStem}させる`,
      'causative-passive': `${ichidanStem}させられる`,
      desire: `${ichidanStem}たい`,
    },
    suru: {
      polite: `${compound}します`,
      'polite-negative': `${compound}しません`,
      'polite-past': `${compound}しました`,
      'polite-past-negative': `${compound}しませんでした`,
      dictionary: v,
      negative: `${compound}しない`,
      te: `${compound}して`,
      ta: `${compound}した`,
      potential: `${compound}できる`,
      volitional: `${compound}しよう`,
      imperative: `${compound}しろ`,
      prohibitive: `${v}な`,
      'conditional-ba': `${compound}すれば`,
      'conditional-tara': `${compound}したら`,
      passive: `${compound}される`,
      causative: `${compound}させる`,
      'causative-passive': `${compound}させられる`,
      desire: `${compound}したい`,
    },
    kuru: {
      polite: '来ます',
      'polite-negative': '来ません',
      'polite-past': '来ました',
      'polite-past-negative': '来ませんでした',
      dictionary: '来る',
      negative: '来ない',
      te: '来て',
      ta: '来た',
      potential: '来られる',
      volitional: '来よう',
      imperative: '来い',
      prohibitive: '来るな',
      'conditional-ba': '来れば',
      'conditional-tara': '来たら',
      passive: '来られる',
      causative: '来させる',
      'causative-passive': '来させられる',
      desire: '来たい',
    },
  };
  return forms[verb.kind][form];
}

export function conjugateVerbReading(
  verb: VerbEntry,
  form: ConjugationForm,
): string {
  if (verb.kind !== 'kuru') {
    return conjugateVerb({ ...verb, dictionary: verb.reading }, form);
  }
  const forms: Record<ConjugationForm, string> = {
    polite: 'きます',
    'polite-negative': 'きません',
    'polite-past': 'きました',
    'polite-past-negative': 'きませんでした',
    dictionary: 'くる',
    negative: 'こない',
    te: 'きて',
    ta: 'きた',
    potential: 'こられる',
    volitional: 'こよう',
    imperative: 'こい',
    prohibitive: 'くるな',
    'conditional-ba': 'くれば',
    'conditional-tara': 'きたら',
    passive: 'こられる',
    causative: 'こさせる',
    'causative-passive': 'こさせられる',
    desire: 'きたい',
  };
  return forms[form];
}

export const counterItemCount = counterCategories.reduce(
  (sum, category) => sum + category.items.length,
  0,
);
export const conjugationItemCount = drillVerbs.length * conjugationForms.length;
