import HealthTopicCard from "../components/HealthTopicCard";
import { categories } from "../data/categories";

// Header "Health Topics" / Home "Browse All Topics" -> /health/ : all 12 topic cards.
export default function HealthTopicsPage() {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-10 lg:w-[calc(100%-4rem)] max-md:py-7">
      <header className="mb-7">
        {/* <p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#079da7]">Global Health Sphere Library</p> */}
        <h1 className="text-left text-3xl font-extrabold text-[#123c8c] md:text-4xl">Health Topics</h1>
        <p className="mt-2 max-w-3xl text-left text-sm leading-6 text-[#52647a] sm:text-base">
          Choose a health topic to explore its related articles and focused subtopics.
        </p>
      </header>

      <div className="grid grid-cols-3 items-stretch gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {categories.map((category) => (
          <HealthTopicCard key={category.slug} category={category} />
        ))}
      </div>
    </main>
  );
}





