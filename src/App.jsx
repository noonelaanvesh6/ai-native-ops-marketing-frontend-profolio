import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header   from './components/Header'
import Footer   from './components/Footer'
import Cursor   from './components/Cursor'
import Home     from './pages/Home'
import About    from './pages/About'
import Work     from './pages/Work'
import Blog     from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact  from './pages/Contact'
import NotFound from './pages/NotFound'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const location   = useLocation()
  const overlayRef = useRef(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    gsap.fromTo(el,
      { scaleY: 1, transformOrigin: 'top' },
      { scaleY: 0, duration: 0.5, delay: 0.05, ease: 'power3.out' }
    )
    window.scrollTo(0, 0)
    setTimeout(() => ScrollTrigger.refresh(), 250)
  }, [location.pathname])

  return (
    <>
      {/* Page transition ink wipe */}
      <div ref={overlayRef} style={{
        position:'fixed', inset:0, background:'var(--ink)',
        zIndex:99997, transformOrigin:'top', pointerEvents:'none',
      }} />

      {/* Noise texture */}
      <div className="noise" aria-hidden="true" />

      <Cursor />
      <Header />

      <main>
        <Routes>
          <Route path="/"           element={<Home />}     />
          <Route path="/about"      element={<About />}    />
          <Route path="/work"       element={<Work />}     />
          <Route path="/blog"       element={<Blog />}     />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact"    element={<Contact />}  />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
