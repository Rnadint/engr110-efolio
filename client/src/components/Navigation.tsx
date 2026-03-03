/*
 * Navigation — Academic Editorial Design
 * Sticky top nav, deep navy background, amber accent underlines
 * Dropdown for Project sub-pages
 */
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const projectSubPages = [
  { label: "Project Overview", path: "/project" },
  { label: "Team Activities", path: "/project/team-activities" },
  { label: "About our Partner", path: "/project/partner" },
  { label: "Gantt Chart", path: "/project/gantt-chart" },
  { label: "Progress Meetings", path: "/project/progress-meetings" },
  { label: "Reflections", path: "/project/reflections" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectDropdown, setProjectDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setProjectDropdown(false);
  }, [location]);

  const isActive = (path: string) => location === path;
  const isProjectActive = location.startsWith("/project");

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "The Team", path: "/team" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15, 32, 68, 0.97)"
          : "rgba(15, 32, 68, 0.92)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 24px rgba(15,32,68,0.25)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div
                className="w-8 h-8 flex items-center justify-center rounded"
                style={{ background: "var(--amber)" }}
              >
                <span
                  className="font-bold text-sm"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#0F2044",
                  }}
                >
                  E
                </span>
              </div>
              <div>
                <div
                  className="text-sm font-bold leading-tight"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "var(--ivory)",
                  }}
                >
                  ENGR 110
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "rgba(250,250,247,0.6)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  eFolio
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span className={`nav-link ${isActive(link.path) ? "active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            ))}

            {/* Project Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`nav-link flex items-center gap-1 ${isProjectActive ? "active" : ""}`}
                onClick={() => setProjectDropdown(!projectDropdown)}
                style={{ background: "none", border: "none", padding: 0 }}
              >
                Project
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: projectDropdown ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {projectDropdown && (
                <div
                  className="absolute top-full left-1/2 mt-3 w-52 rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    transform: "translateX(-50%)",
                    background: "rgba(15,32,68,0.98)",
                    border: "1px solid rgba(245,158,11,0.2)",
                  }}
                >
                  {projectSubPages.map((sub) => (
                    <Link key={sub.path} href={sub.path}>
                      <div
                        className="px-4 py-3 text-sm transition-all duration-150"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          fontWeight: 600,
                          color: isActive(sub.path) ? "var(--amber)" : "rgba(250,250,247,0.85)",
                          borderLeft: isActive(sub.path) ? "3px solid var(--amber)" : "3px solid transparent",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background = "rgba(245,158,11,0.1)";
                          (e.currentTarget as HTMLDivElement).style.color = "var(--amber)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background = "transparent";
                          (e.currentTarget as HTMLDivElement).style.color = isActive(sub.path) ? "var(--amber)" : "rgba(250,250,247,0.85)";
                        }}
                      >
                        {sub.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact">
              <span className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "var(--ivory)", background: "none", border: "none" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(15,32,68,0.99)",
            borderColor: "rgba(245,158,11,0.2)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div
                  className="py-3 px-2 rounded transition-colors"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: isActive(link.path) ? "var(--amber)" : "rgba(250,250,247,0.85)",
                    borderLeft: isActive(link.path) ? "3px solid var(--amber)" : "3px solid transparent",
                  }}
                >
                  {link.label}
                </div>
              </Link>
            ))}

            {/* Project section in mobile */}
            <div
              className="py-2 px-2 text-xs font-bold uppercase tracking-widest mt-2"
              style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Project
            </div>
            {projectSubPages.map((sub) => (
              <Link key={sub.path} href={sub.path}>
                <div
                  className="py-2 px-4 rounded transition-colors"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    color: isActive(sub.path) ? "var(--amber)" : "rgba(250,250,247,0.7)",
                  }}
                >
                  {sub.label}
                </div>
              </Link>
            ))}

            <Link href="/contact">
              <div
                className="py-3 px-2 rounded mt-1 transition-colors"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: isActive("/contact") ? "var(--amber)" : "rgba(250,250,247,0.85)",
                  borderLeft: isActive("/contact") ? "3px solid var(--amber)" : "3px solid transparent",
                }}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
