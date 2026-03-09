import { useEffect, useRef } from 'react'

const ITEMS = ['SEO','AEO','GEO','Schema.org','React','GSAP','Three.js','Copywriting','Marketing Ops','JavaScript','n8n','LLM Optimization','Core Web Vitals','Vibe Coding']

export default function Marquee({ reverse = false }) {
  const innerRef = useRef(null)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    let x = 0, raf
    const speed = reverse ? 0.5 : -0.6
    const tick = () => {
      x += speed
      const half = el.scrollWidth / 2
      if (x <= -half) x = 0
      if (x >= 0) x = -half
      el.style.transform = `translateX(${x}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reverse])

  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-inner" ref={innerRef}>
        {doubled.map((t, i) => (
          <span key={i} className="m-item">{t}<span className="m-dot"> ✦</span></span>
        ))}
      </div>
    </div>
  )
}
