import type { Metadata } from 'next';
import { Inter, Barlow } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
});

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Dittmar Estructuras Metálicas",
  "description": "Empresa constructora y fabricante de estructuras metálicas, galpones industriales, cobertizos y techados en Santiago, Chile. Presupuesto sin costo y garantía estructural.",
  "url": "https://dittmarestructurasmetalicas.vercel.app",
  "telephone": "+56935453950",
  "email": "contacto@dittmar.cl",
  "image": "https://dittmarestructurasmetalicas.vercel.app/images/foto-1.webp",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "addressCountry": "CL",
  },
  "areaServed": "Región Metropolitana, Chile",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "13:00",
    },
  ],
  "priceRange": "$$$",
  "currenciesAccepted": "CLP",
  "sameAs": [
    "https://www.instagram.com/dittmar.estructurasmetalicas"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dittmarestructurasmetalicas.vercel.app'),
  title: {
    default: 'Dittmar Estructuras Metálicas | Fabricación e Instalación',
    template: '%s | Dittmar',
  },
  description: 'Fabricación e instalación de estructuras metálicas en Santiago. Galpones industriales, cobertizos, carport, pasarelas y mantenimiento estructural. Cotiza hoy sin costo.',
  keywords: [
    'estructuras metálicas Santiago',
    'galpones industriales Chile',
    'cobertizos metálicos',
    'carport Santiago',
    'construcción en acero',
    'soldadores certificados',
    'Dittmar Estructuras Metálicas',
    'fabricación de galpones',
    'techados metálicos',
    'empresa constructora metálica'
  ],
  authors: [{ name: 'Dittmar Estructuras Metálicas' }],
  creator: 'Dittmar Estructuras Metálicas',
  publisher: 'Dittmar Estructuras Metálicas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://dittmarestructurasmetalicas.vercel.app',
    title: 'Dittmar Estructuras Metálicas | Construimos con acero',
    description: 'Especialistas en estructuras metálicas para proyectos industriales y residenciales en la Región Metropolitana. Precisión, calidad certificada y plazos cumplidos.',
    siteName: 'Dittmar Estructuras Metálicas',
    images: [
      {
        url: '/images/foto-1.webp',
        width: 1200,
        height: 630,
        alt: 'Galpón industrial fabricado por Dittmar Estructuras Metálicas',
      },
    ],
  },
  alternates: {
    canonical: 'https://dittmarestructurasmetalicas.vercel.app',
  },
  category: 'construction',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${barlow.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </head>
      <body className="bg-dark-900 text-white min-h-screen selection:bg-brand selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
