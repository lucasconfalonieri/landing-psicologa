
"use client";
import Link from "next/link";
import { useMemo } from "react";

export default function WhatsAppButton({ phone, preset }: { phone: string; preset?: string }) {
  const href = useMemo(() => {
    const text = encodeURIComponent(preset ?? "Hola, me gustaría agendar una consulta.");
    return `https://wa.me/${phone}?text=${text}`;
  }, [phone, preset]);

  return (
    <Link
      href={href}
      target="_blank"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full shadow-lg px-5 py-3 text-white font-medium transition hover:opacity-90"
      style={{ background: "#16a458" }}
    >
      WhatsApp
    </Link>
  );
}
