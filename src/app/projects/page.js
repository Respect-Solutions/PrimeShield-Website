export const metadata = {
  title: "المشاريع",
  description: "استعرض مشاريع برايم شيلد المميزة في العزل الهندسي والمقاولات العامة في مختلف مناطق المملكة العربية السعودية.",
};

import Navbar from '@/components/common/Navbar/Navbar'
import CTASection from '@/components/sections/CTA/CTASection'
import Footer from '@/components/sections/Footer/Footer'
import ProjectsHeroSection from '@/components/sections/ProjectsHero/ProjectsHeroSection'
import ProjectsPage from '@/components/sections/ProjectsPage/ProjectsPageSection'
import React from 'react'
import Styles from './page.module.css'

export default function Projects() {
  return (
    <main className={Styles.section}>
      <Navbar/>
      <ProjectsHeroSection />
      <ProjectsPage />
      <CTASection />
      <Footer/>
    </main>
  )
}
