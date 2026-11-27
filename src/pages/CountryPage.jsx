import { Link, useParams } from "react-router-dom";
import ArticleLibrary from "../components/ArticleLibrary";
import { categories } from "../data/categories";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-12 lg:w-[calc(100%-4rem)]">
        <h1 className="text-2xl font-extrabold text-[#123c8c]">Health topic not found</h1>
        <Link className="mt-3 inline-flex font-bold text-[#079da7]" to="/health/">Browse all health topics</Link>
      </main>
    );
  }

  const Icon = category.icon;

  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-10 lg:w-[calc(100%-4rem)] max-md:py-7">
      <section className="mb-7 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#f0f8fb] to-[#eaf8f6] p-5 sm:p-7">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#079da7] shadow-sm sm:h-16 sm:w-16">
          {Icon && <Icon sx={{ fontSize: 32 }} />}
        </span>
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#079da7]">Health library / topic</p>
          <h1 className="mt-1 text-left text-2xl font-extrabold text-[#123c8c] sm:text-3xl">{category.title}</h1>
          <p className="mt-2 max-w-3xl text-left text-sm leading-6 text-[#40566d]">{category.description}</p>
        </div>
      </section>

      <ArticleLibrary
        key={category.slug}
        title={`${category.title} Articles`}
        headingTag="h2"
        initialCategory={category.slug}
        lockedCategory
      />
    </main>
  );
}





























// import { useParams, Link } from "react-router-dom";
// import { countries } from "../data/countries";
// import { articles } from "../data/articles";
// import ArticleCard from "../components/ArticleCard";
// export default function CountryPage() {
//   const { slug }=useParams();
//   const country=countries.find(c=>c.slug===slug);
//   if(!country) return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><h1>Country not found</h1><Link to="/countries/">Browse country hubs</Link></main>;
//   const local=articles.filter(a=>a.country===country.name || a.country===country.label || a.country==="Global");
//   return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><section className="mb-10 rounded-2xl bg-gradient-to-r from-[#123c8c] to-[#079da7] p-10 text-white max-md:p-6"><span className="mb-3 block text-4xl">{country.flag}</span><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Country health hub</span><h1>{country.name}</h1><div className="mt-5 flex max-w-2xl flex-col gap-2 rounded-xl bg-white/10 p-4 text-sm"><b>Key editorial focus</b><span>{country.focus}</span></div></section><div className="mb-7 flex flex-col items-center justify-center gap-3 text-center"><div><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Country reading</span><h2>Health articles & perspectives</h2><p>Country-relevant stories and global health explainers.</p></div></div><div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{local.map(a=><ArticleCard key={a.id} article={a}/>)}</div><p className="mt-6 rounded-lg border border-[#f1e4bd] bg-[#fff9e9] p-4 text-sm text-[#655b43]">Country-specific statistics, healthcare eligibility and clinical recommendations should be verified against current official national sources before publication.</p></main>;
// }
