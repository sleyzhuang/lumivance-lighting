import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink =
    "https://wa.me/8613662653626?text=Hi%20SQlux,%20I%20am%20interested%20in%20your%20LED%20Strip%20products.%20Could%20you%20please%20send%20me%20your%20latest%20catalog%20and%20price%20list%3F%20Thank%20you.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;