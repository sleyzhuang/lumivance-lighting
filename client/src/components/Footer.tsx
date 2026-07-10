/**
 * Footer — Lumivance
 * Design: Scandinavian Precision — minimal editorial footer
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.085 0.004 240)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex flex-col gap-[3px]">
                <span className="block h-[1.5px] w-6" style={{ background: "oklch(0.72 0.12 75)" }} />
                <span className="block h-[1.5px] w-4" style={{ background: "oklch(0.72 0.12 75)" }} />
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "oklch(0.94 0.008 65)",
                }}
              >
                SQ LUX 
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 300,
                color: "oklch(0.48 0.006 65)",
                lineHeight: 1.8,
                maxWidth: "220px",
              }}
            >
              LED Strip Lighting Solutions for Commercial and Projects.
            </p>
          </div>

          {/* Products */}
          <div>
            <h5
              className="mb-5"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.008 65)",
              }}
            >
              Products
            </h5>
            <div className="flex flex-col gap-3">
              {["COB LED Strip", "Neon Flex", "SMD LED Strip", "LED Profiles", "Controllers & Drivers"].map((item) => (
                <a
                  key={item}
                  href="#products"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "oklch(0.52 0.008 65)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.52 0.008 65)";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div>
            <h5
              className="mb-5"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.008 65)",
              }}
            >
              Applications
            </h5>
            <div className="flex flex-col gap-3">
              {["Stretch Ceiling Lighting", "Cove Lighting", "Hotel Lighting", "Retail Lighting", "Architectural Linear"].map((item) => (
                <a
                  key={item}
                  href="#applications"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "oklch(0.52 0.008 65)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "oklch(0.52 0.008 65)";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h5
              className="mb-5"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.008 65)",
              }}
            >
              About
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href="/founder"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.52 0.008 65)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.52 0.008 65)";
                }}
              >
                Founder
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.52 0.008 65)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.52 0.008 65)";
                }}
              >
                Company
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5
              className="mb-5"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.5625rem",
                fontWeight: 500,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.52 0.008 65)",
              }}
            >
              Contact
            </h5>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sleyzhuang@qq.com"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.52 0.008 65)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.52 0.008 65)";
                }}
              >
                sleyzhuang@qq.com
              </a>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.52 0.008 65)",
                }}
              >
                +86 136 6265 3626
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "oklch(0.48 0.006 65)",
                  lineHeight: 1.6,
                }}
              >
                Shenzhen, Guangdong
                <br />
                China
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 300,
              color: "oklch(0.38 0.005 65)",
              letterSpacing: "0.06em",
            }}
          >
            © {currentYear} SQlux Lighting Technology Co., Ltd. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 300,
                  color: "oklch(0.38 0.005 65)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.62 0.008 65)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.38 0.005 65)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
