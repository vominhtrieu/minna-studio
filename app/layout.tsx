import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Minna Studio · Học tiếng Nhật từng chút một',
  description:
    'Học Minna no Nihongo I và II, bài 1 đến 50 (N5–N4): flashcard, ngữ pháp, trắc nghiệm, nghe hiểu, ghép câu Việt–Nhật, Nhật–Việt, số đếm và chia động từ.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
