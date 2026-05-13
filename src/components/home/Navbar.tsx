import { useEffect, useRef, useState } from "react";
import type { NavLabel } from "../../types/navigation";
import { MOBILE_NAV_ITEMS, NAV_DISPLAY, SERVICES_DROPDOWN } from "../../types/navigation";

const LOGO_SRC = "/denmarklogo.png";

const DESKTOP_PAGES: { label: NavLabel; text: string }[] = [
  { label: "ABOUT US", text: "ABOUT US" },
  { label: "PORTFOLIO", text: "PORTFOLIO" },
  { label: "CLIENTS", text: "CLIENTS" },
  { label: "CONTACT", text: "CONTACT" },
];

type NavbarProps = {
  onNavClick: (label: NavLabel) => void;
  activeNav: NavLabel;
  isVisible: boolean;
};

export default function Navbar({ onNavClick, activeNav, isVisible }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!servicesWrapRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [servicesOpen]);

  const navBtnClass = (label: NavLabel) =>
    `min-h-[44px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
      activeNav === label
        ? "border border-blue-500/60 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-900 shadow-[0_0_18px_rgba(59,130,246,0.35)]"
        : "border border-transparent text-slate-700 hover:border-blue-500/40 hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-purple-500/15 hover:text-blue-900"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-0 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-lg rounded-xl mt-0 shadow-lg"
      >
        <a
  href="/"
  onClick={(e) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavClick("HOME");
  }}
  className="flex min-h-[44px] min-w-[44px] items-center rounded-lg outline-none ring-blue-500/50 focus-visible:ring-2"
>
  <img
    src={LOGO_SRC}
    alt="DemarkTech Logo"
    className="h-16 w-auto object-contain sm:h-18 md:h-28"
  />
  <span className="sr-only">DemarkTech</span>
</a>

        <div className="hidden flex-wrap items-center justify-end gap-2 md:flex lg:gap-3">
          <button type="button" onClick={() => onNavClick("HOME")} className={navBtnClass("HOME")}>
            HOME
          </button>

          <div className="relative" ref={servicesWrapRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((p) => !p)}
              className={navBtnClass("OUR SERVICES")}
            >
              OUR SERVICES
            </button>
            <div
              role="menu"
              aria-hidden={!servicesOpen}
              className={`absolute left-0 top-full z-20 mt-2 w-56 rounded-lg border border-slate-200/30 bg-white/95 backdrop-blur-lg p-2 text-left text-[12px] text-slate-900 shadow-xl transition duration-150 ${
                servicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
              }`}
            >
              {SERVICES_DROPDOWN.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="menuitem"
                  className="block w-full rounded-md px-3 py-2.5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-900 transition-colors"
                  onClick={() => {
                    setServicesOpen(false);
                    onNavClick("OUR SERVICES");
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {DESKTOP_PAGES.map(({ label, text }) => (
            <button key={label} type="button" onClick={() => onNavClick(label)} className={navBtnClass(label)}>
              {text}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => onNavClick("CONTACT")}
            className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            Get in Touch
          </button>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((p) => !p)}
          className="min-h-[44px] rounded-lg border border-slate-300/50 bg-white/80 backdrop-blur-lg px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-500/50 hover:bg-blue-50 transition-colors md:hidden"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="mx-4 mb-4 max-h-[min(70vh,520px)] overflow-y-auto rounded-xl border border-slate-200/30 bg-white/95 backdrop-blur-lg px-4 py-4 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {MOBILE_NAV_ITEMS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onNavClick(item);
                }}
                className="min-h-[48px] rounded-lg px-3 py-3 text-left text-base text-slate-700 transition hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-900"
              >
                {NAV_DISPLAY[item]}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
