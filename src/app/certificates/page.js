export const metadata = {
  title: "الشهادات",
  description: "شهادات اعتماد برايم شيلد: عقود الشراكة، شهادات اعتماد مقاول منفذ، والتراخيص والاعتمادات الحكومية.",
};

import Navbar from '@/components/common/Navbar/Navbar'
import CertificatesSection from '@/components/sections/Certificates/CertificatesSection'
import CertificatesHeroSection from '@/components/sections/CertificatesHero/CertificatesHeroSection'
import CTASection from '@/components/sections/CTA/CTASection'
import Footer from '@/components/sections/Footer/Footer'
import PartnershipSection from '@/components/sections/Partnership/PartnershipSection'
import React from 'react'
import Styles from './page.module.css'

export default function CertificatesPage() {
  return (
    <main className={Styles.section}>
      <Navbar />
      <CertificatesHeroSection />
      <CertificatesSection />
      <CTASection />
      <Footer/>
    </main>
  )
}
