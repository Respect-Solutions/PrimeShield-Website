import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsPageSection.module.css";

export default function ProjectsPageSection({ projects = [] }) {
  if (projects.length === 0) {
    return (
      <section className={styles.section}>
        <div className="container">
          <p className={styles.empty}>لا توجد مشاريع حالياً</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={styles.card}
              data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={String((i % 4) * 100)}
            >
              {project.imageUrl && (
                <Image
                  fill
                  src={project.imageUrl}
                  alt={project.title}
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              )}
              <div className={styles.overlay} />
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
