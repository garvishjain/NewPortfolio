import { education } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section-wrap scroll-mt-14">
      {/* <SectionHeader command="$ cat education.js" title="Education" /> */}
      <SectionHeader title="Education" />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="panel p-5 flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="font-mono text-amber text-sm shrink-0 sm:w-32">{edu.period}</div>
            <div>
              <h3 className="font-mono font-bold text-text">{edu.degree}</h3>
              <p className="text-teal text-sm mt-1">{edu.school}</p>
              <p className="text-muted text-sm mt-2 leading-relaxed">{edu.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
