import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, Activity, ShieldCheck, Microscope } from 'lucide-react';

export default function Features() {
  const [shufflerStack, setShufflerStack] = useState([
    { id: 1, title: 'Análise de Fibras', desc: 'Identificação laboratorial' },
    { id: 2, title: 'Extração Profunda', desc: 'Remoção no núcleo' },
    { id: 3, title: 'Blindagem Têxtil', desc: 'Proteção e isolamento' }
  ]);

  const [typedText, setTypedText] = useState('');
  const typewriterFullText = 'LOG: Coleta e entrega habilitadas. Rastreio ativado. Logística zero atrito para sua comodidade.';
  
  // Card 1 Shuffler
  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerStack(prev => {
        const newStack = [...prev];
        const last = newStack.pop();
        newStack.unshift(last);
        return newStack;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Card 2 Typewriter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= typewriterFullText.length) {
        setTypedText(typewriterFullText.slice(0, i));
        i++;
      } else {
        i = 0; // reset to loop or keep it
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Card 3 SVG Cursor Animation via CSS
  const cursorRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to(cursorRef.current, { x: 50, y: 30, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.day-cell-active', { backgroundColor: '#CC5833', color: '#fff', duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, { x: 120, y: 80, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="solucoes" className="py-32 px-6 bg-background relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-dark mb-4">Artefatos <span className="font-drama italic font-normal text-primary">Funcionais</span></h2>
          <p className="text-dark/60 max-w-xl text-lg">Nosso arsenal tecnológico para purificar seu ambiente, testado por mais de duas décadas de expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Diagnostic Shuffler */}
          <div className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-xl shadow-primary/5 flex flex-col hover:border-accent/40 transition-colors duration-500 min-h-[400px]">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-5 h-5 text-accent" />
              <span className="font-mono text-xs font-bold text-dark/50 uppercase tracking-widest">Diagnostic Shuffler</span>
            </div>
            <h3 className="text-2xl font-bold font-sans text-dark mb-2 mt-auto">20 Anos de Expertise</h3>
            <p className="text-dark/60 text-sm mb-8 leading-relaxed">Diagnóstico biológico do tecido para aplicar a neutralização química exata.</p>
            
            <div className="relative h-32 w-full mt-auto perspective-1000">
              {shufflerStack.map((item, index) => {
                const isTop = index === 0;
                return (
                  <div 
                    key={item.id}
                    className="absolute w-full bg-background border border-primary/10 p-4 rounded-2xl shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                      transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
                      zIndex: 10 - index,
                      opacity: 1 - index * 0.3,
                      background: isTop ? '#2E4036' : '#F2F0E9',
                      color: isTop ? '#fff' : '#1A1A1A'
                    }}
                  >
                    <div className="font-mono text-xs mb-1 font-semibold">{item.title}</div>
                    <div className="text-xs opacity-70">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter */}
          <div className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-xl shadow-primary/5 flex flex-col hover:border-accent/40 transition-colors duration-500 min-h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-accent" />
                <span className="font-mono text-xs font-bold text-dark/50 uppercase tracking-widest">Live Feed</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            </div>
            
            <div className="flex-1 bg-dark text-[#00ff41] p-5 rounded-2xl font-mono text-sm leading-relaxed mb-6 border border-dark/80 relative overflow-hidden flex items-end">
              <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent pointer-events-none"></div>
              <p>
                {typedText}
                <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
              </p>
            </div>
            
            <h3 className="text-2xl font-bold font-sans text-dark mb-2">Logística Invisível</h3>
            <p className="text-dark/60 text-sm leading-relaxed">Coleta e entrega 100% gratuitas. Seu conforto é estrutural, não opcional.</p>
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-xl shadow-primary/5 flex flex-col hover:border-accent/40 transition-colors duration-500 min-h-[400px] relative overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-mono text-xs font-bold text-dark/50 uppercase tracking-widest">Protocol Scheduler</span>
            </div>
            
            <div className="flex-1 bg-background rounded-2xl p-4 mb-6 border border-primary/10 relative">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['D','S','T','Q','Q','S','S'].map((d, i) => (
                  <div key={i} className="text-[10px] text-center font-bold text-dark/40">{d}</div>
                ))}
                {Array.from({length: 14}).map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-md border border-primary/10 flex items-center justify-center text-xs ${i === 9 ? 'day-cell-active' : ''}`}
                  >
                    {i+1}
                  </div>
                ))}
              </div>
              <div className="w-full h-8 bg-primary/5 rounded-lg flex items-center justify-center text-xs font-bold text-primary">SAVE PROTOCOL</div>
              
              <div ref={cursorRef} className="absolute top-2 left-2 z-10 w-6 h-6">
                <MousePointer2 className="w-6 h-6 text-dark fill-white drop-shadow-md" />
              </div>
            </div>

            <h3 className="text-2xl font-bold font-sans text-dark mb-2 mt-auto">Horário Engenhado</h3>
            <p className="text-dark/60 text-sm leading-relaxed">Tratamento eco-friendly programado exatamente para a sua janela operacional diária.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
