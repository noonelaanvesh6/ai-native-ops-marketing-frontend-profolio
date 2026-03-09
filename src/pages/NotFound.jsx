import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

export default function NotFound() {
  const numRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.from(numRef.current, { opacity: 0, scale: 0.6, duration: 1, ease: 'elastic.out(1,.55)', delay: .2 })
    gsap.from('.nf-title',    { opacity: 0, y: 30, duration: .7, delay: .55 })
    gsap.from('.nf-sub',      { opacity: 0, y: 20, duration: .6, delay: .75 })
    gsap.from('.nf-actions',  { opacity: 0, y: 20, duration: .6, delay: .9  })
    gsap.from('.nf-links a',  { opacity: 0, y: 12, stagger: .08, duration: .5, delay: 1.1 })

    // Floating particles
    const canvas = document.getElementById('nf-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - .5) * .6,
      dy: (Math.random() - .5) * .6,
      color: ['#c8ff00','#ff2d55','#00d4ff','#ffe100'][Math.floor(Math.random()*4)],
      opacity: Math.random() * .5 + .15,
    }))
    let raf
    const draw = () => {
      raf = requestAnimationFrame(draw)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      })
      ctx.globalAlpha = 1
    }
    draw()
    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  const SUGGESTIONS = [
    { to: '/',        emoji: '🏠', label: 'Home'    },
    { to: '/work',    emoji: '🔥', label: 'Work'    },
    { to: '/blog',    emoji: '📝', label: 'Blog'    },
    { to: '/contact', emoji: '📞', label: 'Contact' },
  ]

  return (
    <div className="not-found">
      {/* Canvas particles */}
      <canvas id="nf-canvas" style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:0 }} aria-hidden="true" />

      {/* Big faint BG text */}
      <div className="nf-bg-text" aria-hidden="true">LOST</div>

      {/* Glitch number */}
      <div className="nf-number" data-text="404" ref={numRef} style={{ position:'relative', zIndex:1 }}>
        4<span style={{ color:'var(--hot)' }}>0</span>4
      </div>

      <h1 className="nf-title" style={{ position:'relative', zIndex:1 }}>
        You wandered off the map. 🗺️
      </h1>

      <p className="nf-sub" style={{ position:'relative', zIndex:1 }}>
        This page doesn't exist — or maybe it did and I deleted it.<br />
        Either way, let's get you somewhere useful.
      </p>

      <div className="nf-actions d-flex gap-3 flex-wrap justify-content-center" style={{ position:'relative', zIndex:1 }}>
        <Link to="/" className="btn-primary">Take Me Home ↗</Link>
        <Link to="/contact" className="btn-secondary">Talk to Anvesh</Link>
      </div>

      {/* Quick links row */}
      <div className="nf-links" style={{ position:'relative', zIndex:1, marginTop:'3rem', display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center' }}>
        {SUGGESTIONS.map(s => (
          <Link key={s.to} to={s.to} style={{
            background: 'var(--surface)', border: 'var(--border)', borderRadius: '100px',
            padding: '.45rem 1.1rem', fontFamily: 'var(--FM)', fontSize: '.7rem',
            boxShadow: 'var(--shadow-sm)', display:'inline-flex', alignItems:'center',
            gap:'.4rem', color:'var(--ink)',
            transition:'transform .2s, background .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.background='var(--yel)' }}
          onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.background='' }}
          >
            {s.emoji} {s.label}
          </Link>
        ))}
      </div>

      {/* Glitch keyframes */}
      <style>{`
        .nf-number::before {
          content: attr(data-text);
          position: absolute; top:0; left:0; right:0;
          color: var(--hot); z-index:-1;
          animation: glitch1 3.5s infinite;
        }
        .nf-number::after {
          content: attr(data-text);
          position: absolute; top:0; left:0; right:0;
          color: var(--sky); z-index:-2;
          animation: glitch2 2.8s infinite;
        }
        @keyframes glitch1 {
          0%,90%,100% { clip-path:inset(0 0 100% 0); transform:translate(0,0); }
          91% { clip-path:inset(15% 0 60% 0); transform:translate(-4px,0); }
          93% { clip-path:inset(70% 0 5%  0); transform:translate(4px,0);  }
          95% { clip-path:inset(40% 0 30% 0); transform:translate(-2px,0); }
        }
        @keyframes glitch2 {
          0%,85%,100% { clip-path:inset(100% 0 0 0); transform:translate(0,0); }
          86% { clip-path:inset(50% 0 20% 0); transform:translate(3px,0);  }
          89% { clip-path:inset(10% 0 75% 0); transform:translate(-3px,0); }
          92% { clip-path:inset(80% 0 10% 0); transform:translate(2px,0);  }
        }
      `}</style>
    </div>
  )
}
