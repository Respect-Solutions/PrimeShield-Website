"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectsPageSection.module.css";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPageSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const sections = [
    PROJECTS.slice(0, 4),
    PROJECTS.slice(4, 10),
    PROJECTS.slice(10, 16),
    PROJECTS.slice(16),
  ];

  return (
    <>
      {sections.map((group, index) => (
        <section
          key={index}
          className={`${styles.section} ${
            index % 2 === 0 ? styles.dark : styles.yellow
          }`}
        >
          <div className="container">
            <div className={styles.grid}>
              {group.map((project, i) => {
                const isRightColumn = i % 2 === 0;
                // أول عنصر في الصف بيكون يمين (عشان RTL)

                return (
                  <div
                    key={i}
                    className={styles.card}
                    data-aos={isRightColumn ? "fade-left" : "fade-right"}
                    data-aos-delay={i * 100}
                  >
                    <Image fill src={project.image} alt={project.title} sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    <div className={styles.overlay} />
                    <div className={styles.content}>
                      <h3 className={styles.title}>{project.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
