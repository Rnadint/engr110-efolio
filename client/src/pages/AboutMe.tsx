/*
 * About Me Page , Academic Editorial Design
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
    text: "I'm a 24-year-old Web Design and Engineering student at Santa Clara University, originally from Shandong, China and currently based in Shanghai. I transitioned from Computer Science & Engineering into Web Design to combine technical problem-solving with visual thinking.",
  },
  {
    icon: Lightbulb,
    title: "Design Philosophy",
    text: "I'm particularly interested in how thoughtful interfaces can make complex systems feel simple and approachable. I work at the intersection of front-end engineering, user experience, and clean visual design to create digital products that feel considerate.",
  },
  {
    icon: Target,
    title: "Goals for ENGR 110",
    text: "I want to learn how to distinguish problems and become active in solving them. Through this course, I hope to apply design thinking to real community challenges and develop solutions that create meaningful impact.",
  },
  {
    icon: Heart,
    title: "Beyond Coursework",
    text: "I explore side projects, read about product design, and iterate on ideas until they feel cohesive. I value clarity, reliability, and small details that make digital products feel thoughtful and well-crafted.",
  },
];

export default function AboutMe() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Personal Introduction"
        title="About Me"
        subtitle="Get to know the student behind this eFolio , my background, interests, and aspirations for ENGR 110."
        bgImage={ABOUT_BG}
      />

      {/* ── Main Content ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Photo Column */}
              <div className="lg:col-span-1 reveal">
                {/* Professional Photo */}
                <div
                  className="relative rounded-lg overflow-hidden mb-6"
                  style={{
                    boxShadow: "0 16px 48px rgba(15,32,68,0.15)",
                    aspectRatio: "3/4",
                  }}
                >
                  <img
                    src="https://private-us-east-1.manuscdn.com/user_upload_by_module/session_file/310519663400044455/VuSZSZmobwXehyIm.jpg?Expires=1804100425&Signature=pfU69waQCS94eRHHRwqTDLm-6VDm9nCjRUHri9RpGtvz6XWMrLAie3P~jJT9p9tpZp22VowgtxxqH49Hx1vXyH2HgQS2AsRtBJL-pDiycmRE0cEoJAZco~Uipnyk9qtJYDQEK5nex2HLnpoZCgatSSrHm~WnnphLF8ANqENmUTSSwpULUZ5CWzHhbFvrEfJGDtpyd8JszJam~eCJg9EgF31O-WytQ7zSXy5qHwgYj-Am7j1xZGN-HDqneto9STFwWcTD35ucUwFeggQlMbrvLIeIJB5-zDSNdghdz0OiTTPNWaIBvG238Lw4YvqNCTdMmlOf65HqrhFu1BGzaK2PLg__&Key-Pair-Id=K2HSFNDJXOU9YS"
                    alt="Shibo's professional photo"
                    className="w-full h-full object-cover"
                  />
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
<<<<<<< HEAD
                    {[
                      { label: "Name", value: "Shibo Cong" },
                      { label: "Major", value: "Web Design & Engineering" },
                      { label: "Year", value: "Senior, SCU'26" },
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
=======
                    <div>
                      <dt
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Name
                      </dt>
                      <dd
                        className="text-sm font-semibold mt-1"
                        style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Shibo Li
                      </dd>
                    </div>
                    <div>
                      <dt
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Major
                      </dt>
                      <dd
                        className="text-sm font-semibold mt-1"
                        style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Web Design & Engineering
                      </dd>
                    </div>
                    <div>
                      <dt
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Class
                      </dt>
                      <dd
                        className="text-sm font-semibold mt-1"
                        style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        SCU '26
                      </dd>
                    </div>
                    <div>
                      <dt
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Location
                      </dt>
                      <dd
                        className="text-sm font-semibold mt-1"
                        style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Shanghai, China
                      </dd>
                    </div>
>>>>>>> cf118cddfd24aba6a2158a1f0816b2afd5826984
                  </dl>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                {/* Bio Section */}
                <div className="mb-12 reveal">
                  <div className="section-label mb-4">Introduction</div>
                  <h2
                    className="font-bold mb-6"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                      color: "var(--navy)",
                    }}
                  >
                    Web Designer & Frontend Engineer
                  </h2>
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      lineHeight: "1.8",
                    }}
                  >
<<<<<<< HEAD
                    Welcome to my ENGR 110 eFolio! I'm a 24-year-old Web Design and Engineering student at Santa Clara University, originally from Shandong, China and now based in Shanghai. I transitioned from Computer Science & Engineering into Web Design to combine technical problem-solving with visual thinking. This portfolio documents my journey through ENGR 110 , a course that challenges students to tackle authentic engineering challenges in collaboration with community partners.
=======
                    I'm a 24-year-old Web Design and Engineering student at Santa Clara University, originally from Shandong, China and currently based in Shanghai. My background started in Computer Science & Engineering, and I transitioned into Web Design and Engineering to combine technical problem-solving with visual thinking.
>>>>>>> cf118cddfd24aba6a2158a1f0816b2afd5826984
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      lineHeight: "1.8",
                    }}
                  >
<<<<<<< HEAD
                    I'm particularly interested in how thoughtful interfaces can make complex systems feel simple and approachable. I work at the intersection of front-end engineering, user experience, and clean visual design. I believe that the best solutions emerge from deep empathy with the people they serve , a principle I hope to embody throughout this course.
                  </p>
                  <p
                    className="leading-relaxed mb-10"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "1.05rem",
                      color: "var(--slate)",
                    }}
                  >
                    Through ENGR 110, I hope to learn how to distinguish problems and become active in solving them. I want to strengthen my ability to work in multidisciplinary teams, communicate technical ideas clearly to diverse audiences, and develop solutions that are not only functional but also equitable and impactful.
                  </p>
                </div>

                {/* Pull Quote */}
                <div className="reveal mb-10" style={{ transitionDelay: "0.2s" }}>
                  <blockquote className="pull-quote">
                    "I value clarity, reliability, and small details that make digital products feel considerate. Good design is invisible , it just works."
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
=======
                    I am particularly interested in how thoughtful interfaces can make complex systems feel simple and approachable. I enjoy working at the intersection of front-end engineering, user experience, and clean visual design. Outside of coursework, I explore side projects, read about product design, and quietly iterate on ideas until they feel cohesive. I value clarity, reliability, and small details that make digital products feel considerate.
                  </p>
                </div>

                {/* Interests Grid */}
                <div className="reveal">
                  <div className="section-label mb-6">Interests & Goals</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {interests.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="reveal rounded-lg p-6"
                          style={{
                            transitionDelay: `${i * 0.1}s`,
                            background: "white",
                            boxShadow: "0 4px 20px rgba(15,32,68,0.07)",
                            borderTop: "3px solid var(--amber)",
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <Icon
                              size={24}
                              style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }}
                            />
                            <div>
                              <h3
                                className="font-bold mb-2"
                                style={{
                                  fontFamily: "'Playfair Display', serif",
                                  color: "var(--navy)",
                                  fontSize: "1.1rem",
                                }}
                              >
                                {item.title}
                              </h3>
                              <p
                                style={{
                                  fontFamily: "'Source Sans 3', sans-serif",
                                  color: "var(--slate)",
                                  fontSize: "0.95rem",
                                  lineHeight: "1.6",
                                }}
                              >
                                {item.text}
                              </p>
                            </div>
>>>>>>> cf118cddfd24aba6a2158a1f0816b2afd5826984
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ENGR 110 Goals */}
                <div className="reveal mt-12 rounded-lg p-8" style={{ background: "rgba(245,158,11,0.08)", borderLeft: "4px solid var(--amber)" }}>
                  <div className="section-label mb-4">ENGR 110 Goals</div>
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--navy)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Learning Objectives for This Course
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "var(--slate)",
                      lineHeight: "1.8",
                    }}
                  >
                    When taking ENGR 110, I wish to learn more about how to distinguish problems and be active in solving these problems. Through this course, I hope to apply design thinking to real community challenges and develop solutions that create meaningful impact. I want to grow as both a designer and engineer — understanding not just how to build things, but how to build things that matter to the people they serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
