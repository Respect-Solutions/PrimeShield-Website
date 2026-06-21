import Image from "next/image";
import Link from "next/link";
import styles from "./CertificateDetailSection.module.css";

export default function CertificateDetailSection({ certificate }) {
  return (
    <article className={styles.article}>
      <div className="container">
        <Link href="/certificates" className={styles.back}>
          <i className="fa-solid fa-arrow-right" />
          العودة إلى الشهادات
        </Link>

        <h1 className={styles.title}>{certificate.title}</h1>

        {certificate.category && (
          <p className={styles.category}>{certificate.category}</p>
        )}

        {certificate.imageUrl && (
          <div className={styles.imageWrapper}>
            <Image
              src={certificate.imageUrl}
              alt={certificate.title}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        )}
      </div>
    </article>
  );
}
