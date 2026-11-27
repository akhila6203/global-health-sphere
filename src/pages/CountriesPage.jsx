import { useMemo, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";
import { countries } from "../data/countries";
import { categories } from "../data/categories";
import { articles } from "../data/articles";

const fieldClass =
  "w-full rounded-lg border border-[#dce8ed] bg-white px-4 py-3 text-sm font-semibold text-[#19314d] outline-none transition focus:border-[#079da7] focus:ring-2 focus:ring-[#079da7]/15";

export default function CountriesPage() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");

  const filteredCountries = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return countries.filter((country) => {
      const matchesSearch =
        !normalized ||
        `${country.name} ${country.label} ${country.focus}`
          .toLowerCase()
          .includes(normalized);

      const matchesTopic =
        !topic ||
        articles.some(
          (article) =>
            article.country === country.name &&
            article.categorySlug === topic
        );

      return matchesSearch && matchesTopic;
    });
  }, [query, topic]);

  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] py-10 lg:w-[calc(100%-4rem)] max-md:py-7">
      <div className="mb-7">
        <p className="mb-1 text-xs font-extrabold uppercase tracking-[.16em] text-[#079da7]">
          Global Healthcare Directory
        </p>
        <h1 className="text-left text-3xl font-extrabold text-[#123c8c] md:text-4xl">
          Explore Countries
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-[#52647a]">
          Find country health libraries and browse articles by health topic.
        </p>
      </div>

      <div className="mb-7 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        <label className="relative flex items-center">
          <SearchRoundedIcon className="pointer-events-none absolute left-3 text-[#079da7]" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search countries..."
            aria-label="Search countries"
            className={`${fieldClass} pl-10`}
          />
        </label>

        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          aria-label="Filter countries by health topic"
          className={fieldClass}
        >
          <option value="">All Health Topics</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 text-sm font-semibold text-[#52647a]">
        <span className="font-extrabold text-[#123c8c]">
          {filteredCountries.length}
        </span>{" "}
        countries
      </div>

      {filteredCountries.length ? (
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {filteredCountries.map((country) => (
            <Link
              key={country.slug}
              to={`/countries/${country.slug}/`}
              className="group flex min-h-[150px] items-center gap-4 rounded-xl border border-[#e5eef0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#079da7]/50 hover:shadow-[0_10px_25px_rgba(7,157,167,0.10)]"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e5f8f5] text-3xl transition-transform duration-300 group-hover:scale-110">
                {country.flag || "🌍"}
              </span>
              <span className="min-w-0">
                <span className="block text-base font-extrabold text-[#19314d] group-hover:text-[#079da7]">
                  {country.name}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[#52647a]">
                  {country.focus}
                </span>
                <span className="mt-2 block text-xs font-bold text-[#079da7]">
                  View country articles →
                </span>
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-[#cbd9df] px-6 py-12 text-center">
          <h2 className="text-xl font-extrabold text-[#123c8c]">
            No countries found
          </h2>
          <p className="mt-2 text-sm text-[#52647a]">
            Try another search or health topic.
          </p>
        </div>
      )}
    </main>
  );
}




// import { countries } from "../data/countries";
// import CountryCard from "../components/CountryCard";
// export default function CountriesPage() {
//   return <main className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] py-12 max-md:py-8"><div className="mb-9 rounded-2xl bg-[#f3f9fb] px-8 py-9 text-center max-md:px-5 max-md:py-7"><span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">Global healthcare directory</span><h1>Country Health Hubs</h1></div><div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 grid-cols-3 max-md:grid-cols-2">{countries.map(country=><CountryCard key={country.slug} country={country}/>)}</div></main>;
// }
