"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const content = (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
    >
      <div className="project-topline">
        <span>{project.number}</span>
        <span>{project.eyebrow}</span>
      </div>

      <div className="project-visual" aria-hidden="true">
        <div className="browser-bar">
          <i /> <i /> <i />
        </div>
        <div className="visual-grid">
          <div className="visual-copy">
            <span>{project.title}</span>
            <strong>{project.featured ? "Learn with direction." : "Designed with intent."}</strong>
          </div>
          <div className="visual-panel" />
        </div>
      </div>

      <div className="project-copy">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <p className="project-impact">{project.impact}</p>
      </div>

      <div className="project-footer">
        <ul aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className="project-link-label">
          View project <ArrowUpRight size={17} />
        </span>
      </div>
    </motion.article>
  );

  return project.href ? (
    <a className="project-anchor" href={project.href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <div className="project-anchor">{content}</div>
  );
}
