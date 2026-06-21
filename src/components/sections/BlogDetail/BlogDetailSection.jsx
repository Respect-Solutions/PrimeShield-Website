import Link from "next/link";
import Image from "next/image";
import styles from "./BlogDetailSection.module.css";
import { formatArabicDate, absoluteImageUrl } from "@/lib/api";

function renderBody(body) {
  if (!body) return null;

  if (typeof body === "string") {
    return (
      <div
        className={styles.richText}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    );
  }

  if (Array.isArray(body)) {
    return body.map((block, i) => {
      const key = block.id || i;

      switch (block.type) {
        case "paragraph":
        case "rich_text":
        case "text":
          return (
            <div
              key={key}
              className={styles.richText}
              dangerouslySetInnerHTML={{ __html: block.value }}
            />
          );

        case "heading":
          return (
            <h2 key={key} className={styles.blockHeading}>
              {typeof block.value === "string"
                ? block.value
                : block.value?.text || ""}
            </h2>
          );

        case "embed_html":
          return (
            <div
              key={key}
              className={styles.richText}
              dangerouslySetInnerHTML={{ __html: block.value }}
            />
          );

        case "image": {
          const imgSrc = absoluteImageUrl(block.value?.url);
          return imgSrc ? (
            <div key={key} className={styles.bodyImage}>
              <Image
                src={imgSrc}
                alt={block.value.alt || ""}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : null;
        }

        case "quote":
        case "block_quote":
          return (
            <blockquote key={key} className={styles.blockQuote}>
              {typeof block.value === "string"
                ? block.value
                : block.value?.quote || block.value?.text || ""}
            </blockquote>
          );

        default:
          if (typeof block.value === "string" && block.value.trim()) {
            return (
              <div
                key={key}
                className={styles.richText}
                dangerouslySetInnerHTML={{ __html: block.value }}
              />
            );
          }
          return null;
      }
    });
  }

  return null;
}

export default function BlogDetailSection({ blog }) {
  return (
    <article className={styles.article}>
      {/* ===== Back Link ===== */}
      <div className="container">
        <Link href="/blogs" className={styles.backLink}>
          <i className="fa-solid fa-arrow-right"></i>
          العودة إلى المقالات
        </Link>
      </div>

      {/* ===== Hero Image ===== */}
      {blog.imageUrl && (
        <div className={styles.heroImage}>
          <Image
            fill
            src={blog.imageUrl}
            alt={blog.title}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
      )}

      {/* ===== Content ===== */}
      <div className="container">
        <div className={styles.content}>
          {/* Meta */}
          <div className={styles.meta}>
            {blog.date && (
              <span className={styles.date}>
                <i className="fa-regular fa-calendar"></i>
                {formatArabicDate(blog.date)}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className={styles.title}>{blog.title}</h1>

          {/* Intro */}
          {blog.intro && <p className={styles.intro}>{blog.intro}</p>}

          {/* Divider */}
          <div className={styles.divider} />

          {/* Body */}
          <div className={styles.body}>{renderBody(blog.body)}</div>
        </div>
      </div>
    </article>
  );
}
