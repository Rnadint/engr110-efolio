/*
 * Project Sub-Pages , Academic Editorial Design
 * Five sub-pages: Team Activities, About our Partner, Gantt Chart, Progress Meetings, Reflections
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  ClipboardList,
  Building2,
  BarChart3,
  MessageSquare,
  BookOpen,
  ChevronRight,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
} from "lucide-react";

const PROJECT_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

const subNavLinks = [
  {
    label: "Team Activities",
    path: "/project/team-activities",
    icon: ClipboardList,
  },
  { label: "About our Partner", path: "/project/partner", icon: Building2 },
  { label: "Gantt Chart", path: "/project/gantt-chart", icon: BarChart3 },
  {
    label: "Progress Meetings",
    path: "/project/progress-meetings",
    icon: MessageSquare,
  },
  { label: "Reflections", path: "/project/reflections", icon: BookOpen },
];

function ProjectSubNav({ current }: { current: string }) {
  return (
    <div
      className="sticky top-16 z-40"
      style={{
        background: "white",
        borderBottom: "1px solid rgba(15,32,68,0.08)",
      }}
    >
      <div className="container">
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-hide">
          {subNavLinks.map(link => {
            const Icon = link.icon;
            const isActive = current === link.path;
            return (
              <Link key={link.path} href={link.path}>
                <div
                  className="flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-all text-sm font-semibold"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isActive ? "var(--navy)" : "var(--slate)",
                    borderBottom: isActive
                      ? "3px solid var(--amber)"
                      : "3px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={15} />
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Team Activities ─── */
const activities = [
  {
    week: "Week 1",
    date: "Jan 6–10",
    title: "Course Kickoff & Orientation",
    status: "complete",
    desc: "Attended ENGR 110 course introduction and learned about the design process framework. Reviewed project expectations, timeline, and deliverables. Prepared for team formation.",
    deliverable: "Course Materials & Expectations",
  },
  {
    week: "Week 2",
    date: "Jan 13–17",
    title: "Team Formation & Partner Introduction",
    status: "complete",
    desc: "Met as a team of five: Shibo (Web Design), Conner (CS), Irene (CS), Anushri (ECE), and Lily (Economics). Established communication norms, assigned roles, and reviewed team expectations. First meeting with Valley Verde , toured facilities, observed workflows, and gathered initial requirements. Began background research on food security and urban agriculture.",
    deliverable: "Team Charter & Partner Meeting Notes",
  },
  {
    week: "Week 3",
    date: "Jan 20–24",
    title: "Ideation & Brainstorming",
    status: "complete",
    desc: "Conducted structured brainstorming sessions with the full team. Generated 30+ diverse concepts across multiple categories: data visualization dashboards, website platforms, AI-powered tools, and interactive maps. Evaluated ideas based on feasibility, impact, and alignment with Valley Verde's mission. Narrowed to top 2-3 promising directions for further development.",
    deliverable: "Brainstorm Documentation & Concept Ideas",
  },
  {
    week: "Week 4",
    date: "Jan 27–31",
    title: "MVP Definition & Sketchstorming",
    status: "complete",
    desc: "Conducted intensive sketchstorming sessions to visualize top 3 concepts. Created detailed sketches and wireframes for each direction. Developed comprehensive decision matrix evaluating feasibility, impact, user experience, and Valley Verde alignment. Reached consensus on MVP scope: interactive web dashboard with data visualization and community survey integration. Defined core features and user flows.",
    deliverable: "MVP Definition, Sketches, Decision Matrix",
  },
  {
    week: "Week 5",
    date: "Feb 3–7",
    title: "Prototyping Plan & Project Schedule",
    status: "complete",
    desc: "Created detailed prototyping plan with Figma frontend prototype and Postman backend API specification. Developed comprehensive Gantt chart in Monday.com with task dependencies, durations, and team assignments (Feb 3 - Mar 13). Defined Bill of Materials: Github, Google Forms, Figma, Monday.com, Fast API (Python), React, Google Sheet API. Established Key Performance Indicators: frontend data display accuracy, design clarity, and community partner feedback. Task breakdown: Conner (Github, Figma), Irene (API, backend), Shibo (UI, visualizations), Anushri (research, presentations), Lily (planning).",
    deliverable: "Gantt Chart, BOM, KPIs, Prototyping Plan",
  },
  {
    week: "Week 6",
    date: "Feb 10–14",
    title: "Project Status Presentation & Feedback Synthesis",
    status: "complete",
    desc: "Delivered comprehensive project status presentation to class and Valley Verde staff on February 10, 2026. Presented project overview, progress to date, and prototypes. Received critical feedback on final deliverable scope, data pipeline clarity, and long-term sustainability. Team synthesized feedback and identified key insights: need to clarify MVP vs. stretch goals, simplify technical explanations for non-technical audience, develop handoff plan for Valley Verde staff independence, and add data flow diagrams. Prioritized feedback by frequency and project importance. Decided to add final deliverable slide, data pipeline visualization, and comprehensive handoff documentation. Revised project scope to emphasize accessibility and community-centered design approach.",
    deliverable: "Presentation Slides, Feedback Analysis, Revised Project Plan",
  },
  {
    week: "Week 7",
    date: "Feb 17–21",
    title: "Backend-Frontend Integration & Refinement",
    status: "complete",
    desc: "Integrated backend API with React frontend dashboard. Implemented data flow from Google Forms to Google Sheets to FastAPI to dashboard visualization. Created data pipeline diagram for non-technical audience understanding. Refined UI based on feedback to ensure clarity and accessibility. Prepared for website integration into Valley Verde's WIX platform.",
    deliverable: "Integrated Dashboard, Data Pipeline Diagram, UI Refinements",
  },
  {
    week: "Week 8",
    date: "Feb 24–28",
    title: "Final Report Draft & Heatmap Visualization",
    status: "complete",
    desc: "Completed full draft of final project report with comprehensive documentation of design process, findings, and recommendations. Contributed frontend development sections detailing UI/UX decisions, data visualization implementation, and accessibility features. Created interactive heatmap visualization showing food insecurity by zip code across Santa Clara County. Integrated heatmap with dashboard showing geographic distribution of food needs. Implemented backend API endpoints for data aggregation and filtering. Refined dashboard based on partner feedback: added demographic breakdowns, time-series trend analysis, and downloadable PDF reports. Connected frontend prototype with production backend API. Documented all technical decisions and created handoff documentation for Valley Verde staff.",
    deliverable:
      "Final Report Draft, Heatmap Visualization, Integrated Dashboard, API Documentation",
  },
  {
    week: "Week 9",
    date: "Mar 2–6",
    title: "Final Presentation",
    status: "complete",
    desc: "Delivered final presentation to class and Valley Verde staff, summarizing project outcomes, insights, and recommendations. Highlighted key findings from data analysis, demonstrated interactive dashboard and heatmap visualizations, and provided comprehensive handoff documentation for Valley Verde staff.",
    deliverable:
      "Final Presentation Slides, Handoff Documentation, Dashboard Demonstration",
  },
  {
    week: "Week 10",
    date: "Mar 9–13",
    title: "Final Project Documentation & Prototype",
    status: "complete",
    desc: "Delivered final project and prototype to Valley Verde staff, summarizing project outcomes, insights, and recommendations. Highlighted key findings from data analysis, demonstrated interactive dashboard and heatmap visualizations, and provided comprehensive handoff documentation for Valley Verde staff.",
    deliverable:
      "Final Project Documentation, Prototype, Handoff Documentation",
  },
];

export function TeamActivities() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Team Activities"
        title="Team Activities"
        subtitle="A chronological record of our team's collaborative work, milestones, and deliverables throughout the quarter."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/team-activities" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <div className="section-label mb-4">Progress Overview</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Weekly Progress
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                {
                  label: "Completed",
                  count: activities.filter(a => a.status === "complete").length,
                },
                {
                  label: "In Progress",
                  count: activities.filter(a => a.status === "in-progress")
                    .length,
                },
                {
                  label: "Upcoming",
                  count: activities.filter(a => a.status === "upcoming").length,
                },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="reveal rounded-lg p-6 text-center"
                  style={{
                    background: "white",
                    border: "1px solid rgba(15,32,68,0.08)",
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    {stat.count}
                  </div>
                  <div
                    style={{
                      color: "var(--slate)",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.9rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {activities.map((act, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8 border-l-4"
                  style={{
                    transitionDelay: `${i * 0.05}s`,
                    background: "white",
                    borderLeftColor:
                      act.status === "complete"
                        ? "var(--amber)"
                        : act.status === "in-progress"
                          ? "#3B82F6"
                          : "var(--slate)",
                    boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div
                        className="text-sm font-bold uppercase tracking-wider mb-1"
                        style={{
                          color: "var(--amber)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {act.week}
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{
                          color: "var(--slate)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {act.date}
                      </span>
                    </div>
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded"
                      style={{
                        background:
                          act.status === "complete"
                            ? "rgba(245,158,11,0.12)"
                            : act.status === "in-progress"
                              ? "rgba(59,130,246,0.12)"
                              : "rgba(100,116,139,0.1)",
                        color:
                          act.status === "complete"
                            ? "var(--amber)"
                            : act.status === "in-progress"
                              ? "#3B82F6"
                              : "var(--slate)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      {act.status === "complete"
                        ? "✓ Complete"
                        : act.status === "in-progress"
                          ? "● In Progress"
                          : "○ Upcoming"}
                    </span>
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {act.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{
                      color: "var(--slate)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {act.desc}
                  </p>
                  <div
                    className="text-xs font-semibold"
                    style={{
                      color: "var(--navy)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    Deliverable:{" "}
                    <span style={{ color: "var(--amber)" }}>
                      {act.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── About our Partner ─── */
export function AboutPartner() {
  const revealRef = useScrollReveal();
  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Community Partner"
        title="About our Partner"
        subtitle="Learn about the community organization we are designing for and the challenge they have brought to our team."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/partner" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Partner Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-1 reveal">
                <div
                  className="rounded-lg p-8 text-center"
                  style={{
                    background: "var(--navy)",
                    boxShadow: "0 16px 48px rgba(15,32,68,0.15)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(245,158,11,0.2)",
                      border: "2px solid var(--amber)",
                    }}
                  >
                    <Building2 size={36} style={{ color: "var(--amber)" }} />
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--ivory)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Partner Organization
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "rgba(250,250,247,0.6)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    Food Justice Non-Profit
                  </p>
                  <div className="mt-6 space-y-2 text-left">
                    {[
                      { label: "Organization", value: "Valley Verde" },
                      { label: "Location", value: "San Jose, CA" },
                      { label: "Mission", value: "Food Security" },
                      { label: "Tagline", value: "Plant Eat Share" },
                    ].map(item => (
                      <div
                        key={item.label}
                        className="flex justify-between text-xs"
                      >
                        <span
                          style={{
                            color: "var(--amber)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {item.label}
                        </span>
                        <span
                          style={{
                            color: "rgba(250,250,247,0.7)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="lg:col-span-2 reveal"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="section-label mb-4">Partner Overview</div>
                <h2
                  className="font-bold mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    color: "var(--navy)",
                  }}
                >
                  Who We're Designing For
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
                  Valley Verde is a nonprofit in San Jose dedicated to promoting
                  food security, sovereignty, and justice through urban garden
                  education and resources. They work directly with underserved
                  communities to provide free workshops, nutritional education,
                  and gardening knowledge.
                </p>
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  Their flagship Shared Garden Program addresses food insecurity
                  by providing free workshops to affected and underserved
                  communities. The program offers nutritional education,
                  addresses climate change, and strengthens community ties and
                  resources.
                </p>
                <blockquote className="pull-quote mt-6">
                  "We're a small but mighty organization working to build food
                  justice in San Jose."
                  <footer
                    className="mt-2 text-sm not-italic"
                    style={{ color: "var(--slate)" }}
                  >
                    , Valley Verde
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Challenge Statement */}
            <div className="reveal">
              <div
                className="rounded-lg p-8"
                style={{
                  background: "white",
                  boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                  borderTop: "4px solid var(--amber)",
                }}
              >
                <div className="section-label mb-4">The Challenge</div>
                <h3
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    color: "var(--navy)",
                  }}
                >
                  Design Challenge Statement
                </h3>
                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  <strong style={{ color: "var(--navy)" }}>How might we</strong>{" "}
                  design a solution that enhances Valley Verde's community
                  impact, improves engagement with underserved populations, and
                  helps them scale their food justice mission?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Primary Users",
                      value: "Community Members & Staff",
                    },
                    {
                      label: "Key Constraint",
                      value: "Sustainable & Low-cost",
                    },
                    {
                      label: "Success Metric",
                      value: "Community Impact & Reach",
                    },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="p-4 rounded text-center"
                      style={{ background: "rgba(245,158,11,0.08)" }}
                    >
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{
                          color: "var(--amber)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="font-semibold text-sm"
                        style={{
                          color: "var(--navy)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Gantt Chart ─── */
const ganttTasks = [
  {
    task: "Team Formation & Charter",
    start: 0,
    duration: 1,
    category: "Planning",
  },
  {
    task: "Problem Discovery & Research",
    start: 1,
    duration: 2,
    category: "Research",
  },
  { task: "Partner Meetings", start: 2, duration: 6, category: "Partner" },
  {
    task: "Ideation & Brainstorming",
    start: 3,
    duration: 2,
    category: "Design",
  },
  { task: "Concept Development", start: 4, duration: 3, category: "Design" },
  { task: "Prototyping", start: 5, duration: 3, category: "Build" },
  { task: "User Testing", start: 6, duration: 2, category: "Testing" },
  { task: "Refinement & Iteration", start: 7, duration: 2, category: "Build" },
  {
    task: "Final Documentation",
    start: 8,
    duration: 2,
    category: "Documentation",
  },
];

export function GanttChart() {
  const revealRef = useScrollReveal();

  const categoryColors: Record<string, string> = {
    Planning: "var(--amber)",
    Research: "#3B82F6",
    Partner: "#10B981",
    Design: "#8B5CF6",
    Build: "#F59E0B",
    Testing: "#EF4444",
    Documentation: "var(--navy)",
  };

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Gantt Chart"
        title="Project Timeline"
        subtitle="Visual representation of our project schedule, milestones, and task dependencies."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/gantt-chart" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">10-Week Timeline</div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Project Schedule
              </h2>
              <div className="amber-rule" />
            </div>

            <div
              className="reveal rounded-lg overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
              }}
            >
              <div className="overflow-x-auto">
                <div className="min-w-max p-8">
                  {/* Header */}
                  <div className="flex gap-2 mb-6">
                    <div style={{ width: "200px", minWidth: "200px" }}>
                      <div
                        className="text-xs font-bold uppercase"
                        style={{
                          color: "var(--slate)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        Task
                      </div>
                    </div>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="w-12 text-center">
                        <div
                          className="text-xs font-bold"
                          style={{
                            color: "var(--slate)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          W{i + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tasks */}
                  {ganttTasks.map((task, i) => (
                    <div key={i} className="flex gap-2 mb-4 items-center">
                      <div style={{ width: "200px", minWidth: "200px" }}>
                        <div
                          className="text-sm font-semibold"
                          style={{
                            color: "var(--navy)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {task.task}
                        </div>
                      </div>
                      {Array.from({ length: 10 }).map((_, weekIdx) => {
                        const isActive =
                          weekIdx >= task.start &&
                          weekIdx < task.start + task.duration;
                        return (
                          <div
                            key={weekIdx}
                            className="w-12 h-8 rounded"
                            style={{
                              background: isActive
                                ? categoryColors[task.category]
                                : "rgba(15,32,68,0.04)",
                              border: isActive
                                ? `2px solid ${categoryColors[task.category]}`
                                : "1px solid rgba(15,32,68,0.1)",
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}

                  {/* Legend */}
                  <div
                    className="mt-8 pt-6"
                    style={{ borderTop: "1px solid rgba(15,32,68,0.1)" }}
                  >
                    <div
                      className="text-xs font-bold uppercase mb-4"
                      style={{
                        color: "var(--slate)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      Categories
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(categoryColors).map(([cat, color]) => (
                        <div key={cat} className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded"
                            style={{ background: color }}
                          />
                          <span
                            className="text-xs"
                            style={{
                              color: "var(--slate)",
                              fontFamily: "'Source Sans 3', sans-serif",
                            }}
                          >
                            {cat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Progress Meetings ─── */
const meetings = [
  {
    week: "Week 2",
    date: "Jan 15",
    title: "First Partner Meeting",
    attendees: "Full team + Valley Verde staff",
    notes:
      "Toured facilities, discussed current operations, identified key stakeholders and pain points.",
    outcomes: [
      "Facility tour completed",
      "Stakeholder list created",
      "Initial requirements gathered",
    ],
  },
  {
    week: "Week 3",
    date: "Jan 22",
    title: "Brainstorm Debrief",
    attendees: "Full team",
    notes:
      "Reviewed all 30+ brainstorm ideas, discussed feasibility and impact, selected top concepts.",
    outcomes: [
      "Ideas documented",
      "Top 3 concepts selected",
      "Evaluation criteria defined",
    ],
  },
  {
    week: "Week 4",
    date: "Jan 29",
    title: "Requirements Review",
    attendees: "Full team",
    notes:
      "Defined SMART project requirements, finalized survey questions, planned data collection approach.",
    outcomes: [
      "Requirements document",
      "Survey finalized",
      "Data collection plan",
    ],
  },
];

export function ProgressMeetings() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Progress Meetings"
        title="Progress Meetings"
        subtitle="Documentation of key team meetings, decisions, and outcomes throughout the project."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/progress-meetings" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Meeting Records</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Team & Partner Meetings
              </h2>
            </div>

            <div className="space-y-8">
              {meetings.map((meeting, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{
                          color: "var(--amber)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {meeting.week} • {meeting.date}
                      </div>
                      <h3
                        className="font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--navy)",
                          fontSize: "1.2rem",
                        }}
                      >
                        {meeting.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{
                        color: "var(--slate)",
                        fontFamily: "'Source Sans 3', sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Attendees
                    </div>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--slate)",
                      }}
                    >
                      {meeting.attendees}
                    </p>
                  </div>
                  <div className="mb-4">
                    <div
                      className="text-xs font-semibold mb-2"
                      style={{
                        color: "var(--slate)",
                        fontFamily: "'Source Sans 3', sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Notes
                    </div>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--slate)",
                      }}
                    >
                      {meeting.notes}
                    </p>
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold mb-3"
                      style={{
                        color: "var(--slate)",
                        fontFamily: "'Source Sans 3', sans-serif",
                        textTransform: "uppercase",
                      }}
                    >
                      Outcomes
                    </div>
                    <ul className="space-y-2">
                      {meeting.outcomes.map((outcome, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            style={{
                              color: "var(--amber)",
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              color: "var(--slate)",
                            }}
                          >
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Reflections ─── */
export function Reflections() {
  const revealRef = useScrollReveal();

  const reflections = [
    {
      week: "Week 2",
      title: "First Impressions of Valley Verde",
      reflection:
        "Meeting the Valley Verde team was eye-opening. Their passion for food justice and community empowerment is inspiring. We realized that our solution needs to be deeply rooted in understanding their current workflows and constraints.",
      learning: "Community-centered design starts with listening",
    },
    {
      week: "Week 3",
      title: "The Power of Brainstorming",
      reflection:
        "Our brainstorming session generated so many diverse ideas. It was valuable to see how each team member brought their unique perspective , from web design to economics to electrical engineering. The variety of ideas reflects our team's multidisciplinary strength.",
      learning: "Diversity of thought leads to better solutions",
    },
    {
      week: "Week 4",
      title: "Narrowing Down the Possibilities",
      reflection:
        "Selecting between our top concepts was challenging. We had to make trade-offs between technical complexity, feasibility, and impact. This exercise taught us the importance of clear requirements and evaluation criteria.",
      learning: "Good constraints lead to better decisions",
    },
    {
      week: "Week 5",
      title: "From Vision to Execution",
      reflection:
        "Creating the Gantt chart forced us to think concretely about timelines and dependencies. I realized how easy it is to underestimate task duration and how critical it is to build in buffer time. Seeing our 10-week project broken into specific, measurable tasks made the goal feel achievable rather than overwhelming. The Monday.com visualization also helped the team stay aligned on priorities and dependencies.",
      learning:
        "Clear project planning reduces uncertainty and builds team confidence",
    },
    {
      week: "Week 6",
      title: "Receiving Critical Feedback",
      reflection:
        "The partner presentation was both exciting and humbling. Valley Verde's feedback challenged some of our assumptions about what 'simple' means to non-technical users. Their request for a data pipeline diagram made me realize that technical clarity and user accessibility are not the same thing. The most valuable feedback was about simplifying our technical explanations , it pushed me to think about how to make complex systems feel approachable. This experience reinforced that good design is about meeting users where they are, not where we assume they should be.",
      learning:
        "User feedback is a gift; it reveals blind spots we can't see alone",
    },
    {
      week: "Week 7",
      title: "Building Systems, Not Just Features",
      reflection:
        "This week was about connecting the dots , linking the survey form to data collection, building the data pipeline, and ensuring everything flows seamlessly. I contributed to the frontend dashboard development and realized how much of good design is invisible infrastructure. The survey design process taught me that every question, every data field, and every visualization choice has downstream consequences. When Irene and I were integrating the backend API with the frontend, I saw how critical clear communication between backend and frontend teams is. One misaligned data format can cascade into hours of debugging.",
      learning:
        "Systems thinking is as important as individual component design",
    },
    {
      week: "Week 8",
      title: "Bringing It All Together",
      reflection:
        "Working on the final report draft and heatmap visualization this week felt like watching all our pieces come together. I led the frontend development sections and documented the UI/UX decisions we made throughout the quarter. Creating the heatmap was particularly rewarding , seeing food insecurity data mapped geographically made the abstract numbers feel real and urgent. The most challenging part was synthesizing 8 weeks of work into a coherent narrative that honors both the technical complexity and the human impact. Writing about our design choices forced me to articulate not just what we built, but why each decision mattered. I also realized how much I've grown as a designer this quarter , from thinking about pixels and layouts to thinking about systems, impact, and accessibility.",
      learning:
        "Great design solves real problems for real people; documentation of that journey is part of the solution",
    },
  ];

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Reflections"
        title="Reflections"
        subtitle="Personal insights, lessons learned, and key takeaways from the design process."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/reflections" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Learning Journal</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Project Reflections
              </h2>
            </div>

            <div className="space-y-8">
              {reflections.map((item, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg p-8"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-2"
                    style={{
                      color: "var(--amber)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {item.week}
                  </div>
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <blockquote
                    className="mb-6 pl-4 italic"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      borderLeft: "2px solid var(--amber)",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.reflection}
                  </blockquote>
                  <div
                    className="p-4 rounded"
                    style={{
                      background: "rgba(245,158,11,0.08)",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    <div
                      className="text-xs font-bold uppercase mb-2"
                      style={{
                        color: "var(--amber)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      Key Learning
                    </div>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--navy)",
                        fontWeight: 600,
                      }}
                    >
                      {item.learning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
