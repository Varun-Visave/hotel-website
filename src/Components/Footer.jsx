export default function Footer(){
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Morya Food Point</h3>
          <p>Comfort, tasty food, and friendly care.</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Phone: +91 98 7654 3210</p>
          <p>Email: hello@moryafoodpoint.example</p>
          <p>Address: Near Main Road, Your City, India</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Morya Food Point. All rights reserved. • Made with love in India</p>
      </div>
    </footer>
  )
}
