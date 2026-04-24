import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John M.",
      text: "Excellent DSTV installation. Fast and professional service!",
    },
    {
      name: "Sarah K.",
      text: "My CCTV system works perfectly. I can monitor my shop from my phone.",
    },
    {
      name: "David L.",
      text: "Very reliable team. Affordable and high-quality work.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}