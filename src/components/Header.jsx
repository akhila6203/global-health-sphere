

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

/* --------------------------------------------------
   INTERNATIONAL LANGUAGES
-------------------------------------------------- */

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "te", label: "Telugu" },
  { value: "ta", label: "Tamil" },
  { value: "kn", label: "Kannada" },
  { value: "ml", label: "Malayalam" },
  { value: "bn", label: "Bengali" },
  { value: "mr", label: "Marathi" },
  { value: "gu", label: "Gujarati" },
  { value: "pa", label: "Punjabi" },
  { value: "ur", label: "Urdu" },
  { value: "ar", label: "Arabic" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "pt", label: "Portuguese" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "ru", label: "Russian" },
  { value: "zh", label: "Chinese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "id", label: "Indonesian" },
  { value: "sw", label: "Swahili" },
  { value: "tr", label: "Turkish" },
  { value: "th", label: "Thai" },
  { value: "vi", label: "Vietnamese" },
  { value: "nl", label: "Dutch" },
];

/* --------------------------------------------------
   COMMON NAVIGATION STYLES
-------------------------------------------------- */
const navStyle =
  "inline-flex h-full items-center gap-1 whitespace-nowrap text-[16px] min-[1400px]:text-[17px] min-[1600px]:text-[18px] font-bold transition-colors duration-200";
  
const dropdownItemStyle =
  "flex min-h-[52px] items-center gap-3 rounded-lg px-3 py-2.5 text-[16px] min-[1400px]:text-[17px] min-[1600px]:text-[18px] font-semibold text-[#263b5b] transition hover:bg-[#eff8f7] hover:text-[#079da7]";

/* --------------------------------------------------
   MEGA DROPDOWN
-------------------------------------------------- */

function MegaMenu({ type, closeMenu }) {
  const isTopics = type === "topics";
  const items = isTopics ? categories : countries;

  // Maximum five rows; remaining items move into new columns.
  const rowCount = Math.min(5, items.length);

  return (
    <div
  className="
    absolute
    left-0
    top-[calc(100%-18px)]
    z-[100]
    w-max
    max-w-[calc(100vw-24px)]
    translate-x-0
    rounded-b-xl
    bg-white
    shadow-[0_15px_35px_rgba(15,42,82,0.15)]
  "
  role="region"
>
      <div className="max-h-[75vh] max-w-[calc(100vw-24px)] overflow-auto p-4 lg:p-5">

        <div
          className="
            grid
            grid-flow-col
            gap-x-2
            gap-y-1
          "
          style={{
            gridTemplateRows: `repeat(${rowCount}, minmax(54px, auto))`,
            gridAutoColumns: "max-content",
          }}
        >
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
                className="
                  flex
                  min-h-[54px]
                  min-w-[250px]
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-lg
                  px-3
                  py-2
                  text-[16px]
                  min-[1400px]:text-[17px]
                  min-[1600px]:text-[18px]
                  font-semibold
                  text-[#263b5b]
                  transition-colors
                  hover:bg-[#eff8f7]
                  hover:text-[#079da7]
                "
              >
                {isTopics && Icon && (
                  <span className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg bg-[#e9f6f4]
                    text-[#079da7]
                  ">
                    <Icon sx={{ fontSize: 21 }} />
                  </span>
                )}

                <span className="whitespace-nowrap">
                  {item.title || item.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}

/* --------------------------------------------------
   HEADER COMPONENT
-------------------------------------------------- */

export default function Header() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeDropdown, setActiveDropdown] = useState("");
  const [language, setLanguage] = useState("en");
  const [languageOpen, setLanguageOpen] = useState(false);
  

  /* Close menus after navigation */

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown("");
    setSearchOpen(false);
  }, [location.pathname]);

  /* Prevent background scrolling */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Escape key */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown("");
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  /* Search */

  const submitSearch = (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    window.location.href =
      `/articles?q=${encodeURIComponent(search.trim())}`;
  };

  /* Navigation active style */

  const desktopLink = ({ isActive }) =>
    `${navStyle} ${
      isActive
        ? "text-[#079da7]"
        : "text-[#263b5b] hover:text-[#079da7]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_16px_rgba(15,42,82,0.07)]">

      {/* ==========================================
          TOP HEADER
      ========================================== */}

      <div className="bg-[#123c8c] text-white">

        <div className="mx-auto flex min-h-[40px] w-[calc(100%-2rem)] max-w-[1400px] items-center justify-between gap-3">

         <div className="
  flex min-w-0 max-w-[55%] items-center gap-1.5
  text-[13px]
  sm:max-w-none sm:gap-2 sm:text-[14px]
  min-[1400px]:text-[15px]
  min-[1600px]:text-[16px]
  font-semibold
">

            <HealthAndSafetyRoundedIcon
              sx={{ fontSize: 20 }}
            />

            <span className="truncate">
            <span className="sm:hidden">
              Global Health Awareness
            </span>

            <span className="hidden sm:inline">
              Global Health Awareness | Knowledge for Healthier Communities
            </span>
          </span>

          </div>

          {/* LANGUAGE SELECTOR */}

          <div className="relative flex shrink-0 items-center gap-2">

            <span className="hidden items-center gap-1.5 text-[13px] font-semibold md:flex">
              <PublicRoundedIcon sx={{ fontSize: 17 }} />
              Global Perspectives
            </span>

            <span className="mx-1 hidden h-4 w-px bg-white/30 md:block" />

            
<LanguageRoundedIcon sx={{ fontSize: 19 }} />

{/* CUSTOM LANGUAGE DROPDOWN */}

<div className="relative">

  <button
    type="button"
    onClick={() => setLanguageOpen(!languageOpen)}
    aria-expanded={languageOpen}
    className="
      flex min-w-[120px] items-center justify-between
      gap-2 rounded-md px-2 py-2
      text-[13px] min-[1400px]:text-[15px]
      font-semibold text-white
      transition hover:bg-white/10
    "
  >
    <span>
      {languages.find((lang) => lang.value === language)?.label || "English"}
    </span>

    <KeyboardArrowDownRoundedIcon
      sx={{
        fontSize: 20,
        transform: languageOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 200ms",
      }}
    />
  </button>

  {languageOpen && (
    <div
      className="
        absolute right-0 top-full z-[200]
        mt-0
       w-[175px] min-[1400px]:w-[190px]
        max-w-[calc(100vw-24px)]
        max-h-[65vh]
        overflow-y-auto
        overflow-x-hidden
        rounded-xl
        border border-[#e3ecee]
        bg-white
        p-2
        shadow-[0_12px_30px_rgba(15,42,82,0.18)]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {languages.map((lang) => (
        <button
          key={lang.value}
          type="button"
          onClick={() => {
            setLanguage(lang.value);
            setLanguageOpen(false);
          }}
          className={`
            flex w-full items-center justify-between
            rounded-lg px-4 py-3
            text-left text-[15px]
            font-semibold transition
            ${
              language === lang.value
                ? "bg-[#e9f6f4] text-[#079da7]"
                : "text-[#263b5b] hover:bg-[#eff8f7] hover:text-[#079da7]"
            }
          `}
        >
          {lang.label}

          {language === lang.value && (
            <span className="text-[#079da7]">✓</span>
          )}
        </button>
      ))}
    </div>
  )}

</div>


          </div>
        </div>
      </div>

      {/* ==========================================
          MAIN HEADER
      ========================================== */}

      <div className="mx-auto flex h-[82px] w-[calc(100%-2rem)] max-w-[1400px] items-center justify-between gap-4 lg:w-[calc(100%-4rem)] max-md:h-[68px]">

        {/* LOGO */}

        <Link
          to="/"
          className="flex w-[220px] shrink-0 items-center max-lg:w-[190px] max-md:w-[165px]"
        >
          <img
            src={logo}
            alt="Global Health Sphere"
            className="h-[65px] w-full object-contain object-left max-md:h-[50px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav className="hidden h-full flex-1 items-center justify-center gap-5 min-[1400px]:gap-6 xl:flex">

          {/* HOME ICON */}

          <NavLink
            to="/"
            end
            className={desktopLink}
            aria-label="Home"
            title="Home"
          >
            <HomeRoundedIcon
              sx={{
                fontSize: 24,
                "@media (min-width: 1600px)": {
                  fontSize: 30,
                },
              }}
            />
          </NavLink>

          {/* HEALTH TOPICS */}

          <div
  className="relative flex h-full items-center"
  onMouseEnter={() => setActiveDropdown("topics")}
  onMouseLeave={() => setActiveDropdown("")}
>

            <Link
              to="/health/"
              onClick={() => setActiveDropdown("")}
              aria-expanded={activeDropdown === "topics"}
              className={`${navStyle} ${
                activeDropdown === "topics"
                  ? "text-[#079da7]"
                  : "text-[#263b5b] hover:text-[#079da7]"
              }`}
            >
              Health Topics

              <KeyboardArrowDownRoundedIcon
                sx={{
                  fontSize: 20,
                  transform:
                    activeDropdown === "topics"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 200ms ease",
                }}
              />
            </Link>

            {activeDropdown === "topics" && (
              <MegaMenu
                type="topics"
                closeMenu={() => setActiveDropdown("")}
              />
            )}

          </div>

          {/* HEALTH NEWS */}

          <NavLink
            to="/health-news/"
            className={desktopLink}
          >
            Health News
          </NavLink>

          {/* COUNTRIES */}

          {/* <div
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
              aria-expanded={activeDropdown === "countries"}
              className={`${navStyle} ${
                activeDropdown === "countries"
                  ? "text-[#079da7]"
                  : "text-[#263b5b] hover:text-[#079da7]"
              }`}
            >
              Countries

              <KeyboardArrowDownRoundedIcon
                sx={{ fontSize: 20 }}
              />
            </button>

            {activeDropdown === "countries" && (
              <MegaMenu
                type="countries"
                closeMenu={() => setActiveDropdown("")}
              />
            )}

          </div> */}

          {/* DOCTORS */}

          <NavLink
            to="/doctors-opinions/"
            className={desktopLink}
          >
            Doctor's Opinions
          </NavLink>

          {/* RESEARCH */}

          {/* RESOURCES DROPDOWN */}

<div
  className="relative flex h-full items-center"
  onMouseEnter={() => setActiveDropdown("resources")}
  onMouseLeave={() => setActiveDropdown("")}
>
  <button
    type="button"
    onClick={() =>
      setActiveDropdown(
        activeDropdown === "resources" ? "" : "resources"
      )
    }
    aria-expanded={activeDropdown === "resources"}
    className={`${navStyle} ${
      activeDropdown === "resources"
        ? "text-[#079da7]"
        : "text-[#263b5b] hover:text-[#079da7]"
    }`}
  >
    Resources

   <KeyboardArrowDownRoundedIcon
  sx={{
    fontSize: 20,
    transform:
      activeDropdown === "resources"
        ? "rotate(180deg)"
        : "rotate(0deg)",
    transition: "transform 200ms ease",
  }}
/>
  </button>

  {activeDropdown === "resources" && (
    <div
  className="
    absolute
    left-0
    top-[calc(100%-18px)]
    z-[100]
    w-[250px]
    rounded-b-xl
    bg-white
    p-2
    shadow-[0_15px_35px_rgba(15,42,82,0.15)]
  "
>
      <Link
        to="/phd-resources/"
        onClick={() => setActiveDropdown("")}
        className={dropdownItemStyle}
      >
        PhD Resources
      </Link>

      <Link
        to="/general-resources/"
        onClick={() => setActiveDropdown("")}
        className={dropdownItemStyle}
      >
        General Resources
      </Link>
    </div>
  )}
</div>

          {/* ABOUT */}

          {/* <NavLink
            to="/about/"
            className={desktopLink}
          >
            About
          </NavLink> */}

        </nav>

        {/* SEARCH AND MOBILE MENU */}

        <div className="ml-auto flex shrink-0 items-center gap-2">

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search website"
            className="grid h-10 w-10 place-items-center rounded-full bg-[#edf7f7] text-[#123c8c] transition hover:bg-[#dcefee]"
          >
            <SearchRoundedIcon
              sx={{
                fontSize: 24,
                "@media (min-width: 1600px)": {
                  fontSize: 28,
                },
              }}
            />
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

      {/* ==========================================
          SEARCH PANEL
      ========================================== */}

     
{/* SEARCH PANEL */}

{searchOpen && (
  <div className="
    border-t border-[#e9eff2]
    bg-white
    px-3
    py-2
    animate-in
    slide-in-from-top-1
    duration-200
  ">

    <form
      onSubmit={submitSearch}
      className="
        mx-auto
        flex
        max-w-3xl
        items-center
        gap-2
        rounded-lg
        border
        border-[#dfe9ee]
        px-2
        py-1
      "
    >

      <SearchRoundedIcon
        sx={{ fontSize: 21 }}
        className="shrink-0 text-[#123c8c]"
      />

      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search health topics, articles and countries..."
        className="
          min-w-0
          flex-1
          border-0
          bg-transparent
          px-2
          py-1
          text-[16px]
          text-[#172a43]
          outline-none
        "
      />

      <button
        type="submit"
        className="
          rounded-md
          bg-[#123c8c]
          px-4
          py-1.5
          text-[15px]
          font-bold
          text-white
          transition
          hover:bg-[#079da7]
        "
      >
        Search
      </button>

    </form>
  </div>
)}

      {/* ==========================================
          MOBILE RIGHT SIDE DRAWER
      ========================================== */}

      <div
        className={`fixed inset-0 z-[100] xl:hidden ${
          mobileOpen
            ? "visible"
            : "invisible pointer-events-none"
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

        {/* RIGHT DRAWER */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,400px)] flex-col border-l-4 border-[#079da7] bg-white shadow-[-15px_0_40px_rgba(5,25,55,0.2)] transition-transform duration-300 ease-in-out ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
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
              className="grid h-10 w-10 place-items-center rounded-full bg-[#edf7f7] text-[#123c8c]"
            >
              <CloseRoundedIcon />
            </button>

          </div>

          {/* MOBILE NAVIGATION */}

          <div className="flex-1 overflow-y-auto px-5 py-3">

            <nav className="flex flex-col">

              {/* HOME */}

              <NavLink
                to="/"
                end
                onClick={closeMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 border-b border-[#edf1f3] py-4 text-[16px] font-bold ${
                    isActive
                      ? "text-[#079da7]"
                      : "text-[#263b5b]"
                  }`
                }
              >
                <HomeRoundedIcon />
                Home
              </NavLink>

              {/* HEALTH TOPICS */}

              <details className="group border-b border-[#edf1f3]">

                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-bold text-[#263b5b]">

                  <span className="flex items-center gap-3">
                    <HealthAndSafetyRoundedIcon />
                    Health Topics
                  </span>

                  <KeyboardArrowDownRoundedIcon className="transition group-open:rotate-180" />

                </summary>

                <div className="grid grid-cols-1 gap-1 pb-3 pl-2">

                  <Link
                    to="/health/"
                    onClick={closeMobile}
                    className="flex items-center gap-3 rounded-lg bg-[#eff8f8] px-3 py-3 text-[16px] font-extrabold text-[#087f89]"
                  >
                    All Health Topics
                  </Link>

                  {categories.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.slug}
                        to={`/${item.slug}/`}
                        onClick={closeMobile}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-[16px] font-semibold text-[#263b5b] hover:bg-[#eff8f8] hover:text-[#087f89]"
                      >
                        {Icon && <Icon sx={{ fontSize: 20 }} />}

                        {item.title}
                      </Link>
                    );
                  })}

                </div>
              </details>

              {/* HEALTH NEWS */}

              <NavLink
                to="/health-news/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-[16px] font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <ArticleOutlinedIcon />
                Health News
              </NavLink>

              {/* COUNTRIES */}

              {/* <details className="group border-b border-[#edf1f3]">

                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-bold text-[#263b5b]">

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
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-[16px] font-semibold text-[#263b5b] hover:bg-[#eff8f8] hover:text-[#087f89]"
                    >
                      <span className="text-lg">
                        {item.flag || "🌍"}
                      </span>

                      {item.name}
                    </Link>
                  ))}

                </div>
              </details> */}

              {/* DOCTORS */}

              <NavLink
                to="/doctors-opinions/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-[16px] font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <MedicalInformationOutlinedIcon />
                Doctor's Opinions
              </NavLink>

              {/* RESEARCH */}

              {/* RESOURCES DROPDOWN */}

<details className="group border-b border-[#edf1f3]">

  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[16px] font-bold text-[#263b5b]">

    <span className="flex items-center gap-3">
      <ScienceOutlinedIcon />
      Resources
    </span>

    <KeyboardArrowDownRoundedIcon className="transition group-open:rotate-180" />

  </summary>

  <div className="grid grid-cols-1 gap-1 pb-3 pl-2">

    <Link
      to="/phd-resources/"
      onClick={closeMobile}
      className="flex items-center rounded-lg px-3 py-3 text-[16px] font-semibold text-[#263b5b] hover:bg-[#eff8f8] hover:text-[#079da7]"
    >
      PhD Resources
    </Link>

    <Link
      to="/general-resources/"
      onClick={closeMobile}
      className="flex items-center rounded-lg px-3 py-3 text-[16px] font-semibold text-[#263b5b] hover:bg-[#eff8f8] hover:text-[#079da7]"
    >
      General Resources
    </Link>

  </div>
</details>

              {/* ABOUT */}

              {/* <NavLink
                to="/about/"
                onClick={closeMobile}
                className="flex items-center gap-3 border-b border-[#edf1f3] py-4 text-[16px] font-bold text-[#263b5b] hover:text-[#079da7]"
              >
                <InfoOutlinedIcon />
                About
              </NavLink> */}

            </nav>
          </div>

        </aside>
      </div>

    </header>
  );
}

