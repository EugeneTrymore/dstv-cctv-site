// src/components/HomeServices.jsx
import "./HomeServices.css";

export default function HomeServices() {
  const dstvServices = [
    "New installations",
    "Extra View setup",
    "Signal repairs",
  ];

  const cctvServices = [
    "Home camera installation",
    "Business surveillance",
    "Remote viewing",
    "Smart home integration",
    "Fire alarm monitoring",
    "Gate automation",
  ];

  return (
    <section className="home-services">
      <div className="container">
        <h2>Our Services</h2>

        <div className="service-category">
          <h3>DSTV Services</h3>
          <div className="cards">
            {dstvServices.map((service, index) => (
              <div key={index} className="card">{service}</div>
            ))}
          </div>
        </div>

        <div className="service-category">
          <h3>CCTV Services</h3>
          <div className="cards">
            {cctvServices.map((service, index) => (
              <div key={index} className="card">{service}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
