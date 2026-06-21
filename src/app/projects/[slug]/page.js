import { notFound } from "next/navigation";
import ProjectDetailSection from "@/components/sections/ProjectDetail/ProjectDetailSection";
import CTASection from "@/components/sections/CTA/CTASection";
import Footer from "@/components/sections/Footer/Footer";
import { getProjectBySlug, getProjectSlugs } from "@/lib/api";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "مشروع غير موجود" };

  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.description || "",
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.description || "",
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <ProjectDetailSection project={project} />
      <CTASection />
      <Footer />
    </>
  );
}
