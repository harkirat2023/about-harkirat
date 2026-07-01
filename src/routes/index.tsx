import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Code2,
  Server,
  Database,
  Brain,
  Sparkles,
  Cloud,
  GraduationCap,
  Trophy,
  Users,
  Award,
  Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harkirat Singh — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Harkirat Singh — Computer Engineering student at Thapar Institute building AI-powered platforms with Node.js, FastAPI, React and PostgreSQL.",
      },
      { property: "og:title", content: "Harkirat Singh — Software Engineer" },
      {
        property: "og:description",
        content:
          "Aspiring software engineer building AI-powered, full-stack systems at the intersection of ML and real-world impact.",
      },
    ],
  }),
  component: Index,
});

type Project = {
  n: string;
  title: string;
  tag: string;
  blurb: string;
  stack: string[];
  github: string;
  demo: string;
  points: string[];
};

const projects: Project[] = [
  {
    n: "01",
    title: "IntelliMoney",
    tag: "AI-Powered Financial Health Scoring Platform",
    blurb:
      "An AI-powered financial analytics platform for expense tracking, budgeting, and personalized financial health scoring.",
    stack: ["Python", "React.js", "FastAPI", "MongoDB", "Scikit-learn", "NLP"],
    github: "https://github.com/",
    demo: "#",
    points: [
      "Built an AI-powered financial analytics platform with expense tracking, budgeting and personalized health scoring.",
      "Developed NLP-based expense categorization using TF-IDF + Logistic Regression with secure REST APIs.",
      "Integrated JWT authentication and MongoDB for scalable, multi-user data management.",
      "Designed interactive dashboards with real-time spending insights and financial recommendations.",
    ],
  },
  {
    n: "02",
    title: "KhataBox",
    tag: "Inventory & B2B Retail Management Platform",
    blurb:
      "A full-stack MERN platform unifying shopkeepers, customers and admins around live inventory and ML-driven demand forecasting.",
    stack: ["React.js", "Node.js", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/",
    demo: "#",
    points: [
      "Built a full-stack MERN app with JWT-based role auth across shopkeeper, customer and admin panels.",
      "Developed ML demand forecasting using Random Forest on sales history to predict weekly restocking needs.",
      "Real-time inventory tracking with low-stock alerts, QR-based billing and automated invoice generation.",
    ],
  },
  {
    n: "03",
    title: "Symptom Score AI",
    tag: "ML-Based Symptom Intelligence System",
    blurb:
      "A clinical-grade symptom intelligence engine with calibrated confidence scoring served through a calm React interface.",
    stack: ["React.js", "Flask", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/",
    demo: "#",
    points: [
      "Developed AI-powered disease prediction using Decision Tree and Random Forest models with confidence scoring.",
      "Built Flask REST APIs for real-time symptom analysis, severity prediction and healthcare recommendations.",
      "Designed an end-to-end ML pipeline with Pandas/NumPy/MongoDB for preprocessing, prediction logging and history.",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    icon: Code2,
    items: ["C", "Java", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Backend & Web",
    icon: Server,
    items: [
      "React",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JWT",
      "OAuth",
    ],
  },
  {
    label: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQL", "Redis"],
  },
  {
    label: "Machine Learning",
    icon: Brain,
    items: ["scikit-learn", "TensorFlow", "NLP"],
  },
  {
    label: "AI Tools",
    icon: Sparkles,
    items: ["OpenCode", "Lovable AI", "Replit", "Claude Code", "Copilot"],
  },
  {
    label: "DevOps / Cloud",
    icon: Cloud,
    items: ["Git", "GitHub", "GitHub Actions", "Vercel", "Docker", "Linux"],
  },
];

const achievements = [
  {
    icon: Award,
    title: "Certified — Web Development & Software",
    detail: "Coursera / PW-Skills",
  },
  {
    icon: Trophy,
    title: "250+ DSA Problems Solved",
    detail: "LeetCode, GeeksforGeeks and more",
  },
  {
    icon: Users,
    title: "Led Events for 450+ Participants",
    detail: "Coordinated logistics with a team of 27 members",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return n;
}

function Index() {
  const [time, setTime] = useState("");
  const [active, setActive] = useState<string>("top");
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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.id)];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);


  return (
    <main className="min-h-screen noise relative overflow-x-hidden">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_75/0.12),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40%] -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.18_260/0.10),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_75/0.08),transparent_60%)] blur-3xl" />
      </div>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-xl tracking-tight">
            Harkirat<span className="text-accent">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm text-muted-foreground glass rounded-full px-2 py-1.5">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`relative px-3 py-1.5 rounded-full transition-colors ${
                  active === l.id ? "text-foreground" : "hover:text-foreground"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            ))}
          </nav>
          <a
            href="mailto:hkkirat25@gmail.com"
            className="relative text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full gradient-border bg-card/40 hover:bg-accent hover:text-background transition-colors"
          >
            <span className="relative z-10">Let's talk</span>
          </a>
        </div>
      </header>


      {/* Hero */}
      <section id="top" className="relative pt-40 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Open to SDE internships</span>
            <span className="opacity-40">·</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />Patiala, IN</span>
            <span className="opacity-40">·</span>
            <span>{time} IST</span>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="font-serif text-[14vw] md:text-[9.5rem] leading-[0.88] tracking-tight text-balance"
              >
                Harkirat
                <br />
                <span className="italic text-gradient animate-gradient">Singh.</span>
              </motion.h1>
            </div>


            {/* Portrait placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="md:col-span-4"
            >
              <div className="relative aspect-[4/5] w-full border border-border/60 rounded-xl overflow-hidden bg-card/40 backdrop-blur-sm group">
                {/* TODO: replace with <img src="/your-photo.jpg" ... /> */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.14_75/0.22),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <div className="h-14 w-14 rounded-full border border-dashed border-border flex items-center justify-center text-2xl font-serif italic">HS</div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em]">Portrait — coming soon</div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>· est. 2005</span>
                  <span>frame_01</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-14 grid md:grid-cols-12 gap-8 items-end"
          >
            <p className="md:col-span-7 text-xl md:text-2xl font-serif leading-snug text-balance">
              Aspiring <span className="text-accent">software engineer</span> at{" "}
              Thapar Institute, building AI-powered platforms and real-time
              analytics systems at the intersection of{" "}
              <span className="italic">AI, distributed systems and real-world impact</span>.
            </p>
            <div className="md:col-span-5 md:text-right text-sm text-muted-foreground font-mono space-y-1">
              <div>B.E. Computer Engineering</div>
              <div>2023 — 2027</div>
              <div>250+ DSA problems solved</div>
            </div>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hkkirat25@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition"
            >
              <Mail className="h-4 w-4" /> hkkirat25@gmail.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>

          {/* Hero stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden glass"
          >
            {[
              { k: "250+", v: "DSA Problems" },
              { k: "03", v: "Shipped Projects" },
              { k: "450+", v: "Event Reach" },
              { k: "10+", v: "Tech Events Led" },
            ].map((s) => (
              <div key={s.v} className="p-6 bg-card/40 hover:bg-card/70 transition">
                <div className="font-serif text-4xl md:text-5xl text-gradient">{s.k}</div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Marquee strip */}
      <section className="border-y border-border py-8 overflow-hidden bg-muted/20 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 whitespace-nowrap font-serif text-2xl md:text-4xl italic text-muted-foreground animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-12 items-center">
              <span>Node.js</span>
              <span className="text-accent not-italic">✦</span>
              <span className="text-foreground">FastAPI</span>
              <span className="text-accent not-italic">◆</span>
              <span>PostgreSQL</span>
              <span className="text-accent not-italic">✦</span>
              <span className="text-foreground">React · TypeScript</span>
              <span className="text-accent not-italic">❋</span>
              <span>Machine Learning</span>
              <span className="text-accent not-italic">◆</span>
              <span className="text-foreground">REST · WebSockets</span>
              <span className="text-accent not-italic">✦</span>
              <span>Docker · CI/CD</span>
              <span className="text-accent not-italic">◆</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-50%)}}`}</style>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              (01) About
            </div>
          </Reveal>
          <Reveal className="md:col-span-8 space-y-6 font-serif text-2xl md:text-3xl leading-tight text-balance">
            <p>
              Hands-on with{" "}
              <span className="italic text-accent">Node.js, FastAPI, PostgreSQL</span>{" "}
              and REST API design — comfortable with TypeScript, CI/CD pipelines,
              Docker basics and cloud deployment via Vercel and GitHub Actions.
            </p>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Off the keyboard, I serve as Joint Secretary of the IETE Students
              Forum and Creative Content Head at Hostel O, TIET Patiala.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-3">
              (02) Experience
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">Where I've shipped.</h2>
          </Reveal>
          <Reveal className="md:col-span-8">
            <div className="rounded-xl border border-border bg-card/40 backdrop-blur-sm p-8 hover:border-accent/60 transition">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center text-accent">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl">Summer Project Intern</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Thapar Institute of Engineering & Technology · Patiala
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">2025</span>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Developed an AI-powered financial analytics platform for expense
                tracking, budget monitoring and financial health scoring.
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["Python", "React.js", "FastAPI", "MongoDB", "Scikit-learn", "NLP"].map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  (03) Selected Projects
                </div>
                <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
                  Things I've <span className="italic">built</span>.
                </h2>
                <p className="mt-5 max-w-xl text-muted-foreground text-lg font-serif italic">
                  A small catalogue of obsessions — shipped, sharpened, and built to outlive their prototypes.
                </p>
              </div>
              <div className="hidden md:block text-sm font-mono text-muted-foreground">
                {projects.length.toString().padStart(2, "0")} projects
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <Reveal
                key={p.n}
                delay={idx * 0.08}
                className={idx === 0 ? "md:col-span-2" : ""}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative h-full flex flex-col rounded-2xl p-8 glass gradient-border shine hover:bg-card transition-all duration-500 overflow-hidden"
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
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative mt-8 aspect-[16/9] w-full rounded-lg border border-border/60 overflow-hidden bg-background">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.82_0.14_75/0.18),transparent_50%)]" />
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_80%,oklch(0.82_0.14_75/0.35),transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                      Cover · {p.title}
                    </div>
                  </div>

                  <p className="relative mt-6 font-serif text-lg md:text-xl text-foreground/90 leading-snug text-balance">
                    {p.blurb}
                  </p>

                  <ul className="relative mt-6 space-y-2 text-muted-foreground text-[15px] leading-relaxed">
                    {p.points.map((pt, i) => (
                      <li key={i} className="text-balance flex gap-3">
                        <span className="text-accent mt-2 h-1 w-3 shrink-0 bg-current rounded-full" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground group-hover:border-accent/40 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="relative mt-8 flex flex-wrap gap-3 pt-6 border-t border-border/60 mt-auto">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition"
                    >
                      <Github className="h-3.5 w-3.5" /> Repository
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-4 py-2 text-xs font-mono uppercase tracking-widest hover:opacity-90 transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-32 border-t border-border bg-card/20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (04) Toolkit
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
              The <span className="italic">instruments</span> I play.
            </h2>
            <p className="text-muted-foreground text-lg font-serif italic mb-16 max-w-xl">
              A sharp, opinionated stack — chosen for fluency, not fashion.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.label} delay={gi * 0.05}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="h-full rounded-2xl glass gradient-border p-6 hover:border-accent/60 transition"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg border border-border flex items-center justify-center text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-serif text-2xl">{group.label}</h3>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {group.items.length.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((it, i) => (
                        <motion.span
                          key={it}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.03 * i, duration: 0.4 }}
                          className="text-xs font-mono border border-border px-2.5 py-1 rounded-full text-muted-foreground hover:border-accent hover:text-accent transition cursor-default"
                        >
                          {it}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 rounded-xl border border-border bg-background/60 backdrop-blur-sm p-6">
              <h3 className="font-serif text-2xl mb-3">CS Coursework</h3>
              <p className="text-muted-foreground">
                Data Structures & Algorithms · OOP · DBMS · Computer Networks · Machine Learning · Artificial Intelligence
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (05) Achievements
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-16">
              Milestones <span className="italic">worth marking</span>.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="h-full rounded-2xl glass gradient-border shine p-8 hover:border-accent/60 transition"
                  >
                    <div className="h-12 w-12 rounded-lg border border-border flex items-center justify-center text-accent mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-2xl leading-snug mb-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.detail}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education + Leadership */}
      <section className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (06) Education
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 inline-flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              Where I'm sharpening the blade.
            </h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-accent/60 transition">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Thapar Institute of Engineering & Technology</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">2023 — 2027</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  B.E. Computer Engineering · Patiala, Punjab
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (07) Leadership
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Life beyond the compiler.</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-accent/60 transition">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Joint Secretary — IETE Students Forum, TIET</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">May '25 — May '26</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Coordinated 10+ tech events and workshops, growing club membership by 40%.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-accent/60 transition">
                <div className="flex justify-between items-baseline gap-4">
                  <h3 className="font-serif text-xl">Creative Content Head — Hostel O, TIET</h3>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">Aug '24 — Present</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Author the visual voice of the residence through data-led storytelling.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-40 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl relative">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
              (08) Get in touch
            </div>
            <h2 className="font-serif text-6xl md:text-9xl tracking-tight leading-[0.95] text-balance">
              Let's build <br />
              <span className="italic text-accent">something unforgettable</span>.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground text-lg font-serif italic">
              Internships, collaborations, or a quiet conversation about ideas worth chasing — my inbox is always open.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-4">
            <Reveal>
              <a
                href="mailto:hkkirat25@gmail.com"
                className="group flex items-center justify-between gap-6 rounded-2xl glass gradient-border p-8 hover:bg-card transition"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 inline-flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </div>
                  <div className="font-serif text-2xl md:text-3xl group-hover:text-accent transition">hkkirat25@gmail.com</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href="tel:+918847654698"
                className="group flex items-center justify-between gap-6 rounded-2xl glass gradient-border p-8 hover:bg-card transition"
              >
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 inline-flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5" /> Phone
                  </div>
                  <div className="font-serif text-2xl md:text-3xl group-hover:text-accent transition">+91 88476 54698</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Harkirat Singh · Crafted with intent</div>
          <div className="flex gap-6">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a href="mailto:hkkirat25@gmail.com" className="inline-flex items-center gap-1.5 hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
