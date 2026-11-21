import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import SectionHeading from "../components/SectionHeading";
import ArticleCard from "../components/ArticleCard";
import CountryCard from "../components/CountryCard";
import Newsletter from "../components/Newsletter";
import { categories } from "../data/categories";
import { countries } from "../data/countries";
import { articles } from "../data/articles";

const slides = [
  { eyebrow: "Global health awareness", title: "Health Knowledge. Global Perspectives.", text: "Explore trusted health awareness, disease explainers, medical research and healthcare stories from around the world.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1500&q=90", button: "Explore health articles", link: "/articles/" },
  { eyebrow: "Understand your health", title: "Know the signs. Make informed choices.", text: "Clear, reader-friendly information on symptoms, prevention, diagnosis and healthy living.", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1500&q=90", button: "Browse health topics", link: "/health/" },
  { eyebrow: "A world of health perspectives", title: "Healthcare insights, country by country.", text: "Discover health systems, public-health priorities and awareness resources from communities worldwide.", image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1500&q=90", button: "Explore countries", link: "/countries/" }
];

const container = "mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)]";
const actionClass = "inline-flex items-center gap-2 rounded-lg bg-[#35c94a] px-5 py-3 text-sm font-extrabold text-[#103b4c] transition hover:-translate-y-0.5 hover:bg-[#68df75]";

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const current = slides[slide];

  return <>
    <section className="relative h-[500px] overflow-hidden bg-[#102f66] text-white max-md:h-[480px] max-sm:h-[490px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(90deg, rgba(7,31,76,.88), rgba(7,31,76,.58) 52%, rgba(7,31,76,.12)), url(${current.image})` }} />
      <div className={`${container} relative flex h-full items-center`}>
        <div className="max-w-[650px] py-8">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.12em] text-[#baf4d1]"><PublicRoundedIcon fontSize="small" />{current.eyebrow}</span>
          <h1 className="my-5 max-w-[670px] text-left text-4xl font-extrabold leading-tight text-white md:text-6xl">{current.title}</h1>
          <p className="max-w-[570px] text-left text-base leading-relaxed text-[#f3f7fc]">{current.text}</p>
          <Link className={`${actionClass} mt-6`} to={current.link}>{current.button}<ArrowForwardRoundedIcon /></Link>
          <form className="mt-6 flex max-w-[570px] items-center gap-2 rounded-xl bg-white p-2 text-[#123c8c] shadow-lg max-sm:gap-1" onSubmit={e => { e.preventDefault(); window.location.href = `/articles/?q=${encodeURIComponent(search)}`; }}>
            <SearchRoundedIcon /><input className="min-w-0 flex-1 border-0 px-2 py-2 text-sm text-[#172a43] outline-none" aria-label="Search health information" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search symptoms, diseases, health topics..." /><button className="rounded-lg bg-[#123c8c] px-4 py-2 text-sm font-bold text-white">Search</button>
          </form>
        </div>
      </div>
      <div className={`${container} absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-between`}>
        <div className="flex gap-2">{slides.map((item, index) => <button key={item.title} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 w-7 rounded-full bg-white/50 transition ${slide === index ? "w-11 bg-[#35c94a]" : ""}`} onClick={() => setSlide(index)} />)}</div>
        <div className="text-xs font-extrabold text-white">0{slide + 1} <span className="text-white/60">/ 0{slides.length}</span></div>
      </div>
    </section>

    <section className="border-b border-[#eaf1f2] bg-[#f4fafb]">
      <div className={`${container} grid grid-cols-4 gap-5 py-5 max-md:grid-cols-2`}>
        <div className="flex items-center gap-3"><MenuBookOutlinedIcon className="text-2xl text-[#079da7]" /><span className="grid"><b className="text-sm text-[#19314d]">Health knowledge</b><small className="text-xs text-[#34445d]">Clear and accessible explainers</small></span></div>
        <div className="flex items-center gap-3"><VerifiedOutlinedIcon className="text-2xl text-[#079da7]" /><span className="grid"><b className="text-sm text-[#19314d]">Editorial awareness</b><small className="text-xs text-[#34445d]">Responsible health information</small></span></div>
        <div className="flex items-center gap-3"><PublicRoundedIcon className="text-2xl text-[#079da7]" /><span className="grid"><b className="text-sm text-[#19314d]">Global perspectives</b><small className="text-xs text-[#34445d]">Country-wise health insights</small></span></div>
        <div className="flex items-center gap-3"><HealthAndSafetyOutlinedIcon className="text-2xl text-[#079da7]" /><span className="grid"><b className="text-sm text-[#19314d]">Health for everyone</b><small className="text-xs text-[#34445d]">Topics for every life stage</small></span></div>
      </div>
    </section>

    <section className={`${container} py-16 max-md:py-12`}>
      <SectionHeading eyebrow="Explore the library" title="Health Topics" action={<Link className="text-sm font-extrabold text-[#123c8c] hover:text-[#079da7]" to="/health/">View all topics <ArrowForwardRoundedIcon /></Link>} />
      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2">{categories.map(item => { const Icon = item.icon; return <Link to={`/${item.slug}/`} className="relative flex min-h-[160px] flex-col items-center rounded-xl border border-[#e7eef1] bg-white p-5 text-center transition hover:-translate-y-1 hover:border-[#9bd9d6] hover:shadow-lg" key={item.slug}><span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#eaf8f7] text-[#079da7]"><Icon /></span><span className="text-base font-extrabold text-[#1a2b43]">{item.title}</span><span className="mt-2 text-sm leading-relaxed text-[#34445d]">{item.subtopics.join(", ")}</span><ArrowForwardRoundedIcon className="absolute right-3 top-4 text-[#8abdc0]" /></Link>; })}</div>
    </section>

    <section className="bg-[#f5f9fb] py-16 max-md:py-12"><div className={container}>
      <SectionHeading eyebrow="Country health hubs" title="Explore Health Around the World" action={<Link className="text-sm font-extrabold text-[#123c8c] hover:text-[#079da7]" to="/countries/">All countries <ArrowForwardRoundedIcon /></Link>} />
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2">{countries.map(country => <CountryCard key={country.slug} country={country} />)}</div>
    </div></section>

    <section className={`${container} py-16 max-md:py-12`}>
      <SectionHeading eyebrow="Read, learn and stay aware" title="Health Articles & Blogs" action={<Link className="text-sm font-extrabold text-[#123c8c] hover:text-[#079da7]" to="/articles/">View all articles <ArrowForwardRoundedIcon /></Link>} />
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{articles.slice(0, 6).map(article => <ArticleCard key={article.id} article={article} />)}</div>
    </section>

    <section className="bg-[#f5f9fb] py-16 max-md:py-12"><div className={container}>
      <div className="grid min-h-[270px] grid-cols-[1.2fr_.8fr] items-center gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#123c8c] to-[#087f9a] px-10 py-9 text-white max-md:grid-cols-1 max-md:px-6">
        <div><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#a6f0d4]">Editorial formats</span><h2 className="text-left text-3xl font-extrabold text-white">More Ways to Understand Health</h2><p className="mt-3 max-w-xl text-base text-white">Doctor's opinions, ask-the-expert features, research explained, health myths vs facts and patient awareness content.</p><Link className={`${actionClass} mt-6`} to="/doctors-opinions/">Explore expert perspectives <ArrowForwardRoundedIcon /></Link></div>
        <div className="relative grid h-44 place-items-center"><div className="absolute h-36 w-36 rounded-full border-2 border-white/30" /><div className="absolute h-52 w-52 rounded-full border-2 border-[#42d2d0]" /><PublicRoundedIcon className="z-10 text-7xl text-[#7ce17b]" /></div>
      </div>
    </div></section>

    <section className={`${container} py-16 max-md:py-12`}><Newsletter /></section>
  </>;
}
