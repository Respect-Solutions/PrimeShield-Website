"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CertificatesSection.module.css";
import AOS from "aos";

const PARTNERS = [
  "/assets/cert-24.jpeg",
  "/assets/cert-25.jpeg",
  "/assets/cert-26.jpeg",
  "/assets/cert-27.jpeg",
  "/assets/cert-28.jpeg",
  "/assets/cert-29.jpeg",
  "/assets/cert-30.jpeg",
  "/assets/cert-31.jpeg",
  "/assets/cert-32.jpeg",
  "/assets/cert-33.jpeg",
  "/assets/cert-20.jpeg",
  "/assets/cert-21.jpeg",
  "/assets/cert-22.jpeg",
  "/assets/cert-23.jpeg",
];

const INSTALLER_CERTS = [
  "/assets/cert-1_result.webp",
  "/assets/cert-2_result.webp",
  "/assets/cert-3_result.webp",
  "/assets/cert-4_result.webp",
  "/assets/cert-5_result.webp",
  "/assets/cert-6_result.webp",
  "/assets/cert-7_result.webp",
  "/assets/cert-8_result.webp",
  "/assets/cert-9_result.webp",
  "/assets/cert-10_result.webp",
  "/assets/cert-18.jpeg",
  "/assets/cert-19.jpeg",
];

const OTHER_CERTS = [
  "/assets/cert-15_result.webp",
  "/assets/cert-16_result.webp",
  "/assets/cert-17_result.webp",
  "/assets/cert-13_result.webp",
  "/assets/cert-14_result.webp",
];

export default function CertificatesSection() {
  const [delayStep, setDelayStep] = useState(80);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setDelayStep(isMobile ? 40 : 80);
    AOS.refresh();
  }, []);

  const getAnimation = (index) => {
    if (index % 3 === 0) return "fade-right";
    if (index % 3 === 1) return "fade-up";
    return "fade-left";
  };

  return (
    <section id="certificates" className={styles.section}>
      <div className="container">
        {/* ===== Section 1 ===== */}
        <div className={styles.block}>
          <h2 className={styles.heading}>عقود وشراكات</h2>

          <div className={styles.grid}>
            {PARTNERS.map((img, i) => (
              <div
                key={i}
                className={styles.card}
                data-aos={getAnimation(i)}
                data-aos-delay={i * delayStep}
              >
                <Image src={img} alt="certificate" width={800} height={600} style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Section 2 ===== */}
        <div className={styles.block}>
          <h2 className={styles.heading}>شهادات اعتماد مقاول منفذ</h2>

          <div className={styles.grid}>
            {INSTALLER_CERTS.map((img, i) => (
              <div
                key={i}
                className={styles.card}
                data-aos={getAnimation(i)}
                data-aos-delay={i * delayStep}
              >
                <Image src={img} alt="certificate" width={800} height={600} style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== Section 3 ===== */}
        <div className={styles.block}>
          <h2 className={styles.heading}>التراخيص والاعتمادات الحكومية</h2>

          <div className={styles.grid}>
            {OTHER_CERTS.map((img, i) => (
              <div
                key={i}
                className={`${styles.card} ${styles.autoHeight}`}
                data-aos={getAnimation(i)}
                data-aos-delay={i * delayStep}
              >
                <Image src={img} alt="certificate" width={800} height={600} style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "20px" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
