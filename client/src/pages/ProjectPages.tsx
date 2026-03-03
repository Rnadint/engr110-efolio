/*
 * Project Sub-Pages — Academic Editorial Design
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

const PROJECT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

const subNavLinks = [
  { label: "Team Activities", path: "/project/team-activities", icon: ClipboardList },
  { label: "About our Partner", path: "/project/partner", icon: Building2 },
  { label: "Gantt Chart", path: "/project/gantt-chart", icon: BarChart3 },
  { label: "Progress Meetings", path: "/project/progress-meetings", icon: MessageSquare },
  { label: "Reflections", path: "/project/reflections", icon: BookOpen },
];

function ProjectSubNav({ current }: { current: string }) {
  return (
    <div
      className="sticky top-16 z-40"
      style={{ background: "white", borderBottom: "1px solid rgba(15,32,68,0.08)" }}
    >
      <div className="container">
        <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-hide">
          {subNavLinks.map((link) => {
            const Icon = link.icon;
            const isActive = current === link.path;
            return (
              <Link key={link.path} href={link.path}>
                <div
                  className="flex items-center gap-2 px-4 py-3 whitespace-nowrap transition-all text-sm font-semibold"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: isActive ? "var(--navy)" : "var(--slate)",
                    borderBottom: isActive ? "3px solid var(--amber)" : "3px solid transparent",
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
    title: "Team Formation & Kickoff",
    status: "complete",
    desc: "Met as a team of five: Shibo (Web Design), Conner (CS), Irene (CS), Anushri (ECE), and Lily (Economics). Established communication norms, assigned roles, and reviewed ENGR 110 expectations. Began background research on Valley Verde and urban agriculture initiatives.",
    deliverable: "Team Charter & Initial Research",
  },
  {
    week: "Week 2",
    date: "Jan 13–17",
    title: "Problem Discovery",
    status: "complete",
    desc: "Initial stakeholder interviews, secondary research on problem domain. Identified key pain points and opportunity areas.",
    deliverable: "Problem Statement Draft",
  },
  {
    week: "Week 3",
    date: "Jan 20–24",
    title: "Partner Introduction",
    status: "complete",
    desc: "First meeting with community partner. Toured facilities, observed workflows, and gathered primary requirements.",
    deliverable: "Partner Meeting Notes",
  },
  {
    week: "Week 4",
    date: "Jan 27–31",
    title: "Ideation & Brainstorming",
    status: "complete",
    desc: "Conducted structured brainstorming sessions. Generated 30+ concepts and narrowed to 5 promising directions.",
    deliverable: "Concept Sketches",
  },
  {
    week: "Week 5",
    date: "Feb 3–7",
    title: "Concept Development",
    status: "in-progress",
    desc: "Developing top 3 concepts in detail. Creating initial prototypes and preparing for user testing.",
    deliverable: "Prototype v0.1",
  },
  {
    week: "Week 6",
    date: "Feb 10–14",
    title: "Testing & Iteration",
    status: "upcoming",
    desc: "User testing sessions with partner and stakeholders. Collect feedback and iterate on designs.",
    deliverable: "Testing Report",
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
            <div className="reveal mb-12">
              <div className="section-label mb-4">Activity Log</div>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)" }}
              >
                Weekly Progress
              </h2>
              <div className="amber-rule" />
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 mb-12 reveal">
              {[
                { label: "Activities Completed", value: "4", icon: CheckCircle2 },
                { label: "In Progress", value: "1", icon: Clock },
                { label: "Upcoming", value: "1", icon: Calendar },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-lg p-5 text-center"
                    style={{ background: "white", boxShadow: "0 4px 16px rgba(15,32,68,0.07)" }}
                  >
                    <Icon size={24} className="mx-auto mb-2" style={{ color: "var(--amber)" }} />
                    <div
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {activities.map((act, i) => (
                <div
                  key={i}
                  className="timeline-item reveal"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="rounded-lg p-6 ml-4"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 16px rgba(15,32,68,0.07)",
                      borderLeft: act.status === "complete"
                        ? "4px solid var(--amber)"
                        : act.status === "in-progress"
                        ? "4px solid #3B82F6"
                        : "4px solid #E5E7EB",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider mr-3"
                          style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {act.week}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {act.date}
                        </span>
                      </div>
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded"
                        style={{
                          background: act.status === "complete"
                            ? "rgba(245,158,11,0.12)"
                            : act.status === "in-progress"
                            ? "rgba(59,130,246,0.12)"
                            : "rgba(100,116,139,0.1)",
                          color: act.status === "complete"
                            ? "var(--amber)"
                            : act.status === "in-progress"
                            ? "#3B82F6"
                            : "var(--slate)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {act.status === "complete" ? "✓ Complete" : act.status === "in-progress" ? "● In Progress" : "○ Upcoming"}
                      </span>
                    </div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}
                    >
                      {act.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-3"
                      style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {act.desc}
                    </p>
                    <div
                      className="text-xs font-semibold"
                      style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Deliverable: <span style={{ color: "var(--amber)" }}>{act.deliverable}</span>
                    </div>
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
                    style={{ background: "rgba(245,158,11,0.2)", border: "2px solid var(--amber)" }}
                  >
                    <Building2 size={36} style={{ color: "var(--amber)" }} />
                  </div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--ivory)", fontSize: "1.2rem" }}
                  >
                    Partner Organization
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(250,250,247,0.6)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    Food Justice Non-Profit
                  </p>
                  <div className="mt-6 space-y-2 text-left">
                    {[
                      { label: "Organization", value: "Valley Verde" },
                      { label: "Location", value: "San Jose, CA" },
                      { label: "Mission", value: "Food Security" },
                      { label: "Tagline", value: "Plant Eat Share" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-xs">
                        <span style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700 }}>
                          {item.label}
                        </span>
                        <span style={{ color: "rgba(250,250,247,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="section-label mb-4">Partner Overview</div>
                <h2
                  className="font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)" }}
                >
                  Who We're Designing For
                </h2>
                <div className="amber-rule mb-6" />
                <p className="leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "var(--slate)" }}>
                  Valley Verde is a nonprofit in San Jose dedicated to promoting food security, sovereignty, and justice through urban garden education and resources. They work directly with underserved communities to provide free workshops, nutritional education, and gardening knowledge.
                </p>
                <p className="leading-relaxed mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "var(--slate)" }}>
                  Their flagship Shared Garden Program addresses food insecurity by providing free workshops to affected and underserved communities. The program offers nutritional education, addresses climate change, and strengthens community ties and resources.
                </p>
                <blockquote className="pull-quote mt-6">
                  "We're a small but mighty organization working to build food justice in San Jose."
                  <footer className="mt-2 text-sm not-italic" style={{ color: "var(--slate)" }}>
                    — Valley Verde
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Challenge Statement */}
            <div className="reveal">
              <div
                className="rounded-lg p-8"
                style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)", borderTop: "4px solid var(--amber)" }}
              >
                <div className="section-label mb-4">The Challenge</div>
                <h3
                  className="font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--navy)" }}
                >
                  Design Challenge Statement
                </h3>
                <p className="leading-relaxed mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "var(--slate)" }}>
                  <strong style={{ color: "var(--navy)" }}>How might we</strong> design a solution
                  that helps our partner organization streamline their intake process, reduce
                  administrative burden on staff, and improve the overall client experience —
                  within the constraints of a limited budget and existing infrastructure?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Primary Users", value: "Community Members Staff & Clients Staff" },
                    { label: "Key Constraint", value: "Sustainable Low-cost Solution Low-cost" },
                    { label: "Success Metric", value: "Community Impact Time Saved / Satisfaction Reach" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded text-center"
                      style={{ background: "rgba(245,158,11,0.08)" }}
                    >
                      <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}>
                        {item.label}
                      </div>
                      <div className="font-semibold text-sm" style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}>
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
  { task: "Team Formation & Charter", start: 0, duration: 1, category: "Planning" },
  { task: "Problem Discovery & Research", start: 1, duration: 2, category: "Research" },
  { task: "Partner Meetings", start: 2, duration: 6, category: "Partner" },
  { task: "Ideation & Brainstorming", start: 3, duration: 2, category: "Design" },
  { task: "Concept Development", start: 4, duration: 3, category: "Design" },
  { task: "Prototyping", start: 5, duration: 3, category: "Build" },
  { task: "User Testing", start: 6, duration: 2, category: "Testing" },
  { task: "Iteration & Refinement", start: 7, duration: 2, category: "Design" },
  { task: "Final Prototype", start: 8, duration: 1, category: "Build" },
  { task: "Documentation & Report", start: 7, duration: 3, category: "Planning" },
  { task: "Final Presentation", start: 9, duration: 1, category: "Delivery" },
];

const categoryColors: Record<string, string> = {
  Planning: "#0F2044",
  Research: "#3B82F6",
  Partner: "#F59E0B",
  Design: "#10B981",
  Build: "#8B5CF6",
  Testing: "#EF4444",
  Delivery: "#F59E0B",
};

const weeks = Array.from({ length: 10 }, (_, i) => `Wk ${i + 1}`);

export function GanttChart() {
  const revealRef = useScrollReveal();
  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Timeline"
        title="Gantt Chart"
        subtitle="A visual overview of our project timeline, showing task dependencies, milestones, and the overall schedule."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/gantt-chart" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="reveal mb-10">
              <div className="section-label mb-4">Project Timeline</div>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)" }}
              >
                10-Week Project Schedule
              </h2>
              <div className="amber-rule mb-6" />
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "1rem" }}>
                This Gantt chart illustrates the planned timeline for our ENGR 110 design project.
                Tasks are color-coded by category to show the flow of work across the quarter.
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mb-8 reveal">
              {Object.entries(categoryColors).map(([cat, color]) => (
                <div key={cat} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
                  <span className="text-xs font-semibold" style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    {cat}
                  </span>
                </div>
              ))}
            </div>

            {/* Gantt Grid */}
            <div
              className="rounded-lg overflow-hidden reveal"
              style={{ boxShadow: "0 4px 24px rgba(15,32,68,0.1)", background: "white" }}
            >
              {/* Header */}
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "200px repeat(10, 1fr)",
                  background: "var(--navy)",
                  padding: "0.75rem 1rem",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Task
                </div>
                {weeks.map((w) => (
                  <div
                    key={w}
                    className="text-xs font-semibold text-center"
                    style={{ color: "rgba(250,250,247,0.7)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {w}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {ganttTasks.map((task, i) => (
                <div
                  key={i}
                  className="grid items-center"
                  style={{
                    gridTemplateColumns: "200px repeat(10, 1fr)",
                    padding: "0.5rem 1rem",
                    background: i % 2 === 0 ? "white" : "rgba(15,32,68,0.02)",
                    borderBottom: "1px solid rgba(15,32,68,0.05)",
                  }}
                >
                  <div
                    className="text-xs font-semibold pr-3"
                    style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {task.task}
                  </div>
                  {weeks.map((_, wi) => {
                    const inRange = wi >= task.start && wi < task.start + task.duration;
                    const isFirst = wi === task.start;
                    const isLast = wi === task.start + task.duration - 1;
                    return (
                      <div key={wi} className="h-7 px-0.5 flex items-center">
                        {inRange && (
                          <div
                            className="h-5 w-full"
                            style={{
                              background: categoryColors[task.category],
                              borderRadius: isFirst && isLast
                                ? "4px"
                                : isFirst
                                ? "4px 0 0 4px"
                                : isLast
                                ? "0 4px 4px 0"
                                : "0",
                              opacity: 0.85,
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <p
              className="mt-4 text-xs text-center reveal"
              style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              * Timeline is subject to adjustment based on project needs and partner availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Progress Meetings ─── */
const meetings = [
  {
    date: "January 8, 2025",
    type: "Team Meeting",
    attendees: "Full Team",
    agenda: "Team formation, role assignments, review of course expectations and project scope.",
    decisions: "Agreed on communication channels (Slack + weekly in-person). Assigned team lead.",
    nextSteps: "Complete team charter by Week 2.",
  },
  {
    date: "January 15, 2025",
    type: "Partner Meeting",
    attendees: "Full Team + Partner",
    agenda: "Introduction to partner organization, facility tour, initial requirements gathering.",
    decisions: "Identified three key problem areas. Agreed on bi-weekly check-in schedule.",
    nextSteps: "Conduct secondary research on problem domain. Prepare interview questions.",
  },
  {
    date: "January 22, 2025",
    type: "Team Meeting",
    attendees: "Full Team",
    agenda: "Research synthesis, problem statement refinement, ideation preparation.",
    decisions: "Finalized problem statement. Selected top 3 research insights to guide ideation.",
    nextSteps: "Conduct brainstorming session. Generate 30+ concepts.",
  },
  {
    date: "January 29, 2025",
    type: "Partner Check-in",
    attendees: "Team Lead + Partner",
    agenda: "Share initial concepts, gather feedback, clarify constraints.",
    decisions: "Partner preferred concepts 1 and 3. Budget constraint confirmed at $500.",
    nextSteps: "Develop concepts 1 and 3 in detail. Prepare rough prototypes.",
  },
  {
    date: "February 5, 2025",
    type: "Team Meeting",
    attendees: "Full Team",
    agenda: "Prototype review, testing plan development, task assignments.",
    decisions: "Prototype v0.1 approved for user testing. Testing scheduled for Week 6.",
    nextSteps: "Finalize prototype. Recruit 5 test participants from partner organization.",
  },
];

export function ProgressMeetings() {
  const revealRef = useScrollReveal();
  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Meeting Records"
        title="Progress Meetings"
        subtitle="Documented records of team meetings and partner check-ins, including agendas, decisions, and action items."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/progress-meetings" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="reveal mb-12">
              <div className="section-label mb-4">Meeting Log</div>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)" }}
              >
                Meeting Records
              </h2>
              <div className="amber-rule mb-6" />
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "1rem" }}>
                All team and partner meetings are documented here with agendas, key decisions, and next steps.
              </p>
            </div>

            <div className="space-y-6">
              {meetings.map((meeting, i) => (
                <div
                  key={i}
                  className="reveal rounded-lg overflow-hidden"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    background: "white",
                    boxShadow: "0 4px 20px rgba(15,32,68,0.08)",
                  }}
                >
                  {/* Meeting Header */}
                  <div
                    className="px-6 py-4 flex flex-wrap items-center justify-between gap-3"
                    style={{ background: "var(--navy)" }}
                  >
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {meeting.type}
                      </div>
                      <div
                        className="font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ivory)", fontSize: "1.05rem" }}
                      >
                        {meeting.date}
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-2 text-xs px-3 py-1.5 rounded"
                      style={{ background: "rgba(245,158,11,0.15)", color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                    >
                      <Users size={13} />
                      {meeting.attendees}
                    </div>
                  </div>

                  {/* Meeting Body */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Agenda", content: meeting.agenda },
                      { label: "Key Decisions", content: meeting.decisions },
                      { label: "Next Steps", content: meeting.nextSteps },
                    ].map((section) => (
                      <div key={section.label}>
                        <div
                          className="text-xs font-bold uppercase tracking-wider mb-2"
                          style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {section.label}
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {section.content}
                        </p>
                      </div>
                    ))}
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
const reflections = [
  {
    week: "Week 1–2",
    title: "Finding Our Footing",
    theme: "Team Dynamics",
    content: "The first two weeks were about getting to know each other and establishing how we would work together. I was surprised by how different our communication styles were — something that initially felt like a challenge became a strength once we learned to leverage our differences. The team charter exercise was more valuable than I expected; putting our norms in writing gave us something to return to when tensions arose.",
    learning: "Effective teams are built on explicit agreements, not assumed understanding.",
  },
  {
    week: "Week 3",
    title: "Meeting the Real World",
    theme: "Partner Engagement",
    content: "Our first visit to the partner organization was humbling. The problems we had theorized about in class looked very different in practice. I realized how much I had been designing in the abstract — without truly understanding the context. The facility tour forced me to confront the gap between textbook engineering and real-world constraints.",
    learning: "Empathy requires presence. You cannot fully understand a problem without experiencing it firsthand.",
  },
  {
    week: "Week 4",
    title: "The Messy Middle of Ideation",
    theme: "Creative Process",
    content: "Brainstorming was simultaneously exhilarating and frustrating. I came in with ideas I was attached to, and the structured process forced me to let them go and explore more broadly. The best concept we generated came from a team member whose background I had initially underestimated. This was a lesson in intellectual humility.",
    learning: "The best ideas rarely come from the most confident voice in the room.",
  },
  {
    week: "Week 5",
    title: "From Concept to Prototype",
    theme: "Design Iteration",
    content: "Building the first prototype revealed assumptions we didn't know we were making. What seemed simple on paper required three iterations to get right. I am learning to embrace imperfection in early prototypes — they are tools for learning, not finished products. The faster we can make something tangible, the faster we can discover what doesn't work.",
    learning: "A prototype is a question made physical. Build to learn, not to impress.",
  },
];

export function Reflections() {
  const revealRef = useScrollReveal();
  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Personal Reflections"
        title="Reflections"
        subtitle="Personal reflections on the learning process — what I've discovered about engineering, teamwork, and myself."
        bgImage={PROJECT_BG}
      />
      <ProjectSubNav current="/project/reflections" />
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="reveal mb-12">
              <div className="section-label mb-4">Learning Journal</div>
              <h2
                className="font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)" }}
              >
                My Engineering Journey
              </h2>
              <div className="amber-rule mb-6" />
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "1rem" }}>
                These reflections capture my personal growth throughout the ENGR 110 design process —
                the moments of insight, struggle, and discovery that shaped my understanding of engineering.
              </p>
            </div>

            <div className="space-y-10">
              {reflections.map((ref, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}
                  >
                    {/* Header */}
                    <div
                      className="px-8 py-5 flex flex-wrap items-center justify-between gap-3"
                      style={{ borderBottom: "1px solid rgba(15,32,68,0.06)" }}
                    >
                      <div>
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {ref.week}
                        </span>
                        <h3
                          className="font-bold mt-1"
                          style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}
                        >
                          {ref.title}
                        </h3>
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded"
                        style={{
                          background: "rgba(15,32,68,0.07)",
                          color: "var(--navy)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {ref.theme}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="px-8 py-6">
                      <p
                        className="leading-relaxed mb-6"
                        style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "var(--slate)" }}
                      >
                        {ref.content}
                      </p>
                      <div
                        className="pull-quote"
                        style={{ fontSize: "1rem" }}
                      >
                        {ref.learning}
                      </div>
                    </div>
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
