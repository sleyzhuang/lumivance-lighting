import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      name: "Sley",
      role: "Founder",
      phone: "8613662653626",
      message:
        "Hi SQlux, I am interested in your LED Strip products. Could you please send me your latest catalog and price list? Thank you.",
    },
    {
      name: "Alex",
      role: "Solution Engineer",
      phone: "8619885068212",
      message:
        "Hi SQlux, I need technical support for LED Strip lighting solutions. Could you please help me with product selection? Thank you.",
    },
  ];

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-64 rounded-xl bg-white p-4 shadow-xl">
          <div className="mb-3 text-sm font-semibold text-gray-800">
            Contact SQlux
          </div>

          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={`https://wa.me/${contact.phone}?text=${encodeURIComponent(
                contact.message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 block rounded-lg bg-green-500 px-4 py-3 text-center text-white transition hover:scale-105"
            >
              <div className="font-semibold">{contact.name}</div>
              <div className="text-sm">{contact.role}</div>
              <div className="mt-1 text-xs">Chat on WhatsApp</div>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={30} /> : <FaWhatsapp size={32} />}
      </button>
    </>
  );
};

export default WhatsAppButton;