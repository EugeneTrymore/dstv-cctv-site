import "./About.css";
import techImg from "../assets/technician.jpg";

export default function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>About ClearView Security</h1>
        <p>
          We provide professional DSTV and CCTV installation services across Cape Town,
          delivering reliable, affordable, and high-quality security solutions for homes
          and businesses.
        </p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            ClearView Security is a trusted local company specializing in CCTV systems,
            DSTV installations, and smart security solutions. We are committed to helping
            our clients feel safe and connected at all times.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to provide dependable and modern security solutions that give
            our clients peace of mind. We focus on quality installations, fast service,
            and long-term customer satisfaction.
          </p>
        </div>

        <div className="about-stats">
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
            <p>Customer Support</p>
          </div>
        </div>
      </section>

      <section className="about-why">
        <h2>Why Choose Us</h2>

        <div className="why-cards">
          <div className="why-card">✔ Professional Installation</div>
          <div className="why-card">✔ Affordable Pricing</div>
          <div className="why-card">✔ Fast Response Time</div>
          <div className="why-card">✔ Trusted Local Experts</div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Need a Security Solution?</h2>
        <p>Contact us today for a free quote and consultation.</p>
        <a href="/contact" className="cta-btn">Get a Quote</a>
      </section>

<div className="about-image">
  <img src={techImg} alt="Technician installing CCTV" />
</div>
    </div>
  );
}