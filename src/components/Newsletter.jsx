import { useState } from "react";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="flex items-center justify-between gap-8 rounded-2xl bg-[#effafa] p-8 max-md:flex-col max-md:items-start">
      <div className="max-w-xl">
        <span className="mb-2 block text-xs font-black uppercase tracking-[.18em] text-[#079da7]">
          The Global Health Brief
        </span>
        <h2>Stay informed. Stay aware.</h2>
        <p>
          Get health awareness stories, new articles and global healthcare
          perspectives in your inbox.
        </p>
      </div>
      {submitted ? (
        <p className="rounded-lg bg-white p-4 text-[#123c8c]">
          Thank you! The demo subscription form is ready to connect to your
          mailing service.
        </p>
      ) : (
        <form
          className="flex w-full max-w-xl items-center gap-3 rounded-xl border border-[#d9e8eb] bg-white p-2 max-sm:flex-wrap"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <MailOutlineRoundedIcon />
          <input
            className="min-w-0 flex-1 border-0 px-2 py-3 text-base text-[#172a43] outline-none placeholder:text-[#52647a]"
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="rounded-lg bg-[#123c8c] px-5 py-3 text-sm font-extrabold text-white hover:bg-[#079da7]"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
