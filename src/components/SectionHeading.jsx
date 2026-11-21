export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-2 text-center">
      <p className=" text-[14px] font-bold uppercase tracking-[.16em] text-[#079da7]">
  {eyebrow}
</p>
      {/* <h2 className="text-3xl font-extrabold leading-tight text-[#123c8c] md:text-4xl">
        {title}
      </h2> */}
      <h2 className="mt-0 text-2xl font-extrabold text-[#19314d] md:text-3xl">
  {title}
</h2>
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
}
