// ============================================================
//  ANVESH PORTFOLIO — CONTENT
//  Real info from resume + honest positioning
// ============================================================

export const PROFILE = {
  name: "Noonela Anvesh",
  short: "Anvesh",
  email: "noonelaanvesh6@gmail.com",
  linkedin: "https://www.linkedin.com/in/noonela-anvesh-yadav",
  location: "Vizag, India · Open to Anywhere",
  phone: "+91 93907 45690",
  resumeUrl: "/Anvesh_Resume.pdf", // drop your PDF in /public
};

// ── HERO TYPEWRITER WORDS ──────────────────────────────────
export const TYPED_WORDS = [
  "rank higher",
  "automate ops",
  "convert better",
  "get found by AI",
  "ship fast",
];

// ── SKILLS GRID ───────────────────────────────────────────
export const SKILLS = [
  {
    id: "seo",
    icon: "🔍",
    color: "sk-c1",
    title: "SEO / AEO / GEO",
    desc: "Traditional search to AI answers. I know what Google, ChatGPT, and Perplexity look for — and I build content that satisfies all three simultaneously.",
    pills: ["Technical SEO", "AEO", "GEO", "Core Web Vitals", "RankMath"],
    bar: { label: "Proficiency", val: 88, color: "var(--lime)" },
  },
  {
    id: "frontend",
    icon: "⚡",
    color: "sk-c2",
    title: "Frontend Dev",
    desc: "React, GSAP, HTML/CSS, Bootstrap. I build interfaces that look intentional and feel fast — not just pretty templates.",
    pills: ["React", "JavaScript", "GSAP", "Bootstrap", "WordPress"],
    bar: { label: "Proficiency", val: 80, color: "var(--hot)" },
  },
  {
    id: "schema",
    icon: "🧩",
    color: "sk-c3",
    title: "Schema & Structured Data",
    desc: "JSON-LD that earns rich results and gets cited in AI overviews. Most marketers skip this — I start with it.",
    pills: ["JSON-LD", "Schema.org", "Rich Results", "LLM Visibility"],
    bar: { label: "Proficiency", val: 85, color: "var(--sky)" },
  },
  {
    id: "copy",
    icon: "✍️",
    color: "sk-c4",
    title: "Marketing & Copy",
    desc: "Digital strategy, copywriting, and content that ranks and converts. I understand the full funnel — from impression to purchase.",
    pills: ["Copywriting", "Digital Marketing", "Funnels", "Lead Gen"],
    bar: { label: "Proficiency", val: 83, color: "var(--yel)" },
  },
  {
    id: "ops",
    icon: "⚙️",
    color: "sk-c5",
    title: "Marketing Operations",
    desc: "Process optimization, cross-functional coordination, and automation pipelines. I studied operations — I apply it to marketing systems.",
    pills: ["n8n", "Notion", "Process Ops", "Analytics", "Canva"],
    bar: { label: "Proficiency", val: 79, color: "var(--pur)" },
  },
  {
    id: "ai",
    icon: "🤖",
    color: "sk-c6",
    title: "AI-Native Builder",
    desc: "I don't just use AI — I build with it. Vibe coding, prompt engineering, n8n automation flows. AI isn't my competitor; it's my co-founder.",
    pills: ["Vibe Coding", "AI Prompting", "n8n", "LLMs", "Automation"],
    bar: { label: "Enthusiasm", val: 97, color: "var(--grn)" },
  },
];

// ── STICKERS ──────────────────────────────────────────────
export const STICKERS = [
  { text: "🔥 Rank #1 or nothing", cls: "s-lime" },
  { text: "✦ Schema is king", cls: "s-hot" },
  { text: "⚡ Speed = revenue", cls: "" },
  { text: "🤖 AEO is the future", cls: "s-sky" },
  { text: "✍️ Copy sells, design tells", cls: "s-yel" },
  { text: "🧩 Structured data > shortcuts", cls: "" },
  { text: "💫 GSAP makes it alive", cls: "s-pur" },
  { text: "🔍 Be where AI looks", cls: "" },
  { text: "☕ Powered by anime & coffee", cls: "s-lime" },
  { text: "📈 GEO = LLM citations", cls: "s-hot" },
  { text: "🎯 Ops brain + dev hands", cls: "" },
  { text: "🌏 Remote · Hybrid · Anywhere", cls: "s-sky" },
  { text: "🦄 Rare trifecta skill set", cls: "s-yel" },
  { text: "🎌 Fueled by anime arcs", cls: "s-pur" },
];

// ── PROJECTS ──────────────────────────────────────────────
// ── PROJECTS ──────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "opsflow",
    cat: "ops",
    badge: "pb-yel",
    badgeText: "Ops · JS",
    emoji: "📋",
    bgGrad: "linear-gradient(135deg,#1a1a2e,#16213e)",
    bgDark: true,
    category: "Vanilla JS · Operations · Architecture",
    title: "OpsFlow — Kanban Command Center",
    tagline: "An ops brain disguised as a Kanban board.",
    desc: "A modular, reactive Kanban system built entirely in vanilla JavaScript — no frameworks. Implements a Proxy-based reactive store, Pub/Sub event architecture, drag-and-drop workflow, and a live operations dashboard that calculates WIP, throughput, lead time, and completion rate. Glassmorphism UI with Chart.js visualizations.",
    outcome:
      "✦ What it proves: I can architect scalable frontend systems from scratch AND think in operational KPIs — not just build pretty UIs.",
    highlights: [
      "Proxy-based reactive state (no React, no Vue)",
      "Pub/Sub pattern for decoupled module communication",
      "Live ops metrics: Lead Time, WIP, Throughput, Completion %",
      "Doughnut chart dashboard via Chart.js",
      "LocalStorage persistence across sessions",
      "MVC-inspired modular folder structure",
    ],
    stack: [
      "Vanilla JS",
      "ES Modules",
      "Proxy Store",
      "Pub/Sub",
      "Chart.js",
      "CSS Glassmorphism",
      "LocalStorage",
    ],
    github: "https://github.com/noonelaanvesh6/opsflow",
    live: "https://noonelaanvesh6.github.io/opsflow/",
  },
  {
    id: "terminal-portfolio",
    cat: "frontend",
    badge: "pb-sky",
    badgeText: "Frontend · CSS",
    emoji: "💻",
    bgGrad: "linear-gradient(135deg,#0a0a0a,#1a1a1a)",
    bgDark: true,
    category: "HTML · CSS · Terminal UI",
    title: "Terminal Portfolio — Pure CSS Animations",
    tagline: "Zero JavaScript. Full personality.",
    desc: "A terminal-style portfolio that renders professional identity through simulated Unix shell commands — whoami, cat profile.txt, node list_skills.js, tail experience.log. Built with zero JavaScript: every animation, stagger, and command sequence is pure CSS keyframes and delays. Fira Code font, macOS window chrome, fully responsive.",
    outcome:
      "✦ What it proves: Deep CSS mastery. When you have no JS to fall back on, your CSS thinking has to be precise.",
    highlights: [
      "Zero JavaScript — 100% HTML + CSS only",
      "Staggered CSS keyframe animations simulate live command execution",
      "Simulated shell commands as navigation metaphor",
      "macOS window controls (pure CSS)",
      "Mobile-responsive with safe word-wrapping",
      "Fira Code monospace typography system",
    ],
    stack: [
      "HTML5",
      "CSS3",
      "Keyframe Animations",
      "Flexbox",
      "Google Fonts",
      "Font Awesome",
    ],
    github: "https://github.com/noonelaanvesh6/resume",
    live: "https://noonelaanvesh6.github.io/resume/",
  },
  {
    id: "netflix-clone",
    cat: "frontend",
    badge: "pb-hot",
    badgeText: "Frontend · Clone",
    emoji: "🎬",
    bgGrad: "linear-gradient(135deg,#1a0000,#2d0000)",
    bgDark: true,
    category: "HTML · CSS · UI Recreation",
    title: "Netflix Homepage Clone",
    tagline: "Pixel-pushing practice on a world-class UI.",
    desc: "A faithful HTML/CSS recreation of the Netflix landing page. The goal wasn't to fake originality — it was to deeply study how a ₹2 trillion company structures visual hierarchy, CTA placement, section rhythm, and responsive breakpoints. Understanding how great UI is assembled at the component level.",
    outcome:
      "✦ What it proves: I learn by dissecting the best. Clone projects are how designers and devs at top companies trained. This is no different.",
    highlights: [
      "Accurate replication of hero, feature sections, and FAQ accordion",
      "CSS Grid + Flexbox layout study",
      "Responsive across desktop, tablet, and mobile",
      "Studied Netflix's CTA hierarchy and color psychology",
      "Custom hover states and transition timings",
    ],
    stack: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Media Queries"],
    github: "https://github.com/noonelaanvesh6/replica",
    live: "https://noonelaanvesh6.github.io/replica/",
  },
  {
    id: "profile-card",
    cat: "frontend",
    badge: "pb-lime",
    badgeText: "Frontend · Bootstrap",
    emoji: "🪪",
    bgGrad: "linear-gradient(135deg,#e8f5e9,#b2dfdb)",
    bgDark: false,
    category: "HTML · CSS · Bootstrap",
    title: "Profile Card Component",
    tagline: "Small component. Big fundamentals.",
    desc: "A clean, reusable profile card built with HTML, CSS, and Bootstrap. Covers the fundamentals that most junior devs skip — spacing system, component structure, hover states, responsive behavior, and utility-class discipline. Built early, kept as a baseline to benchmark growth.",
    outcome:
      "✦ What it proves: Every senior dev started with components like this. I kept mine on GitHub because I'm not hiding where I started.",
    highlights: [
      "Bootstrap 5 utility-first approach",
      "Custom CSS layered over Bootstrap defaults",
      "Hover elevation and transition polish",
      "Mobile-first responsive layout",
      "Reusable component structure",
    ],
    stack: ["HTML5", "CSS3", "Bootstrap 5"],
    github: "https://github.com/noonelaanvesh6/profile-card",
    live: "https://noonelaanvesh6.github.io/profile-card/",
  },
  {
    id: "portfolio",
    cat: "frontend",
    badge: "pb-hot",
    badgeText: "🔴 Live",
    emoji: "🚀",
    bgGrad: "linear-gradient(135deg,#0d0900,#1a0a00)",
    bgDark: true,
    category: "React · GSAP · Three.js · Dark Mode",
    title: "This Portfolio — noonelaanvesh.com",
    tagline: "If I can't show it here, I don't claim it.",
    desc: "The site you're on right now. React 18 MPA with React Router v6, Three.js WebGL particle mesh hero, GSAP ScrollTrigger animations, full dark/light mode with localStorage persistence, Schema.org Person markup, AEO-optimised blog posts, and a custom cursor with color trails. Every feature is a proof of skill.",
    outcome:
      "✦ What it proves: This is the capstone project. The React, the animations, the SEO architecture, the dark mode — all of it is live and inspectable.",
    highlights: [
      "Three.js WebGL particle wave grid, mouse-interactive",
      "GSAP ScrollTrigger — staggered reveals, parallax, elastic interactions",
      "Dark / Light mode via CSS variables + ThemeContext",
      "Schema.org Person JSON-LD structured data",
      "AEO-structured blog with E-E-A-T signals",
      "Custom cursor with multi-color trail system",
      "Page transition ink-wipe + nav auto-hide on scroll",
    ],
    stack: [
      "React 18",
      "Vite 5",
      "React Router v6",
      "GSAP 3.12",
      "Three.js",
      "Bootstrap 5 (grid)",
      "Schema.org",
    ],
    github: "https://github.com/noonelaanvesh6/portfolio",
    live: "https://noonelaanvesh.com",
  },
];

// ── BLOG POSTS ────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "aeo-2025-guide",
    emoji: "🤖",
    thumbBg: "linear-gradient(135deg,#e8f5e9,#c8e6c9)",
    tags: [
      { text: "AEO", cls: "bt-ai" },
      { text: "GEO", cls: "bt-seo" },
    ],
    date: "Feb 2025",
    readTime: "8 min read",
    title: "AEO in 2025: The Honest Guide to Getting Cited by AI Answers",
    excerpt:
      "ChatGPT, Perplexity, and AI Overviews don't work like Google. Here's exactly how Answer Engine Optimization is different — and the 5-step framework to get your content surfaced.",
    content: `
<p>I need to be upfront about something: most "AEO guides" are written by people who've optimized one FAQ page and declared themselves experts. This isn't that. This is what I've learned studying the actual mechanics of how AI answer engines retrieve and surface content — and it's genuinely different from traditional SEO.</p>

<h2>First — What Actually Is AEO?</h2>

<p>Answer Engine Optimization (AEO) is the practice of structuring your content so that AI systems like ChatGPT, Perplexity, Google's AI Overviews, and Bing Copilot can reliably extract, trust, and cite your content in their responses.</p>

<p>The key word is <strong>cite</strong>. Unlike traditional SEO where you want someone to click your blue link, AEO is about being the source that the AI references. Sometimes your URL appears. Sometimes your brand name does. Sometimes just your idea does — but users associate it with you.</p>

<blockquote>"Traditional SEO: get the click. AEO: be the answer."</blockquote>

<h2>Why Traditional SEO Thinking Fails for AEO</h2>

<p>Here's where most people get it wrong. They assume AEO is just "write more FAQs and add FAQ schema." That's not it. FAQ schema helps, but it's the surface layer.</p>

<p>AI answer engines don't crawl the web the same way Google does. They work from:</p>

<ul>
  <li><strong>Training data</strong> — content that was public before their training cutoff</li>
  <li><strong>Retrieval-augmented generation (RAG)</strong> — live web retrieval at query time (Perplexity, AI Overviews)</li>
  <li><strong>Trusted source pools</strong> — sites with consistent E-E-A-T signals get pulled more often</li>
</ul>

<p>This means if you only optimize for RAG-based systems but your content isn't in training data (you're too new), you're invisible to purely generative responses. You need both.</p>

<h2>The 5-Step AEO Framework I Use</h2>

<h3>1. Structure Your Content for Direct Extraction</h3>

<p>AI models look for clear, standalone statements. Instead of burying your answer in a long paragraph, put the core answer in the first 2-3 sentences after a heading. Think of it like writing for a skimmer — because the AI <em>is</em> a skimmer.</p>

<div class="callout">
  💡 AEO Structure: Heading (as a question) → Direct Answer (2-3 sentences) → Supporting Detail → Examples → FAQ at bottom
</div>

<h3>2. Implement the Right Schema Types</h3>

<p>Schema.org markup is your content's structured résumé for AI systems. The schema types that matter most for AEO:</p>

<ul>
  <li><strong>FAQPage</strong> — Most direct. Google and others parse these explicitly.</li>
  <li><strong>HowTo</strong> — Step-based content gets extracted as ordered lists in AI responses.</li>
  <li><strong>Article + datePublished/dateModified</strong> — Signals recency and authoritativeness.</li>
  <li><strong>Person schema</strong> — Builds entity recognition. AI systems understand who the author is.</li>
  <li><strong>Organization/LocalBusiness</strong> — For business entities to appear in knowledge-style answers.</li>
</ul>

<h3>3. Build Entity Authority, Not Just Keyword Density</h3>

<p>Modern AI systems understand entities — people, places, organizations, concepts — not just keywords. You want to be <em>the authoritative entity</em> on a topic, not just the page that uses the phrase the most.</p>

<p>This means: consistent author attribution, mentions on authoritative sites, cross-linking between your own content on the same topic, and a clear topical focus.</p>

<h3>4. Write at the Goldilocks Length</h3>

<p>Not too short (no depth to extract), not too long (AI skips dense walls of text). The sweet spot for AI-cited content tends to be:</p>

<ul>
  <li>800–2000 words for articles</li>
  <li>Short paragraphs (2-4 sentences max)</li>
  <li>Subheadings every 200-300 words</li>
  <li>Bullet points for list-type information</li>
</ul>

<h3>5. Earn Citations From Already-Cited Sources</h3>

<p>This is the GEO (Generative Engine Optimization) play: if sites that AI already trusts — Reddit, Wikipedia, major publications, industry databases — link to or discuss your content, you inherit some of that trust signal.</p>

<p>Guest posts on authoritative sites, getting quoted in news articles, building genuine Reddit presence in your niche — these all build the citation chain that leads back to you.</p>

<h2>What Doesn't Work (That Everyone Still Recommends)</h2>

<ul>
  <li><strong>Keyword stuffing for AI</strong> — AI doesn't count keyword frequency. It reads semantics.</li>
  <li><strong>FAQ pages with 30+ questions</strong> — Dilutes authority. 5-10 highly specific FAQs beat 30 generic ones.</li>
  <li><strong>Optimizing for AI without real E-E-A-T</strong> — AI systems are getting better at detecting thin authority.</li>
</ul>

<h2>The Honest Bottom Line</h2>

<p>AEO is real, and it's only going to matter more as AI search becomes the default. But it's not a silver bullet and it's not magic. It's fundamentally about <strong>writing content that is genuinely useful, clearly structured, and properly attributed</strong>.</p>

<p>The good news: if you do AEO right, you also do traditional SEO right. They're more complementary than they are different.</p>

<p>I'm still learning this — building in public and documenting what I find. If you have questions or want to compare notes, my inbox is open.</p>
    `,
  },

  {
    slug: "vibe-coding-honest-take",
    emoji: "⚡",
    thumbBg: "linear-gradient(135deg,#fff3e0,#ffe0b2)",
    tags: [
      { text: "Frontend", cls: "bt-fe" },
      { text: "AI", cls: "bt-ai" },
    ],
    date: "Jan 2025",
    readTime: "6 min read",
    title:
      "Vibe Coding Is Real: How I Build Products with AI Without Being a Senior Dev",
    excerpt:
      "I'm not a senior engineer. But I've shipped a Three.js WebGL portfolio, a React router app, and multiple automation flows — by learning to work with AI, not against it.",
    content: `
<p>Let me be transparent: I'm a PGDM graduate who started learning to code seriously about a year ago. I'm not a 10x engineer. I don't have 5 years of React experience. But I built this portfolio — Three.js particles, GSAP animations, React Router, Schema markup, the whole thing. How?</p>

<p>Vibe coding. And I want to talk honestly about what it actually is.</p>

<h2>What Vibe Coding Actually Means</h2>

<p>The term got coined half-jokingly by developers using AI tools like Cursor, Claude, and Copilot to build by describing what they want and iterating on the output. But it stuck because it describes something real.</p>

<p>Vibe coding isn't:</p>
<ul>
  <li>"I typed a prompt and got a finished product"</li>
  <li>A shortcut that replaces understanding</li>
  <li>Something only non-developers do</li>
</ul>

<p>Vibe coding is:</p>
<ul>
  <li>Using AI as a pair programmer who never gets tired</li>
  <li>Describing intent and architecture, then refining the output</li>
  <li>Moving fast on implementation while thinking hard on design</li>
</ul>

<blockquote>"Vibe coding is when your mental model is clear enough that you can direct AI to express it in code."</blockquote>

<h2>What You Still Need to Know (The Honest Part)</h2>

<p>Here's where I push back on the hype: AI doesn't replace understanding. It <em>multiplies</em> it.</p>

<p>When I was building the Three.js WebGL hero for this portfolio, I needed to understand:</p>
<ul>
  <li>What BufferGeometry is and why instanced rendering matters</li>
  <li>How the render loop works and why cleanup in useEffect is critical</li>
  <li>The difference between scene, camera, and renderer</li>
  <li>Why my React component was re-mounting and destroying the canvas</li>
</ul>

<p>AI wrote the first version of that component in about 2 minutes. I spent 3 hours debugging why it leaked memory on route change. That debugging required real understanding.</p>

<div class="callout">
  💡 The rule I've learned: AI writes the implementation. You own the architecture. If you don't understand the architecture, you can't debug it when AI gets it wrong — and it will get it wrong.
</div>

<h2>The Stack I Use for Vibe Coding</h2>

<p>My current setup for building fast as a non-senior dev:</p>

<ul>
  <li><strong>Claude (Anthropic)</strong> — Best for explaining concepts + writing complex components + debugging</li>
  <li><strong>Cursor</strong> — IDE with AI built-in. Game changer for iterating fast</li>
  <li><strong>n8n</strong> — Visual automation builder. Zero-code backend for marketing workflows</li>
  <li><strong>Figma + FigJam</strong> — Design first, code second. Having a reference prevents AI from going rogue</li>
</ul>

<h2>Where It Gets Genuinely Powerful</h2>

<p>The biggest unlock for me wasn't code generation — it was <strong>filling knowledge gaps in real-time</strong>.</p>

<p>When I was building schema markup for this site, I hit a question: "Does Google actually read nested @type declarations in a Person schema?" I asked Claude, got a detailed answer with citations, and made a better architectural decision in 90 seconds instead of 45 minutes of Googling.</p>

<p>That velocity compounds. You learn faster. You build faster. You understand more because you're actually building, not just reading tutorials.</p>

<h2>The Skill That Matters: Prompt Architecture</h2>

<p>The real skill in vibe coding isn't prompting — it's <strong>prompt architecture</strong>. Breaking a complex system into components small enough for AI to implement correctly, in the right order, with the right context.</p>

<p>This is actually a transferable skill from my PGDM operations coursework. Process decomposition. Breaking a complex workflow into sequential, well-defined tasks. The same thinking applies to directing AI.</p>

<h2>What I'm Still Learning</h2>

<p>I'm not done learning the fundamentals. I'm actively studying:</p>
<ul>
  <li>React patterns and state management beyond useState</li>
  <li>Performance optimization (why my Three.js was tanking mobile)</li>
  <li>Backend basics — because n8n won't always be enough</li>
  <li>TypeScript — because I keep getting runtime errors that TypeScript would catch</li>
</ul>

<p>Vibe coding got me here. Deep learning will take me further. Both are happening at the same time.</p>

<p>If you're a marketer or ops person who wants to start coding — don't wait until you feel "ready." The tools exist right now to build real things while you learn the foundations. Start building.</p>
    `,
  },

  {
    slug: "geo-llm-visibility",
    emoji: "🧩",
    thumbBg: "linear-gradient(135deg,#e3f2fd,#bbdefb)",
    tags: [
      { text: "GEO", cls: "bt-seo" },
      { text: "LLMs", cls: "bt-ai" },
    ],
    date: "Dec 2024",
    readTime: "7 min read",
    title:
      "GEO: How to Make Sure ChatGPT and Perplexity Actually Know You Exist",
    excerpt:
      "GEO (Generative Engine Optimization) is the SEO of the AI era. It's less about keywords and more about becoming a trusted entity in the knowledge graph that LLMs are constantly rebuilding.",
    content: `
<p>Let me start with a question that should keep every marketer up at night: if someone asks ChatGPT about your product category, does your brand come up?</p>

<p>For most businesses — even ones with solid traditional SEO — the answer is no. And that gap is going to matter a lot as AI-mediated search becomes the norm.</p>

<p>Generative Engine Optimization (GEO) is the emerging practice of optimizing for this — getting your brand, content, and expertise into the knowledge base that LLMs draw from. It's related to AEO but distinct. AEO is about answering specific questions. GEO is about being a recognized entity in the AI's understanding of the world.</p>

<h2>How LLMs "Know" Things</h2>

<p>To optimize for LLMs, you need to understand (at a basic level) how they build their world model. Large language models like GPT-4, Claude, and Gemini are trained on enormous datasets of public web content. During training, they don't just memorize text — they build a semantic understanding of entities, relationships, and authority.</p>

<p>When someone asks "what's the best marketing automation tool for small businesses?", the model isn't searching the web in real-time (usually). It's drawing from its internal representation of the marketing automation landscape — entities it "knows" and the claims associated with them.</p>

<p><strong>GEO is about being present in that internal representation.</strong></p>

<h2>The Three Levers of GEO</h2>

<h3>1. Entity Clarity (Be a Distinct Thing)</h3>

<p>LLMs need to understand what you are before they can mention you in the right context. Entity clarity means:</p>

<ul>
  <li>Consistent brand/person name across all web properties</li>
  <li>Clear, unambiguous description of what you do (your homepage should answer "what is X?" immediately)</li>
  <li>Wikipedia-style factual statements about your entity (founding, location, specialty)</li>
  <li>Person schema markup with sameAs links to LinkedIn, social profiles</li>
</ul>

<div class="callout">
  💡 Test: Search "[your name] is..." or "[your brand] is..." in ChatGPT. What completes that sentence? If it's wrong or blank, your entity isn't established.
</div>

<h3>2. Citation Velocity (Get Mentioned by Sources LLMs Trust)</h3>

<p>LLMs disproportionately weight content from sources that appear frequently in training data: major publications, Reddit, industry databases, Wikipedia, academic sources, GitHub, and established blogs.</p>

<p>GEO citation building means strategically placing your brand/name/ideas in these ecosystems:</p>

<ul>
  <li>Guest articles in industry publications</li>
  <li>Genuine, helpful participation in Reddit communities relevant to your niche</li>
  <li>Quotes in press mentions, even small ones</li>
  <li>Open-source contributions that get discussed in developer communities</li>
  <li>Data/research that other sites cite (original research is LLM gold)</li>
</ul>

<h3>3. Semantic Depth (Own a Topic Cluster, Not Just a Keyword)</h3>

<p>LLMs don't index by keyword — they understand topical authority. If you have 10 articles that deeply explore different facets of "marketing automation for D2C brands," the model builds a richer semantic association between you and that topic than if you have 100 thin articles that all target the same keyword.</p>

<p>Topic cluster content strategy (which has always been good for SEO) is even more important for GEO because LLMs evaluate topical completeness.</p>

<h2>GEO vs. AEO vs. SEO — The Simple Breakdown</h2>

<ul>
  <li><strong>SEO</strong>: Rank in Google's blue links. Metric: organic click-through.</li>
  <li><strong>AEO</strong>: Get cited in AI's direct answers. Metric: answer citations.</li>
  <li><strong>GEO</strong>: Exist in AI's understanding of your domain. Metric: brand mentions in AI responses, entity recognition.</li>
</ul>

<p>They're not either/or. Strong SEO content usually helps AEO. Strong AEO usually helps GEO. But they require different optimization strategies and different mental models.</p>

<h2>The GEO Checklist I Use</h2>

<p>For any client or project, I check these first:</p>

<ul>
  <li>Is there a Person/Organization schema with proper sameAs links?</li>
  <li>Does the homepage answer "what is [X]?" in the first 150 words?</li>
  <li>Is there a topical cluster of 5+ articles on your core subject?</li>
  <li>Does the brand appear in at least one high-DA publication?</li>
  <li>Are there clear, factual, citable statements about the entity's expertise?</li>
  <li>Is the brand/person mentioned positively in Reddit, Quora, or forums?</li>
</ul>

<h2>Where This Is Going</h2>

<p>I think GEO is going to be the most important marketing discipline of the next 5 years. As search behavior shifts to AI-first (especially among younger demographics), brand visibility in LLM responses will matter as much as Google rankings did in the 2010s.</p>

<p>The early movers — brands and individuals who establish strong entity presence now — will have an enormous advantage as this transition accelerates.</p>

<p>I'm actively building my own GEO presence as I write this. This blog, the schema on this site, my LinkedIn activity, this article itself — all of it is part of the strategy. Building in public is a GEO tactic too.</p>
    `,
  },
];
