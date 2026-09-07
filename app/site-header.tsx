import { BookOpen, LayoutGrid, Sigma } from 'lucide-react';
import Link from './app-link';

export default function SiteHeader({
  current,
}: {
  current?: 'home' | 'review' | 'drills';
}) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Minna Studio — Trang chủ">
        <span className="brand-mark" aria-hidden="true">
          み
        </span>
        <span>
          minna<span className="brand-light"> studio</span>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Điều hướng chính">
        <Link href="/" aria-current={current === 'home' ? 'page' : undefined}>
          <LayoutGrid size={17} /> Trang chủ
        </Link>
        <Link
          href="/review"
          aria-current={current === 'review' ? 'page' : undefined}
        >
          <BookOpen size={17} /> Tổng ôn N5
        </Link>
        <Link
          href="/drills"
          aria-current={current === 'drills' ? 'page' : undefined}
        >
          <Sigma size={17} /> Luyện chuyên đề
        </Link>
      </nav>
    </header>
  );
}
