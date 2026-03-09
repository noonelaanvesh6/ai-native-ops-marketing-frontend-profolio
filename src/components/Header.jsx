import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',        label: 'Home'    },
  { to: '/about',   label: 'About'   },
  { to: '/work',    label: 'Work'    },
  { to: '/blog',    label: 'Blog'    },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [location])

  // Scrolled state — just for visual bg change, no hide/show
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <ScrollProgress />

      <nav
        className="nav"
        style={{
          background: scrolled
            ? 'rgba(var(--nav-bg-rgb), .95)'
            : 'rgba(var(--nav-bg-rgb), .75)',
          // NO transform — that's what was causing the button glitch
        }}
      >
        <Link to="/" className="nav-logo">
          <span className="nav-logo-dot" />
          anvesh
        </Link>

        <ul className="nav-links" style={{ listStyle:'none', display:'flex', alignItems:'center', gap:0 }}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={location.pathname === to ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right" style={{ display:'flex', alignItems:'center', gap:'.6rem' }}>
          <Link to="/contact" className="nav-cta nav-cta-desk">Book a Call 📞</Link>
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-drawer ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>
        ))}
        <Link
          to="/contact"
          className="btn-hot"
          style={{ marginTop:'1rem', justifyContent:'center' }}
          onClick={() => setOpen(false)}
        >
          Book a Call 📞
        </Link>
      </div>

      <BackToTop />

      <style>{`
        .nav-cta-desk { display: none; }
        .nav-toggle   { display: none !important; }
        @media (min-width: 992px) { .nav-cta-desk { display: inline-flex !important; } }
        @media (max-width: 991px) { .nav-toggle { display: flex !important; } .nav-links { display: none !important; } }
      `}</style>
    </>
  )
}

function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const fn = () => {
      const d = document.documentElement
      const p = window.scrollY / (d.scrollHeight - d.clientHeight)
      if (ref.current) ref.current.style.transform = `scaleX(${isNaN(p) ? 0 : p})`
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <button
      className={`back-to-top ${show ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >↑</button>
  )
}
