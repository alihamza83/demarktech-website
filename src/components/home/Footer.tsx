import type { NavLabel } from "../../types/navigation";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const LOGO_SRC = "/lastlogo.png";

type FooterProps = {
  onNavClick: (label: NavLabel) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
};

export default function Footer({ onNavClick, onOpenPrivacy, onOpenTerms }: FooterProps) {
  
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const [newsletterEmail, setNewsletterEmail] = useState("");

const handleNewsletterSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!newsletterEmail.trim()) {
    alert("Please enter your email address");
    return;
  }

  try {
    await emailjs.send(
      "service_qfer26u",
      "template_dwyj6pq",
      {
        email: newsletterEmail,
      },
      "U8AUF9xL2B40GMiDd"
    );

    alert("Thank you for subscribing to Demark Tech!");

    setNewsletterEmail("");
  } catch (error) {
    console.error(error);
    alert("Subscription failed. Please try again.");
  }
};

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-slate-200/50 sm:mt-0">

  {/* Hero base gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]" />

  {/* Soft blue/purple light overlay (Hero feel) */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-transparent to-purple-500/50" />

  {/* Soft white fade (IMPORTANT for brightness like Hero bottom) */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/100 to-white/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-slate-500/50 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <img src={LOGO_SRC} alt="DeMarkTech Logo" className="h-14 w-auto object-contain opacity-100 contrast-100 brightness-100 sm:h-24" />
            <p className="max-w-sm text-sm leading-relaxed text-slate-900">
              Product updates, playbooks, and launch notes — straight to your inbox when you want them.
            </p>
          </div>

          <form
            className="flex w-full max-w-full flex-col gap-2 sm:max-w-md sm:flex-row sm:items-stretch"
            onSubmit={handleNewsletterSubmit}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              autoComplete="email"
              placeholder="Work email"
              className="h-12 min-h-[48px] w-full min-w-0 flex-1 rounded-lg border border-slate-300/50 bg-white/80 px-4 text-sm text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none sm:rounded-l-lg sm:rounded-r-none sm:border-r-0"
            />
            <button
              type="submit"
              className="h-12 min-h-[48px] w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 sm:w-auto sm:rounded-l-none sm:rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6 border-b border-slate-200/50 py-6 text-sm text-slate-900 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="flex w-full flex-wrap justify-center gap-x-6 gap-y-3 sm:justify-start">
            <button type="button" onClick={() => onNavClick("HOME")} className="transition hover:text-blue-600">
              Home
            </button>
            <button type="button" onClick={() => onNavClick("OUR SERVICES")} className="transition hover:text-blue-600">
              Services
            </button>
            <button type="button" onClick={() => onNavClick("ABOUT US")} className="transition hover:text-blue-600">
              About
            </button>
            <button type="button" onClick={() => onNavClick("CONTACT")} className="transition hover:text-blue-600">
              Contact
            </button>
          </nav>
          <div className="flex items-center justify-center gap-6 whitespace-nowrap text-slate-900">
  <button
    type="button"
    onClick={onOpenPrivacy}
    className="transition hover:text-blue-600"
  >
    Privacy
  </button>

  <button
    type="button"
    onClick={onOpenTerms}
    className="transition hover:text-blue-600"
  >
    Terms
  </button>

  <p className="text-sm">
    London — United Kingdom
  </p>
</div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center gap-4 py-6 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1EUv6jqD4K/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 sm:h-12 sm:w-12"
            >
              <FaFacebookF className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.instagram.com/demark_tech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 sm:h-12 sm:w-12"
            >
              <FaInstagram className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.linkedin.com/company/demark-tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 sm:h-12 sm:w-12"
            >
              <FaLinkedinIn className="text-sm sm:text-base" />
            </a>
            <a
              href="https://www.tiktok.com/@demark.tech?_r=1&_t=ZS-96SA4YPnAk1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 sm:h-12 sm:w-12"
            >
              <FaTiktok className="text-sm sm:text-base" />
            </a>
            <a
              href="https://wa.me/923033392444"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 sm:h-12 sm:w-12"
            >
              <FaWhatsapp className="text-sm sm:text-base" />
            </a>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-slate-900 sm:text-sm">
          © {year} DeMarkTech. All rights reserved.
        </div>

        
        {showScrollTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      justify-center
      w-12
      h-12
      rounded-full
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 15l7-7 7 7"
      />
    </svg>
  </button>
)}
      </div>
    </footer>
  );
}
