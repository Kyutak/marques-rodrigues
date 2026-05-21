import { useState } from "react";
import form1Img from "@/assets/form1.png";
import form2Img from "@/assets/form2.png";
import form3Img from "@/assets/salao.png";

export default function Formulario() {
  const [step, setStep] = useState(-1);
  const [formData, setFormData] = useState({
    tipo: "",
    outro: "",
    convidados: "",
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 2));
  const handleBack = () => setStep((s) => Math.max(s - 1, -1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    setStep(-1);
    setFormData({ tipo: "", outro: "", convidados: "", nome: "", email: "", telefone: "", mensagem: "" });
  };

  const formExpanded = step >= 0;

  return (
    <section id="contato" className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1A1A1A_0%,#0A0A0A_60%)] opacity-80" />

      <div className="container relative mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12">
        <div
          className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            formExpanded ? "w-full lg:w-3/4 mx-auto" : "w-full lg:w-1/2"
          }`}
        >
          <div className="bg-[#F5F2EC] rounded-xl border border-[#DDD5C8] p-8 md:p-12 text-[#111] shadow-2xl relative overflow-hidden">
            
            {step >= 0 && (
              <div className="absolute top-0 left-0 right-0 flex h-1">
                <div className={`h-full transition-all duration-700 bg-[#111] ${step === 0 ? "w-1/3" : step === 1 ? "w-2/3" : "w-full"}`} />
                <div className="h-full flex-1 bg-[#DDD5C8]" />
              </div>
            )}

            {step === -1 && (
              <div className="flex flex-col items-start animate-in fade-in zoom-in duration-500">
                <span className="font-sans text-[#C9A84C] uppercase tracking-[0.22em] text-[11px] mb-4 font-semibold">
                  MARQUES & RODRIGUES
                </span>
                <h2 className="font-sans font-bold text-[48px] md:text-[56px] leading-[1.05] tracking-tight mb-4">
                  Conte-nos sobre o seu evento
                </h2>
                <p className="font-sans text-[#666] mb-10 max-w-md">
                  Preencha o formulário abaixo para iniciarmos o orçamento do seu evento no melhor espaço de Senador Vasconcelos.
                </p>
                <button
                  onClick={handleNext}
                  className="bg-[#111] text-white px-8 py-4 uppercase font-sans tracking-widest text-sm hover:bg-[#333] transition-colors"
                >
                  Iniciar Orçamento
                </button>
              </div>
            )}

            {step === 0 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="font-sans font-bold text-3xl tracking-tight mb-8">Tipo do Evento</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["Casamento", "Aniversário", "Corporativo", "Outro"].map((tipo) => (
                    <button
                      key={tipo}
                      onClick={() => {
                        updateForm("tipo", tipo);
                        if (tipo !== "Outro") setTimeout(handleNext, 300);
                      }}
                      className={`p-4 border text-left transition-all ${
                        formData.tipo === tipo
                          ? "border-[#111] bg-[#111]/5"
                          : "border-[#DDD5C8] hover:border-[#111]/50"
                      }`}
                    >
                      <div className="font-sans font-medium">{tipo}</div>
                    </button>
                  ))}
                </div>
                {formData.tipo === "Outro" && (
                  <input
                    type="text"
                    placeholder="Especifique o tipo de evento"
                    value={formData.outro}
                    onChange={(e) => updateForm("outro", e.target.value)}
                    className="w-full bg-transparent border-b border-[#DDD5C8] pb-2 mb-8 focus:outline-none focus:border-[#111] font-sans"
                  />
                )}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DDD5C8]">
                  <button onClick={handleBack} className="text-[#666] hover:text-[#111] font-sans text-sm underline">Voltar</button>
                  <button
                    onClick={handleNext}
                    disabled={!formData.tipo || (formData.tipo === "Outro" && !formData.outro)}
                    className="bg-[#111] text-white px-6 py-3 uppercase font-sans tracking-widest text-xs disabled:opacity-50"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="font-sans font-bold text-3xl tracking-tight mb-8">Quantos convidados?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["Até 50", "50 - 100", "100 - 300", "300+"].map((qtd) => (
                    <button
                      key={qtd}
                      onClick={() => {
                        updateForm("convidados", qtd);
                        setTimeout(handleNext, 300);
                      }}
                      className={`p-4 border text-center transition-all ${
                        formData.convidados === qtd
                          ? "border-[#111] bg-[#111]/5"
                          : "border-[#DDD5C8] hover:border-[#111]/50"
                      }`}
                    >
                      <div className="font-sans font-medium">{qtd}</div>
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DDD5C8]">
                  <button onClick={handleBack} className="text-[#666] hover:text-[#111] font-sans text-sm underline">Voltar</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="font-sans font-bold text-3xl tracking-tight mb-8">Seus dados</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#666] mb-2">Nome Completo</label>
                      <input
                        required
                        type="text"
                        value={formData.nome}
                        onChange={(e) => updateForm("nome", e.target.value)}
                        className="w-full bg-transparent border-b border-[#DDD5C8] pb-2 focus:outline-none focus:border-[#111] font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-[#666] mb-2">Telefone (WhatsApp)</label>
                      <input
                        required
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => updateForm("telefone", e.target.value)}
                        className="w-full bg-transparent border-b border-[#DDD5C8] pb-2 focus:outline-none focus:border-[#111] font-sans"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#666] mb-2">E-mail</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full bg-transparent border-b border-[#DDD5C8] pb-2 focus:outline-none focus:border-[#111] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-[#666] mb-2">Mensagem Adicional (Opcional)</label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => updateForm("mensagem", e.target.value)}
                      className="w-full bg-transparent border-b border-[#DDD5C8] pb-2 focus:outline-none focus:border-[#111] font-sans resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DDD5C8]">
                    <button type="button" onClick={handleBack} className="text-[#666] hover:text-[#111] font-sans text-sm underline">Voltar</button>
                    <button
                      type="submit"
                      className="bg-[#111] text-white px-8 py-3 uppercase font-sans tracking-widest text-xs hover:bg-black transition-colors"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        <div
          className={`hidden lg:block w-1/2 relative h-[500px] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            formExpanded ? "opacity-0 translate-x-24 absolute right-0 pointer-events-none" : "opacity-100 translate-x-0"
          }`}
        >
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full overflow-hidden border-[6px] border-[#0A0A0A] z-30">
            <img src={form1Img} alt="Casamento" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-40 right-10 w-56 h-56 rounded-full overflow-hidden border-[6px] border-[#0A0A0A] z-20">
            <img src={form2Img} alt="Aniversário" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-10 left-32 w-48 h-48 rounded-full overflow-hidden border-[6px] border-[#0A0A0A] z-10">
            <img src={form3Img} alt="Festa" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
