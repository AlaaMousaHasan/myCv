import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_ehtzjbk",          // EmailJS service ID
        "template_382sntc",         // EmailJS template ID
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message
        },
        "nuj9sW0DbylocH4I_"         // EmailJS public key
      );

      alert(t("contact.alertSuccess"));
    } catch (err) {
      console.error("Email error:", err);
      alert(t("contact.alertFail"));
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </header>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>{t("contact.formTitle")}</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="form-group">
              <label>{t("contact.form.name")}</label>
              <input
                type="text"
                placeholder={t("contact.form.namePlaceholder")}
                {...register("name", {
                  required: t("contact.errors.required")
                })}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>{t("contact.form.email")}</label>
              <input
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                {...register("email", {
                  required: t("contact.errors.required"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("contact.errors.invalidEmail")
                  }
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div className="form-group">
              <label>{t("contact.form.subject")}</label>
              <input
                type="text"
                placeholder={t("contact.form.subjectPlaceholder")}
                {...register("subject", {
                  required: t("contact.errors.required")
                })}
              />
              {errors.subject && (
                <p className="error-message">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="form-group">
              <label>{t("contact.form.message")}</label>
              <textarea
                rows="5"
                placeholder={t("contact.form.messagePlaceholder")}
                {...register("message", {
                  required: t("contact.errors.required")
                })}
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="btn-submit">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>{t("contact.infoTitle")}</h2>

          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:alaamousahassan@gmail.com">
                {t("contact.info.email")}
              </a>
            </li>

            <li>
              <FaPhone className="contact-icon" />
              {t("contact.info.phone")}
            </li>

            <li>
              <FaMapMarkerAlt className="contact-icon" />
              {t("contact.info.address")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
