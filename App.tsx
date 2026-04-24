/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Recycle, 
  Building2, 
  School, 
  Trophy, 
  Users, 
  Calendar,
  MessageCircle
} from 'lucide-react';
import { useState, useRef } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const sectors = [
    { icon: <Building2 className="w-6 h-6" />, name: "Empresas & Comércios" },
    { icon: <School className="w-6 h-6" />, name: "Escolas" },
    { icon: <Trophy className="w-6 h-6" />, name: "Academias & Times" },
    { icon: <Users className="w-6 h-6" />, name: "Grupos" },
    { icon: <Calendar className="w-6 h-6" />, name: "Eventos" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-accent">
        <div className="container-custom py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-black rounded-sm flex items-center justify-center text-white font-bold text-xl italic">
              B
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-brand-black hidden sm:inline uppercase">BASICALE</span>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wide uppercase text-brand-muted">
            <a href="#uniformes" className="text-brand-black">Uniformes</a>
            <a href="#basics" className="hover:text-brand-black transition-colors">Linha Basics</a>
            <a href="#qualidade" className="hover:text-brand-black transition-colors">Qualidade</a>
            <a href="#contato" className="hover:text-brand-black transition-colors">Contato</a>
          </div>

          <button className="hidden md:flex btn-primary !py-2.5 !px-6 !text-xs">
            SOLICITAR ORÇAMENTO
          </button>

          <button className="lg:hidden p-2 rounded-full hover:bg-brand-gray" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-brand-accent py-6 px-12 flex flex-col gap-6 shadow-xl"
          >
            <a href="#uniformes" className="text-sm font-bold uppercase tracking-wider text-brand-black" onClick={() => setIsMenuOpen(false)}>Uniformes</a>
            <a href="#basics" className="text-sm font-bold uppercase tracking-wider text-brand-black" onClick={() => setIsMenuOpen(false)}>Linha Basics</a>
            <a href="#qualidade" className="text-sm font-bold uppercase tracking-wider text-brand-black" onClick={() => setIsMenuOpen(false)}>Qualidade</a>
            <a href="#contato" className="text-sm font-bold uppercase tracking-wider text-brand-black" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <button className="btn-primary w-full !text-xs">SOLICITAR ORÇAMENTO</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 min-h-[90vh] flex flex-col md:grid md:grid-cols-12 overflow-hidden bg-white">
        <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-light font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
              Confecção de Excelência
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Uniformes que <br/>
              <span className="text-brand-light">vestem sua marca</span> <br/>
              com perfeição.
            </h1>
            <p className="text-brand-muted text-lg max-w-lg leading-relaxed mb-10">
              Soluções têxteis profissionais sob encomenda para empresas, escolas e eventos. Qualidade, conforto e design para o dia a dia do seu time.
            </p>
            
            <div className="flex items-center gap-8 mb-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-black">500+</span>
                <span className="text-[10px] text-brand-light uppercase tracking-wider font-bold">Empresas Atendidas</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-brand-black">15k+</span>
                <span className="text-[10px] text-brand-light uppercase tracking-wider font-bold">Peças Mensais</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Ver Catálogo
              </button>
              <button className="btn-secondary">
                Linha Casual
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="md:col-span-5 lg:col-span-6 bg-brand-gray relative min-h-[400px]">
          <motion.div style={{ opacity }} className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Corporate Environment" 
              className="w-full h-full object-cover grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-black/10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-12 right-6 md:left-[-60px] md:right-auto bg-white p-8 shadow-2xl rounded-xl max-w-xs z-10"
          >
            <p className="text-sm italic text-brand-muted leading-relaxed">
              "A Basicale transformou a identidade visual da nossa rede escolar com uniformes duráveis e extremamente confortáveis."
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="w-8 h-8 rounded-full bg-brand-gray flex items-center justify-center font-bold text-[10px] text-brand-muted uppercase">AC</div>
              <span className="text-[10px] font-bold uppercase tracking-wider">Diretoria Colégio Alpha</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-brand-accent bg-white">
        {[
          { id: "01", title: "Corporativo", desc: "Escritórios, indústrias e serviços." },
          { id: "02", title: "Educacional", desc: "Escolas, colégios e universidades." },
          { id: "03", title: "Esportivo", desc: "Academias, times e grupos." },
          { id: "04", title: "Casual & Eventos", desc: "Personalização para o dia a dia." },
        ].map((item, idx) => (
          <div key={idx} className="p-10 border-r border-brand-accent last:border-r-0 hover:bg-brand-gray transition-colors group cursor-pointer">
            <span className="text-brand-light text-xs font-bold mb-3 block tracking-widest">{item.id}</span>
            <h3 className="font-bold text-brand-black uppercase tracking-tight text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-brand-muted group-hover:text-brand-black transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section id="uniformes" className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-brand-light font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Personalização Sob Medida</span>
              <h2 className="text-4xl lg:text-6xl mb-10 leading-tight">
                Qualidade Profissional,<br />
                <span className="text-brand-light font-normal italic">Sem Compromissos.</span>
              </h2>
              <ul className="space-y-6 mb-12">
                {[
                  "Teclados premium com elasticidade e respirabilidade",
                  "Corte a laser para precisão milimétrica",
                  "Bordado e silk-screen de alta definição",
                  "Grade completa de tamanhos P ao EXG"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-black"></div>
                    <span className="text-brand-muted text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-secondary !rounded-md flex items-center gap-3">
                Ver Projetos Executados <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden mt-12">
                <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[3/4] bg-brand-gray rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Basics Section */}
      <section id="basics" className="py-32 bg-brand-black text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-white/40 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Casual Essentials</span>
              <h2 className="text-4xl lg:text-7xl font-bold leading-tight uppercase">Linha Basics <br/>Superior</h2>
            </div>
            <p className="text-white/60 max-w-xs text-sm leading-relaxed pb-2">
              Roupas para o dia a dia que elevam o padrão de conforto e estilo. Minimalistas, duráveis e prontas para personalização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Premium T-shirts",
                tag: "Fio 30.1",
                img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Maxi Hoodies",
                tag: "Heavy Cotton",
                img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Executive Polos",
                tag: "Piqué Tech",
                img: "https://images.unsplash.com/photo-1626497748470-284d41f66350?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[4/5] bg-brand-black overflow-hidden cursor-pointer">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 grayscale" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-brand-black/80 to-transparent">
                  <span className="text-[10px] font-bold tracking-[0.2em] mb-2 text-white/50">{item.tag}</span>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualidade */}
      <section id="qualidade" className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
               <h2 className="text-4xl lg:text-6xl mb-12 leading-tight">Por que escolher <br/>a Basicale?</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                  <div className="space-y-4">
                    <ShieldCheck className="w-8 h-8 text-brand-black" />
                    <h3 className="font-bold text-sm uppercase tracking-wider">Durabilidade Extrema</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">Tecidos testados para resistir a lavagens industriais e uso diário intenso sem perder cor ou forma.</p>
                  </div>
                  <div className="space-y-4">
                    <Recycle className="w-8 h-8 text-brand-black" />
                    <h3 className="font-bold text-sm uppercase tracking-wider">Eco Consciente</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">Processos produtivos otimizados para redução de resíduos têxteis e uso de energia limpa.</p>
                  </div>
                  <div className="space-y-4">
                    <Building2 className="w-8 h-8 text-brand-black" />
                    <h3 className="font-bold text-sm uppercase tracking-wider">Escalabilidade</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">Atendemos de pequenos grupos a grandes corporações com a mesma precisão e prazo.</p>
                  </div>
                  <div className="space-y-4">
                    <MessageCircle className="w-8 h-8 text-brand-black" />
                    <h3 className="font-bold text-sm uppercase tracking-wider">Consultoria</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">Nossa equipe auxilia na escolha técnica de cada material de acordo com o ambiente de uso.</p>
                  </div>
               </div>
            </div>
            <div className="bg-brand-gray p-16 rounded-2xl flex flex-col justify-center border border-brand-accent">
               <span className="text-brand-light font-bold uppercase tracking-widest text-[10px] mb-6 block">Solicite agora</span>
               <h3 className="text-3xl font-bold mb-8">Nossos consultores estão prontos para te ajudar.</h3>
               <p className="text-brand-muted text-sm mb-10 leading-relaxed">
                 Entendemos que cada marca tem uma necessidade única. Solicite um orçamento consultivo e receba uma proposta personalizada e amostras de tecidos.
               </p>
               <button className="btn-primary w-fit flex items-center gap-3">
                 Falar via WhatsApp <MessageCircle className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white/40 pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 pb-32 border-b border-white/5">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center text-white font-bold text-xl italic">
                  B
                </div>
                <span className="font-display font-bold text-2xl tracking-tight text-white uppercase">BASICALE</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Confecção de uniformes profissionais e linha basics com foco total em qualidade, durabilidade e identidade visual.
              </p>
            </div>
            
            <div className="grid grid-cols-2 col-span-2 gap-12">
               <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Soluções</h4>
                  <ul className="space-y-4 text-xs font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">Uniformes Corporativos</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Uniformes Escolares</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Linha Academias</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Personalização Basics</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Empresa</h4>
                  <ul className="space-y-4 text-xs font-medium">
                    <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Qualidade</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contatos</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  </ul>
               </div>
            </div>
          </div>
          
          <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] uppercase tracking-[0.2em] font-bold">
            <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <span>© 2024 Basicale Confecções</span>
              <span className="flex items-center gap-2 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Atendimento Nacional
              </span>
              <span>Solicite Amostras Físicas</span>
            </div>
            <div className="flex gap-10">
              <span className="text-white">Whatsapp: (11) 99999-9999</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/your-number" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-brand-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
