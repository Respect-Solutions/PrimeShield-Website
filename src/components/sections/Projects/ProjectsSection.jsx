"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ProjectsSection.module.css";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  // 🔁 Auto switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>مشاريعنا المميزة</h2>

        <div className={styles.projectCard}>
          <Image
            key={active}
            fill
            src={PROJECTS[active].image}
            alt={PROJECTS[active].title}
            className={styles.image}
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h3 className={styles.projectTitle}>
              {PROJECTS[active].title}
              <span className={styles.line}></span>
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
