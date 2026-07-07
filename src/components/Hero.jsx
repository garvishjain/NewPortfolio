import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const ROLES = ["Full Stack Developer", "React & Node.js Engineer", "API Architect", "UI Craftsman"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 65;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="section-wrap pt-16 sm:pt-24 pb-16">
      <div className="animate-fadeUp">
        {/* <p className="eyebrow mb-4">$ whoami</p> */}

        <h1 className="font-mono font-extrabold text-4xl sm:text-6xl leading-tight text-text">
          Hi, I'm <span className="text-teal">{profile.name}</span>
        </h1>

        <div className="mt-4 h-9 sm:h-10">
          <span className="font-mono text-xl sm:text-2xl text-muted">
            {displayed}
            <span className="inline-block w-[2px] h-6 sm:h-7 bg-teal ml-1 align-middle animate-blink" />
          </span>
        </div>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
          {profile.tagline}{" "}
          <span className="text-text">{profile.yearsExperience} years</span> of experience turning ideas
          into production-ready software.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={profile.resumeUrl} download className="btn-primary">
            <FiDownload size={16} /> Download CV
          </a>
          <a href="#contact" className="btn-secondary">
            <FiMail size={16} /> Contact Me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-md border border-border text-muted hover:text-teal hover:border-teal transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-md border border-border text-muted hover:text-teal hover:border-teal transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
