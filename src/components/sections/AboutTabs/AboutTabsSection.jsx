"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AboutTabsSection.module.css";

const TABS = [
  {
    title: "نبذة عن برايم شيلد",
    content: `برايم شيلد هي شركة عزل مائي وحراري في الرياض تقدم حلولًا هندسية متكاملة لحماية المباني السكنية والتجارية والصناعية في مختلف مناطق المملكة العربية السعودية. نمتلك خبرة تمتد لأكثر من 12 عامًا في أعمال العزل وأكثر من 40 عامًا في المقاولات العامة، ما يجعلنا شريكًا موثوقًا للمشاريع الكبرى والصغرى على حد سواء.
`,
    image: "/assets/aboutTabs-1_result.webp",
  },
  {
    title: "منهجنا في العمل",
    content: `شركة سعودية متخصصة في العزل المائي والحراري ... نقدم حلول عزل عملية تدوم طويلًا.
نعتمد على خبرة هندسية ومواد معتمدة وتنفيذ احترافي - نخدم عملاءنا في الرياض وكافة أنحاء السعودية.نلتزم بأفضل الممارسات العالمية في العزل ومعالجة الخرسانة وحماية المباني.`,
    image: "/assets/aboutTabs-2_result.webp",
  },
  {
    title: "خبرتنا وقيمتنا المضافة",
    content: `أكثر من 12 سنة خبرة متخصصة في العزل المائي والحراري خبرة تتجاوز 40 سنة في قطاع المقاولات العامة فريق هندسي وفني مؤهل ومعتمد استخدام مواد عزل مطابقة للمواصفات السعودية والخليجية
تنفيذ مشاريع ضخمة وفق جداول زمنية دقيقة`,
    image: "/assets/aboutTabs-3_result.webp",
  },
];

export default function AboutTabsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className="container">
        {/* ================= DESKTOP VERSION ================= */}
        <div className={styles.desktopVersion}>
          <div className={styles.tabs}>
            {TABS.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  index === active ? styles.activeTab : ""
                }`}
                onClick={() => setActive(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.textBox}>
              <p>{TABS[active].content}</p>
            </div>

            <div className={styles.imageBox}>
              <Image fill src={TABS[active].image} alt="about" sizes="(max-width: 768px) 100vw, 35vw" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className={styles.mobileVersion}>
          {TABS.map((item, index) => (
            <div key={index} className={styles.mobileBlock}>
              <h3 className={styles.mobileTitle}>{item.title}</h3>

              <div className={styles.contentWrapper}>
                <div className={styles.textBox}>
                  <p>{item.content}</p>
                </div>

                <div className={styles.imageBox}>
                  <Image fill src={item.image} alt={item.title} sizes="100vw" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
