/*
 * Home Page — Academic Editorial Design
 * Full-bleed hero with navy bg + engineering blueprint image
 * Sections: Welcome, Site Purpose, Navigation Overview, Quote
 */
import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, FolderOpen, Mail, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/hero-bg-YPFgE2mgLNBeadLFT4rAq6.webp";
const PROJECT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

const sections = [
  {
    icon: BookOpen,
    label: "About Me",
    path: "/about",
    description: "Learn about the student behind this portfolio — academic interests, goals, and aspirations for ENGR 110.",
  },
  {
    icon: Users,
    label: "The Team",
    path: "/team",
    description: "Meet the collaborative team working together on this engineering design challenge.",
  },
  {
    icon: FolderOpen,
    label: "Project",
    path: "/project",
    description: "Explore the full project documentation: team activities, partner overview, Gantt chart, meetings, and reflections.",
  },
  {
    icon: Mail,
    label: "Contact",
    path: "/contact",
    description: "Reach out via the contact form — connected directly to the student's SCU email.",
  },
];

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(15,32,68,0.92) 0%, rgba(15,32,68,0.75) 60%, rgba(15,32,68,0.88) 100%), url('${HERO_BG}') center/cover no-repeat`,
        }}
      >
        {/* Dot-grid texture */}
        <div className="absolute inset-0 dot-grid opacity-20" style={{ pointerEvents: "none" }} />

        {/* Amber glow bottom-left */}
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--amber) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
            pointerEvents: "none",
          }}
        />

        <div className="container relative z-10 text-center">
          {/* Label */}
          <div className="section-label mb-6 inline-block">
            Santa Clara University · ENGR 110
          </div>

          {/* Main heading */}
          <h1
            className="font-black leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              color: "var(--ivory)",
              textShadow: "0 2px 20px rgba(15,32,68,0.5)",
            }}
          >
            Engineering Design
            <br />
            <span style={{ color: "var(--amber)" }}>eFolio</span>
          </h1>

          {/* Sub-heading */}
          <p
            className="max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "rgba(250,250,247,0.8)",
            }}
          >
            Welcome to my ENGR 110 electronic portfolio — the digital home for my design project.
            Here I organize, document, and present my work, telling a cohesive story of progress
            from initial concepts to final deliverables.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/project">
              <span className="btn-amber flex items-center gap-2">
                Explore the Project <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/about">
              <span
                className="btn-navy"
                style={{
                  borderColor: "rgba(250,250,247,0.5)",
                  color: "var(--ivory)",
                  background: "rgba(250,250,247,0.08)",
                }}
              >
                About Me
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
          style={{ transform: "translateX(-50%)" }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(250,250,247,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10 animate-bounce"
            style={{ background: "rgba(245,158,11,0.5)" }}
          />
        </div>
      </section>

      {/* ── Welcome Section ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text */}
              <div className="reveal">
                <div className="section-label mb-4">Welcome</div>
                <h2
                  className="font-bold mb-6 leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                    color: "var(--navy)",
                  }}
                >
                  A Portfolio Built for
                  <br />
                  <em>Purposeful Learning</em>
                </h2>
                <div className="amber-rule mb-6" />
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  Throughout ENGR 110, I am working on a major design project that challenges me to
                  apply engineering principles to real-world problems. This eFolio is the digital
                  home for that project — a living document that grows alongside my work.
                </p>
                <p
                  className="leading-relaxed mb-8"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  While the project involves a team, this portfolio captures my individual
                  contributions, design choices, and personal reflections on the learning process.
                </p>
                <Link href="/about">
                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider transition-colors"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--amber)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--navy)")}
                  >
                    Learn More About Me <ChevronRight size={16} />
                  </span>
                </Link>
              </div>

              {/* Image */}
              <div className="reveal" style={{ transitionDelay: "0.15s" }}>
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(15,32,68,0.15)" }}
                >
                  <img
                    src={PROJECT_IMG}
                    alt="Engineering design process"
                    className="w-full h-72 object-cover"
                  />
                  {/* Amber overlay strip */}
                  <div
                    className="absolute bottom-0 left-0 right-0 py-3 px-5"
                    style={{ background: "rgba(15,32,68,0.88)" }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700 }}
                    >
                      Engineering Design Process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull Quote ── */}
      <section
        className="py-20"
        style={{ background: "var(--navy)" }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div
              className="pull-quote text-center mx-auto"
              style={{
                borderLeft: "none",
                paddingLeft: 0,
                color: "var(--ivory)",
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              }}
            >
              "Engineering is not only about solving problems — it is about understanding people,
              context, and consequence. This portfolio documents that journey."
            </div>
            <div className="amber-rule mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* ── Navigation Overview ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Explore</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                What You'll Find Here
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <Link key={section.path} href={section.path}>
                    <div
                      className="card-hover reveal rounded-lg p-6 h-full"
                      style={{
                        transitionDelay: `${i * 0.08}s`,
                        background: "white",
                        boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                        borderTop: "3px solid var(--amber)",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center mb-4"
                        style={{ background: "rgba(245,158,11,0.12)" }}
                      >
                        <Icon size={20} style={{ color: "var(--amber)" }} />
                      </div>
                      <h3
                        className="font-bold mb-2"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.1rem",
                          color: "var(--navy)",
                        }}
                      >
                        {section.label}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {section.description}
                      </p>
                      <div
                        className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        View <ChevronRight size={12} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16"
        style={{ background: "var(--amber)" }}
      >
        <div className="container text-center">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--navy)",
            }}
          >
            Ready to See the Work?
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              color: "rgba(15,32,68,0.75)",
              fontSize: "1.05rem",
            }}
          >
            Dive into the project documentation, meet the team, or get in touch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/project">
              <span
                className="btn-navy"
                style={{ borderColor: "var(--navy)", color: "var(--navy)", background: "transparent" }}
              >
                View Project
              </span>
            </Link>
            <Link href="/contact">
              <span
                className="btn-navy"
                style={{ borderColor: "var(--navy)", color: "var(--navy)", background: "transparent" }}
              >
                Contact Me
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
