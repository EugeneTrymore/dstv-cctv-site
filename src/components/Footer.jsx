import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h3>ClearView Secure</h3>
          <p className="tagline">Protection with sharp detail</p>

          <p>
            Trusted installation support for CCTV, DSTV, alarm systems,
            electric fencing and smart access control.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>CONTACT</h4>

          <a href="tel:+27671234567">📞 +27 67 123 4567</a>

          <a href="mailto:info@clearviewsecurity.co.za">
            📧 info@clearviewsecurity.co.za
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Cape+Town"
            target="_blank"
          >
            📍 Cape Town, South Africa
          </a>
        </div>

        {/* HOURS */}
        <div className="footer-col">
          <h4>HOURS</h4>
          <p>Mon - Fri: 08:00 - 18:00</p>
          <p>Saturday: 08:00 - 14:00</p>
          <p>Emergency call-outs available</p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>

          <Link to="/services">Security Installations</Link>
          <Link to="/gallery">Project Gallery</Link>
          <Link to="/about">Why Choose Us</Link>
          <Link to="/contact">Request a Call Back</Link>
        </div>

      </div>

    </footer>
  );
}