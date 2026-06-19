"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AboutCardsSection.module.css";

const CARDS = [
  {
    title: "اعتماداتنا الرسمية",
    desc: (
      <ul>
        <li>سجل تجاري معتمد في المملكة العربية السعودية</li>
        <li>اشتراك الغرفة التجارية بالرياض</li>
        <li>شهادة تسجيل ضريبة القيمة المضافة</li>
        <li>الالتزام بجميع الأنظمة واللوائح السعودية</li>
      </ul>
    ),
    image: "/assets/about-2_result.webp",
  },
  {
    title: "فريقنا الهندسي",
    desc: `يضم فريق برايم شيلد نخبة من المهندسين، والمشرفين،
والفنيين ،والمتخصصين 
في العزل المائي والحراري يعملون وفق خطط مدروسة  لضمان أعلى جودة تنفيذ في جميع مشاريعنا 
داخل الرياض وخارجها   `,
    image: "/assets/about1_result.webp",
  },
];

export default function AboutCardsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {CARDS.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <Image fill src={card.image} alt={card.title} sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: "cover" }} />

              <div className={styles.overlay} />

              <div className={styles.content}>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.title}>{card.title}</h3>
                </div>
                <div className={styles.desc}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
