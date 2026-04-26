import "./Gallery.css";
import { useState } from "react";
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";
import g5 from "../assets/gallery5.jpg";
import g6 from "../assets/gallery6.jpg";
import g7 from "../assets/alarm1.jpg";
import g8 from "../assets/alarm2.jpg";
import g9 from "../assets/alarm3.jpg";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

 const projects = [
  // ================= CCTV (3) =================
  {
    title: "Retail camera refresh",
    type: "CCTV",
    location: "Cape Town",
    desc: "Full dome camera setup with mobile viewing.",
    image: g5,
  },
  {
    title: "Office CCTV installation",
    type: "CCTV",
    location: "Cape Town",
    desc: "Multi-camera system with remote access.",
    image: g4,
  },
  {
    title: "Warehouse surveillance",
    type: "CCTV",
    location: "Cape Town",
    desc: "Wide coverage security system.",
    image: g5,
  },

  // ================= DSTV (3) =================
  {
    title: "Townhouse DSTV alignment",
    type: "DSTV",
    location: "Cape Town",
    desc: "Signal restoration and clean installation.",
    image: g7,
  },
  {
    title: "Apartment DSTV setup",
    type: "DSTV",
    location: "Cape Town",
    desc: "Clean dish installation with HD signal.",
    image: g2,
  },
  {
    title: "DSTV signal repair",
    type: "DSTV",
    location: "Cape Town",
    desc: "Quick fix and signal boost service.",
    image: g6,
  },

  // ================= ALARM (3) =================
  {
    title: "Perimeter alarm upgrade",
    type: "Alarm",
    location: "Cape Town",
    desc: "Outdoor beams with night detection.",
    image: g7,
  },
  {
    title: "Home alarm system",
    type: "Alarm",
    location: "Cape Town",
    desc: "Indoor + outdoor smart alarm system.",
    image: g8,
  },
  {
    title: "Business alarm installation",
    type: "Alarm",
    location: "Cape Town",
    desc: "Full security alarm setup for offices.",
    image: g9,
  },
];
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="gallery-page">

      {/* SEARCH + FILTER */}
      <div className="gallery-top">

        <input
          type="text"
          placeholder="Search by project type or area"
          className="search"
        />

        <div className="filters">
          {["All", "CCTV", "DSTV", "Alarm"].map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

      </div>

      {/* CARDS */}
      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <div key={i} className="gallery-card">

            <div
              className="card-top"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <span className="tag">{item.type}</span>
              <h3>{item.title}</h3>
            </div>

            <div className="card-bottom">
              <h4>{item.location}</h4>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}