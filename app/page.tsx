import { ArrowUpRight, BookOpen, Layers, PenLine, Sigma } from 'lucide-react';
import { n5LessonIds, n4LessonIds, lessons } from '@/lib/lessons';
import { lessonDetails } from '@/lib/lesson-details';
import Link from './app-link';
import SiteHeader from './site-header';

export default function Home() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#all-lessons">
        Đến danh sách bài học
      </a>
      <SiteHeader current="home" />
      <main className="workspace home-workspace">
        <div className="home-heading">
          <p className="eyebrow">MINNA NO NIHONGO I & II</p>
          <h1>Tất cả bài học.</h1>
          <p>
            50 bài học từ sơ cấp I đến sơ cấp II. Chọn bài và phần bạn muốn học
            hôm nay.
          </p>
        </div>
        <nav className="book-jumps" aria-label="Chọn quyển sách">
          <a href="#minna-i">
            Sơ cấp I · N5 <span>Bài 1–25</span>
          </a>
          <a href="#minna-ii">
            Sơ cấp II · N4 <span>Bài 26–50</span>
          </a>
        </nav>
        <div className="home-extras">
          <Link href="/review" className="home-extra home-extra-review">
            <BookOpen size={24} />
            <span>
              <strong>Tổng ôn N5</strong>
              <span>Ôn kiến thức của cả 25 bài</span>
            </span>
            <ArrowUpRight size={20} />
          </Link>
          <Link href="/drills" className="home-extra">
            <Sigma size={24} />
            <span>
              <strong>Luyện chuyên đề</strong>
              <span>Số đếm và chia động từ</span>
            </span>
            <ArrowUpRight size={20} />
          </Link>
        </div>
        <section
          id="all-lessons"
          className="lesson-catalog"
          aria-label="Danh sách 50 bài học"
          tabIndex={-1}
        >
          {[
            {
              id: 'minna-i',
              title: 'Sơ cấp I · N5',
              range: 'Minna no Nihongo I · Bài 1–25',
              ids: n5LessonIds,
            },
            {
              id: 'minna-ii',
              title: 'Sơ cấp II · N4',
              range: 'Minna no Nihongo II · Bài 26–50',
              ids: n4LessonIds,
            },
          ].map((book) => (
            <section
              key={book.id}
              id={book.id}
              className="book-section"
              aria-labelledby={`${book.id}-title`}
            >
              <div className="book-heading">
                <h2 id={`${book.id}-title`}>{book.title}</h2>
                <p>{book.range}</p>
              </div>
              <ol className="lesson-grid" start={book.ids[0]}>
                {book.ids.map((id) => {
                  const lesson = lessons[id];
                  const details = lessonDetails[id];
                  return (
                    <li key={id}>
                      <article
                        className="lesson-tile"
                        aria-labelledby={`lesson-${id}-title`}
                      >
                        <div className="lesson-tile-top">
                          <span className="lesson-number">
                            {String(id).padStart(2, '0')}
                          </span>
                          <span lang="ja">第{id}課</span>
                        </div>
                        <h3 id={`lesson-${id}-title`}>
                          <Link href={`/lessons/${id}/vocabulary`}>
                            <span className="lesson-tile-label">Bài {id}</span>
                            {details.title}
                          </Link>
                        </h3>
                        <p className="lesson-description">
                          {details.description}
                        </p>
                        <p className="lesson-tile-meta">
                          {lesson.words.length} từ vựng{' '}
                          <span aria-hidden="true">·</span>{' '}
                          {lesson.grammar.length} điểm ngữ pháp
                        </p>
                        <nav
                          className="lesson-tile-links"
                          aria-label={`Nội dung bài ${id}`}
                        >
                          <Link
                            href={`/lessons/${id}/vocabulary`}
                            aria-label={`Từ vựng bài ${id}`}
                          >
                            <Layers size={16} /> Từ vựng
                          </Link>
                          <Link
                            href={`/lessons/${id}/grammar`}
                            aria-label={`Ngữ pháp bài ${id}`}
                          >
                            <BookOpen size={16} /> Ngữ pháp
                          </Link>
                          <Link
                            href={`/lessons/${id}/practice`}
                            aria-label={`Luyện tập bài ${id}`}
                          >
                            <PenLine size={16} /> Luyện tập
                          </Link>
                        </nav>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}
        </section>
        <footer className="site-footer">
          <span>
            minna studio <span className="footer-dot">•</span> Từng chút một,
            mỗi ngày.
          </span>
          <span>Nội dung luyện tập tự biên soạn · Bài 1–50</span>
        </footer>
      </main>
    </div>
  );
}
