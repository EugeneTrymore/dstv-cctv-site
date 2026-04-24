import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-security.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Professional Security Solutions</h1>
          <p>
            CCTV, DSTV & Smart Security systems installed fast and professionally.
          </p>

          <div className="hero-buttons">
            <a href="tel:+27700000000" className="call-btn">Call Now</a>
            <Link to="/contact" className="quote-btn">Get Quote</Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={heroImg} alt="Security System" />
        </motion.div>

      </div>
    </section>
  );
}