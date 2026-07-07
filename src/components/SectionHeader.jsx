export default function SectionHeader({ command, title }) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-2">{command}</p>
      <h2 className="font-mono font-bold text-2xl sm:text-3xl text-text">{title}</h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-teal/40 via-border to-transparent" />
    </div>
  );
}
