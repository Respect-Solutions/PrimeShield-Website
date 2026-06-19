import Navbar from "@/components/common/Navbar/Navbar";
import BlogsHeroSection from "@/components/sections/BlogsHero/BlogsHeroSection";
import BlogsListSection from "@/components/sections/BlogsList/BlogsListSection";
import CTASection from "@/components/sections/CTA/CTASection";
import Footer from "@/components/sections/Footer/Footer";
import { getBlogs } from "@/lib/api";

export const metadata = {
  title: "المقالات",
  description:
    "اطّلع على أحدث مقالات ونصائح برايم شيلد في العزل المائي والحراري والمقاولات العامة.",
};

export const revalidate = 300;

export default async function BlogsPage() {
  const blogs = await getBlogs(20);

  return (
    <>
      <Navbar />
      <BlogsHeroSection />
      <BlogsListSection blogs={blogs} />
      <CTASection />
      <Footer />
    </>
  );
}
