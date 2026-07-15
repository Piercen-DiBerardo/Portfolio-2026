"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "04",
    title: "Pulse MCQ Studio",
    label: "Private browser-based study tool",
    description:
      "Turns Excel question banks into interactive practice exams without uploading student data.",
    stack: "Next.js · React · SheetJS",
    image: "/other/pulsemcq.png",
    alt: "Pulse MCQ Studio practice exam interface",
    href: "https://pulse-mcq-studio.vercel.app",
  },
  {
    number: "05",
    title: "Custom AI & RAG Systems",
    label: "Applied AI tooling",
    description:
      "Dataset generation, fine-tuning, retrieval systems, chatbot interfaces, and containerized deployment.",
    stack: "Python · Ollama · Unsloth · Docker",
    image: "/other/rag.png",
    alt: "Custom AI and retrieval augmented generation interface",
  },
  {
    number: "06",
    title: "Infrastructure Monitoring",
    label: "Multi-client observability architecture",
    description:
      "Centralized Wazuh and rsyslog infrastructure with client separation, rotation, and archival storage.",
    stack: "Wazuh · Linux · rsyslog · GitHub",
    image: "/other/wazuh-dashboard.png",
    alt: "Infrastructure monitoring and observability dashboard",
  },
];

export function AdditionalProjects() {
  return (
    <section
      className="additional-work"
      aria-labelledby="additional-work-title"
    >
      <div className="additional-heading">
        <span>More selected work</span>

        <h3 id="additional-work-title">
          Smaller builds, systems, and experiments.
        </h3>
      </div>

      <div className="additional-list">
        {projects.map((project) => {
          const content = (
            <>
              <span className="additional-number">{project.number}</span>

              <div className="additional-copy">
                <small>{project.label}</small>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <span>{project.stack}</span>
              </div>

              <div className="additional-preview">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 320px"
                  className="additional-preview-image"
                />
              </div>

              {project.href && (
                <ArrowUpRight
                  className="additional-arrow"
                  size={22}
                  aria-hidden="true"
                />
              )}
            </>
          );

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="additional-row"
              aria-label={`Open ${project.title}`}
            >
              {content}
            </a>
          ) : (
            <article className="additional-row" key={project.title}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}