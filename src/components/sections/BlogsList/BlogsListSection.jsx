import Link from "next/link";
import Image from "next/image";
import styles from "./BlogsListSection.module.css";
import { formatArabicDate } from "@/lib/api";

export default function BlogsListSection({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return (
      <section id="blogs-list" className={styles.section}>
        <div className="container">
          <p className={styles.empty}>لا توجد مقالات حالياً، تابعونا قريباً.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs-list" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>أحدث المقالات</h2>

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                {blog.imageUrl ? (
                  <Image
                    fill
                    src={blog.imageUrl}
                    alt={blog.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <i className="fa-solid fa-newspaper"></i>
                  </div>
                )}
              </div>

              <div className={styles.body}>
                {blog.date && (
                  <span className={styles.date}>
                    <i className="fa-regular fa-calendar"></i>
                    {formatArabicDate(blog.date)}
                  </span>
                )}

                <h3 className={styles.title}>{blog.title}</h3>

                {blog.intro && (
                  <p className={styles.intro}>
                    {blog.intro.length > 140
                      ? blog.intro.slice(0, 140) + "…"
                      : blog.intro}
                  </p>
                )}

                <span className={styles.readMore}>
                  اقرأ المزيد
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
