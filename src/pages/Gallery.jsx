import "./Gallery.css";
import { useState } from "react";

// IMPORT IMAGES
import cctv1 from "../assets/cctv.jpg";
import cctv2 from "../assets/technician.jpg";
import dstv1 from "../assets/dstv.jpg";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const images = [
    { src: cctv1, category: "cctv" },
    { src: cctv2, category: "cctv" },
    { src: dstv1, category: "dstv" },
  ];

  const filteredImages =
    filter === "all"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <div className="gallery-page">
      <h1>Our Work</h1>
      <p className="subtitle">
        Real installations. Real results.
      </p>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "cctv" ? "active" : ""}
          onClick={() => setFilter("cctv")}
        >
          CCTV
        </button>

        <button
          className={filter === "dstv" ? "active" : ""}
          onClick={() => setFilter("dstv")}
        >
          DSTV
        </button>
      </div>

      {/* GALLERY */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelected(img.src)}
          >
            <img src={img.src} alt={img.category} />
            <div className="overlay">
              <p>{img.category.toUpperCase()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-content">
            <img src={selected} alt="Large view" />
          </div>
        </div>
      )}
    </div>
  );
}