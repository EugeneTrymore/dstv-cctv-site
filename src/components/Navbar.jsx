import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>ClearView Security</span>
        </Link>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button className="theme-btn" onClick={toggleTheme}>
  {darkMode ? "☀️ Light" : "🌙 Dark"}
</button>
        </div>

      </div>
    </nav>
  );
}