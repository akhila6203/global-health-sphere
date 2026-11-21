import { useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { categories } from "../data/categories";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = categories.find(item => item.slug === slug);
  const selectedSubtopic = searchParams.get("subtopic") || "";
  const list = useMemo(() => articles.filter(article => article.categorySlug === slug && (!selectedSubtopic || `${article.title} ${article.excerpt} ${article.tags || ""}`.toLowerCase().includes(selectedSubtopic.toLowerCase()))), [slug, selectedSubtopic]);

  if (!category) return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-12 lg:w-[calc(100%-4rem)]"><h1>Topic not found</h1><Link to="/health/">Browse health topics</Link></main>;
  const Icon = category.icon;
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-12 lg:w-[calc(100%-4rem)] max-md:py-8">
    <div className="mb-9 rounded-2xl bg-[#f3f9fb] px-8 py-9 text-center max-md:px-5 max-md:py-7"><span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-xl bg-[#dff5f1] text-[#079da7]"><Icon /></span><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Health topic</span><h1>{category.title}</h1></div>
    <section className="my-9 rounded-2xl border border-[#e5eef0] bg-[#fbfdfd] p-6">
      <div className="mb-6 text-center"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Explore this category</span><h2 className="text-2xl font-extrabold text-[#123c8c]">Related Topics</h2></div>
      <div className="flex flex-wrap justify-center gap-2 border-t border-[#edf2f4] pt-5">
        <button type="button" className={`rounded-full border px-4 py-2 text-sm font-bold transition hover:bg-[#123c8c] hover:text-white ${!selectedSubtopic ? "border-[#123c8c] bg-[#123c8c] text-white" : "border-[#dcebed] bg-[#f5fbfb] text-[#24546a]"}`} onClick={() => setSearchParams({})}>All topics</button>
        {category.subtopics.map(topic => <button type="button" key={topic} className={`rounded-full border px-4 py-2 text-sm font-bold transition hover:bg-[#123c8c] hover:text-white ${selectedSubtopic === topic ? "border-[#123c8c] bg-[#123c8c] text-white" : "border-[#dcebed] bg-[#f5fbfb] text-[#24546a]"}`} onClick={() => setSearchParams({ subtopic: topic })}>{topic}</button>)}
      </div>
    </section>
    <div className="mb-7 mt-10 text-center"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">From the library</span><h2>{selectedSubtopic || `Articles in ${category.title}`}</h2></div>
    {list.length ? <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{list.map(article => <ArticleCard key={article.id} article={article} />)}</div> : <div className="rounded-xl border border-dashed border-[#cbd9df] p-10 text-center text-[#34445d]"><h3>More Articles Coming Soon</h3><p>New content for this health topic will be added to the library.</p></div>}
  </main>;
}
