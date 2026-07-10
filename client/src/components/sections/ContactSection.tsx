/**
 * ContactSection — Let's Discuss Your Lighting Project
 * Design: Scandinavian Precision — full-width dark editorial contact form
 * Sophisticated, not pushy — engineering team framing
 */
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    country: "",
    productInterest: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  await fetch("https://formsubmit.co/ajax/sleyzhuang@qq.com", {
    method: "POST",
    body: formData,
  });

  setSubmitted(true);
};

 

  

  return (
    <section
      id="contact"
      className="py-24 md:py-36"
      style={{ background: "oklch(0.10 0.004 240)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          {/* Left: messaging */}
          <div className="reveal">
            <span className="amber-rule" />
            <span className="section-label">Start a Conversation</span>
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
              Let's Discuss
              <br />
              <em style={{ fontStyle: "italic", color: "oklch(0.82 0.08 75)" }}>Your Lighting Project</em>
            </h2>
            <p
              className="mb-12"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 300,
                color: "oklch(0.62 0.008 65)",
                lineHeight: 1.85,
                maxWidth: "420px",
              }}
            >
              Tell us your project requirements, and our engineering team will recommend the most suitable lighting solution for your application — from specification to delivery.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "sleyzhuang@qq.com",
                  href: "mailto:sleyzhuang@qq.com",
                },
                {
                  icon: Phone,
                  label: "WhatsApp / Phone",
                  value: "+86 136 6265 3626",
                  href: "tel:+8613662653626",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Shenzhen, Guangdong, China",
                  href: "#",
                },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                    style={{ border: "1px solid rgba(212,168,83,0.25)", background: "rgba(212,168,83,0.04)" }}
                  >
                    <contact.icon size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                  </span>
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.5625rem",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "oklch(0.45 0.006 65)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {contact.label}
                    </span>
                    <a
                      href={contact.href}
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 300,
                        color: "oklch(0.78 0.008 65)",
                        textDecoration: "none",
                      }}
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Response time note */}
            <div
              className="p-5"
              style={{
                background: "oklch(0.14 0.005 240)",
                borderLeft: "2px solid oklch(0.72 0.12 75)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 300,
                  color: "oklch(0.58 0.008 65)",
                  lineHeight: 1.7,
                }}
              >
                Our engineering team typically responds within{" "}
                <strong style={{ fontWeight: 500, color: "oklch(0.72 0.12 75)" }}>24 hours</strong>{" "}
                with a preliminary assessment and specification recommendation.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{
                  background: "oklch(0.14 0.005 240)",
                  border: "1px solid rgba(212,168,83,0.15)",
                  minHeight: "400px",
                }}
              >
                <CheckCircle size={40} className="mb-6" style={{ color: "oklch(0.72 0.12 75)" }} />
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                    color: "oklch(0.94 0.008 65)",
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 300,
                    color: "oklch(0.58 0.008 65)",
                    lineHeight: 1.7,
                    maxWidth: "320px",
                  }}
                >
                  Our engineering team will review your requirements and respond within 24 hours with a tailored lighting recommendation.
                </p>
                <div className="mt-8 flex flex-col gap-3 w-full">
                  <a
                    href="https://wa.me/8613662653626?text=Hi%20SQlux,%20I%20just%20submitted%20a%20project%20inquiry.%20I%20would%20like%20to%20discuss%20further."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-green-500 px-6 py-3 text-center text-white transition hover:scale-105"
                  >
                    Chat with Sley (Founder)
                  </a>

                  <a
                    href="https://wa.me/8619885068212?text=Hi%20SQlux,%20I%20need%20technical%20support%20for%20my%20LED%20Strip%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-green-500 px-6 py-3 text-center text-green-500 transition hover:scale-105"
                  >
                    Chat with Alex (Solution Engineer)
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                
                
              
                <input type="hidden" name="_subject" value="New SQlux Website Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="Full Name *">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="lv-input"
                    />
                  </FormField>
                  <FormField label="Email Address *">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="lv-input"
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                  <FormField label="WhatsApp Number">
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="+1 234 567 890"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="lv-input"
                   />
                 </FormField>
                  <FormField label="Company"> 
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="lv-input"
                    />
                  </FormField>
                  <FormField label="Country / Region">
                    <input
                      type="text"
                      name="country"
                      placeholder="United States"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="lv-input"
                   />
                 </FormField>
                 <FormField label="Product Interest">
                   <select
                     name="productInterest"
                     value={formData.productInterest}
                     onChange={(e) =>
                       setFormData({ ...formData, productInterest: e.target.value })
                     }
                     className="lv-input lv-select"
                   >  
                     <option value="">Select product</option>
                     <option value="smd">SMD LED Strip</option>
                     <option value="cob">COB LED Strip</option>
                     <option value="neon">Neon LED Strip</option>
                     <option value="other">Other</option>
                   </select>
                 </FormField>
                  <FormField label="Project Type">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="lv-input lv-select"
                    >
                      <option value="">Select type</option>
                      <option value="hotel">Hotel / Hospitality</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="retail">Retail</option>
                      <option value="residential">Residential</option>
                      <option value="architectural">Architectural</option>
                      <option value="oem">OEM / Private Label</option>
                      <option value="other">Other</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Project Requirements *">
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project — space type, dimensions, desired lighting effect, timeline, and any specific technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="lv-input lv-textarea"
                  />
                </FormField>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-300 active:scale-[0.97]"
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
                    Talk With Our Team
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <p
                    className="self-center"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 300,
                      color: "oklch(0.42 0.006 65)",
                    }}
                  >
                    No commitment required
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.5625rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "oklch(0.52 0.008 65)",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
