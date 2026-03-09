"use client";

import { useState } from "react";
import Image from "next/image";
import { businessInfo, services, stats, reasons } from "@/data/content";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola, me gustaría solicitar un presupuesto para una estructura metálica.")}`;

  const navLinks = [
    ["Servicios", "#servicios"],
    ["Proyectos", "#proyectos"],
    ["Nosotros", "#nosotros"],
    ["Contacto", "#contacto"],
  ];

  return (
    <main className="min-h-screen">
      {/* ── Top Bar ── */}
      <div className="bg-dark-950 border-b border-white/5 py-2 px-4 hidden md:flex items-center justify-center gap-8 text-xs text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-brand">location_on</span>
          {businessInfo.address}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-brand">schedule</span>
          Lunes a Viernes 8:00 – 18:00 · Sábado 9:00 – 13:00
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-brand transition-colors"
        >
          <span className="material-symbols-outlined text-sm">phone</span>
          {businessInfo.phone}
        </a>
      </div>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl font-bold">architecture</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm text-white tracking-wide">DITTMAR</div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">Estructuras Metálicas</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/60 hover:text-white transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Cotizar gratis
            </a>
            <button
              className="md:hidden text-white/70 hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-800 border-t border-white/10 px-4 py-4 flex flex-col gap-1">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white hover:bg-dark-700 rounded-lg px-3 py-3 text-sm font-medium transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-lg text-sm font-semibold"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Cotizar gratis por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        id="inicio"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-transparent to-dark-900" />
        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
            <span className="material-symbols-outlined text-sm">verified</span>
            Santiago · Chile
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl xl:text-8xl leading-[0.95] mb-6 tracking-tight">
            Estructuras{" "}
            <span className="text-brand">metálicas</span>
            <br />
            que duran décadas.
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Fabricamos e instalamos galpones, cobertizos, carport y estructuras
            a medida en Santiago. Presupuesto gratuito y sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-brand/20"
            >
              <span className="material-symbols-outlined">chat</span>
              Pedir presupuesto gratis
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-8 py-4 rounded-xl text-base font-medium transition-all"
            >
              Ver servicios
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-dark-800/80 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-black text-2xl text-brand">{stat.value}</div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Lo que hacemos
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Nuestros <span className="text-brand">servicios</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">
              Desde pequeños cobertizos hasta galpones industriales de gran escala.
              Cada proyecto diseñado y ejecutado a medida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-dark-800 hover:bg-dark-700 border border-white/5 hover:border-brand/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand/10 group-hover:bg-brand/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <span className="material-symbols-outlined text-brand text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="material-symbols-outlined text-brand text-base mt-0.5 shrink-0">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="py-20 px-4 bg-dark-800/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Nuestra diferencia
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              ¿Por qué elegirnos?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center px-4">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-brand text-3xl">{reason.icon}</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos / Galería ── */}
      <section id="proyectos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Nuestro trabajo
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              Proyectos <span className="text-brand">realizados</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">
              Cada estructura es única. Aquí algunos de nuestros trabajos recientes.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Placeholder mientras no hay fotos reales */}
            {[
              { label: "Galpón Industrial", sub: "Quilicura, RM" },
              { label: "Cobertizo Residencial", sub: "Las Condes, RM" },
              { label: "Carport x4", sub: "La Florida, RM" },
              { label: "Estructura Mezanina", sub: "Pudahuel, RM" },
              { label: "Techado Industrial", sub: "Maipú, RM" },
              { label: "Escalera Metálica", sub: "Providencia, RM" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] bg-dark-800 rounded-2xl overflow-hidden border border-white/5 hover:border-brand/30 transition-all"
              >
                {/* Placeholder image area */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-dark-700 to-dark-900">
                  <span className="material-symbols-outlined text-brand/30 text-6xl mb-3">
                    {i % 2 === 0 ? "warehouse" : i % 3 === 0 ? "roofing" : "construction"}
                  </span>
                  <div className="text-white/20 text-xs">Foto próximamente</div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
                  <p className="font-display font-bold text-lg">{item.label}</p>
                  <p className="text-brand text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={`https://www.instagram.com/${businessInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-brand/40 text-white/60 hover:text-brand px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <span className="material-symbols-outlined text-base">photo_library</span>
              Ver más proyectos en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Nosotros ── */}
      <section id="nosotros" className="py-24 px-4 bg-dark-800/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-4">
              Quiénes somos
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
              Más de una{" "}
              <span className="text-brand">década construyendo</span>{" "}
              en acero.
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                Somos una empresa familiar especializada en fabricación e
                instalación de estructuras metálicas en la Región Metropolitana.
                Trabajamos con empresas industriales, constructoras y
                particulares que exigen calidad y cumplimiento de plazos.
              </p>
              <p>
                Nuestro equipo cuenta con soldadores certificados y montajistas
                con amplia experiencia en obra. Utilizamos materiales certificados
                por normativa chilena y garantizamos cada trabajo ejecutado.
              </p>
              <p>
                Desde el primer contacto hasta la entrega, te acompañamos en
                cada etapa del proyecto. Sin letra chica, sin sorpresas.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Contáctanos
              </a>
              <a
                href={`https://www.instagram.com/${businessInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 rounded-xl text-sm font-medium transition-all"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Visual feature list */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "factory", title: "Fabricación propia", desc: "Taller propio con maquinaria CNC, plasma y soldadura MIG/TIG." },
              { icon: "local_shipping", title: "Transporte e instalación", desc: "Flota de transporte y equipo de montaje en obra incluido en el precio." },
              { icon: "draw", title: "Diseño a medida", desc: "Planos estructurales y maqueta 3D antes de fabricar. Sin sorpresas." },
              { icon: "shield", title: "Garantía escrita", desc: "Todos nuestros trabajos incluyen garantía por escrito. Sin excepciones." },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-dark-900 border border-white/5 rounded-xl p-5"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-brand text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand/5 border-y border-brand/10" />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%), linear-gradient(45deg, #3b82f6 25%, transparent 25%, transparent 75%, #3b82f6 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
            Cuéntanos qué necesitas. Visita técnica y presupuesto sin costo, en
            24 horas hábiles.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold px-10 py-5 rounded-xl text-xl transition-all hover:scale-105 shadow-2xl shadow-brand/20"
          >
            <span className="material-symbols-outlined text-2xl">chat</span>
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">
              Estamos aquí
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl">
              <span className="text-brand">Contacto</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-dark-800 border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-brand text-2xl">chat</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-white/40 text-sm mb-3">
                    La forma más rápida de comunicarte con nosotros.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                    {businessInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-dark-800 border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-brand text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Ubicación</h3>
                  <p className="text-white/40 text-sm">{businessInfo.address}</p>
                  <p className="text-white/40 text-sm mt-1">Atendemos proyectos en toda la Región Metropolitana.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-dark-800 border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-brand text-2xl">schedule</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">Horario de atención</h3>
                  <p className="text-white/40 text-sm">Lunes a Viernes: 8:00 – 18:00</p>
                  <p className="text-white/40 text-sm">Sábado: 9:00 – 13:00</p>
                </div>
              </div>

              <a
                href={`https://www.instagram.com/${businessInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-dark-800 border border-white/5 hover:border-white/15 rounded-2xl p-6 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-pink-400 text-2xl">photo_camera</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1 group-hover:text-brand transition-colors">Instagram</h3>
                  <p className="text-white/40 text-sm">@{businessInfo.instagram}</p>
                </div>
                <span className="material-symbols-outlined text-white/20 ml-auto">open_in_new</span>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-96 md:h-full min-h-[400px] border border-white/5">
              <iframe
                src={businessInfo.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dittmar Estructuras Metálicas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-dark-950 border-t border-white/5 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">architecture</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-sm text-white">DITTMAR</div>
                <div className="text-[9px] text-white/30 tracking-widest uppercase">Estructuras Metálicas</div>
              </div>
            </a>

            <p className="text-white/20 text-sm text-center">
              © {new Date().getFullYear()} Dittmar Estructuras Metálicas. Santiago, Chile.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#25D366] transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.instagram.com/${businessInfo.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
