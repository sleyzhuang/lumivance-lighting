/**
 * Home Page — SQlux LED Strip Lighting Solutions
 * Design: Scandinavian Precision — Nordic Minimalism meets Swiss Editorial
 * Color: Deep Charcoal (#111214) + Warm Amber (#D4A853) + Stone White (#F2EDE6)
 * Typography: Playfair Display (display) + Jost (body)
 *
 * Page structure (solution-first approach):
 * 1. Hero Banner — architectural space photography
 * 2. Applications — lighting use cases before products
 * 3. Solutions — pain points & engineering answers
 * 4. Products — professional lighting systems
 * 5. Projects — featured project portfolio
 * 6. OEM/ODM — custom manufacturing
 * 7. Manufacturing — reliability & capability
 * 8. Contact — project inquiry
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ApplicationsSection from "@/components/sections/ApplicationsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import OemSection from "@/components/sections/OemSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import ContactSection from "@/components/sections/ContactSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

 return (
  <div
    className="min-h-screen"
    style={{ background: "oklch(0.115 0.005 240)" }}
  >
    <Navbar />
    <main>
      <HeroSection />
      <ApplicationsSection />
      <ProductsSection />
      <SolutionsSection />
      <ProjectsSection />
      <OemSection />
      <ManufacturingSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
}
