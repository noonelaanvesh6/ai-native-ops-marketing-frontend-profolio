import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebGLHero from "../components/WebGLHero";
import StatsBanner from "../components/StatsBanner";
import {
  PROFILE,
  TYPED_WORDS,
  SKILLS,
  STICKERS,
  BLOG_POSTS,
} from "../data/content";

gsap.registerPlugin(ScrollTrigger);

/* ── Typewriter ─────────────────────────────────────────── */
function Typewriter() {
  const [word, setWord] = useState(TYPED_WORDS[0]);
  const [visible, setVisible] = useState(true);
  const idx = useRef(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const iv = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        idx.current = (idx.current + 1) % TYPED_WORDS.length;
        setWord(TYPED_WORDS[idx.current]);
        setVisible(true);
      }, 220);
    }, 2200);
    return () => clearInterval(iv);
  }, []);
  return (
    <span
      id="typed"
      style={{ opacity: visible ? 1 : 0, transition: "opacity .22s" }}
    >
      {word}
    </span>
  );
}

/* ── Skill bar ──────────────────────────────────────────── */
function SkBar({ val, color }) {
  const ref = useRef(null);
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      once: true,
      onEnter: () => {
        if (ref.current) ref.current.style.width = val + "%";
      },
    });
    return () => st.kill();
  }, [val]);
  return (
    <div className="sb-track">
      <div
        ref={ref}
        className="sb-fill"
        style={{
          background: color,
          transition: "width 1.4s cubic-bezier(.34,1,.64,1)",
        }}
      />
    </div>
  );
}

/* ── Main ───────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hero entrance
    gsap.to(".hero-hl .wi", {
      y: 0,
      duration: 1.1,
      delay: 0.45,
      stagger: 0.09,
      ease: "power4.out",
    });
    gsap.to(".hero-status", { opacity: 1, y: 0, duration: 0.7, delay: 0.35 });
    gsap.to(".hero-sub", { opacity: 1, y: 0, duration: 0.9, delay: 1.15 });
    gsap.to(".hero-actions", { opacity: 1, y: 0, duration: 0.8, delay: 1.4 });
    gsap.to(".hero-chips", { opacity: 1, y: 0, duration: 0.7, delay: 1.6 });
    gsap.fromTo(
      ".deco-card",
      { opacity: 0, x: 55 },
      { opacity: 1, x: 0, stagger: 0.13, duration: 1, delay: 1.85 },
    );

    // Scroll reveals
    gsap.fromTo(
      ".sk-card",
      { opacity: 0, y: 50, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 82%",
          once: true,
        },
      },
    );
    gsap.fromTo(
      ".sticker",
      { opacity: 0, y: 28, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.04,
        scrollTrigger: {
          trigger: ".sticker-wall",
          start: "top 86%",
          once: true,
        },
      },
    );
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 48, rotation: -2 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".blog-cards-row",
          start: "top 84%",
          once: true,
        },
      },
    );
    gsap.utils
      .toArray(".rv")
      .forEach((el) =>
        gsap.fromTo(
          el,
          { opacity: 0, y: 46 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        ),
      );

    return () => ScrollTrigger.getAll().forEach((s) => s.kill());
  }, []);

  const elastic = {
    onMouseEnter: (e) =>
      gsap.to(e.currentTarget, { scale: 1.1, rotation: -3, duration: 0.2 }),
    onMouseLeave: (e) =>
      gsap.to(e.currentTarget, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: "elastic.out(1,.4)",
      }),
  };

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section
        id="hero"
        className="hero"
        style={{
          background: "var(--bg)",
          minHeight: "100vh",
          paddingTop: "calc(var(--nav-h) + 4rem)",
        }}
      >
        {/* WebGL layer */}
        <div className="hero-canvas-wrap">
          <WebGLHero />
        </div>
        {/* Grid overlay */}
        <div className="hero-grid" aria-hidden="true" />
        {/* Color blobs */}
        <div
          className="hero-blob"
          style={{
            width: 420,
            height: 420,
            background: "rgba(200,255,0,.13)",
            top: "-80px",
            right: "-40px",
            animationDelay: "0s",
          }}
        />
        <div
          className="hero-blob"
          style={{
            width: 320,
            height: 320,
            background: "rgba(255,45,85,.09)",
            bottom: "-30px",
            left: "6%",
            animationDelay: "-5s",
          }}
        />

        <div className="hero-content container-fluid px-0">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-7">
              <div
                className="hero-status"
                style={{ opacity: 0, transform: "translateY(16px)" }}
              >
                <span className="status-dot" />
                Actively job-hunting · Remote / Anywhere 🌏
              </div>

              <h1 className="hero-hl">
                <span className="w">
                  <span className="wi">Ops.</span>
                </span>
                <span className="w">
                  <span className="wi c-hot">Marketing.</span>
                </span>
                <br />
                <span className="w">
                  <span className="wi c-sky">Frontend.</span>
                </span>
                <span className="w">
                  <span className="wi">
                    <span className="stk">AI&#8209;Native.</span>
                  </span>
                </span>
              </h1>

              <p
                className="hero-sub"
                style={{ opacity: 0, transform: "translateY(24px)" }}
              >
                I'm <strong>Anvesh</strong> — a PGDM Ops &amp; Marketing grad
                who builds interfaces, ranks them with schema &amp; AEO, and
                helps brands&nbsp;
                <Typewriter />
                <span className="cblink">|</span>
                <br />
                <br />
                Three skills most companies hire three people for. I do it all —
                with AI as my co-founder.
              </p>

              <div
                className="hero-actions d-flex gap-3 flex-wrap"
                style={{ opacity: 0, transform: "translateY(20px)" }}
              >
                <Link to="/work" className="btn-primary">
                  See My Work ↓
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Book a Call 📞
                </Link>
              </div>

              <div
                className="chip-row hero-chips"
                style={{ opacity: 0, transform: "translateY(16px)" }}
              >
                {[
                  "🔍 SEO/AEO/GEO",
                  "⚡ React",
                  "🎬 GSAP",
                  "🧩 Schema",
                  "✍️ Copywriting",
                  "🤖 AI-Native",
                  "⚙️ n8n",
                ].map((c) => (
                  <span key={c} className="chip" {...elastic}>
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — deco cards */}
            <div className="col-xl-5 hero-deco-col flex-column gap-3 position-relative">
              <div
                className="deco-card hero-deco-card hero-photo-card"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/og-image.jpg"
                  alt="Anvesh Profile"
                  className="hero-profile-img"
                />
              </div>

              <div className="hero-stats-grid">
                {[
                  {
                    n: "12+",
                    l: "Schema Types",
                    c: "var(--lime)",
                    rot: "-2deg",
                  },
                  {
                    n: "3",
                    l: "Skills Stacked",
                    c: "var(--hot)",
                    rot: "1.5deg",
                  },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="deco-card hero-deco-card hero-stat-card"
                    style={{ transform: `rotate(${s.rot})` }}
                  >
                    <div className="hero-stat-num" style={{ color: s.c }}>
                      {s.n}
                    </div>
                    <div className="hero-stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
              <div
                className="hero-deco-pill"
                style={{
                  bottom: "70px",
                  left: "18px",
                  transform: "rotate(-5deg)",
                }}
              >
                🎓 PGDM Ops &amp; Mktg
              </div>
              <div
                className="hero-deco-pill"
                style={{
                  bottom: "70px",
                  right: "18px",
                  transform: "rotate(5deg)",
                  background: "var(--hot)",
                  color: "white",
                  borderColor: "var(--hot)",
                }}
              >
                🤖 AI-native builder
              </div>
              <div
                className="hero-deco-pill"
                style={{
                  top: "5px",
                  right: "65px",
                  transform: "rotate(8deg)",
                  background: "var(--sky)",
                  borderColor: "var(--sky)",
                }}
              >
                ⚡ Vibe Coder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BANNER (Concept 3+5) ═════════════════════ */}
      <StatsBanner />

      {/* ═══ SKILLS ═════════════════════════════════════════ */}
      <section className="services" id="skills">
        <div className="container-fluid px-0">
          <div className="row mb-5 align-items-end rv">
            <div className="col-lg-6">
              <div className="s-label">What I Bring</div>
              <h2 className="s-title">
                Superpowers{" "}
                <span style={{ color: "var(--hot)" }}>Others Don't Stack</span>{" "}
                🦸
              </h2>
            </div>
            <div className="col-lg-6">
              <p
                style={{
                  fontFamily: "var(--FM)",
                  fontSize: ".73rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: 270,
                }}
              >
                Hover. Click. You'll get the point.
              </p>
            </div>
          </div>
          <div className="row g-3 skills-grid">
            {SKILLS.map((sk) => (
              <div key={sk.id} className="col-md-6 col-xl-4">
                <div
                  className={`sk-card ${sk.color}`}
                  onClick={(e) =>
                    gsap.fromTo(
                      e.currentTarget,
                      { scale: 1.04 },
                      { scale: 1, duration: 0.3, ease: "elastic.out(1,.4)" },
                    )
                  }
                >
                  <span className="sk-ic">{sk.icon}</span>
                  <h3>{sk.title}</h3>
                  <p>{sk.desc}</p>
                  <div className="sk-pills">
                    {sk.pills.map((p) => (
                      <span key={p} className="sk-pill">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="skill-bar">
                    <div className="sb-label">
                      <span>{sk.bar.label}</span>
                      <span>{sk.bar.val}%</span>
                    </div>
                    <SkBar val={sk.bar.val} color={sk.bar.color} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STICKER WALL ═══════════════════════════════════ */}
      <section className="sticker-section">
        <div className="text-center mb-5 rv">
          <div className="s-label" style={{ justifyContent: "center" }}>
            My Ethos
          </div>
          <h2 className="s-title">
            Things I{" "}
            <span style={{ color: "var(--hot)" }}>Actually Believe</span> 🎯
          </h2>
        </div>
        <div className="sticker-wall">
          {STICKERS.map((s) => (
            <div
              key={s.text}
              className={`sticker ${s.cls}`}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1.08,
                  rotation: -2,
                  duration: 0.2,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1,
                  rotation: 0,
                  duration: 0.4,
                  ease: "elastic.out(1,.4)",
                })
              }
            >
              {s.text}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED PROJECT ════════════════════════════════ */}
      <section className="featured-section">
        <div className="mb-5 rv">
          <div className="s-label">Featured Work</div>
          <h2 className="s-title">
            Where the{" "}
            <span style={{ color: "var(--hot)" }}>Learning Gets Real</span> 🔥
          </h2>
        </div>
        <div className="featured-card rv">
          <div className="fc-left">
            <div>
              <div className="fc-badge">⭐ Most Complex Project</div>
              <h3 className="fc-title">OpsFlow — Kanban Command Center</h3>
              <p className="fc-desc">
                Built a fully reactive Kanban system in{" "}
                <em>vanilla JavaScript</em> — no React, no Vue. A Proxy-based
                store watches state mutations and auto-updates the UI. Pub/Sub
                pattern decouples modules. Live ops dashboard calculates WIP,
                Lead Time, Throughput and Completion Rate via Chart.js.
                MVC-inspired architecture, LocalStorage persistence. This is
                what ops thinking looks like in code.
              </p>
              <div className="fc-tags">
                {[
                  "Vanilla JS",
                  "Proxy Store",
                  "Pub/Sub Pattern",
                  "Chart.js",
                  "CSS Glassmorphism",
                  "ES Modules",
                  "LocalStorage",
                ].map((t) => (
                  <span key={t} className="fc-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/work"
              className="btn-primary"
              style={{ width: "fit-content", marginTop: "2rem" }}
            >
              All Projects →
            </Link>
          </div>
          <div className="fc-right">
            <img
              src="/featured project.png"
              alt="Featured project screenshot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "inherit",
              }}
            />
            <div className="fc-num" aria-hidden="true">
              01
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BLOG TEASER ════════════════════════════════════ */}
      <section className="blog-section">
        <div className="row mb-5 align-items-end rv">
          <div className="col">
            <div className="s-label">From the Blog</div>
            <h2 className="s-title">
              Building in <span style={{ color: "var(--hot)" }}>Public</span> 📝
            </h2>
          </div>
          <div className="col-auto">
            <Link
              to="/blog"
              className="btn-secondary"
              style={{ fontSize: ".7rem", padding: ".7rem 1.3rem" }}
            >
              All Posts →
            </Link>
          </div>
        </div>
        <div className="row g-3 blog-cards-row">
          {BLOG_POSTS.map((post) => (
            <div key={post.slug} className="col-md-4">
              <Link
                to={`/blog/${post.slug}`}
                style={{
                  display: "block",
                  height: "100%",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div className="blog-card">
                  <div
                    className="blog-thumb"
                    style={{ background: post.thumbBg }}
                  >
                    <span style={{ fontSize: "3.5rem" }}>{post.emoji}</span>
                    <span className="reading-badge">{post.readTime}</span>
                  </div>
                  <div className="blog-body">
                    <div className="blog-tags">
                      {post.tags.map((t) => (
                        <span key={t.text} className={`blog-tag ${t.cls}`}>
                          {t.text}
                        </span>
                      ))}
                    </div>
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
      </section>

      {/* ═══ CTA STRIP ══════════════════════════════════════ */}
      <section className="cta-strip">
        <h2 className="rv">
          Let's build something
          <br />
          <em>worth building.</em>
        </h2>
        <p className="rv">
          Looking for my first role — ops, marketing, or frontend (ideally all
          three).
          <br />
          Got something worth building? Let's talk.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap rv">
          <Link to="/contact" className="btn-primary">
            Book a 20-min Call →
          </Link>
          <a
            href="https://www.linkedin.com/in/noonela-anvesh-yadav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}

