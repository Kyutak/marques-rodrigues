import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sobreNos from "@/assets/sobre-nos.png";

gsap.registerPlugin(ScrollTrigger);

export default function SobreNos() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sobre-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      className="bg-[#0A0A0A] py-24 md:py-32 relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start sobre-content">
            <span className="font-sans text-[#C9A84C] uppercase tracking-[0.22em] text-[11px] mb-6 font-semibold">
              NOSSA HISTÓRIA
            </span>
            <h2 className="font-sans font-bold text-white text-4xl md:text-5xl lg:text-[64px] leading-[1.05] tracking-tight mb-8">
              QUEM SOMOS?
            </h2>
            <p className="font-sans text-[#B0A99A] text-lg leading-[1.8] mb-16 max-w-xl">
              Nascemos da paixão por criar momentos inesquecíveis. No Espaço
              Marques e Rodrigues, cada detalhe é pensado para que sua festa
              seja única, elegante e memorável. Localizados em Senador
              Vasconcelos, RJ, somos o espaço onde sonhos viram realidade.
            </p>

            <div className="flex items-start gap-12 w-full pt-8 border-t border-white/10">
              <div>
                <div className="font-giant text-[#C9A84C] text-[56px] mb-2">
                  200+
                </div>
                <div className="font-sans text-[#B0A99A] uppercase text-xs tracking-wider">
                  festas realizadas
                </div>
              </div>
              <div>
                <div className="font-giant text-[#C9A84C] text-[56px] mb-2">
                  8
                </div>
                <div className="font-sans text-[#B0A99A] uppercase text-xs tracking-wider">
                  anos de experiência
                </div>
              </div>
              <div>
                <div className="font-giant text-[#C9A84C] text-[56px] mb-2">
                  500
                </div>
                <div className="font-sans text-[#B0A99A] uppercase text-xs tracking-wider">
                  convidados máx
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative sobre-content">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
              <img
                src={sobreNos}
                alt="Nossa Estrutura"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border border-[#C9A84C]/20 rounded-sm -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
