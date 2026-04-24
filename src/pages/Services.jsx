import "./Services.css";
import cctvImg from "../assets/cctv.jpg";
import dstvImg from "../assets/dstv.jpg";

export default function Services() {
  const services = [
    {
      title: "DSTV Installation",
      image: dstvImg,
      items: ["New installations", "Extra View setup", "Signal repairs"],
    },
    {
      title: "CCTV Solutions",
      image: cctvImg,
      items: [
        "Home camera installation",
        "Business surveillance",
        "Remote viewing",
      ],
    },
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>

      {services.map((service, index) => (
        <div key={index} className="service-block">
          <img src={service.image} alt={service.title} />

          <div>
            <h2>{service.title}</h2>

            <div className="cards">
              {service.items.map((item, i) => (
                <div key={i} className="card">{item}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}