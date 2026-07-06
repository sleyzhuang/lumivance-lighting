/**
 * ProjectsSection — Featured Lighting Projects
 * Design: Scandinavian Precision — masonry-style project grid
 * Focus on effect/atmosphere, not product model numbers
 */
import { ArrowUpRight } from "lucide-react";

const STRETCH_CEILING =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/stretch_ceiling-Rk3QBPrDCw2UWPvaboXib9.webp";
const RETAIL_LINEAR =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/retail_linear-E9o6JZCNsfArKUSnn6WE6v.webp";
const RESIDENTIAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/residential_ambient-LQTy3w2PtEpg8fafCnHGds.webp";
const ARCHITECTURAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/architectural_linear-3Zu8dTUvNKdcbjYkoLod8e.webp";
const HERO_COVE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675243213/jmiYhiqjMVtbSmU2gieU9o/hero_cove_lighting-Cvk9sQXp9feRCPVtnfHYrB.webp";

const projects = [
  {
    id: "P01",
    title: "Hotel Cove Lighting Project",
    location: "Dubai, UAE",
    type: "Hospitality",
    description: "Continuous hidden LED cove system across 180m of corridor, creating seamless warm amber atmosphere throughout the hotel.",
    image: HERO_COVE,
    featured: true,
  },
  {
    id: "P02",
    title: "Stretch Ceiling Lighting System",
    location: "Berlin, Germany",
    type: "Commercial",
    description: "COB LED backlighting for 600m² translucent stretch ceiling in a luxury showroom.",
    image: STRETCH_CEILING,
    featured: false,
  },
  {
    id: "P03",
    title: "Luxury Retail Linear Design",
    location: "Milan, Italy",
    type: "Retail",
    description: "Precision linear LED tracks and shelf underlighting for a high-end fashion boutique.",
    image: RETAIL_LINEAR,
    featured: false,
  },
  {
    id: "P04",
    title: "Residential Ambient System",
    location: "Singapore",
    type: "Residential",
    description: "Full no-main-light design concept for a 450m² penthouse using layered COB cove lighting.",
    image: RESIDENTIAL,
    featured: false,
  },
  {
    id: "P05",
    title: "Architectural Facade Lighting",
    location: "Tokyo, Japan",
    type: "Architecture",
    description: "Linear LED accent lighting defining the horizontal geometry of a mixed-use commercial building.",
    image: ARCHITECTURAL,
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: "oklch(0.095 0.004 240)" }}
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div>
            <span className="amber-rule" />
            <span className="section-label">Portfolio</span>
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
              Featured
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>Lighting Projects</em>
            </h2>
          </div>
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
            Each project represents a complete lighting solution — from initial specification through to installation support.
          </p>
        </div>

        {/* Featured project */}
        <div
          className="reveal mb-5 img-hover-overlay"
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "21/9",
          }}
        >
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="w-full h-full object-cover"
            style={{ position: "absolute", inset: 0 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(17,18,20,0.85) 0%, rgba(17,18,20,0.2) 70%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.5625rem",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "oklch(0.72 0.12 75)",
                  }}
                >
                  {projects[0].id}
                </span>
                <span
                  className="px-2 py-0.5"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.5625rem",
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "oklch(0.72 0.12 75)",
                    background: "rgba(212,168,83,0.12)",
                    border: "1px solid rgba(212,168,83,0.2)",
                  }}
                >
                  {projects[0].type}
                </span>
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  color: "oklch(0.96 0.008 65)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                {projects[0].title}
              </h3>
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.68 0.008 65)",
                  lineHeight: 1.7,
                }}
              >
                {projects[0].description}
              </p>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "oklch(0.52 0.008 65)",
                  letterSpacing: "0.08em",
                }}
              >
                {projects[0].location}
              </span>
            </div>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.slice(1).map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${i + 1} img-hover-overlay group`}
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "3/4",
                cursor: "pointer",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                style={{ position: "absolute", inset: 0 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(17,18,20,0.92) 0%, rgba(17,18,20,0.1) 55%)",
                }}
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "rgba(212,168,83,0.08)" }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                {/* Top: type badge */}
                <div className="flex justify-between items-start">
                  <span
                    className="px-2 py-1"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.5rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "oklch(0.72 0.12 75)",
                      background: "rgba(17,18,20,0.6)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {project.type}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0"
                    style={{ color: "oklch(0.72 0.12 75)" }}
                  />
                </div>
                {/* Bottom: title */}
                <div>
                  <span
                    className="block mb-1"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.5625rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "oklch(0.72 0.12 75)",
                    }}
                  >
                    {project.id}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      color: "oklch(0.96 0.008 65)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="block mt-1"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.6875rem",
                      fontWeight: 300,
                      color: "oklch(0.52 0.008 65)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {project.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
