"use client";

import Image from "next/image";
import styles from "./ClientsSection.module.css";

const CLIENTS = [
  {
    name: ["شركة", "ID work global"],
    logo: "/assets/c11.png",
  },
  {
    name: ["شركة روشن"],
    logo: "/assets/c2.png",
  },
  {
    name: ["شركة ارمادا", "العالمية"],
    logo: "/assets/c8.png",
  },
  {
    name: ["شركة الراجحي للصناعة", "والتجارة الوقفية"],
    logo: "/assets/c7.png",
  },
  {
    name: ["شركة تالاريا", "للتطوير العقاري"],
    logo: "/assets/c6.png",
  },
  {
    name: ["شركة دار بيات", "للتطوير العقاري"],
    logo: "/assets/c5.png",
  },
  {
    name: ["شركة وهلة", "للتطوير العقاري"],
    logo: "/assets/c4.png",
  },
  {
    name: ["شركة المسكن المشيد"],
    logo: "/assets/c2.png",
  },
  {
    name: ["شركة مشهد الإعمار", "للمقاولات العامة"],
  },
  {
    name: ["شركة خالد الماجد", "للتطوير العقاري"],
    logo: "/assets/c1.png",
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>عملاؤنا شركاء نجاحنا</h2>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.name}>
                {client.name.map((line, index) => (
                  <span key={index}>{line}</span>
                ))}
              </div>

              <div className={styles.logoWrapper}>
                {client.logo && <Image src={client.logo} alt="client logo" width={60} height={60} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
