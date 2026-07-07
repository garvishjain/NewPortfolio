import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";

export default function Navbar() {
  const [active, setActive] = useState("about.jsx");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find((l) => l.href === `#${entry.target.id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Fake window controls + name, like an editor title bar */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <span className="font-mono text-sm text-muted hidden sm:inline">
              {/* {profile.name.toLowerCase().replace(" ", "-")}.dev */}
              {profile.name.toUpperCase()}
            </span>
          </div>

          {/* Desktop tab bar */}
          <div className="hidden md:flex items-center overflow-x-auto">
            {navLinks.map((link) => {
              const isActive = active === link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-mono text-sm whitespace-nowrap transition-colors duration-200 border-r border-border ${
                    isActive ? "text-teal bg-panel" : "text-muted hover:text-text hover:bg-panel/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden font-mono text-sm text-teal border border-border rounded px-3 py-1.5"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? "close()" : "menu()"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-panel border-t border-b border-border">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-mono text-sm text-text border-b border-border last:border-b-0 hover:text-teal hover:bg-panel2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
