/*
 * Footer , Academic Editorial Design
 * Deep navy background, amber accents, clean editorial layout
 */
import { Link } from "wouter";
import { BookOpen, Mail, Users, FolderOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--ivory)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center rounded"
                style={{ background: "var(--amber)" }}
              >
                <span
                  className="font-bold text-base"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#0F2044" }}
                >
                  E
                </span>
              </div>
              <div>
                <div
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "0.02em" }}
                >
                  ENGR 110 eFolio
                </div>
                <div className="text-xs" style={{ color: "rgba(250,250,247,0.5)" }}>
                  Engineering Design Portfolio
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(250,250,247,0.65)", fontFamily: "'Source Sans 3', sans-serif" }}>
              An individual electronic portfolio documenting the ENGR 110 design project journey , from initial concepts through final deliverables.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold mb-4 text-sm uppercase tracking-widest"
              style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Me", path: "/about" },
                { label: "The Team", path: "/team" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      className="text-sm transition-colors hover:text-amber-400"
                      style={{ color: "rgba(250,250,247,0.65)", fontFamily: "'Source Sans 3', sans-serif", cursor: "pointer" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Sub-pages */}
          <div>
            <h4
              className="font-bold mb-4 text-sm uppercase tracking-widest"
              style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Project
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Team Activities", path: "/project/team-activities" },
                { label: "About our Partner", path: "/project/partner" },
                { label: "Gantt Chart", path: "/project/gantt-chart" },
                { label: "Progress Meetings", path: "/project/progress-meetings" },
                { label: "Reflections", path: "/project/reflections" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      className="text-sm transition-colors hover:text-amber-400"
                      style={{ color: "rgba(250,250,247,0.65)", fontFamily: "'Source Sans 3', sans-serif", cursor: "pointer" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(250,250,247,0.1)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "rgba(250,250,247,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}>
              © {new Date().getFullYear()} ENGR 110 eFolio. Santa Clara University.
            </p>
            <p className="text-xs" style={{ color: "rgba(250,250,247,0.4)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Engineering Design & Ethics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
