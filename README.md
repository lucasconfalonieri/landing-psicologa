# Psicóloga – Landing (Next.js + Tailwind v4)

Landing page para **Maria Victoria Confalonieri (Psicóloga)** construida con **Next.js 15 (App Router)**, **React 19** y **Tailwind CSS v4**.  
Incluye CTA de **WhatsApp**, SEO/OG/JSON-LD, secciones editables y estilos basados en la paleta:

- `#CC7A5E` (brand) · `#F4CFBA` (peach) · `#D5DADB` (mist) · `#5A7577` (accent)

## ✨ Secciones
- Header sticky con navegación y CTA de WhatsApp  
- Hero (presentación + CTA + badges)  
- Services (cards)  
- About (foto controlada + descripción)  
- Approach (stepper de 3 etapas)  
- Testimonials (placeholders listos)  
- FAQ (Radix Accordion + JSON-LD FAQPage)  
- ContactCta (tarjeta + enlaces)  
- Footer (navegación, legal y redes)  
- Página **/legal/privacidad**

---

## 🚀 Requisitos
- Node.js 20+  
- npm 10+

## 🔧 Personalización rápida

- **WhatsApp**
  - Actualizá el número en: `src/components/Header.tsx`, `src/components/ContactCta.tsx`, `src/components/WhatsAppButton.tsx`
  - Formato E.164 sugerido: `543794336568` (o `549...` si corresponde).
- **Dominio / SEO**
  - Editá `metadataBase`, `openGraph` y `title/description` en `src/app/layout.tsx`.
- **Paleta**
  - Ajustá variables en `src/app/globals.css`:
    ```css
    :root {
      --bg: #fffaf7; --text: #2a2a2a; --brand: #CC7A5E;
      --brand-contrast: #ffffff; --accent: #5A7577;
      --muted: #D5DADB; --peach: #F4CFBA;
    }
    ```
- **Imágenes**
  - Reemplazá `/public/hero.jpg` y `/public/portrait.jpg`.
  - Sugerido: `portrait.jpg` ancho ~1200px, JPEG/WEBP calidad 70–80.
- **About**
  - Editá texto y badges en `src/components/About.tsx`.
- **Testimonials**
  - Reemplazá el array `TESTIMONIALS` en `src/components/Testimonials.tsx` con objetos:
    ```ts
    { quote: "…", author: "M., 29", rating?: 1|2|3|4|5, avatarInitials?: "MV" }
    ```
- **FAQ**
  - Completá `FAQS` en `src/components/Faq.tsx`. El JSON-LD se genera solo.
- **Privacidad**
  - Completá Matrícula y `LAST_UPDATED` en `src/app/legal/privacidad/page.tsx`.

---

## 📦 Build y Deploy

```bash
# Desarrollo
npm i
npm run dev

# Build de producción + start
npm run build
npm start

