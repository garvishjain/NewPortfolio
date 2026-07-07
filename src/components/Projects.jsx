import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap scroll-mt-14 bg-panel/30">
      <SectionHeader title="Featured Projects" />

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="panel p-5 flex flex-col hover:shadow-glow hover:border-teal/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-mono font-bold text-text text-lg">{project.title}</h3>
            </div>

            <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-panel2 border border-border text-teal">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-3 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-muted hover:text-teal transition-colors"
              >
                <FiGithub size={16} /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono text-muted hover:text-teal transition-colors"
              >
                <FiExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
