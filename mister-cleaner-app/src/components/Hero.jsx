import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
      {/* Background Image & Gradient */}
      <img 
        src="/hero-bg.jpg" 
        alt="Estofado com mancha de vinho" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <div className="max-w-3xl">
          <div className="hero-el">
            <h1 className="text-white flex flex-col leading-[1.1]">
              <span className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight opacity-90">
                A higiene extrema é o
              </span>
              <span className="font-drama italic text-7xl md:text-8xl lg:text-9xl text-accent -ml-1 mt-2">
                Renascimento.
              </span>
            </h1>
          </div>
          
          <p className="hero-el text-white/70 text-lg md:text-xl font-sans mt-8 max-w-xl leading-relaxed">
            Nós não limpamos, nós resgatamos. Através de biotecnologia eco-friendly e precisão laboratorial, purificamos estofados e tapetes para a sua saúde absoluta.
          </p>

          <div className="hero-el mt-12">
            <button 
              onClick={onOpenQuote}
              className="magnetic-button inline-flex items-center gap-3 bg-accent text-white px-8 py-5 rounded-[2rem] font-bold text-lg hover:bg-[#b04a29] transition-colors"
            >
              <span className="bg-layer"></span>
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
