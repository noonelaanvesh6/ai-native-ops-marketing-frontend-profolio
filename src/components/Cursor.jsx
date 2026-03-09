import { useEffect, useRef } from 'react'

const COLORS = ['#c8ff00','#ff2d55','#00d4ff','#ffe100','#7c3aed','#00e676']

export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(window.innerWidth/2)
  const my = useRef(window.innerHeight/2)
  const rx = useRef(window.innerWidth/2)
  const ry = useRef(window.innerHeight/2)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cur  = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    // Trail dots
    const TRAIL = 10
    const trails = []
    for (let i = 0; i < TRAIL; i++) {
      const d = document.createElement('div')
      d.className = 'trail-dot'
      const s = Math.max(2, 5 - i * 0.3)
      Object.assign(d.style, {
        width: s+'px', height: s+'px',
        background: COLORS[i % COLORS.length],
        opacity: String((1 - i / TRAIL) * 0.4),
        transition: 'none',
      })
      document.body.appendChild(d)
      trails.push({ el: d, x: mx.current, y: my.current })
    }

    const onMove = e => {
      mx.current = e.clientX; my.current = e.clientY
      cur.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`
    }
    document.addEventListener('mousemove', onMove, { passive: true })

    // Hover states
    const setLink = ()  => { cur.classList.remove('text'); cur.classList.add('link') }
    const setText = ()  => { cur.classList.remove('link'); cur.classList.add('text') }
    const clrAll  = ()  => cur.classList.remove('link','text')

    const bindHover = () => {
      document.querySelectorAll('a,button,[role="button"]').forEach(el => {
        el.addEventListener('mouseenter', setLink)
        el.addEventListener('mouseleave', clrAll)
      })
      document.querySelectorAll('p,h1,h2,h3,h4').forEach(el => {
        el.addEventListener('mouseenter', setText)
        el.addEventListener('mouseleave', clrAll)
      })
    }
    bindHover()

    let raf
    const tick = () => {
      raf = requestAnimationFrame(tick)
      rx.current += (mx.current - rx.current) * 0.1
      ry.current += (my.current - ry.current) * 0.1
      ring.style.transform = `translate(${rx.current}px,${ry.current}px) translate(-50%,-50%)`
      let px = mx.current, py = my.current
      trails.forEach(t => {
        const sp = 0.28 - trails.indexOf(t) * 0.02
        t.x += (px - t.x) * Math.max(0.04, sp)
        t.y += (py - t.y) * Math.max(0.04, sp)
        t.el.style.transform = `translate(${t.x}px,${t.y}px) translate(-50%,-50%)`
        px = t.x; py = t.y
      })
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      trails.forEach(t => t.el.remove())
    }
  }, [])

  return (
    <>
      <div className="cursor"      ref={curRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
