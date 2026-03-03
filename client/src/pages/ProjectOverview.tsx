/*
 * Project Overview Page — Academic Editorial Design
 * Landing page for the Project section with cards linking to all 5 sub-pages
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
  Target,
  Users,
} from "lucide-react";

const PROJECT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

const subPages = [
  {
    icon: ClipboardList,
    label: "01",
    title: "Team Activities",
    path: "/project/team-activities",
    desc: "A chronological log of our team's collaborative work, weekly milestones, and deliverables throughout the quarter.",
    tag: "Activity Log",
  },
  {
    icon: Building2,
    label: "02",
    title: "About our Partner",
    path: "/project/partner",
    desc: "Learn about the community organization we are designing for and the challenge they have brought to our team.",
    tag: "Community Partner",
  },
  {
    icon: BarChart3,
    label: "03",
    title: "Gantt Chart",
    path: "/project/gantt-chart",
    desc: "A visual 10-week project timeline showing task dependencies, categories, and the overall schedule.",
    tag: "Project Timeline",
  },
  {
    icon: MessageSquare,
    label: "04",
    title: "Progress Meetings",
    path: "/project/progress-meetings",
    desc: "Documented records of all team and partner meetings — agendas, key decisions, and next steps.",
    tag: "Meeting Records",
  },
  {
    icon: BookOpen,
    label: "05",
    title: "Reflections",
    path: "/project/reflections",
    desc: "Personal reflections on the learning process — insights on engineering, teamwork, and growth.",
    tag: "Learning Journal",
  },
  {
    icon: ClipboardList,
    label: "06",
    title: "Brainstorming Process",
    path: "/project/brainstorming",
    desc: "Showcasing our team's creative ideation process — 30+ concepts generated, evaluated, and refined.",
    tag: "Ideation",
  },
  {
    icon: Target,
    label: "07",
    title: "Project Requirements",
    path: "/project/requirements",
    desc: "SMART goals, functional requirements, success metrics, and constraints for our solution.",
    tag: "Requirements",
  },
  {
    icon: Users,
    label: "08",
    title: "Team Contract",
    path: "/project/team-contract",
    desc: "Our team agreements, collaboration norms, shared values, and decision-making processes.",
    tag: "Team Agreements",
  },
];

export default function ProjectOverview() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project Documentation"
        title="Project Overview"
        subtitle="A comprehensive record of my ENGR 110 design project — from team formation through final deliverables."
        bgImage={PROJECT_BG}
      />

      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Intro */}
            <div className="max-w-3xl mb-16 reveal">
              <div className="section-label mb-4">About This Section</div>
              <h2
                className="font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Documenting the Design Journey
              </h2>
              <div className="amber-rule mb-6" />
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.05rem",
                  color: "var(--slate)",
                }}
              >
                This section contains the full documentation of my ENGR 110 design project.
                Each sub-page captures a different dimension of the work — from weekly activities
                and partner context, to the project timeline, meeting records, and personal
                reflections. Together, they tell the complete story of my engineering design experience.
              </p>
            </div>

            {/* Sub-page Cards */}
            <div className="space-y-6">
              {subPages.map((page, i) => {
                const Icon = page.icon;
                return (
                  <Link key={page.path} href={page.path}>
                    <div
                      className="card-hover reveal rounded-lg overflow-hidden"
                      style={{
                        transitionDelay: `${i * 0.08}s`,
                        background: "white",
                        boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                        cursor: "pointer",
                      }}
                    >
                      <div className="flex items-center gap-6 p-6">
                        {/* Number */}
                        <div
                          className="flex-shrink-0 w-14 h-14 rounded flex items-center justify-center"
                          style={{ background: "var(--navy)" }}
                        >
                          <span
                            className="font-bold text-lg"
                            style={{ fontFamily: "'Playfair Display', serif", color: "var(--amber)" }}
                          >
                            {page.label}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3
                              className="font-bold"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.2rem",
                                color: "var(--navy)",
                              }}
                            >
                              {page.title}
                            </h3>
                            <span
                              className="text-xs font-semibold px-2 py-1 rounded"
                              style={{
                                background: "rgba(245,158,11,0.1)",
                                color: "var(--amber)",
                                fontFamily: "'Source Sans 3', sans-serif",
                              }}
                            >
                              {page.tag}
                            </span>
                          </div>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                          >
                            {page.desc}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(245,158,11,0.1)" }}
                        >
                          <ChevronRight size={18} style={{ color: "var(--amber)" }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
