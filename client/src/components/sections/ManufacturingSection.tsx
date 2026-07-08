/**
 * ManufacturingSection — Reliable Manufacturing Capability
 * Design: Scandinavian Precision — dark horizontal stats + editorial text
 * Avoids "Chinese factory" clichés, focuses on international reliability
 */

const stats = [
  { value: "11+", label: "Years LED Strip Manufacturing", sub: "Since 2015" },
  { value: "60+", label: "Countries Exported", sub: "Global Partners" },
  { value: "500+", label: "Projects Delivered", sub: "Worldwide Applications" },
  { value: "10+", label: "QC Inspection Processes", sub: "Production Reliability" },
  { value: "15 Days", label: "Fast Sample Lead Time", sub: "OEM Support" },
  { value: "5 Years", label: "Commercial Warranty", sub: "Quality Assurance" },
];

const capabilities = [
  "Automated SMT production lines with optical inspection to ensure stable brightness and power output",
  "In-house photometric testing laboratory for accurate lumen, color and performance measurement",
  "Aging test chambers for long-term reliability validation and reduced failure rates",
  "Strict color binning process — CCT deviation controlled within 50K for consistent lighting effects",
  "Professional QC system covering voltage drop, brightness uniformity and waterproof performance tests",
  "Complete OEM & ODM support with customization of PCB, LED chips, CCT, CRI and packaging",
];

export default function ManufacturingSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.095 0.004 240)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="amber-rule" />
          <span className="section-label">Why Choose SQ LUX</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4">
            <h2
             style={{
             fontFamily: "'Playfair Display', serif",
             fontSize: "clamp(2rem, 4vw, 3.5rem)",
             fontWeight: 400,
             color: "oklch(0.94 0.008 65)",
             letterSpacing: "-0.02em",
             lineHeight: 1.1,
           }}
           >
             Factory Direct
             <br />
             <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>
             LED Strip Manufacturer
             </em>
            </h2>
            <p
              className="max-w-sm"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 300,
                color: "oklch(0.55 0.008 65)",
                lineHeight: 1.8,
              }}
            >
              Consistent quality, predictable lead times, and professional export service — the foundation of a reliable long-term supply partnership.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16 reveal"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 md:p-8 flex flex-col justify-between"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 400,
                  color: "oklch(0.72 0.12 75)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "oklch(0.72 0.008 65)",
                    lineHeight: 1.4,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 300,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "oklch(0.45 0.006 65)",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="reveal">
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "oklch(0.88 0.008 65)",
                letterSpacing: "-0.01em",
              }}
            >
              Quality Control Standards
            </h3>
            <div className="flex flex-col gap-4">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 reveal reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <span
                    className="flex-shrink-0 mt-2 block w-4 h-[1px]"
                    style={{ background: "oklch(0.72 0.12 75)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 300,
                      color: "oklch(0.65 0.008 65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: certifications / standards */}
          <div className="reveal reveal-delay-2">
            <div
              className="p-8 md:p-10"
              style={{
                background: "oklch(0.135 0.005 240)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <h4
                className="mb-6"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "oklch(0.52 0.008 65)",
                }}
              >
                International Certifications
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {["CE Certified", "RoHS Compliant", "LM-80 Tested", "ISO 9001:2015", "UL Listed", "ETL Certified"].map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 py-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span
                      className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(0.72 0.12 75)" }}
                    />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        color: "oklch(0.72 0.008 65)",
                      }}
                    >
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "oklch(0.55 0.008 65)",
                    lineHeight: 1.8,
                  }}
                >
                  All products are tested to international standards before shipment. Full documentation packages available for customs clearance in all major markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
