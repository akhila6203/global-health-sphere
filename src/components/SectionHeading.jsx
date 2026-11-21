export default function SectionHeading({ eyebrow, title, action }) {
  return <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
    <span className="mb-1 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">{eyebrow}</span>
    <h2 className="text-3xl font-extrabold leading-tight text-[#123c8c] md:text-4xl">{title}</h2>
    {action && <div className="mt-1">{action}</div>}
  </div>;
}
