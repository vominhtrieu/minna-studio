'use client';
import { useState } from 'react';
import JapaneseText from './japanese-text';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
  Trophy,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import type { Lesson } from '@/lib/lessons';
import { shuffled } from '@/lib/grading';
import { useWordProgress, type Rating } from '@/lib/word-progress';
export default function Flashcards({ lesson }: { lesson: Lesson }) {
  const [deck, setDeck] = useState(lesson.words);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [showKana, setShowKana] = useState(true);
  const [showKnown, setShowKnown] = useState(false);
  const [done, setDone] = useState(false);
  const { ratings, ready, storageWarning, saveRating } =
    useWordProgress(lesson);
  const known = lesson.words.filter((w) => ratings[w.id] === 'known').length;
  const visibleDeck = deck.filter(
    (item) => showKnown || ratings[item.id] !== 'known',
  );
  const word = visibleDeck[index];
  function move(to: number) {
    if (to >= 0 && to < visibleDeck.length) {
      setIndex(to);
      setFlipped(false);
    }
  }
  function rate(value: Rating) {
    if (!flipped || !ready || !word) return;
    saveRating(word.id, value);

    if (index === visibleDeck.length - 1) {
      setDone(true);
    } else if (value === 'known' && !showKnown) {
      // The current card disappears, so the next card takes the same index.
      setFlipped(false);
    } else {
      move(index + 1);
    }
  }
  function restart(includeKnown = showKnown, randomize = false) {
    setShowKnown(includeKnown);
    setDeck(randomize ? shuffled(lesson.words) : lesson.words);
    setIndex(0);
    setFlipped(false);
    setDone(false);
  }
  function changeKnownVisibility(value: boolean) {
    setShowKnown(value);
    setIndex(0);
    setFlipped(false);
    setDone(false);
  }
  const remaining = lesson.words.length - known;
  return (
    <section>
      <div className="section-heading">
        <h2>Ghi nhớ từng từ</h2>
        <button
          className="text-button"
          onClick={() => restart(showKnown, true)}
        >
          <Shuffle size={16} /> Trộn thẻ
        </button>
      </div>
      <div className="flash-settings">
        <label htmlFor="kana-switch">
          <Switch
            id="kana-switch"
            checked={showKana}
            onCheckedChange={setShowKana}
            aria-label="Hiện cách đọc"
          />{' '}
          Cách đọc
        </label>
        <label htmlFor="reverse-switch">
          <Switch
            id="reverse-switch"
            checked={reverse}
            onCheckedChange={(v) => {
              setReverse(v);
              setFlipped(false);
            }}
            aria-label="Đảo chiều Việt sang Nhật"
          />{' '}
          Việt → Nhật
        </label>
        <label htmlFor="known-switch">
          <Switch
            id="known-switch"
            checked={showKnown}
            onCheckedChange={changeKnownVisibility}
            aria-label="Hiện từ đã nhớ"
          />{' '}
          Hiện từ đã nhớ
        </label>
        <span className="known-label">
          <Check size={14} />
          {known}/{lesson.words.length} đã nhớ
        </span>
      </div>
      {!ready ? (
        <output className="completion-panel">
          <p>Đang tải tiến độ từ vựng…</p>
        </output>
      ) : done || !word ? (
        <div className="completion-panel">
          <span className="result-icon">
            <Trophy size={30} />
          </span>
          <p className="eyebrow">
            {remaining === 0 ? 'ĐÃ NHỚ TOÀN BỘ' : 'HOÀN THÀNH LƯỢT THẺ'}
          </p>
          <h2>
            {remaining === 0
              ? 'Bạn đã nhớ hết từ của bài này.'
              : 'Một chút tiến bộ mỗi ngày.'}
          </h2>
          <p>
            {remaining === 0
              ? 'Bật “Hiện từ đã nhớ” để ôn lại toàn bộ bất cứ lúc nào.'
              : `Bạn đã đánh dấu nhớ ${known}/${lesson.words.length} từ trong bài này.`}
          </p>
          <div className="button-row">
            {remaining > 0 && (
              <button className="button primary" onClick={() => restart(false)}>
                Ôn {remaining} từ chưa nhớ <ArrowRight size={18} />
              </button>
            )}
            {known > 0 ? (
              <button
                className={
                  remaining === 0 ? 'button primary' : 'button secondary'
                }
                onClick={() => restart(true)}
              >
                Hiện lại {known} từ đã nhớ
              </button>
            ) : (
              <button
                className="button secondary"
                onClick={() => restart(false)}
              >
                Học lại lượt này
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="card-progress">
            <span>
              Thẻ {index + 1}{' '}
              <span className="muted">/ {visibleDeck.length}</span>
            </span>
            <span className="muted">
              {ratings[word.id] === 'known'
                ? 'Đã nhớ'
                : ratings[word.id] === 'review'
                  ? 'Cần ôn lại'
                  : 'Chưa đánh giá'}
            </span>
          </div>
          <Progress
            value={(index / visibleDeck.length) * 100}
            aria-label="Vị trí trong bộ thẻ"
          />
          <div className={'flashcard ' + (flipped ? 'flipped' : '')}>
            <button
              className="flashcard-flip"
              onClick={() => setFlipped(!flipped)}
              tabIndex={-1}
              aria-hidden="true"
            />
            <span className="flashcard-top">
              <span>{word.type}</span>
              <span>
                {reverse ? 'TIẾNG VIỆT → 日本語' : '日本語 → TIẾNG VIỆT'}
              </span>
            </span>
            <span className="flashcard-content">
              {flipped ? (
                <>
                  <span
                    className={reverse ? 'japanese-word' : 'meaning'}
                    lang={reverse ? 'ja' : 'vi'}
                  >
                    <JapaneseText text={reverse ? word.jp : word.vi} />
                  </span>
                  {showKana && (
                    <span className="kana" lang="ja">
                      {word.kana}
                    </span>
                  )}
                  <span lang="ja" className="example">
                    <JapaneseText text={word.example} />
                  </span>
                  <span className="example-translation">
                    {word.translation}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className={reverse ? 'meaning' : 'japanese-word'}
                    lang={reverse ? 'vi' : 'ja'}
                  >
                    <JapaneseText
                      text={reverse ? word.vi : word.jp}
                      readings={showKana}
                    />
                  </span>
                  <span className="recall-hint">
                    {reverse
                      ? 'Bạn nói từ này bằng tiếng Nhật thế nào?'
                      : 'Bạn nhớ nghĩa của từ này chứ?'}
                  </span>
                </>
              )}
            </span>
            <button
              className="flip-hint"
              type="button"
              onClick={() => setFlipped(!flipped)}
              aria-label={
                flipped ? 'Lật về mặt trước' : 'Lật thẻ để xem đáp án'
              }
              aria-pressed={flipped}
            >
              <RotateCcw size={15} />
              {flipped ? 'Xem lại mặt trước' : 'Nhấn để lật thẻ'}
            </button>
          </div>
          <div className="flash-actions">
            <button
              className="button secondary"
              disabled={!flipped || !ready}
              onClick={() => rate('review')}
            >
              <RotateCcw size={17} /> Cần ôn lại
            </button>
            <button
              className="button primary"
              disabled={!flipped || !ready}
              onClick={() => rate('known')}
            >
              <Check size={18} /> Đã nhớ <ArrowRight size={18} />
            </button>
          </div>
          <div className="card-footer">
            <button
              className="icon-button"
              disabled={index === 0}
              aria-label="Thẻ trước"
              onClick={() => move(index - 1)}
            >
              <ChevronLeft size={19} />
            </button>
            <span>
              {flipped
                ? 'Chọn mức ghi nhớ để sang thẻ tiếp.'
                : 'Lật thẻ trước khi tự đánh giá.'}
            </span>
            <button
              className="icon-button"
              disabled={index === visibleDeck.length - 1}
              aria-label="Thẻ sau"
              onClick={() => move(index + 1)}
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </>
      )}
      <p className="local-note" role={storageWarning ? 'status' : undefined}>
        {storageWarning
          ? 'Không thể lưu trên trình duyệt. Tiến độ chỉ được giữ trong lượt học đang mở.'
          : 'Tiến độ từ vựng lưu trên trình duyệt này, không đồng bộ giữa các thiết bị.'}
      </p>
    </section>
  );
}
