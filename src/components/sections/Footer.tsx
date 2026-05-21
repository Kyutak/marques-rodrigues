import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoPath from "@assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-20 pb-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <a href="#home" className="mb-10">
          <img src={logoPath} alt="Marques & Rodrigues" className="h-[80px] w-auto object-contain opacity-80" />
        </a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {["HOME", "EVENTOS", "SOBRE NÓS", "ESPAÇO", "DEPOIMENTOS", "CONTATO"].map((item) => {
            const href = item === "HOME" ? "#home" : item === "SOBRE NÓS" ? "#sobre" : item === "ESPAÇO" ? "#espaco" : `#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                className="font-sans text-[13px] tracking-[0.18em] text-white/60 hover:text-[#C9A84C] transition-colors uppercase"
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6 mb-16">
          <a
            href="https://wa.me/5521998235144"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
          >
            <FaWhatsapp className="text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-colors"
          >
            <FaInstagram className="text-lg" />
          </a>
        </div>

        <div className="w-full h-px bg-white/5 mb-8" />

        <p className="font-sans text-xs text-white/40 tracking-wider">
          © {new Date().getFullYear()} Espaço Marques e Rodrigues. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
