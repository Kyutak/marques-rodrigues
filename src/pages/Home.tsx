import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Eventos from "@/components/sections/Eventos";
import NossoEspaco from "@/components/sections/NossoEspaco";
import SobreNos from "@/components/sections/SobreNos";
import Depoimentos from "@/components/sections/Depoimentos";
import Formulario from "@/components/sections/Formulario";
import Localizacao from "@/components/sections/Localizacao";
import Footer from "@/components/sections/Footer";
import WhatsAppFab from "@/components/sections/WhatsAppFab";

export default function Home() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#C9A84C] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <NossoEspaco />
        <Eventos />

        <SobreNos />
        <Depoimentos />
        <Formulario />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
