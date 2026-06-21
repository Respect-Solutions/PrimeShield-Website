import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceDetailSection.module.css";
import { absoluteImageUrl } from "@/lib/api";

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
        case "rich_text":
        case "paragraph":
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
        default:
          return null;
      }
    });
  }

  return null;
}

export default function ServiceDetailSection({ service }) {
  return (
    <article className={styles.article}>
      {/* ===== Hero ===== */}
      <div className={styles.hero}>
        {service.imageUrl && (
          <>
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.heroOverlay} />
          </>
        )}
        <div className={styles.heroContent}>
          <Link href="/services" className={styles.back}>
            <i className="fa-solid fa-arrow-right" />
            العودة إلى الخدمات
          </Link>
          <h1 className={styles.heroTitle}>{service.title}</h1>
        </div>
      </div>

      {/* ===== Body ===== */}
      <div className={styles.body}>
        <div className="container">
          {service.description && (
            <p className={styles.intro}>{service.description}</p>
          )}
          {renderBody(service.body)}
        </div>
      </div>
    </article>
  );
}
