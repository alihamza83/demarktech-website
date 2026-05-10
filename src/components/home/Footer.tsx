import type { NavLabel } from "../../types/navigation";
import { useEffect, useState } from "react";

const LOGO_SRC = "/denmarklogo.png";

type FooterProps = {
  onNavClick: (label: NavLabel) => void;
};

export default function Footer({ onNavClick }: FooterProps) {
  
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <footer className="mt-8 border-t border-white/10 bg-black/40 sm:mt-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <img src={LOGO_SRC} alt="" className="h-14 w-auto object-contain mix-blend-screen sm:h-24" />
            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              Product updates, playbooks, and launch notes — straight to your inbox when you want them.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-stretch"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Work email"
              className="h-12 min-h-[48px] flex-1 rounded-lg border border-white/15 bg-transparent px-4 text-sm text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none sm:rounded-l-lg sm:rounded-r-none sm:border-r-0"
            />
            <button
              type="submit"
              className="h-12 min-h-[48px] rounded-lg bg-cyan-400 px-6 text-sm font-semibold text-[#032341] transition hover:brightness-110 sm:rounded-l-none sm:rounded-r-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6 border-b border-white/10 py-6 text-sm text-gray-300 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            <button type="button" onClick={() => onNavClick("HOME")} className="transition hover:text-cyan-300">
              Home
            </button>
            <button type="button" onClick={() => onNavClick("OUR SERVICES")} className="transition hover:text-cyan-300">
              Services
            </button>
            <button type="button" onClick={() => onNavClick("ABOUT US")} className="transition hover:text-cyan-300">
              About
            </button>
            <button type="button" onClick={() => onNavClick("CONTACT")} className="transition hover:text-cyan-300">
              Contact
            </button>
          </nav>
          <div className="flex flex-col gap-3 text-gray-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a href="#privacy" className="transition hover:text-cyan-300">
              Privacy
            </a>
            <a href="#terms" className="transition hover:text-cyan-300">
              Terms
            </a>
            <a
    href="https://wa.me/923001234567"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-green-400"
  >
    WhatsApp
  </a>
  
            <p className="text-sm">Nevada — 47284 Queenie Drive, Suite 865</p>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-gray-500 sm:text-sm">
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
      bg-cyan-400
      text-black
      shadow-lg
      transition-all
      duration-300
      hover:scale-110
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
