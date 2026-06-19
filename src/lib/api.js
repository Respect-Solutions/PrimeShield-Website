const CMS_BASE =
  process.env.NEXT_PUBLIC_CMS_API_URL ||
  "https://seodashboard.respect-solutions.cloud";

const BLOG_TYPE = process.env.BLOG_PAGE_TYPE || "blog.BlogPage";

function imageUrl(image) {
  if (!image) return null;
  const raw =
    image?.meta?.download_url ||
    image?.download_url ||
    image?.url ||
    null;
  if (!raw) return null;
  return raw.startsWith("http") ? raw : `${CMS_BASE}${raw}`;
}

export async function getBlogs(limit = 20) {
  try {
    const res = await fetch(
      `${CMS_BASE}/api/v2/pages/?type=${BLOG_TYPE}&fields=title,date,intro,slug,image&limit=${limit}&order=-first_published_at`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || item.slug || String(item.id),
      date: item.date || item.meta?.first_published_at || null,
      intro: item.intro || item.search_description || "",
      imageUrl: imageUrl(item.image),
    }));
  } catch {
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(
      `${CMS_BASE}/api/v2/pages/?slug=${slug}&type=${BLOG_TYPE}&fields=*`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return {
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || slug,
      date: item.date || item.meta?.first_published_at || null,
      intro: item.intro || item.search_description || "",
      imageUrl: imageUrl(item.image),
      body: item.body ?? null,
      seoTitle: item.meta?.seo_title || item.title,
      seoDescription: item.meta?.search_description || item.intro || "",
    };
  } catch {
    return null;
  }
}

export async function getBlogSlugs() {
  try {
    const res = await fetch(
      `${CMS_BASE}/api/v2/pages/?type=${BLOG_TYPE}&fields=slug&limit=100`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map(
      (item) => item.meta?.slug || item.slug || String(item.id)
    );
  } catch {
    return [];
  }
}

export function formatArabicDate(dateStr) {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}
