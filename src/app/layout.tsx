import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dittmar Estructuras Metálicas — Santiago, Chile",
  description:
    "Fabricación e instalación de estructuras metálicas en Santiago. Galpones industriales, cobertizos, carport, pasarelas y más. Presupuesto sin costo.",
  keywords:
    "estructuras metálicas, galpones industriales, cobertizos, carport, Santiago, Chile",
  openGraph: {
    title: "Dittmar Estructuras Metálicas",
    description:
      "Fabricación e instalación de estructuras metálicas en Santiago, Chile.",
    locale: "es_CL",
    type: "website",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
