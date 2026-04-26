import "./Services.css";
import cctvImg from "../assets/cctv.jpg";
import dstvImg from "../assets/dstv.jpg";

export default function Services() {
  const services = [
    {
      title: "DSTV Installation",
      image: dstvImg,
      price: "From R499",
      items: ["New installations", "Extra View setup", "Signal repairs"],
      desc: "Crystal-clear DSTV installation with strong signal and professional setup.",
      icon: "📡",
    },
    {
      title: "CCTV Solutions",
      image: cctvImg,
      price: "From R999",
      items: ["Home cameras", "Business surveillance", "Remote viewing"],
      desc: "Smart CCTV systems with mobile access and 24/7 monitoring options.",
      icon: "🎥",
    },
  ];

  return (
    <div className="services-page">

      {/* HERO */}
      <div className="services-hero" data-aos="fade-up">
        <h1>Premium Security Services</h1>
        <p>
          Professional CCTV & DSTV installations designed for safety, reliability, and modern living.
        </p>
      </div>

      {/* SERVICES */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-card ${index % 2 === 0 ? "left" : "right"}`}
          data-aos="fade-up"
        >

          {/* IMAGE */}
          <div className="service-img">
            <img src={service.image} alt={service.title} />
            <span className="price-badge">{service.price}</span>
          </div>

          {/* CONTENT */}
          <div className="service-content">

            <div className="icon-title">
              <span className="icon">{service.icon}</span>
              <h2>{service.title}</h2>
            </div>

            <p className="desc">{service.desc}</p>

            <div className="features">
              {service.items.map((item, i) => (
                <div key={i} className="feature">
                  ✔ {item}
                </div>
              ))}
            </div>

            <a href="/contact" className="premium-btn">
              Get Free Quote →
            </a>

          </div>

        </div>
      ))}

      {/* EXTRA PREMIUM SECTION */}
      <div className="premium-extra" data-aos="fade-up">

        <div className="glass-box">
          <h2>Repair First Approach</h2>
          <p>
            We always try to repair before replacing — saving you money while keeping your system running.
          </p>
          <a href="/contact" className="premium-btn secondary">
            Request Repair
          </a>
        </div>

        <div className="glass-box">
          <h2>Fast Installation Process</h2>

          <div className="steps">
            <div>1. Contact Us</div>
            <div>2. Free Assessment</div>
            <div>3. Installation</div>
            <div>4. Support & Setup</div>
          </div>
        </div>

      </div>

    </div>
  );
}