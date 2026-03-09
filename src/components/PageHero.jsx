import { useEffect, useRef } from 'react'

/**
 * Shared page hero — fixes the FOUC (flash of un-animated content).
 * Elements start invisible in CSS, JS adds `.revealed` class to trigger
 * CSS transitions. No GSAP needed here — pure CSS transitions are
 * more reliable for first-paint reveal.
 */
export default function PageHero({ eyebrow, title, sub, word }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Small delay so browser paints the initial hidden state first
    const t = setTimeout(() => el.classList.add('revealed'), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="page-hero" data-word={word || ''} ref={ref}>
      {eyebrow && <p className="page-hero-eyebrow">{eyebrow}</p>}
      <h1 className="page-hero-title"
          dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="page-hero-sub">{sub}</p>}
      {/* diagonal bottom-edge cut */}
      <div className="page-hero-cut" aria-hidden="true" />
    </section>
  )
}
