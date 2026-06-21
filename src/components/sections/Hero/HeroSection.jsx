"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HeroSection.module.css";

export default function HeroSection({ h1Title }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1️⃣ Background cinematic motion
      tl.fromTo(
        `.${styles.hero}`,
        { scale: 1.08 },
        { scale: 1, duration: 2.2 }
      );

      // 2️⃣ Overlay fade (depth feeling)
      tl.fromTo(
        `.${styles.overlay}`,
        { opacity: 0.85 },
        { opacity: 0.65, duration: 1.6 },
        0
      );

      // 3️⃣ Title from depth
      tl.fromTo(
        ".hero-title",
        {
          y: 40,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
        },
        0.6
      );

      // 4️⃣ Description
      tl.fromTo(
        ".hero-desc",
        {
          y: 30,
          opacity: 0,
          filter: "blur(4px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
        },
        0.9
      );

      // 5️⃣ CTA (final lock)
      tl.fromTo(
        ".hero-cta",
        {
          y: 20,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
        },
        1.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.overlay} />

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <div className={styles.textBox}>
            <h1 className={`${styles.title} hero-title`}>
              {h1Title || (
                <>
                  <span className={styles.brand}>برايم شيلد |</span>
                  <br />
                  خبرة هندسية في المقاولات العامة و خدمات العزل{" "}
                </>
              )}
            </h1>

            <p className={`${styles.description} hero-desc`}>
              شركة سعوديــــة رائــدة متخصصــة في حلــول العزل المائي والحراري،{" "}
              <span className={styles.highlight}>
                نجمـــــع بيـــــن خبـــــــــــرة تتجـــــاوز 40
                عامًـــــــــــا
              </span>{" "}
              <br />
              وأكثـــر مــن 12 عامًــا من التخصص الدقيــق في أنظمة العزل
              الهندسـي
            </p>
          </div>

          <div className={`${styles.cta} hero-cta`}>
            <div
              className={`${styles.scrollDown} hero-cta`}
              onClick={() => {
                const nextSection = document.querySelector("#About");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <i className="fa-solid fa-angles-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}