"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ApprovalsSection.module.css";

export default function ApprovalsSection({ certificates = [] }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const count = certificates.length;

  const leftIndex = count > 0 ? (active - 1 + count) % count : 0;
  const rightIndex = count > 0 ? (active + 1) % count : 0;

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4000);
  };

  useEffect(() => {
    if (count === 0) return;
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [count]);

  if (count === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>الشهادات</h2>

        <div className={styles.wrapper}>
          {certificates.map((cert, i) => {
            let position = styles.hidden;
            if (i === active) position = styles.active;
            else if (i === leftIndex) position = styles.left;
            else if (i === rightIndex) position = styles.right;

            return (
              <div
                key={cert.id ?? i}
                className={`${styles.card} ${position}`}
                onClick={() => {
                  setActive(i);
                  startInterval();
                }}
              >
                {cert.imageUrl && (
                  <div className={styles.imageWrapper}>
                    <Image
                      fill
                      src={cert.imageUrl}
                      alt={cert.title}
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 60vw, 32vw"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
