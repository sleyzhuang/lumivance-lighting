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
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Photo */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "3/4",
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
            <div className="space-y-6 mb-12">
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
                I'm the founder of a professional LED lighting solutions company based in China, specializing in SMD/COB LED strips, Neon Flex, linear lighting systems, and custom architectural lighting solutions for international projects.
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
                Over the past years, I've worked closely with lighting contractors, stretch ceiling companies, interior designers, and commercial project suppliers from different countries. Through these collaborations, I realized that many lighting projects face the same challenges — visible LED dots, uneven lighting, voltage drop, inconsistent color temperature, and unreliable product quality.
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
                That's why we focus not only on manufacturing LED strips, but on providing practical and reliable lighting solutions for real projects.
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
                We believe modern lighting should not simply illuminate a space — it should enhance architectural atmosphere, interior aesthetics, and user experience.
              </p>
            </div>

            {/* Core values */}
            <div className="mb-12 p-6 md:p-8" style={{ background: "oklch(0.155 0.006 240)" }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.125rem",
                  fontWeight: 400,
                  color: "oklch(0.94 0.008 65)",
                  letterSpacing: "-0.01em",
                }}
              >
                Our Commitment
              </h3>
              <ul className="space-y-3">
                {[
                  "Stable and consistent product quality",
                  "Professional project support",
                  "Fast and efficient communication",
                  "Flexible OEM/ODM solutions",
                  "Long-term business partnerships",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
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
                        marginTop: "0.25rem",
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
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.62 0.008 65)",
                  lineHeight: 1.7,
                  letterSpacing: "0.01em",
                }}
              >
                Whether you are working on commercial lighting, stretch ceilings, hotel projects, retail spaces, or custom architectural applications, I'm ready to help you find the right lighting solution for your project.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8613662653626"
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
