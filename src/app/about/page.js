export const metadata = {
  title: "من نحن",
  description: "تعرف على شركة برايم شيلد — خبرة تتجاوز 12 عامًا في العزل المائي والحراري وأكثر من 40 عامًا في المقاولات العامة بالمملكة العربية السعودية.",
};

import AboutHeroSection from '@/components/sections/AboutHero/AboutHeroSection'
import AboutTabsSection from '@/components/sections/AboutTabs/AboutTabsSection'
import AboutVisionMissionSection from '@/components/sections/AboutVisionMission/AboutVisionMissionSection'
import ServicesSection from '@/components/sections/Service/ServiceSection'
import Footer from '@/components/sections/Footer/Footer'
import Styles from './page.module.css'
import AboutWrapper from '@/components/sections/AboutWrapper/AboutWrapper'

export default function AboutPage() {
  return (
    <main className={Styles.section}>
      <AboutHeroSection />
      <AboutTabsSection />
      <AboutVisionMissionSection />
      <ServicesSection />
      <AboutWrapper/>
      <Footer/>
    </main>
  )
}
