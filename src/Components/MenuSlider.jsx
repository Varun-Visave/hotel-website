import { useState, useMemo, useRef } from 'react'
import menuData from '../data/alldata'
import { useLang } from '../contexts/LanguageContext'

export default function MenuSlider(){
  // sections from data object
  const sections = useMemo(()=> Object.keys(menuData),[])
  const { t } = useLang()
  const [index, setIndex] = useState(0)
  // Touch handling refs for swipe support on mobile
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)

  function handleTouchStart(e){
    const t0 = e.touches[0]
    touchStartX.current = t0.clientX
    touchStartY.current = t0.clientY
    touchMoved.current = false
  }

  function handleTouchMove(e){
    // mark as moved if horizontal movement detected
    const t0 = e.touches[0]
    const dx = Math.abs(t0.clientX - touchStartX.current)
    const dy = Math.abs(t0.clientY - touchStartY.current)
    if(dx > 10 && dx > dy) touchMoved.current = true
  }

  function handleTouchEnd(e){
    if(!touchMoved.current) return
    // On touchend, use changedTouches if available (some browsers)
    const t = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0] : (e.touches && e.touches[0])
    if(!t) return
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - touchStartY.current
    // require mostly horizontal swipe and reasonable distance
    const absDx = Math.abs(dx)
    if(absDx > 50 && absDx > Math.abs(dy)){
      if(dx < 0) {
        // swipe left -> next
        next()
      } else {
        // swipe right -> prev
        prev()
      }
    }
  }

  function prev(){ setIndex(i => (i - 1 + sections.length) % sections.length) }
  function next(){ setIndex(i => (i + 1) % sections.length) }

  return (
    <div className="menu-slider" aria-roledescription="carousel">
      <div className="menu-header">
        <h3 className="category-title">{t(`menu.sections.${sections[index]}`) || sections[index].replace(/([A-Z])/g,' $1').trim()}</h3>
        <div className="controls">
          <button className="icon-btn" onClick={prev} aria-label={t('menu.prev')}>‹</button>
          <button className="icon-btn" onClick={next} aria-label={t('menu.next')}>›</button>
        </div>
      </div>

      <div className="slides-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slides" style={{transform:`translateX(-${index * 100}%)`}}>
          {sections.map((key, i) => (
            <section key={key} className="slide" aria-hidden={i!==index} aria-roledescription="slide">
              <ul className="menu-list">
                {menuData[key].map((d, idx) => (
                  <li className="menu-item" key={idx}>
                    <div className="dish">{d.item}</div>
                    <div className="price">{typeof d.price === 'number'? `₹${d.price}`: d.price}</div>
                    {d.desc ? <div className="desc">{d.desc}</div> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="dots" role="tablist" aria-label={t('menu.title')}>
        {sections.map((s, i) => (
          <button key={s} className={`dot ${i===index? 'active':''}`} onClick={()=>setIndex(i)} aria-label={`${t('menu.show')} ${t(`menu.sections.${s}`) || s}`}></button>
        ))}
      </div>
    </div>
  )
}
