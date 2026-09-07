import Link from './app-link';
export default function NotFound() {
  return (
    <main className="workspace">
      <h1>Bài học chưa có.</h1>
      <p>Hiện tại bạn có thể học từ bài 1 đến bài 50.</p>
      <Link className="button primary" href="/">
        Về trang chủ
      </Link>
    </main>
  );
}
