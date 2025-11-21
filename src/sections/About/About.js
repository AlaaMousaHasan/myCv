import React, { useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaUniversity, FaTools } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const [showExperienceDetails, setShowExperienceDetails] = useState(false);
  const [showSkillsDetails, setShowSkillsDetails] = useState(false);
  const [showMasterDetails, setShowMasterDetails] = useState(false);
  const [showBachelorDetails, setShowBachelorDetails] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about-section">
      {/* Header */}
      <div className="header-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t("header.name")}
        </motion.h1>

        <div className="header-divider"></div>

        <motion.h2
          className="about-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("header.title")}
        </motion.h2>

        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("header.description")}
        </motion.p>
      </div>

      {/* Skills */}
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        transition={{ duration: 1 }}
      >
        <h3>
          <FaTools className="icon" /> {t("about.skills.title")}
        </h3>

        <div className="skills-card">
          <ul className="skills-list">
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.programming")}
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.softwareTools")}
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.frameworks")}
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.projectManagement")}
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.database")}
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {t("about.skills.languages")}
            </motion.li>
          </ul>

          <button
            className="expand-btn"
            onClick={() => setShowSkillsDetails(!showSkillsDetails)}
          >
            {showSkillsDetails
              ? t("about.skills.readLess")
              : t("about.skills.readMore")}
          </button>

          {showSkillsDetails && (
            <motion.div
              className="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <ul>
                <li>{t("about.skills.details.testing")}</li>
                <li>{t("about.skills.details.systems")}</li>
                <li>{t("about.skills.details.modeling")}</li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h3>
          <FaBriefcase className="icon" /> {t("about.experience.title")}
        </h3>

        <div className="experience-card">
          <p>
            <strong>{t("about.experience.swarco.title")}</strong> –{" "}
            {t("about.experience.swarco.duration")}
          </p>
          <p>
            <strong>{t("about.experience.otis.title")}</strong> –{" "}
            {t("about.experience.otis.duration")}
          </p>
          <p>
            <strong>{t("about.experience.internationalMotivation.title")}</strong>{" "}
            – {t("about.experience.internationalMotivation.duration")}
          </p>
          <p>
            <strong>{t("about.experience.4com.title")}</strong> –{" "}
            {t("about.experience.4com.duration")}
          </p>

          <button
            className="expand-btn"
            onClick={() =>
              setShowExperienceDetails(!showExperienceDetails)
            }
          >
            {showExperienceDetails
              ? t("about.skills.readLess")
              : t("about.skills.readMore")}
          </button>

          {showExperienceDetails && (
            <motion.div
              className="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              {/* SWARCO */}
              <div className="timeline-item">
                <h4>{t("about.experience.swarco.title")}</h4>
                <ul>
                  <li>{t("about.experience.swarco.details.1")}</li>
                  <li>{t("about.experience.swarco.details.2")}</li>
                  <li>{t("about.experience.swarco.details.3")}</li>
                  <li>{t("about.experience.swarco.details.4")}</li>
                  <li>{t("about.experience.swarco.details.5")}</li>
                </ul>
              </div>

              {/* OTIS */}
              <div className="timeline-item">
                <h4>{t("about.experience.otis.title")}</h4>
                <ul>
                  <li>{t("about.experience.otis.details.1")}</li>
                  <li>{t("about.experience.otis.details.2")}</li>
                  <li>{t("about.experience.otis.details.3")}</li>
                  <li>{t("about.experience.otis.details.4")}</li>
                </ul>
              </div>

              {/* International Motivation */}
              <div className="timeline-item">
                <h4>
                  {t("about.experience.internationalMotivation.title")}
                </h4>
                <ul>
                  <li>
                    {t(
                      "about.experience.internationalMotivation.details.1"
                    )}
                  </li>
                  <li>
                    {t(
                      "about.experience.internationalMotivation.details.2"
                    )}
                  </li>
                  <li>
                    {t(
                      "about.experience.internationalMotivation.details.3"
                    )}
                  </li>
                </ul>
              </div>

              {/* 4com */}
              <div className="timeline-item">
                <h4>{t("about.experience.4com.title")}</h4>
                <ul>
                  <li>{t("about.experience.4com.details.1")}</li>
                  <li>{t("about.experience.4com.details.2")}</li>
                  <li>{t("about.experience.4com.details.3")}</li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h3>
          <FaUniversity className="icon" /> {t("about.education.title")}
        </h3>

        <div className="education-card">
          {/* Master */}
          <p>
            <strong>{t("about.education.master.title")}</strong> –{" "}
            {t("about.education.master.institution")}
          </p>
          <button
            className="expand-btn"
            onClick={() => setShowMasterDetails(!showMasterDetails)}
          >
            {showMasterDetails
              ? t("about.skills.readLess")
              : t("about.skills.readMore")}
          </button>

          {showMasterDetails && (
            <motion.div
              className="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <ul>
                <li>{t("about.education.master.details.1")}</li>
                <li>{t("about.education.master.details.2")}</li>
                <li>{t("about.education.master.details.3")}</li>
              </ul>
            </motion.div>
          )}

          {/* Bachelor */}
          <p>
            <strong>{t("about.education.bachelor.title")}</strong> –{" "}
            {t("about.education.bachelor.institution")}
          </p>

          <button
            className="expand-btn"
            onClick={() => setShowBachelorDetails(!showBachelorDetails)}
          >
            {showBachelorDetails
              ? t("about.skills.readLess")
              : t("about.skills.readMore")}
          </button>

          {showBachelorDetails && (
            <motion.div
              className="expanded-content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <ul>
                <li>{t("about.education.bachelor.details.1")}</li>
                <li>{t("about.education.bachelor.details.2")}</li>
                <li>{t("about.education.bachelor.details.3")}</li>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
