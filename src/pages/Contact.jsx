import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-info">
          <h1>Get a Free Quote</h1>
          <p>
            Need CCTV or DSTV installation in Cape Town?  
            Fill in the form and we’ll contact you shortly.
          </p>

          <div className="info-box">
            <p>📞 +27 64 600 3542</p>
            <p>📧 info@clearviewsecurity.co.za</p>
            <p>📍 Cape Town, Western Cape</p>
            <p className="form-note">
  ⚡ We usually respond within 30 minutes (even faster on WhatsApp)
</p>
          </div>
        </div>
  

        <form
  action="https://formspree.io/f/xgorreyd"
  method="POST"
  className="contact-form"
>
  {/* Redirect after submit */}
  <input
    type="hidden"
    name="_next"
    value="https://your-site.vercel.app/thank-you"
  />

  <h2>Request a Quote</h2>

  {/* NAME */}
  <div className="form-group">
    <label>Your Name</label>
    <input type="text" name="name" placeholder="John Doe" required />
  </div>

  {/* PHONE */}
  <div className="form-group">
    <label>Phone Number</label>
    <input type="tel" name="phone" placeholder="+27..." required />
  </div>

  {/* EMAIL (NEW) */}
  <div className="form-group">
    <label>Email Address</label>
    <input type="email" name="email" placeholder="you@email.com" required />
  </div>

  {/* SERVICE TYPE (VERY IMPORTANT) */}
  <div className="form-group">
    <label>Service Needed</label>
    <select name="service" required>
      <option value="">Select a service</option>
      <option>DSTV Installation</option>
      <option>CCTV Installation</option>
      <option>Repairs / Maintenance</option>
    </select>
  </div>

  {/* MESSAGE */}
  <div className="form-group">
    <label>Your Message</label>
    <textarea
      name="message"
      rows="4"
      placeholder="Tell us what you need..."
      required
    ></textarea>
  </div>

  <button type="submit">Get Free Quote</button>
</form>

      </div>
    </div>
  );
}