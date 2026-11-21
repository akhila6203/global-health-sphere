
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";

import SectionHeading from "../components/SectionHeading";
import ArticleCard from "../components/ArticleCard";
import Newsletter from "../components/Newsletter";

import { categories } from "../data/categories";
import { countries } from "../data/countries";
import { articles } from "../data/articles";

const slides = [
  {
    eyebrow: "Global health awareness",
    title: "Health Knowledge. Global Perspectives.",
    text: "Explore trusted health information, disease awareness, medical research and healthcare developments from around the world. Our mission is to make reliable health knowledge accessible to everyone.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=90",
    button: "Explore Health Articles",
    link: "/articles/",
  },
  {
    eyebrow: "Understand your health",
    title: "Know the Signs. Make Informed Choices.",
    text: "Discover clear and accessible information about diseases, symptoms, prevention, diagnosis and healthy living to help you make informed health decisions.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1800&q=90",
    button: "Explore Health Topics",
    link: "/health/",
  },
  {
    eyebrow: "Healthcare around the world",
    title: "A Healthier World Starts with Knowledge.",
    text: "Explore healthcare systems, public-health priorities, medical advancements and health awareness from countries and communities around the globe.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1800&q=90",
    button: "Explore Countries",
    link: "/countries/",
  },
];

const container =
  "mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)]";

const actionClass =
  "inline-flex items-center gap-2 rounded-lg bg-[#35c94a] px-5 py-2.5 text-sm font-bold text-[#103b4c] transition hover:-translate-y-0.5 hover:bg-[#68df75]";

const countrySymbols = {
  usa: "🗽",
  canada: "🍁",
  "south-africa": "🌍",
  nigeria: "🦅",
  kenya: "🦁",
  india: "🏛️",
  ghana: "⭐",
  uk: "🏰",
  australia: "🦘",
};

const featureCards = [
  {
    eyebrow: "EXPERT COMMENTARY",
    title: "Doctor's Opinions",
    description:
      "Read expert perspectives, medical opinions and interviews that help explain important health topics.",
    link: "/doctors-opinions/",
    button: "Read Expert Opinions",
    icon: MedicalServicesOutlinedIcon,
  },
  {
    eyebrow: "RESEARCH EXPLAINED",
    title: "Medical Research & Innovation",
    description:
      "Understand medical discoveries, healthcare technologies, clinical developments and research in simple language.",
    link: "/medical-research/",
    button: "Explore Medical Research",
    icon: ScienceOutlinedIcon,
  },
  {
    eyebrow: "GLOBAL HEALTH UPDATES",
    title: "Health News & Updates",
    description:
      "Stay informed about public-health developments, health campaigns, medical announcements and global health updates.",
    link: "/health-news/",
    button: "Read Health News",
    icon: NewspaperOutlinedIcon,
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");

  const current = slides[slide];

  // Automatically move to the next slide.
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setSlide((previous) =>
      previous === 0 ? slides.length - 1 : previous - 1
    );
  };

  return (
    <>
      {/* 1. HERO SLIDER */}
      <section className="relative h-[520px] overflow-hidden bg-[#102f66] text-white max-md:h-[480px] max-sm:h-[500px]">
        {slides.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              slide === index ? "z-0 opacity-100" : "z-0 opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7,31,76,.92), rgba(7,31,76,.66) 55%, rgba(7,31,76,.20)), url(${item.image})`,
            }}
          />
        ))}

        <div className={`${container} relative z-10 flex h-full items-center`}>
          <div className="max-w-[650px] py-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#baf4d1] sm:text-xs">
              <PublicRoundedIcon fontSize="small" />
              {current.eyebrow}
            </span>

            <h1 className="my-4 max-w-[650px] text-left text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              {current.title}
            </h1>

            <p className="max-w-[560px] text-left text-sm leading-relaxed text-[#f3f7fc] sm:text-[15px]">
              {current.text}
            </p>

            <Link className={`${actionClass} mt-5`} to={current.link}>
              {current.button}
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>

            <form
              className="mt-5 flex max-w-[540px] items-center gap-2 rounded-xl bg-white p-1.5 text-[#123c8c] shadow-lg max-sm:gap-1"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/articles/?q=${encodeURIComponent(search)}`;
              }}
            >
              <SearchRoundedIcon className="ml-2 shrink-0" />

              <input
                className="min-w-0 flex-1 border-0 px-2 py-2 text-sm text-[#172a43] outline-none"
                aria-label="Search health information"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search symptoms, diseases, health topics..."
              />

              <button
                type="submit"
                className="rounded-lg bg-[#123c8c] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#079da7]"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        {/* Previous and Next Arrows */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-[#102f66]/50 text-white backdrop-blur-sm transition hover:bg-[#079da7] sm:left-7 sm:h-12 sm:w-12"
        >
          <ChevronLeftRoundedIcon fontSize="large" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-[#102f66]/50 text-white backdrop-blur-sm transition hover:bg-[#079da7] sm:right-7 sm:h-12 sm:w-12"
        >
          <ChevronRightRoundedIcon fontSize="large" />
        </button>

        {/* Slider Indicators */}
        <div
          className={`${container} absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center justify-between`}
        >
          <div className="flex gap-2">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  slide === index
                    ? "w-11 bg-[#35c94a]"
                    : "w-7 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <div className="text-xs font-bold text-white">
            0{slide + 1}{" "}
            <span className="text-white/60">/ 0{slides.length}</span>
          </div>
        </div>
      </section>

      {/* WEBSITE HIGHLIGHTS */}
      <section className="border-b border-[#eaf1f2] bg-[#f4fafb]">
        <div
          className={`${container} grid grid-cols-4 gap-5 py-5 max-md:grid-cols-2`}
        >
          <div className="flex items-center gap-3">
            <MenuBookOutlinedIcon className="text-2xl text-[#079da7]" />
            <span className="grid">
              <b className="text-sm text-[#19314d]">Health Knowledge</b>
              <small className="text-xs text-[#34445d]">
                Clear and accessible explainers
              </small>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <VerifiedOutlinedIcon className="text-2xl text-[#079da7]" />
            <span className="grid">
              <b className="text-sm text-[#19314d]">Editorial Awareness</b>
              <small className="text-xs text-[#34445d]">
                Responsible health information
              </small>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <PublicRoundedIcon className="text-2xl text-[#079da7]" />
            <span className="grid">
              <b className="text-sm text-[#19314d]">Global Perspectives</b>
              <small className="text-xs text-[#34445d]">
                Country-wise health insights
              </small>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <HealthAndSafetyOutlinedIcon className="text-2xl text-[#079da7]" />
            <span className="grid">
              <b className="text-sm text-[#19314d]">Health for Everyone</b>
              <small className="text-xs text-[#34445d]">
                Topics for every life stage
              </small>
            </span>
          </div>
        </div>
      </section>

      {/* 2. LATEST HEALTH ARTICLES */}
      <section className={`${container} py-4 max-md:py-6`}>
        <div className="mb-2">
  <SectionHeading
    eyebrow="Latest health insights"
    title="Latest Health Articles"
  />

  <div className="mt-2 flex justify-end">
    <Link
      className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
      to="/articles/"
    >
      View All Articles
      <ArrowForwardRoundedIcon fontSize="small" />
    </Link>
  </div>
</div>

        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {articles.slice(0, 6).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* 3. EXPLORE HEALTHCARE BY COUNTRY */}
      <section className="bg-[#f5f9fb] py-16 max-md:py-12">
        <div className={container}>
          <SectionHeading
            eyebrow="Global healthcare perspectives"
            title="Explore Healthcare by Country"
            action={
              <Link
                className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
                to="/countries/"
              >
                View All Countries
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            }
          />

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
            {countries.slice(0, 9).map((country) => (
              <Link
                key={country.slug}
                to={`/countries/${country.slug}/`}
                className="group flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-[#e5eef0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#079da7]/50 hover:shadow-[0_10px_25px_rgba(7,157,167,0.10)]"
              >
                <span className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#e5f8f5] to-[#edf2ff] text-3xl transition-transform duration-300 group-hover:scale-110">
                  {countrySymbols[country.slug] || "🌍"}
                </span>

                <span className="text-base font-extrabold text-[#1a2b43] sm:text-lg">
                  {country.name}
                </span>

                <span className="mt-1 text-xs font-semibold text-[#079da7]">
                  Explore health insights
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCTOR'S OPINIONS */}
      <section className={`${container} py-16 max-md:py-12`}>
        <SectionHeading
          eyebrow="Insights from medical professionals"
          title="Doctor's Opinions"
          action={
            <Link
              className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
              to="/doctors-opinions/"
            >
              View All Opinions
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          }
        />

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div className="rounded-xl border border-[#e5eef0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#e5f8f5] text-[#079da7]">
              <MedicalServicesOutlinedIcon fontSize="large" />
            </div>
            <h3 className="text-lg font-extrabold text-[#19314d]">
              Expert Medical Opinions
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#526176]">
              Understand health conditions and treatment developments through
              expert medical perspectives.
            </p>
            <Link
              to="/doctors-opinions/"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
            >
              Read Expert Opinions
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          </div>

          <div className="rounded-xl border border-[#e5eef0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#eaf0ff] text-[#123c8c]">
              <PublicRoundedIcon fontSize="large" />
            </div>
            <h3 className="text-lg font-extrabold text-[#19314d]">
              Doctor Interviews
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#526176]">
              Discover conversations with healthcare professionals about
              prevention, diagnosis and patient care.
            </p>
            <Link
              to="/doctors-opinions/"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
            >
              Explore Interviews
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          </div>

          <div className="rounded-xl border border-[#e5eef0] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#fff4e8] text-[#c47b27]">
              <HealthAndSafetyOutlinedIcon fontSize="large" />
            </div>
            <h3 className="text-lg font-extrabold text-[#19314d]">
              Ask the Expert
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#526176]">
              Explore expert answers to common health questions and
              reader-friendly medical explanations.
            </p>
            <Link
              to="/doctors-opinions/"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
            >
              Discover More
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. DISEASES AND CONDITIONS */}
      <section className="bg-[#f5f9fb] py-16 max-md:py-12">
        <div className={container}>
          <SectionHeading
            eyebrow="Understand diseases and conditions"
            title="Diseases and Conditions"
            action={
              <Link
                className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
                to="/health/"
              >
                Browse All Topics
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            }
          />

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  to={`/${item.slug}/`}
                  key={item.slug}
                  className="group flex min-h-[145px] flex-col items-center justify-center rounded-xl border border-[#e5eef0] bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#079da7]/50 hover:shadow-[0_10px_25px_rgba(7,157,167,0.10)]"
                >
                  <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#e5f8f5] to-[#edf2ff] text-[#079da7] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#079da7] group-hover:text-white">
                    {Icon && <Icon sx={{ fontSize: 30 }} />}
                  </span>

                  <span className="text-[15px] font-extrabold leading-snug text-[#1a2b43] sm:text-base">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MEDICAL RESEARCH AND INNOVATION */}
      <section className={`${container} py-16 max-md:py-12`}>
        <SectionHeading
          eyebrow="Discover medical advancements"
          title="Medical Research and Innovation"
          action={
            <Link
              className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
              to="/medical-research/"
            >
              Explore Research
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          }
        />

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[#123c8c] to-[#087f9a] p-8 text-white">
            <ScienceOutlinedIcon className="mb-5 text-5xl text-[#7ce17b]" />
            <h3 className="text-2xl font-extrabold text-white">
              Research Made Easier to Understand
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/90">
              Explore medical studies, scientific findings and research
              explainers presented in clear, reader-friendly language.
            </p>
            <Link
              to="/medical-research/"
              className={`${actionClass} mt-6 w-fit`}
            >
              Read Research Explainers
              <ArrowForwardRoundedIcon fontSize="small" />
            </Link>
          </div>

          <div className="grid gap-5">
            <div className="flex items-start gap-4 rounded-xl border border-[#e5eef0] bg-white p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e5f8f5] text-[#079da7]">
                <BiotechOutlinedIcon fontSize="large" />
              </span>
              <div>
                <h3 className="font-extrabold text-[#19314d]">
                  Healthcare Technology
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526176]">
                  Learn about diagnostic technologies, digital healthcare and
                  new medical tools.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#e5eef0] bg-white p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eaf0ff] text-[#123c8c]">
                <ScienceOutlinedIcon fontSize="large" />
              </span>
              <div>
                <h3 className="font-extrabold text-[#19314d]">
                  Scientific Discoveries
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526176]">
                  Understand emerging discoveries and their potential
                  significance for healthcare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#e5eef0] bg-white p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#fff4e8] text-[#c47b27]">
                <VerifiedOutlinedIcon fontSize="large" />
              </span>
              <div>
                <h3 className="font-extrabold text-[#19314d]">
                  Evidence-Based Information
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526176]">
                  Explore research summaries with clear references to their
                  original sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HEALTH NEWS AND UPDATES */}
      <section className="bg-[#f5f9fb] py-16 max-md:py-12">
        <div className={container}>
          <SectionHeading
            eyebrow="Stay informed"
            title="Health News and Updates"
            action={
              <Link
                className="inline-flex items-center gap-1 text-sm font-bold text-[#123c8c] transition hover:text-[#079da7]"
                to="/health-news/"
              >
                View All Health News
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            }
          />

          <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <div className="rounded-xl border border-[#e5eef0] bg-white p-6">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#e5f8f5] text-[#079da7]">
                <NewspaperOutlinedIcon fontSize="large" />
              </span>
              <h3 className="text-lg font-extrabold text-[#19314d]">
                Global Health Updates
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#526176]">
                Follow important health developments, international health
                announcements and public-health initiatives.
              </p>
              <Link
                to="/health-news/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
              >
                Read Updates
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            </div>

            <div className="rounded-xl border border-[#e5eef0] bg-white p-6">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#eaf0ff] text-[#123c8c]">
                <PublicRoundedIcon fontSize="large" />
              </span>
              <h3 className="text-lg font-extrabold text-[#19314d]">
                Public Health Awareness
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#526176]">
                Discover awareness campaigns, prevention guidance and
                community health information.
              </p>
              <Link
                to="/health-news/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
              >
                Explore Awareness
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            </div>

            <div className="rounded-xl border border-[#e5eef0] bg-white p-6">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#fff4e8] text-[#c47b27]">
                <VerifiedOutlinedIcon fontSize="large" />
              </span>
              <h3 className="text-lg font-extrabold text-[#19314d]">
                Sourced Health Information
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#526176]">
                Read health updates supported by reliable sources and
                responsible editorial practices.
              </p>
              <Link
                to="/health-news/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#123c8c] hover:text-[#079da7]"
              >
                Read Health News
                <ArrowForwardRoundedIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER SIGNUP */}
      <section className={`${container} py-16 max-md:py-12`}>
        <SectionHeading
          eyebrow="Stay connected with global health"
          title="Get Health Insights in Your Inbox"
        />

        <Newsletter />

        <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-6 text-[#526176]">
          By subscribing, you agree to receive health articles, news and
          updates by email. You can unsubscribe at any time. Your email
          information should be handled according to our{" "}
          <Link
            to="/privacy-policy/"
            className="font-bold text-[#123c8c] underline hover:text-[#079da7]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </>
  );
}




















// import { useState } from "react";
// import { Link } from "react-router-dom";

// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
// import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
// import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
// import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
// import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";

// import SectionHeading from "../components/SectionHeading";
// import ArticleCard from "../components/ArticleCard";
// import Newsletter from "../components/Newsletter";

// import { categories } from "../data/categories";
// import { countries } from "../data/countries";
// import { articles } from "../data/articles";

// const slides = [
//   {
//     eyebrow: "Global health awareness",
//     title: "Health Knowledge. Global Perspectives.",
//     text: "Explore trusted health awareness, disease explainers, medical research and healthcare stories from around the world.",
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1500&q=90",
//     button: "Explore health articles",
//     link: "/articles/",
//   },
//   {
//     eyebrow: "Understand your health",
//     title: "Know the signs. Make informed choices.",
//     text: "Clear, reader-friendly information on symptoms, prevention, diagnosis and healthy living.",
//     image:
//       "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1500&q=90",
//     button: "Browse health topics",
//     link: "/health/",
//   },
//   {
//     eyebrow: "A world of health perspectives",
//     title: "Healthcare insights, country by country.",
//     text: "Discover health systems, public-health priorities and awareness resources from communities worldwide.",
//     image:
//       "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1500&q=90",
//     button: "Explore countries",
//     link: "/countries/",
//   },
// ];

// const container =
//   "mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)]";

// const actionClass =
//   "inline-flex items-center gap-2 rounded-lg bg-[#35c94a] px-5 py-2.5 text-sm font-bold text-[#103b4c] transition hover:-translate-y-0.5 hover:bg-[#68df75]";

// const sectionTitleClass =
//   "mb-9 text-center text-3xl font-extrabold text-[#19314d] md:text-4xl";

// const countrySymbols = {
//   usa: "🗽",
//   canada: "🍁",
//   "south-africa": "🌍",
//   nigeria: "🦅",
//   kenya: "🦁",
//   india: "🏛️",
//   ghana: "⭐",
//   uk: "🏰",
//   australia: "🦘",
// };

// export default function HomePage() {
//   const [slide, setSlide] = useState(0);
//   const [search, setSearch] = useState("");

//   const current = slides[slide];

//   return (
//     <>
//       {/* Hero Slider */}
//       <section className="relative h-[500px] overflow-hidden bg-[#102f66] text-white max-md:h-[460px] max-sm:h-[450px]">

//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `linear-gradient(90deg, rgba(7,31,76,.90), rgba(7,31,76,.62) 52%, rgba(7,31,76,.18)), url(${current.image})`,
//           }}
//         />

//         <div className={`${container} relative flex h-full items-center`}>
//           <div className="max-w-[570px] py-7">

//             <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#baf4d1] sm:text-xs">
//               <PublicRoundedIcon fontSize="small" />
//               {current.eyebrow}
//             </span>

//             <h1 className="my-4 max-w-[570px] text-left text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
//               {current.title}
//             </h1>

//             <p className="max-w-[510px] text-left text-sm leading-relaxed text-[#f3f7fc] sm:text-[15px]">
//               {current.text}
//             </p>

//             <Link className={`${actionClass} mt-5`} to={current.link}>
//               {current.button}
//               <ArrowForwardRoundedIcon fontSize="small" />
//             </Link>

//             {/* Search */}
//             <form
//               className="mt-5 flex max-w-[510px] items-center gap-2 rounded-xl bg-white p-1.5 text-[#123c8c] shadow-lg max-sm:gap-1"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 window.location.href = `/articles/?q=${encodeURIComponent(search)}`;
//               }}
//             >
//               <SearchRoundedIcon className="ml-2" />

//               <input
//                 className="min-w-0 flex-1 border-0 px-2 py-2 text-sm text-[#172a43] outline-none"
//                 aria-label="Search health information"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search symptoms, diseases, health topics..."
//               />

//               <button
//                 type="submit"
//                 className="rounded-lg bg-[#123c8c] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#079da7]"
//               >
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Slider Indicators */}
//         <div
//           className={`${container} absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center justify-between`}
//         >
//           <div className="flex gap-2">
//             {slides.map((item, index) => (
//               <button
//                 key={item.title}
//                 aria-label={`Go to slide ${index + 1}`}
//                 className={`h-1.5 rounded-full bg-white/50 transition-all ${
//                   slide === index ? "w-11 bg-[#35c94a]" : "w-7"
//                 }`}
//                 onClick={() => setSlide(index)}
//               />
//             ))}
//           </div>

//           <div className="text-xs font-bold text-white">
//             0{slide + 1}{" "}
//             <span className="text-white/60">/ 0{slides.length}</span>
//           </div>
//         </div>
//       </section>

//       {/* Website Highlights */}
//       <section className="border-b border-[#eaf1f2] bg-[#f4fafb]">
//         <div
//           className={`${container} grid grid-cols-4 gap-5 py-5 max-md:grid-cols-2`}
//         >
//           <div className="flex items-center gap-3">
//             <MenuBookOutlinedIcon className="text-2xl text-[#079da7]" />
//             <span className="grid">
//               <b className="text-sm text-[#19314d]">Health knowledge</b>
//               <small className="text-xs text-[#34445d]">
//                 Clear and accessible explainers
//               </small>
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <VerifiedOutlinedIcon className="text-2xl text-[#079da7]" />
//             <span className="grid">
//               <b className="text-sm text-[#19314d]">Editorial awareness</b>
//               <small className="text-xs text-[#34445d]">
//                 Responsible health information
//               </small>
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <PublicRoundedIcon className="text-2xl text-[#079da7]" />
//             <span className="grid">
//               <b className="text-sm text-[#19314d]">Global perspectives</b>
//               <small className="text-xs text-[#34445d]">
//                 Country-wise health insights
//               </small>
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <HealthAndSafetyOutlinedIcon className="text-2xl text-[#079da7]" />
//             <span className="grid">
//               <b className="text-sm text-[#19314d]">Health for everyone</b>
//               <small className="text-xs text-[#34445d]">
//                 Topics for every life stage
//               </small>
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* Health Topics */}
//       <section className={`${container} py-16 max-md:py-12`}>
//         <h2 className={sectionTitleClass}>
//           Health Topics
//         </h2>

//         <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
//           {categories.map((item) => {
//             const Icon = item.icon;

//             return (
//               <Link
//                 to={`/${item.slug}/`}
//                 key={item.slug}
//                 className="group flex min-h-[145px] flex-col items-center justify-center rounded-xl border border-[#e5eef0] bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#079da7]/50 hover:shadow-[0_10px_25px_rgba(7,157,167,0.10)]"
//               >
//                 <span className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#e5f8f5] to-[#edf2ff] text-[#079da7] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#079da7] group-hover:text-white">
//                   {Icon && <Icon sx={{ fontSize: 30 }} />}
//                 </span>

//                 <span className="text-[15px] font-extrabold leading-snug text-[#1a2b43] sm:text-base">
//                   {item.title}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>

//         {/* View All Topics */}
//         <div className="mt-9 flex justify-center">
//           <Link
//             to="/health/"
//             className="inline-flex items-center gap-2 rounded-lg border border-[#123c8c] px-6 py-3 text-sm font-bold text-[#123c8c] transition hover:bg-[#123c8c] hover:text-white"
//           >
//             View All Health Topics
//             <ArrowForwardRoundedIcon fontSize="small" />
//           </Link>
//         </div>
//       </section>

//       {/* Country Health Hubs */}
//       <section className="bg-[#f5f9fb] py-16 max-md:py-12">
//         <div className={container}>
//           <h2 className={sectionTitleClass}>
//             Health Around the World
//           </h2>

//           <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2">
//             {countries.map((country) => (
//               <Link
//                 key={country.slug}
//                 to={`/countries/${country.slug}/`}
//                 className="group flex min-h-[135px] flex-col items-center justify-center rounded-xl border border-[#e5eef0] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#079da7]/50 hover:shadow-[0_10px_25px_rgba(7,157,167,0.10)]"
//               >
//                 <span className="mb-3 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#e5f8f5] to-[#edf2ff] text-3xl transition-transform duration-300 group-hover:scale-110">
//                   {countrySymbols[country.slug] || "🌍"}
//                 </span>

//                 <span className="text-base font-extrabold text-[#1a2b43] sm:text-lg">
//                   {country.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Health Articles & Blogs */}
//       <section className={`${container} py-16 max-md:py-12`}>
//         <h2 className={sectionTitleClass}>
//           Health Articles & Blogs
//         </h2>

//         <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
//           {articles.slice(0, 6).map((article) => (
//             <ArticleCard key={article.id} article={article} />
//           ))}
//         </div>
//       </section>

//       {/* Expert Perspectives */}
//       <section className="bg-[#f5f9fb] py-16 max-md:py-12">
//         <div className={container}>
//           <div className="grid min-h-[270px] grid-cols-[1.2fr_.8fr] items-center gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#123c8c] to-[#087f9a] px-10 py-9 text-white max-md:grid-cols-1 max-md:px-6">

//             <div>
//               <span className="mb-2 block text-xs font-bold uppercase tracking-[.18em] text-[#a6f0d4]">
//                 Editorial formats
//               </span>

//               <h2 className="text-left text-3xl font-extrabold text-white">
//                 More Ways to Understand Health
//               </h2>

//               <p className="mt-3 max-w-xl text-base text-white">
//                 Doctor's opinions, ask-the-expert features, research explained,
//                 health myths vs facts and patient awareness content.
//               </p>

//               <Link
//                 className={`${actionClass} mt-6`}
//                 to="/doctors-opinions/"
//               >
//                 Explore expert perspectives
//                 <ArrowForwardRoundedIcon fontSize="small" />
//               </Link>
//             </div>

//             <div className="relative grid h-44 place-items-center">
//               <div className="absolute h-36 w-36 rounded-full border-2 border-white/30" />
//               <div className="absolute h-52 w-52 rounded-full border-2 border-[#42d2d0]" />
//               <PublicRoundedIcon className="z-10 text-7xl text-[#7ce17b]" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className={`${container} py-16 max-md:py-12`}>
//         <Newsletter />
//       </section>
//     </>
//   );
// }


