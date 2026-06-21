const API =
  process.env.NEXT_PUBLIC_WAGTAIL_API_URL ||
  "http://localhost:8000/api/v2";

// Strip /api/v2 to get the server origin (e.g. http://localhost:8000)
const ORIGIN = API.replace(/\/api\/v2\/?$/, "");

// In development, skip the Data Cache entirely so new CMS content appears
// immediately. In production, cache for 5 minutes.
const CACHE = process.env.NODE_ENV === "development"
  ? { cache: "no-store" }
  : { next: { revalidate: 300 } };

// ── Image helpers ─────────────────────────────────────────────────────────────
// Wagtail sometimes returns relative URLs like /media/images/... — make them
// absolute so next/image can load them.
export function absoluteImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("/")) return `${ORIGIN}${url}`;
  return url;
}

function coverImageUrl(cover_image) {
  if (!cover_image) return null;
  return absoluteImageUrl(cover_image.full_url || cover_image.url || null);
}

// ── Internal: resolve a GenericSectionPage slug → its Wagtail page ID ─────────
// cache:'no-store' prevents Next.js from serving a stale null when a section
// page is created after the first render.
async function getSectionId(slug) {
  try {
    // Strategy 1: filter by slug directly (id is always in the response)
    const r1 = await fetch(
      `${API}/pages/?type=home.GenericSectionPage&slug=${slug}`,
      { cache: "no-store" }
    );
    if (r1.ok) {
      const d1 = await r1.json();
      const id = d1.items?.[0]?.id;
      if (id) return id;
    }

    // Strategy 2: list every section page and match by meta.slug — handles
    // cases where the slug filter returns empty for unexpected reasons.
    const r2 = await fetch(
      `${API}/pages/?type=home.GenericSectionPage&limit=20`,
      { cache: "no-store" }
    );
    if (!r2.ok) return null;
    const d2 = await r2.json();
    console.log(
      `[getSectionId] looking for "${slug}", found sections:`,
      (d2.items || []).map((p) => ({ id: p.id, slug: p.meta?.slug, title: p.title }))
    );
    const match = (d2.items || []).find((item) => item.meta?.slug === slug);
    return match?.id ?? null;
  } catch (e) {
    console.error(`[getSectionId] error for "${slug}":`, e.message);
    return null;
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// BLOGS  (section slug: "blogs")
// ══════════════════════════════════════════════════════════════════════════════

export async function getBlogs(limit = 20) {
  try {
    const sectionId = await getSectionId("blogs");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=title,slug,date,excerpt,cover_image&limit=${limit}&order=-date`,
      CACHE
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || item.slug || String(item.id),
      date: item.date || item.meta?.first_published_at || null,
      intro: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
    }));
  } catch {
    return [];
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&slug=${slug}&fields=title,meta_description,date,excerpt,cover_image,body`,
      CACHE
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
      intro: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
      body: item.body ?? null,
      seoTitle: item.meta?.seo_title || item.title,
      seoDescription: item.meta_description || item.excerpt || "",
    };
  } catch {
    return null;
  }
}

export async function getBlogSlugs() {
  try {
    const sectionId = await getSectionId("blogs");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=slug&limit=100`,
      CACHE
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

// ══════════════════════════════════════════════════════════════════════════════
// SERVICES  (section slug: "services")
// ══════════════════════════════════════════════════════════════════════════════

export async function getServices(limit = 20) {
  try {
    const sectionId = await getSectionId("services");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=title,slug,excerpt,cover_image&limit=${limit}`,
      CACHE
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || item.slug || String(item.id),
      description: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
    }));
  } catch {
    return [];
  }
}

export async function getServiceBySlug(slug) {
  try {
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&slug=${slug}&fields=title,meta_description,excerpt,cover_image,body`,
      CACHE
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return {
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || slug,
      description: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
      body: item.body ?? null,
      seoTitle: item.meta?.seo_title || item.title,
      seoDescription: item.meta_description || item.excerpt || "",
    };
  } catch {
    return null;
  }
}

export async function getServiceSlugs() {
  try {
    const sectionId = await getSectionId("services");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=slug&limit=100`,
      CACHE
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

// ══════════════════════════════════════════════════════════════════════════════
// PROJECTS  (section slug: "projects")
// ══════════════════════════════════════════════════════════════════════════════

export async function getProjects(limit = 50) {
  try {
    const sectionId = await getSectionId("projects");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=title,slug,excerpt,cover_image&limit=${limit}`,
      CACHE
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || item.slug || String(item.id),
      description: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
    }));
  } catch {
    return [];
  }
}

export async function getProjectBySlug(slug) {
  try {
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&slug=${slug}&fields=title,meta_description,excerpt,cover_image,body`,
      CACHE
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return {
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || slug,
      description: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
      body: item.body ?? null,
      seoTitle: item.meta?.seo_title || item.title,
      seoDescription: item.meta_description || item.excerpt || "",
    };
  } catch {
    return null;
  }
}

export async function getProjectSlugs() {
  try {
    const sectionId = await getSectionId("projects");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=slug&limit=200`,
      CACHE
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

// ══════════════════════════════════════════════════════════════════════════════
// CERTIFICATES  (section slug: "certificates")
// ══════════════════════════════════════════════════════════════════════════════

export async function getCertificates(limit = 100) {
  try {
    const sectionId = await getSectionId("certificates");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=title,slug,cover_image,excerpt&limit=${limit}`,
      CACHE
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || String(item.id),
      imageUrl: coverImageUrl(item.cover_image),
      category: item.excerpt || "",
    }));
  } catch {
    return [];
  }
}

export async function getCertificateBySlug(slug) {
  try {
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&slug=${slug}&fields=title,meta_description,excerpt,cover_image,body`,
      CACHE
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return {
      id: item.id,
      title: item.title,
      slug: item.meta?.slug || slug,
      category: item.excerpt || "",
      imageUrl: coverImageUrl(item.cover_image),
      body: item.body ?? null,
      seoTitle: item.meta?.seo_title || item.title,
      seoDescription: item.meta_description || item.excerpt || "",
    };
  } catch {
    return null;
  }
}

export async function getCertificateSlugs() {
  try {
    const sectionId = await getSectionId("certificates");
    if (!sectionId) return [];
    const res = await fetch(
      `${API}/pages/?type=home.GenericDetailPage&child_of=${sectionId}&fields=id&limit=200`,
      CACHE
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items || []).map(
      (item) => item.meta?.slug || String(item.id)
    );
  } catch {
    return [];
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// HOME PAGE  (type: home.GenericHomePage, slug: prime-sheild)
// ══════════════════════════════════════════════════════════════════════════════

export async function getHomePage() {
  try {
    const res = await fetch(
      `${API}/pages/?type=home.GenericHomePage&slug=prime-sheild&fields=h1_title,meta_description`,
      CACHE
    );
    if (!res.ok) return null;
    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return null;
    return {
      h1Title: item.h1_title || "",
      metaDescription: item.meta_description || "",
    };
  } catch {
    return null;
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════════════════════════════════════

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
