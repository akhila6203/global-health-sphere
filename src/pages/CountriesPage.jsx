import { countries } from "../data/countries";
import CountryCard from "../components/CountryCard";
export default function CountriesPage() {
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><div className="mb-9 rounded-2xl bg-[#f3f9fb] px-8 py-9 text-center max-md:px-5 max-md:py-7"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Global healthcare directory</span><h1>Country Health Hubs</h1></div><div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 grid-cols-3 max-md:grid-cols-2">{countries.map(country=><CountryCard key={country.slug} country={country}/>)}</div></main>;
}
