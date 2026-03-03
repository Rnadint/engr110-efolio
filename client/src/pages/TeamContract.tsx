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
      role: "Frontend Development",
      major: "Web Design, SCU'26",
      responsibilities: ["Using React and D3.js", "Establish connections with backend", "Create intuitive UI/UX for data visualization"],
    },
    {
      name: "Conner",
      role: "Community Liaison",
      major: "Computer Science, SCU'27",
      responsibilities: ["Primary point of contact for partner", "Schedule interviews", "Gather feedback from Valley Verde"],
      efolio: "https://cchen192.wixsite.com/engr110conner",
    },
    {
      name: "Irene",
      role: "Backend Lead",
      major: "Computer Science, SCU'26",
      responsibilities: ["Oversee backend development", "Manage data processing workflows", "Help design data analysis portion"],
      efolio: "https://ichang3.wixsite.com/engr110-efolio",
    },
    {
      name: "Anushri",
      role: "Documentation & Research Lead",
      major: "ECE, SCU'26",
      responsibilities: ["Manage all project documentation", "Meeting notes & final report", "Conduct background research"],
      efolio: "https://www.canva.com/design/DAG-VWkmtaw/ecE5F-dWJUTC70X6ZwIFcg",
    },
    {
      name: "Lily",
      role: "Project Manager",
      major: "Economics, SCU'26",
      responsibilities: ["Facilitate meetings", "Track deadlines and progress", "Ensure clear communication"],
      efolio: "https://sites.google.com/view/engr110-lilyjiang?usp=sharing",
    },
  ];

  const collaborationNorms = [
    {
      category: "Communication",
      icon: MessageSquare,
      norms: [
        "Texting is the main form of communication for the group",
        "Communication will happen via text message with a 24-hour response time",
        "Share updates proactively each week, especially if there are progress or responsibility changes",
        "Weekly email communication with community partner on project progress",
        "Schedule biweekly meetings with community partners for the first few weeks",
        "Schedule weekly meetings with just the team",
      ],
    },
    {
      category: "Accountability & Meetings",
      icon: Clock,
      norms: [
        "Everyone is prepared with an understanding of the expectations and deadlines for the week",
        "Tasks will be assigned depending on each member's areas of expertise",
        "Hold each other accountable for finishing assigned tasks prior to meetings",
        "Deadline given at end of each Tuesday class for when to complete the week's team assignments",
        "Always at least three days before the due date to ensure quality of work",
      ],
    },
    {
      category: "Work & Deliverables",
      icon: Target,
      norms: [
        "Each team member finishes the task that were assigned",
        "If something changes, communicate that as early as possible in the group chat",
        "Be clear about what each person is doing and have proper documentation",
        "Accountability: each member finishes the task that were assigned",
        "Quality over speed — ensure work meets standards before submission",
      ],
    },
    {
      category: "Conflict Resolution",
      icon: AlertCircle,
      norms: [
        "Bring up and discuss any issues or disagreements with other team members early and directly",
        "If the issue is specific to a certain individual/individuals, then it will be discussed with them first",
        "If the issue escalates for more than one week, reach out to Dr. Kuczenski to mediate",
        "General principles: be respectful, welcome feedback, be open to others' opinions, resolve conflicts ASAP",
      ],
    },
  ];

  const teamValues = [
    {
      value: "Accountability",
      description: "Each team member finishes the task that were assigned, and if something changes, communicate that as early as possible in the group chat.",
    },
    {
      value: "Respect",
      description: "Being open to everyone's opinions and accepting everyone's feedback. We listen actively and treat each other with dignity.",
    },
    {
      value: "Transparency",
      description: "Being honest about deadlines and schedules, and communicating about any questions or concerns. We keep feedback respectful in case of disagreements.",
    },
    {
      value: "Collaboration",
      description: "We work together as a unified team. We share knowledge, support each other, and celebrate collective success.",
    },
    {
      value: "Excellence",
      description: "We strive for high-quality work that reflects our best effort. We continuously improve and learn from feedback.",
    },
  ];

  const decisionMaking = [
    {
      scenario: "Major Decisions",
      process: "All of us must agree on the decision before moving forward. If full consensus is not achievable, then there will be a follow-up meeting where further discussions will be held.",
    },
    {
      scenario: "Task Assignment",
      process: "Tasks will be assigned depending on each member's areas of expertise. If there are overlaps, multiple members could be assigned to the same task.",
    },
    {
      scenario: "Disagreements",
      process: "Keep all feedback respectful in case there are disagreements or a decision making process. There will be a defined time frame for decision-making to ensure that the project progresses in a timely manner.",
    },
    {
      scenario: "Conflict Escalation",
      process: "If the issue escalates for more than one week, reach out to Dr. Kuczenski to mediate. General principles: be respectful, welcome feedback, be open to others' opinions.",
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
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Team Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamValues.map((item, i) => (
                <div
                  key={item.value}
                  className="reveal rounded-lg p-6"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "var(--ivory)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.value}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
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
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Collaboration Norms
              </h2>
            </div>

            <div className="space-y-8">
              {collaborationNorms.map((norm, i) => {
                const Icon = norm.icon;
                return (
                  <div
                    key={norm.category}
                    className="reveal rounded-lg p-8"
                    style={{
                      transitionDelay: `${i * 0.08}s`,
                      background: "white",
                      boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(245,158,11,0.12)" }}
                      >
                        <Icon size={20} style={{ color: "var(--amber)" }} />
                      </div>
                      <h3
                        className="font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--navy)",
                          fontSize: "1.2rem",
                        }}
                      >
                        {norm.category}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {norm.norms.map((n, j) => (
                        <li
                          key={j}
                          className="text-sm flex items-start gap-3"
                          style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          <span style={{ color: "var(--amber)", fontWeight: "bold", marginTop: "2px" }}>•</span>
                          <span>{n}</span>
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
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Decision Making Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisionMaking.map((item, i) => (
                <div
                  key={item.scenario}
                  className="reveal rounded-lg p-6"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "var(--ivory)",
                    borderTop: "3px solid var(--amber)",
                  }}
                >
                  <h4
                    className="font-bold mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1rem",
                    }}
                  >
                    {item.scenario}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {item.process}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment ── */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2
              className="font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                color: "white",
              }}
            >
              Our Commitment
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              We, as a team, commit to upholding these values, norms, and agreements throughout our ENGR 110 project. We pledge to communicate openly, support each other, and work collaboratively toward our shared goal of creating a meaningful solution for Valley Verde and the community we serve.
            </p>
            <blockquote
              className="italic text-lg"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--amber)",
              }}
            >
              "Together, we build something meaningful."
            </blockquote>
            <p
              className="text-sm mt-8"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              This contract was created collaboratively by the team and signed on January 20-23, 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
