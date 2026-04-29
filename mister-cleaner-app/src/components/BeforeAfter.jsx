import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfter() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery-img',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white w-full border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm uppercase tracking-widest mb-4 font-semibold">
            Resultados Tangíveis
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-dark">
            O Impacto do <span className="font-drama italic font-normal text-primary">Protocolo</span>
          </h2>
          <p className="text-dark/60 mt-4 max-w-2xl mx-auto">
            A diferença visual entre a degradação do tempo e a purificação laboratorial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1: Estofados */}
          <div className="gallery-img group relative overflow-hidden rounded-[2rem] bg-dark/5">
            <img src="/antesedpssofa.png" alt="Antes e Depois Sofá" className="w-full h-auto block" />
            {/* Label overlay via absolute */}
            <div className="absolute bottom-6 left-6 text-white z-10 drop-shadow-md">
              <h3 className="font-sans font-bold text-xl">Purificação de Sofás</h3>
              <p className="text-sm opacity-80">Remoção de sujidade profunda e restauração de cor.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 pointer-events-none"></div>
          </div>

          {/* Item 2: Tapetes */}
          <div className="gallery-img group relative overflow-hidden rounded-[2rem] bg-dark/5">
            <img src="/antesedpstapete.png" alt="Antes e Depois Tapete" className="w-full h-auto block" />
            {/* Label overlay via absolute */}
            <div className="absolute bottom-6 left-6 text-white z-10 drop-shadow-md">
              <h3 className="font-sans font-bold text-xl">Restauração de Tapetes</h3>
              <p className="text-sm opacity-80">Revitalização de tramas finas e eliminação de ácaros.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
