export const metadata = {
  title: "خدماتنا",
  description: "خدمات برايم شيلد: العزل المائي والحراري، إيبوكسي الأرضيات والخزانات، أنظمة البولي يوريثان، المعالجة الكريستالية، والمقاولات العامة.",
};

import Navbar from '@/components/common/Navbar/Navbar'
import CTASection from '@/components/sections/CTA/CTASection'
import FAQSection from '@/components/sections/FAQ/FAQSection'
import Footer from '@/components/sections/Footer/Footer'
import ServicesHeroSection from '@/components/sections/ServicesHero/ServicesHeroSection'
import ServicesTabsSection from '@/components/sections/ServicesTabs/ServicesTabsSection'
import ServicesWrapper from '@/components/sections/ServicesWrapper/ServicesWrapper'
import React from 'react'

export default function ServicesPage() {
  return (
    <>
      <Navbar/>
      <ServicesHeroSection />
      <ServicesTabsSection />
      <ServicesWrapper/>
      <Footer/>
    </>
  )
}
