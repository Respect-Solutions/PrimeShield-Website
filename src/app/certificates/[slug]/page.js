import { notFound } from "next/navigation";
import CertificateDetailSection from "@/components/sections/CertificateDetail/CertificateDetailSection";
import CTASection from "@/components/sections/CTA/CTASection";
import Footer from "@/components/sections/Footer/Footer";
import { getCertificateBySlug, getCertificateSlugs } from "@/lib/api";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getCertificateSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const certificate = await getCertificateBySlug(slug);
  if (!certificate) return { title: "شهادة غير موجودة" };

  return {
    title: certificate.seoTitle || certificate.title,
    description: certificate.seoDescription || certificate.category || "",
    openGraph: {
      title: certificate.seoTitle || certificate.title,
      images: certificate.imageUrl ? [{ url: certificate.imageUrl }] : [],
    },
  };
}

export default async function CertificateDetailPage({ params }) {
  const { slug } = await params;
  const certificate = await getCertificateBySlug(slug);

  if (!certificate) notFound();

  return (
    <>
      <CertificateDetailSection certificate={certificate} />
      <CTASection />
      <Footer />
    </>
  );
}
