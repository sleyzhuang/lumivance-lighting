/**
 * SolutionsSection — Common Lighting Problems We Solve
 * Design: Scandinavian Precision — two-column problem/solution layout
 * Dark background with amber accents, editorial typography
 */
import { Check, X } from "lucide-react";

const problems = [
  "Visible LED dots on diffuser surfaces",
  "Uneven brightness and hot spots",
  "Voltage drop over long runs",
  "Color inconsistency between strips",
  "Dark corners and shadow zones",
  "Complex installation requirements",
  "Poor color rendering (low CRI)",
  "Incompatible dimming systems",
];

const solutions = [
  "Dot-free COB technology — seamless linear glow",
  "Precision-engineered uniform light distribution",
  "Stable voltage performance up to 10m per run",
  "Consistent CCT binning across entire production",
  "Professional layout planning & engineering support",
  "Plug-and-play connectors with full technical documentation",
  "High CRI 95+ for true color reproduction",
  "TRIAC, 0-10V & DALI dimming compatibility",
];

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.095 0.004 240)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="amber-rule" />
          <span className="section-label">Engineering Precision</span>
          <h2
            className="mt-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "oklch(0.94 0.008 65)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            Common Lighting Problems
            <br />
            <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>We Solve</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Problems column */}
          <div
            className="reveal p-8 md:p-12 lg:p-16"
            style={{
              background: "oklch(0.115 0.005 240)",
              borderRight: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div className="mb-8">
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "oklch(0.52 0.008 65)",
                }}
              >
                Industry Pain Points
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <X size={10} style={{ color: "oklch(0.52 0.008 65)" }} />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      color: "oklch(0.58 0.008 65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions column */}
          <div
            className="reveal reveal-delay-2 p-8 md:p-12 lg:p-16"
            style={{
              background: "oklch(0.135 0.005 240)",
            }}
          >
            <div className="mb-8">
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                Our Solutions
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full"
                    style={{ background: "rgba(212,168,83,0.12)", border: "1px solid rgba(212,168,83,0.25)" }}
                  >
                    <Check size={10} style={{ color: "oklch(0.72 0.12 75)" }} />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      color: "oklch(0.78 0.008 65)",
                      lineHeight: 1.6,
                    }}
                  >
                    {solution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-0 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: "oklch(0.155 0.006 240)",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 300,
              color: "oklch(0.68 0.008 65)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Every project is unique. Our engineering team provides a complete technical assessment and recommends the optimal lighting specification for your application.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-3.5 text-xs font-medium tracking-widest uppercase transition-all duration-300"
            style={{
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.14em",
              background: "oklch(0.72 0.12 75)",
              color: "oklch(0.115 0.005 240)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.12 75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "oklch(0.72 0.12 75)";
            }}
          >
            Get Lighting Solution
          </a>
        </div>
      </div>
    </section>
  );
}
