import { notFound } from "next/navigation";
import ServiceDetailSection from "@/components/sections/ServiceDetail/ServiceDetailSection";
import CTASection from "@/components/sections/CTA/CTASection";
import Footer from "@/components/sections/Footer/Footer";
import { getServiceBySlug, getServiceSlugs } from "@/lib/api";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "خدمة غير موجودة" };

  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.description || "",
    openGraph: {
      title: service.seoTitle || service.title,
      description: service.seoDescription || service.description || "",
      images: service.imageUrl ? [{ url: service.imageUrl }] : [],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceDetailSection service={service} />
      <CTASection />
      <Footer />
    </>
  );
}
