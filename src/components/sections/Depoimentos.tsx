import { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const testimonials = [
  {
    headline: "O espaço é simplesmente deslumbrante.",
    body: "Realizamos nosso casamento no Espaço Marques e Rodrigues e foi perfeito em todos os detalhes. A equipe é atenciosa e o ambiente é lindo.",
    author: "AMANDA & CARLOS"
  },
  {
    headline: "Aniversário dos sonhos para minha filha.",
    body: "A festa de 15 anos da minha filha superou todas as expectativas. Decoração impecável, estrutura completa, tudo executado com muito carinho.",
    author: "FAMÍLIA SOUZA"
  },
  {
    headline: "Profissionalismo e elegância.",
    body: "Nosso evento corporativo foi um sucesso total. Ambiente sofisticado, ótima estrutura técnica e equipe extremamente profissional.",
    author: "EMPRESA RODRIGUES & CIA"
  },
  {
    headline: "Recomendo de olhos fechados!",
    body: "Já realizamos três festas no espaço e sempre saímos encantados. É o melhor espaço de eventos da região sem dúvidas.",
    author: "MARCOS PEREIRA"
  }
];

export default function Depoimentos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="depoimentos" className="bg-[#FAF7F2] py-24 md:py-32">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <span className="font-sans text-[#C9A84C] uppercase tracking-[0.22em] text-[11px] mb-4 font-semibold">
          EXPERIÊNCIAS REAIS
        </span>
        <h2 className="font-giant text-[#111] text-[clamp(42px,12vw,140px)] mb-4 text-center">
          DEPOIMENTOS
        </h2>
        <p className="font-sans text-[#666] text-lg mb-16 text-center">
          Histórias de quem celebrou conosco em Senador Vasconcelos.
        </p>

        <div className="w-full relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <div className="bg-white p-10 border-t-[3px] border-[#C9A84C] relative h-full flex flex-col shadow-sm">
                    <div className="font-sans font-black text-[#C9A84C] text-8xl absolute top-4 left-6 opacity-30 leading-none">
                      "
                    </div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10 mt-6">
                      <h3 className="font-sans font-semibold text-[#111] text-xl max-w-[85%]">{t.headline}</h3>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex text-[#C9A84C] text-sm">
                          ★★★★★
                        </div>
                        <Heart className="w-4 h-4 text-[#C9A84C]" />
                      </div>
                    </div>

                    <p className="font-sans text-[#666] leading-relaxed mb-8 flex-1 relative z-10">
                      {t.body}
                    </p>

                    <div className="font-sans uppercase tracking-[0.14em] text-xs text-[#111] font-semibold mt-auto relative z-10">
                      — {t.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-[-24px] pointer-events-none">
            <button
              onClick={scrollPrev}
              className="pointer-events-auto -ml-6 w-14 h-14 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollNext}
              className="pointer-events-auto -mr-6 w-14 h-14 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#111] hover:bg-[#111] hover:text-white transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
