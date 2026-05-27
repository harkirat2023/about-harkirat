import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harkirat Singh — Software Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Harkirat Singh — Computer Engineering student at Thapar Institute crafting AI-powered, full-stack products with obsessive detail.",
      },
      { property: "og:title", content: "Harkirat Singh — Portfolio" },
      {
        property: "og:description",
        content: "Full-stack & AI engineer architecting intelligent, human-first products.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "FinGuard AI",
    tag: "Cognitive Financial Wellness Engine",
    blurb:
      "An autonomous financial co-pilot that reads your spending like a story — surfacing the plot twists before they hit your wallet.",
    stack: ["Python", "React", "FastAPI", "MongoDB", "Scikit-learn", "NLP"],
    href: "#",
    points: [
      "Conversational dashboards translating raw transactions into living, breathing insights.",
      "Bespoke financial health scoring blending behavioural signals with bank-grade analytics.",
      "Hardened FastAPI core with JWT, role isolation, and an elastic MongoDB spine.",
      "Custom Logistic Regression + TF-IDF pipeline that learns the dialect of your expenses.",
    ],
  },
  {
    n: "02",
    title: "Stock Wise AI",
    tag: "Predictive Commerce Operating System",
    blurb:
      "A nerve-system for modern retail — forecasting demand, choreographing inventory, and turning shelves into intelligent surfaces.",
    stack: ["React", "Node.js", "MongoDB", "Python", "Scikit-learn"],
    href: "#",
    points: [
      "Tri-persona MERN console for shopkeepers, customers and admins, woven together by JWT.",
      "Random Forest forecasting that anticipates restocks before the shelves whisper.",
      "Live inventory pulse, low-stock alarms, QR-native billing and zero-touch invoicing.",
    ],
  },
  {
    n: "03",
    title: "MediPredict AI",
    tag: "Clinical Symptom Intelligence",
    blurb:
      "A second opinion at the speed of curiosity — diagnostics with calibrated confidence, served through a calm, clinical interface.",
    stack: ["React", "Flask", "MongoDB", "Python", "Scikit-learn"],
    href: "#",
    points: [
      "Ensembled Decision Tree + Random Forest verdicts paired with probabilistic certainty.",
      "Flask micro-API streaming predictions, severity and precautions in real time.",
      "Pandas/NumPy pipeline mapping the messy grammar of symptoms to disease taxonomies.",
      "Longitudinal patient logs surfaced through an elegant React command center.",
    ],
  },
];

const skills = [
  { label: "Languages", items: ["C", "Java", "Python", "SQL", "HTML", "CSS", "Tailwind"] },
  { label: "Frameworks", items: ["React.js", "Redux", "Node.js", "Express", "FastAPI", "Flask"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
  { label: "AI Tools", items: ["Lovable", "Claude Code", "Copilot", "Replit"] },
];

function Index() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen noise">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Harkirat<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="mailto:hkkirat25@gmail.com"
            className="text-xs font-mono uppercase tracking-widest border border-border px-3 py-1.5 rounded-full hover:bg-accent hover:text-background hover:border-accent transition"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Open to internships · Patiala, IN · {time} IST
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="font-serif text-[14vw] md:text-[9.5rem] leading-[0.88] tracking-tight text-balance">
                Harkirat
                <br />
                <span className="italic text-muted-foreground">Singh.</span>
              </h1>
            </div>

            {/* Portrait placeholder — upload later */}
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] w-full border border-border rounded-md overflow-hidden bg-card/40 group">
                {/*
                  TODO: Replace the placeholder block below with your portrait.
                  Example: <img src="/your-photo.jpg" alt="Harkirat Singh" className="absolute inset-0 w-full h-full object-cover" />
                */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.18),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <div className="h-14 w-14 rounded-full border border-dashed border-border flex items-center justify-center text-2xl font-serif italic">HS</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em]">Portrait — coming soon</div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>· est. 2005</span>
                  <span>frame_01</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-xl md:text-2xl font-serif leading-snug text-balance">
              A second-year engineer at{" "}
              <span className="text-accent">Thapar Institute</span>, devoted
              to the quiet craft of turning unruly data into{" "}
              <span className="italic">decisions worth trusting</span> — one
              well-pondered interface at a time.
            </p>
            <div className="md:col-span-5 md:text-right text-sm text-muted-foreground font-mono space-y-1">
              <div>B.E. Computer Engineering</div>
              <div>2023 — 2027</div>
              <div>250+ algorithms wrangled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip — fancy edition */}
      <section className="border-y border-border py-8 overflow-hidden bg-muted/30 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 whitespace-nowrap font-serif text-2xl md:text-4xl italic text-muted-foreground animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-12 items-center">
              <span>Architecting intelligent systems</span>
              <span className="text-accent not-italic">✦</span>
              <span className="text-foreground">Designing with intent</span>
              <span className="text-accent not-italic">◆</span>
              <span>Engineering with elegance</span>
              <span className="text-accent not-italic">✦</span>
              <span className="text-foreground">Shipping with conviction</span>
              <span className="text-accent not-italic">❋</span>
              <span>Where machine learning meets human craft</span>
              <span className="text-accent not-italic">◆</span>
              <span className="text-foreground">Pixels, predictions, poetry</span>
              <span className="text-accent not-italic">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-50%)}}`}</style>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              (01) About
            </div>
          </div>
          <div className="md:col-span-8 space-y-6 font-serif text-2xl md:text-3xl leading-tight text-balance">
            <p>
              I live at the seam where{" "}
              <span className="italic text-accent">machine learning</span> meets
              the surfaces real people touch — predictions worth acting on,
              interfaces that respect the human on the other side.
            </p>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Off the keyboard, I shape narrative as Creative Content Head at
              Hostel O and serve as Joint Secretary of the IETE Students Forum,
              TIET Patiala.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
                (02) Selected Work
              </div>
              <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
                Things I've <span className="italic">conjured</span>.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground text-lg font-serif italic">
                A small catalogue of obsessions — each one shipped, sharpened,
                and built to outlive its prototype.
              </p>
            </div>
            <div className="hidden md:block text-sm font-mono text-muted-foreground">
              {projects.length.toString().padStart(2, "0")} chapters
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <a
                key={p.n}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative block border border-border rounded-lg p-8 bg-card/30 hover:bg-card hover:border-accent/60 transition-all duration-500 overflow-hidden ${
                  idx === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                    <div>
                      <h3 className="font-serif text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground italic font-serif">
                        {p.tag}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500"
                  >
                    ↗
                  </span>
                </div>

                {/* Visual placeholder for project imagery */}
                <div className="relative mt-8 aspect-[16/9] w-full rounded-md border border-border/60 overflow-hidden bg-background">
                  {/*
                    TODO: Replace this placeholder with the project's screenshot or cover image.
                    Example: <img src="/finguard-cover.jpg" alt="FinGuard AI preview" className="absolute inset-0 w-full h-full object-cover" />
                  */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--accent)/0.18),transparent_50%)]" />
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.35),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                    Cover · {p.title} — upload pending
                  </div>
                </div>

                <p className="relative mt-6 font-serif text-lg md:text-xl text-foreground/90 leading-snug text-balance">
                  {p.blurb}
                </p>

                <div className="relative mt-6 grid md:grid-cols-5 gap-6">
                  <ul className="md:col-span-3 space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {p.points.map((pt, i) => (
                      <li key={i} className="text-balance flex gap-3">
                        <span className="text-accent mt-1.5 h-1 w-3 shrink-0 bg-current rounded-full" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="md:col-span-2 flex flex-wrap gap-1.5 content-start">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground group-hover:border-accent/40 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  <span>Case study</span>
                  <span className="group-hover:text-accent transition-colors">
                    Visit project →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-32 border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
            (03) Toolkit
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
            The <span className="italic">instruments</span> I play.
          </h2>
          <p className="text-muted-foreground text-lg font-serif italic mb-16 max-w-xl">
            A small, sharp arsenal — chosen for fluency, not fashion.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {skills.map((group) => (
              <div key={group.label} className="bg-background p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-serif text-2xl">{group.label}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {group.items.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <span
                      key={it}
                      className="text-sm border border-border px-3 py-1 rounded-full hover:border-accent hover:text-accent transition cursor-default"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-background p-8 md:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Coursework</h3>
              <p className="text-muted-foreground">
                Data Structures & Algorithms · Object-Oriented Programming ·
                Operating Systems · DBMS · Computer Networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education + Roles */}
      <section className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (04) Education
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Where I sharpened the blade.</h2>
            <div className="space-y-8">
              {[
                {
                  inst: "Thapar Institute of Engineering & Technology",
                  loc: "Patiala, Punjab",
                  deg: "B.E. Computer Engineering",
                  year: "2023 — 2027",
                },
                {
                  inst: "Khalsa College Public School",
                  loc: "Amritsar, Punjab",
                  deg: "CBSE Class 12 · 84.2%",
                  year: "2023",
                },
                {
                  inst: "Holy Heart Presidency School",
                  loc: "Amritsar, Punjab",
                  deg: "ICSE Class 10 · 91%",
                  year: "2021",
                },
              ].map((e) => (
                <div key={e.inst} className="border-t border-border pt-4">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-serif text-xl">{e.inst}</h3>
                    <span className="font-mono text-xs text-muted-foreground shrink-0">{e.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{e.deg} · {e.loc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (05) Leadership
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Life beyond the compiler.</h2>
            <div className="space-y-8">
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Joint Secretary — IETE Students Forum</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">'25 — '26</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Choreographed 10+ tech rituals and workshops, swelling the community by 40%.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Creative Content Head — Hostel O TIET</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">'24 — now</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Authored the visual voice of a thousand-strong residence through data-led storytelling.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Event Conductor</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">450+ ppl</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Orchestrated experiences for 450+ attendees, commanding a crew of 27.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-40 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl relative">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
            (06) Get in touch
          </div>
          <h2 className="font-serif text-6xl md:text-9xl tracking-tight leading-[0.95] text-balance">
            Let's build <br />
            <span className="italic text-accent">something unforgettable</span>.
          </h2>
          <p className="mt-8 max-w-xl text-muted-foreground text-lg font-serif italic">
            Internships, collaborations, or a quiet conversation about ideas worth chasing — my inbox is always open.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <a
              href="mailto:hkkirat25@gmail.com"
              className="group border border-border rounded-lg p-8 hover:border-accent hover:bg-card transition"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Email</div>
              <div className="font-serif text-3xl group-hover:text-accent transition">hkkirat25@gmail.com</div>
            </a>
            <a
              href="tel:+918847654698"
              className="group border border-border rounded-lg p-8 hover:border-accent hover:bg-card transition"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
              <div className="font-serif text-3xl group-hover:text-accent transition">+91 88476 54698</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Harkirat Singh · Crafted with intent</div>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-accent">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-accent">LinkedIn</a>
            <a href="mailto:hkkirat25@gmail.com" className="hover:text-accent">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
