"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ServicesTabsSection.module.css";

const TABS = [
  {
    title: "العزل المائي والحراري",
    cards: [
      {
        title: "مميزات الخدمة",
        desc: (
          <ul>
            <li>تقليل استهلاك الطاقة</li>
            <li>حماية الهيكل الخرساني</li>
            <li>إطالة العمر الافتراضي للمبنى</li>
          </ul>
        ),
        image: "/assets/service1_result.webp",
      },
      {
        title: "نطاق أعمال العزل",
        desc: (
          <ul>
            <li>عزل الأسطح المكشوفة والمقلوبة</li>
            <li>عزل الأقبية (Basement Waterproofing)</li>
            <li>عزل الجدران والحوائط الاستنادية</li>
            <li>عزل الحمامات والمطابخ</li>
            <li>عزل الأساسات</li>
          </ul>
        ),
        image: "/assets/service2_result.webp",
      },
    ],
  },
  {
    title: "إيبوكسي الأرضيات والخزانات",
    cards: [
      {
        title: "مميزات الخدمة",
        desc: (
          <ul>
            <li>مقاومة عالية للتآكل</li>
            <li>سطح أملس وسهل التنظيف</li>
            <li>عمر افتراضي طويل</li>
          </ul>
        ),
        image: "/assets/service3_result.webp",
      },
      {
        title: "نطاق أعمال العزل",
        desc: (
          <ul>
            <li>أقبية المباني ومواقف السيارات</li>
            <li>الأرضيات الصناعية</li>
            <li>خزانات المياه</li>
            <li>المباني التجارية والإدارية</li>
          </ul>
        ),
        image: "/assets/service4_result.webp",
      },
    ],
  },
  {
    title: "أنظمة البولي يوريثان",
    cards: [
      {
        title: "مميزات الخدمة",
        desc: (
          <ul>
            <li>مقاومة للأشعة فوق البنفسجية (UV)</li>
            <li>مرونة عالية</li>
            <li>تطبيق سريع وفعال</li>
          </ul>
        ),
        image: "/assets/service5_result.webp",
      },
      {
        title: "نطاق أعمال العزل",
        desc: (
          <ul>
            <li>الأسطح الخرسانية</li>
            <li>الأسطح المعدنية</li>
            <li>الأسطح المعرضة لأشعة الشمس المباشرة</li>
          </ul>
        ),
        image: "/assets/service6_result.webp",
      },
    ],
  },
  {
    title: "المعالجة الكريستالية والحقن",
    cards: [
      {
        title: "مميزات الخدمة",
        desc: (
          <ul>
            <li>مطابقة لمواصفات وزارة الشؤون البلدية</li>
            <li>مواد آمنة ومعتمدة صحيًا</li>
          </ul>
        ),
        image: "/assets/service7_result.webp",
      },
      {
        title: "نطاق أعمال العزل",
        desc: (
          <ul>
            <li>خزانات مياه الشرب</li>
            <li>المسابح</li>
            <li>غرف التفتيش والبيارات</li>
          </ul>
        ),
        image: "/assets/service8_result.webp",
      },
    ],
  },
  {
    title: "المقاولات العامة",
    cards: [
      {
        title: "مميزات الخدمة",
        desc: (
          <ul>
            <li>تنفيذ مطابق للمخططات والمواصفات المعتمدة</li>
            <li>إدارة احترافية تضمن الالتزام بالجدول الزمني</li>
            <li>رقابة جودة مستمرة في جميع مراحل التنفيذ</li>
          </ul>
        ),
        image: "/assets/service9_result.webp",
      },
      {
        title: "نطاق أعمال العزل",
        desc: (
          <ul>
            <li>مشروعات سكنية وتجارية بالكامل</li>
            <li>أعمال الهيكل الخرساني والبنية التحتية</li>
            <li>أعمال التشطيبات الداخلية والخارجية</li>
          </ul>
        ),
        image: "/assets/service10_result.webp",
      },
    ],
  },
];

export default function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="Service" className={styles.section}>
      <div className="container">
        {/* ================= DESKTOP VERSION ================= */}
        <div className={styles.desktopVersion}>
          <div className={styles.tabs}>
            {TABS.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  activeTab === index ? styles.activeTab : ""
                }`}
                onClick={() => {
                  setActiveTab(index);
                  setActiveCard(null);
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {TABS[activeTab].cards.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  activeCard === index ? styles.active : ""
                }`}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
              >
                <Image fill src={card.image} alt={card.title} sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div className={styles.overlay} />
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.desc}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div className={styles.mobileVersion}>
          {TABS.map((tab, tabIndex) => (
            <div key={tabIndex} className={styles.mobileBlock}>
              <h3 className={styles.mobileTitle}>{tab.title}</h3>

              <div className={styles.grid}>
                {tab.cards.map((card, index) => (
                  <div
                    key={index}
                    className={`${styles.card} ${
                      activeCard === `${tabIndex}-${index}` ? styles.active : ""
                    }`}
                    onClick={() =>
                      setActiveCard(
                        activeCard === `${tabIndex}-${index}`
                          ? null
                          : `${tabIndex}-${index}`,
                      )
                    }
                  >
                    <Image fill src={card.image} alt={card.title} sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    <div className={styles.overlay} />
                    <div className={styles.content}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <div className={styles.desc}>{card.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
