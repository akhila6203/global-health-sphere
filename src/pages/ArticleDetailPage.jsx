import { Link, useParams } from "react-router-dom";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articles.find(item=>item.slug===slug);
  if(!article) return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><h1>Article not found</h1><Link to="/articles/">Back to articles</Link></main>;
  const related = articles.filter(item=>item.slug!==slug && (item.categorySlug===article.categorySlug || item.country===article.country)).slice(0,3);
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-8">
    <div className="mb-6 text-sm text-[#52647a]"><Link to="/">Home</Link><span>/</span><Link to="/articles/">Articles & Blogs</Link><span>/</span><span>{article.category}</span></div>
    <div className="grid grid-cols-[minmax(0,1fr)_280px] gap-10 max-lg:grid-cols-1"><article className="min-w-0">
      <Link to="/articles/" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c]"><ArrowBackRoundedIcon/> All articles</Link>
      <span className="inline-block rounded-full bg-[#eaf8f7] px-3 py-2 text-xs font-extrabold text-[#087f89]">{article.number || article.category.toUpperCase()} · {article.format}</span>
      <h1>{article.title}</h1><p className="mx-auto my-5 max-w-3xl text-center text-lg leading-relaxed text-[#26384f]">{article.excerpt}</p>
      <div className="my-5 flex flex-wrap justify-center gap-4 text-sm text-[#52647a]"><span>By <b>{article.author}</b></span><span>{article.date}</span><span><AccessTimeRoundedIcon/> {article.readTime}</span></div>
      <img className="mb-8 w-full overflow-hidden rounded-xl" src={article.image} alt=""/>
      <div className="mx-auto max-w-4xl text-[1em] leading-[1.85] text-[#172a43] [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-center [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-[#123c8c] [&_p]:mb-5 [&_p]:text-[#172a43] [&_li]:mb-3 [&_li]:pl-1 [&_li::marker]:text-[#079da7]">
        {article.sections.map((section,index)=><section key={index}><h2>{section.heading}</h2>{section.intro && <p>{section.intro}</p>}{section.paragraphs?.map((p,i)=><p key={i}>{p}</p>)}{section.bullets && <ul>{section.bullets.map(([heading,body])=><li key={heading}><b>{heading}:</b> {body}</li>)}</ul>}</section>)}
      </div>
      {article.references && <section className="mt-6 rounded-xl border border-[#e0edf0] bg-[#f3f9fb] p-5"><h2>Reliable Sources & References</h2><ul>{article.references.map(ref=><li key={ref}>{ref}</li>)}</ul></section>}
      {article.disclaimer && <section className="mt-6 rounded-xl border border-[#f1e4bd] bg-[#fff9e9] p-5"><h2>Awareness Note & Disclaimer</h2><p>{article.disclaimer}</p></section>}
      <section className="mt-6 flex gap-3 rounded-xl border border-[#dcefee] bg-[#effafa] p-5 text-[#079da7]"><VerifiedUserOutlinedIcon/><div><b>Editorial information</b><p>Author: {article.author}<br/>Medical reviewer: {article.reviewer}<br/>Published: {article.date}</p><small>Content is provided for general awareness and education. Consult a qualified healthcare professional for personal medical guidance.</small></div></section>
    </article>
    <aside className="sticky top-32 self-start max-lg:hidden"><div className="rounded-xl border border-[#e5edf0] p-5"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">In this article</span><h3>Explore health knowledge</h3><p>Read related awareness articles and browse other topics in the Global Health Sphere library.</p><Link to="/heart-diabetes/">Heart & Diabetes <span>→</span></Link><Link to="/diseases/">Diseases & Conditions <span>→</span></Link><Link to="/articles/">All Articles <span>→</span></Link></div></aside></div>
    {related.length>0 && <section className="mt-16"><div className="mb-7 flex flex-col items-center justify-center gap-3 text-center"><div><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Continue reading</span><h2>Related Articles</h2></div></div><div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{related.map(item=><ArticleCard key={item.id} article={item}/>)}</div></section>}
  </main>;
}
