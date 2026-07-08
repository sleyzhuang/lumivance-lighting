/**
 * HeroSection — Full-viewport architectural lighting hero
 * Design: Scandinavian Precision — asymmetric layout, text lower-left
 * Background: Generated architectural cove lighting image
 */
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/hero_cove_lighting-Cvk9sQXp9feRCPVtnfHYrB.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "640px" }}>
      {/* Background image with subtle parallax */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Architectural cove lighting in luxury hotel corridor"
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.06)", transformOrigin: "center center" }}
        />
        {/* Gradient overlays for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(17,18,20,0.88) 0%, rgba(17,18,20,0.55) 55%, rgba(17,18,20,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(17,18,20,0.75) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Content — lower-left quadrant */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="container pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-2xl">
            {/* Section label */}
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
              }}
            >
              <span className="block h-[1px] w-8" style={{ background: "oklch(0.72 0.12 75)" }} />
              <span className="section-label">LED Strip Lighting Solutions</span>
            </div>

            {/* Main headline */}
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: 400,
                color: "oklch(0.96 0.008 65)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.35s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.35s",
              }}
            >
              Professional
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.88 0.06 75)" }}>LED Strip</em>
              <br />
              Lighting Solution
            </h1>

            {/* Subheadline */}
            <p
              className="mb-10 max-w-lg"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "clamp(0.875rem, 1.5vw, 1.0625rem)",
                fontWeight: 300,
                color: "oklch(0.75 0.008 65)",
                lineHeight: 1.75,
                letterSpacing: "0.01em",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.5s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.5s",
              }}
            >
              SMD LED Strip | COB LED Strip | Neon LED Strip Manufacturer
              for Commercial and Architectural Projects.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.65s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.65s",
              }}
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-widest uppercase transition-all duration-300"
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
                Explore Products
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-widest uppercase border transition-all duration-300"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.14em",
                  borderColor: "rgba(242,237,230,0.3)",
                  color: "oklch(0.94 0.008 65)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "oklch(0.72 0.12 75)";
                  el.style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(242,237,230,0.3)";
                  el.style.color = "oklch(0.94 0.008 65)";
                }}
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="absolute bottom-0 right-0 hidden lg:flex"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s cubic-bezier(0.23,1,0.32,1) 0.9s",
          }}
        >
          <div
            className="flex"
            style={{
              background: "rgba(17,18,20,0.75)",
              backdropFilter: "blur(8px)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { value: "11+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "60+", label: "Countries Served" },
              { value: "CRI 97+", label: "Color Rendering" },
            ].map((stat) => (
              <div key={stat.label} className="px-8 py-5 text-center" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "oklch(0.72 0.12 75)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "oklch(0.58 0.008 65)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:hidden"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'Jost', sans-serif", color: "oklch(0.62 0.008 65)", letterSpacing: "0.18em" }}
        >
          Scroll
        </span>
        <span
          className="block w-[1px] h-10 animate-pulse"
          style={{ background: "oklch(0.72 0.12 75)" }}
        />
      </div>
    </section>
  );
}
