import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Approach from '@/components/Approach'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import ContactCta from '@/components/ContactCta'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'


export default function Page() {
return (
<>
<Header />
<main>
<Hero />
<Services />
<About />
<Approach />
<Testimonials />
<Faq />
<ContactCta />
</main>
<Footer />
<JsonLd />
</>
)
}