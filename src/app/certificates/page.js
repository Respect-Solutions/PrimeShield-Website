export const metadata = {
  title: "الشهادات",
  description: "شهادات اعتماد برايم شيلد: عقود الشراكة، شهادات اعتماد مقاول منفذ، والتراخيص والاعتمادات الحكومية.",
};

export const revalidate = 300;

import CertificatesSection from '@/components/sections/Certificates/CertificatesSection';
import CertificatesHeroSection from '@/components/sections/CertificatesHero/CertificatesHeroSection';
import CTASection from '@/components/sections/CTA/CTASection';
import Footer from '@/components/sections/Footer/Footer';
import Styles from './page.module.css';
import { getCertificates } from '@/lib/api';

export default async function CertificatesPage() {
  const certificates = await getCertificates(200);

  return (
    <main className={Styles.section}>
      <CertificatesHeroSection />
      <CertificatesSection certificates={certificates} />
      <CTASection />
      <Footer />
    </main>
  );
}
