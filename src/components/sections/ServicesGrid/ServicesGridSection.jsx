import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesGridSection.module.css";

export default function ServicesGridSection({ services = [] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>خدماتنا</h2>
          <div className={styles.line} />
        </div>

        {services.length === 0 ? (
          <p className={styles.empty}>لا توجد خدمات حالياً</p>
        ) : (
          <div className={styles.grid}>
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={String((i % 3) * 100)}
              >
                {service.imageUrl && (
                  <div className={styles.imageBox}>
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                )}

                <div className={styles.content}>
                  <h3 className={styles.title}>{service.title}</h3>
                  {service.description && (
                    <p className={styles.desc}>{service.description}</p>
                  )}
                  <span className={styles.cta}>
                    تفاصيل الخدمة
                    <i className="fa-solid fa-arrow-left" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
