'use client';
import Link from './app-link';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Layers,
  PenLine,
  Sigma,
  Sparkles,
} from 'lucide-react';
import { lessons, lessonIds } from '@/lib/lessons';
import { lessonDetails } from '@/lib/lesson-details';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import JapaneseText from './japanese-text';
import Flashcards from './flashcards';
import Grammar from './grammar';
import Practice from './practice';
export type Section = 'vocabulary' | 'grammar' | 'practice';
export default function StudyApp({
  lessonId,
  section,
}: {
  lessonId: number;
  section: Section;
}) {
  const lesson = lessons[lessonId];
  const details = lessonDetails[lessonId];
  const is10 = lessonId === 10;
  return (
    <div className="app-shell">
      <a className="skip-link" href="#lesson-content">
        Đến nội dung bài học
      </a>
      <header className="topbar">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            み
          </span>
          <span>
            minna<span className="brand-light"> studio</span>
          </span>
        </Link>
        <div className="lesson-picker">
          <label htmlFor="lesson-picker-trigger">Bài học</label>
          <Select
            value={String(lessonId)}
            onValueChange={(value) => {
              if (value && value !== String(lessonId)) {
                window.location.assign(`/lessons/${value}/${section}`);
              }
            }}
          >
            <SelectTrigger id="lesson-picker-trigger">
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="center">
              {lessonIds.map((id) => (
                <SelectItem key={id} value={String(id)}>
                  Bài {id} <span lang="ja">第{id}課</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <span className="level-tag">
          <Link href="/drills">
            <Sigma size={14} /> Luyện chuyên đề
          </Link>
        </span>
      </header>
      <main className="workspace">
        <div className="breadcrumb">
          <BookOpen size={15} /> Minna no Nihongo I <ChevronRight size={14} />
          <span>Bài {lessonId}</span>
        </div>
        <div className="page-heading">
          <div>
            <div className="eyebrow">
              LESSON {lessonId}
              <span lang="ja">みんなの日本語</span>
            </div>
            <h1>{details.title}</h1>
            <p>{details.description}</p>
          </div>
          <div className="lesson-stamp" aria-hidden="true">
            第<span>{lessonId}</span>課
          </div>
        </div>
        <nav className="section-nav" aria-label="Nội dung bài học">
          {(
            [
              { id: 'vocabulary', label: 'Từ vựng', icon: Layers },
              { id: 'grammar', label: 'Ngữ pháp', icon: BookOpen },
              { id: 'practice', label: 'Luyện tập', icon: PenLine },
            ] as const
          ).map((s) => (
            <Link
              key={s.id}
              className={section === s.id ? 'selected' : ''}
              aria-current={section === s.id ? 'page' : undefined}
              href={`/lessons/${lessonId}/${s.id}`}
            >
              <s.icon size={18} />
              {s.label}
              {s.id === 'vocabulary' && (
                <span className="count">{lesson.words.length}</span>
              )}
            </Link>
          ))}
        </nav>
        <div className="study-grid" id="lesson-content" tabIndex={-1}>
          <div className="study-main" key={`${lessonId}-${section}`}>
            {section === 'vocabulary' ? (
              <Flashcards lesson={lesson} />
            ) : section === 'grammar' ? (
              <Grammar lesson={lesson} />
            ) : (
              <Practice lesson={lesson} />
            )}
          </div>
          <aside className="study-aside">
            <div className="note-panel">
              <div className="note-label">
                <Sparkles size={17} /> GHI CHÚ NHỎ
              </div>
              {lessonId >= 12 ? (
                <>
                  <h3>
                    <JapaneseText text={details.tipTitle} />
                  </h3>
                  <p className="lesson-tip">
                    <JapaneseText text={details.tip} />
                  </p>
                </>
              ) : is10 ? (
                <>
                  <h3>
                    Có, nhưng dùng
                    <br />
                    từ nào?
                  </h3>
                  <div className="word-pair">
                    <span lang="ja">あります</span>
                    <p>
                      Đồ vật, cây cối
                      <br />
                      <span className="muted">Bàn, sách, hoa, công viên…</span>
                    </p>
                  </div>
                  <div className="word-pair">
                    <span lang="ja">います</span>
                    <p>
                      Người, động vật
                      <br />
                      <span className="muted">Bạn bè, mèo, chó…</span>
                    </p>
                  </div>
                  <div className="tip">
                    Cây có sự sống, nhưng vẫn dùng{' '}
                    <strong lang="ja">あります</strong> nhé.
                  </div>
                </>
              ) : (
                <>
                  <h3>
                    Đếm đúng,
                    <br />
                    nói tự nhiên.
                  </h3>
                  <div className="counter-list">
                    <div>
                      <span lang="ja">人</span>
                      <span>
                        Người<strong lang="ja">ひとり・ふたり</strong>
                      </span>
                    </div>
                    <div>
                      <span lang="ja">台</span>
                      <span>
                        Máy móc, xe cộ
                        <strong lang="ja">いちだい・にだい</strong>
                      </span>
                    </div>
                    <div>
                      <span lang="ja">枚</span>
                      <span>
                        Vật mỏng, phẳng
                        <strong lang="ja">いちまい・にまい</strong>
                      </span>
                    </div>
                  </div>
                  <div className="tip">
                    Bốn người là <strong lang="ja">よにん</strong>, không phải
                    よんにん.
                  </div>
                </>
              )}
            </div>
            {section === 'practice' ? (
              <div className="next-panel learning-note">
                <PenLine size={22} />
                <h3>
                  Thử nhớ trước.
                  <br />
                  Xem đáp án sau.
                </h3>
                <p>
                  <Check size={14} /> Trắc nghiệm chấm tự động
                </p>
                <p>
                  <Check size={14} /> Hai chiều dịch đều ghép từ
                </p>
                <p>
                  <Check size={14} /> Nghe câu Nhật và chọn nghĩa
                </p>
                <p>
                  <Check size={14} /> Giải thích sau từng câu
                </p>
                <p className="tip">
                  Mỗi câu có thêm các từ gây nhiễu để bạn phải nhớ đúng cả từ
                  lẫn thứ tự.
                </p>
              </div>
            ) : (
              <Link
                className="next-panel"
                href={`/lessons/${lessonId}/${section === 'vocabulary' ? 'grammar' : 'practice'}`}
              >
                <BookOpen size={22} />
                <h3>
                  {section === 'vocabulary' ? (
                    <>
                      Từ một từ,
                      <br />
                      đến một câu.
                    </>
                  ) : (
                    <>
                      Hiểu rồi,
                      <br />
                      thử ghép nhé.
                    </>
                  )}
                </h3>
                <p>
                  {section === 'vocabulary'
                    ? `Khám phá mẫu câu của bài ${lessonId}.`
                    : 'Luyện tập với 3 dạng câu hỏi.'}
                </p>
                <span>
                  {section === 'vocabulary' ? 'Học ngữ pháp' : 'Luyện tập ngay'}
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            )}
          </aside>
        </div>
        <footer className="site-footer">
          <span>
            minna studio <span className="footer-dot">•</span> Từng chút một,
            mỗi ngày.
          </span>
          <span>Nội dung luyện tập tự biên soạn · Bài 1–25</span>
        </footer>
        <details className="source-note">
          <summary>Về nội dung học & nguồn đối chiếu</summary>
          <p>
            Ứng dụng học bổ trợ độc lập, không phải sản phẩm chính thức của 3A
            Corporation. Từ vựng cốt lõi và mở rộng hội thoại bài 1–25; một số
            từ có thể khác giữa các ấn bản Minna no Nihongo. Ví dụ và câu hỏi do
            ứng dụng tự biên soạn, không chép bài tập trong sách.
          </p>
          <p>
            Đối chiếu phạm vi:{' '}
            <a href={details.grammarSource} target="_blank" rel="noreferrer">
              Riki — Bài {lessonId}
            </a>
            {lessonId <= 12 && (
              <>
                {' '}
                ·{' '}
                <a
                  href={`https://langoal.com/en/vocabulary/minna/${lessonId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Langoal — Từ vựng bài {lessonId}
                </a>
              </>
            )}
            .
          </p>
          <p>
            Phần dịch được luyện bằng cách sắp xếp các từ cho sẵn thành câu hoàn
            chỉnh. Tiến độ từ vựng lưu cục bộ trên trình duyệt; kết quả luyện
            tập chỉ giữ trong lượt hiện tại.
          </p>
        </details>
      </main>
    </div>
  );
}
