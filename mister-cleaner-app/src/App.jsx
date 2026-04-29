import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Força o scroll para o topo sempre que a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
    // Tira qualquer hash da URL que faria a tela pular (ex: #solucoes)
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }, []);

  const handleOpenQuote = () => setIsQuoteModalOpen(true);
  const handleCloseQuote = () => setIsQuoteModalOpen(false);

  return (
    <div className="relative min-h-screen bg-background text-dark w-full overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Global CSS noise filter is applied via index.css body layer */}
      <div className="noise-overlay"></div>

      <Navbar onOpenQuote={handleOpenQuote} />
      
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        <BeforeAfter />
        <Features />
        <Philosophy />
        <Protocol />
        <Pricing onOpenQuote={handleOpenQuote} />
      </main>

      <Footer />

      {/* Conversion Form Modal Component */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}
