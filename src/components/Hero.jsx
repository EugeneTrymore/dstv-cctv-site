import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Professional Security Solutions</h1>

          <p>
            ClearView Security provides CCTV, DSTV, and smart security
            installations across Cape Town. Reliable, affordable, and fast.
          </p>

          <div className="hero-buttons">
            <a href="tel:+27646003542" className="btn">
              📞 Call Now
            </a>

            <Link to="/contact" className="btn secondary">
              💬 Get a Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}