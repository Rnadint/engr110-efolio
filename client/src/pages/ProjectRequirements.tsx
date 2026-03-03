/*
 * Project Requirements Page , Academic Editorial Design
 * Defines SMART project requirements and success metrics
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const REQUIREMENTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

export default function ProjectRequirements() {
  const revealRef = useScrollReveal();

  const smartRequirements = [
    {
      category: "Specific",
      icon: Target,
      description: "What exactly will the solution do?",
      requirements: [
        "Collect community food security data through a structured survey",
        "Visualize survey data with interactive charts and graphs",
        "Identify trends in food-related needs by demographic groups",
        "Provide Valley Verde with actionable insights for program planning",
      ],
    },
    {
      category: "Measurable",
      icon: BarChart3,
      description: "How will we know it's working?",
      requirements: [
        "Collect responses from at least 100 community members",
        "Create visualizations for 8+ key survey questions",
        "Identify 3-5 major trends in community food needs",
        "Achieve 80%+ data accuracy in collection and visualization",
      ],
    },
    {
      category: "Achievable",
      icon: Zap,
      description: "Is it realistic within our constraints?",
      requirements: [
        "Use free or low-cost tools (Google Forms, website platform)",
        "Leverage team skills: web design, CS, ECE, economics",
        "Complete within 10-week timeline",
        "Require minimal ongoing maintenance after project end",
      ],
    },
    {
      category: "Relevant",
      icon: Users,
      description: "Does it address the real need?",
      requirements: [
        "Directly supports Valley Verde's food justice mission",
        "Helps identify underserved community populations",
        "Informs program development and resource allocation",
        "Builds community engagement and participation",
      ],
    },
  ];

  const functionalRequirements = [
    {
      title: "Survey Data Collection",
      requirements: [
        "Google Form with 9 main questions + demographic questions",
        "Multiple choice and short-answer response options",
        "Support for both online and in-person data collection",
        "Data export to spreadsheet format for analysis",
      ],
    },
    {
      title: "Data Visualization",
      requirements: [
        "Pie charts showing response distribution for multiple-choice questions",
        "Bar graphs comparing needs across demographic groups",
        "Trend analysis highlighting key patterns",
        "Interactive filters for demographic exploration",
      ],
    },
    {
      title: "Website Dashboard",
      requirements: [
        "Display survey results with professional visualizations",
        "Show demographic breakdowns of respondents",
        "Highlight key findings and insights",
        "Provide public-facing summary for community awareness",
      ],
    },
    {
      title: "Data Analysis",
      requirements: [
        "Identify top 3-5 food-related needs in community",
        "Segment responses by age, income, location",
        "Track barriers to food access",
        "Generate actionable recommendations for Valley Verde",
      ],
    },
  ];

  const successMetrics = [
    {
      metric: "Data Collection",
      target: "100+ survey responses",
      rationale: "Sufficient sample size for meaningful trend analysis",
    },
    {
      metric: "Data Quality",
      target: "80%+ completion rate",
      rationale: "High-quality data ensures reliable insights",
    },
    {
      metric: "Visualization Clarity",
      target: "Key findings understandable to non-technical users",
      rationale: "Valley Verde staff can use insights without training",
    },
    {
      metric: "Community Impact",
      target: "Valley Verde uses data to inform 2+ program decisions",
      rationale: "Demonstrates real-world value and impact",
    },
    {
      metric: "Sustainability",
      target: "Solution maintainable by Valley Verde staff",
      rationale: "Solution continues to provide value beyond project",
    },
  ];

  const constraints = [
    {
      type: "Technical",
      items: [
        "Must work on low-bandwidth connections",
        "Mobile-friendly for community members",
        "No advanced coding skills required for maintenance",
      ],
    },
    {
      type: "Budget",
      items: [
        "Use free or low-cost tools only",
        "No licensing fees for ongoing use",
        "Minimize infrastructure costs",
      ],
    },
    {
      type: "Timeline",
      items: [
        "Complete by end of 10-week quarter",
        "Deliverable ready for Valley Verde use",
        "Documentation for handoff included",
      ],
    },
    {
      type: "Scope",
      items: [
        "Focus on community needs assessment",
        "Not a full program management system",
        "Limited to survey data and visualization",
      ],
    },
  ];

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Requirements"
        title="Project Requirements"
        subtitle="Defining SMART goals, functional requirements, and success metrics for our solution."
        bgImage={REQUIREMENTS_BG}
      />

      {/* ── SMART Framework ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">SMART Framework</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Project Goals & Objectives
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {smartRequirements.map((req, i) => {
                const Icon = req.icon;
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
                          fontSize: "1.2rem",
                        }}
                      >
                        {req.category}
                      </h3>
                    </div>

                    <p
                      className="mb-4 text-sm italic"
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--slate)",
                      }}
                    >
                      {req.description}
                    </p>

                    <ul className="space-y-2">
                      {req.requirements.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={16} style={{ color: "var(--amber)", marginTop: "2px", flexShrink: 0 }} />
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

      {/* ── Functional Requirements ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">What We'll Build</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Functional Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {functionalRequirements.map((req, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "var(--ivory)",
                    border: "1px solid rgba(15,32,68,0.08)",
                  }}
                >
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {req.title}
                  </h3>

                  <ul className="space-y-2">
                    {req.requirements.map((item, j) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Success Metrics ── */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4" style={{ color: "var(--amber)" }}>
                Measuring Success
              </div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--ivory)",
                }}
              >
                Success Metrics & KPIs
              </h2>
            </div>

            <div className="space-y-6">
              {successMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-6"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Metric
                      </div>
                      <h4
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--ivory)",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {metric.metric}
                      </h4>
                    </div>

                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Target
                      </div>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "var(--ivory)",
                        }}
                      >
                        {metric.target}
                      </p>
                    </div>

                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Rationale
                      </div>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "rgba(250,250,247,0.75)",
                          fontSize: "0.95rem",
                        }}
                      >
                        {metric.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Constraints ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Boundaries</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Project Constraints
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {constraints.map((constraint, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {constraint.type}
                  </h3>

                  <ul className="space-y-2">
                    {constraint.items.map((item, j) => (
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
