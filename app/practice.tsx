'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  PenLine,
  RotateCcw,
  Trophy,
  Volume2,
  X,
} from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import type { ChoiceQuestion, Lesson, Translation } from '@/lib/lessons';
import { gradeTranslation, shuffled } from '@/lib/grading';
import { buildListeningChoice, type ListeningChoice } from '@/lib/listening';
import { buildPracticePools } from '@/lib/practice-pools';
import {
  assembleTranslationTiles,
  buildTranslationTiles,
} from '@/lib/translation-tiles';
import JapaneseText from './japanese-text';
type Mode = 'choice' | 'vi-ja' | 'ja-vi' | 'listening';
type Question = {
  id: string;
  mode: Mode;
  choice?: ChoiceQuestion;
  translation?: Translation;
  listening?: ListeningChoice;
};
type Answer = {
  input: string;
  verdict: 'correct' | 'incorrect';
};
const modes: { id: Mode; title: string; subtitle: string; symbol: string }[] = [
  {
    id: 'choice',
    title: 'Trắc nghiệm',
    subtitle: 'Chọn đáp án đúng',
    symbol: 'A',
  },
  {
    id: 'vi-ja',
    title: 'Việt → Nhật',
    subtitle: 'Ghép câu tiếng Nhật',
    symbol: 'あ',
  },
  {
    id: 'ja-vi',
    title: 'Nhật → Việt',
    subtitle: 'Ghép câu tiếng Việt',
    symbol: 'Ă',
  },
  {
    id: 'listening',
    title: 'Nghe hiểu',
    subtitle: 'Nghe và chọn nghĩa',
    symbol: '聞',
  },
];
export default function Practice({
  lesson,
  poolSize = 12,
  review = false,
}: {
  lesson: Lesson;
  poolSize?: number;
  review?: boolean;
}) {
  const [mode, setMode] = useState<Mode>('choice');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [selectedTileIds, setSelectedTileIds] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [speechWarning, setSpeechWarning] = useState('');
  const [listeningRun, setListeningRun] = useState(0);
  const practicePools = useMemo(
    () => buildPracticePools(lesson, poolSize),
    [lesson, poolSize],
  );
  const start = useCallback(
    (selected: Mode, only?: Question[]) => {
      const translations =
        selected === 'vi-ja'
          ? practicePools.viJa
          : selected === 'ja-vi'
            ? practicePools.jaVi
            : practicePools.listening;
      const list =
        only ??
        (selected === 'choice'
          ? lesson.choices.map((q) => ({ id: q.id, mode: selected, choice: q }))
          : translations.map((q) => ({
              id: `${q.id}-${selected}`,
              mode: selected,
              translation: q,
              listening:
                selected === 'listening'
                  ? buildListeningChoice(q, practicePools.all)
                  : undefined,
            })));
      setMode(selected);
      setQuestions(shuffled(list));
      setIndex(0);
      setInput('');
      setSelectedTileIds([]);
      setAnswers({});
      setSubmitted(false);
      setFinished(false);
      setSpeaking(false);
      setSpeechWarning('');
      setListeningRun((value) => value + 1);
    },
    [lesson, practicePools],
  );
  const current = questions[index];
  const translationTiles = useMemo(
    () =>
      current?.translation &&
      (current.mode === 'vi-ja' || current.mode === 'ja-vi')
        ? shuffled(
            buildTranslationTiles(
              current.translation,
              current.mode,
              practicePools.all,
            ),
          )
        : [],
    [current, practicePools.all],
  );
  const selectedTiles = selectedTileIds.flatMap((id) => {
    const tile = translationTiles.find((item) => item.id === id);
    return tile ? [tile] : [];
  });
  const answer = current ? answers[current.id] : undefined;
  const active = questions.length > 0;
  const selectedQuestionCount =
    mode === 'choice'
      ? lesson.choices.length
      : mode === 'vi-ja'
        ? practicePools.viJa.length
        : mode === 'ja-vi'
          ? practicePools.jaVi.length
          : practicePools.listening.length;
  const totalQuestionCount =
    lesson.choices.length +
    practicePools.viJa.length +
    practicePools.jaVi.length +
    practicePools.listening.length;
  function submit() {
    if (!current || !input.trim() || submitted) return;
    const verdict =
      current.mode === 'choice' || current.mode === 'listening'
        ? Number(input) ===
          (current.mode === 'choice'
            ? current.choice!.correct
            : current.listening!.correct)
          ? 'correct'
          : 'incorrect'
        : gradeTranslation(current.translation!, current.mode, input) ===
            'matched'
          ? 'correct'
          : 'incorrect';
    setAnswers((a) => ({
      ...a,
      [current.id]: { input, verdict },
    }));
    setSubmitted(true);
  }
  function next() {
    if (!submitted) return;
    stopSpeech();
    if (index === questions.length - 1) setFinished(true);
    else {
      setIndex((i) => i + 1);
      setInput('');
      setSelectedTileIds([]);
      setSubmitted(false);
      setSpeechWarning('');
    }
  }
  function reset() {
    stopSpeech();
    setQuestions([]);
    setFinished(false);
    setInput('');
    setSelectedTileIds([]);
    setAnswers({});
    setSpeechWarning('');
  }
  function stopSpeech() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }
  const playListening = useCallback(() => {
    if (!current?.translation || current.mode !== 'listening') return;
    if (
      typeof window === 'undefined' ||
      !('speechSynthesis' in window) ||
      typeof SpeechSynthesisUtterance === 'undefined'
    ) {
      setSpeechWarning('Trình duyệt này không hỗ trợ phát giọng đọc.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(current.translation.jp);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.82;
    const japaneseVoice = window.speechSynthesis
      .getVoices()
      .find((voice) => voice.lang.toLowerCase().startsWith('ja'));
    if (japaneseVoice) utterance.voice = japaneseVoice;
    utterance.onstart = () => {
      setSpeaking(true);
      setSpeechWarning('');
    };
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = (event) => {
      setSpeaking(false);
      if (event.error === 'canceled' || event.error === 'interrupted') return;
      setSpeechWarning(
        'Không phát được câu này. Hãy kiểm tra giọng tiếng Nhật trên thiết bị.',
      );
    };
    window.speechSynthesis.speak(utterance);
  }, [current]);
  function updateSelectedTiles(ids: string[]) {
    const tiles = ids.flatMap((id) => {
      const tile = translationTiles.find((item) => item.id === id);
      return tile ? [tile] : [];
    });
    setSelectedTileIds(ids);
    if (current?.mode === 'vi-ja' || current?.mode === 'ja-vi') {
      setInput(assembleTranslationTiles(tiles, current.mode));
    }
  }
  function selectTile(id: string) {
    if (submitted || selectedTileIds.includes(id)) return;
    updateSelectedTiles([...selectedTileIds, id]);
  }
  function removeTile(id: string) {
    if (submitted) return;
    updateSelectedTiles(selectedTileIds.filter((tileId) => tileId !== id));
  }
  useEffect(
    () => () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    },
    [],
  );
  useEffect(() => {
    if (!current?.translation || current.mode !== 'listening' || finished)
      return;
    const timer = window.setTimeout(playListening, 180);
    return () => {
      window.clearTimeout(timer);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, [current, finished, listeningRun, playListening]);
  // Agents can start a visible session, but cannot fill or submit learner answers.
  useEffect(() => {
    type Context = {
      registerTool: (
        tool: {
          name: string;
          description: string;
          inputSchema: object;
          annotations: object;
          execute: (input: unknown) => unknown;
        },
        options: { signal: AbortSignal },
      ) => unknown;
    };
    const context = (document as Document & { modelContext?: Context })
      .modelContext;
    if (!context?.registerTool) return;
    const controller = new AbortController();
    try {
      Promise.resolve(
        context.registerTool(
          {
            name: 'start_grammar_practice',
            description:
              'Start a visible practice session for the current lesson. Does not answer questions. Refuses to replace an active session.',
            inputSchema: {
              type: 'object',
              properties: {
                mode: {
                  type: 'string',
                  enum: ['choice', 'vi-ja', 'ja-vi', 'listening'],
                },
              },
              required: ['mode'],
              additionalProperties: false,
            },
            annotations: { readOnlyHint: false, untrustedContentHint: false },
            execute(value: unknown) {
              if (
                !value ||
                typeof value !== 'object' ||
                Array.isArray(value) ||
                Object.keys(value).length !== 1 ||
                !('mode' in value) ||
                !modes.some((m) => m.id === value.mode)
              )
                throw new Error('Invalid mode');
              if (active) throw new Error('A session is already active');
              flushSync(() => start(value.mode as Mode));
              return { lesson: lesson.id, mode: value.mode, started: true };
            },
          },
          { signal: controller.signal },
        ),
      ).catch(() => {});
    } catch {
      /* Optional API is unavailable in most browsers. */
    }
    return () => controller.abort();
  }, [lesson, active, start]);
  if (!active)
    return (
      <section>
        <div className="section-heading">
          <h2>{review ? 'Chọn phần tổng ôn.' : 'Tới lượt bạn luyện tập.'}</h2>
          <span className="muted">
            {totalQuestionCount} câu trong ngân hàng
          </span>
        </div>
        <p className="practice-intro">
          Chọn một dạng bài. Trắc nghiệm có {lesson.choices.length} câu; ghép
          Việt → Nhật có {practicePools.viJa.length} câu, ghép Nhật → Việt có{' '}
          {practicePools.jaVi.length} câu và nghe hiểu có{' '}
          {practicePools.listening.length} câu. Giải thích xuất hiện ngay sau
          khi trả lời.
        </p>
        <RadioGroup
          className="mode-picker"
          value={mode}
          onValueChange={(v) => setMode(v as Mode)}
          aria-label="Dạng bài tập"
        >
          {modes.map((m) => (
            <label
              key={m.id}
              className={'mode-card ' + (mode === m.id ? 'selected' : '')}
            >
              <span className="mode-symbol">{m.symbol}</span>
              <span>
                <strong>{m.title}</strong>
                <small>
                  {m.subtitle} ·{' '}
                  {m.id === 'choice'
                    ? lesson.choices.length
                    : m.id === 'vi-ja'
                      ? practicePools.viJa.length
                      : m.id === 'ja-vi'
                        ? practicePools.jaVi.length
                        : practicePools.listening.length}{' '}
                  câu
                </small>
              </span>
              <RadioGroupItem value={m.id} aria-label={m.title} />
            </label>
          ))}
        </RadioGroup>
        <div className="practice-notice">
          <PenLine size={20} />
          <p>
            Hai dạng dịch dùng cách <strong>chọn và xếp từ theo thứ tự</strong>.
            Phần nghe tự phát câu tiếng Nhật ở tốc độ chậm vừa và yêu cầu chọn
            nghĩa đúng. Đáp án chỉ xuất hiện sau khi nộp.
          </p>
        </div>
        <button className="button primary" onClick={() => start(mode)}>
          Bắt đầu {selectedQuestionCount} câu <ArrowRight size={18} />
        </button>
        <p className="local-note">
          {review
            ? 'Ngân hàng được xếp xen kẽ theo bài để cả 25 bài đều xuất hiện sớm trong lượt luyện.'
            : `Câu hỏi tự biên soạn theo trọng tâm bài ${lesson.id}, không sao chép bài tập trong sách.`}
        </p>
      </section>
    );
  if (finished) {
    const correct = Object.values(answers).filter(
      (a) => a.verdict === 'correct',
    ).length;
    const missed = questions.filter(
      (q) => answers[q.id]?.verdict !== 'correct',
    );
    return (
      <section>
        <div className="completion-panel">
          <span className="result-icon">
            <Trophy size={30} />
          </span>
          <p className="eyebrow">HOÀN THÀNH LƯỢT LUYỆN</p>
          <h2>
            {correct === questions.length
              ? 'Bạn làm tốt lắm!'
              : 'Mỗi câu là một lần nhớ lâu hơn.'}
          </h2>
          <div className="score">
            {correct}
            <span> / {questions.length}</span>
          </div>
          <p>Câu đúng ngay lần đầu</p>
          <div className="button-row">
            {missed.length > 0 && (
              <button
                className="button primary"
                onClick={() => start(mode, missed)}
              >
                Luyện lại {missed.length} câu cần ôn
              </button>
            )}
            <button className="button secondary" onClick={reset}>
              Chọn dạng bài khác
            </button>
          </div>
        </div>
        <div className="review-list">
          <h3>Nhìn lại câu trả lời</h3>
          {questions.map((q, i) => {
            const a = answers[q.id];
            return (
              <details key={q.id}>
                <summary>
                  <span
                    className={
                      a.verdict === 'correct'
                        ? 'status-correct'
                        : 'status-incorrect'
                    }
                  >
                    {a.verdict === 'correct' ? (
                      <Check size={17} />
                    ) : (
                      <RotateCcw size={17} />
                    )}
                  </span>
                  <span>
                    Câu {i + 1} · {q.choice?.topic ?? q.translation?.topic}
                  </span>
                </summary>
                <p>
                  {q.choice?.prompt ??
                    (q.mode === 'vi-ja'
                      ? q.translation!.vi
                      : q.mode === 'listening'
                        ? `Câu đã nghe: ${q.translation!.jp}`
                        : q.translation!.jp)}
                </p>
                <p>
                  <strong>Bạn trả lời:</strong>{' '}
                  {q.mode === 'choice'
                    ? q.choice!.options[Number(a.input)]
                    : q.mode === 'listening'
                      ? q.listening!.options[Number(a.input)]
                      : a.input}
                </p>
                <p>
                  <strong>Đáp án mẫu:</strong>{' '}
                  {q.choice
                    ? q.choice.options[q.choice.correct]
                    : q.mode === 'listening'
                      ? q.listening!.options[q.listening!.correct]
                      : q.mode === 'vi-ja'
                        ? q.translation!.jp
                        : q.translation!.vi}
                </p>
                <p className="muted">
                  {q.choice?.explanation ?? q.translation?.explanation}
                </p>
              </details>
            );
          })}
        </div>
      </section>
    );
  }
  const q = current;
  const isChoice = q.mode === 'choice';
  const isListening = q.mode === 'listening';
  const isOptionQuestion = isChoice || isListening;
  const translation = q.translation;
  const prompt = isChoice
    ? q.choice!.prompt
    : isListening
      ? 'Nghe câu tiếng Nhật rồi chọn nghĩa phù hợp.'
      : q.mode === 'vi-ja'
        ? translation!.vi
        : translation!.jp;
  const optionChoices = isChoice
    ? q.choice!.options
    : isListening
      ? q.listening!.options
      : [];
  const correctOption = isChoice
    ? q.choice!.correct
    : isListening
      ? q.listening!.correct
      : -1;
  const sample = isChoice
    ? q.choice!.options[q.choice!.correct]
    : isListening
      ? q.listening!.options[q.listening!.correct]
      : q.mode === 'vi-ja'
        ? translation!.jp
        : translation!.vi;
  return (
    <section>
      <div className="section-heading">
        <h2>{modes.find((m) => m.id === q.mode)!.title}</h2>
        <span className="muted">
          Câu {index + 1}/{questions.length}
        </span>
      </div>
      <Progress
        value={(Object.keys(answers).length / questions.length) * 100}
        aria-label="Tiến độ luyện tập"
      />
      <form
        className="question-panel"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <div className="question-meta">
          <span>CÂU {String(index + 1).padStart(2, '0')}</span>
          <span>{q.choice?.topic ?? translation?.topic}</span>
        </div>
        <h3 className="question-prompt">
          <JapaneseText text={prompt} />
        </h3>
        {isOptionQuestion && (
          <p className="muted practice-reading-hint">
            {isListening
              ? 'Câu sẽ tự phát; bạn vẫn có thể nghe lại nhiều lần trước khi chọn.'
              : 'Chọn đáp án bằng ô tròn hoặc vùng trống bên cạnh.'}
          </p>
        )}
        {isListening && (
          <div className="listening-player">
            <button
              type="button"
              className="button secondary listen-button"
              onClick={playListening}
              disabled={speaking}
            >
              <Volume2 size={21} />
              {speaking ? 'Đang phát…' : 'Nghe câu'}
            </button>
            <span>Tốc độ luyện nghe N5 · có thể phát lại</span>
            {speechWarning && <output>{speechWarning}</output>}
          </div>
        )}
        {q.mode === 'vi-ja' && translation?.id === '11-t7' && (
          <p className="muted">Dùng thì quá khứ: đã ăn.</p>
        )}
        {isOptionQuestion ? (
          <RadioGroup
            className="answer-options"
            aria-label={isListening ? 'Chọn nghĩa đã nghe' : 'Chọn đáp án'}
            value={input}
            onValueChange={(v) => {
              if (!submitted) setInput(String(v));
            }}
            disabled={submitted}
          >
            {optionChoices.map((option, i) => (
              <div
                key={i}
                className={
                  'answer-option ' +
                  (input === String(i) ? 'selected ' : '') +
                  (submitted && i === correctOption ? 'correct-option' : '')
                }
              >
                <label
                  className="option-hit-area"
                  htmlFor={`answer-${q.id}-${i}`}
                  aria-label={`Chọn ${'ABCD'[i]}`}
                />
                <span className="option-letter">{'ABCD'[i]}</span>
                <span className="option-copy">
                  <JapaneseText text={option} />
                </span>
                <RadioGroupItem
                  id={`answer-${q.id}-${i}`}
                  value={String(i)}
                  aria-label={option}
                />
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="translation-builder">
            <fieldset className="selected-tiles" disabled={submitted}>
              <legend>Câu trả lời đã ghép</legend>
              <div className="selected-tiles-box" aria-live="polite">
                {selectedTiles.length > 0 ? (
                  selectedTiles.map((tile) => (
                    <div className="word-tile selected-tile" key={tile.id}>
                      <button
                        type="button"
                        className="tile-hit-area"
                        onClick={() => removeTile(tile.id)}
                        aria-label={`Bỏ từ ${tile.text}`}
                      />
                      <span lang={q.mode === 'vi-ja' ? 'ja' : 'vi'}>
                        <JapaneseText text={tile.text} />
                      </span>
                    </div>
                  ))
                ) : (
                  <span className="tile-placeholder">
                    Chọn từng từ ở bên dưới để tạo câu trả lời.
                  </span>
                )}
              </div>
            </fieldset>
            <fieldset className="available-tiles" disabled={submitted}>
              <legend>Từ để ghép</legend>
              <div className="tile-bank">
                {translationTiles
                  .filter((tile) => !selectedTileIds.includes(tile.id))
                  .map((tile) => (
                    <div className="word-tile" key={tile.id}>
                      <button
                        type="button"
                        className="tile-hit-area"
                        onClick={() => selectTile(tile.id)}
                        aria-label={`Chọn từ ${tile.text}`}
                      />
                      <span lang={q.mode === 'vi-ja' ? 'ja' : 'vi'}>
                        <JapaneseText text={tile.text} />
                      </span>
                    </div>
                  ))}
              </div>
            </fieldset>
            <div className="tile-builder-footer">
              <span className="input-hint">
                Có {translationTiles.length - selectedTiles.length} từ chưa
                dùng; một số từ không thuộc đáp án.
              </span>
              <button
                type="button"
                className="text-button"
                disabled={selectedTiles.length === 0 || submitted}
                onClick={() => updateSelectedTiles([])}
              >
                <RotateCcw size={15} /> Ghép lại từ đầu
              </button>
            </div>
          </div>
        )}
        {!submitted && (
          <button
            type="submit"
            className="button primary submit-answer"
            disabled={!input.trim()}
          >
            Kiểm tra câu trả lời <ArrowRight size={18} />
          </button>
        )}
        {submitted && answer && (
          <div
            className={'answer-feedback ' + answer.verdict}
            aria-live="polite"
          >
            <div className="feedback-title">
              {answer.verdict === 'correct' ? (
                <Check size={20} />
              ) : (
                <X size={20} />
              )}
              <strong>
                {answer.verdict === 'correct'
                  ? 'Chính xác!'
                  : isChoice
                    ? 'Ghi nhớ lại câu này nhé'
                    : isListening
                      ? 'Nghĩa bạn chọn chưa đúng'
                      : 'Thứ tự hoặc từ được chọn chưa đúng'}
              </strong>
            </div>
            <p className="answer-label">
              {isListening
                ? 'NGHĨA ĐÚNG'
                : isChoice
                  ? 'ĐÁP ÁN ĐÚNG'
                  : 'MỘT CÁCH DỊCH ĐÚNG'}
            </p>
            <p
              className="sample-answer"
              lang={q.mode === 'ja-vi' || isListening ? 'vi' : 'ja'}
            >
              <JapaneseText text={sample} />
            </p>
            {isListening && (
              <div className="listening-transcript">
                <span>CÂU ĐÃ NGHE</span>
                <p lang="ja">
                  <JapaneseText text={translation!.jp} />
                </p>
                <small lang="ja">{translation!.kana}</small>
              </div>
            )}
            {q.mode === 'vi-ja' && (
              <p className="kana-answer" lang="ja">
                {translation!.kana}
              </p>
            )}
            <p>
              <JapaneseText
                text={q.choice?.explanation ?? translation!.explanation}
              />
            </p>
          </div>
        )}
        {submitted && (
          <button
            type="button"
            className="button primary submit-answer"
            onClick={next}
          >
            {index === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
            <ArrowRight size={18} />
          </button>
        )}
      </form>
      <details className="exit-session">
        <summary>
          <ArrowLeft size={14} /> Đổi dạng bài
        </summary>
        <p>
          Rời lượt này sẽ bỏ kết quả đang làm. Tiến độ từ vựng vẫn được giữ.
        </p>
        <button className="button secondary" onClick={reset}>
          Kết thúc lượt và chọn lại
        </button>
      </details>
    </section>
  );
}
