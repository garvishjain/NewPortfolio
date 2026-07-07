import { aboutMe, professionalSummary, profile } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="section-wrap scroll-mt-14">
      {/* <SectionHeader command="$ cat about.jsx" title="About Me" /> */}
      <SectionHeader title="About Me" />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 space-y-5">
          <p className="text-muted leading-relaxed">{aboutMe}</p>

          <div className="panel p-5">
            <p className="font-mono text-sm text-teal mb-2">// Professional Summary</p>
            <p className="text-text leading-relaxed">{professionalSummary}</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="panel p-5 font-mono text-sm">
            <p className="text-muted mb-3">
              <span className="text-amber">const</span> <span className="text-teal">profile</span> = {"{"}
            </p>
            <div className="pl-4 space-y-1.5">
              <p><span className="text-teal">name:</span> <span className="text-text">"{profile.name}",</span></p>
              <p><span className="text-teal">role:</span> <span className="text-text">"{profile.role}",</span></p>
              <p><span className="text-teal">experience:</span> <span className="text-text">"{profile.yearsExperience} years",</span></p>
              <p><span className="text-teal">location:</span> <span className="text-text">"{profile.location}",</span></p>
              <p><span className="text-teal">openToWork:</span> <span className="text-amber">true</span></p>
            </div>
            <p className="text-muted mt-3">{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
