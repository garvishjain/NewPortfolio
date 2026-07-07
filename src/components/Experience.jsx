import { experience } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap scroll-mt-14">
      {/* <SectionHeader command="$ git log --oneline experience.js" title="Work Experience" /> */}
      <SectionHeader title="Work Experience" />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-teal" />
              <div className="panel p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-mono font-bold text-lg text-text">{job.role}</h3>
                  <span className="font-mono text-xs text-amber">{job.period}</span>
                </div>
                <p className="font-mono text-sm text-teal mb-3">{job.company}</p>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                      <span className="text-teal mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
