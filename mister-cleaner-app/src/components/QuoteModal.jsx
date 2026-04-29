import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Upload, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    photo: null,
    length: '',
    width: '',
    cep: '',
    firstName: '',
    lastName: '',
    whatsapp: '',
  });

  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [step, isOpen]);

  const handleClose = () => {
    gsap.to(modalRef.current, { scale: 0.95, opacity: 0, y: 20, duration: 0.4, ease: 'power2.in' });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setStep(1);
        setFormData({ type: '', photo: null, length: '', width: '', cep: '', firstName: '', lastName: '', whatsapp: '' });
        onClose();
      },
    });
  };

  const handleTypeSelect = (type) => {
    setFormData({ ...formData, type });
    setStep(2);
  };

  const handleNextSubmit = (e) => {
    e.preventDefault();
    if (step === 2) {
      if (formData.length && formData.width && formData.cep) {
        setStep(3);
      }
    } else if (step === 3) {
      if (formData.firstName && formData.whatsapp) {
        setStep(4);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center font-sans">
      <div ref={overlayRef} className="absolute inset-0 bg-dark/80 backdrop-blur-md" onClick={handleClose}></div>
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-background rounded-[2rem] shadow-2xl overflow-hidden border border-primary/10 m-4"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-dark/50 hover:text-dark transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10" ref={contentRef}>
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2 block">Passo 1 de 3</span>
                <h2 className="text-3xl font-bold text-dark font-drama italic">O que vamos reviver hoje?</h2>
                <p className="text-dark/70 mt-2 text-sm leading-relaxed">Selecione o item que necessita da nossa assinatura em higienização profunda.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button
                  onClick={() => handleTypeSelect('Tapete')}
                  className="group relative h-40 rounded-[1.5rem] border border-primary/20 bg-background overflow-hidden hover:border-accent transition-colors flex flex-col items-center justify-center gap-4"
                >
                  <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                    <CheckCircle2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity absolute" />
                    <span className="w-6 h-1 bg-current rounded-full group-hover:opacity-0 transition-opacity"></span>
                  </div>
                  <span className="font-bold text-dark">Tapete</span>
                </button>
                <button
                  onClick={() => handleTypeSelect('Estofado')}
                  className="group relative h-40 rounded-[1.5rem] border border-primary/20 bg-background overflow-hidden hover:border-accent transition-colors flex flex-col items-center justify-center gap-4"
                >
                  <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                    <CheckCircle2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity absolute" />
                    <span className="w-6 h-4 border-2 border-current rounded-md group-hover:opacity-0 transition-opacity"></span>
                  </div>
                  <span className="font-bold text-dark">Estofado</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNextSubmit} className="flex flex-col gap-6">
              <div>
                <button type="button" onClick={() => setStep(1)} className="text-dark/50 flex items-center gap-1 text-xs font-semibold hover:text-dark mb-4 transition-colors"><ArrowLeft className="w-3 h-3"/> Voltar</button>
                <span className="text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2 block">Passo 2 de 3</span>
                <h2 className="text-3xl font-bold text-dark font-drama italic">Dimensões & Estado</h2>
                <p className="text-dark/70 mt-2 text-sm leading-relaxed">Para a mais alta precisão, necessitamos de alguns detalhes técnicos do seu {formData.type.toLowerCase()}.</p>
              </div>

              <div className="space-y-4">
                <div className="border border-dashed border-primary/30 rounded-[1.5rem] p-6 flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:border-accent hover:bg-primary/5 transition-colors relative">
                  <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={(e) => setFormData({ ...formData, photo: e.target.files[0]?.name })}
                  />
                  {formData.photo ? (
                    <>
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-semibold text-dark truncate max-w-[200px]">{formData.photo}</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-primary/50" />
                      <div>
                        <span className="font-semibold text-dark text-sm block">Anexar foto atual</span>
                        <span className="text-xs text-dark/50">Clique ou arraste um arquivo JPG/PNG</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark/70 uppercase">Comprimento (m)</label>
                    <input
                      required
                      type="number"
                      step="0.1"
                      placeholder="Ex: 2.5"
                      className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      value={formData.length}
                      onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark/70 uppercase">Largura (m)</label>
                    <input
                      required
                      type="number"
                      step="0.1"
                      placeholder="Ex: 1.8"
                      className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      value={formData.width}
                      onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark/70 uppercase">CEP de Retirada</label>
                  <input
                    required
                    type="text"
                    placeholder="00000-000"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    value={formData.cep}
                    onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-full py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-dark transition-colors mt-2"
              >
                Continuar Protocolo <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNextSubmit} className="flex flex-col gap-6">
              <div>
                <button type="button" onClick={() => setStep(2)} className="text-dark/50 flex items-center gap-1 text-xs font-semibold hover:text-dark mb-4 transition-colors"><ArrowLeft className="w-3 h-3"/> Voltar</button>
                <span className="text-accent font-mono text-xs font-semibold tracking-wider uppercase mb-2 block">Passo Final</span>
                <h2 className="text-3xl font-bold text-dark font-drama italic">Sua Identidade</h2>
                <p className="text-dark/70 mt-2 text-sm leading-relaxed">Para entrarmos em contato via WhatsApp e enviarmos seu orçamento arquitetado.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark/70 uppercase">Nome</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-dark/70 uppercase">Sobrenome</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark/70 uppercase">WhatsApp</label>
                  <input
                    required
                    type="tel"
                    placeholder="(21) 90000-0000"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white rounded-full py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b04a29] transition-colors mt-2"
              >
                Solicitar Orçamento <CheckCircle2 className="w-4 h-4" />
              </button>
            </form>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-dark font-drama italic mb-2">Protocolo Iniciado</h2>
                <p className="text-dark/70 text-sm leading-relaxed max-w-[280px]">
                  Obrigado, {formData.firstName}. Nossa equipe entrará em contato detalhando a purificação do seu {formData.type.toLowerCase()}.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="bg-dark text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-dark/80 transition-colors"
              >
                Fechar Painel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
