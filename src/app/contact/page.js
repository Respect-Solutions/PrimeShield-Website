"use client";

import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
import styles from "./page.module.css";

function gtagReportConversion(url) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18127833743/p-WVCOGv86UcEI-Vg8RD",
      event_callback: () => {
        if (url) window.location = url;
      },
    });
  } else {
    if (url) window.location = url;
  }
}

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61585939864920#",
    icon: "fa-brands fa-facebook-f",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/primeshield.00?igsh=MWpzZ3d4Z2traGhlbQ==",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@primeshield.00?is_from_webapp=1&sender_device=pc",
    icon: "fa-brands fa-tiktok",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prime-shield-3a6a3b3a2",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/PrimeShield00",
    icon: "fa-brands fa-x-twitter",
  },
  {
    name: "Snapchat",
    url: "https://www.snapchat.com/add/primeshield.00",
    icon: "fa-brands fa-snapchat",
  },
  {
    name: "Gmail",
    url: "mailto:primeshield321@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

export default function SocialPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>حساباتنا الرسمية</h1>
            <div className={styles.line}></div>
          </div>

          {/* Social Cards */}
          <div className={styles.cards}>
            {SOCIALS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                onClick={(e) => {
                  e.preventDefault();
                  gtagReportConversion(item.url);
                  setTimeout(() => window.open(item.url, "_blank"), 300);
                }}
              >
                <div className={styles.icon}>
                  <i className={item.icon}></i>
                </div>

                <span className={styles.name}>{item.name}</span>

                <i className={`fa-solid fa-arrow-left ${styles.arrow}`}></i>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
