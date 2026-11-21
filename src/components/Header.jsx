
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { categories } from "../data/categories";
import { countries } from "../data/countries";
import logo from "../assets/global-health-sphere-logo.png";

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी" },
  { value: "te", label: "తెలుగు" },
  { value: "fr", label: "Français" },
  { value: "es", label: "Español" },
];

const navStyle =
  "inline-flex h-full items-center gap-1.5 whitespace-nowrap text-[14px] font-bold transition-colors duration-200";

function MegaMenu({ type, closeMenu }) {
  const isTopics = type === "topics";
  const items = isTopics ? categories : countries;

  return (
    <div className="absolute left-1/2 top-full z-[80] w-screen -translate-x-1/2 border-t border-[#e5edf1] bg-white shadow-[0_18px_35px_rgba(15,42,82,0.14)]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-10">

        <div className="mb-5 flex items-center justify-between border-b border-[#e9eff2] pb-4">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#079da7]">
              {isTopics
                ? "Explore our health library"
                : "Healthcare around the world"}
            </p>

            <h3 className="mt-1 text-lg font-extrabold text-[#123c8c]">
              {isTopics ? "Health Topics" : "Country Health Hubs"}
            </h3>
          </div>

          <Link
            to={isTopics ? "/health/" : "/countries/"}
            onClick={closeMenu}
            className="rounded-lg bg-[#eaf6f5] px-4 py-2 text-xs font-bold text-[#087f89] hover:bg-[#d8efeb]"
          >
            View All →
          </Link>
        </div>

        {/* Five items per column */}
        <div className="grid grid-flow-col auto-cols-[minmax(190px,1fr)] grid-rows-5 gap-x-5 gap-y-2 overflow-x-auto">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.slug}
                to={
                  isTopics
                    ? `/${item.slug}/`
                    : `/countries/${item.slug}/`
                }
                onClick={closeMenu}
                className="group flex min-h-[62px] items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 transition hover:border-[#dcefee] hover:bg-[#f1f9f8]"
              >
                {isTopics ? (
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e7f5f3] text-[#079da7] group-hover:bg-white">
                    {Icon && <Icon sx={{ fontSize: 21 }} />}
                  </span>
                ) : (
                  <span className="mt-0.5 text-2xl">
                    {item.flag || "🌍"}
                  </span>
                )}

                <span className="min-w-0">
                  <span className="block text-[13px] font-extrabold leading-5 text-[#203753] group-hover:text-[#079da7]">
                    {item.title || item.name}
                  </span>

                  {isTopics && (
                    <span className="mt-1 block text-[11px] leading-4 text-[#52647a]">
                      {Array.isArray(item.subtopics)
                        ? item.subtopics.join(" · ")
                        : item.subtopics || ""}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown("");
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown("");
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const submitSearch = (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    window.location.href = `/articles?q=${encodeURIComponent(search.trim())}`;
  };

  const desktopLink = ({ isActive }) =>
    `${navStyle} ${
      isActive
        ? "text-[#079da7]"
        : "text-[#263b5b] hover:text-[#079da7]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_16px_rgba(15,42,82,0.07)]">

      {/* TOP AWARENESS BAR */}
      <div className="bg-[#123c8c] text-white">
        <div className="mx-auto flex min-h-[38px] w-[calc(100%-2rem)] max-w-[1400px] items-center justify-between gap-3">

          <div className="flex items-center gap-2 text-[11px] font-semibold sm:text-xs">
            <HealthAndSafetyRoundedIcon sx={{ fontSize: 18 }} />

            <span>
              Global Health Awareness | Knowledge for Healthier Communities
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">

            <span className="hidden items-center gap-1.5 text-xs font-semibold md:flex">
              <PublicRoundedIcon sx={{ fontSize: 16 }} />
              Global Perspectives
            </span>

            <span className="mx-1 hidden h-4 w-px bg-white/30 md:block" />

            <LanguageRoundedIcon sx={{ fontSize: 17 }} />

            <select
              aria-label="Select language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="max-w-[105px] cursor-pointer border-0 bg-transparent py-1 text-[11px] font-bold text-white outline-none [color-scheme:dark]"
            >
              {languages.map((lang) => (
                <option
                  key={lang.value}
                  value={lang.value}
                  className="bg-white text-[#203753]"
                >
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="mx-auto flex h-[78px] w-[calc(100%-2rem)] max-w-[1400px] items-center justify-between gap-4 lg:w-[calc(100%-4rem)] max-md:h-[68px]">

        {/* LOGO */}
        <Link
          to="/"
          className="flex w-[215px] shrink-0 items-center max-lg:w-[185px] max-md:w-[165px]"
        >
          <img
            src={logo}
            alt="Global Health Sphere"
            className="h-[62px] w-full object-contain object-left max-md:h-[49px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-5 xl:flex">

          <NavLink
            to="/"
            end
            className={desktopLink}
            aria-label="Home"
          >
            <HomeRoundedIcon sx={{ fontSize: 22 }} />
          </NavLink>

          {/* HEALTH TOPICS */}
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown("topics")}
            onMouseLeave={() => setActiveDropdown("")}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "topics" ? "" : "topics"
                )
              }
              className={`${navStyle} ${
                activeDropdown === "topics"
                  ? "text-[#079da7]"
                  : "text-[#263b5b] hover:text-[#079da7]"
              }`}
            >
              Health Topics
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 19 }} />
            </button>

            {activeDropdown === "topics" && (
              <MegaMenu
                type="topics"
                closeMenu={() => setActiveDropdown("")}
              />
            )}
          </div>

          <NavLink to="/health-news/" className={desktopLink}>
            Health News
          </NavLink>

          {/* COUNTRIES */}
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setActiveDropdown("countries")}
            onMouseLeave={() => setActiveDropdown("")}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "countries" ? "" : "countries"
                )
              }
              className={`${navStyle} ${
                activeDropdown === "countries"
                  ? "text-[#079da7]"
                  : "text-[#263b5b] hover:text-[#079da7]"
              }`}
            >
              Countries
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 19 }} />
            </button>

            {activeDropdown === "countries" && (
              <MegaMenu
                type="countries"
                closeMenu={() => setActiveDropdown("")}
              />
            )}
          </div>

          <NavLink to="/doctors-opinions/" className={desktopLink}>
            Doctor's Opinions
          </NavLink>

          <NavLink to="/medical-research/" className={desktopLink}>
            Research
          </NavLink>

          <NavLink to="/about/" className={desktopLink}>
            About
          </NavLink>
        </nav>

        {/* SEARCH AND MOBILE MENU BUTTONS */}
        <div className="ml-auto flex shrink-0 items-center gap-2">

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search website"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#edf7f7] text-[#123c8c] transition hover:bg-[#dcefee]"
          >
            <SearchRoundedIcon />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#edf7f7] text-[#123c8c] transition hover:bg-[#dcefee] xl:hidden"
          >
            <MenuRoundedIcon />
          </button>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {searchOpen && (
        <div className="border-t border-[#e9eff2] bg-white px-4 py-4">
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-3xl items-center gap-3 rounded-xl border border-[#dfe9ee] p-2"
          >
            <SearchRoundedIcon className="text-[#123c8c]" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search health topics, articles and countries..."
              className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm text-[#172a43] outline-none"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#123c8c] px-5 py-2 text-sm font-bold text-white hover:bg-[#079da7]"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* MOBILE RIGHT SIDE DRAWER */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden ${
          mobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >

        {/* BACKDROP */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobile}
          className={`absolute inset-0 bg-[#071a35]/50 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,400px)] flex-col border-l-4 border-[#079da7] bg-white shadow-[-15px_0_40px_rgba(5,25,55,0.2)] transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* DRAWER HEADER */}
          <div className="flex min-h-[76px] items-center justify-between border-b border-[#e9eff2] px-5">

            <Link to="/" onClick={closeMobile}>
              <img
                src={logo}
                alt="Global Health Sphere"
                className="h-12 w-[190px] object-contain object-left"
              />
            </Link>

            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close navigation"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#edf7f7] text-[#123c8c] hover:bg-[#dcefee]"
            >
              <CloseRoundedIcon />
            </button>
          </div>

          {/* DRAWER LINKS */}
          <div className="flex-1 overflow-y-auto px-5 py-5">

            <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#079da7]">
              Explore Global Health Sphere
            </p>

            <nav className="flex flex-col">

              <NavLink
                to="/"
                end
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-sm font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <HomeRoundedIcon /> Home
              </NavLink>

              {/* MOBILE HEALTH TOPICS */}
              <details className="group border-b border-[#edf1f3]">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-bold text-[#263b5b]">
                  <span className="flex items-center gap-3">
                    <HealthAndSafetyRoundedIcon />
                    Health Topics
                  </span>

                  <KeyboardArrowDownRoundedIcon className="transition group-open:rotate-180" />
                </summary>

                <div className="grid grid-cols-1 gap-1 pb-3 pl-2">
                  {categories.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.slug}
                        to={`/${item.slug}/`}
                        onClick={closeMobile}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-[#52647a] hover:bg-[#eff8f8] hover:text-[#087f89]"
                      >
                        {Icon && <Icon sx={{ fontSize: 19 }} />}
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </details>

              <NavLink
                to="/health-news/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-sm font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <ArticleOutlinedIcon />
                Health News & Updates
              </NavLink>

              {/* MOBILE COUNTRIES */}
              <details className="group border-b border-[#edf1f3]">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-bold text-[#263b5b]">
                  <span className="flex items-center gap-3">
                    <PublicRoundedIcon />
                    Countries
                  </span>

                  <KeyboardArrowDownRoundedIcon className="transition group-open:rotate-180" />
                </summary>

                <div className="grid grid-cols-1 gap-1 pb-3 pl-2">
                  {countries.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/countries/${item.slug}/`}
                      onClick={closeMobile}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-[#52647a] hover:bg-[#eff8f8] hover:text-[#087f89]"
                    >
                      <span className="text-lg">{item.flag || "🌍"}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </details>

              <NavLink
                to="/doctors-opinions/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-sm font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <MedicalInformationOutlinedIcon />
                Doctor's Opinions
              </NavLink>

              <NavLink
                to="/medical-research/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-sm font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <ScienceOutlinedIcon />
                Medical Research & Innovation
              </NavLink>

              <NavLink
                to="/about/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-sm font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <InfoOutlinedIcon />
                About Us
              </NavLink>

            </nav>
          </div>

          {/* DRAWER FOOTER */}
          <div className="border-t border-[#e9eff2] bg-[#f3f9f8] px-5 py-5">
            <p className="text-sm font-extrabold text-[#123c8c]">
              Health Knowledge. Global Perspectives.
            </p>

            <p className="mt-1 text-xs text-[#52647a]">
              Awareness • Research • Health for All
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}








































// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
// import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
// import { categories } from "../data/categories";
// import { countries } from "../data/countries";
// import logo from "../assets/global-health-sphere-logo.png";

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [activeDropdown, setActiveDropdown] = useState("");

//   const submitSearch = (e) => {
//     e.preventDefault();
//     window.location.href = `/articles?q=${encodeURIComponent(search)}`;
//   };

//   const navLink = ({ isActive }) =>
//     `inline-flex h-full items-center gap-2 text-sm font-bold transition ${isActive ? "text-[#079da7]" : "text-[#34445d] hover:text-[#079da7]"}`;

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-[0_3px_18px_rgba(15,42,82,0.07)]">
//       <div className="bg-[#123c8c] text-[#eaf5ff] text-xs">
//         <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] flex min-h-8 items-center justify-between gap-4">
//           <span>
//             <HealthAndSafetyRoundedIcon fontSize="inherit" /> Global health
//             awareness for everyone
//           </span>
//           <span className="flex items-center gap-2 max-md:hidden">
//             <ArticleOutlinedIcon fontSize="inherit" /> Articles & research{" "}
//             <LanguageRoundedIcon fontSize="inherit" /> Country-wise health
//             insights <PublicRoundedIcon fontSize="inherit" /> Global
//             perspectives
//           </span>
//         </div>
//       </div>
//       <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] flex h-[76px] items-center justify-between gap-5 max-md:h-[68px]">
//         <Link
//           to="/"
//           className="flex w-[220px] shrink-0 items-center max-md:w-[175px]"
//           aria-label="Global Health Sphere home"
//         >
//           <img
//             className="h-[62px] w-full object-contain object-left max-md:h-[48px]"
//             src={logo}
//             alt="Global Health Sphere logo"
//           />
//         </Link>
//         <nav
//           className="flex h-full items-center gap-6 max-lg:gap-3 max-md:hidden"
//           aria-label="Main navigation"
//         >
//           <NavLink
//             to="/"
//             end
//             className={navLink}
//             title="Home"
//             aria-label="Home"
//           >
//             <HomeRoundedIcon />
//             <span className="sr-only">Home</span>
//           </NavLink>
//           <div
//             className="relative flex h-full items-center"
//             onMouseEnter={() => setActiveDropdown("topics")}
//             onMouseLeave={() => setActiveDropdown("")}
//           >
//             <button
//               className={`inline-flex h-full items-center gap-1 whitespace-nowrap border-0 bg-transparent text-sm font-bold text-[#34445d] transition hover:text-[#079da7] cursor-pointer ${activeDropdown === "topics" ? "!text-[#079da7]" : ""}`}
//               onClick={() =>
//                 setActiveDropdown(activeDropdown === "topics" ? "" : "topics")
//               }
//             >
//               Health Topics <KeyboardArrowDownRoundedIcon fontSize="small" />
//             </button>
//             {activeDropdown === "topics" && (
//               <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(500px,90vw)] rounded-xl border border-[#e7eef2] bg-white p-5 shadow-[0_15px_35px_rgba(16,45,82,0.13)] w-[min(540px,90vw)]">
//                 <div className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#079da7]">
//                   Explore health topics
//                 </div>
//                 <div className="grid grid-cols-2 gap-1 [&>a]:rounded-lg [&>a]:px-3 [&>a]:py-2 [&>a]:text-sm [&>a]:text-[#34445d] [&>a:hover]:bg-[#effafa] [&>a:hover]:text-[#087f89]">
//                   {categories.map((item) => (
//                     <Link
//                       key={item.slug}
//                       to={`/${item.slug}/`}
//                       onClick={() => setActiveDropdown("")}
//                     >
//                       {item.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           <NavLink to="/health-news/" className={navLink}>
//             Health News
//           </NavLink>
//           <div
//             className="relative flex h-full items-center"
//             onMouseEnter={() => setActiveDropdown("countries")}
//             onMouseLeave={() => setActiveDropdown("")}
//           >
//             <button
//               className={`inline-flex h-full items-center gap-1 whitespace-nowrap border-0 bg-transparent text-sm font-bold text-[#34445d] transition hover:text-[#079da7] cursor-pointer ${activeDropdown === "countries" ? "!text-[#079da7]" : ""}`}
//               onClick={() =>
//                 setActiveDropdown(
//                   activeDropdown === "countries" ? "" : "countries",
//                 )
//               }
//             >
//               Countries <KeyboardArrowDownRoundedIcon fontSize="small" />
//             </button>
//             {activeDropdown === "countries" && (
//               <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[min(500px,90vw)] rounded-xl border border-[#e7eef2] bg-white p-5 shadow-[0_15px_35px_rgba(16,45,82,0.13)] w-[min(380px,90vw)]">
//                 <div className="mb-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#079da7]">
//                   Country health hubs
//                 </div>
//                 <div className="grid grid-cols-2 gap-1 [&>a]:rounded-lg [&>a]:px-3 [&>a]:py-2 [&>a]:text-sm [&>a]:text-[#34445d] [&>a:hover]:bg-[#effafa] [&>a:hover]:text-[#087f89] [&>a]:flex [&>a]:items-center [&>a]:gap-2">
//                   {countries.map((item) => (
//                     <Link
//                       key={item.slug}
//                       to={`/countries/${item.slug}/`}
//                       onClick={() => setActiveDropdown("")}
//                     >
//                       <span>{item.flag}</span>
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           <NavLink to="/about/" className={navLink}>
//             About
//           </NavLink>
//         </nav>
//         <button
//           className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f0f8f9] text-[#123c8c] hover:bg-[#e1f4f2]"
//           aria-label="Open search"
//           onClick={() => setSearchOpen(!searchOpen)}
//         >
//           <SearchRoundedIcon />
//         </button>
//         <button
//           className="hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f0f8f9] text-[#123c8c] max-md:grid"
//           aria-label="Toggle menu"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
//         </button>
//       </div>
//       {searchOpen && (
//         <div className="border-t border-[#edf2f5] py-3">
//           <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)]">
//             <form
//               className="mx-auto flex max-w-3xl items-center gap-3 rounded-xl border border-[#e2eaf0] p-2"
//               onSubmit={submitSearch}
//             >
//               <SearchRoundedIcon />
//               <input
//                 className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm text-[#172a43] outline-none"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search articles, diseases, topics or countries..."
//               />
//               <button
//                 className="rounded-lg bg-[#123c8c] px-5 py-2 text-sm font-bold text-white"
//                 type="submit"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//       {mobileOpen && (
//         <div className="hidden flex-col border-t border-[#edf1f3] px-5 py-3 max-md:flex [&>a]:flex [&>a]:items-center [&>a]:gap-3 [&>a]:border-b [&>a]:border-[#f0f3f5] [&>a]:py-3 [&>a]:font-bold [&>a]:text-[#34445d]">
//           <NavLink to="/" end onClick={() => setMobileOpen(false)}>
//             <HomeRoundedIcon /> Home
//           </NavLink>
//           <details className="border-b border-[#edf1f3] py-2">
//             <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-bold text-[#34445d]">
//               Health Topics <KeyboardArrowDownRoundedIcon />
//             </summary>
//             <div className="grid grid-cols-2 gap-1 px-2 py-3 [&>a]:p-2 [&>a]:text-sm [&>a]:text-[#52647a]">
//               {categories.map((item) => (
//                 <Link
//                   key={item.slug}
//                   to={`/${item.slug}/`}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </div>
//           </details>
//           <NavLink to="/health-news/" onClick={() => setMobileOpen(false)}>
//             Health News
//           </NavLink>
//           <details className="border-b border-[#edf1f3] py-2">
//             <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-bold text-[#34445d]">
//               Countries <KeyboardArrowDownRoundedIcon />
//             </summary>
//             <div className="grid grid-cols-2 gap-1 px-2 py-3 [&>a]:p-2 [&>a]:text-sm [&>a]:text-[#52647a]">
//               {countries.map((item) => (
//                 <Link
//                   key={item.slug}
//                   to={`/countries/${item.slug}/`}
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {item.flag} {item.name}
//                 </Link>
//               ))}
//             </div>
//           </details>
//           <NavLink to="/about/" onClick={() => setMobileOpen(false)}>
//             About
//           </NavLink>
//         </div>
//       )}
//     </header>
//   );
// }
