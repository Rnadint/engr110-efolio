/**
 * Experimental Design Page — Academic Editorial Design
 * Documents the survey methodology, testing protocol, and data collection strategy
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Beaker, Target, Users, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";

const PROJECT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

export default function ExperimentalDesign() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Experimental Design"
        title="Experimental Design"
        subtitle="Survey methodology, testing protocol, and data collection strategy for community needs assessment."
        bgImage={PROJECT_BG}
      />

      {/* Survey Design Section */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Research Methodology</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Survey Design & Instrument
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="reveal rounded-lg p-8 mb-8" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Survey Purpose & Objectives
              </h3>
              <p className="mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                The "Survey of Food Needs and Service Recommendations" is designed to understand the food security challenges and resource needs of Santa Clara County residents. The survey uses a mixed-methods approach combining quantitative scales with qualitative open-ended responses to capture both measurable indicators and community-specific insights.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                This instrument enables Valley Verde to identify priority barriers to food access, evaluate the effectiveness of existing resources, and gather actionable recommendations for program development and resource allocation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="reveal rounded-lg p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <Target size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Research Questions
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • What are the primary barriers to food access in Santa Clara County?
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Which food resources are most effective for community members?
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • How do food security needs vary across demographic groups?
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • What gaps exist in current food support services?
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-lg p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <Users size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Target Population
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Santa Clara County residents
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Focus on underserved and food-insecure communities
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Target sample size: 100+ responses
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Diverse demographic representation
                  </li>
                </ul>
              </div>
            </div>

            <div className="reveal rounded-lg p-8" style={{ background: "var(--ivory)", borderLeft: "4px solid var(--amber)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.2rem" }}>
                Survey Structure & Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "1rem" }}>
                    Question 1: Food Worry Scale (1-10)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Measures subjective food security: "In the past week, how worried have you felt about getting enough food or the right type of food for you and your family?" Provides baseline indicator of food insecurity perception.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "1rem" }}>
                    Question 2-3: Barriers to Food Access (Matrix)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Respondents rate importance of 9 specific barriers (cost, distance, food availability, cultural preferences, special dietary needs, time/energy, cooking knowledge, mobility). Identifies priority barriers for intervention.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "1rem" }}>
                    Question 4-5: Resource Effectiveness (Matrix)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Respondents rate helpfulness of 9 food resources (food banks, soup kitchens, CalFresh/SNAP/WIC, farmers market programs, meal delivery, informal support, educational resources, gardening resources). Evaluates current resource effectiveness.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "1rem" }}>
                    Question 6-7: Affordability Challenges (Matrix)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Respondents rate importance of affordability barriers (food cost, store proximity/cost, competing life expenses). Identifies economic dimensions of food insecurity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "1rem" }}>
                    Open-Ended Responses
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Text fields for "Other" responses allow respondents to share community-specific challenges and resources not captured in standardized options. Enables qualitative theme identification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Protocol Section */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Data Collection Strategy</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Testing Protocol & Data Collection
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="reveal rounded-lg p-6" style={{ background: "var(--ivory)", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <BarChart3 size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Data Collection Methods
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Online Google Form (digital distribution)
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • In-person paper surveys (community events)
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • QR code for easy mobile access
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Valley Verde staff distribution
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Community partner networks
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-lg p-6" style={{ background: "var(--ivory)", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <Target size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Success Metrics
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Target: 100+ survey responses
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • 80%+ question completion rate
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Demographic diversity in responses
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Qualitative insights from open responses
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Data ready for visualization by Feb 28
                  </li>
                </ul>
              </div>
            </div>

            <div className="reveal rounded-lg p-8" style={{ background: "var(--ivory)", borderLeft: "4px solid var(--amber)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.2rem" }}>
                Data Analysis Approach
              </h3>
              <div className="space-y-3">
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Quantitative Analysis:</strong> Calculate mean worry scores, identify top barriers and resources by importance rating, segment responses by demographic groups, create frequency distributions for visualization.
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Qualitative Analysis:</strong> Thematic coding of open-ended responses, identify emerging barriers and resources not in standardized options, extract community-specific insights and recommendations.
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Visualization:</strong> Pie charts for response distribution, bar graphs for demographic comparisons, heat maps for barrier/resource importance matrices, trend analysis highlighting key patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Monitoring Section */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Team Coordination</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Progress Monitoring & Team Meetings
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="reveal rounded-lg p-8 mb-8" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Team Meeting Structure
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Weekly Team Sync (Tuesdays, 2 hours)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Full team review of progress on integration tasks, discussion of blockers, decision-making on technical challenges, assignment of action items for following week.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Technical Standup (Thursdays, 30 minutes)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Quick update on backend/frontend integration progress, identification of immediate blockers, rapid decision-making on technical issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Partner Check-in (As needed)
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Communication with Valley Verde on survey distribution progress, feedback on data quality, discussion of preliminary findings.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="reveal rounded-lg p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Decision Documentation
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Meeting notes captured in shared doc
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Action items assigned to team members
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Decisions tracked with rationale
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Deadlines and dependencies noted
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-lg p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Accountability Measures
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Weekly progress updates on Gantt chart
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Public commitment to deadlines
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Peer review of completed tasks
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Escalation protocol for blockers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
