/**
 * ProductsSection — Professional Lighting Systems
 * Design: Scandinavian Precision — editorial product cards
 * Focus on application context, not specs/parameters
 */
import { ArrowRight } from "lucide-react";

// Unsplash images for product categories
const COB_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";
const NEON_IMAGE = "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80";
const SMD_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

const products = [
  {
    id: "01",
    category: "SMD LED Strip",
    tagline: "Reliable Flexible Lighting Solution",
    description:
      "High-quality SMD LED strips designed for residential, commercial, and decorative lighting applications. Available in various LED types, color temperatures, and waterproof options to meet different project requirements.",
    applications: ["Interior Decoration", "Commercial Lighting", "Display Lighting", "Cabinet & Cove Lighting"],
    highlights: ["High brightness output", "Multiple LED types", "Flexible customization", "IP20 / IP65 / IP67 options"],
    image: "/images/smd.png",
    accent: "oklch(0.72 0.12 75)",
  },
  {
    id: "02",
    category: "COB LED Strip",
    tagline: "Dot-Free Linear Illumination",
    description:
      "COB LED strips provide seamless dot-free lighting with uniform brightness, making them ideal for premium interior projects, stretch ceilings, and architectural lighting applications.",
    applications: ["Stretch Ceiling Lighting", "Architectural Cove Lighting", "Hidden Ambient Lighting", "Premium Interior Projects"],
    highlights: ["Dot-free seamless glow", "High CRI options", "Uniform illumination", "IP20 / IP65 options"],
    image: "/images/cob.png",
    accent: "oklch(0.72 0.12 75)",
  },
  {
    id: "03",
    category: "Neon Light LED Strip",
    tagline: "Creative Flexible Lighting Solution",
    description:
      "Flexible silicone LED neon strips designed for decorative and architectural applications, providing smooth curved lighting effects for indoor and outdoor projects.",
    applications: ["Architectural Decoration", "Signage Lighting", "Outdoor Landscape Lighting", "Creative Lighting Design"],
    highlights: ["Flexible silicone housing", "IP67 waterproof", "Custom lengths", "RGB & single color options"],
    image: "/images/neon.png",
    accent: "oklch(0.72 0.12 75)",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.115 0.005 240)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="amber-rule" />
          <span className="section-label">LED Strip Products</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="mt-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                color: "oklch(0.94 0.008 65)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Professional
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>Led Strip Solutions</em>
            </h2>
            <p
              className="max-w-sm lg:text-right"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 300,
                color: "oklch(0.58 0.008 65)",
                lineHeight: 1.8,
              }}
            >
              Explore our core LED strip solutions including SMD LED Strip, COB LED Strip and Neon LED Strip for residential, commercial and architectural lighting applications.
            </p>
          </div>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-0">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`reveal reveal-delay-${i + 1} grid grid-cols-1 lg:grid-cols-2`}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Image */}
              <div
                className={`img-hover-overlay ${i % 2 === 1 ? "lg:order-2" : ""}`}
                style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden" }}
              >
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0 }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: i % 2 === 1
                      ? "linear-gradient(to right, rgba(17,18,20,0.15) 0%, rgba(17,18,20,0.6) 100%)"
                      : "linear-gradient(to left, rgba(17,18,20,0.15) 0%, rgba(17,18,20,0.6) 100%)",
                  }}
                />
                {/* Product number overlay */}
                <div
                  className={`absolute top-6 ${i % 2 === 1 ? "right-6" : "left-6"}`}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "4rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                  }}
                >
                  {product.id}
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                style={{ background: "oklch(0.135 0.005 240)" }}
              >
                <span
                  className="block mb-2"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "oklch(0.72 0.12 75)",
                  }}
                >
                  {product.tagline}
                </span>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 400,
                    color: "oklch(0.94 0.008 65)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {product.category}
                </h3>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 300,
                    color: "oklch(0.65 0.008 65)",
                    lineHeight: 1.8,
                  }}
                >
                  {product.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <span
                    className="block mb-3"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.5625rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "oklch(0.52 0.008 65)",
                    }}
                  >
                    Ideal For
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1.5"
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                          color: "oklch(0.72 0.008 65)",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {product.highlights.map((h) => (
                      <span
                        key={h}
                        className="flex items-center gap-2"
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 300,
                          color: "oklch(0.62 0.008 65)",
                        }}
                      >
                        <span
                          className="block w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "oklch(0.72 0.12 75)" }}
                        />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 w-fit text-xs font-medium tracking-widest uppercase transition-colors duration-200"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    letterSpacing: "0.14em",
                    color: "oklch(0.72 0.12 75)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.82 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  }}
                >
                  Request Specification
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
