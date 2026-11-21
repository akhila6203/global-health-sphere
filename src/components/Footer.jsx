import { Link } from "react-router-dom";
import { countries } from "../data/countries";
import { categories } from "../data/categories";
import logo from "../assets/global-health-sphere-logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#102f66] pt-12 text-white">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] grid grid-cols-5 gap-8 pb-10 max-lg:grid-cols-3 max-md:grid-cols-2">
        <div className="col-span-2 max-md:col-span-2">
          <img
            className="mb-4 h-14 w-56 object-contain object-left"
            src={logo}
            alt="Global Health Sphere"
          />
          <p className="max-w-md text-base leading-relaxed text-white/85">
            Health Knowledge. Global Perspectives. Making health information
            easier to understand through awareness, articles, research and
            country-wise healthcare insights.
          </p>
          <div className="mt-5 flex items-center gap-3 [&>a]:grid [&>a]:h-10 [&>a]:w-10 [&>a]:place-items-center [&>a]:rounded-full [&>a]:bg-white/10 [&>a:hover]:bg-[#079da7]">
            <a href="#facebook" aria-label="Facebook">
              <FacebookRoundedIcon />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#youtube" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 [&>a]:text-sm [&>a]:text-white/80 [&>a:hover]:text-[#7ce17b]">
          <h3 className="mb-4 text-left text-lg font-extrabold text-white">
            Explore
          </h3>
          <Link to="/articles/">Articles & Blogs</Link>
          <Link to="/health-news/">Health News</Link>
          <Link to="/doctors-opinions/">Doctor's Opinions</Link>
          <Link to="/medical-research/">Medical Research</Link>
        </div>
        <div className="flex flex-col items-start gap-3 [&>a]:text-sm [&>a]:text-white/80 [&>a:hover]:text-[#7ce17b]">
          <h3 className="mb-4 text-left text-lg font-extrabold text-white">
            Health Topics
          </h3>
          {categories.slice(0, 6).map((c) => (
            <Link key={c.slug} to={`/${c.slug}/`}>
              {c.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 [&>a]:text-sm [&>a]:text-white/80 [&>a:hover]:text-[#7ce17b]">
          <h3 className="mb-4 text-left text-lg font-extrabold text-white">
            Country Hubs
          </h3>
          {countries.map((c) => (
            <Link key={c.slug} to={`/countries/${c.slug}/`}>
              {c.flag} {c.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3 [&>a]:text-sm [&>a]:text-white/80 [&>a:hover]:text-[#7ce17b]">
          <h3 className="mb-4 text-left text-lg font-extrabold text-white">
            Information
          </h3>
          <Link to="/about/">About us</Link>
          <Link to="/editorial-policy/">Editorial Policy</Link>
          <Link to="/medical-disclaimer/">Medical Disclaimer</Link>
          <Link to="/contact/">Contact</Link>
          <Link to="/write-for-us/">Write for Us</Link>
        </div>
      </div>
      <div className="border-t border-white/15 bg-[#0b285d] py-4">
        <div className="mx-auto w-[calc(100%-2rem)] max-w-[1400px] lg:w-[calc(100%-4rem)] flex flex-col items-center justify-between gap-2 text-center text-xs text-white/75 md:flex-row">
          <span>© 2026 Global Health Sphere. All rights reserved.</span>
          <span>
            General health education only. Not a substitute for professional
            medical advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
