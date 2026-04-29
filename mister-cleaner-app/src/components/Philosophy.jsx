import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Basic fade up for sentences since we don't have SplitText premium plugin
      // We simulate word-by-word with span wrappers
      const words = gsap.utils.toArray('.split-word');
      
      gsap.fromTo(words, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.08, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const renderWords = (text, isHighlight = false, highlightWord = '') => {
    return text.split(' ').map((word, i) => {
      const cleanWord = word.replace(/[^a-zA-Záàãâéêíóôõúç]/g, '');
      const isHighlightedWord = highlightWord && cleanWord.toLowerCase() === highlightWord.toLowerCase();
      
      return (
        <span key={i} className={`split-word inline-block mr-3 ${isHighlightedWord ? 'text-accent' : ''}`}>
          {word}
        </span>
      );
    });
  };

  return (
    <section ref={containerRef} className="py-40 relative bg-dark overflow-hidden w-full">
      {/* Background Organic/Laboratory Texture */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-transparent to-dark/80"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col gap-24">
        
        {/* Contrast Statement 1 */}
        <div className="max-w-2xl">
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase mb-4 font-semibold">
            O Padrão da Indústria
          </p>
          <div className="text-2xl md:text-3xl font-sans text-white/50 leading-relaxed font-light">
            {renderWords("A maioria do mercado foca em limpeza superficial visual e uso de químicos nocivos para mascarar odores.")}
          </div>
        </div>

        {/* Contrast Statement 2 */}
        <div className="max-w-4xl self-end text-right">
          <p className="text-accent/80 font-mono text-sm tracking-widest uppercase mb-4 font-semibold">
            O Protocolo Mr. Cleaner
          </p>
          <div className="text-4xl md:text-6xl lg:text-7xl font-drama italic text-white leading-[1.1]">
            {renderWords("Nós focamos em purificação microbiológica e higienização prolongada e segura.", true, "purificação")}
          </div>
        </div>

      </div>
    </section>
  );
}
