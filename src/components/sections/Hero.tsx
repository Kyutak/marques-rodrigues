import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImg from "@/assets/hero.png";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Elegant Event Hall"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div
        className="container relative z-10 mx-auto px-6 mt-30 text-center"
        ref={headlineRef}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-giant text-white text-[clamp(28px,4vw,52px)] leading-[0.95] mb-6">
            MARQUES RODRIGUES
            <br />
            <span className="text-[#C9A84C]">-</span>
            <br />
            ESPAÇO PARA EVENTOS
          </h1>

          <p className="font-sans text-lg text-white/80 max-w-[700px] mx-auto mb-10 leading-relaxed">
            Festas, eventos e celebrações em Senador Vasconcelos, RJ. Um cenário
            cinematográfico para os momentos mais especiais da sua vida.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#contato"
              className="px-8 py-4 border border-white/30 text-white font-sans uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              Reserve Agora
            </a>

            <a
              href="#espaco"
              className="flex items-center gap-2 text-[#C9A84C] font-sans uppercase tracking-widest text-sm hover:text-[#E2C97E] transition-colors group"
            >
              Conheça o Espaço
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
