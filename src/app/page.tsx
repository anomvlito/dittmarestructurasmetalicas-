"use client";

import { useState } from "react";
import Image from "next/image";
import { businessInfo, services, stats, reasons } from "@/data/content";

const localGalleryImages = [
  "/images/foto-1.webp",
  "/images/foto-2.webp",
  "/images/foto-3.webp"
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto para una estructura metálica.")}`;

  const navLinks = [
    ["Servicios", "#servicios"],
    ["Por Qué Elegirnos", "#ventajas"],
    ["Proyectos", "#proyectos"],
    ["Nosotros", "#nosotros"],
    ["Contacto", "#contacto"],
  ];

  return (
    <main className="min-h-screen font-sans">
      {/* ── Top Bar ── */}
      <div className="bg-zinc-950 border-b border-zinc-800 py-2 px-4 hidden md:flex items-center justify-center gap-8 text-xs text-zinc-400 font-medium tracking-wide">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="material-symbols-outlined text-sm text-yellow-500">location_on</span>
          {businessInfo.address}
        </span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="material-symbols-outlined text-sm text-yellow-500">schedule</span>
          Lunes a Viernes 8:00 – 18:00 · Sábado 9:00 – 13:00
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors"
          aria-label="Llamar o escribir al teléfono de contacto"
        >
          <span className="material-symbols-outlined text-sm">phone</span>
          {businessInfo.phone}
        </a>
      </div>

      {/* ── Navbar ── */}
      <nav 
        className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0 group" aria-label="Inicio">
            <div className="w-10 h-10 bg-yellow-500 group-hover:bg-yellow-400 transition-colors rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-900 text-2xl font-bold">architecture</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-sm text-white tracking-widest uppercase">DITTMAR</div>
              <div className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">Estructuras Metálicas</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-zinc-300 hover:text-yellow-500 transition-colors uppercase tracking-wider"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-zinc-950 px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider transition-all"
            >
              <span className="material-symbols-outlined text-base">engineering</span>
              Cotizar Proyecto
            </a>
            <button
              className="lg:hidden text-zinc-300 hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-6 flex flex-col gap-4 shadow-2xl">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-yellow-500 text-base font-bold uppercase tracking-wider transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 bg-yellow-500 text-zinc-900 px-4 py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-base">engineering</span>
              Cotizar ahora
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-zinc-950"
        aria-label="Bienvenida"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/foto-1.webp" 
            alt="Estructura metálica industrial en construcción" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity grayscale-[30%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm text-zinc-300 text-xs font-bold px-4 py-2 rounded-sm mb-6 tracking-widest uppercase">
               <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
               Expertos en Acero · Región Metropolitana
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white mb-6 uppercase tracking-tight">
              Construimos<br/>
              con <span className="text-yellow-500">acero</span>.<br/>
              Duramos <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-600">décadas</span>.
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl md:leading-relaxed mb-10 max-w-xl font-medium">
              Fabricación e instalación de galpones, cobertizos y estructuras metálicas de alta precisión. 
              Garantía estructural y plazos cumplidos al 100%.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold px-8 py-4 rounded-sm text-base uppercase tracking-widest transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                <span className="material-symbols-outlined">request_quote</span>
                Quiero cotizar
              </a>
              <a
                href="#proyectos"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-sm text-base font-bold uppercase tracking-widest transition-all"
              >
                Ver obras
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar overlaying bottom of hero */}
        <div className="absolute bottom-0 w-full border-t border-zinc-800 bg-zinc-950/80 backdrop-blur-md z-20">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-3 gap-6 divide-x divide-zinc-800">
            {stats.map((stat, idx) => (
              <div key={stat.label} className={`text-center ${idx % 2 !== 0 ? 'border-l border-zinc-800 md:border-0' : ''} ${idx >= 2 ? 'md:border-l' : ''}`}>
                <div className="font-display font-black text-3xl md:text-4xl text-yellow-500 mb-1">{stat.value}</div>
                <div className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="py-24 md:py-32 px-4 bg-zinc-900" aria-label="Nuestros Servicios">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-yellow-500"></div>
                <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
                  Capacidades
                </p>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                Nuestros Servicios
              </h2>
            </div>
            <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-md">
              Soluciones integrales de maestranza y montaje estructural diseñadas a la medida de tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.id}
                className="group bg-zinc-950 border border-zinc-800 p-8 hover:border-yellow-500/50 transition-colors relative overflow-hidden"
                itemScope 
                itemType="https://schema.org/Service"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <span className="material-symbols-outlined text-9xl">{service.icon}</span>
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 group-hover:bg-yellow-500 flex items-center justify-center mb-6 transition-colors">
                    <span className="material-symbols-outlined text-yellow-500 group-hover:text-zinc-950 text-3xl transition-colors">{service.icon}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white mb-4 uppercase tracking-wide" itemProp="name">{service.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed mb-8 min-h-[80px]" itemProp="description">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-zinc-300 font-medium">
                        <span className="material-symbols-outlined text-yellow-500 text-lg shrink-0">done</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section id="ventajas" className="py-24 px-4 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-0.5 w-8 bg-yellow-500"></div>
                <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
                  Nuestra diferencia
                </p>
                <div className="h-0.5 w-8 bg-yellow-500"></div>
              </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-tight">
              ¿Por qué elegirnos?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-20 h-20 bg-zinc-900 rounded-full border border-zinc-800 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                  <span className="material-symbols-outlined text-yellow-500 text-4xl">{reason.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3 uppercase tracking-wide">{reason.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos / Galería ── */}
      <section id="proyectos" className="py-24 md:py-32 px-4 bg-zinc-900" aria-label="Galería de proyectos">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-yellow-500"></div>
                <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
                  Portafolio Real
                </p>
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                Nuestro Trabajo
              </h2>
            </div>
            <a
              href={`https://www.instagram.com/${businessInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 border-2 border-zinc-700 hover:border-yellow-500 text-white font-bold px-6 py-3 uppercase tracking-widest text-sm transition-all"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              Ver en Instagram
            </a>
          </div>

          {/* Static Geometry Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {localGalleryImages.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-square md:aspect-[4/5] bg-zinc-800 overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Proyecto de estructura metálica Dittmar ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay metálico en hover */}
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <p className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                     <span className="material-symbols-outlined text-yellow-500 text-base">verified</span>
                     Obra Finalizada
                   </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
             <a
              href={`https://www.instagram.com/${businessInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-zinc-700 hover:border-yellow-500 text-white font-bold px-6 py-3 uppercase tracking-widest text-sm transition-all w-full justify-center"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Nosotros ── */}
      <section id="nosotros" className="py-24 md:py-32 px-4 bg-zinc-950 relative overflow-hidden">
        {/* Adorno visual */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] border-l-4 border-b-4 border-yellow-500 p-2">
               <div className="relative w-full h-full bg-zinc-800 overflow-hidden">
                 <Image 
                   src="/images/foto-2.webp" 
                   alt="Taller y equipo de constructores soldando estructura metálica"
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-0.5 w-12 bg-yellow-500"></div>
              <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase">
                Sobre la empresa
              </p>
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl leading-[1.1] text-white mb-8 uppercase tracking-tight">
              Precisión, resistencia y cumplimiento <br/>
              <span className="text-zinc-500">en cada soldadura.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg font-medium leading-relaxed mb-10">
              <p>
                Somos una maestranza familiar especializada en estructuras 
                metálicas pesadas y livianas. Atendemos a la industria, 
                constructoras y proyectos particulares en toda la Región Metropolitana.
              </p>
              <p className="border-l-2 border-yellow-500 pl-6 text-zinc-300 italic">
                “No transamos en calidad. Si un perfil debe ser de 3mm, se instala de 3mm. 
                Construimos estructuras que resisten el paso del tiempo y las normativas sísmicas.”
              </p>
              <p>
                Nuestro equipo cuenta con años de experiencia en terreno, uniendo el oficio 
                metalúrgico tradicional con herramientas de vanguardia y soldadores calificados.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-zinc-950 font-bold px-8 py-4 text-base uppercase tracking-widest transition-colors"
            >
              Hablemos de tu proyecto
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="py-24 md:py-32 px-4 bg-yellow-500 text-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-zinc-800 text-sm font-black tracking-widest uppercase mb-4">
                El primer paso
              </p>
              <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-tight mb-8">
                Hagamos que tu proyecto tome <span className="text-white">forma</span>.
              </h2>
              
              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-3xl text-zinc-900">phone_iphone</span>
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-wide mb-1">WhatsApp / Teléfono</p>
                    <a href={whatsappUrl} className="text-2xl font-bold hover:text-white transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-3xl text-zinc-900">email</span>
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-wide mb-1">Correo Electrónico</p>
                    <a href={`mailto:${businessInfo.email}`} className="text-xl font-bold hover:text-white transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined text-3xl text-zinc-900">location_on</span>
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-wide mb-1">Cobertura</p>
                    <p className="text-xl font-bold">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-10 py-5 rounded-sm text-lg uppercase tracking-widest transition-all shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                   <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.845L0 24l6.335-1.502A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.377l-.36-.214-3.761.892.938-3.66-.236-.375A9.818 9.818 0 0 1 2.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
                </svg>
                Iniciar en WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="h-[450px] lg:h-[600px] border-4 border-zinc-950 p-2 bg-zinc-950 shadow-2xl relative">
              <iframe
                src={businessInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(80%) contrast(120%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Zona de Cobertura Dittmar"
                className="bg-zinc-800"
              />
               <div className="absolute top-4 right-4 bg-zinc-950 text-yellow-500 font-bold px-4 py-2 text-xs uppercase tracking-widest">
                 Base de operaciones
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-zinc-950 py-12 px-4 border-t-8 border-yellow-500 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-950 text-2xl font-bold">architecture</span>
            </div>
            <div className="leading-tight text-left">
              <div className="font-display font-extrabold text-sm text-white tracking-widest uppercase">DITTMAR</div>
              <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Estructuras Metálicas</div>
            </div>
          </a>

          <p className="text-zinc-500 font-medium text-sm font-sans">
            © {new Date().getFullYear()} Dittmar Estructuras Metálicas. Santiago, Chile.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={`https://www.instagram.com/${businessInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-500 transition-colors uppercase text-sm font-bold tracking-widest"
            >
              Instagram
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-yellow-500 transition-colors uppercase text-sm font-bold tracking-widest"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
