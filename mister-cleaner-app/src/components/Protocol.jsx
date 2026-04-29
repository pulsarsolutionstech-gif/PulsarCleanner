import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const protocols = [
  {
    step: '01',
    title: 'Mapeamento Extremo',
    desc: 'Análise milimétrica de manchas, tecido e tempo de vida do estofado. Definimos o espectro químico ideal para a sua peça.'
  },
  {
    step: '02',
    title: 'Purificação Ativa',
    desc: 'Aplicação de tecnologia eco-friendly por extração. Quebramos moléculas de odor e erradicamos ácaros profundamente nas fibras.'
  },
  {
    step: '03',
    title: 'Finalização & Blindagem',
    desc: 'Secagem assistida e possível aplicação de proteção isolante antifluidos, garantindo prolongamento estrutural do material.'
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't scale down
        
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="metodo" className="bg-background relative w-full pt-20">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-dark">
          O <span className="font-drama italic font-normal text-primary">Protocolo</span>
        </h2>
      </div>

      <div className="flex flex-col relative w-full pb-32">
        {protocols.map((proto, index) => (
          <div 
            key={index} 
            className="protocol-card h-[100dvh] w-full flex items-center justify-center p-6 bg-background"
          >
            <div className="w-full max-w-5xl h-[80vh] bg-white rounded-[3rem] border border-primary/10 shadow-2xl p-12 md:p-20 relative overflow-hidden flex inset-0 items-center">
              
              <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center gap-6">
                <span className="font-mono text-accent text-3xl md:text-5xl font-bold opacity-50">
                  {proto.step}.
                </span>
                <h3 className="font-sans font-bold text-3xl md:text-5xl text-dark leading-tight">
                  {proto.title}
                </h3>
                <p className="text-lg md:text-xl text-dark/70 max-w-md leading-relaxed font-sans">
                  {proto.desc}
                </p>
              </div>

              {/* Decorative Geometric Canvas (simplified with CSS/SVG) */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 flex items-center justify-center pointer-events-none">
                {index === 0 && (
                  <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                     <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                     <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                     <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                     <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                )}
                {index === 1 && (
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent animate-[bounce_4s_infinite]"></div>
                  </div>
                )}
                {index === 2 && (
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <path d="M0,50 Q25,20 50,50 T100,50" stroke="currentColor" strokeWidth="1" fill="none" className="animate-[dash_3s_linear_infinite]" />
                     <style>
                       {`
                         @keyframes dash {
                           to { stroke-dashoffset: -200; }
                         }
                         path { stroke-dasharray: 200; }
                       `}
                     </style>
                  </svg>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
