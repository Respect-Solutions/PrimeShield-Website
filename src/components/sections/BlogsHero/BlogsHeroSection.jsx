"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./BlogsHeroSection.module.css";

export default function BlogsHeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        `.${styles.hero}`,
        { scale: 1.08 },
        { scale: 1, duration: 2.2 }
      );
      tl.fromTo(
        `.${styles.overlay}`,
        { opacity: 0.85 },
        { opacity: 0.65, duration: 1.6 },
        0
      );
      tl.fromTo(
        ".blogs-hero-title",
        { y: 40, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2 },
        0.6
      );
      tl.fromTo(
        ".blogs-hero-desc",
        { y: 30, opacity: 0, filter: "blur(4px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
        0.9
      );
      tl.fromTo(
        ".blogs-hero-cta",
        { y: 20, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        1.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.overlay} />

      <div className="container">
        <div className={styles.content}>
          <div className={styles.textBox}>
            <h1 className={`${styles.title} blogs-hero-title`}>
              المقالات والأخبار
              <br />
              كل ما يخص عالم العزل والمقاولات
            </h1>

            <p className={`${styles.description} blogs-hero-desc`}>
              اطّلع على{" "}
              <span className={styles.highlight}>
                أحدث المقالات والنصائح الهندسية
              </span>{" "}
              من فريق خبراء برايم شيلد في مجالات العزل المائي والحراري
              والمقاولات العامة.
            </p>
          </div>

          <div className={`${styles.cta} blogs-hero-cta`}>
            <div
              className={styles.scrollDown}
              onClick={() => {
                const next = document.querySelector("#blogs-list");
                if (next) next.scrollIntoView({ behavior: "smooth" });
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
