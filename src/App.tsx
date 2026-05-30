import { useEffect, useState } from "react";
import AboutPage from "./components/AboutPage";
import ClientsPage from "./components/ClientsPage";
import ContactSection from "./components/ContactSection";
import CustomizedSolutionsSection from "./components/CustomizedSolutionsSection";
import PortfolioPage from "./components/PortfolioPage";
import WebDevelopmentPage from "./components/services/WebDevelopmentPage";
import GraphicDesigningPage from "./components/services/GraphicDesigningPage";
import GISSolutionPage from "./components/services/GISSolutionPage";
import ECommerceDevelopmentPage from "./components/services/ECommerceDevelopmentPage";
import SEOContentWritingPage from "./components/services/SEOContentWritingPage";
import DigitalMarketingPage from "./components/services/DigitalMarketingPage";
import ClientLogoMarquee from "./components/home/ClientLogoMarquee";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import SupportSection from "./components/home/SupportSection";
import TransformSection from "./components/home/TransformSection";
import WhatWeProvideSection from "./components/home/WhatWeProvideSection";
import WhyChooseSection from "./components/home/WhyChooseSection";
import type { NavLabel } from "./types/navigation";

type Page = "home" | "contact" | "about" | "portfolio" | "clients" | "web-development" | "graphic-designing" | "gis-solution" | "e-commerce-development" | "seo-content-writing" | "digital-marketing";

export default function App() {
  const [activePage, setActivePage] = useState<Page>("home");
  const [activeNav, setActiveNav] = useState<NavLabel>("HOME");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const goHome = () => {
    setActivePage("home");
    setActiveNav("HOME");
    requestAnimationFrame(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const navigateHomeSection = (sectionId: string) => {
    setActivePage("home");
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const openContactSection = () => {
    setActivePage("contact");
    setActiveNav("CONTACT");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAboutPage = () => {
    setActivePage("about");
    setActiveNav("ABOUT US");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPortfolioPage = () => {
    setActivePage("portfolio");
    setActiveNav("PORTFOLIO");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openClientsPage = () => {
    setActivePage("clients");
    setActiveNav("CLIENTS");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWebDevelopmentPage = () => {
    setActivePage("web-development");
    setActiveNav("WEB DEVELOPMENT");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGraphicDesigningPage = () => {
    setActivePage("graphic-designing");
    setActiveNav("GRAPHIC DESIGNING");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGISSolutionPage = () => {
    setActivePage("gis-solution");
    setActiveNav("GIS SOLUTION");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openECommerceDevelopmentPage = () => {
    setActivePage("e-commerce-development");
    setActiveNav("E-COMMERCE DEVELOPMENT");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openSEOContentWritingPage = () => {
    setActivePage("seo-content-writing");
    setActiveNav("SEO & CONTENT WRITING");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDigitalMarketingPage = () => {
    setActivePage("digital-marketing");
    setActiveNav("DIGITAL MARKETING");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) < 8) return;
      if (delta > 0 && y > 120) setIsNavbarVisible(false);
      else setIsNavbarVisible(true);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activePage !== "home") return;
    const sectionMap = [
      { id: "home", nav: "HOME" as const },
      { id: "services", nav: "OUR SERVICES" as const },
      { id: "solutions", nav: "SOLUTIONS" as const },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = sectionMap.find((item) => item.id === visible.target.id);
        if (match) setActiveNav(match.nav);
      },
      { threshold: [0.2, 0.35, 0.55], rootMargin: "-12% 0px -55% 0px" }
    );
    sectionMap.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [activePage]);

  const handleNavClick = (label: NavLabel) => {
    if (label === "HOME") return goHome();
    if (label === "ABOUT US") return openAboutPage();
    if (label === "PORTFOLIO") return openPortfolioPage();
    if (label === "CLIENTS") return openClientsPage();
    if (label === "CONTACT") return openContactSection();
    if (label === "WEB DEVELOPMENT") return openWebDevelopmentPage();
    if (label === "GRAPHIC DESIGNING") return openGraphicDesigningPage();
    if (label === "GIS SOLUTION") return openGISSolutionPage();
    if (label === "E-COMMERCE DEVELOPMENT") return openECommerceDevelopmentPage();
    if (label === "SEO & CONTENT WRITING") return openSEOContentWritingPage();
    if (label === "DIGITAL MARKETING") return openDigitalMarketingPage();
    if (label === "OUR SERVICES") {
      setActiveNav("OUR SERVICES");
      return navigateHomeSection("services");
    }
    if (label === "SOLUTIONS") {
      setActiveNav("SOLUTIONS");
      return navigateHomeSection("solutions");
    }
  };

  return (
    <main
      className="min-h-screen selection:bg-blue-500/40 bg-transparent"
    >
      <Navbar onNavClick={handleNavClick} activeNav={activeNav} isVisible={isNavbarVisible} />
      {activePage === "contact" ? (
        <ContactSection />
      ) : activePage === "about" ? (
        <AboutPage />
      ) : activePage === "portfolio" ? (
        <PortfolioPage />
      ) : activePage === "clients" ? (
        <ClientsPage />
      ) : activePage === "web-development" ? (
        <WebDevelopmentPage />
      ) : activePage === "graphic-designing" ? (
        <GraphicDesigningPage />
      ) : activePage === "gis-solution" ? (
        <GISSolutionPage />
      ) : activePage === "e-commerce-development" ? (
        <ECommerceDevelopmentPage />
      ) : activePage === "seo-content-writing" ? (
        <SEOContentWritingPage />
      ) : activePage === "digital-marketing" ? (
        <DigitalMarketingPage />
      ) : (
        <>
          <Hero onOpenContact={openContactSection} />

          <div className="bg-gradient-to-b from-white to-slate-50/80">
            <div className="mt-8 sm:mt-12">
              <ClientLogoMarquee />
            </div>
            <TransformSection />
            <WhyChooseSection onOpenContact={openContactSection} />
          </div>

          <WhatWeProvideSection />
          <CustomizedSolutionsSection />
          <SupportSection />
        </>
      )}
      <Footer onNavClick={handleNavClick} />
    </main>
  );
}
