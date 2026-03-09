import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Rotating statements for the lime banner ────────────────
const STATEMENTS = [
  {
    prefix: "Available →",
    text: "remote, hybrid, or relocation — where opportunity is",
  },
  {
    prefix: "Available →",
    text: "ranking on Google, Perplexity, and ChatGPT simultaneously",
  },
  {
    prefix: "Available →",
    text: "building in public from Vizag while job-hunting globally",
  },
  {
    prefix: "Available →",
    text: "ops thinking + dev hands — a rare combo worth hiring for",
  },
  {
    prefix: "Available →",
    text: "AEO, GEO, schema markup, or vanilla JS Proxy stores",
  },
];

// ── Stats for the bento grid ────────────────────────────────
const STATS = [
  {
    num: "5yr",
    label: "Combined Study Span",
    accent: "#7c3aed",
    bg: "#0f0a1a",
  },
  { num: "6+", label: "GitHub Projects", accent: "#ff2d55", bg: "#1a0008" },
  {
    num: "3+",
    label: "Disciplines\nOne Person",
    accent: "#c8ff00",
    bg: "#c8ff00",
    hero: true,
  },
  { num: "12+", label: "Schema Types Built", accent: "#00d4ff", bg: "#001018" },
  { num: "3mo", label: "Goal: First Role", accent: "#ffe100", bg: "#100e00" },
];

// ── Mini ticker items for bottom strip ─────────────────────
const TICKERS = [
  "SEO / AEO / GEO",
  "React 18",
  "GSAP 3.12",
  "Three.js",
  "Schema.org",
  "n8n Automation",
  "Copywriting",
  "Pub/Sub Pattern",
  "Dark Mode",
  "ES Modules",
  "Vibe Coding",
  "LLM Optimization",
];

// ── Animated counter ───────────────────────────────────────
function Counter({ value, accent }) {
  const ref = useRef(null);
  const num = parseInt(value);
  const suffix = value.replace(String(num), "");

  useEffect(() => {
    if (isNaN(num)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    let obj = { v: 0 };
    const tw = gsap.to(obj, {
      v: num,
      duration: 2,
      ease: "power3.out",
      paused: true,
      onUpdate() {
        if (ref.current) ref.current.textContent = Math.round(obj.v) + suffix;
      },
    });
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 88%",
      once: true,
      onEnter: () => tw.play(),
    });
    return () => {
      tw.kill();
      st.kill();
    };
  }, [num, suffix, value]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: "var(--F)",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-.04em",
        color: accent === "#c8ff00" ? "#0d0900" : accent,
      }}
    >
      {value}
    </span>
  );
}

// ── Main component ─────────────────────────────────────────
export default function StatsBanner() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [erasing, setErase] = useState(false);
  const tickRef = useRef(null);

  // Typewriter
  const [displayed, setDisplayed] = useState("");
  const [stmtIdx, setStmtIdx] = useState(0);
  const stateRef = useRef({ idx: 0, chars: 0, erasing: false });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(STATEMENTS[0].text);
      return;
    }

    let timer;

    const tick = () => {
      const s = stateRef.current;
      const full = STATEMENTS[s.idx].text;

      if (!s.erasing) {
        s.chars++;
        setDisplayed(full.slice(0, s.chars));

        if (s.chars >= full.length) {
          // finished typing — pause then start erasing
          s.erasing = true;
          timer = setTimeout(tick, 3000);
        } else {
          timer = setTimeout(tick, 60);
        }
      } else {
        s.chars--;
        setDisplayed(full.slice(0, s.chars));

        if (s.chars <= 0) {
          // finished erasing — move to next
          s.erasing = false;
          s.idx = (s.idx + 1) % STATEMENTS.length;
          setStmtIdx(s.idx);
          timer = setTimeout(tick, 400);
        } else {
          timer = setTimeout(tick, 25);
        }
      }
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []);

  const stmt = STATEMENTS[stmtIdx];

  // Mini ticker scroll
  useEffect(() => {
    const el = tickRef.current;
    if (!el) return;
    let x = 0,
      raf;
    const tick = () => {
      x -= 0.55;
      const half = el.scrollWidth / 2;
      if (x <= -half) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="stats-banner">
      {/* ── LIME TYPEWRITER STRIP ─────────────────────────── */}
      <div className="sb-lime-strip">
        <span className="sb-prefix">{stmt.prefix}</span>
        <span className="sb-text">
          {displayed}
          <span className="sb-cursor" aria-hidden="true">
            |
          </span>
        </span>
      </div>

      {/* ── BENTO STATS GRID ──────────────────────────────── */}
      <div className="sb-bento">
        {STATS.map((s, i) => (
          <div
            key={s.num}
            className={`sb-cell ${s.hero ? "sb-hero-cell" : ""}`}
            style={{ "--ac": s.accent, "--bg": s.bg, background: s.bg }}
          >
            {/* Ghost number */}
            <span className="sb-ghost" aria-hidden="true">
              {s.num}
            </span>

            {/* Accent bar left */}
            <span className="sb-bar" />

            {/* Content */}
            <Counter value={s.num} accent={s.accent} />
            <p
              className="sb-stat-label"
              style={{
                color: s.hero ? "rgba(0,0,0,.55)" : "#7a6a55",
              }}
            >
              {s.label.split("\n").map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  {line}
                </span>
              ))}
            </p>

            {/* Hero cell description */}
            {s.hero && (
              <p className="sb-hero-desc">
                Ops · Marketing · Frontend.
                <br />
                One hire. Full coverage.
              </p>
            )}
          </div>
        ))}
      </div>

      {/* ── MINI TICKER ───────────────────────────────────── */}
      <div className="sb-ticker-wrap" aria-hidden="true">
        <div className="sb-ticker-inner" ref={tickRef}>
          {[...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className="sb-tick-item">
              <span className="sb-tick-dot">✦</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
