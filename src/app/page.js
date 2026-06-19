import AboutSection from "@/components/sections/About/AboutSection";
import ClientsResultsSection from "@/components/sections/ClientsResults/ClientsResultsSection";
import CTASection from "@/components/sections/CTA/CTASection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import PartnershipSection from "@/components/sections/Partnership/PartnershipSection";
import ProjectsApprovalsSection from "@/components/sections/ProjectsApprovals/ProjectsApprovalsSection";
import ServicesSection from "@/components/sections/Service/ServiceSection";
import VisionSection from "@/components/sections/Vision/VisionSection";
import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.section}>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ServicesSection />
      <ClientsResultsSection />
      <ProjectsApprovalsSection/>
      <PartnershipSection />
      <CTASection />
      <FAQSection />
      <Footer/>
    </main>
  );
}
