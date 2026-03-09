import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import PageHero from '../components/PageHero'
import { BLOG_POSTS } from '../data/content'

export default function Blog() {
  const featured = BLOG_POSTS[0]
  const rest = BLOG_POSTS.slice(1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo('.blog-card', { opacity:0, y:46, rotation:-1.5 }, { opacity:1, y:0, rotation:0, duration:.7, stagger:.1, delay:.3 })
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Thoughts & Insights"
        title="Building in<br /><span style='color:var(--hot)'>Public.</span>"
        sub="Honest takes on AEO, GEO, schema, vibe coding, and figuring out the web in the AI era. No fluff."
        word="BLOG"
      />

      <div style={{ padding:'7rem 3rem' }}>
        {/* Featured */}
        <Link to={`/blog/${featured.slug}`} style={{ display:'block', marginBottom:'2rem', color:'inherit', textDecoration:'none' }}>
          <div style={{
            background:'var(--ink)', border:'var(--border)', borderRadius:24, overflow:'hidden',
            boxShadow:'var(--shadow-lg)', display:'flex', minHeight:280,
            transition:'transform .22s cubic-bezier(.34,1.56,.64,1)',
          }}
          onMouseEnter={e => gsap.to(e.currentTarget, { y:-5, duration:.2 })}
          onMouseLeave={e => gsap.to(e.currentTarget, { y:0, duration:.3, ease:'elastic.out(1,.5)' })}>
            <div style={{ padding:'2.5rem', flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <div>
                <span style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', background:'var(--lime)', borderRadius:'100px', padding:'.28rem .8rem', fontFamily:'var(--FM)', fontSize:'.62rem', marginBottom:'1rem', color:'#0d0900' }}>🔥 Latest Post</span>
                <h2 style={{ fontFamily:'var(--F)', fontSize:'clamp(1.2rem,2.5vw,2rem)', fontWeight:900, color:'white', letterSpacing:'-.03em', lineHeight:1.1, marginBottom:'.8rem' }}>{featured.title}</h2>
                <p style={{ fontSize:'.85rem', color:'rgba(255,255,255,.5)', lineHeight:1.7, maxWidth:500 }}>{featured.excerpt}</p>
              </div>
              <div style={{ display:'flex', gap:'.75rem', alignItems:'center', marginTop:'1.5rem', flexWrap:'wrap' }}>
                <span style={{ fontFamily:'var(--FM)', fontSize:'.62rem', color:'rgba(255,255,255,.3)' }}>{featured.date} · {featured.readTime}</span>
                <span style={{ fontFamily:'var(--FM)', fontSize:'.62rem', color:'var(--lime)', letterSpacing:'.05em', textTransform:'uppercase' }}>Read Article →</span>
              </div>
            </div>
            <div style={{ width:200, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'5.5rem', borderLeft:'var(--border)', flexShrink:0, background:featured.thumbBg }}>
              {featured.emoji}
            </div>
          </div>
        </Link>

        {/* Rest */}
        <div className="row g-3">
          {rest.map(post => (
            <div key={post.slug} className="col-md-6">
              <Link to={`/blog/${post.slug}`} style={{ display:'block', height:'100%', color:'inherit', textDecoration:'none' }}>
                <div className="blog-card">
                  <div className="blog-thumb" style={{ background:post.thumbBg }}>
                    <span style={{ fontSize:'3.5rem' }}>{post.emoji}</span>
                    <span className="reading-badge">{post.readTime}</span>
                  </div>
                  <div className="blog-body">
                    <div className="blog-tags">{post.tags.map(t => <span key={t.text} className={`blog-tag ${t.cls}`}>{t.text}</span>)}</div>
                    <div className="blog-date">{post.date}</div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <span className="blog-read-more">Read More →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
