import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "../components/PageHero";
import { PROFILE } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  {
    year: "2016",
    type: "education",
    title: "High School (CBSE)",
    org: "SR Digi School, Visakhapatnam",
    desc: "Foundation in analytical learning.",
    color: "#ffe100",
  },
  {
    year: "2016 – 2018",
    type: "education",
    title: "Higher Secondary (MPC)",
    org: "NRI Junior College",
    desc: "Maths, Physics, Chemistry specialization.",
    color: "#00d4ff",
  },
  {
    year: "2018 – 2021",
    type: "education",
    title: "Bachelor of Hotel Management",
    org: "Sun International Institute for Tourism & Management",
    desc: "Service systems, operations workflow and management.",
    color: "#c8ff00",
  },
  {
    year: "2023 – 2025",
    type: "education",
    title: "PGDM — Operations & Marketing",
    org: "Integral Institute of Advanced Management (IIAM)",
    desc: "Business strategy, supply chain, marketing systems.",
    color: "#ff2d55",
  },
  {
    year: "2024",
    type: "internship",
    title: "Supply Chain Intern",
    org: "Secured Technologies",
    desc: "Worked on operational systems & logistics flow.",
    color: "#7c3aed",
  },
];

const FUN_FACTS = [
  {
    cls: "fc1",
    ic: "🎌",
    title: "Anime Fan",
    body: "AOT changed how I see power and systems. No cap.",
  },
  {
    cls: "fc2",
    ic: "☕",
    title: "Coffee First",
    body: "Cannot debug before the first cup. Non-negotiable.",
  },
  {
    cls: "fc3",
    ic: "📖",
    title: "Manga/Manhwa",
    body: "Manga, manhua, manhwa — visual storytelling hits different.",
  },
  {
    cls: "fc4",
    ic: "🎯",
    title: "Rank #1 Obsessed",
    body: "Not page one? Doesn't exist. That's the rule.",
  },
  {
    cls: "fc5",
    ic: "🌙",
    title: "2am Debugger",
    body: "Best bugs surface after midnight. Ask me why.",
  },
  {
    cls: "fc6",
    ic: "🚀",
    title: "Vizag Builder",
    body: "World-class work from tier-2 India. Location is no excuse.",
  },
];

export default function About() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.utils.toArray(".rv").forEach((el) =>
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
    const rail = document.querySelector(".tl-outer")

    let isDown=false,startX,scrollLeft
    
    rail.addEventListener("mousedown",(e)=>{
    isDown=true
    startX=e.pageX - rail.offsetLeft
    scrollLeft=rail.scrollLeft
    })
    
    rail.addEventListener("mouseleave",()=>isDown=false)
    rail.addEventListener("mouseup",()=>isDown=false)
    
    rail.addEventListener("mousemove",(e)=>{
    if(!isDown) return
    e.preventDefault()
    const x=e.pageX - rail.offsetLeft
    const walk=(x-startX)*1.5
    rail.scrollLeft=scrollLeft-walk
    })

    gsap.fromTo(
      ".tl-item",
      { opacity: 0, x: -36 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: { trigger: ".tl-wrap", start: "top 80%", once: true },
      },
    );

    // Draggable fun facts
    document.querySelectorAll(".ff-card").forEach((card) => {
      let drag = false,
        ox = 0,
        oy = 0,
        cx = 0,
        cy = 0;
      card.addEventListener("mousedown", (e) => {
        drag = true;
        ox = e.clientX - cx;
        oy = e.clientY - cy;
        gsap.to(card, { scale: 1.07, duration: 0.15 });
        card.style.zIndex = 50;
      });
      document.addEventListener("mousemove", (e) => {
        if (!drag) return;
        cx = e.clientX - ox;
        cy = e.clientY - oy;
        card.style.transform = `translate(${cx}px,${cy}px) rotate(${cx * 0.02}deg)`;
      });
      document.addEventListener("mouseup", () => {
        if (!drag) return;
        drag = false;
        card.style.zIndex = "";
        gsap.to(card, { scale: 1, duration: 0.4, ease: "elastic.out(1,.5)" });
      });
    });
    return () => ScrollTrigger.getAll().forEach((s) => s.kill());
  }, []);

  return (
    <>
      <PageHero
        eyebrow="The Human Behind the Code"
        title="Hi, I'm<br /><span style='color:var(--hot)'>Anvesh.</span>"
        sub="PGDM Ops & Marketing grad, frontend learner, AI-native builder. The rare kind who bridges strategy and code — from Vizag, India."
        word="ABOUT"
      />

      {/* ── Profile ─────────────────────────────────────── */}
      <section className="about-section">
        <div className="container-fluid px-0">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 rv">
              <div className="profile-img-wrap">
                <div
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "var(--border)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <img
                    src="/about-hero.jpg"
                    alt="Anvesh profile"
                    style={{
                      width: "100%",
                      height: 420,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div
                  className="profile-badge"
                  style={{
                    bottom: "-12px",
                    left: "-14px",
                    transform: "rotate(-3deg)",
                  }}
                >
                  ☕ Powered by coffee
                </div>
                <div
                  className="profile-badge"
                  style={{
                    top: "-8px",
                    right: "-10px",
                    transform: "rotate(3deg)",
                    background: "var(--hot)",
                    color: "white",
                    borderColor: "var(--hot)",
                  }}
                >
                  🇮🇳 Vizag
                </div>
              </div>
            </div>

            <div className="col-lg-7 about-body rv">
              <div className="s-label">About Me</div>
              <h2 className="s-title mb-4">
                I make the web{" "}
                <span style={{ color: "var(--hot)" }}>work harder</span> for
                you.
              </h2>
              <p>
                I'm <strong>Noonela Anvesh</strong> — PGDM from IIAM, Vizag,
                specializing in Ops &amp; Marketing. Along the way I figured out
                that{" "}
                <strong>
                  great strategy is useless if your site doesn't rank, and a
                  site that ranks is useless if it doesn't convert.
                </strong>{" "}
                So I learned both.
              </p>
              <p>
                I build interfaces (React, GSAP, HTML/CSS), make sure they get
                found (SEO, AEO, GEO, Schema), and write copy that moves people.
                Layer in n8n automation and AI tools for velocity — and you've
                got someone who covers what most teams need three hires for.
              </p>
              <p>
                <strong>Honest caveat:</strong> No real-world job experience yet
                — just graduated. But the skills are real, the projects are
                real, and the drive is real. Give me the opportunity; I'll show
                up fully.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-4 mb-4">
                {[
                  "🔍 SEO·AEO·GEO",
                  "⚡ React & JS",
                  "🧩 Schema.org",
                  "🎬 GSAP",
                  "✍️ Copywriting",
                  "⚙️ n8n",
                  "📊 Analytics",
                  "🎓 PGDM Ops & Mktg",
                ].map((t) => (
                  <span key={t} className="a-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/contact" className="btn-primary">
                  Work With Me →
                </Link>
                <a href="/Anvesh_Resume.pdf" download className="btn-secondary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="tl-section">
        <div className="mb-5 rv">
          <div className="s-label">Journey</div>
          <h2 className="s-title">
            Education & <span style={{ color: "var(--hot)" }}>Experience</span>
          </h2>
        </div>

        <div className="tl-outer">
          <div className="tl-rail" />

          <div className="tl-track">
            {TIMELINE.map((t, i) => {
              const pos = i % 2 === 0 ? "tl-above" : "tl-below";

              return (
                <div
                  key={i}
                  className={`tl-item ${pos}`}
                  style={{ "--dot-color": t.color }}
                >
                  <div className="tl-card">
                    <span
                      className={`tl-type-badge ${
                        t.type === "education"
                          ? "tl-badge-education"
                          : "tl-badge-internship"
                      }`}
                    >
                      {t.type}
                    </span>

                    <div className="tl-year">{t.year}</div>

                    <h4 className="tl-title">{t.title}</h4>

                    <div className="tl-org">{t.org}</div>

                    <p className="tl-desc">{t.desc}</p>
                  </div>

                  <div className="tl-stem" />

                  <div className="tl-dot">
                    {t.type === "education" ? "🎓" : "💼"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fun Facts ─────────────────────────────────────── */}
      <section style={{ padding: "7rem 3rem", background: "var(--bg)" }}>
        <div className="text-center mb-4 rv">
          <div className="s-label" style={{ justifyContent: "center" }}>
            The Human Stuff
          </div>
          <h2 className="s-title mb-2">
            Fun Facts <span style={{ color: "var(--hot)" }}>About Me</span> 🎲
          </h2>
        </div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--FM)",
            fontSize: ".68rem",
            color: "var(--muted)",
            marginBottom: "2.5rem",
            letterSpacing: ".06em",
          }}
        >
          👆 Drag these around (desktop)
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {FUN_FACTS.map((f) => (
            <div
              key={f.title}
              className={`ff-card ${f.cls}`}
              style={{ cursor: "grab" }}
            >
              <div style={{ fontSize: "2rem", marginBottom: ".3rem" }}>
                {f.ic}
              </div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tools ────────────────────────────────────────── */}
      <section style={{ padding: "7rem 3rem", background: "var(--bg2)" }}>
        <div className="mb-5 rv">
          <div className="s-label">Arsenal</div>
          <h2 className="s-title">
            Tools I <span style={{ color: "var(--hot)" }}>Use</span> 🛠️
          </h2>
        </div>
        {[
          {
            cat: "Frontend",
            tools: [
              "⚛️ React",
              "🟨 JavaScript",
              "🎬 GSAP",
              "🌐 Three.js",
              "💨 Bootstrap",
              "🎨 CSS3",
              "📐 Figma",
              "🅲 Elementor",
            ],
          },
          {
            cat: "SEO & Marketing",
            tools: [
              "🔍 RankMath",
              "📊 GA4",
              "🔎 GSC",
              "🧩 Schema.org",
              "✍️ Canva",
              "📋 Notion",
            ],
          },
          {
            cat: "Ops & Automation",
            tools: [
              "⚙️ n8n",
              "🐙 GitHub",
              "📋 Notion",
              "🌐 WordPress",
              "🤖 AI Prompting",
              "🅵 Figma",
            ],
          },
        ].map((g) => (
          <div key={g.cat} className="rv" style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                fontFamily: "var(--FM)",
                fontSize: ".66rem",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: ".65rem",
              }}
            >
              {g.cat}
            </div>
            {g.tools.map((t) => (
              <span key={t} className="tool-pill">
                {t}
              </span>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
