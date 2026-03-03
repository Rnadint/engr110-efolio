/*
 * Brainstorming Process Page — Academic Editorial Design
 * Showcases the team's ideation process, concept generation, and idea evaluation
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Lightbulb, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const BRAINSTORM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

export default function Brainstorming() {
  const revealRef = useScrollReveal();

  const brainstormCategories = [
    {
      category: "Data & Visualization",
      icon: TrendingUp,
      ideas: [
        "Dashboard with texts and visuals (graphs, charts)",
        "Pie charts for multiple choice survey data",
        "Histogram using Python library (matplotlib)",
        "Bar graphs for data visualization",
        "Automatically updated visual charts and statistics",
        "Connect Google Form to dashboard for real-time updates",
        "Use AI to pull answers from transcribed interview text",
      ],
    },
    {
      category: "Website & Platform Solutions",
      icon: Users,
      ideas: [
        "Website with visualizations (pie charts, graphs, trends)",
        "Word website",
        "App solution",
        "Public section of dashboard for community/academics",
        "Google Sheets integration",
        "Google Sheets API",
        "Google Scripts",
      ],
    },
    {
      category: "Advanced Features",
      icon: Lightbulb,
      ideas: [
        "Using AI algorithms to find trends",
        "MC techniques to create categories and visualize",
        "Layered map with filters (food deserts, demographics, transportation)",
        "ChatGPT API to convert images and data into summaries",
        "Food security needs map",
        "Cute visuals of vegetables and whatnot",
      ],
    },
  ];

  const selectedIdeas = [
    {
      title: "Google Form Survey Platform",
      description: "Start with multiple choice questions, can add short answer depending on time. Collect community food security data with demographic information.",
      rationale: "Accessible to community members, easy to distribute, provides structured data collection.",
    },
    {
      title: "Interactive Website Dashboard",
      description: "Visualizations (pie charts, graphs, trends) highlighting specific trends in food-related needs and showing demographics.",
      rationale: "Communicates findings to Valley Verde staff and community, supports data-driven decision making.",
    },
  ];

  const evaluationCriteria = [
    { criterion: "Feasibility", description: "Can be implemented within 10-week timeline with current team skills" },
    { criterion: "Impact", description: "Directly addresses Valley Verde's need for community data and insights" },
    { criterion: "Scalability", description: "Solution can grow with Valley Verde's capacity and community needs" },
    { criterion: "User-Centricity", description: "Designed with input from community members and Valley Verde staff" },
    { criterion: "Sustainability", description: "Solution can be maintained and updated beyond the project" },
  ];

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Brainstorming"
        title="Brainstorming Process"
        subtitle="Showcasing our team's creative ideation, concept generation, and evaluation process."
        bgImage={BRAINSTORM_BG}
      />

      {/* ── Brainstorming Overview ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Our Process</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "var(--navy)",
                }}
              >
                Ideation & Concept Generation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  num: "30+",
                  label: "Ideas Generated",
                  desc: "Diverse concepts across multiple categories",
                },
                {
                  num: "5",
                  label: "Team Members",
                  desc: "Multidisciplinary perspectives",
                },
                {
                  num: "2",
                  label: "Selected Directions",
                  desc: "Promising solutions for development",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8 text-center"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                  }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--amber)" }}
                  >
                    {stat.num}
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}
                  >
                    {stat.label}
                  </h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brainstorm Categories ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Ideation Categories</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Diverse Concept Areas
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {brainstormCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={i}
                    className="reveal rounded-lg p-8"
                    style={{
                      transitionDelay: `${i * 0.1}s`,
                      background: "var(--ivory)",
                      border: "1px solid rgba(15,32,68,0.08)",
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
                        {cat.category}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {cat.ideas.map((idea, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span
                            style={{
                              color: "var(--amber)",
                              fontWeight: "bold",
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          >
                            •
                          </span>
                          <span
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              color: "var(--slate)",
                              fontSize: "0.95rem",
                              lineHeight: "1.4",
                            }}
                          >
                            {idea}
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

      {/* ── Evaluation Criteria ── */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4" style={{ color: "var(--amber)" }}>
                Selection Process
              </div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--ivory)",
                }}
              >
                Evaluation Criteria
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {evaluationCriteria.map((item, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={24} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <h3
                        className="font-bold mb-2"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--ivory)",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.criterion}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "rgba(250,250,247,0.75)",
                          lineHeight: "1.6",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Concepts ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Moving Forward</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Selected Concepts
              </h2>
            </div>

            <div className="space-y-8">
              {selectedIdeas.map((idea, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                    borderTop: "4px solid var(--amber)",
                  }}
                >
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.3rem",
                    }}
                  >
                    {idea.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-2"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Description
                      </div>
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "var(--slate)",
                          lineHeight: "1.6",
                        }}
                      >
                        {idea.description}
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
                          color: "var(--slate)",
                          lineHeight: "1.6",
                        }}
                      >
                        {idea.rationale}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next Steps ── */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "var(--slate)",
                fontSize: "1.05rem",
                lineHeight: "1.8",
              }}
            >
              With our two selected concepts, we're now moving into the requirements definition and prototyping phase. Each concept will be developed further, evaluated against our criteria, and refined based on feedback from Valley Verde and community members.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
