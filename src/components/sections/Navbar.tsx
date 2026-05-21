import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logoPath from "@assets/logo.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src={logoPath} alt="Marques & Rodrigues Logo" className="h-[60px] w-auto object-contain" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {["HOME", "EVENTOS", "SOBRE NÓS", "ESPAÇO", "DEPOIMENTOS", "CONTATO"].map((item) => {
            const href = item === "HOME" ? "#home" : item === "SOBRE NÓS" ? "#sobre" : item === "ESPAÇO" ? "#espaco" : `#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                className="font-sans text-[13px] tracking-[0.18em] text-white/80 hover:text-[#C9A84C] transition-colors"
              >
                {item}
              </a>
            );
          })}
        </nav>

        <a
          href="https://wa.me/5521998235144"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-sans text-sm tracking-wider transition-all hover:scale-105"
        >
          <FaWhatsapp className="text-lg" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </header>
  );
}
