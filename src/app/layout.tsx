import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: 'Psicóloga Maria Victoria Confalonieri - Corrientes / Online',
description: 'Psicoterapia basada en evidencia para adultos y adolescentes. Atención en Corrientes y modalidad online. Agendá tu consulta por WhatsApp.',
metadataBase: new URL('https://psicologa-confalonieri.app'),
alternates: { canonical: '/' },
openGraph: {
title: 'Psicóloga Maria Victoria Confalonieri',
description: 'Terapia individual, ansiedad, estrés, vínculos. Presencial y online.',
url: '/',
siteName: 'Psico Maria Victoria Confalonieri',
images: [{ url: '/hero.jpg', width: 1200, height: 630 }],
locale: 'es_AR',
type: 'website'
}
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es">
<body className={`${inter.className} antialiased bg-[var(--bg)] text-[var(--text)]`}>
{children}
</body>
</html>
)
}