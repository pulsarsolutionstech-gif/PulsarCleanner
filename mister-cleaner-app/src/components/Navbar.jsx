import React, { useEffect, useRef, useState } from 'react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar({ onOpenQuote }) {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav
        ref={navRef}
        className={`flex items-center justify-between px-6 py-4 rounded-[2rem] transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg text-primary'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="font-sans font-bold text-xl tracking-tight">PulsarCleaner</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold opacity-80">
          <a href="#solucoes" className="interactive-link hover:opacity-100">Soluções</a>
          <a href="#metodo" className="interactive-link hover:opacity-100">O Método</a>
          <a href="#protocolo" className="interactive-link hover:opacity-100">Protocolo</a>
        </div>

        <button 
          onClick={onOpenQuote}
          className={`hidden md:block px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95 ${
            scrolled ? 'bg-accent text-white' : 'bg-white text-dark'
          }`}
        >
          Solicitar Orçamento
        </button>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
}
