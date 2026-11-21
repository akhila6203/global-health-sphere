import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { categories } from "../data/categories";
import { countries } from "../data/countries";
import logo from "../assets/global-health-sphere-logo.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    window.location.href = `/articles?q=${encodeURIComponent(search)}`;
  };

  const navLink = ({ isActive }) =>
    `inline-flex h-full items-center gap-2 text-sm font-bold transition ${isActive ? "text-[#079da7]" : "text-[#34445d] hover:text-[#079da7]"}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_3px_18px_rgba(15,42,82,0.07)]">
      <div className="bg-[#123c8c] text-[#eaf5ff] text-xs">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] flex min-h-8 items-center justify-between gap-4">
          <span>
            <HealthAndSafetyRoundedIcon fontSize="inherit" /> Global health
            awareness for everyone
          </span>
          <span className="flex items-center gap-2 max-md:hidden">
            <ArticleOutlinedIcon fontSize="inherit" /> Articles & research{" "}
            <LanguageRoundedIcon fontSize="inherit" /> Country-wise health
            insights <PublicRoundedIcon fontSize="inherit" /> Global
            perspectives
          </span>
        </div>
      </div>
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] flex h-[76px] items-center justify-between gap-5 max-md:h-[68px]">
        <Link
          to="/"
          className="flex w-[220px] shrink-0 items-center max-md:w-[175px]"
          aria-label="Global Health Sphere home"
        >
          <img
            className="h-[62px] w-full object-contain object-left max-md:h-[48px]"
            src={logo}
            alt="Global Health Sphere logo"
          />
        </Link>
        <nav
          className="flex h-full items-center gap-6 max-lg:gap-3 max-md:hidden"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            end
            className={navLink}
            title="Home"
            aria-label="Home"
          >
            <HomeRoundedIcon />
            <span className="sr-only">Home</span>
          </NavLink>
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown("topics")}
            onMouseLeave={() => setActiveDropdown("")}
          >
            <button
              className={`inline-flex h-full items-center gap-1 whitespace-nowrap border-0 bg-transparent text-sm font-bold text-[#34445d] transition hover:text-[#079da7] cursor-pointer ${activeDropdown === "topics" ? "!text-[#079da7]" : ""}`}
              onClick={() =>
                setActiveDropdown(activeDropdown === "topics" ? "" : "topics")
              }
            >
              Health Topics <KeyboardArrowDownRoundedIcon fontSize="small" />
            </button>
            {activeDropdown === "topics" && (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(500px,90vw)] rounded-xl border border-[#e7eef2] bg-white p-5 shadow-[0_15px_35px_rgba(16,45,82,0.13)] w-[min(540px,90vw)]">
                <div className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#079da7]">
                  Explore health topics
                </div>
                <div className="grid grid-cols-2 gap-1 [&>a]:rounded-lg [&>a]:px-3 [&>a]:py-2 [&>a]:text-sm [&>a]:text-[#34445d] [&>a:hover]:bg-[#effafa] [&>a:hover]:text-[#087f89]">
                  {categories.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/${item.slug}/`}
                      onClick={() => setActiveDropdown("")}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/health-news/" className={navLink}>
            Health News
          </NavLink>
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown("countries")}
            onMouseLeave={() => setActiveDropdown("")}
          >
            <button
              className={`inline-flex h-full items-center gap-1 whitespace-nowrap border-0 bg-transparent text-sm font-bold text-[#34445d] transition hover:text-[#079da7] cursor-pointer ${activeDropdown === "countries" ? "!text-[#079da7]" : ""}`}
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "countries" ? "" : "countries",
                )
              }
            >
              Countries <KeyboardArrowDownRoundedIcon fontSize="small" />
            </button>
            {activeDropdown === "countries" && (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(500px,90vw)] rounded-xl border border-[#e7eef2] bg-white p-5 shadow-[0_15px_35px_rgba(16,45,82,0.13)] w-[min(380px,90vw)]">
                <div className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#079da7]">
                  Country health hubs
                </div>
                <div className="grid grid-cols-2 gap-1 [&>a]:rounded-lg [&>a]:px-3 [&>a]:py-2 [&>a]:text-sm [&>a]:text-[#34445d] [&>a:hover]:bg-[#effafa] [&>a:hover]:text-[#087f89] [&>a]:flex [&>a]:items-center [&>a]:gap-2">
                  {countries.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/countries/${item.slug}/`}
                      onClick={() => setActiveDropdown("")}
                    >
                      <span>{item.flag}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about/" className={navLink}>
            About
          </NavLink>
        </nav>
        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f0f8f9] text-[#123c8c] hover:bg-[#e1f4f2]"
          aria-label="Open search"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <SearchRoundedIcon />
        </button>
        <button
          className="hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f0f8f9] text-[#123c8c] max-md:grid"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </button>
      </div>
      {searchOpen && (
        <div className="border-t border-[#edf2f5] py-3">
          <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)]">
            <form
              className="mx-auto flex max-w-3xl items-center gap-3 rounded-xl border border-[#e2eaf0] p-2"
              onSubmit={submitSearch}
            >
              <SearchRoundedIcon />
              <input
                className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm text-[#172a43] outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles, diseases, topics or countries..."
              />
              <button
                className="rounded-lg bg-[#123c8c] px-5 py-2 text-sm font-bold text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
      {mobileOpen && (
        <div className="hidden flex-col border-t border-[#edf1f3] px-5 py-3 max-md:flex [&>a]:flex [&>a]:items-center [&>a]:gap-3 [&>a]:border-b [&>a]:border-[#f0f3f5] [&>a]:py-3 [&>a]:font-bold [&>a]:text-[#34445d]">
          <NavLink to="/" end onClick={() => setMobileOpen(false)}>
            <HomeRoundedIcon /> Home
          </NavLink>
          <details className="border-b border-[#edf1f3] py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-bold text-[#34445d]">
              Health Topics <KeyboardArrowDownRoundedIcon />
            </summary>
            <div className="grid grid-cols-2 gap-1 px-2 py-3 [&>a]:p-2 [&>a]:text-sm [&>a]:text-[#52647a]">
              {categories.map((item) => (
                <Link
                  key={item.slug}
                  to={`/${item.slug}/`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>
          <NavLink to="/health-news/" onClick={() => setMobileOpen(false)}>
            Health News
          </NavLink>
          <details className="border-b border-[#edf1f3] py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-bold text-[#34445d]">
              Countries <KeyboardArrowDownRoundedIcon />
            </summary>
            <div className="grid grid-cols-2 gap-1 px-2 py-3 [&>a]:p-2 [&>a]:text-sm [&>a]:text-[#52647a]">
              {countries.map((item) => (
                <Link
                  key={item.slug}
                  to={`/countries/${item.slug}/`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.flag} {item.name}
                </Link>
              ))}
            </div>
          </details>
          <NavLink to="/about/" onClick={() => setMobileOpen(false)}>
            About
          </NavLink>
        </div>
      )}
    </header>
  );
}
