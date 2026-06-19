"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactModal.module.css";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  // ================= VALIDATION =================
  const validate = (fieldValues = form) => {
    const newErrors = {};

    if (!fieldValues.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    } else if (fieldValues.name.trim().length < 2) {
      newErrors.name = "الاسم يجب أن يكون حرفين على الأقل";
    }

    if (!fieldValues.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!fieldValues.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    return newErrors;
  };

  // ================= HANDLE CHANGE =================
  const handleChange = (field, value) => {
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);

    if (touched[field]) {
      setErrors(validate(updatedForm));
    }
  };

  // ================= HANDLE BLUR =================
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    setErrors(validate());
  };

  // ================= SUBMIT =================
  const handleSubmit = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      setLoading(true);

      await emailjs.send(
        "service_fss1tmb", // Service ID
        "template_3bf7u24", // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "bztK8NVNCYi85HaRz", // Public Key
      );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        setTouched({});
      }, 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length > 0;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.mainTitle}>تواصل معنا </h2>

        <div className={styles.grid}>
          {/* ================= FORM ================= */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>أرسل لنا رسالة</h3>

            <div className={styles.row}>
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                />
                {touched.name && errors.name && (
                  <p className={styles.error}>{errors.name}</p>
                )}
              </div>

              <div style={{ width: "100%" }}>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <p className={styles.error}>{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="اكتب رسالتك هنا..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                onBlur={() => handleBlur("message")}
              ></textarea>
              {touched.message && errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={!isFormValid || loading}
            >
              <i className="fa-solid fa-paper-plane"></i>
              {loading ? "جاري الإرسال..." : "ارسال"}
            </button>

            {isSubmitted && (
              <div className={styles.successMessage}>
                ✔ تم إرسال الرسالة بنجاح
              </div>
            )}
          </div>

          {/* ================= DIRECT CONTACT ================= */}
          <div className={styles.directSection}>
            <div>
              <h3 className={styles.sectionTitle}>تواصل معنا مباشرةً</h3>

              <div className={styles.icons}>
                <a target="_blank" href="tel:+966592400524">
                  <div className={styles.iconBox}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </a>

                <a target="_blank" href="mailto:info@primeshield.com.sa">
                  <div className={styles.iconBox}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                </a>

                <a target="_blank" href="https://wa.me/966592400524">
                  <div className={styles.iconBox}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.0818017857325!2d46.63927688835949!3d24.80649139703661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3241e919033%3A0xea8bf6db3845da64!2zUHJpbWUgU2hpZWxkIENvbXBhbnkg2LTYsdmD2Kkg2KjYsdin2YrZhSDYtNmK2YTYrw!5e0!3m2!1sen!2seg!4v1781835906187!5m2!1sen!2seg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
