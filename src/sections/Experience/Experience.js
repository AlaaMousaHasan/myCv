import React from "react";
import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="experience-section">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaBriefcase className="icon" /> {t("about.experience.title")}
      </motion.h2>

      <motion.div
        className="experience-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        transition={{ duration: 0.8 }}
      >
        {/* SWARCO */}
        <div className="experience-item">
          <h3>{t("about.experience.swarco.title")}</h3>
          <p>{t("about.experience.swarco.duration")}</p>
          <ul>
            <li>{t("about.experience.swarco.details.1")}</li>
            <li>{t("about.experience.swarco.details.2")}</li>
            <li>{t("about.experience.swarco.details.3")}</li>
            <li>{t("about.experience.swarco.details.4")}</li>
            <li>{t("about.experience.swarco.details.5")}</li>
          </ul>
        </div>

        {/* OTIS */}
        <div className="experience-item">
          <h3>{t("about.experience.otis.title")}</h3>
          <p>{t("about.experience.otis.duration")}</p>
          <ul>
            <li>{t("about.experience.otis.details.1")}</li>
            <li>{t("about.experience.otis.details.2")}</li>
            <li>{t("about.experience.otis.details.3")}</li>
            <li>{t("about.experience.otis.details.4")}</li>
          </ul>
        </div>

        {/* International Motivation */}
        <div className="experience-item">
          <h3>{t("about.experience.internationalMotivation.title")}</h3>
          <p>{t("about.experience.internationalMotivation.duration")}</p>
          <ul>
            <li>{t("about.experience.internationalMotivation.details.1")}</li>
            <li>{t("about.experience.internationalMotivation.details.2")}</li>
            <li>{t("about.experience.internationalMotivation.details.3")}</li>
          </ul>
        </div>

        {/* 4com */}
        <div className="experience-item">
          <h3>{t("about.experience.4com.title")}</h3>
          <p>{t("about.experience.4com.duration")}</p>
          <ul>
            <li>{t("about.experience.4com.details.1")}</li>
            <li>{t("about.experience.4com.details.2")}</li>
            <li>{t("about.experience.4com.details.3")}</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
