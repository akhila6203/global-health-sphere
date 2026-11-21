import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ArticleCard from "../components/ArticleCard";
import { articles } from "../data/articles";
import { categories } from "../data/categories";
import { countries } from "../data/countries";

export default function ArticlesPage() {
  const [params] = useSearchParams();
  const [query,setQuery] = useState(params.get("q") || "");
  const [category,setCategory] = useState(params.get("category") || "All topics");
  const [country,setCountry] = useState("All countries");
  const results = useMemo(()=>articles.filter(a=>(category==="All topics"||a.category===category)&&(country==="All countries"||a.country===country||a.country==="Global")&&(a.title+" "+a.excerpt+" "+a.category).toLowerCase().includes(query.toLowerCase())),[query,category,country]);
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8">
    <div className="mb-9 rounded-2xl bg-[#f3f9fb] px-8 py-9 text-center max-md:px-5 max-md:py-7"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Knowledge library</span><h1>Health Articles & Blogs</h1></div>
    <div className="mb-6 grid grid-cols-[1.5fr_1fr_1fr] gap-3 rounded-xl border border-[#e5edf0] bg-white p-4 max-md:grid-cols-1"><div className="flex items-center gap-2"><SearchRoundedIcon/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search articles, symptoms or topics..."/></div><select value={category} onChange={e=>setCategory(e.target.value)}><option>All topics</option>{categories.map(c=><option key={c.slug}>{c.title}</option>)}</select><select value={country} onChange={e=>setCountry(e.target.value)}><option>All countries</option>{countries.map(c=><option key={c.slug}>{c.name}</option>)}</select></div>
    <div className="mb-5 text-sm font-semibold text-[#34445d]"><b>{results.length} articles</b><span>Sample editorial content</span></div>
    {results.length ? <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{results.map(a=><ArticleCard key={a.id} article={a}/>)}</div> : <div className="rounded-xl border border-dashed border-[#cbd9df] p-10 text-center text-[#34445d]"><h3>No matching articles</h3><p>Try changing the search term or filters.</p></div>}
  </main>;
}
