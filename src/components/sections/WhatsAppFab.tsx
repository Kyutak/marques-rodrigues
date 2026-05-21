import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <a
          href="https://wa.me/5521998235144"
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp className="text-[28px]" />
        </a>
      </div>
    </div>
  );
}
