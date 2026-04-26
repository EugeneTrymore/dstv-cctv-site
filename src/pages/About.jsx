import "./About.css";
import techImg from "../assets/technician.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
}
export default function About() {
  
  return (
   
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About ClearView Security</h1>
        <p>
          Professional CCTV, DSTV and smart security installations across Cape Town.
          We deliver reliable, modern solutions that protect what matters most.
        </p>
      </section>

      {/* CONTENT + IMAGE */}
      <section className="about-content">

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            ClearView Security is a trusted local company specializing in CCTV systems,
            DSTV installations and smart security solutions. We focus on clean, professional
            installations and long-term reliability.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple — deliver security solutions that give our clients
            confidence, control, and peace of mind every day.
          </p>
        </div>

        <div className="about-image">
          <img src={techImg} alt="Technician installing CCTV" />
        </div>

      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat">
          <h3>100+</h3>
          <p>Installations Completed</p>
        </div>

        <div className="stat">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="about-why">
        <h2>Why Choose Us</h2>

        <div className="why-cards">
          <div className="why-card">✔ Professional Installation</div>
          <div className="why-card">✔ Affordable Pricing</div>
          <div className="why-card">✔ Fast Response Time</div>
          <div className="why-card">✔ Trusted Local Experts</div>
        </div>
      </section>

      <section className="about-team">
  <h2>Meet Our Team</h2>

  <div className="team-grid">

    <div className="team-card">
      <img src="/team1.jpg" alt="Technician" />
      <h4>Lead Technician</h4>
      <p>Expert in CCTV installations and smart security systems.</p>
    </div>

    <div className="team-card">
      <img src="/team2.jpg" alt="Installer" />
      <h4>DSTV Specialist</h4>
      <p>Professional DSTV setups, signal repairs and upgrades.</p>
    </div>

    <div className="team-card">
      <img src="/team3.jpg" alt="Support" />
      <h4>Support & Maintenance</h4>
      <p>Ensuring systems run smoothly with fast response support.</p>
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Need a Security Solution?</h2>
        <p>Contact us today for a free quote.</p>
        <Link to="/contact" className="cta-btn">Get a Quote</Link>
      </section>

    </div>
  );
}