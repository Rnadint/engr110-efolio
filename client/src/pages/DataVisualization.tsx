/**
 * Data Visualization Page — Academic Editorial Design
 * Showcases heatmap, dashboard mockups, and data analysis visualizations
 */
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BarChart3, Map, PieChart, TrendingUp, Users, Download } from "lucide-react";

const PROJECT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400044455/bp2s8LMMAEXrBB76Y8qTTz/project-banner-VQ9vmScthMD38bFhUXyjB9.webp";

export default function DataVisualization() {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen" ref={revealRef}>
      <PageHeader
        label="Project · Data Visualization"
        title="Data Visualization"
        subtitle="Interactive heatmaps, dashboard mockups, and data analysis visualizations for community food security insights."
        bgImage={PROJECT_BG}
      />

      {/* Heatmap Section */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Geographic Analysis</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Food Insecurity Heatmap
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="reveal rounded-lg p-8 mb-8" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Santa Clara County Food Insecurity by Zip Code
              </h3>
              <p className="mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                The heatmap visualization displays food insecurity intensity across Santa Clara County zip codes, aggregating survey responses and community partner data. Color intensity represents the concentration of food-insecure households, enabling Valley Verde to identify priority intervention areas and allocate resources strategically.
              </p>
              
              <div className="rounded-lg p-6 mb-6" style={{ background: "var(--ivory)", border: "1px solid rgba(15,32,68,0.1)" }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Map size={24} style={{ color: "var(--amber)" }} />
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    Interactive heatmap showing geographic distribution of food security needs
                  </p>
                </div>
                <div style={{ background: "white", borderRadius: "8px", padding: "20px", textAlign: "center", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    [Heatmap Visualization: Santa Clara County zip codes colored by food insecurity intensity — red (high), orange (medium), yellow (low)]
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "0.95rem" }}>
                    High Priority Areas
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.85rem" }}>
                    East Palo Alto, Gilroy, San Jose South Side — 60%+ food insecurity
                  </p>
                </div>
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "0.95rem" }}>
                    Medium Priority Areas
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.85rem" }}>
                    San Jose North, Sunnyvale, Santa Clara — 40-60% food insecurity
                  </p>
                </div>
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)", fontSize: "0.95rem" }}>
                    Lower Priority Areas
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.85rem" }}>
                    Cupertino, Los Altos, Saratoga — Below 40% food insecurity
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal rounded-lg p-8" style={{ background: "var(--ivory)", borderLeft: "4px solid var(--amber)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.2rem" }}>
                Heatmap Features & Functionality
              </h3>
              <div className="space-y-3">
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Interactive Hover:</strong> Hovering over any zip code displays detailed statistics: total responses, percentage food insecure, primary barriers, and available resources.
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Temporal Analysis:</strong> Toggle between current month, quarterly, and year-to-date views to identify trends and seasonal patterns in food insecurity.
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Demographic Overlay:</strong> Filter heatmap by age group, income level, household size, or family status to understand vulnerability patterns across populations.
                </p>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                  <strong>Resource Mapping:</strong> Overlay food bank, soup kitchen, and farmers market locations to visualize resource gaps and identify underserved areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-24" style={{ background: "white" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Data Dashboard</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Community Food Needs Dashboard
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="reveal rounded-lg p-8 mb-8" style={{ background: "var(--ivory)", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Dashboard Overview
              </h3>
              <p className="mb-6" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", lineHeight: "1.6" }}>
                The comprehensive dashboard synthesizes survey data, interview insights, and community feedback into actionable intelligence for Valley Verde staff and partner organizations. Real-time data aggregation from Google Forms enables rapid identification of emerging food security trends and resource gaps.
              </p>

              <div className="rounded-lg p-6 mb-6" style={{ background: "white", border: "1px solid rgba(15,32,68,0.1)" }}>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <BarChart3 size={24} style={{ color: "var(--amber)" }} />
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    Multi-panel dashboard with real-time data updates
                  </p>
                </div>
                <div style={{ background: "var(--ivory)", borderRadius: "8px", padding: "20px", textAlign: "center", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    [Dashboard Mockup: Left panel shows trend lines for food needs over time; Right panel shows ranking of food needs by importance; Bottom shows demographic breakdowns and resource effectiveness]
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)", borderLeft: "3px solid var(--amber)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Left Panel: Trend Analysis
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    Line graphs showing food need requests over time (daily, weekly, monthly views). Each line represents a specific food category (proteins, grains, produce, dairy). Hover functionality displays exact counts and percentage changes.
                  </p>
                </div>
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)", borderLeft: "3px solid var(--amber)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Right Panel: Rankings & Priorities
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    Ranked list of food needs by frequency and urgency. Shows which items are most requested, helping Valley Verde prioritize procurement and partnership efforts. Includes resource effectiveness ratings.
                  </p>
                </div>
                <div className="rounded-lg p-4" style={{ background: "var(--ivory)", borderLeft: "3px solid var(--amber)" }}>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Bottom Panel: Demographics & Resources
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.9rem" }}>
                    Pie charts showing demographic distribution (age, household size, income level). Includes resource effectiveness matrix showing which services are most helpful to community members.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="reveal rounded-lg p-6" style={{ background: "var(--ivory)", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Key Metrics
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Total survey responses tracked
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Food insecurity rate (%)
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Top 5 food needs by frequency
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Resource availability gaps
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Demographic vulnerability index
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-lg p-6" style={{ background: "var(--ivory)", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
                <div className="flex items-start gap-3 mb-3">
                  <Download size={20} style={{ color: "var(--amber)", flexShrink: 0, marginTop: "2px" }} />
                  <h4 className="font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.1rem" }}>
                    Export Features
                  </h4>
                </div>
                <ul className="space-y-2">
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Download PDF reports with summary statistics
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Export data to CSV for further analysis
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Share visualizations with partner organizations
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Generate custom reports by demographic
                  </li>
                  <li style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    • Schedule automated weekly/monthly reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Approach Section */}
      <section className="py-24" style={{ background: "var(--ivory)" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 reveal">
              <div className="section-label mb-4">Analytical Framework</div>
              <h2
                className="font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)",
                  color: "var(--navy)",
                }}
              >
                Data Analysis & Interpretation
              </h2>
              <div className="amber-rule mt-6" />
            </div>

            <div className="reveal rounded-lg p-8 mb-8" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Quantitative Analysis Methods
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Descriptive Statistics
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Calculate mean food worry scores, standard deviations, and frequency distributions for all survey questions. Identify outliers and data quality issues. Segment responses by demographic groups to understand disparities in food insecurity.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Correlation & Trend Analysis
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Examine relationships between income level and food insecurity, household size and resource needs, geographic location and barrier prevalence. Identify temporal trends showing how food needs change over weeks and months.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Comparative Analysis
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Compare food insecurity rates across zip codes, demographic groups, and time periods. Benchmark against county and state averages. Identify areas with highest concentration of unmet needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal rounded-lg p-8" style={{ background: "white", boxShadow: "0 4px 24px rgba(15,32,68,0.08)" }}>
              <h3 className="font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "var(--navy)", fontSize: "1.3rem" }}>
                Qualitative Analysis Methods
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Thematic Coding
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Systematically review open-ended responses to identify recurring themes and patterns. Code responses into categories representing barriers, resources, and community-specific insights. Track frequency of themes to prioritize insights.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Sentiment Analysis
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Assess tone and emotion in qualitative responses to understand community sentiment toward existing resources and services. Identify areas of frustration, hope, and resilience. Highlight powerful community voices and stories.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--navy)" }}>
                    Synthesis & Recommendations
                  </h4>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: "var(--slate)", fontSize: "0.95rem" }}>
                    Integrate quantitative findings with qualitative insights to develop comprehensive understanding of food security landscape. Generate actionable recommendations for Valley Verde's program development and resource allocation strategies.
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
