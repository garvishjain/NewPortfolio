import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-wrap !py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted">
          {/* <span className="text-teal">$</span> echo "Built by {profile.name}, {new Date().getFullYear()}" */}
          "Built by {profile.name}, {new Date().getFullYear()}"
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-teal transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-teal transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-teal transition-colors">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
