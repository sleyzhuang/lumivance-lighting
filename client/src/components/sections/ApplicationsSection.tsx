/**
 * ApplicationsSection — Lighting Applications showcase
 * Design: Scandinavian Precision — asymmetric grid, space effect images
 * Shows applications BEFORE products (solution-first approach)
 */

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

const HOTEL_LOBBY = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80";
const COMMERCIAL = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80";

const smallApps = [
  { 
    id: "02", 
    title: "Commercial Lighting", 
    description: "LED strip solutions for hotels, offices, retail spaces and commercial projects.", 
    image: COMMERCIAL 
  },
  { 
    id: "03", 
    title: "Signage Lighting", 
    description: "Bright and reliable LED strips for channel letters, light boxes and advertising signs.", 
    image: RETAIL_LINEAR 
  },
  { 
    id: "04", 
    title: "Cabinet Lighting", 
    description: "Slim and flexible LED strip solutions for kitchens, wardrobes and furniture applications.", 
    image: RESIDENTIAL 
  },
  { 
    id: "05", 
    title: "Wholesale Supply", 
    description: "Factory-direct LED strip supply with OEM and customization support for distributors.", 
    image: ARCHITECTURAL 
  },
  { 
    id: "06", 
    title: "Outdoor Lighting", 
    description: "Waterproof LED strip solutions for building facades, landscapes and outdoor projects.", 
    image: HERO_COVE 
  },
  { 
    id: "07", 
    title: "Architectural Lighting", 
    description: "Professional linear lighting solutions for modern architectural environments.", 
    image: HOTEL_LOBBY 
  },
];

function AppTile({ id, title, image, delay = 0 }: { id: string; title: string; image: string; delay?: number }) {
  return (
    <div
      className={`reveal ${delay > 0 ? `reveal-delay-${delay}` : ""}`}
      style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}
    >
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1.04)"; }}
        onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(17,18,20,0.88) 0%, rgba(17,18,20,0.05) 55%)",
        }}
      />
      <div style={{ position: "absolute", bottom: 0, left: 0, padding: "1.25rem" }}>
        <span
          style={{
            display: "block",
            marginBottom: "0.25rem",
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.5625rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "oklch(0.72 0.12 75)",
          }}
        >
          {id}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.0625rem",
            fontWeight: 400,
            color: "oklch(0.96 0.008 65)",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ApplicationsSection() {
  return (
    <section id="applications" className="py-24 md:py-32" style={{ background: "oklch(0.115 0.005 240)" }}>
      <div className="container">
        {/* Section header */}
        <div className="mb-16 reveal">
          <span className="amber-rule" />
          <span className="section-label">LED Strip Applications</span>
          <h2
            className="mt-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              color: "oklch(0.94 0.008 65)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "600px",
            }}
          >
            Applications
           <br />
           <em style={{ fontStyle: "italic", color: "oklch(0.82 0.06 75)" }}>
           for LED Strip
           </em>
            
          </h2>
          <p
            className="mt-4 max-w-lg"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.9375rem",
              fontWeight: 300,
              color: "oklch(0.62 0.008 65)",
              lineHeight: 1.8,
            }}
          >
            Our LED strip lighting solutions are widely used in commercial projects, signage, stretch ceilings, cabinet lighting, wholesale distribution and outdoor architectural applications.
          </p>
        </div>

        {/* Featured large tile */}
        <div
          className="reveal mb-4"
          style={{ position: "relative", overflow: "hidden", aspectRatio: "21/9" }}
        >
          <img
            src={STRETCH_CEILING}
            alt="Stretch Ceiling Lighting"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseEnter={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { (e.target as HTMLImageElement).style.transform = "scale(1)"; }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(17,18,20,0.82) 0%, rgba(17,18,20,0.2) 60%)",
            }}
          />
          <div style={{ position: "absolute", bottom: 0, left: 0, padding: "2rem 2.5rem" }}>
            <span
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.72 0.12 75)",
              }}
            >
              01 — Featured Application
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 400,
                color: "oklch(0.96 0.008 65)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}
            >
              Stretch Ceiling Lighting
            </h3>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "oklch(0.72 0.008 65)",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              High-performance LED strip solutions for stretch ceiling systems, delivering uniform backlighting with dot-free illumination for residential and commercial projects.
            </p>
          </div>
        </div>

        {/* Small tiles grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {smallApps.map((app, i) => (
            <AppTile key={app.id} {...app} delay={Math.min(i + 1, 5)} />
          ))}
        </div>
      </div>
    </section>
  );
}
