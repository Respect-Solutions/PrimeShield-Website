import { notFound } from "next/navigation";
import BlogDetailSection from "@/components/sections/BlogDetail/BlogDetailSection";
import CTASection from "@/components/sections/CTA/CTASection";
import Footer from "@/components/sections/Footer/Footer";
import { getBlogBySlug, getBlogSlugs } from "@/lib/api";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);
  if (!blog) return { title: "مقال غير موجود" };

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.intro || "",
    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.intro || "",
      images: blog.imageUrl ? [{ url: blog.imageUrl }] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) notFound();

  return (
    <>
      <BlogDetailSection blog={blog} />
      <CTASection />
      <Footer />
    </>
  );
}
