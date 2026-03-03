/*
 * About Me Page — Academic Editorial Design
 * Professional photo placeholder, biography, academic interests, course goals
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Lightbulb, Target, Heart } from "lucide-react";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/about-me-bg-6LiTVQ4FjcQerFKUwvhUgu.webp";

const interests = [
  {
    icon: GraduationCap,
    title: "Academic Background",
    text: "Currently pursuing a degree in Engineering at Santa Clara University, with a focus on design thinking, systems engineering, and sustainable solutions.",
  },
  {
    icon: Lightbulb,
    title: "Areas of Interest",
    text: "Passionate about human-centered design, renewable energy systems, and the intersection of technology and social impact.",
  },
  {
    icon: Target,
    title: "Goals for ENGR 110",
    text: "To develop practical engineering design skills, learn to collaborate effectively in a team setting, and produce work that addresses real community needs.",
  },
  {
    icon: Heart,
    title: "Beyond Engineering",
    text: "Outside of academics, I enjoy hiking, photography, and volunteering with local STEM outreach programs for middle school students.",
  },
];

export default function AboutMe() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Personal Introduction"
        title="About Me"
        subtitle="Get to know the student behind this eFolio — my background, interests, and aspirations for ENGR 110."
        bgImage={ABOUT_BG}
      />

      {/* ── Main Content ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Photo Column */}
              <div className="lg:col-span-1 reveal">
                {/* Professional Photo Placeholder */}
                <div
                  className="relative rounded-lg overflow-hidden mb-6"
                  style={{
                    boxShadow: "0 16px 48px rgba(15,32,68,0.15)",
                    aspectRatio: "3/4",
                    background: "linear-gradient(135deg, #e8e4dc 0%, #d4cfc5 100%)",
                  }}
                >
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="w-28 h-28 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "var(--navy)" }}
                    >
                      <span
                        className="text-5xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "var(--amber)" }}
                      >
                        YN
                      </span>
                    </div>
                    <p
                      className="text-sm text-center px-4"
                      style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Professional Photo
                      <br />
                      <span className="text-xs opacity-60">(Replace with your photo)</span>
                    </p>
                  </div>
                  {/* Amber accent */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "var(--amber)" }}
                  />
                </div>

                {/* Quick Info Card */}
                <div
                  className="rounded-lg p-5"
                  style={{
                    background: "white",
                    boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <dl className="space-y-3">
                    {[
                      { label: "Name", value: "Your Name" },
                      { label: "Major", value: "Engineering" },
                      { label: "Year", value: "Sophomore" },
                      { label: "University", value: "Santa Clara University" },
                      { label: "Course", value: "ENGR 110" },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt
                          className="text-xs uppercase tracking-wider font-bold"
                          style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {item.label}
                        </dt>
                        <dd
                          className="text-sm font-semibold mt-0.5"
                          style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* Bio Column */}
              <div className="lg:col-span-2">
                <div className="reveal">
                  <div className="section-label mb-4">Biography</div>
                  <h2
                    className="font-bold mb-6 leading-tight"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                      color: "var(--navy)",
                    }}
                  >
                    Hello, I'm a Student Engineer
                    <br />
                    <em>with a Passion for Design</em>
                  </h2>
                  <div className="amber-rule mb-6" />
                </div>

                <div className="reveal" style={{ transitionDelay: "0.1s" }}>
                  <p
                    className="leading-relaxed mb-5"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "1.05rem",
                      color: "var(--slate)",
                    }}
                  >
                    Welcome to my ENGR 110 eFolio! I am a student at Santa Clara University,
                    pursuing a degree in Engineering with a deep interest in how design can
                    solve real-world problems. This portfolio documents my journey through
                    ENGR 110 — a course that challenges students to tackle authentic engineering
                    challenges in collaboration with community partners.
                  </p>
                  <p
                    className="leading-relaxed mb-5"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "1.05rem",
                      color: "var(--slate)",
                    }}
                  >
                    My academic interests span mechanical systems, sustainable design, and the
                    human factors that shape how technology is adopted and used. I believe that
                    the best engineering solutions emerge from deep empathy with the people they
                    serve — a principle I hope to embody throughout this course.
                  </p>
                  <p
                    className="leading-relaxed mb-10"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "1.05rem",
                      color: "var(--slate)",
                    }}
                  >
                    Through ENGR 110, I hope to strengthen my ability to work in
                    multidisciplinary teams, communicate technical ideas clearly to diverse
                    audiences, and develop solutions that are not only functional but also
                    equitable and sustainable.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="reveal mb-10" style={{ transitionDelay: "0.2s" }}>
                  <blockquote className="pull-quote">
                    "I chose engineering because I want to build things that matter — solutions
                    that improve lives and stand the test of time."
                  </blockquote>
                </div>

                {/* Interest Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {interests.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="reveal rounded-lg p-5"
                        style={{
                          transitionDelay: `${0.25 + i * 0.08}s`,
                          background: "white",
                          boxShadow: "0 4px 16px rgba(15,32,68,0.07)",
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: "rgba(245,158,11,0.12)" }}
                          >
                            <Icon size={18} style={{ color: "var(--amber)" }} />
                          </div>
                          <div>
                            <h4
                              className="font-bold mb-1 text-sm"
                              style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)" }}
                            >
                              {item.title}
                            </h4>
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
