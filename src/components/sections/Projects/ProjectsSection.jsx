"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection({ projects = [] }) {
  const [active, setActive] = useState(0);
  const count = projects.length;

  useEffect(() => {
    if (count === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4000);
    return () => clearInterval(interval);
  }, [count]);

  if (count === 0) return null;

  const project = projects[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>مشاريعنا المميزة</h2>

        <div className={styles.projectCard}>
          {project.imageUrl && (
            <Image
              key={active}
              fill
              src={project.imageUrl}
              alt={project.title}
              className={styles.image}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          )}

          <div className={styles.overlay} />

          <div className={styles.content}>
            <div>
              <h3 className={styles.projectTitle}>
                {project.title}
                <span className={styles.line} />
              </h3>
              {project.slug && (
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.detailLink}
                >
                  تفاصيل المشروع
                  <i className="fa-solid fa-arrow-left" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {projects.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
