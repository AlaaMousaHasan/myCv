import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Skills() {
  const { t } = useTranslation();

  // Load skills safely from translations
  const skills = t("skills.items", {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{t("skills.title")}</h2>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
