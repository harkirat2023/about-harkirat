import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
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
  Check,
  Send,
  Loader2,
  Layers,
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

/* ---------------- data ---------------- */

type Project = {
  n: string;
  title: string;
  tag: string;
  blurb: string;
  stack: string[];
  github: string;
  demo: string;
  points: string[];
  span: string; // bento span
  accent: string; // tw color
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
      "NLP expense categorization with TF-IDF + Logistic Regression, served through FastAPI.",
      "JWT auth and MongoDB for scalable multi-user data.",
      "Interactive dashboards surfacing real-time spending insights.",
    ],
    span: "md:col-span-1",
    accent: "from-amber-400/25 to-rose-500/10",
  },
  {
    n: "02",
    title: "KhataBox",
    tag: "Inventory & B2B Retail Management",
    blurb:
      "Full-stack MERN platform unifying shopkeepers, customers and admins around live inventory and ML-driven demand forecasting.",
    stack: ["React", "Node.js", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/",
    demo: "#",
    points: [
      "Random Forest weekly-restock forecasting on sales history.",
      "Real-time inventory, QR billing, auto invoices.",
      "Role-based auth across three panels.",
    ],
    span: "md:col-span-1",
    accent: "from-emerald-400/20 to-cyan-500/10",
  },
  {
    n: "03",
    title: "Symptom Score AI",
    tag: "ML-Based Symptom Intelligence",
    blurb:
      "Clinical-grade symptom engine with calibrated confidence, served through a calm React interface.",
    stack: ["React", "Flask", "MongoDB", "Python", "Scikit-learn"],
    github: "https://github.com/",
    demo: "#",
    points: [
      "Decision Tree + Random Forest with confidence scoring.",
      "Flask REST APIs for real-time severity prediction.",
      "End-to-end pipeline with Pandas/NumPy/MongoDB.",
    ],
    span: "md:col-span-1",
    accent: "from-violet-400/20 to-indigo-500/10",
  },
];





const experience = [
  {
    role: "Summer Project Intern",
    org: "Thapar Institute of Engineering & Technology",
    date: "Jun 2025 — Jul 2025",
    body: "Built an AI-powered financial analytics platform for expense tracking, budget monitoring and financial health scoring.",
    stack: ["Python", "React.js", "FastAPI", "MongoDB", "Scikit-learn", "NLP"],
  },
  {
    role: "Joint Secretary — IETE Students Forum",
    org: "TIET Patiala",
    date: "May 2025 — May 2026",
    body: "Coordinated 10+ technical events and workshops, growing club membership by 40%.",
    stack: ["Leadership", "Ops", "Community"],
  },
  {
    role: "Creative Content Head",
    org: "Hostel O, TIET",
    date: "Aug 2024 — Present",
    body: "Author the visual voice of the residence through data-led storytelling and campaigns.",
    stack: ["Content", "Design", "Strategy"],
  },
];

const achievements = [
  { icon: Award, title: "Certified — Web Dev & Software Engineering", detail: "Coursera / PW-Skills" },
  { icon: Trophy, title: "250+ DSA Problems Solved", detail: "LeetCode, GeeksforGeeks" },
  { icon: Users, title: "Led Events for 450+ Participants", detail: "27-member core team" },
];

const navLinks = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ---------------- primitives ---------------- */

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

/* 3D tilt card */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Mouse mesh gradient for hero */
function HeroMesh() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const bg = useTransform([sx, sy], ([lx, ly]: number[]) =>
    `radial-gradient(600px circle at ${lx}% ${ly}%, oklch(0.82 0.14 75 / 0.22), transparent 60%), radial-gradient(700px circle at ${100 - lx}% ${100 - ly}%, oklch(0.6 0.18 260 / 0.18), transparent 60%)`,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      x.set(((e.clientX - r.left) / r.width) * 100);
      y.set(((e.clientY - r.top) / r.height) * 100);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-auto absolute inset-0 -z-10"
      style={{ background: bg }}
    />
  );
}

/* Scroll progress bar */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-accent via-accent-2 to-accent"
    />
  );
}

/* ---------------- page ---------------- */

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
      <ScrollProgress />

      {/* ambient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_75/0.10),transparent_60%)] blur-3xl" />
        <div className="absolute top-[40%] -right-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.18_260/0.09),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_75/0.06),transparent_60%)] blur-3xl" />
      </div>

      {/* floating dock */}
      <FloatingDock active={active} />

      {/* top-left brand & top-right CTA */}
      <div className="fixed top-4 left-6 z-50">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Harkirat<span className="text-accent">.</span>
        </a>
      </div>
      <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
        <span className="hidden md:inline text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          {time} IST
        </span>
        <a
          href="mailto:hkkirat25@gmail.com"
          className="text-[11px] font-mono uppercase tracking-widest px-3.5 py-2 rounded-full gradient-border bg-card/60 backdrop-blur hover:bg-accent hover:text-background transition-colors"
        >
          Let's talk
        </a>
      </div>

      {/* Hero */}
      <section id="top" className="relative pt-40 pb-24 px-6 min-h-screen flex items-center">
        <HeroMesh />
        <div className="mx-auto max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Open to SDE internships</span>
            <span className="opacity-40">·</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />Patiala, IN</span>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="font-serif text-[14vw] md:text-[9.5rem] leading-[0.88] tracking-tight text-balance"
              >
                {"Harkirat".split("").map((c, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {c}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="italic text-gradient animate-gradient inline-block"
                >
                  Singh.
                </motion.span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="md:col-span-4"
            >
              <div className="relative aspect-[4/5] w-full border border-border/60 rounded-xl overflow-hidden bg-card/40 backdrop-blur-sm group">
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
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-14 grid md:grid-cols-12 gap-8 items-end"
          >
            <p className="md:col-span-7 text-xl md:text-2xl font-serif leading-snug text-balance">
              Aspiring <span className="text-accent">software engineer</span> at Thapar
              Institute — building AI-powered platforms and real-time analytics at the
              intersection of{" "}
              <span className="italic">AI, distributed systems and real-world impact</span>.
            </p>
            <div className="md:col-span-5 md:text-right text-sm text-muted-foreground font-mono space-y-1">
              <div>B.E. Computer Engineering</div>
              <div>2023 — 2027</div>
              <div>250+ DSA problems solved</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="mailto:hkkirat25@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition">
              <Mail className="h-4 w-4" /> hkkirat25@gmail.com
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-accent hover:text-accent transition">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
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

      {/* Marquee */}
      <section className="border-y border-border py-8 overflow-hidden bg-muted/20 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-12 whitespace-nowrap font-serif text-2xl md:text-4xl italic text-muted-foreground animate-[marquee_45s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex gap-12 items-center">
              <span>Node.js</span><span className="text-accent not-italic">✦</span>
              <span className="text-foreground">FastAPI</span><span className="text-accent not-italic">◆</span>
              <span>PostgreSQL</span><span className="text-accent not-italic">✦</span>
              <span className="text-foreground">React · TypeScript</span><span className="text-accent not-italic">❋</span>
              <span>Machine Learning</span><span className="text-accent not-italic">◆</span>
              <span className="text-foreground">REST · WebSockets</span><span className="text-accent not-italic">✦</span>
              <span>Docker · CI/CD</span><span className="text-accent not-italic">◆</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0)} to { transform: translateX(-50%)}}`}</style>
      </section>

      {/* Work — Bento */}
      <section id="work" className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  (01) Selected Work
                </div>
                <h2 className="font-serif text-5xl md:text-7xl tracking-tight">
                  Things I've <span className="italic">built</span>.
                </h2>
                <p className="mt-5 max-w-xl text-muted-foreground text-lg font-serif italic">
                  A small catalogue of obsessions — shipped, sharpened, built to outlive their prototypes.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm font-mono text-muted-foreground">
                <Layers className="h-4 w-4" /> {projects.length.toString().padStart(2, "0")} projects
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 [perspective:1200px]">
            {projects.map((p, idx) => (
              <Reveal key={p.n} delay={idx * 0.08} className={p.span}>
                <TiltCard className="group relative h-full">
                  <div className="relative h-full flex flex-col rounded-2xl p-7 glass gradient-border shine overflow-hidden hover:border-accent/60 transition">
                    {/* glow */}
                    <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative flex items-start justify-between gap-6">
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono text-xs text-muted-foreground">{p.n}</span>
                        <div className="min-w-0">
                          <h3 className="font-serif text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors truncate">
                            {p.title}
                          </h3>
                          <p className="mt-1 text-xs md:text-sm text-muted-foreground italic font-serif">
                            {p.tag}
                          </p>
                        </div>
                      </div>
                      <span aria-hidden className="shrink-0 h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-accent group-hover:text-accent group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="relative mt-5 text-[15px] text-foreground/90 leading-snug text-balance">
                      {p.blurb}
                    </p>

                    <ul className="relative mt-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                      {p.points.map((pt, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="text-accent mt-2 h-1 w-2.5 shrink-0 bg-current rounded-full" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="relative mt-5 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground group-hover:border-accent/40 transition">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="relative mt-auto pt-6 flex flex-wrap gap-3">
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition">
                        <Github className="h-3.5 w-3.5" /> Repo
                      </a>
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent text-background px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ExternalLink className="h-3.5 w-3.5" /> View Project
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience — vertical timeline */}
      <ExperienceTimeline />

      {/* Skills */}
      <SkillsSection />

      {/* Achievements */}
      <section className="px-6 py-32 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (04) Achievements
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
                  <motion.div whileHover={{ y: -3 }} className="h-full rounded-2xl glass gradient-border shine p-8 hover:border-accent/60 transition">
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

      {/* Education */}
      <section className="px-6 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
              (05) Education
            </div>
            <h2 className="font-serif text-4xl md:text-5xl inline-flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-accent" />
              Sharpening the blade.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8">
            <div className="rounded-2xl glass gradient-border p-8 hover:border-accent/60 transition">
              <div className="flex flex-wrap justify-between items-baseline gap-4">
                <h3 className="font-serif text-2xl">Thapar Institute of Engineering & Technology</h3>
                <span className="font-mono text-xs text-muted-foreground">2023 — 2027</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                B.E. Computer Engineering · Patiala, Punjab
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "ML", "AI"].map((s) => (
                  <span key={s} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-6xl relative grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-6">
              (06) Get in touch
            </div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.95] text-balance">
              Let's build <br />
              <span className="italic text-accent">something unforgettable</span>.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground text-lg font-serif italic">
              Internships, collaborations, or a quiet conversation about ideas worth chasing — my inbox is always open.
            </p>

            <div className="mt-10 space-y-3">
              <a href="mailto:hkkirat25@gmail.com" className="group flex items-center justify-between gap-6 rounded-2xl glass gradient-border p-5 hover:bg-card transition">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-10 w-10 shrink-0 rounded-lg border border-border flex items-center justify-center text-accent"><Mail className="h-5 w-5" /></div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-serif text-lg group-hover:text-accent transition truncate">hkkirat25@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all shrink-0" />
              </a>
              <a href="tel:+918847654698" className="group flex items-center justify-between gap-6 rounded-2xl glass gradient-border p-5 hover:bg-card transition">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-10 w-10 shrink-0 rounded-lg border border-border flex items-center justify-center text-accent"><Phone className="h-5 w-5" /></div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Phone</div>
                    <div className="font-serif text-lg group-hover:text-accent transition">+91 88476 54698</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all shrink-0" />
              </a>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Harkirat Singh · Built with intent</div>
          <div className="flex gap-6">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><Github className="h-3.5 w-3.5" /> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a>
            <a href="mailto:hkkirat25@gmail.com" className="inline-flex items-center gap-1.5 hover:text-accent"><Mail className="h-3.5 w-3.5" /> Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------- Floating dock ---------------- */

function FloatingDock({ active }: { active: string }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <nav className="glass rounded-full px-2 py-1.5 flex items-center gap-1 text-sm text-muted-foreground shadow-[0_20px_60px_-20px_oklch(0_0_0/0.6)]">
        {navLinks.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`relative px-4 py-1.5 rounded-full transition-colors ${
              active === l.id ? "text-foreground" : "hover:text-foreground"
            }`}
          >
            {active === l.id && (
              <motion.span
                layoutId="dock-pill"
                className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{l.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

/* ---------------- Experience Timeline ---------------- */

function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="px-6 py-32 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
            (02) Experience & Leadership
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
            The <span className="italic">timeline</span>.
          </h2>
          <p className="text-muted-foreground text-lg font-serif italic mb-16 max-w-xl">
            A short arc so far — engineered internships, community leadership, and the events in between.
          </p>
        </Reveal>

        <div ref={ref} className="relative pl-8 md:pl-14">
          {/* rail */}
          <div className="absolute left-2 md:left-5 top-2 bottom-2 w-px bg-border" />
          <motion.div
            style={{ height }}
            className="absolute left-2 md:left-5 top-2 w-px bg-gradient-to-b from-accent via-accent-2 to-accent origin-top"
          />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -left-[26px] md:-left-[38px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_oklch(0.82_0.14_75/0.15)]" />
                <div className="rounded-2xl glass gradient-border p-6 md:p-7 hover:border-accent/60 transition">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-accent">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-[11px] font-mono uppercase tracking-widest">{e.date}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl mt-2">{e.role}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{e.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span key={s} className="text-[10px] font-mono uppercase tracking-wider border border-border px-2 py-0.5 rounded-full text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills — innovative grouped constellation ---------------- */

type SkillGroup = {
  key: string;
  label: string;
  icon: typeof Code2;
  blurb: string;
  items: { name: string; level: number }[];
  accent: string;
};

const skillGroups: SkillGroup[] = [
  {
    key: "lang",
    label: "Languages",
    icon: Code2,
    blurb: "The alphabets I think in.",
    accent: "from-amber-400/40 to-rose-500/10",
    items: [
      { name: "Python", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 82 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    key: "backend",
    label: "Backend & Web",
    icon: Server,
    blurb: "APIs, sockets, and the plumbing behind product.",
    accent: "from-emerald-400/40 to-cyan-500/10",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 86 },
      { name: "React.js", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "WebSockets", level: 78 },
      { name: "JWT / OAuth", level: 82 },
    ],
  },
  {
    key: "db",
    label: "Databases",
    icon: Database,
    blurb: "State, at rest and in motion.",
    accent: "from-sky-400/40 to-indigo-500/10",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Supabase", level: 82 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    key: "ml",
    label: "Machine Learning & AI",
    icon: Brain,
    blurb: "From feature engineering to LLM glue.",
    accent: "from-violet-400/40 to-fuchsia-500/10",
    items: [
      { name: "Scikit-learn", level: 88 },
      { name: "TensorFlow", level: 72 },
      { name: "NLP", level: 82 },
      { name: "LLM Integrations", level: 75 },
      { name: "GenAI", level: 72 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    key: "devops",
    label: "DevOps & Tooling",
    icon: Cloud,
    blurb: "Ship it, monitor it, do it again.",
    accent: "from-teal-400/40 to-blue-500/10",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitHub Actions", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Vercel", level: 88 },
      { name: "Postman", level: 90 },
    ],
  },
  {
    key: "cs",
    label: "Core CS",
    icon: Layers,
    blurb: "The fundamentals that outlast frameworks.",
    accent: "from-rose-400/40 to-orange-500/10",
    items: [
      { name: "DSA", level: 88 },
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Operating Systems", level: 80 },
      { name: "Computer Networks", level: 78 },
    ],
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-32 border-t border-border bg-card/20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40">
        <div className="absolute top-20 left-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.82_0.14_75/0.08),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.6_0.18_260/0.08),transparent_60%)] blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-4">
            (03) Toolkit
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
            The <span className="italic">instruments</span> I play.
          </h2>
          <p className="text-muted-foreground text-lg font-serif italic mb-14 max-w-xl">
            A sharp, opinionated stack — grouped by the problem it solves, calibrated by fluency.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.key} delay={i * 0.06}>
              <SkillGroupCard group={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full rounded-2xl glass gradient-border p-6 overflow-hidden hover:border-accent/60 transition"
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl border border-border bg-background/60 flex items-center justify-center text-accent group-hover:rotate-6 transition-transform">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-xl leading-tight">{group.label}</h3>
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            {group.items.length} skills
          </p>
        </div>
      </div>

      <p className="relative mt-3 text-sm text-muted-foreground italic font-serif">
        {group.blurb}
      </p>

      <ul className="relative mt-5 space-y-2.5">
        {group.items.map((it) => {
          const isHot = hovered === it.name;
          return (
            <li
              key={it.name}
              onMouseEnter={() => setHovered(it.name)}
              onMouseLeave={() => setHovered(null)}
              className="group/row"
            >
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className={`text-sm font-mono transition-colors ${isHot ? "text-accent" : "text-foreground/90"}`}>
                  {it.name}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground tabular-nums">
                  {it.level.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="relative h-[3px] w-full rounded-full bg-border/60 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${it.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent to-accent-2"
                />
                {isHot && !reduce && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}


/* ---------------- Contact form ---------------- */

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = name.trim().length > 1 && validEmail && msg.trim().length > 3;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status !== "idle") return;
    setStatus("sending");

    const subject = `Portfolio message from ${name.trim()}`;
    const body = `${msg.trim()}\n\n— ${name.trim()}\n${email.trim()}`;
    const mailto = `mailto:hkkirat25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's mail client with the message prefilled.
    window.location.href = mailto;

    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setName("");
      setEmail("");
      setMsg("");
    }, 2600);
  }


  return (
    <form onSubmit={onSubmit} className="rounded-2xl glass gradient-border p-6 md:p-8 space-y-5">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
        Direct message
      </div>
      <FloatField id="name" label="Your name" value={name} onChange={setName} />
      <FloatField
        id="email"
        label="Email"
        value={email}
        onChange={setEmail}
        type="email"
        error={email.length > 0 && !validEmail ? "Enter a valid email" : undefined}
      />
      <FloatField id="msg" label="Message" value={msg} onChange={setMsg} textarea />

      <motion.button
        type="submit"
        disabled={!canSubmit || status !== "idle"}
        whileTap={{ scale: 0.97 }}
        className={`relative w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-mono uppercase tracking-widest transition overflow-hidden ${
          status === "sent"
            ? "bg-emerald-500 text-background"
            : "bg-accent text-background hover:opacity-90 disabled:opacity-40"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="inline-flex items-center gap-2">
              <Send className="h-4 w-4" /> Send message
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span key="sending" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span key="sent" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4" /> Message sent
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

function FloatField({
  id,
  label,
  value,
  onChange,
  type = "text",
  textarea,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const shared =
    "peer w-full bg-transparent border border-border rounded-lg px-4 pt-6 pb-2 text-sm outline-none transition focus:border-accent";

  return (
    <div>
      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={4}
            className={shared + " resize-none"}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={shared}
          />
        )}
        <motion.label
          htmlFor={id}
          animate={{
            top: active ? 8 : 18,
            fontSize: active ? 10 : 13,
            color: active ? "var(--color-accent)" : "var(--color-muted-foreground)",
          }}
          transition={{ duration: 0.18 }}
          className="absolute left-4 font-mono uppercase tracking-widest pointer-events-none"
        >
          {label}
        </motion.label>
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-[11px] font-mono text-rose-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
