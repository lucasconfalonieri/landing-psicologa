export default function JsonLd() {
const data = {
'@context': 'https://schema.org',
'@type': 'Psychologist',
name: 'Maria Victoria Confalonieri',
areaServed: 'Corrientes, Argentina',
image: 'https://tudominio.com/portrait.jpg',
url: 'https://tudominio.com/',
telephone: '+54 379 4395617',
address: {
'@type': 'PostalAddress',
addressLocality: 'Corrientes',
addressCountry: 'AR'
},
sameAs: [
'https://www.instagram.com/psico.mv.confalonieri/'
]
}
return (
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)
}