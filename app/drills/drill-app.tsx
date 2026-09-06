'use client';

import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Hash,
  RefreshCw,
  RotateCcw,
  X,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  conjugateVerb,
  conjugateVerbReading,
  conjugationForms,
  conjugationItemCount,
  counterCategories,
  counterItemCount,
  drillVerbs,
  type ConjugationForm,
} from '@/lib/drills';
import { shuffled } from '@/lib/grading';
import JapaneseText from '../japanese-text';
import Link from '../app-link';

type DrillQuestion = {
  id: string;
  prompt: string;
  answer: string;
  alternative?: string;
  label: string;
  note: string;
};

function normalize(value: string) {
  return value
    .normalize('NFKC')
    .replace(/[\s\p{P}]/gu, '')
    .toLocaleLowerCase('ja');
}

function DrillSession({
  questions: initialQuestions,
  onExit,
}: {
  questions: DrillQuestion[];
  onExit: () => void;
}) {
  const [questions, setQuestions] = useState<DrillQuestion[]>(initialQuestions);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [mistakes, setMistakes] = useState<DrillQuestion[]>([]);
  const current = questions[index];
  const matched = Boolean(
    submitted &&
    current &&
    [current.answer, current.alternative]
      .filter(Boolean)
      .some((answer) => normalize(answer!) === normalize(input)),
  );
  const finished = index >= questions.length;

  if (finished) {
    return (
      <div className="drill-finish">
        <span className="result-icon">
          <Check size={30} />
        </span>
        <p className="eyebrow">HOÀN THÀNH TOÀN BỘ PHẠM VI ĐÃ CHỌN</p>
        <h2>
          {correct} / {questions.length} câu đúng ngay lần đầu
        </h2>
        <p>
          {mistakes.length
            ? `${mistakes.length} trường hợp cần xem lại.`
            : 'Bạn đã trả lời đúng tất cả trường hợp.'}
        </p>
        <div className="button-row">
          {mistakes.length > 0 && (
            <button
              className="button primary"
              onClick={() => {
                setQuestions(shuffled(mistakes));
                setIndex(0);
                setCorrect(0);
                setMistakes([]);
                setInput('');
              }}
            >
              Luyện lại câu sai
            </button>
          )}
          <button className="button secondary" onClick={onExit}>
            Chọn phạm vi khác
          </button>
        </div>
      </div>
    );
  }

  function submit() {
    if (!input.trim() || submitted) return;
    setSubmitted(true);
    const ok = [current.answer, current.alternative]
      .filter(Boolean)
      .some((answer) => normalize(answer!) === normalize(input));
    if (ok) setCorrect((value) => value + 1);
    else setMistakes((value) => [...value, current]);
  }

  return (
    <section className="drill-session">
      <div className="question-meta">
        <span>
          CÂU {index + 1} / {questions.length}
        </span>
        <span>{current.label}</span>
      </div>
      <Progress
        value={(index / questions.length) * 100}
        aria-label="Tiến độ luyện chuyên đề"
      />
      <div className="drill-prompt">
        <span className="muted">{current.note}</span>
        <h2 lang="ja">{current.prompt}</h2>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <label htmlFor="drill-answer">
          Nhập cách đọc hoặc dạng đúng bằng tiếng Nhật
        </label>
        <input
          id="drill-answer"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          readOnly={submitted}
          autoComplete="off"
          spellCheck={false}
          lang="ja"
        />
        {!submitted ? (
          <button
            className="button primary submit-answer"
            disabled={!input.trim()}
          >
            Kiểm tra <ArrowRight size={18} />
          </button>
        ) : (
          <div
            className={
              matched ? 'drill-feedback correct' : 'drill-feedback incorrect'
            }
            aria-live="polite"
          >
            <strong>
              {matched ? (
                <>
                  <Check size={19} /> Chính xác
                </>
              ) : (
                <>
                  <X size={19} /> Cần nhớ lại
                </>
              )}
            </strong>
            <p lang="ja">
              <JapaneseText text={current.answer} />
            </p>
            {current.alternative && current.alternative !== current.answer && (
              <small lang="ja">Cách đọc: {current.alternative}</small>
            )}
          </div>
        )}
      </form>
      {submitted && (
        <button
          className="button primary submit-answer"
          onClick={() => {
            setIndex((value) => value + 1);
            setInput('');
            setSubmitted(false);
          }}
        >
          Câu tiếp theo <ArrowRight size={18} />
        </button>
      )}
      <button className="text-button" onClick={onExit}>
        <ArrowLeft size={15} /> Dừng lượt luyện
      </button>
    </section>
  );
}

export function CounterDrill() {
  const [scope, setScope] = useState('all');
  const [questions, setQuestions] = useState<DrillQuestion[] | null>(null);
  const selectedCategory = counterCategories.find(
    (category) => category.id === scope,
  );
  const selectedCount =
    scope === 'all' ? counterItemCount : selectedCategory!.items.length;
  const selectedLabel =
    scope === 'all'
      ? `Tất cả 18 nhóm · ${counterItemCount} trường hợp`
      : `${selectedCategory!.label} · ${selectedCategory!.items.length}`;
  if (questions)
    return (
      <DrillSession questions={questions} onExit={() => setQuestions(null)} />
    );
  return (
    <section className="drill-setup">
      <div className="drill-copy">
        <Hash size={25} />
        <h2>Luyện cách đọc số đếm</h2>
        <p>
          Bao phủ 18 nhóm: đồ vật, người, sách, vật dài, con vật, cốc, số lần,
          tầng, tuổi, giờ, phút, ngày, tháng và khoảng thời gian.
        </p>
      </div>
      <label htmlFor="counter-scope">Phạm vi</label>
      <Select value={scope} onValueChange={(value) => value && setScope(value)}>
        <SelectTrigger id="counter-scope">
          <SelectValue>{selectedLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            Tất cả 18 nhóm · {counterItemCount} trường hợp
          </SelectItem>
          {counterCategories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.label} · {category.items.length}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {scope !== 'all' && (
        <p className="scope-note">{selectedCategory!.description}</p>
      )}
      <button
        className="button primary"
        onClick={() => {
          const categories =
            scope === 'all'
              ? counterCategories
              : counterCategories.filter((category) => category.id === scope);
          setQuestions(
            shuffled(
              categories.flatMap((category) =>
                category.items.map((item) => ({
                  id: `${category.id}-${item.display}`,
                  prompt: item.display,
                  answer: item.reading,
                  alternative: item.alternative,
                  label: category.label,
                  note: 'Hãy nhập cách đọc bằng hiragana',
                })),
              ),
            ),
          );
        }}
      >
        Luyện đủ {selectedCount} trường hợp <ArrowRight size={18} />
      </button>
    </section>
  );
}

export function VerbDrill() {
  const [scope, setScope] = useState<'all' | ConjugationForm>('all');
  const [questions, setQuestions] = useState<DrillQuestion[] | null>(null);
  const selectedCount =
    scope === 'all' ? conjugationItemCount : drillVerbs.length;
  const selectedForm = conjugationForms.find(([id]) => id === scope);
  const selectedLabel =
    scope === 'all'
      ? `Tất cả 18 dạng · ${conjugationItemCount} trường hợp`
      : `${selectedForm![1]} · ${selectedForm![2]}`;
  const forms = useMemo(
    () =>
      scope === 'all'
        ? conjugationForms
        : conjugationForms.filter(([id]) => id === scope),
    [scope],
  );
  if (questions)
    return (
      <DrillSession questions={questions} onExit={() => setQuestions(null)} />
    );
  return (
    <section className="drill-setup">
      <div className="drill-copy">
        <RefreshCw size={25} />
        <h2>Luyện chia động từ</h2>
        <p>
          Đủ chín kiểu đuôi nhóm I, nhóm II, する・来る và ngoại lệ 行く; luyện
          18 dạng từ lịch sự đến sai khiến bị động.
        </p>
      </div>
      <label htmlFor="verb-scope">Dạng cần luyện</label>
      <Select
        value={scope}
        onValueChange={(value) => value && setScope(value as typeof scope)}
      >
        <SelectTrigger id="verb-scope">
          <SelectValue>{selectedLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            Tất cả 18 dạng · {conjugationItemCount} trường hợp
          </SelectItem>
          {conjugationForms.map(([id, label, short]) => (
            <SelectItem key={id} value={id}>
              {label} · {short}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="scope-note">
        Mỗi câu đưa ra thể từ điển. Bạn phải tự gõ dạng được yêu cầu; đáp án
        Kanji hoặc cách đọc hiragana đều được chấp nhận.
      </p>
      <button
        className="button primary"
        onClick={() =>
          setQuestions(
            shuffled(
              drillVerbs.flatMap((verb) =>
                forms.map(([id, label, short]) => ({
                  id: `${verb.dictionary}-${id}`,
                  prompt: verb.dictionary,
                  answer: conjugateVerb(verb, id),
                  alternative: conjugateVerbReading(verb, id),
                  label,
                  note: `Hãy đổi sang ${short}`,
                })),
              ),
            ),
          )
        }
      >
        Luyện đủ {selectedCount} trường hợp <ArrowRight size={18} />
      </button>
    </section>
  );
}

export default function DrillApp() {
  return (
    <div className="drill-shell">
      <header className="topbar drill-topbar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            み
          </span>
          <span>
            minna<span className="brand-light"> studio</span>
          </span>
        </Link>
        <Link className="button secondary" href="/lessons/1/vocabulary">
          <ArrowLeft size={17} /> Trở lại bài học
        </Link>
      </header>
      <main className="drill-workspace">
        <div className="drill-heading">
          <p className="eyebrow">LUYỆN CHUYÊN ĐỀ</p>
          <h1>Số đếm và chia động từ.</h1>
          <p>
            Chọn một phạm vi nhỏ để ôn nhanh, hoặc luyện toàn bộ để không bỏ sót
            trường hợp biến âm và ngoại lệ.
          </p>
        </div>
        <Tabs defaultValue="counters" className="drill-tabs">
          <TabsList variant="line" aria-label="Chọn chuyên đề">
            <TabsTrigger value="counters">
              <Hash /> Số đếm
            </TabsTrigger>
            <TabsTrigger value="verbs">
              <RotateCcw /> Chia động từ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="counters">
            <CounterDrill />
          </TabsContent>
          <TabsContent value="verbs">
            <VerbDrill />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
