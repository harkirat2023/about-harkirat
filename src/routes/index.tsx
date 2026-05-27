import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harkirat Singh — Software Engineer & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Harkirat Singh — Computer Engineering student at Thapar Institute building AI-powered, full-stack products.",
      },
      { property: "og:title", content: "Harkirat Singh — Portfolio" },
      {
        property: "og:description",
        content: "Full-stack & AI engineer crafting intelligent products.",
      },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "FinGuard AI",
    tag: "AI-Powered Financial Health Scoring",
    stack: ["Python", "React", "FastAPI", "MongoDB", "Scikit-learn", "NLP"],
    points: [
      "AI analytics platform for expense tracking, budget monitoring & financial health scoring.",
      "Interactive dashboards with real-time spending insights and personalized recommendations.",
      "Secure REST APIs with JWT auth and scalable MongoDB architecture.",
      "Logistic Regression + TF-IDF model for automated NLP-based expense categorization.",
    ],
  },
  {
    n: "02",
    title: "Stock Wise AI",
    tag: "Inventory & B2B Retail Management",
    stack: ["React", "Node.js", "MongoDB", "Python", "Scikit-learn"],
    points: [
      "Full-stack MERN app with JWT role-auth for shopkeeper, customer & admin panels.",
      "Random Forest demand forecasting on sales history to predict weekly restocking.",
      "Real-time inventory tracking, low-stock alerts, QR-based billing & auto invoicing.",
    ],
  },
  {
    n: "03",
    title: "MediPredict AI",
    tag: "ML-Based Symptom Intelligence System",
    stack: ["React", "Flask", "MongoDB", "Python", "Scikit-learn"],
    points: [
      "Decision Tree + Random Forest models to predict diseases with confidence scores.",
      "Flask REST API returning predictions, severity levels, and precautions in real time.",
      "Pandas/NumPy ML pipeline for preprocessing on symptom-disease mapping.",
      "Patient history and prediction logs stored in MongoDB with React dashboard.",
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
      <section id="top" className="relative pt-40 pb-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Available for internships · Patiala, IN · {time} IST
          </div>

          <h1 className="font-serif text-[14vw] md:text-[10rem] leading-[0.9] tracking-tight text-balance">
            Harkirat
            <br />
            <span className="italic text-muted-foreground">Singh.</span>
          </h1>

          <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-7 text-xl md:text-2xl font-serif leading-snug text-balance">
              Computer Engineering student at{" "}
              <span className="text-accent">Thapar Institute</span>, building
              AI-powered, full-stack products that turn messy data into
              decisions.
            </p>
            <div className="md:col-span-5 md:text-right text-sm text-muted-foreground font-mono space-y-1">
              <div>B.E. Computer Engineering</div>
              <div>2023 — 2027</div>
              <div>250+ DSA problems solved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-border py-6 overflow-hidden bg-muted/30">
        <div className="flex gap-12 whitespace-nowrap font-serif text-2xl md:text-3xl italic text-muted-foreground animate-[marquee_40s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-12 items-center">
              <span>Full-stack engineering</span>
              <span className="text-accent">✦</span>
              <span>Applied machine learning</span>
              <span className="text-accent">✦</span>
              <span>Product-minded</span>
              <span className="text-accent">✦</span>
              <span>MERN · Python · FastAPI</span>
              <span className="text-accent">✦</span>
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
              I'm a second-year engineer drawn to the seam where{" "}
              <span className="italic text-accent">machine learning</span> meets
              real product surfaces — predictions you can actually act on,
              dashboards that respect the user.
            </p>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Currently leading content for Hostel O and serving as Joint
              Secretary at the IETE Students Forum at TIET Patiala.
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
                Things I've <span className="italic">built</span>.
              </h2>
            </div>
            <div className="hidden md:block text-sm font-mono text-muted-foreground">
              {projects.length.toString().padStart(2, "0")} projects
            </div>
          </div>

          <div className="space-y-px">
            {projects.map((p) => (
              <article
                key={p.n}
                className="group relative border-t border-border py-10 hover:bg-card/60 transition-colors px-2 -mx-2 rounded-sm"
              >
                <div className="grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-1 font-mono text-sm text-muted-foreground pt-2">
                    {p.n}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground italic font-serif">
                      {p.tag}
                    </p>
                  </div>
                  <div className="md:col-span-5 space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {p.points.map((pt, i) => (
                      <p key={i} className="text-balance">— {pt}</p>
                    ))}
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-1.5 content-start">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
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
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-16">
            How I <span className="italic">make</span>.
          </h2>

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
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Studied at.</h2>
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
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Beyond code.</h2>
            <div className="space-y-8">
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Joint Secretary — IETE Students Forum</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">'25 — '26</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Coordinated 10+ tech events and workshops, growing club membership by 40%.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Creative Content Head — Hostel O TIET</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">'24 — now</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Led content strategy and digital campaigns through data-driven social planning.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Event Organizer</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">450+ ppl</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Executed events for 450+ participants, leading a team of 27.
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
            <span className="italic text-accent">something good</span>.
          </h2>

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
          <div>© {new Date().getFullYear()} Harkirat Singh</div>
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
