import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  // Load project list safely
  const projects = t("projects.items", {
    returnObjects: true,
    defaultValue: []
  });

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">{t("projects.title")}</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
