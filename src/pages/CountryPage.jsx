import { useParams, Link } from "react-router-dom";
import { countries } from "../data/countries";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
export default function CountryPage() {
  const { slug }=useParams();
  const country=countries.find(c=>c.slug===slug);
  if(!country) return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><h1>Country not found</h1><Link to="/countries/">Browse country hubs</Link></main>;
  const local=articles.filter(a=>a.country===country.name || a.country===country.label || a.country==="Global");
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><section className="mb-10 rounded-2xl bg-gradient-to-r from-[#123c8c] to-[#079da7] p-10 text-white max-md:p-6"><span className="mb-3 block text-4xl">{country.flag}</span><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Country health hub</span><h1>{country.name}</h1><div className="mt-5 flex max-w-2xl flex-col gap-2 rounded-xl bg-white/10 p-4 text-sm"><b>Key editorial focus</b><span>{country.focus}</span></div></section><div className="mb-7 flex flex-col items-center justify-center gap-3 text-center"><div><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Country reading</span><h2>Health articles & perspectives</h2><p>Country-relevant stories and global health explainers.</p></div></div><div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{local.map(a=><ArticleCard key={a.id} article={a}/>)}</div><p className="mt-6 rounded-lg border border-[#f1e4bd] bg-[#fff9e9] p-4 text-sm text-[#655b43]">Country-specific statistics, healthcare eligibility and clinical recommendations should be verified against current official national sources before publication.</p></main>;
}
