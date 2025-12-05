import { useEffect, useState } from "react";
import MenuSlider from "./MenuSlider";
import diningImage from "../assets/dining.png"

export default function Body() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // smooth scroll for internal links
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    function handler(e) {
      const href = this.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    }
    anchors.forEach((a) => a.addEventListener("click", handler));

    function onScroll() {
      setShowTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handler));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main id="main">
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to Morya Food Point — Authentic Indian Restaurant & Takeaway
            </h1>
            <p className="hero-sub">
              Savour freshly prepared homestyle Indian dishes — dine-in, takeaway,
              or catering for events. Warm hospitality and honest prices.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#menu">
                View Menu
              </a>
              <a
                className="btn ghost"
                href="tel:+919876543210"
                aria-label="Call Morya Food Point at +91 98765 43210"
              >
                Call Now
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img
              src={diningImage}
              alt="Dining at Morya Food Point"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="features" className="features">
          <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-sub">
            Delicious meals and convenient services — tailored for daily diners, students, and events.
          </p>
          <div className="cards">
            <article className="card">
              <div className="icon" aria-hidden="true">🍳</div>
              <h3>All-Day Meals & Specials</h3>
              <p>Breakfast, lunch and dinner available daily — plus special Sunday menus to try each week.</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">📦</div>
              <h3>Parcel & Delivery</h3>
              <p>Parcel services and takeaway available — delivery parcels are free up to 5km.</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">🍱</div>
              <h3>Monthly Mess & Tiffin Plans</h3>
              <p>Subscribe to monthly mess plans or daily tiffin service for convenient homestyle meals.</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">🎓</div>
              <h3>Dine-In & Student Benefits</h3>
              <p>Cozy dine-in experience with special student discounts to keep meals affordable.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container">
          <h2 className="section-title">Menu</h2>
          <p className="section-sub">
            Good food, fair prices. Use the arrows or dots to see each section.
          </p>
          <div className="menu-wrap">
            <MenuSlider />
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <div className="test-list">
            <blockquote className="test-card">
              <p>
                Food was very tasty and the staff was kind. I felt at home here.
              </p>
              <footer>— Rahul Sharma, Pune</footer>
            </blockquote>

            <blockquote className="test-card">
              <p>
                The food is delicious and the location is easy to find. Great experience.
              </p>
              <footer>— Priya Nair, Local guest</footer>
            </blockquote>

            <blockquote className="test-card">
              <p>I liked the biryani and the quick service. Will come again.</p>
              <footer>— Amit Verma, Nashik</footer>
            </blockquote>

            <blockquote className="test-card">
              <p>
                Nice place for family dinner. Kids liked the food and smiles.
              </p>
              <footer>— Sneha Kulkarni, Pune</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="location" className="location">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <p className="section-sub">
            We are easy to find and near the main road. Come visit us for food
            and events.
          </p>
          <div className="map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d977.0774112537462!2d73.7656911!3d18.6491939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9004d1ad7e5%3A0xf3bbf4a3f07fc358!2sMorya%20Food%20Point!5e1!3m2!1sen!2sin!4v1764965939925!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>  
          </div>
        </div>
      </section>
      <button
        className={`scroll-top ${showTop ? "show" : ""}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </main>
  );
}
