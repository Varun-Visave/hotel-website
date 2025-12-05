import { useState } from "react";
import logo from "../assets/logo.png";
import { useLang } from "../contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  function handleClick(e, href) {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src={logo} alt={`${t("site.title")} logo`} className="logo" />
          <div>
            <h1 className="site-title">{t("site.title")}</h1>
            <p className="tagline">{t("site.tagline")}</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <button
            className="nav-toggle"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="hamburger" />
          </button>

          <ul className={`nav-list ${open ? "show" : ""}`}>
            <li>
              <a href="#home" onClick={(e) => handleClick(e, "#home")}>
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#features" onClick={(e) => handleClick(e, "#features")}>
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => handleClick(e, "#menu")}>
                {t("nav.menu")}
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => handleClick(e, "#testimonials")}
              >
                {t("nav.testimonials")}
              </a>
            </li>
            <li>
              <a href="#location" onClick={(e) => handleClick(e, "#location")}>
                {t("nav.location")}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
                {t("nav.contact")}
              </a>
            </li>
            <button
              className="lang-toggle"
              aria-label={
                lang === "en" ? "Switch to Marathi" : "Switch to English"
              }
              onClick={() => setLang(lang === "en" ? "mr" : "en")}
            >
              {lang === "en" ? "मराठी" : "EN"}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
