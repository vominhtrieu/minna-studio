import Link from './app-link';
import { ArrowRight } from 'lucide-react';
import type { Lesson } from '@/lib/lessons';
import JapaneseText from './japanese-text';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
export default function Grammar({ lesson }: { lesson: Lesson }) {
  return (
    <section>
      <div className="section-heading">
        <h2>Hiểu mẫu câu, nhớ cách dùng</h2>
        <span className="muted">{lesson.grammar.length} điểm ngữ pháp</span>
      </div>
      <p className="furigana-hint">
        Rê chuột hoặc chạm vào từ có Kanji để xem furigana. Có thể dùng Tab để
        chọn từ, Esc để đóng.
      </p>
      <div className="grammar-list">
        {lesson.grammar.map((g, i) => (
          <article className="grammar-card" key={g.title}>
            <div className="grammar-title">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{g.title}</h3>
            </div>
            <p className="formula">
              <JapaneseText text={g.formula} />
            </p>
            <p>
              <JapaneseText text={g.explanation} />
            </p>
            {g.details && (
              <div className="grammar-details">
                {g.details.map((detail) => (
                  <section className="grammar-detail" key={detail.title}>
                    <h4>
                      <JapaneseText text={detail.title} />
                    </h4>
                    <p>
                      <JapaneseText text={detail.explanation} />
                    </p>
                    {detail.table && (
                      <Table className="grammar-table">
                        <TableCaption>
                          <JapaneseText text={detail.table.caption} />
                        </TableCaption>
                        <TableHeader>
                          <TableRow>
                            {detail.table.headers.map((header) => (
                              <TableHead key={header} scope="col">
                                <JapaneseText text={header} />
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {detail.table.rows.map((row) => (
                            <TableRow key={row[0]}>
                              {row.map((cell, index) => (
                                <TableCell key={index}>
                                  <JapaneseText text={cell} />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                    {detail.examples.length > 0 && (
                      <ul>
                        {detail.examples.map((example) => (
                          <li key={example}>
                            <JapaneseText text={example} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}
            <div className="grammar-example">
              <p lang="ja">
                <JapaneseText text={g.example} />
              </p>
              <p>
                <JapaneseText text={g.translation} />
              </p>
            </div>
            <p className="grammar-caution">
              <strong>Lưu ý</strong> <JapaneseText text={g.caution} />
            </p>
          </article>
        ))}
      </div>
      <Link
        href={`/lessons/${lesson.id}/practice`}
        className="button primary grammar-cta"
      >
        Đưa mẫu câu vào luyện tập <ArrowRight size={18} />
      </Link>
    </section>
  );
}
