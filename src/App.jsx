import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import './styles.css'
import { useLang } from './contexts/LanguageContext'

function App() {
  const { t, lang } = useLang()

  useEffect(()=>{
    // Title and description
    document.title = `${t('site.title')} — ${t('hero.title')}`
    let desc = document.querySelector('meta[name="description"]')
    if(desc) desc.setAttribute('content', t('hero.sub'))

    // Open Graph / Twitter tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if(ogTitle) ogTitle.setAttribute('content', `${t('site.title')} — ${t('hero.title')}`)
    if(ogDesc) ogDesc.setAttribute('content', t('hero.sub'))
    if(twitterTitle) twitterTitle.setAttribute('content', `${t('site.title')} — ${t('hero.title')}`)
    if(twitterDesc) twitterDesc.setAttribute('content', t('hero.sub'))

    // JSON-LD: update structured data in page head
    const ld = document.getElementById('ld-json')
    if(ld){
      const json = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": t('site.title'),
        "description": t('hero.sub'),
        "url": document.querySelector('link[rel="canonical"]')?.getAttribute('href') || window.location.origin,
        "telephone": "+918149282506",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ABC Junction, Akurdi Railway Station",
          "addressLocality": "Akurdi, Pune",
          "postalCode": "411035",
          "addressCountry": "IN"
        }
      }
      ld.textContent = JSON.stringify(json, null, 2)
    }
  },[t, lang])

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default App
