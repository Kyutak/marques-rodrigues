import { useRef } from "react";
import salaoImg from "@/assets/salao.png";
import convivenciaImg from "@/assets/convivencia.png";
import gourmetImg from "@/assets/gourmet.png";

const spaces = [
  {
    title: "Salão Principal",
    img: salaoImg,
  },
  {
    title: "Área de Convivência",
    img: convivenciaImg,
  },
  {
    title: "Espaço Gourmet",
    img: gourmetImg,
  },
];

const stats = [
  { number: "200+", label: "festas realizadas" },
  { number: "8", label: "anos de experiência" },
  { number: "500", label: "convidados máx" },
];

export default function NossoEspaco() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };
  const onMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section id="espaco" className="bg-white overflow-hidden">
      <div className="pt-16 md:pt-24">
        <div className="relative min-h-[420px] md:min-h-[500px] md:flex md:items-start">
          <div className="relative z-10 flex flex-col justify-start pt-2 pointer-events-none select-none w-full px-6 md:w-auto md:flex-shrink-0">
            <h2 className="font-giant text-[#111] text-[clamp(56px,9vw,130px)]">
              ES
              <span className="font-script-deco" style={{ fontSize: "1.1em" }}>
                P
              </span>
              AÇOS
            </h2>
            <p className="font-sans text-[#555] text-sm leading-relaxed mt-4 max-w-full md:max-w-[300px]">
              Presentes no melhor espaço de Senador Vasconcelos, somos
              referência na realização de celebrações na região.
            </p>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide cursor-grab select-none pt-15 lg:pt-28 pb-6 lg:ml-25"
            style={{ paddingRight: "clamp(24px, 5.5vw, 56px)" }}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {spaces.map((space, i) => (
                <div
                  key={i}
                  data-testid={`card-espaco-${i}`}
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    width: "clamp(220px, 22vw, 300px)",
                    height: "clamp(300px, 38vw, 440px)",
                  }}
                >
                  <img
                    src={space.img}
                    alt={space.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/70 text-[10px] uppercase tracking-widest font-sans mb-0.5">
                      SENADOR VASCONCELOS
                    </p>
                    <p className="text-white font-sans font-semibold text-sm tracking-wide">
                      {space.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E8E8] mt-4 mx-6 md:mx-14 py-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="lg:w-1/2">
            <p className="font-sans text-[#C9A84C] uppercase tracking-[0.2em] text-[10px] font-semibold mb-3">
              A SUA MELHOR ESCOLHA
            </p>
            <p className="font-sans text-[#111] text-xl leading-snug max-w-[300px]">
              Somos o espaço mais <strong>completo e elegante</strong> para
              eventos em Senador Vasconcelos.
            </p>
          </div>

          <div className="flex items-stretch divide-x divide-[#E8E8E8] lg:ml-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="px-8 text-center first:pl-0 lg:first:pl-8"
              >
                <div
                  className="font-giant text-[#111] leading-none"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  {s.number}
                </div>
                <div className="font-sans italic text-[#666] text-sm mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
