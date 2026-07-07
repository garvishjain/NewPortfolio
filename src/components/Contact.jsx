import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-wrap scroll-mt-14 bg-panel/30">
      {/* <SectionHeader command="$ node contact.js" title="Get In Touch" /> */}
      <SectionHeader title="Get In Touch" />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          <p className="text-muted leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to say hi? My inbox is always
            open — I'll get back to you as soon as I can.
          </p>

          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-text hover:text-teal transition-colors"
            >
              <span className="p-2 rounded-md bg-panel2 border border-border"><FiMail size={18} /></span>
              <span className="font-mono text-sm">{profile.email}</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text hover:text-teal transition-colors"
            >
              <span className="p-2 rounded-md bg-panel2 border border-border"><FiGithub size={18} /></span>
              <span className="font-mono text-sm">github.com</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text hover:text-teal transition-colors"
            >
              <span className="p-2 rounded-md bg-panel2 border border-border"><FiLinkedin size={18} /></span>
              <span className="font-mono text-sm">linkedin.com</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 panel p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full bg-panel2 border border-border rounded-md px-4 py-2.5 text-text placeholder:text-muted/50 focus:border-teal outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full bg-panel2 border border-border rounded-md px-4 py-2.5 text-text placeholder:text-muted/50 focus:border-teal outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Let's build something great together..."
              className="w-full bg-panel2 border border-border rounded-md px-4 py-2.5 text-text placeholder:text-muted/50 focus:border-teal outline-none transition-colors resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
            <FiSend size={16} /> Send Message
          </button>
          <p className="text-xs text-muted">
            Opens your email client with this message pre-filled and addressed to me.
          </p>
        </form>
      </div>
    </section>
  );
}
