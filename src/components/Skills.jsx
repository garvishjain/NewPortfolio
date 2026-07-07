import { technicalSkills, certifications } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap scroll-mt-14 bg-panel/30">
      {/* <SectionHeader command="$ cat skills.json" title="Technical Skills" /> */}
      <SectionHeader title="Technical Skills" />

      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(technicalSkills).map(([category, items]) => (
          <div key={category} className="panel p-5">
            <h3 className="font-mono text-teal text-sm mb-4 tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-8 panel p-5">
          <h3 className="font-mono text-teal text-sm mb-4 tracking-wide">Certifications</h3>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-2 text-muted">
                <span className="text-teal font-mono mt-0.5">▸</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
