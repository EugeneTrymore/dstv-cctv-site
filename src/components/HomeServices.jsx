import "./HomeServices.css";
import { Link } from "react-router-dom";

export default function HomeServices() {
  const dstvServices = [
    { title: "New Installations", desc: "Professional DSTV setup for homes & businesses." },
    { title: "Extra View Setup", desc: "Connect multiple decoders seamlessly." },
    { title: "Signal Repairs", desc: "Fix weak or lost signal issues fast." },
  ];

  const cctvServices = [
    { title: "Home Installation", desc: "Secure your home with smart cameras." },
    { title: "Business Surveillance", desc: "Full monitoring systems for businesses." },
    { title: "Remote Viewing", desc: "Watch your property from anywhere." },
    { title: "Smart Integration", desc: "Connect CCTV with smart home devices." },
  ];

  return (
    <section className="home-services">
      <div className="container">
        <h2>Our Services</h2>

        {/* DSTV */}
        <div className="service-category">
          <h3>📡 DSTV Services</h3>

          <div className="cards">
            {dstvServices.map((service, index) => (
              <div key={index} className="card">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>

                <Link to="/contact" className="card-btn">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CCTV */}
        <div className="service-category">
          <h3>📷 CCTV Services</h3>

          <div className="cards">
            {cctvServices.map((service, index) => (
              <div key={index} className="card">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>

                <Link to="/contact" className="card-btn">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}