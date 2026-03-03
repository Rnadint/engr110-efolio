/*
 * Contact Page , Academic Editorial Design
 * Contact form linked to SCU email (no direct email display)
 * Uses mailto: action to protect email from scrapers
 */
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Send, CheckCircle, MapPin, Clock, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/hero-bg-YPFgE2mgLNBeadLFT4rAq6.webp";

export default function Contact() {
  const revealRef = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    // Build mailto link , protects email from scrapers
    const subject = encodeURIComponent(form.subject || `ENGR 110 eFolio: Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    // Opens the user's email client with pre-filled fields
    window.location.href = `mailto:yourname@scu.edu?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid rgba(15,32,68,0.15)",
    borderRadius: "6px",
    fontFamily: "'Source Sans 3', sans-serif",
    fontSize: "0.95rem",
    color: "var(--navy)",
    background: "white",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeight: 700,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--navy)",
    marginBottom: "0.5rem",
  };

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Get in Touch"
        title="Contact"
        subtitle="Have questions about the project or want to connect? Send a message using the form below."
        bgImage={HERO_BG}
      />

      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Info Column */}
              <div className="lg:col-span-1 reveal">
                <div className="section-label mb-4">Contact Info</div>
                <h2
                  className="font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "var(--navy)" }}
                >
                  Let's Connect
                </h2>
                <div className="amber-rule mb-8" />

                <div className="space-y-6">
                  {[
                    {
                      icon: GraduationCap,
                      label: "Institution",
                      value: "Santa Clara University",
                      sub: "School of Engineering",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Santa Clara, CA",
                      sub: "Silicon Valley",
                    },
                    {
                      icon: Clock,
                      label: "Response Time",
                      value: "Within 24–48 hours",
                      sub: "During the academic quarter",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div
                          className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(245,158,11,0.12)" }}
                        >
                          <Icon size={18} style={{ color: "var(--amber)" }} />
                        </div>
                        <div>
                          <div
                            className="text-xs font-bold uppercase tracking-wider mb-0.5"
                            style={{ color: "var(--amber)", fontFamily: "'Source Sans 3', sans-serif" }}
                          >
                            {item.label}
                          </div>
                          <div
                            className="font-semibold text-sm"
                            style={{ color: "var(--navy)", fontFamily: "'Source Sans 3', sans-serif" }}
                          >
                            {item.value}
                          </div>
                          <div
                            className="text-xs"
                            style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                          >
                            {item.sub}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Privacy note */}
                <div
                  className="mt-10 p-4 rounded-lg text-sm"
                  style={{
                    background: "rgba(15,32,68,0.05)",
                    borderLeft: "3px solid var(--amber)",
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "var(--slate)",
                  }}
                >
                  <strong style={{ color: "var(--navy)" }}>Privacy Note:</strong> Your email address
                  is never displayed publicly on this site. The contact form routes messages securely
                  through your email client.
                </div>
              </div>

              {/* Form Column */}
              <div className="lg:col-span-2 reveal" style={{ transitionDelay: "0.1s" }}>
                {submitted ? (
                  <div
                    className="rounded-lg p-12 text-center"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                      borderTop: "4px solid var(--amber)",
                    }}
                  >
                    <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "var(--amber)" }} />
                    <h3
                      className="font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--navy)" }}
                    >
                      Message Sent!
                    </h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)" }}>
                      Your email client should have opened with your message pre-filled.
                      I'll get back to you within 24–48 hours. Thank you for reaching out!
                    </p>
                    <button
                      className="btn-amber mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-lg p-8"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
                      borderTop: "4px solid var(--amber)",
                    }}
                  >
                    <h3
                      className="font-bold mb-6"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--navy)" }}
                    >
                      Send a Message
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label style={labelStyle}>
                          Your Name <span style={{ color: "var(--amber)" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          style={inputStyle}
                          required
                          onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(15,32,68,0.15)")}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>
                          Your Email <span style={{ color: "var(--amber)" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@example.com"
                          style={inputStyle}
                          required
                          onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(15,32,68,0.15)")}
                        />
                      </div>
                    </div>

                    <div className="mb-5">
                      <label style={labelStyle}>Subject</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(15,32,68,0.15)")}
                      >
                        <option value="">Select a subject...</option>
                        <option value="ENGR 110 eFolio: Project Question">Project Question</option>
                        <option value="ENGR 110 eFolio: Collaboration Inquiry">Collaboration Inquiry</option>
                        <option value="ENGR 110 eFolio: General Feedback">General Feedback</option>
                        <option value="ENGR 110 eFolio: Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label style={labelStyle}>
                        Message <span style={{ color: "var(--amber)" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        rows={6}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                        required
                        onFocus={(e) => (e.target.style.borderColor = "var(--amber)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(15,32,68,0.15)")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-amber flex items-center gap-2"
                      disabled={loading}
                      style={{ opacity: loading ? 0.7 : 1 }}
                    >
                      {loading ? "Opening Email Client..." : (
                        <>
                          Send Message <Send size={15} />
                        </>
                      )}
                    </button>

                    <p
                      className="mt-4 text-xs"
                      style={{ color: "var(--slate)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      * Required fields. Submitting will open your email client with the message pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
