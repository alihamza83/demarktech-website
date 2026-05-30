import { useEffect, useRef, useState } from "react";
import type { NavLabel } from "../../types/navigation";
import { MOBILE_NAV_ITEMS, NAV_DISPLAY, SERVICES_DROPDOWN } from "../../types/navigation";

const LOGO_SRC = "/lastlogo.png";

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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!servicesWrapRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [servicesOpen]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBtnClass = (label: NavLabel) =>
    `min-h-[44px] shrink-0 cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
      activeNav === label
        ? "border border-blue-500/60 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-cyan-300  shadow-[0_0_18px_rgba(59,130,246,0.35)]"
        : "border border-transparent text-cyan-200  hover:border-blue-500/40 hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-purple-500/15 hover:text-cyan-300"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-0 sm:px-6 lg:px-8 rounded-xl mt-0 shadow-lg transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-xl border border-blue-500/20"
            : "bg-slate-500/10 backdrop-blur-lg"
        }`}
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
              className={`absolute left-0 top-full z-20 mt-2 w-56 rounded-xl border border-blue-500/30 bg-slate-900/75 backdrop-blur-xl p-2 text-left text-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(0,174,239,0.15)] transition-all duration-300 ${
                servicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
              }`}
            >
              {SERVICES_DROPDOWN.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  role="menuitem"
                  className="block w-full cursor-pointer rounded-lg px-3 py-2.5 text-left text-cyan-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,174,239,0.3)] hover:border hover:border-blue-400/30"
                  onClick={() => {
                    setServicesOpen(false);
                    onNavClick(item.label);
                  }}
                >
                  <span className="font-medium tracking-wide">{item.text}</span>
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
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-transparent transition-all duration-300 hover:scale-110 active:scale-95 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="block w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="block w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>
        </button>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="mx-4 mb-4 max-h-[min(70vh,520px)] overflow-y-auto rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl px-4 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(0,174,239,0.15)] md:hidden"
        >
          <div className="flex flex-col gap-1">
            {MOBILE_NAV_ITEMS.map((item) => (
              item === "OUR SERVICES" ? (
                <div key={item}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((p) => !p)}
                    className="min-h-[48px] w-full cursor-pointer rounded-lg px-3 py-3 text-left text-base text-cyan-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-cyan-300 hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)] flex items-center justify-between"
                  >
                    <span className="font-semibold">{NAV_DISPLAY[item]}</span>
                    <span className={`transition-transform duration-300 text-blue-400 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col gap-1 pl-4 border-l-2 border-blue-500/40 ml-3 rounded-r-lg bg-slate-900/50 backdrop-blur-sm p-2 shadow-[0_4px_16px_rgba(0,0,0,0.3),0_0_12px_rgba(0,174,239,0.1)]">
                      {SERVICES_DROPDOWN.map((service) => (
                        <button
                          key={service.label}
                          type="button"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                            onNavClick(service.label);
                          }}
                          className="min-h-[44px] cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm text-cyan-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(0,174,239,0.25)] border border-transparent hover:border-blue-400/30"
                        >
                          <span className="font-medium tracking-wide">{service.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onNavClick(item);
                  }}
                  className="min-h-[48px] cursor-pointer rounded-lg px-3 py-3 text-left text-base text-cyan-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-cyan-300 hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                >
                  <span className="font-medium">{NAV_DISPLAY[item]}</span>
                </button>
              )
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
