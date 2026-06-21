"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ServiceSection.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection({ services = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimeout = useRef(null);
  const sectionRef = useRef(null);

  const count = services.length;
  const leftIndex = count > 0 ? (active - 1 + count) % count : 0;
  const rightIndex = count > 0 ? (active + 1) % count : 0;

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 120 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (paused || count === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, count]);

  const handleDotClick = (index) => {
    setActive(index);
    setPaused(true);
    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setPaused(false), 6000);
  };

  if (count === 0) return null;

  return (
    <section ref={sectionRef} className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>خدماتنا</h2>

        <div className={styles.carousel}>
          {services.map((service, i) => {
            let position = styles.hidden;
            if (i === active) position = styles.active;
            else if (i === leftIndex) position = styles.left;
            else if (i === rightIndex) position = styles.right;

            return (
              <div
                key={service.id ?? i}
                className={`${styles.card} ${position}`}
                style={
                  service.imageUrl
                    ? { backgroundImage: `url(${service.imageUrl})` }
                    : undefined
                }
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                  clearTimeout(resumeTimeout.current);
                  resumeTimeout.current = setTimeout(() => setPaused(false), 5000);
                }}
                onMouseEnter={() => i === active && setPaused(true)}
                onMouseLeave={() => i === active && setPaused(false)}
              >
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <div className={styles.line} />
                  <p className={styles.text}>{service.description}</p>
                  {i === active && service.slug && (
                    <Link
                      href={`/services/${service.slug}`}
                      className={styles.detailLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      تفاصيل الخدمة
                      <i className="fa-solid fa-arrow-left" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.dots}>
          {services.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
