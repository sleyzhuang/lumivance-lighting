/**
 * Lumivance Navbar
 * Design: Scandinavian Precision — transparent on hero, solid on scroll
 * Dark charcoal bg, warm stone white text, amber accent
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Applications", href: "#applications" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "Projects", href: "#projects" },
    { label: "OEM / ODM", href: "#oem" },
    { label: "Founder", href: "/founder" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(17, 18, 20, 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Amber line mark */}
          <span className="flex flex-col gap-[3px]">
            <span
              className="block h-[1.5px] w-6 transition-all duration-300 group-hover:w-8"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />
            <span
              className="block h-[1.5px] w-4 transition-all duration-300 group-hover:w-8"
              style={{ background: "oklch(0.72 0.12 75)" }}
            />
          </span>
          <span
            className="font-serif text-lg tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, letterSpacing: "0.18em", color: "oklch(0.94 0.008 65)" }}
          >
            SQ LUX
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase transition-colors duration-200"
              style={{
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.14em",
                color: "oklch(0.72 0.012 65)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.12 75)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.72 0.012 65)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="text-xs font-medium tracking-widest uppercase px-5 py-2.5 border transition-all duration-300"
            style={{
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.14em",
              borderColor: "oklch(0.72 0.12 75)",
              color: "oklch(0.72 0.12 75)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "oklch(0.72 0.12 75)";
              el.style.color = "oklch(0.115 0.005 240)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "oklch(0.72 0.12 75)";
            }}
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "oklch(0.94 0.008 65)" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(17, 18, 20, 0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="container py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase"
              style={{
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.14em",
                color: "oklch(0.72 0.012 65)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-medium tracking-widest uppercase px-5 py-3 border text-center mt-2"
            style={{
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.14em",
              borderColor: "oklch(0.72 0.12 75)",
              color: "oklch(0.72 0.12 75)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </header>
  );
}
