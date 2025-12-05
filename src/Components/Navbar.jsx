import { useState } from 'react'
import logo from "../assets/logo.png"

export default function Navbar(){
  const [open, setOpen] = useState(false)

  function handleClick(e, href){
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'start'})
      el.setAttribute('tabindex','-1')
      el.focus({preventScroll:true})
    }
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src={logo} alt="Morya Food Point logo" className="logo" />
          <div>
            <h1 className="site-title">Morya Food Point</h1>
            <p className="tagline">Comfort • Tasty Food • Warm Service</p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <button className="nav-toggle" aria-label={open? 'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(o=>!o)}>
            <span className="hamburger" />
          </button>

          <ul className={`nav-list ${open? 'show': ''}`}>
            <li><a href="#home" onClick={(e)=>handleClick(e,'#home')}>Home</a></li>
            <li><a href="#features" onClick={(e)=>handleClick(e,'#features')}>Features</a></li>
            <li><a href="#menu" onClick={(e)=>handleClick(e,'#menu')}>Menu</a></li>
            <li><a href="#testimonials" onClick={(e)=>handleClick(e,'#testimonials')}>Testimonials</a></li>
            <li><a href="#location" onClick={(e)=>handleClick(e,'#location')}>Location</a></li>
            <li><a href="#contact" onClick={(e)=>handleClick(e,'#contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
