import { useRef } from "react";
import festasImg from "@/assets/festas.png";
import casamentosImg from "@/assets/casamentos.png";
import formaturasImg from "@/assets/formaturas.png";
import corporativoImg from "@/assets/corporativo.png";

const events = [
  { title: "Corporativo", img: corporativoImg },
  { title: "Casamentos", img: casamentosImg },
  { title: "Formaturas", img: formaturasImg },
  { title: "Festas", img: festasImg },
];

export default function Eventos() {
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
    <section id="eventos" className="bg-[#F2F2F2] overflow-hidden pt-16 pb-10 md:pt-24 md:pb-16">
      <div className="px-6 md:px-14 -mb-6 md:-mb-10 relative z-10 pointer-events-none select-none">
        <h2 className="font-giant text-[#111] text-[clamp(72px,13vw,180px)]">
          E<span className="font-script-deco" style={{ fontSize: "1.1em" }}>V</span>ENTOS
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide cursor-grab select-none relative z-20"
        style={{ paddingLeft: "clamp(24px, 5.5vw, 56px)", paddingRight: "clamp(24px, 5.5vw, 56px)" }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
          {events.map((evt, i) => (
            <div
              key={i}
              data-testid={`card-evento-${i}`}
              className="relative shrink-0 rounded-2xl overflow-hidden"
              style={{ width: "clamp(240px, 26vw, 340px)", height: "clamp(340px, 46vw, 520px)" }}
            >
              <img
                src={evt.img}
                alt={evt.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-sans text-base font-medium tracking-wide">
                  {evt.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
