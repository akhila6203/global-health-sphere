import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function HealthTopicCard({ category }) {
  const Icon = category.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#e3edf0] bg-white p-5 shadow-[0_5px_18px_rgba(18,60,140,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#9bd9d6] hover:shadow-[0_14px_30px_rgba(7,157,167,0.10)]">
      <Link to={`/${category.slug}/`} className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e9f7f5] text-[#079da7] transition duration-300 group-hover:bg-[#079da7] group-hover:text-white">
          {Icon && <Icon sx={{ fontSize: 26 }} />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-base font-extrabold leading-snug text-[#19314d]">{category.title}</span>
          <span className="mt-1 block text-sm leading-6 text-[#52647a]">{category.description}</span>
        </span>
      </Link>

      <div className="mt-4 border-t border-[#edf2f4] pt-4">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[.12em] text-[#079da7]">Subtopics</p>
        <div className="flex flex-wrap gap-2">
          {category.subtopics.map((topic) => (
            <Link
              key={topic}
              to={`/${category.slug}/?subtopic=${encodeURIComponent(topic)}`}
              className="rounded-full border border-[#dcebed] bg-[#f7fbfc] px-3 py-1.5 text-xs font-semibold text-[#34536a] transition hover:border-[#079da7] hover:bg-[#eaf8f6] hover:text-[#087f89]"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      <Link to={`/${category.slug}/`} className="mt-5 inline-flex items-center gap-1 text-sm font-extrabold text-[#123c8c] transition group-hover:text-[#079da7]">
        Explore articles <ArrowForwardRoundedIcon fontSize="small" />
      </Link>
    </article>
  );
}
