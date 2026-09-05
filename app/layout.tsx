import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Minna Studio · Học tiếng Nhật từng chút một',
  description:
    'Flashcard từ vựng và bài tập ngữ pháp tự soạn theo Minna no Nihongo bài 1 đến 25. Luyện trắc nghiệm, nghe hiểu, dịch Việt–Nhật, Nhật–Việt, số đếm và chia động từ.',
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
