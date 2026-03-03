/*
 * Team Contract Page — Academic Editorial Design
 * Showcases team agreements, collaboration norms, and communication practices
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Handshake, MessageSquare, Clock, Target, AlertCircle } from "lucide-react";

const TEAM_CONTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

export default function TeamContract() {
  const revealRef = useScrollReveal();

  const teamMembers = [
    {
      name: "Shibo",
      role: "Web Design Lead",
      major: "Web Design, SCU'26",
      responsibilities: ["UI/UX design", "Website development", "Visual design system"],
    },
    {
      name: "Conner",
      role: "Computer Science",
      major: "Computer Science, SCU'27",
      responsibilities: ["Backend development", "Data processing", "API integration"],
      efolio: "https://cchen192.wixsite.com/engr110conner",
    },
    {
      name: "Irene",
      role: "Computer Science",
      major: "Computer Science, SCU'26",
      responsibilities: ["Frontend development", "Database design", "Testing"],
      efolio: "https://ichang3.wixsite.com/engr110-efolio",
    },
    {
      name: "Anushri",
      role: "Electrical & Computer Engineering",
      major: "ECE, SCU'26",
      responsibilities: ["Technical architecture", "System integration", "Documentation"],
      efolio: "https://www.canva.com/design/DAG-VWkmtaw/ecE5F-dWJUTC70X6ZwIFcg",
    },
    {
      name: "Lily",
      role: "Economics",
      major: "Economics, SCU'26",
      responsibilities: ["Research & analysis", "Community insights", "Impact assessment"],
      efolio: "https://sites.google.com/view/engr110-lilyjiang?usp=sharing",
    },
  ];

  const collaborationNorms = [
    {
      category: "Communication",
      icon: MessageSquare,
      norms: [
        "Weekly team meetings every Monday at 2 PM",
        "Slack channel for daily updates and quick questions",
        "Email for formal documentation and decisions",
        "Respect response time: 24 hours for messages",
        "Be respectful and inclusive in all communications",
      ],
    },
    {
      category: "Meetings",
      icon: Clock,
      norms: [
        "All meetings start and end on time",
        "Agenda shared 24 hours in advance",
        "Meeting notes documented and shared within 24 hours",
        "Attendance is expected; notify team if unable to attend",
        "Come prepared with updates and questions",
      ],
    },
    {
      category: "Work & Deliverables",
      icon: Target,
      norms: [
        "Clear task assignments with deadlines",
        "Work is peer-reviewed before submission",
        "Documentation is required for all work",
        "Deadlines are firm; communicate early if issues arise",
        "Quality over speed — no rushing at the last minute",
      ],
    },
    {
      category: "Conflict Resolution",
      icon: AlertCircle,
      norms: [
        "Address conflicts directly and respectfully",
        "Listen to understand, not to respond",
        "Seek compromise and win-win solutions",
        "Escalate to instructor if needed",
        "No blame — focus on solutions",
      ],
    },
  ];

  const teamValues = [
    {
      value: "Respect",
      description: "We value each team member's perspective, expertise, and time. We listen actively and treat each other with dignity.",
    },
    {
      value: "Accountability",
      description: "We take responsibility for our work and commitments. We follow through and communicate proactively about challenges.",
    },
    {
      value: "Collaboration",
      description: "We work together as a unified team. We share knowledge, support each other, and celebrate collective success.",
    },
    {
      value: "Excellence",
      description: "We strive for high-quality work that reflects our best effort. We continuously improve and learn from feedback.",
    },
    {
      value: "Inclusivity",
      description: "We ensure all voices are heard. We make decisions collectively and value diverse perspectives.",
    },
  ];

  const decisionMaking = [
    {
      scenario: "Major Design Decision",
      process: "Team discussion → Pros/cons analysis → Group vote → Document decision",
    },
    {
      scenario: "Task Assignment",
      process: "Discuss skills and availability → Assign based on strengths → Confirm with assignee",
    },
    {
      scenario: "Timeline Changes",
      process: "Identify issue early → Discuss impact → Adjust timeline → Communicate to all",
    },
    {
      scenario: "Conflict Between Members",
      process: "Private conversation → Mediation if needed → Team discussion → Resolution",
    },
  ];

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Team Contract"
        title="Team Contract"
        subtitle="Our team agreements, collaboration norms, and shared values for successful project execution."
        bgImage={TEAM_CONTRACT_BG}
      />

      {/* ── Team Overview ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Our Team</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Team Composition & Roles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--navy)",
                          fontSize: "1.2rem",
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
                    </div>
                  </div>

                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {member.major}
                  </p>

                  <div className="mb-4">
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Responsibilities
                    </div>
                    <ul className="space-y-1">
                      {member.responsibilities.map((resp, j) => (
                        <li
                          key={j}
                          className="text-sm flex items-start gap-2"
                          style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          <span style={{ color: "var(--amber)", fontWeight: "bold" }}>•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.efolio && (
                    <a
                      href={member.efolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold"
                      style={{
                        color: "var(--amber)",
                        textDecoration: "none",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      View eFolio →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Values ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Shared Principles</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Team Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamValues.map((item, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-6 text-center"
                  style={{
                    transitionDelay: `${i * 0.06}s`,
                    background: "var(--ivory)",
                    border: "1px solid rgba(15,32,68,0.08)",
                  }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.value}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      lineHeight: "1.5",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Collaboration Norms ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Working Together</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Collaboration Norms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collaborationNorms.map((norm, i) => {
                const Icon = norm.icon;
                return (
                  <div
                    key={i}
                    className="reveal rounded-lg p-8"
                    style={{
                      transitionDelay: `${i * 0.08}s`,
                      background: "white",
                      boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(245,158,11,0.15)" }}
                      >
                        <Icon size={24} style={{ color: "var(--amber)" }} />
                      </div>
                      <h3
                        className="font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--navy)",
                          fontSize: "1.1rem",
                        }}
                      >
                        {norm.category}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {norm.norms.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span style={{ color: "var(--amber)", fontWeight: "bold", marginTop: "2px" }}>•</span>
                          <span
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              color: "var(--slate)",
                              fontSize: "0.95rem",
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Decision Making ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Processes</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Decision Making Process
              </h2>
            </div>

            <div className="space-y-6">
              {decisionMaking.map((item, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "var(--ivory)",
                    border: "1px solid rgba(15,32,68,0.08)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <h3
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.scenario}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.process}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contract Agreement ── */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="section-label mb-4" style={{ color: "var(--amber)" }}>
              Commitment
            </div>
            <h2
              className="font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                color: "var(--ivory)",
              }}
            >
              Team Commitment
            </h2>

            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "rgba(250,250,247,0.85)",
                fontSize: "1.05rem",
              }}
            >
              We, as a team, commit to upholding these values, norms, and agreements throughout our ENGR 110 project. We pledge to communicate openly, support each other, and work collaboratively toward our shared goal of creating a meaningful solution for Valley Verde and the community we serve.
            </p>

            <div
              className="rounded-lg p-8 mb-8"
              style={{
                background: "rgba(245,158,11,0.1)",
                border: "2px solid var(--amber)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--ivory)",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                "Together, we build something meaningful."
              </p>
            </div>

            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "rgba(250,250,247,0.6)",
                fontSize: "0.9rem",
              }}
            >
              This contract was created collaboratively by the team and will be revisited and updated as needed throughout the quarter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
