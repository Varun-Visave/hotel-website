import { useState, useMemo } from 'react'
import menuData from '../data/alldata'

export default function MenuSlider(){
  // sections from data object
  const sections = useMemo(()=> Object.keys(menuData),[])
  const [index, setIndex] = useState(0)

  function prev(){ setIndex(i => (i - 1 + sections.length) % sections.length) }
  function next(){ setIndex(i => (i + 1) % sections.length) }

  return (
    <div className="menu-slider" aria-roledescription="carousel">
      <div className="menu-header">
        <h3 className="category-title">{sections[index].replace(/([A-Z])/g,' $1').trim()}</h3>
        <div className="controls">
          <button className="icon-btn" onClick={prev} aria-label="Previous section">‹</button>
          <button className="icon-btn" onClick={next} aria-label="Next section">›</button>
        </div>
      </div>

      <div className="slides-wrapper">
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

      <div className="dots" role="tablist" aria-label="Menu sections">
        {sections.map((s, i) => (
          <button key={s} className={`dot ${i===index? 'active':''}`} onClick={()=>setIndex(i)} aria-label={`Show ${s}`}></button>
        ))}
      </div>
    </div>
  )
}
