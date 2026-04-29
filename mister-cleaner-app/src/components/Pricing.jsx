import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  return (
    <section id="orcamento" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto bg-dark rounded-[3rem] p-12 md:p-24 text-center border border-primary/20 shadow-2xl relative overflow-hidden flex flex-col items-center">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="absolute w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
        
        <h2 className="relative z-10 text-white font-sans text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Pronto para o <span className="font-drama italic text-accent font-normal">Renascimento?</span>
        </h2>
        
        <p className="relative z-10 text-white/70 max-w-2xl text-lg mb-12">
          Cada fibra tratada com rigor. Agende agora e tenha a certeza de que o conforto da sua casa ou empresa estará no seu ápice biológico e visual.
        </p>

        <button 
          onClick={onOpenQuote}
          className="relative z-10 magnetic-button bg-accent text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-[#b04a29] transition-colors flex items-center gap-3"
        >
          <span className="bg-layer bg-white/10"></span>
          Solicitar Orçamento <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
