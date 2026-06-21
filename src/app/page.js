import AboutSection from "@/components/sections/About/AboutSection";
import ApprovalsSection from "@/components/sections/Approvals/ApprovalsSection";
import ClientsResultsSection from "@/components/sections/ClientsResults/ClientsResultsSection";
import CTASection from "@/components/sections/CTA/CTASection";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import PartnershipSection from "@/components/sections/Partnership/PartnershipSection";
import ProjectsSection from "@/components/sections/Projects/ProjectsSection";
import ServicesSection from "@/components/sections/Service/ServiceSection";
import VisionSection from "@/components/sections/Vision/VisionSection";
import { getCertificates, getHomePage, getProjects, getServices } from "@/lib/api";
import styles from './page.module.css';

export const revalidate = 300;

export async function generateMetadata() {
  const homePage = await getHomePage();
  return {
    title: "Prime Shield | برايم شيلد",
    description: homePage?.metaDescription || "شركة سعودية رائدة في حلول العزل المائي والحراري",
  };
}

export default async function HomePage() {
  const [homePage, services, projects, certificates] = await Promise.all([
    getHomePage(),
    getServices(20),
    getProjects(50),
    getCertificates(100),
  ]);

  return (
    <main className={styles.section}>
      <HeroSection h1Title={homePage?.h1Title} />
      <AboutSection />
      <VisionSection />
      <ServicesSection services={services} />
      <ClientsResultsSection />
      <ProjectsSection projects={projects} />
      <ApprovalsSection certificates={certificates} />
      <PartnershipSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  );
}
