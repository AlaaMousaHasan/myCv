import React from "react";
import "./SoftwareDevelopment.css";
import { useTranslation } from "react-i18next";

function SoftwareDevelopment() {
  const { t } = useTranslation();

  const skills = t("softwareDev.items", {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <section className="software-dev-section">
      <h1 className="section-title">{t("softwareDev.title")}</h1>

      <p className="software-dev-description">
        {t("softwareDev.description")}
      </p>

      <ul className="software-dev-list">
        {skills.map((skill, index) => (
          <li key={index} className="software-dev-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SoftwareDevelopment;
