import "../styles/Hero.css";
import Apply from "../components/Apply";

function Hero() {
  return (
    <div className="hero">
      <div className="texts">
        <p>SHARE</p>
        <p>YOUR</p>
        <p className="orange">ABILITY</p>
      </div>
      <Apply />
    </div>
  );
}

export default Hero;
