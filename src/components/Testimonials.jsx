import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Naledi Mokoena",
      role: "Boutique owner, Bedfordview",
      text: "They cleaned up old wiring, installed eight cameras and made the remote view app simple enough for the whole team to use.",
    },
    {
      name: "Teboho Dlamini",
      role: "Homeowner, Midrand",
      text: "Our DSTV signal kept dropping after storms. ClearView replaced the damaged fittings and the picture has been perfect since.",
    },
    {
      name: "Ridwaan Patel",
      role: "Warehouse supervisor, Jet Park",
      text: "Fast turnaround, solid advice and a tidy installation. The night vision coverage around our loading area is excellent.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonial-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            
            {/* ⭐ Stars */}
            <div className="stars">★★★★★</div>

            {/* 💬 Text */}
            <p className="testimonial-text">"{review.text}"</p>

            <hr />

            {/* 👤 Name */}
            <h4>{review.name}</h4>
            <span>{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}