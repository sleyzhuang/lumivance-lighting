/**
 * OemSection — OEM & Custom Lighting Solutions
 * Design: Scandinavian Precision — editorial two-column layout
 */
import { Settings, Layers, Palette, Package, Cpu, Headphones } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Custom PCB Design",
    description: "Bespoke PCB layouts optimized for your specific wattage, density, and thermal requirements.",
  },
  {
    icon: Settings,
    title: "Custom Wattage & CCT",
    description: "Specify exact power output and color temperature to match your project's lighting design.",
  },
  {
    icon: Layers,
    title: "Custom LED Density",
    description: "From 60 LEDs/m to 840 LEDs/m — engineered for the precise uniformity your application demands.",
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Private label with your brand identity — logo printing, custom packaging, and documentation.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Custom retail packaging, bulk packaging, and protective solutions for your distribution model.",
  },
  {
    icon: Headphones,
    title: "Project Engineering Support",
    description: "Dedicated technical team for specification, layout planning, and on-site installation guidance.",
  },
];

export default function OemSection() {
  return (
    <section
      id="oem"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.115 0.005 240)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: header + description */}
          <div className="reveal">
            <span className="amber-rule" />
            <span className="section-label">Custom Manufacturing</span>
            <h2
              className="mt-4 mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "oklch(0.94 0.008 65)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              OEM &amp;
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>Custom Lighting</em>
              <br />
              Solutions
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "oklch(0.62 0.008 65)",
                lineHeight: 1.85,
                maxWidth: "420px",
              }}
            >
              We partner with lighting designers, distributors, and contractors to develop custom LED solutions that precisely match project specifications — from single-unit prototypes to mass production runs.
            </p>

            {/* Process steps */}
            <div className="flex flex-col gap-5">
              {[
                { step: "01", label: "Submit Requirements", desc: "Share your project specifications and technical requirements." },
                { step: "02", label: "Engineering Review", desc: "Our team evaluates feasibility and provides a detailed proposal." },
                { step: "03", label: "Sample Production", desc: "Prototype samples produced and shipped for your approval." },
                { step: "04", label: "Mass Production", desc: "Full production run with QC inspection and export documentation." },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "oklch(0.72 0.12 75)",
                      border: "1px solid rgba(212,168,83,0.25)",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <span
                      className="block mb-1"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "oklch(0.82 0.008 65)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 300,
                        color: "oklch(0.55 0.008 65)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-6`}
                style={{
                  background: "oklch(0.155 0.006 240)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <cap.icon
                  size={20}
                  className="mb-4"
                  style={{ color: "oklch(0.72 0.12 75)" }}
                />
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "oklch(0.85 0.008 65)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {cap.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 300,
                    color: "oklch(0.55 0.008 65)",
                    lineHeight: 1.7,
                  }}
                >
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
