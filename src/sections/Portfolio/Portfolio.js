import React from "react";
import "./Portfolio.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Portfolio() {
  const { t } = useTranslation();

  const portfolioItems = t("portfolio.items", {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">{t("portfolio.title")}</h2>

      {/* Hint Button */}
      <div className="portfolio-hint-container">
        <Link to={t("portfolio.hintLink")} className="portfolio-hint-button">
          {t("portfolio.hintText")}
        </Link>
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card">
            <h3 className="portfolio-name">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                {item.name}
              </a>
            </h3>

            <p className="portfolio-description">{item.description}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link-button"
            >
              {t("portfolio.viewOnGithub")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
