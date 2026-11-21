import { Link } from "react-router-dom";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

export default function CountryCard({ country }) {
  return (
    <Link
      className="min-h-[150px] rounded-xl border border-[#e5edf0] bg-white p-5 transition hover:-translate-y-1 hover:border-[#9bd9d6] hover:shadow-lg"
      to={`/countries/${country.slug}/`}
    >
      <div className="flex items-center justify-between text-[#079da7]">
        <span className="text-3xl">{country.flag}</span>
        <ArrowOutwardRoundedIcon />
      </div>
      <h3>{country.name}</h3>
      <p>{country.focus}</p>
      <span className="mt-3 inline-block text-sm font-extrabold text-[#079da7]">
        Explore country hub
      </span>
    </Link>
  );
}
