import { useEffect, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { BLOG_POSTS, PROFILE } from '../data/content'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)
  const progRef = useRef(null)

  useEffect(() => {
    if (!post) return
    const onScroll = () => {
      const el = document.documentElement
      const pct = window.scrollY / (el.scrollHeight - el.clientHeight)
      if (progRef.current) progRef.current.style.width = (isNaN(pct) ? 0 : pct * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive:true })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => window.removeEventListener('scroll', onScroll)
    }

    // Use gsap.context so cleanup properly resets opacity to 1
    // Use fromTo (not from) so the end state is always explicit
    const ctx = gsap.context(() => {
      gsap.fromTo('.post-hero-inner',
        { opacity:0, y:50 },
        { opacity:1, y:0, duration:.9, delay:.25, clearProps:'all' }
      )
      gsap.fromTo('.post-content',
        { opacity:0, y:30 },
        { opacity:1, y:0, duration:.75, delay:.55, clearProps:'all' }
      )
    })

    return () => {
      ctx.revert()
      window.removeEventListener('scroll', onScroll)
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const others = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div style={{ paddingTop:'var(--nav-h)' }}>
      {/* Reading progress */}
      <div className="post-progress" aria-hidden="true">
        <div className="post-progress-fill" ref={progRef} />
      </div>

      {/* Hero */}
      <div style={{ background:post.thumbBg, padding:'5rem 3rem 4rem', borderBottom:'var(--border)', textAlign:'center' }}>
        <div className="post-hero-inner">
          <div style={{ fontSize:'5rem', marginBottom:'1.2rem' }}>{post.emoji}</div>
          <div className="blog-tags" style={{ justifyContent:'center', marginBottom:'1rem' }}>
            {post.tags.map(t => <span key={t.text} className={`blog-tag ${t.cls}`}>{t.text}</span>)}
          </div>
          <h1 className="post-title" style={{ maxWidth:720, margin:'0 auto 1rem' }}>{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="post-wrap">
        <div className="post-meta">
          <span className="post-meta-item">📅 {post.date}</span>
          <span className="post-meta-item">⏱️ {post.readTime}</span>
          <span className="post-meta-item">✍️ Anvesh — PGDM Ops &amp; Marketing</span>
        </div>

        <article className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Author card */}
        <div style={{ marginTop:'4rem', padding:'2rem', background:'var(--bg2)', border:'var(--border)', borderRadius:20, display:'flex', gap:'1.5rem', alignItems:'flex-start', flexWrap:'wrap', transition:'background .35s' }}>
          <div className="img-ph" style={{ width:72, height:72, borderRadius:'50%', flexShrink:0, minHeight:'unset' }}>
            <span style={{ fontSize:'1.6rem' }}>👤</span>
          </div>
          <div style={{ flex:1, minWidth:200 }}>
            <h4 style={{ fontFamily:'var(--F)', fontWeight:700, marginBottom:'.25rem', color:'var(--ink)', transition:'color .35s' }}>Noonela Anvesh</h4>
            <p style={{ fontFamily:'var(--FM)', fontSize:'.68rem', color:'var(--muted)', marginBottom:'.75rem', letterSpacing:'.04em' }}>PGDM · Ops &amp; Marketing · Frontend Dev · AEO/GEO · Vizag, IN</p>
            <p style={{ fontSize:'.82rem', color:'var(--muted)', lineHeight:1.75, marginBottom:'.9rem' }}>Building in public while job-hunting. Writing about SEO, AEO, GEO, and what it's like learning to code as a marketing grad in the AI era.</p>
            <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap' }}>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize:'.65rem', padding:'.5rem 1rem' }}>LinkedIn →</a>
              <a href={`mailto:${PROFILE.email}`} className="btn-hot" style={{ fontSize:'.65rem', padding:'.5rem 1rem' }}>Email Me</a>
            </div>
          </div>
        </div>

        {/* More posts */}
        {others.length > 0 && (
          <div style={{ marginTop:'4rem' }}>
            <div className="s-label" style={{ marginBottom:'1.5rem' }}>More Posts</div>
            <div className="row g-3">
              {others.map(p => (
                <div key={p.slug} className="col-md-6">
                  <Link to={`/blog/${p.slug}`} style={{ display:'block', height:'100%', color:'inherit', textDecoration:'none' }}>
                    <div className="blog-card">
                      <div className="blog-thumb" style={{ background:p.thumbBg }}>
                        <span style={{ fontSize:'3rem' }}>{p.emoji}</span>
                        <span className="reading-badge">{p.readTime}</span>
                      </div>
                      <div className="blog-body">
                        <div className="blog-tags">{p.tags.map(t=><span key={t.text} className={`blog-tag ${t.cls}`}>{t.text}</span>)}</div>
                        <h3 className="blog-title">{p.title}</h3>
                        <span className="blog-read-more">Read →</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop:'3rem', paddingTop:'2rem', borderTop:'var(--border)' }}>
          <Link to="/blog" className="btn-secondary" style={{ fontSize:'.7rem', padding:'.65rem 1.3rem' }}>← Back to Blog</Link>
        </div>
      </div>
    </div>
  )
}