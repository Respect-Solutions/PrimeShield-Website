export const metadata = {
  title: "خدماتنا",
  description: "خدمات برايم شيلد: العزل المائي والحراري، إيبوكسي الأرضيات والخزانات، أنظمة البولي يوريثان، المعالجة الكريستالية، والمقاولات العامة.",
};

export const revalidate = 300;

import CTASection from '@/components/sections/CTA/CTASection'
import FAQSection from '@/components/sections/FAQ/FAQSection'
import Footer from '@/components/sections/Footer/Footer'
import ServicesHeroSection from '@/components/sections/ServicesHero/ServicesHeroSection'
import ServicesGridSection from '@/components/sections/ServicesGrid/ServicesGridSection'
import { getServices } from '@/lib/api'

export default async function ServicesPage() {
  const services = await getServices(20);

  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection services={services} />
      <FAQSection />
      <CTASection />
      <Footer/>
    </>
  )
}
