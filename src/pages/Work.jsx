import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "../components/PageHero";
import { PROJECTS } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = [
  { val: "all", label: "All Projects" },
  { val: "frontend", label: "⚡ Frontend" },
  { val: "ops", label: "⚙️ Ops / JS" },
];

export default function Work() {
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proj-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".proj-grid",
            start: "top 82%",
            once: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Real Code · Real GitHub Repos"
        title="5 Projects.<br /><span style='color:var(--hot)'>All Mine.</span>"
        sub="No fake metrics, no invented clients, no borrowed designs. Every repo is on GitHub. Judge the code, not the claim."
        word="WORK"
      />

      <section className="work-section">
        <div className="filter-bar rv">
          {FILTERS.map((f) => (
            <button
              key={f.val}
              className={`filter-btn ${active === f.val ? "active" : ""}`}
              onClick={() => setActive(f.val)}
            >
              {f.label}
            </button>
          ))}
          <span
            style={{
              fontFamily: "var(--FM)",
              fontSize: ".62rem",
              color: "var(--muted)",
              alignSelf: "center",
              marginLeft: "auto",
            }}
          >
            {visible.length} project{visible.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div
          className="rv"
          style={{
            background: "var(--yel)",
            border: "var(--border)",
            borderRadius: 14,
            padding: "1rem 1.4rem",
            marginBottom: "2.5rem",
            fontFamily: "var(--FM)",
            fontSize: ".73rem",
            lineHeight: 1.85,
            boxShadow: "var(--shadow-sm)",
            color: "#0d0900",
          }}
        >
          <strong>🎯 Full transparency:</strong> I'm a fresh PGDM grad — no
          corporate job experience yet. These projects are how I've been
          building real skills in public. The architecture choices, the CSS
          decisions, the copy — all deliberate. The code is live on GitHub;
          click any card to check it.
        </div>

        <div className="proj-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div
          style={{
            marginTop: "4rem",
            padding: "2.5rem 3rem",
            background: "var(--ink)",
            border: "var(--border)",
            borderRadius: 24,
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            transition: "background .35s",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--FM)",
                fontSize: ".63rem",
                color: "var(--lime)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                marginBottom: ".5rem",
              }}
            >
              All code is public
            </div>
            <h3
              style={{
                fontFamily: "var(--F)",
                fontWeight: 900,
                fontSize: "clamp(1.2rem,2.5vw,1.8rem)",
                color: "white",
                letterSpacing: "-.03em",
                lineHeight: 1.1,
              }}
            >
              See everything on GitHub →
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,.4)",
                fontSize: ".82rem",
                marginTop: ".4rem",
                fontFamily: "var(--FM)",
              }}
            >
              Commits, structure, readme files — all open.
            </p>
          </div>
          <a
            href="https://github.com/noonelaanvesh6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            🐙 View GitHub Profile
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <h2 className="rv">
          See something you like?
          <br />
          <em>Let's build the real thing.</em>
        </h2>
        <p className="rv">
          These are learning projects. The next ones will be with your team.
          <br />
          If you want someone who ships and thinks — let's talk.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap rv">
          <Link to="/contact" className="btn-primary">
            Book a Call →
          </Link>
          <Link to="/about" className="btn-secondary">
            About Me
          </Link>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project: p, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="proj-card" data-dark={p.bgDark ? "true" : "false"}>
      <div
        className="proj-thumb"
        style={{
          height: 200,
          background: p.bgGrad,
          position: "relative",
          overflow: "hidden",
          borderBottom: "var(--border)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "4.5rem",
            opacity: p.bgDark ? 0.8 : 0.7,
          }}
        >
          {p.emoji}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: ".75rem 1rem",
            background: "linear-gradient(transparent, rgba(0,0,0,.72))",
            fontFamily: "var(--FM)",
            fontSize: ".64rem",
            color: "rgba(255,255,255,.75)",
            letterSpacing: ".04em",
            fontStyle: "italic",
          }}
        >
          "{p.tagline}"
        </div>
        <span className={`proj-badge ${p.badge}`}>{p.badgeText}</span>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-arrow"
            style={{ position: "absolute", bottom: ".75rem", right: ".75rem" }}
          >
            ↗
          </a>
        )}
      </div>

      <div className="proj-body">
        <div className="proj-cat">{p.category}</div>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-desc">{p.desc}</p>

        <div
          style={{
            background: "var(--bg2)",
            border: "var(--border)",
            borderRadius: 10,
            padding: ".75rem .95rem",
            marginTop: ".9rem",
            marginBottom: ".9rem",
            fontFamily: "var(--FM)",
            fontSize: ".68rem",
            lineHeight: 1.7,
            color: "var(--ink)",
            transition: "background .35s, border-color .35s",
          }}
        >
          {p.outcome}
        </div>

        {p.highlights && (
          <>
            <button
              onClick={() => setExpanded((e) => !e)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontFamily: "var(--FM)",
                fontSize: ".63rem",
                color: "var(--hot)",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: ".35rem",
                marginBottom: expanded ? ".75rem" : ".9rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  transform: expanded ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform .25s",
                }}
              >
                ▶
              </span>
              {expanded ? "Hide" : "Show"} highlights ({p.highlights.length})
            </button>

            {expanded && (
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 .9rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: ".38rem",
                }}
              >
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      fontFamily: "var(--FM)",
                      fontSize: ".68rem",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      display: "flex",
                      gap: ".5rem",
                    }}
                  >
                    <span style={{ color: "var(--lime)", flexShrink: 0 }}>
                      ✦
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <div className="proj-stack">
          {p.stack.map((s) => (
            <span key={s} className="proj-chip">
              {s}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: ".6rem",
            marginTop: "1.1rem",
            flexWrap: "wrap",
          }}
        >
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                fontSize: ".65rem",
                padding: ".52rem 1.1rem",
                flex: 1,
                justifyContent: "center",
              }}
            >
              🐙 GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                fontSize: ".65rem",
                padding: ".52rem 1.1rem",
                flex: 1,
                justifyContent: "center",
              }}
            >
              ↗ Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
