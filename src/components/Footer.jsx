import { Link } from 'react-router-dom'
import { PROFILE } from '../data/content'

const LINKS = [
  { to:'/',        label:'Home'    },
  { to:'/about',   label:'About'   },
  { to:'/work',    label:'Work'    },
  { to:'/blog',    label:'Blog'    },
  { to:'/contact', label:'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">anvesh.</div>
          <div className="footer-tagline">ops · marketing · frontend · ai-native</div>
        </div>
        <div className="footer-links">
          {LINKS.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </div>
        <div className="footer-links">
          <a href={`mailto:${PROFILE.email}`}>Email</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/Anvesh_Resume.pdf" download>Resume</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 202 Noonela Anvesh · Vizag 🇮🇳 · Open to Anywhere</span>
        <span className="footer-status">Open to opportunities</span>
        <span>React · GSAP · Three.js</span>
      </div>
    </footer>
  )
}
