"use client";

import styles from "./AboutVisionMissionSection.module.css";

export default function AboutVisionMissionSection() {

  return (
    <section className={styles.section}>
      <div className="container">
        {/* ===== Vision ===== */}
        <div className={styles.boxWrapper} data-aos="fade-left">
          <svg
            className={styles.bgSvg}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M40 0 H960 Q1000 0 1000 40 V500 Q1000 540 960 540 H720 Q680 540 680 500 V360 Q680 320 640 320 H40 Q0 320 0 280 V40 Q0 0 40 0 Z"
              fill="#0e0e0e"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
          </svg>

          <div className={styles.content}>
            <p className={styles.text}>
              أن نصبح المرجع الأكثر ثقة واحترافاً في قطاع العزل والمقاولات
              بالسعودية
            </p>
            <h3 className={styles.title}>رؤيتنا</h3>
          </div>
        </div>

        {/* ===== Mission ===== */}
        <div className={styles.boxWrapperMission} data-aos="fade-right">
          <svg
            className={styles.bgSvg}
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 60 H 338 Q 375 60 376 90 V 240 Q 377 280 400 280 H 960 Q 1000 285 1000 320 V 560 Q 1000 600 960 600 H 40 Q 0 600 0 560 V 100 Q 0 60 40 60 Z"
              fill="#0e0e0e"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
          </svg>

          <div className={styles.content2}>
            <h3 className={styles.title2}>رسالتنا</h3>
            <p className={styles.text}>
              تقديم حلول عزل متكاملة ومستدامة تحمي المباني من الزمن والمناخ،
              وتبني علاقات طويلة الأمد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
