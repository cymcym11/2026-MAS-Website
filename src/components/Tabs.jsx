import "../styles/Tabs.css";

export default function Tabs() {
  return (
    <div className="tabs">
      <a href="/4th" className="tab">4기</a>
      <a href="/5th" className="tab active">5기</a>
      <a href="/6th" className="tab">6기</a>
    </div>
  );
}
