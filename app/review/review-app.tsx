'use client';

import { ArrowLeft, BookOpen, Hash, RotateCcw } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { conjugationItemCount, counterItemCount } from '@/lib/drills';
import { reviewLesson, reviewTranslationCount } from '@/lib/review';
import Link from '../app-link';
import { CounterDrill, VerbDrill } from '../drills/drill-app';
import Practice from '../practice';

export default function ReviewApp() {
  const totalPractice =
    reviewLesson.choices.length + reviewTranslationCount * 3;

  return (
    <div className="drill-shell review-shell">
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
      <main className="review-workspace">
        <div className="drill-heading review-heading">
          <p className="eyebrow">TỔNG ÔN MINNA NO NIHONGO I</p>
          <h1>Toàn bộ N5 · Bài 1–25.</h1>
          <p>
            Ôn xen kẽ từ vựng, ngữ pháp, dịch, nghe, số đếm và chia động từ. Nội
            dung được trải đều qua 25 bài để phần đầu lượt học cũng không bị
            lệch về một bài riêng lẻ.
          </p>
        </div>
        <dl className="review-stats" aria-label="Phạm vi tổng ôn">
          <div>
            <dt>25</dt>
            <dd>bài Minna</dd>
          </div>
          <div>
            <dt>{reviewLesson.words.length}</dt>
            <dd>từ và cụm từ</dd>
          </div>
          <div>
            <dt>{reviewLesson.grammar.length}</dt>
            <dd>điểm ngữ pháp</dd>
          </div>
          <div>
            <dt>{totalPractice}</dt>
            <dd>câu tổng hợp</dd>
          </div>
        </dl>
        <Tabs defaultValue="mixed" className="drill-tabs review-tabs">
          <TabsList variant="line" aria-label="Chọn phần tổng ôn">
            <TabsTrigger value="mixed">
              <BookOpen /> Tổng hợp
            </TabsTrigger>
            <TabsTrigger value="counters">
              <Hash /> Số đếm
            </TabsTrigger>
            <TabsTrigger value="verbs">
              <RotateCcw /> Chia động từ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mixed" className="review-practice">
            <Practice
              lesson={reviewLesson}
              poolSize={reviewTranslationCount}
              review
            />
          </TabsContent>
          <TabsContent value="counters">
            <CounterDrill />
          </TabsContent>
          <TabsContent value="verbs">
            <VerbDrill />
          </TabsContent>
        </Tabs>
        <p className="review-coverage-note">
          Riêng hai chuyên đề bao phủ thêm {counterItemCount} trường hợp số đếm
          và {conjugationItemCount} tổ hợp chia động từ.
        </p>
      </main>
    </div>
  );
}
