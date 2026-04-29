import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white rounded-t-[4rem] px-6 py-20 pb-10 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-sans font-bold text-3xl mb-4 text-white">PulsarCleaner</h3>
            <p className="text-white/50 text-sm font-sans max-w-sm leading-relaxed mb-6">
              O Spa do Seu Sofá! Há mais de 20 anos transformamos ambientes através da mais alta tecnologia em limpeza e higienização sustentável do Rio de Janeiro.
            </p>
            {/* System Operational Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></div>
              <span className="font-mono text-xs text-white/70 tracking-widest uppercase">Sistema Operacional</span>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-6 text-white/80">Menu</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções Visuais</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">Nosso Método</a></li>
              <li><a href="#orcamento" className="hover:text-white transition-colors">Diagnóstico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold mb-6 text-white/80">Regulamentação</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><span className="hover:text-white transition-colors cursor-pointer">Segurança de Dados</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Protocolos Químicos</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Logística de Contrato</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono">
          <p>&copy; {new Date().getFullYear()} Desenvolvido por PulsarTechSolutions. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">MG - Brasil | Especialista em Higienização</p>
        </div>
      </div>
    </footer>
  );
}
