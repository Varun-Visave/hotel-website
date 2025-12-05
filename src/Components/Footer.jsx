export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Morya Food Point</h3>
          <p>Comfort, tasty food, and friendly care.</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            📞Phone:{" "}
            <a href="tel:+918149282506" style={{ color: "burlywood" }}>
              +91 8149282506
            </a>{" "}
            ,{" "}
            <a href="tel:+919370223442" style={{ color: "burlywood" }}>
              +91 9370223442
            </a>{" "}
          </p>
          <p>
            ✉️Email:{" "}
            <a
              href="mailto:moryafoodpoint@gmail.com"
              style={{ color: "burlywood" }}
            hat>
              moryafoodpoint@gmail.com
            </a>{" "}
          </p>
          <p>
            📍Address: ABC Junction, Akurdi Railway Station, Akurdi, Pune -
            411035
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 Morya Food Point. All rights reserved. • Made with love in
          India
        </p>
      </div>
    </footer>
  );
}
