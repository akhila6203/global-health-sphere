
import { Link } from "react-router-dom";
import { countries } from "../data/countries";
import { categories } from "../data/categories";
import logo from "../assets/global-health-sphere-logo.png";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "#facebook",
      icon: FacebookRoundedIcon,
    },
    {
      name: "Instagram",
      href: "#instagram",
      icon: InstagramIcon,
    },
    {
      name: "LinkedIn",
      href: "#linkedin",
      icon: LinkedInIcon,
    },
    {
      name: "YouTube",
      href: "#youtube",
      icon: YouTubeIcon,
    },
  ];

  const footerLinkClass =
    "text-[15px] min-[1400px]:text-[16px] leading-relaxed text-white/85 transition-colors duration-200 hover:text-[#7ce17b]";

  const headingClass =
    "mb-4 text-[18px] min-[1400px]:text-[20px] font-bold text-white";

  return (
    <footer className="mt-14 bg-[#102f66] pt-11 text-white">

      {/* Main Footer */}
      {/* <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1400px] grid-cols-2 gap-x-6 gap-y-9 pb-10 sm:grid-cols-3 lg:grid-cols-[30%_repeat(4,minmax(0,1fr))] lg:gap-x-7"> */}
     <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1400px] grid-cols-2 gap-x-6 gap-y-9 pb-10 sm:grid-cols-3 lg:grid-cols-[30%_repeat(4,minmax(0,1fr))] lg:gap-x-7">

        {/* Column 1 - About & Social */}
        {/* <div className="col-span-2 flex flex-col items-start sm:col-span-3 lg:col-span-1"> */}
        <div className="col-span-2 flex flex-col items-start sm:col-span-2 lg:col-span-1">

          <Link to="/" aria-label="Global Health Sphere Home">
            <img
              className="mb-4 h-14 w-56 object-contain object-left"
              src={logo}
              alt="Global Health Sphere"
            />
          </Link>

          <p className="max-w-sm text-[15px] min-[1400px]:text-[16px] leading-[1.8] text-white/90">
            Health Knowledge. Global Perspectives. Making
            health information easier to understand through
            awareness, articles, research and country-wise
            healthcare insights.
          </p>

          {/* Social Channels */}
          <h3 className="mb-3 mt-5 text-[17px] min-[1400px]:text-[18px] font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-[#079da7]"
                >
                  <Icon sx={{ fontSize: 21 }} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 2 - Explore */}
        <div className="flex flex-col items-start">

          <h3 className={headingClass}>
            Explore
          </h3>

          <div className="flex flex-col items-start gap-3">
            <Link to="/articles/" className={footerLinkClass}>
              Articles & Blogs
            </Link>

            <Link to="/health-news/" className={footerLinkClass}>
              Health News
            </Link>

            <Link to="/doctors-opinions/" className={footerLinkClass}>
              Doctor's Opinions
            </Link>

            <Link to="/medical-research/" className={footerLinkClass}>
              Medical Research
            </Link>
          </div>
        </div>

        {/* Column 3 - Health Topics */}
        <div className="flex flex-col items-start">

          <h3 className={headingClass}>
            Health Topics
          </h3>

          <div className="flex flex-col items-start gap-3">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                to={`/${category.slug}/`}
                className={footerLinkClass}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4 - Country Hubs */}
        <div className="flex flex-col items-start">

          <h3 className={headingClass}>
            Country Hubs
          </h3>

          <div className="flex flex-col items-start gap-1.5">
            {countries.map((country) => (
              <Link
                key={country.slug}
                to={`/countries/${country.slug}/`}
                className={footerLinkClass}
              >
                {country.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 5 - Information */}
        <div className="flex flex-col items-start">

          <h3 className={headingClass}>
            Information
          </h3>

          <div className="flex flex-col items-start gap-3">
            <Link to="/about/" className={footerLinkClass}>
              About Us
            </Link>

            <Link to="/editorial-policy/" className={footerLinkClass}>
              Editorial Policy
            </Link>

            <Link to="/contact/" className={footerLinkClass}>
              Contact
            </Link>

            <Link to="/medical-disclaimer/" className={footerLinkClass}>
              Medical Disclaimer
            </Link>

            <Link to="/privacy-policy/" className={footerLinkClass}>
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions/" className={footerLinkClass}>
              Terms & Conditions
            </Link>

            <Link to="/write-for-us/" className={footerLinkClass}>
              Write for Us
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/15 bg-[#0b285d] py-4">

        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1400px] flex-col items-center justify-between gap-2 text-center text-[13px] leading-relaxed text-white/80 md:flex-row md:text-left">

          <span>
            © 2026 Global Health Sphere. All rights reserved.
          </span>

          <span className="max-w-2xl">
            General health education only. Not a substitute for
            professional medical advice.
          </span>

        </div>
      </div>

    </footer>
  );
}






