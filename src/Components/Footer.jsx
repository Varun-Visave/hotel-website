import { useLang } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>{t('site.title')}</h3>
          <p>Comfort, tasty food, and friendly care.</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <p>
            📞Phone:{' '}
            <a href="tel:+918149282506" style={{ color: 'burlywood' }}>
              +91 8149282506
            </a>{' '}
            ,{' '}
            <a href="tel:+919370223442" style={{ color: 'burlywood' }}>
              +91 9370223442
            </a>{' '}
          </p>
          <p>
            ✉️Email:{' '}
            <a href="mailto:moryafoodpoint@gmail.com" style={{ color: 'burlywood' }}>
              moryafoodpoint@gmail.com
            </a>{' '}
          </p>
          <p>
            📷Instagram:{' '}
            <a href="https://instagram.com/morya_food_point_" target="_blank" rel="noopener noreferrer" style={{ color: 'burlywood' }}>
              @morya_food_point_
            </a>
          </p>
          <p>
            📍Address: ABC Junction, Akurdi Railway Station, Akurdi, Pune -
            411035
          </p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.quickLinks')}</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">{t('footer.home')}</a>
            </li>
            <li>
              <a href="#menu">{t('footer.menu')}</a>
            </li>
            <li>
              <a href="#location">{t('footer.location')}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
