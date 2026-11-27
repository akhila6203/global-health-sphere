
import { useSearchParams } from "react-router-dom";

// Clean underline tabs: no box, no heading. Scrolls sideways on small screens.
export default function CategorySubtopicTabs({ category }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get("subtopic") || "";

  if (!category?.subtopics?.length) return null;

  const chooseTopic = (topic) => {
    const next = new URLSearchParams(searchParams);
    if (topic) next.set("subtopic", topic);
    else next.delete("subtopic");
    setSearchParams(next, { replace: true });
  };

  const tabClass = (active) =>
    `relative shrink-0 whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:transition-all ${
      active
        ? "text-[#123c8c] after:bg-[#079da7]"
        : "text-[#52647a] after:bg-transparent hover:text-[#079da7]"
    }`;

  return (
    <nav
      aria-label={`${category.title} subtopics`}
      className="mb-7 flex gap-1 overflow-x-auto border-b border-[#e2ebef] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <button type="button" onClick={() => chooseTopic("")} className={tabClass(!selected)}>
        All
      </button>
      {category.subtopics.map((topic) => (
        <button key={topic} type="button" onClick={() => chooseTopic(topic)} className={tabClass(selected === topic)}>
          {topic}
        </button>
      ))}
    </nav>
  );
}



