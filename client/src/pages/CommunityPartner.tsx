/*
 * Community Partner Page — Academic Editorial Design
 * Dedicated page showcasing Valley Verde and their mission
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Sprout, Users, Globe, Heart } from "lucide-react";

const PARTNER_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/about-me-bg-TjvvKhHKjvfJFPZkXvZQjh.webp";

export default function CommunityPartner() {
  const revealRef = useScrollReveal();

  const programHighlights = [
    {
      icon: Sprout,
      title: "Shared Garden Program",
      desc: "Free workshops providing gardening education, nutritional knowledge, and community resources to underserved populations.",
    },
    {
      icon: Users,
      title: "Community-Centered",
      desc: "Prioritizes the needs of underserved community members, fostering self-reliance and sustainability.",
    },
    {
      icon: Globe,
      title: "Climate Action",
      desc: "Addresses climate change through urban agriculture and environmental education.",
    },
    {
      icon: Heart,
      title: "Food Justice",
      desc: "Works to increase food security and sovereignty in San Jose through accessible gardening education.",
    },
  ];

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Our Community Partner"
        title="Valley Verde"
        subtitle="Plant • Eat • Share — A nonprofit dedicated to food security, sovereignty, and justice through urban garden education."
        bgImage={PARTNER_BG}
      />

      {/* ── About Valley Verde ── */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="reveal">
                <div className="section-label mb-4">Who They Are</div>
                <h2
                  className="font-bold mb-6"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                    color: "var(--navy)",
                  }}
                >
                  Valley Verde: Plant, Eat, Share
                </h2>
                <div className="amber-rule mb-6" />

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  Valley Verde is a nonprofit organization based in San Jose, California, dedicated to promoting <strong>food security, sovereignty, and justice</strong> through urban garden education and resources.
                </p>

                <p
                  className="leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "1.05rem",
                    color: "var(--slate)",
                  }}
                >
                  As a small but mighty organization, Valley Verde works directly with underserved communities to provide free workshops, nutritional education, and gardening resources. Their mission is rooted in the belief that everyone deserves access to fresh food, gardening knowledge, and the tools to build sustainable, resilient communities.
                </p>

                <div
                  className="p-6 rounded-lg"
                  style={{
                    background: "rgba(245,158,11,0.08)",
                    borderLeft: "4px solid var(--amber)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      color: "var(--navy)",
                      fontStyle: "italic",
                    }}
                  >
                    "We're a small but mighty organization working to build food justice in San Jose."
                  </p>
                </div>
              </div>

              {/* Right: Placeholder for image */}
              <div className="reveal" style={{ transitionDelay: "0.1s" }}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.05) 100%)",
                    border: "2px dashed rgba(34,197,94,0.3)",
                    aspectRatio: "4/3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "300px",
                  }}
                >
                  <div className="text-center">
                    <Sprout size={48} style={{ color: "rgba(34,197,94,0.4)", margin: "0 auto 1rem" }} />
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "rgba(34,197,94,0.5)",
                        fontSize: "0.9rem",
                      }}
                    >
                      Valley Verde in Action<br />
                      (Community garden photo)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs & Impact ── */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="section-label mb-4">Our Partnership</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                What Valley Verde Does
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="reveal rounded-lg p-8"
                    style={{
                      transitionDelay: `${i * 0.1}s`,
                      background: "var(--ivory)",
                      border: "1px solid rgba(34,197,94,0.2)",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "rgba(34,197,94,0.15)" }}
                    >
                      <Icon size={24} style={{ color: "rgb(34,197,94)" }} />
                    </div>
                    <h3
                      className="font-bold mb-3"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.2rem",
                        color: "var(--navy)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        color: "var(--slate)",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ── */}
      <section className="py-24" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="reveal">
              <div className="section-label mb-4" style={{ color: "var(--amber)" }}>
                The Challenge
              </div>
              <h2
                className="font-bold mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  color: "var(--ivory)",
                }}
              >
                Our Design Focus
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      color: "var(--amber)",
                    }}
                  >
                    The Problem
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "rgba(250,250,247,0.85)",
                      fontSize: "1.05rem",
                    }}
                  >
                    Food insecurity and limited access to gardening education affect many underserved communities in San Jose. Valley Verde works to bridge this gap by providing free, accessible resources and knowledge.
                  </p>
                </div>

                <div>
                  <h3
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.3rem",
                      color: "var(--amber)",
                    }}
                  >
                    Our Role
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "rgba(250,250,247,0.85)",
                      fontSize: "1.05rem",
                    }}
                  >
                    Our team is working with Valley Verde to design solutions that enhance their impact, improve community engagement, and help them scale their mission of food justice and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connection ── */}
      <section className="py-16" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "var(--slate)",
                fontSize: "1rem",
                lineHeight: "1.8",
              }}
            >
              Through this partnership, we're learning how engineering design can serve social good. Valley Verde's work reminds us that the best solutions come from deep understanding of community needs and a commitment to equity and justice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
