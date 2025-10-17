
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat_Alternates, Poppins } from "next/font/google";
import localFont from "next/font/local";

const display = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["600", "700"],          
  variable: "--font-display",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const buffalo = localFont({
  src: [{ path: "../../public/fonts/Buffalo.otf", weight: "400", style: "normal" }],
  variable: "--font-script",
  preload: true,
});

export const metadata: Metadata = {
  title: "Psicóloga Maria Victoria Confalonieri - Corrientes / Online",
  description:
    "Psicoterapia basada en evidencia para adultos y adolescentes. Atención en Corrientes y modalidad online. Agendá tu consulta por WhatsApp.",
  metadataBase: new URL("https://psico.mv.confalonieri.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Psicóloga Maria Victoria Confalonieri",
    description: "Terapia individual, ansiedad, estrés, vínculos. Presencial y online.",
    url: "/",
    siteName: "Psico Maria Victoria Confalonieri",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${display.variable} ${body.variable} ${buffalo.variable} font-body antialiased bg-[var(--bg)] text-[var(--text)] body-pattern`}
      >
        {children}
      </body>
    </html>
  );
}
