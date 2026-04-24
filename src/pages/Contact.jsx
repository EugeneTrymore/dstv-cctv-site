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
          </div>
        </div>

        <form
          action="https://formspree.io/f/xgorreyd"
          method="POST"
          className="contact-form"
        >
          <input
           type="hidden" 
           name="_next" 
           value="http://localhost:5173/thank-you" 
           />
          <h2>Request a Quote</h2>

          <div className="form-group">
            <label>Your Name</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Send Request</button>
        </form>

      </div>
    </div>
  );
}