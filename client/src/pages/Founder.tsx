/**
 * Founder Page — Sley Zhuang
 * Design: Scandinavian Precision — Personal brand story & contact
 * Color: Deep Charcoal (#111214) + Warm Amber (#D4A853) + Stone White (#F2EDE6)
 * Typography: Playfair Display (display) + Jost (body)
 */

import { Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FOUNDER_IMAGE = "/images/founder.jpg";

export default function FounderPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div style={{ background: "oklch(0.115 0.005 240)" }}>
      {/* Back to home link */}
      <div className="container pt-8 pb-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-300"
          style={{
            fontFamily: "'Jost', sans-serif",
            color: "oklch(0.62 0.008 65)",
            letterSpacing: "0.08em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "oklch(0.62 0.008 65)";
          }}
        >
          ← Back to Home
        </a>
      </div>

      {/* Main content */}
      <div className="container py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Photo */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
            }}
          >
            <div
             className="relative overflow-hidden h-[628px]"
             style={{
               background: "oklch(0.155 0.006 240)",
             }}
           >
              <img
                src={FOUNDER_IMAGE}
                alt="Sley Zhuang, Founder"
                className="w-full h-full object-cover"
              />
              {/* Subtle border accent */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: "1px solid rgba(212,168,83,0.2)",
                }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.4s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.4s",
            }}
          >
            {/* Section label */}
            <div className="mb-6">
              <span
                className="amber-rule"
                style={{
                  display: "block",
                  width: "2rem",
                  height: "1px",
                  background: "oklch(0.72 0.12 75)",
                  marginBottom: "1rem",
                }}
              />
              <span
                className="section-label"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "oklch(0.72 0.12 75)",
                }}
              >
                Founder & CEO
              </span>
            </div>

            {/* Name */}
            <h1
              className="mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "oklch(0.96 0.008 65)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Sley Zhuang
            </h1>

            {/* Bio paragraphs */}
            <div className="space-y-2 mb-5">
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  color: "oklch(0.75 0.008 65)",
                  lineHeight: 1.8,
                  letterSpacing: "0.01em",
                }}
              >
                I'm the founder of SQlux, a professional LED strip lighting company based in China, specializing in SMD LED Strip, COB LED Strip, Neon Flex, and customized lighting solutions for global projects.
              </p>

              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  color: "oklch(0.75 0.008 65)",
                  lineHeight: 1.8,
                  letterSpacing: "0.01em",
                }}
              >
                Over the years, I have worked with lighting contractors, stretch ceiling companies, interior designers, and project suppliers worldwide. I understand the common challenges in lighting projects — visible LED dots, uneven illumination, voltage drop, and inconsistent quality.
              </p>

              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 300,
                  color: "oklch(0.75 0.008 65)",
                  lineHeight: 1.8,
                  letterSpacing: "0.01em",
                }}
              >
                That's why SQlux focuses not only on manufacturing LED strips, but also on providing reliable lighting solutions that help customers achieve better project results.
              </p>

              
            </div>

            {/* Core values */}
            <div className="mb-8 p-5 md:p-6" style={{ background: "oklch(0.155 0.006 240)" }}>
              
              <ul className="flex flex-wrap gap-4">
                {[
                  "Stable product quality",
                  "Professional project support",
                 "Long-term business partnerships",
                 ].map((item, i) => (
                  <li
                   key={i}
                   className="flex items-center gap-2"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 300,
                      color: "oklch(0.68 0.008 65)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "oklch(0.72 0.12 75)",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div>
              

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8613662653626?text=Hi%20SQlux,%20I%20am%20interested%20in%20your%20LED%20Strip%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    letterSpacing: "0.12em",
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
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                {/* Email */}
                <a
                  href="mailto:sleyzhuang@qq.com"
                  className="group flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-widest uppercase border transition-all duration-300"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    letterSpacing: "0.12em",
                    borderColor: "rgba(212,168,83,0.3)",
                    color: "oklch(0.94 0.008 65)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "oklch(0.72 0.12 75)";
                    el.style.color = "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,168,83,0.3)";
                    el.style.color = "oklch(0.94 0.008 65)";
                  }}
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div style={{ height: "4rem" }} />
    </div>
  );
}
