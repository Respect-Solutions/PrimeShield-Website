"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const SOCIALS = [
  {
    url: "https://www.facebook.com/profile.php?id=61585939864920#",
    icon: "fa-brands fa-facebook-f",
  },
  {
    url: "https://www.instagram.com/primeshield.00?igsh=MWpzZ3d4Z2traGhlbQ==",
    icon: "fa-brands fa-instagram",
  },
  {
    url: "https://www.tiktok.com/@primeshield.00?is_from_webapp=1&sender_device=pc",
    icon: "fa-brands fa-tiktok",
  },
  {
    url: "https://www.linkedin.com/in/prime-shield-3a6a3b3a2",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    url: "https://x.com/PrimeShield00",
    icon: "fa-brands fa-x-twitter",
  },
  {
    url: "https://www.snapchat.com/add/primeshield.00",
    icon: "fa-brands fa-snapchat",
  },
  {
    url: "mailto:primeshield321@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* ===== Right Column (Company) ===== */}
          <div className={styles.company}>
            <div className={styles.logoRow}>
              <Image src="/assets/footerLogo_result.webp" alt="Prime Shield" width={120} height={40} style={{ height: "40px", width: "auto" }} />
              <h3 className={styles.companyName}>برايم شيلد</h3>
            </div>

            <p className={styles.description}>
              شركة سعودية رائدة في حلول العزل الهندسي وحماية المنشآت
            </p>

            {/* ===== Social Icons ===== */}
            <div className={styles.socials}>
              {SOCIALS.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* ===== Middle Column (Contact) ===== */}
          <div className={styles.contact}>
            <h4 className={styles.heading}>تواصل معنا</h4>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-phone"></i>
              <span className={styles.phoneNumbers}>
                +966 59 240 0524
                <span className={styles.separator}>|</span>
                +966 56 299 3009
              </span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-globe"></i>
              <span>Primeshield.com.sa</span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                الرياض 13321- منطقة الصحافة - شارع الملك سلمان بن محمد بن سعود
              </span>
            </div>

            <div className={styles.contactItem}>
              <i className="fa-solid fa-envelope"></i>
              <span>info@primeshield.com.sa</span>
            </div>
          </div>

          {/* ===== Left Column (Links) ===== */}
          <div className={styles.links}>
            <h4 className={styles.heading}>روابط سريعة</h4>

            <div className={styles.linksRow}>
              <Link
                href="/"
                className={`${styles.link} ${
                  pathname === "/" ? styles.activeLink : ""
                }`}
              >
                الرئيسية
              </Link>

              <Link
                href="/about"
                className={`${styles.link} ${
                  pathname === "/about" ? styles.activeLink : ""
                }`}
              >
                من نحن
              </Link>
            </div>

            <div className={styles.linksRow}>
              <Link
                href="/services"
                className={`${styles.link} ${
                  pathname === "/services" ? styles.activeLink : ""
                }`}
              >
                خدماتنا
              </Link>

              <Link
                href="/projects"
                className={`${styles.link} ${
                  pathname === "/projects" ? styles.activeLink : ""
                }`}
              >
                المشاريع
              </Link>
            </div>

            <div className={styles.linksRow}>
              <Link
                href="/certificates"
                className={`${styles.link} ${
                  pathname === "/certificates" ? styles.activeLink : ""
                }`}
              >
                الشهادات
              </Link>
              <Link
                href="/contact"
                className={`${styles.link} ${
                  pathname === "/contact" ? styles.activeLink : ""
                }`}
              >
                حساباتنا
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Map Section ===== */}
        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.0818017857325!2d46.63927688835949!3d24.80649139703661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3241e919033%3A0xea8bf6db3845da64!2zUHJpbWUgU2hpZWxkIENvbXBhbnkg2LTYsdmD2Kkg2KjYsdin2YrZhSDYtNmK2YTYrw!5e0!3m2!1sen!2seg!4v1781835906187!5m2!1sen!2seg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.bottomRight}>
            <p>برايم شيلد 2026. جميع الحقوق محفوظة</p>
            <span className={styles.crNumber}>السجل التجاري 7052877623</span>
          </div>

          <div className={styles.bottomLeft}>
            <a href="#">سياسة الخصوصية</a>
            <a href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
