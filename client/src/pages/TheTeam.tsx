/*
 * The Team Page , Academic Editorial Design
 * Team member cards with roles, majors, bios, and eFolio links
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const TEAM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/team-bg-bxxdUsrumBiV9JgeuJ6VzR.webp";

const teamMembers = [
  {
    initials: "S",
    name: "Shibo",
    role: "Web Design",
    major: "SCU '26",
    bio: "Leads the visual design and web development for the eFolio. Passionate about creating intuitive, beautiful digital experiences that communicate complex ideas clearly.",
    efolioUrl: null,
  },
  {
    initials: "C",
    name: "Conner",
    role: "Computer Science",
    major: "SCU '27",
    bio: "Contributes technical expertise and backend considerations. Focused on building scalable solutions that address real community needs.",
    efolioUrl: "https://cchen192.wixsite.com/engr110conner",
  },
  {
    initials: "I",
    name: "Irene",
    role: "Computer Science",
    major: "SCU '26",
    bio: "Brings software engineering skills to the team. Committed to translating user needs into functional, reliable systems.",
    efolioUrl: "https://ichang3.wixsite.com/engr110-efolio",
  },
  {
    initials: "A",
    name: "Anushri",
    role: "Electrical & Computer Engineering",
    major: "SCU '26",
    bio: "Combines hardware and software thinking to solve complex problems. Passionate about sustainable technology solutions.",
    efolioUrl: "https://www.canva.com/design/DAG-VWkmtaw/ecE5F-dWJUTC70X6ZwIFcg",
  },
  {
    initials: "L",
    name: "Lily",
    role: "Economics",
    major: "SCU '26",
    bio: "Brings economic and business perspective to the project. Focused on understanding stakeholder needs and market viability.",
    efolioUrl: "https://sites.google.com/view/engr110-lilyjiang?usp=sharing",
  },
];

const teamValues = [
  { label: "Collaboration", desc: "We leverage each member's unique strengths and perspectives." },
  { label: "Empathy", desc: "We design with and for the people our work will impact." },
  { label: "Rigor", desc: "We hold our work to high standards of engineering excellence." },
  { label: "Reflection", desc: "We continuously evaluate and improve our process." },
];

export default function TheTeam() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Our Team"
        title="The Team"
        subtitle="A multidisciplinary group of engineers united by a shared commitment to solving real problems through thoughtful design."
        bgImage={TEAM_BG}
      />

      {/* ── Team Members ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Meet the Team</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                The People Behind the Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="card-hover reveal rounded-lg overflow-hidden"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                  }}
                >
                  {/* Card Header */}
                  <div
                    className="p-6 flex items-center gap-5"
                    style={{ borderBottom: "1px solid rgba(15,32,68,0.06)" }}
                  >
                    {/* Avatar */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--navy)" }}
                    >
                      <span
                        className="text-xl font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--amber)" }}
                      >
                        {member.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.15rem",
                          color: "var(--navy)",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {member.role}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {member.major}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {member.bio}
                    </p>
                    {member.efolioUrl && (
                      <a
                        href={member.efolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold"
                        style={{
                          background: "rgba(245,158,11,0.1)",
                          color: "var(--amber)",
                          fontFamily: "'Source Sans 3', sans-serif",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(245,158,11,0.2)";
                          e.currentTarget.style.transform = "translateX(2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(245,158,11,0.1)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        View eFolio <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Values ── */}
      <section className="py-20" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 reveal">
              <div className="section-label mb-4" style={{ color: "var(--amber)" }}>
                Our Principles
              </div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                  color: "var(--ivory)",
                }}
              >
                How We Work Together
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamValues.map((val, i) => (
                <div
                  key={val.label}
                  className="reveal text-center"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(245,158,11,0.15)", border: "2px solid var(--amber)" }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--amber)" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h4
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--ivory)",
                      fontSize: "1rem",
                    }}
                  >
                    {val.label}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(250,250,247,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
