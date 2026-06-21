export const metadata = {
  title: "المشاريع",
  description: "استعرض مشاريع برايم شيلد المميزة في العزل الهندسي والمقاولات العامة في مختلف مناطق المملكة العربية السعودية.",
};

export const revalidate = 300;

import CTASection from '@/components/sections/CTA/CTASection'
import Footer from '@/components/sections/Footer/Footer'
import ProjectsHeroSection from '@/components/sections/ProjectsHero/ProjectsHeroSection'
import ProjectsPageSection from '@/components/sections/ProjectsPage/ProjectsPageSection'
import Styles from './page.module.css'
import { getProjects } from '@/lib/api'

export default async function Projects() {
  const projects = await getProjects(100);

  return (
    <main className={Styles.section}>
      <ProjectsHeroSection />
      <ProjectsPageSection projects={projects} />
      <CTASection />
      <Footer/>
    </main>
  )
}
