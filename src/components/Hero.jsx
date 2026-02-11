import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-top">
        <h1>MEMBERS</h1>

        <div className="hero-buttons">
          <button className="outline-btn">지원하기</button>
          <button className="outline-btn">
            더보기 →
          </button>
        </div>
      </div>

      <p className="hero-sub">
        MAS를 빛내고 지금까지<br />
        이끌어 온 부원들 입니다.
      </p>
    </section>
  );
}
