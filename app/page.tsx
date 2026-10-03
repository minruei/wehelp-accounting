import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1>React 練習專案</h1>
      </header>

      <section className="welcome">
        <p>歡迎光臨我的頁面</p>
      </section>

      <div className="start">
        {/* 用 Link 換頁，套 btn 樣式看起來像按鈕 */}
        <Link href="/accounting" className="btn">
          點此開始
        </Link>
      </div>
    </main>
  );
}