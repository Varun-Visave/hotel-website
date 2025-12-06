import { useEffect, useState, useRef } from "react";
import MenuSlider from "./MenuSlider";
import diningImage from "../assets/dining.png"
import { useLang } from '../contexts/LanguageContext'

export default function Body() {
  const [showTop, setShowTop] = useState(false);
  const { t } = useLang()
  const mapRef = useRef(null)
  const mapBase = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d977.0774112537462!2d73.7656911!3d18.6491939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9004d1ad7e5%3A0xf3bbf4a3f07fc358!2sMorya%20Food%20Point!5e1!3m2!1sen!2sin!4v1764965939925!5m2!1sen!2sin"
  const [mapSrc, setMapSrc] = useState(mapBase)

  useEffect(()=>{
    // Retry logic: if iframe doesn't fire 'load' (maps failing to load), reload iframe
    let attempts = 0
    const maxAttempts = 5
    const delays = [3000, 6000, 12000, 24000, 48000] // ms
    let retryTimer = null

    function clearRetry(){ if(retryTimer){ clearTimeout(retryTimer); retryTimer = null } }

    function onLoad(){
      // loaded successfully - stop retries
      clearRetry()
      attempts = maxAttempts
    }

    function scheduleRetry(){
      if(attempts >= maxAttempts) return
      const delay = delays[Math.min(attempts, delays.length-1)]
      retryTimer = setTimeout(()=>{
        // add cache-busting query so browser attempts a fresh fetch
        attempts += 1
        setMapSrc(`${mapBase}&_reload=${Date.now()}&attempt=${attempts}`)
        scheduleRetry()
      }, delay)
    }

    const iframe = mapRef.current
    iframe && iframe.addEventListener('load', onLoad)

    // initial check: if not loaded within 5s, start retrying
    retryTimer = setTimeout(()=>{
      if(attempts === 0){
        attempts = 1
        setMapSrc(`${mapBase}&_reload=${Date.now()}&attempt=${attempts}`)
        scheduleRetry()
      }
    }, 5000)

    return ()=>{
      clearRetry()
      iframe && iframe.removeEventListener('load', onLoad)
    }
  }, [mapBase])

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
            <h1 className="hero-title">{t('hero.title')}</h1>
            <p className="hero-sub">{t('hero.sub')}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#menu">{t('cta.viewMenu')}</a>
              <a
                className="btn ghost"
                href="tel:+919370223442"
                aria-label={t('cta.callNow') + ' +91 98765 43210'}
              >
                {t('cta.callNow')}
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
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-sub">{t('features.sub')}</p>
          <div className="cards">
            <article className="card">
              <div className="icon" aria-hidden="true">🍳</div>
              <h3>{t('features.card1.title')}</h3>
              <p>{t('features.card1.desc')}</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">📦</div>
              <h3>{t('features.card2.title')}</h3>
              <p>{t('features.card2.desc')}</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">🍱</div>
              <h3>{t('features.card3.title')}</h3>
              <p>{t('features.card3.desc')}</p>
            </article>

            <article className="card">
              <div className="icon" aria-hidden="true">🎓</div>
              <h3>{t('features.card4.title')}</h3>
              <p>{t('features.card4.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="menu" className="menu">
        <div className="container">
          <h2 className="section-title">{t('menu.title')}</h2>
          <p className="section-sub">{t('menu.sub')}</p>
          <div className="menu-wrap">
            <MenuSlider />
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">{t('testimonials.title')}</h2>
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
          <h2 className="section-title">{t('location.title')}</h2>
          <p className="section-sub">{t('location.sub')}</p>
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
