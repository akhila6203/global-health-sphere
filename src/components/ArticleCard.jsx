import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

export default function ArticleCard({ article, featured = false }) {
  return (
    <article
      className={`overflow-hidden rounded-xl border border-[#e7edf0] bg-white transition hover:-translate-y-1 hover:shadow-xl ${featured ? "ring-2 ring-[#35c94a]" : ""}`}
    >
      <Link
        to={`/article/${article.slug}/`}
        className="relative block h-[200px] overflow-hidden bg-[#e8eff2]"
      >
        {article.image ? (
          <img
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
        ) : (
          <span className="grid h-full w-full place-items-center bg-gradient-to-br from-[#e5f8f5] to-[#edf2ff] text-sm font-bold text-[#079da7]">Global Health Sphere</span>
        )}
        <span className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-2 text-xs font-extrabold text-[#123c8c]">
          {article.category}
        </span>
      </Link>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#52647a]">
          <span>{article.date}</span>
          <span className="text-[#35c94a]">•</span>
          <span><AccessTimeRoundedIcon fontSize="inherit" /> {article.readTime}</span>
          <span className="ml-auto rounded-full bg-[#eef7fa] px-2.5 py-1 font-bold text-[#123c8c]">{article.country || "Global"}</span>
        </div>
        <h3 className="my-3 text-center text-lg font-extrabold leading-snug text-[#172a43] hover:text-[#079da7]">
          <Link to={`/article/${article.slug}/`}>{article.title}</Link>
        </h3>
        <p className="text-base leading-relaxed text-[#172a43]">
          {article.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#edf1f3] pt-3 text-xs text-[#52647a]">
          <span>{article.format}</span>
          <span className="rounded-full bg-[#eaf8f6] px-2 py-1 font-bold text-[#07838b]">{(article.sourceTypes || []).join(" · ")}</span>
          <Link
            to={`/article/${article.slug}/`}
            className="inline-flex items-center gap-1 font-extrabold text-[#079da7]"
          >
            Read article <ArrowForwardRoundedIcon fontSize="inherit" />
          </Link>
        </div>
      </div>
    </article>
  );
}














// import { Link } from "react-router-dom";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

// export default function ArticleCard({ article, featured = false }) {
//   return (
//     <article
//       className={`overflow-hidden rounded-xl border border-[#e7edf0] bg-white transition hover:-translate-y-1 hover:shadow-xl ${featured ? "ring-2 ring-[#35c94a]" : ""}`}
//     >
//       <Link
//         to={`/article/${article.slug}/`}
//         className="relative block h-[200px] overflow-hidden bg-[#e8eff2]"
//       >
//         <img
//           className="h-full w-full object-cover transition duration-500 hover:scale-105"
//           src={article.image}
//           alt={article.title}
//           loading="lazy"
//         />
//         <span className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-2 text-xs font-extrabold text-[#123c8c]">
//           {article.category}
//         </span>
//       </Link>
//       <div className="p-5">
//         <div className="flex flex-wrap items-center gap-2 text-xs text-[#52647a]">
//           <span>{article.date}</span>
//           <span className="text-[#35c94a]">•</span>
//           <span><AccessTimeRoundedIcon fontSize="inherit" /> {article.readTime}</span>
//           <span className="ml-auto rounded-full bg-[#eef7fa] px-2.5 py-1 font-bold text-[#123c8c]">{article.country || "Global"}</span>
//         </div>
//         <h3 className="my-3 text-center text-lg font-extrabold leading-snug text-[#172a43] hover:text-[#079da7]">
//           <Link to={`/article/${article.slug}/`}>{article.title}</Link>
//         </h3>
//         <p className="text-base leading-relaxed text-[#172a43]">
//           {article.excerpt}
//         </p>
//         <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#edf1f3] pt-3 text-xs text-[#52647a]">
//           <span>{article.format}</span>
//           <span className="rounded-full bg-[#eaf8f6] px-2 py-1 font-bold text-[#07838b]">{(article.sourceTypes || []).join(" · ")}</span>
//           <Link
//             to={`/article/${article.slug}/`}
//             className="inline-flex items-center gap-1 font-extrabold text-[#079da7]"
//           >
//             Read article <ArrowForwardRoundedIcon fontSize="inherit" />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// }


