import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ArticleCard from "./ArticleCard";
import CategorySubtopicTabs from "./CategorySubtopicTabs";
import useGridColumns from "../hooks/useGridColumns";
import { filterArticles } from "../utils/articleFilters";
import { articles } from "../data/articles";
import { categories } from "../data/categories";
import { countries } from "../data/countries";

const ROWS_PER_PAGE = 4; // 4 rows first, "Load more" adds 4 more rows

const controlClass =
  "w-full min-w-0 rounded-xl border border-[#dce8ed] bg-white px-4 py-3 text-sm font-semibold text-[#19314d] outline-none transition focus:border-[#079da7] focus:ring-2 focus:ring-[#079da7]/15";

export default function ArticleLibrary({
  title = "All Health Articles",
  headingTag: Heading = "h1",
  initialCategory = "",
  lockedCategory = false,
  initialCountry = "",
  initialSource = "",
  showHeading = true,
  showFilters = true,
  showCategoryFilter = true,
  showCountryFilter = true,
  showSourceFilter = true,
  subtopicCategory = null, // optional override, normally detected automatically
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const columns = useGridColumns();

  // URL is the single source of truth, so header links / back button always work.
  const fromUrl = (key, initial) => (searchParams.has(key) ? searchParams.get(key) : initial);
  const urlQuery = searchParams.get("q") || "";
  const category = lockedCategory ? initialCategory : fromUrl("category", initialCategory);
  const country = fromUrl("country", initialCountry);
  const source = fromUrl("source", initialSource);
  const subtopic = searchParams.get("subtopic") || "";

  const [query, setQuery] = useState(urlQuery);
  useEffect(() => setQuery(urlQuery), [urlQuery]);

  const pageSize = columns * ROWS_PER_PAGE;
  const [shown, setShown] = useState(pageSize);
  useEffect(() => setShown(pageSize), [urlQuery, category, country, source, subtopic, pageSize]);

  const activeCategory = subtopicCategory || categories.find((item) => item.slug === category);

  const filtered = useMemo(
    () => filterArticles(articles, { query: urlQuery, category, country, source, subtopic }),
    [urlQuery, category, country, source, subtopic]
  );
  const visible = filtered.slice(0, shown);

  const setParam = (key, value, initial = "") => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else if (initial) next.set(key, ""); // user chose "All" while a default exists
    else next.delete(key);
    if (key === "category") next.delete("subtopic");
    setSearchParams(next, { replace: true });
  };

  const resetFilters = () => {
    setQuery("");
    setSearchParams({}, { replace: true });
  };

  return (
    <section className="w-full">
      {showHeading && (
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[.18em] text-[#079da7]">
              Global Health Sphere Library
            </p>
            <Heading className="text-left text-3xl font-extrabold text-[#123c8c] md:text-4xl">{title}</Heading>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg bg-[#123c8c] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#079da7]"
          >
            All Articles
          </button>
        </div>
      )}

      {/* CATEGORY PAGE: sub-category names on top, above search/filters */}
      {lockedCategory && activeCategory && <CategorySubtopicTabs category={activeCategory} />}

      {showFilters && (
        <>
      {/* SEARCH + FILTERS (above articles) */}
      <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 rounded-2xl border border-[#e2ebef] bg-white p-4 shadow-[0_8px_25px_rgba(18,60,140,0.05)]">
        <label className="relative flex min-w-0 items-center">
          <SearchRoundedIcon className="pointer-events-none absolute left-3 text-[#079da7]" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setParam("q", e.target.value);
            }}
            placeholder="Search articles or topics..."
            aria-label="Search articles"
            className={`${controlClass} pl-11`}
          />
        </label>

        {showCategoryFilter &&
          (lockedCategory ? (
            <div className={`${controlClass} flex items-center bg-[#f4fafb]`}>
              {activeCategory?.title || "Selected category"}
            </div>
          ) : (
            <select
              aria-label="Filter by category"
              value={category}
              onChange={(e) => setParam("category", e.target.value, initialCategory)}
              className={controlClass}
            >
              <option value="">All Categories</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>{item.title}</option>
              ))}
            </select>
          ))}

        {showCountryFilter && (
          <select
            aria-label="Filter by country"
            value={country}
            onChange={(e) => setParam("country", e.target.value, initialCountry)}
            className={controlClass}
          >
            <option value="">All Countries</option>
            <option value="Global">Global</option>
            {countries.map((item) => (
              <option key={item.slug} value={item.name}>{item.name}</option>
            ))}
          </select>
        )}

        {showSourceFilter && (
          <select
            aria-label="Filter by source"
            value={source}
            onChange={(e) => setParam("source", e.target.value, initialSource)}
            className={controlClass}
          >
            <option value="">All Sources</option>
            <option value="Global">Global</option>
            <option value="Public">Public</option>
            <option value="Sourced">Sourced</option>
          </select>
        )}
      </div>
        </>
      )}

      {/* /health/ PAGE: tabs appear after a category is chosen in the filter */}
      {!lockedCategory && activeCategory && <CategorySubtopicTabs category={activeCategory} />}

      {showFilters && (
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[#52647a]">
          <span className="font-extrabold text-[#123c8c]">{filtered.length}</span> articles found
        </p>
        <button
          type="button"
          onClick={resetFilters}
          className="rounded-lg px-3 py-2 text-sm font-bold text-[#079da7] transition hover:bg-[#eaf8f7]"
        >
          Clear filters
        </button>
      </div>
      )}

      {visible.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {visible.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {shown < filtered.length && (
            <div className="mt-9 flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setShown((count) => count + pageSize)}
                className="inline-flex items-center gap-1 rounded-xl bg-[#123c8c] px-8 py-3 text-sm font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#079da7]"
              >
                Load more articles <ExpandMoreRoundedIcon fontSize="small" />
              </button>
              <p className="text-xs font-semibold text-[#52647a]">
                Showing {visible.length} of {filtered.length}
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#b9d5dc] bg-[#f7fbfc] px-6 py-12 text-center">
          <h2 className="mb-2 text-xl font-extrabold text-[#123c8c]">
            {subtopic ? "More articles coming soon" : "No matching articles"}
          </h2>
          <p className="text-sm text-[#52647a]">
            {subtopic
              ? `New articles for "${subtopic}" will be added to the library.`
              : "Try another search term or change the filters."}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-4 rounded-lg bg-[#123c8c] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#079da7]"
          >
            Show all articles
          </button>
        </div>
      )}
    </section>
  );
}


