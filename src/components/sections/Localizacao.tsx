"use client";

import { useEffect } from "react";
import { MapPin, Phone, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const INSTAGRAM_POST = "https://www.instagram.com/reel/DOozmvdj4Dz/";

export default function Localizacao() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = () => {
      window.instgrm?.Embeds.process();
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="bg-[#111111] py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-sans font-bold text-white text-4xl lg:text-5xl tracking-tight mb-4">
            Como nos Encontrar
          </h2>

          <p className="text-[#B0A99A] text-lg">
            Venha conhecer nosso espaço e acompanhar os próximos eventos.
          </p>
        </div>

        {/* MAP + INSTAGRAM */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14 items-end">
          {/* MAPA */}
          <div className="h-[450px] overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14699.4!2d-43.7!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2d7e3f000001%3A0x1!2sSenador+Vasconcelos%2C+Rio+de+Janeiro!5e0!3m2!1spt!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* INSTAGRAM */}
          <div className="-mt-40 h-[600px] overflow-hidden rounded-2xl flex items-start justify-center bg-[#1a1a1a]">
            <blockquote
              className="instagram-media -translate-y-6"
              data-instgrm-permalink={INSTAGRAM_POST}
              data-instgrm-version="14"
              style={{
                background: "#111",
                border: 0,
                borderRadius: "16px",
                width: "100%",
                maxWidth: "540px",
                margin: 0,
              }}
            >
              <div style={{ padding: "16px" }}>
                <a
                  href={INSTAGRAM_POST}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                  }}
                >
                  Ver publicação no Instagram
                </a>
              </div>
            </blockquote>
          </div>
        </div>

        {/* INFOS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* ENDEREÇO */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />

              <div>
                <p className="font-semibold text-white mb-2">Endereço</p>

                <p className="text-[#B0A99A] leading-relaxed">
                  Senador Vasconcelos,
                  <br />
                  Rio de Janeiro - RJ
                </p>
              </div>
            </div>
          </div>

          {/* TELEFONE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />

              <div>
                <p className="font-semibold text-white mb-2">Contato</p>

                <a
                  href="tel:+5521998235144"
                  className="text-[#B0A99A] hover:text-white transition-colors"
                >
                  (21) 99823-5144
                </a>
              </div>
            </div>
          </div>

          {/* REDES */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="font-semibold text-white mb-5">Redes Sociais</p>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5521998235144"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600 hover:border-transparent transition-all"
              >
                <Instagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
