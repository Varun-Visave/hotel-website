import { createContext, useContext, useState, useMemo } from 'react'

const LanguageContext = createContext(null)

const translations = {
  en: {
    site: { title: 'Morya Food Point', tagline: 'Comfort • Tasty Food • Warm Service' },
    nav: {
      home: 'Home',
      services: 'Services',
      menu: 'Menu',
      testimonials: 'Testimonials',
      location: 'Location',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu'
    },
    hero: {
      title: 'Welcome to Morya Food Point — Authentic Indian Restaurant & Takeaway',
      sub: 'Savour freshly prepared homestyle Indian dishes — dine-in, takeaway, or catering for events. Warm hospitality and honest prices.'
    },
    cta: {
      viewMenu: 'View Menu',
      callNow: 'Call Now'
    },
    features: {
      title: 'Our Services',
      sub: 'Delicious meals and convenient services — tailored for daily diners, students, and events.',
      card1: { title: 'All-Day Meals & Specials', desc: 'Breakfast, lunch and dinner available daily — plus special Sunday menus to try each week.' },
      card2: { title: 'Parcel & Delivery', desc: 'Parcel services and takeaway available — delivery parcels are free up to 5km.' },
      card3: { title: 'Monthly Mess & Tiffin Plans', desc: 'Subscribe to monthly mess plans or daily tiffin service for convenient homestyle meals.' },
      card4: { title: 'Dine-In & Student Benefits', desc: 'Cozy dine-in experience with special student discounts to keep meals affordable.' }
    },
    menu: {
      title: 'Menu',
      sub: 'Good food, fair prices. Use the arrows or dots to see each section.',
      sections: {
        SnackAndBreakfast: 'Snack & Breakfast',
        Thali: 'Thali',
        Drinks: 'Drinks',
        ParathaRoti: 'Paratha & Roti',
        RiceAndBiryani: 'Rice & Biryani',
        VegMainCourse: 'Veg Main Course',
        NonVegMainCourse: 'Non-Veg Main Course'
      },
      prev: 'Previous section',
      next: 'Next section',
      show: 'Show'
    },
    testimonials: { title: 'What Our Guests Say' },
    location: { title: 'Find Us', sub: 'We are easy to find and near the main road. Come visit us for food and events.' },
    footer: {
      contact: 'Contact',
      quickLinks: 'Quick Links',
      home: 'Home',
      menu: 'Menu',
      location: 'Location',
      copyright: '© 2025 Morya Food Point. All rights reserved. • Made with love in India'
    },
    misc: { scrollTop: 'Scroll to top' }
  },
  mr: {
    site: { title: 'मोर्या फूड पॉईंट', tagline: 'आरामदायी • चविष्ट अन्न • आपुलकीची सेवा' },
    nav: {
      home: 'मुख्यपृष्ठ',
      services: 'सेवा',
      menu: 'मेनू',
      testimonials: 'प्रशंसापत्रे',
      location: 'स्थान',
      contact: 'संपर्क',
      openMenu: 'मेनू उघडा',
      closeMenu: 'मेनू बंद करा'
    },
    hero: {
      title: 'मोर्या फूड पॉईंट- प्रामाणिक भारतीय रेस्टॉरंट व टेकेअवे',
      sub: 'ताज्या, घरच्या चवीसारख्या भारतीय पदार्थांचा आस्वाद घ्या — येथे यावे, घ्यावे किंवा कार्यक्रमांसाठी केटरिंग.'
    },
    cta: {
      viewMenu: 'मेनू बघा',
      callNow: 'आता कॉल करा'
    },
    features: {
      title: 'आमच्या सेवा',
      sub: 'रोजचे जेवण आणि सोयीच्या सेवा — विद्यार्थी व कार्यक्रमांसाठी उपयुक्त.',
      card1: { title: 'संपूर्ण दिवस जेवण व खास पदार्थ', desc: 'नित्य नाश्ता, दुपारचे जेवण आणि रात्रीचे जेवण उपलब्ध — दर रविवार विशेष मेनू.' },
      card2: { title: 'पार्सल व डिलिव्हरी', desc: 'पार्सल सेवा व टेकअवे — 5 किमीपर्यंत डिलिव्हरी मोफत.' },
      card3: { title: 'मासिक मेस व टिफिन योजना', desc: 'मासिक मेस योजना किंवा दैनंदिन टिफिन सेवेसाठी सदस्यता घ्या.' },
      card4: { title: 'डाईन-इन व विद्यार्थी सूट', desc: 'आनंदी डाईन-इन वातावरण व विद्यार्थ्यांसाठी सवलत.' }
    },
    menu: {
      title: 'मेनू',
      sub: 'छान जेवण, योग्य दर. विभाग बघण्यासाठी अ‍ॅरो किंवा डॉट्स वापरा.',
      sections: {
        SnackAndBreakfast: 'स्नॅक व नाश्ता',
        Thali: 'थाळी',
        Drinks: 'पेय',
        ParathaRoti: 'पराठा व पोळी',
        RiceAndBiryani: 'भात व बिर्याणी',
        VegMainCourse: 'शाकाहारी मुख्य पदार्थ',
        NonVegMainCourse: 'नॉन-व्हेज मुख्य पदार्थ'
      },
      prev: 'मागील भाग',
      next: 'पुढचा भाग',
      show: 'दाखवा'
    },
    testimonials: { title: 'आमच्या पाहुण्यांचे मत' },
    location: { title: 'आम्हाला शोधा', sub: 'आम्हाला शोधणे सोपे आहे आणि मुख्य रस्त्यास जवळ आहे. जेवण व कार्यक्रमांसाठी भेट द्या.' },
    footer: {
      contact: 'संपर्क',
      quickLinks: 'लवकर दुवे',
      home: 'मुख्यपृष्ठ',
      menu: 'मेनू',
      location: 'स्थान',
      copyright: '© 2025 मोर्या फूड पॉईंट. सर्व हक्क राखीव.'
    },
    misc: { scrollTop: 'वर जा' }
  }
}

export function LanguageProvider({ children }){
  const [lang, setLang] = useState('en')

  const value = useMemo(()=> {
    function t(path){
      if(!path) return ''
      const parts = path.split('.')
      let cur = translations[lang]
      for(const p of parts){
        if(!cur) return undefined
        cur = cur[p]
      }
      return cur ?? path
    }
    return { lang, setLang, t }
  },[lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(){
  const ctx = useContext(LanguageContext)
  if(!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export default LanguageContext
