import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PageHero from '../components/PageHero'
import { PROFILE } from '../data/content'

const SERVICES = [
  { id:'seo',      label:'🔍 SEO / AEO / GEO' },
  { id:'frontend', label:'⚡ Frontend Dev'      },
  { id:'schema',   label:'🧩 Schema Markup'     },
  { id:'copy',     label:'✍️ Copywriting'       },
  { id:'ops',      label:'⚙️ Marketing Ops'     },
  { id:'other',    label:'🚀 Something Else'    },
]

export default function Contact() {
  const [done,     setDone]     = useState(false)
  const [services, setServices] = useState([])
  const [form,     setForm]     = useState({ name:'', email:'', budget:5000, message:'' })
  const formRef = useRef(null)

  const toggle = id => setServices(p => p.includes(id) ? p.filter(s=>s!==id) : [...p, id])

  const submit = () => {
    if (!form.name || !form.email || !form.message) {
      gsap.to(formRef.current, { x:-7, duration:.07, yoyo:true, repeat:5 }); return
    }
    const sub  = encodeURIComponent(`Portfolio — ${services.join(', ') || 'General'}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nServices: ${services.join(', ')}\nBudget: ₹${Number(form.budget).toLocaleString('en-IN')}\n\n${form.message}`)
    window.open(`mailto:${PROFILE.email}?subject=${sub}&body=${body}`)
    gsap.to(formRef.current, { opacity:0, y:-18, duration:.38, onComplete:()=>setDone(true) })
  }

  return (
    <>
      {/* Dark hero — custom, not PageHero */}
      <section className="contact-hero-section">
        <div className="container-fluid px-0">
          <div style={{ position:'relative', zIndex:1 }}>
            <p style={{ fontFamily:'var(--FM)', fontSize:'.65rem', color:'var(--lime)', letterSpacing:'.22em', textTransform:'uppercase', marginBottom:'.8rem', opacity:.8 }}>Get In Touch</p>
            <h1 style={{ fontFamily:'var(--F)', fontSize:'clamp(3rem,7.5vw,8rem)', fontWeight:900, letterSpacing:'-.05em', lineHeight:.88, color:'white' }}>
              Let's build<br />something <span style={{ color:'var(--lime)' }}>great.</span>
            </h1>
            <p style={{ color:'rgba(255,255,255,.45)', maxWidth:420, marginTop:'1.5rem', lineHeight:1.8 }}>
              Looking for my first real role — marketing, ops, or frontend (ideally all three). Got a project, a job offer, or just want to chat? I'm here.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="row g-5">

          {/* Form */}
          <div className="col-lg-7">
            <div className="s-label">Send a Message</div>
            <h2 className="s-title mb-4">Tell me about your <span style={{ color:'var(--hot)' }}>project.</span></h2>

            {!done ? (
              <div className="form-wrap" ref={formRef}>
                <div className="row g-3" style={{ marginBottom:'1.5rem' }}>
                  <div className="col-md-6">
                    <label className="form-label-c">Your Name *</label>
                    <input className="form-input" placeholder="Ravi Kumar" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label-c">Email *</label>
                    <input className="form-input" type="email" placeholder="ravi@company.com" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} />
                  </div>
                </div>

                <div style={{ marginBottom:'1.5rem' }}>
                  <label className="form-label-c">I need help with</label>
                  <div className="svc-checks">
                    {SERVICES.map(s => (
                      <button key={s.id} type="button" className={`svc-label ${services.includes(s.id)?'active':''}`} onClick={()=>toggle(s.id)}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom:'1.5rem' }}>
                  <label className="form-label-c">Rough Budget</label>
                  <input type="range" className="budget-slider" min={500} max={20000} step={500} value={form.budget} onChange={e=>setForm(p=>({...p,budget:e.target.value}))} />
                  <div className="budget-display">₹{Number(form.budget).toLocaleString('en-IN')}</div>
                </div>

                <div style={{ marginBottom:'1.5rem' }}>
                  <label className="form-label-c">Message *</label>
                  <textarea className="form-input" rows={5} placeholder="What are you building, ranking, or automating? More detail = better response..." value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} />
                </div>

                <button className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'1.1rem', fontSize:'.85rem' }} onClick={submit} type="button">
                  Send Message → (opens your mail app)
                </button>
                <p style={{ fontFamily:'var(--FM)', fontSize:'.6rem', color:'var(--muted)', textAlign:'center', marginTop:'.75rem', letterSpacing:'.04em' }}>
                  Or email directly: <a href={`mailto:${PROFILE.email}`} style={{ color:'var(--hot)' }}>{PROFILE.email}</a>
                </p>
              </div>
            ) : (
              <div className="form-wrap form-success">
                <div style={{ fontSize:'4rem', marginBottom:'1rem' }}>🎉</div>
                <h3>Your email app is open!</h3>
                <p>Message prefilled — just hit send. I'll reply within 24 hrs, usually faster.</p>
                <button className="btn-secondary" style={{ marginTop:'1.5rem' }} onClick={()=>setDone(false)}>Send Another</button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="col-lg-5">
            <div className="avail-badge">
              <span style={{ width:8, height:8, borderRadius:'50%', background:'rgba(0,0,0,.3)', display:'inline-block' }} />
              Open to Opportunities · 3-month goal
            </div>

            <div className="info-card">
              <span className="ic">✉️</span>
              <h4>Email</h4>
              <p>Best for project work, collabs, and job conversations.</p>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </div>

            <div className="info-card">
              <span className="ic">💼</span>
              <h4>LinkedIn</h4>
              <p>Full background, education, and what I'm building now.</p>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/noonela-anvesh-yadav</a>
            </div>

            <div className="info-card">
              <span className="ic">📞</span>
              <h4>Book a 20-min Call</h4>
              <p>Want to talk before committing? Quick strategy call — no pitch, just a real conversation.</p>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary" style={{ fontSize:'.7rem', padding:'.6rem 1.3rem', marginTop:'.75rem' }}>Schedule on Calendly →</button>
              </a>
            </div>

            <div className="info-card">
              <span className="ic">🌏</span>
              <h4>Location</h4>
              <p>Vizag, Andhra Pradesh 🇮🇳 · Open to remote · hybrid · relocation — opportunity first.</p>
            </div>

            <div className="s-label" style={{ marginTop:'1.5rem', marginBottom:'.75rem' }}>Find me on</div>
            <div className="social-grid">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"><span style={{fontSize:'1.2rem'}}>💼</span> LinkedIn</a>
              <a href={`mailto:${PROFILE.email}`} className="social-btn"><span style={{fontSize:'1.2rem'}}>✉️</span> Email</a>
              <a href="/Anvesh_Resume.pdf" download className="social-btn"><span style={{fontSize:'1.2rem'}}>📄</span> Resume</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn"><span style={{fontSize:'1.2rem'}}>🐙</span> GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
