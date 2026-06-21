import Image from "next/image";
import Link from "next/link";
import styles from "./CertificatesSection.module.css";

function getAnimation(index) {
  if (index % 3 === 0) return "fade-right";
  if (index % 3 === 1) return "fade-up";
  return "fade-left";
}

export default function CertificatesSection({ certificates = [] }) {
  if (certificates.length === 0) {
    return (
      <section id="certificates" className={styles.section}>
        <div className="container">
          <p className={styles.empty}>لا توجد شهادات حالياً</p>
        </div>
      </section>
    );
  }

  // Group by category; uncategorised items go under ""
  const groups = {};
  for (const cert of certificates) {
    const key = cert.category || "";
    if (!groups[key]) groups[key] = [];
    groups[key].push(cert);
  }

  return (
    <section id="certificates" className={styles.section}>
      <div className="container">
        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className={styles.block}>
            {category && <h2 className={styles.heading}>{category}</h2>}

            <div className={styles.grid}>
              {items.map((cert, i) => (
                <Link
                  key={cert.id}
                  href={`/certificates/${cert.slug}`}
                  className={styles.card}
                  data-aos={getAnimation(i)}
                  data-aos-delay={String(i * 80)}
                >
                  {cert.imageUrl && (
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      width={800}
                      height={600}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
