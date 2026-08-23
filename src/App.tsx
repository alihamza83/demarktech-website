import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import ClientsPage from "./components/ClientsPage";
import ContactSection from "./components/ContactSection";
import CustomizedSolutionsSection from "./components/CustomizedSolutionsSection";
import PortfolioPage from "./components/PortfolioPage";
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from "./components/TermsPage";

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
import SEO from "./components/SEO";

type Page =
  | "home"
  | "contact"
  | "about"
  | "portfolio"
  | "clients"
  | "web-development"
  | "graphic-designing"
  | "cloud-devops"
  | "e-commerce-development"
  | "seo-content-writing"
  | "digital-marketing"
  | "privacy"
  | "terms";

const pageFromPath = (pathname: string): Page => {
  switch (pathname) {
    case "/about":
      return "about";
    case "/portfolio":
      return "portfolio";
    case "/clients":
      return "clients";
    case "/contact":
      return "contact";
    case "/web-development":
      return "web-development";
    case "/graphic-designing":
      return "graphic-designing";
    case "/gis-solution":
      return "cloud-devops";
    case "/e-commerce-development":
      return "e-commerce-development";
    case "/seo-content-writing":
      return "seo-content-writing";
    case "/digital-marketing":
      return "digital-marketing";
    case "/privacy":
      return "privacy";
    case "/terms":
      return "terms";
    default:
      return "home";
  }
};

const seoData: Record<
  Page,
  {
    title: string;
    description: string;
    path: string;
  }
> = {
  home: {
    title: "DemarkTech | Web Development & Digital Solutions",
    description:
      "DemarkTech provides web development, eCommerce development, UI/UX design, digital marketing, SEO content writing, and custom digital solutions.",
    path: "/",
  },

  about: {
    title: "About DemarkTech | Digital Solutions Agency",
    description:
      "Learn about DemarkTech, a digital solutions agency focused on web development, design, marketing, and modern technology solutions.",
    path: "/about",
  },

  portfolio: {
    title: "Portfolio | DemarkTech",
    description:
      "Explore DemarkTech's portfolio of websites, digital products, design projects, and technology solutions.",
    path: "/portfolio",
  },

  clients: {
    title: "Our Clients | DemarkTech",
    description:
      "Discover the businesses and clients that work with DemarkTech for web development, design, marketing, and digital solutions.",
    path: "/clients",
  },

  contact: {
    title: "Contact DemarkTech | Get in Touch",
    description:
      "Contact DemarkTech for web development, eCommerce, UI/UX design, digital marketing, SEO content writing, and custom digital solutions.",
    path: "/contact",
  },

  "web-development": {
    title: "Web Development Services | DemarkTech",
    description:
      "DemarkTech provides modern web development services to build fast, responsive, scalable, and user-friendly websites and web applications.",
    path: "/web-development",
  },

  "graphic-designing": {
    title: "UI/UX & Graphic Design Services | DemarkTech",
    description:
      "DemarkTech provides UI/UX and graphic design services focused on creating modern, engaging, and user-friendly digital experiences.",
    path: "/graphic-designing",
  },

  "cloud-devops": {
    title: "Cloud & DevOps Solutions | DemarkTech",
    description:
      "DemarkTech provides modern cloud and DevOps solutions to help businesses build, deploy, and manage reliable digital applications.",
    path: "/gis-solution",
  },

  "e-commerce-development": {
    title: "E-Commerce Development Services | DemarkTech",
    description:
      "DemarkTech develops modern eCommerce websites and online stores designed for performance, usability, scalability, and business growth.",
    path: "/e-commerce-development",
  },

  "seo-content-writing": {
    title: "SEO & Content Writing Services | DemarkTech",
    description:
      "DemarkTech provides SEO and content writing services to help businesses improve online visibility, search rankings, and website engagement.",
    path: "/seo-content-writing",
  },

  "digital-marketing": {
    title: "Digital Marketing Services | DemarkTech",
    description:
      "DemarkTech provides digital marketing solutions designed to increase online visibility, reach customers, and grow businesses.",
    path: "/digital-marketing",
  },

  privacy: {
    title: "Privacy Policy | DemarkTech",
    description: "Read the DemarkTech privacy policy.",
    path: "/privacy",
  },

  terms: {
    title: "Terms & Conditions | DemarkTech",
    description: "Read the DemarkTech terms and conditions.",
    path: "/terms",
  },
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const activePage = pageFromPath(location.pathname);

  const [activeNav, setActiveNav] = useState<NavLabel>("HOME");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const goHome = () => {
    setActiveNav("HOME");
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateHomeSection = (sectionId: string) => {
    navigate("/");

    requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const openContactSection = () => {
    setActiveNav("CONTACT");
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAboutPage = () => {
    setActiveNav("ABOUT US");
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPortfolioPage = () => {
    setActiveNav("PORTFOLIO");
    navigate("/portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openClientsPage = () => {
    setActiveNav("CLIENTS");
    navigate("/clients");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWebDevelopmentPage = () => {
    setActiveNav("WEB DEVELOPMENT");
    navigate("/web-development");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGraphicDesigningPage = () => {
    setActiveNav("GRAPHIC DESIGNING");
    navigate("/graphic-designing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGISSolutionPage = () => {
    setActiveNav("GIS SOLUTION");
    navigate("/gis-solution");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openECommerceDevelopmentPage = () => {
    setActiveNav("E-COMMERCE DEVELOPMENT");
    navigate("/e-commerce-development");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openSEOContentWritingPage = () => {
    setActiveNav("SEO & CONTENT WRITING");
    navigate("/seo-content-writing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openDigitalMarketingPage = () => {
    setActiveNav("DIGITAL MARKETING");
    navigate("/digital-marketing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openPrivacyPage = () => {
    navigate("/privacy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openTermsPage = () => {
    navigate("/terms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const navMap: Record<Page, NavLabel> = {
      home: "HOME",
      contact: "CONTACT",
      about: "ABOUT US",
      portfolio: "PORTFOLIO",
      clients: "CLIENTS",
      "web-development": "WEB DEVELOPMENT",
      "graphic-designing": "GRAPHIC DESIGNING",
      "cloud-devops": "GIS SOLUTION",
      "e-commerce-development": "E-COMMERCE DEVELOPMENT",
      "seo-content-writing": "SEO & CONTENT WRITING",
      "digital-marketing": "DIGITAL MARKETING",
      privacy: "HOME",
      terms: "HOME",
    };

    setActiveNav(navMap[activePage]);
  }, [activePage]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (Math.abs(delta) < 8) return;

      if (delta > 0 && y > 120) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

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
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (!visible) return;

        const match = sectionMap.find(
          (item) => item.id === visible.target.id
        );

        if (match) {
          setActiveNav(match.nav);
        }
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: "-12% 0px -55% 0px",
      }
    );

    sectionMap.forEach((section) => {
      const el = document.getElementById(section.id);

      if (el) {
        observer.observe(el);
      }
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
    if (label === "E-COMMERCE DEVELOPMENT") {
      return openECommerceDevelopmentPage();
    }
    if (label === "SEO & CONTENT WRITING") {
      return openSEOContentWritingPage();
    }
    if (label === "DIGITAL MARKETING") {
      return openDigitalMarketingPage();
    }

    if (label === "OUR SERVICES") {
      setActiveNav("OUR SERVICES");
      return navigateHomeSection("services");
    }

    if (label === "SOLUTIONS") {
      setActiveNav("SOLUTIONS");
      return navigateHomeSection("solutions");
    }
  };

  const currentSEO = seoData[activePage];

  return (
    <>
      <SEO
      title={currentSEO.title}
      description={currentSEO.description}
      path={currentSEO.path}
    />

      <main className="min-h-screen selection:bg-blue-500/40 bg-transparent">
        <Navbar
          onNavClick={handleNavClick}
          activeNav={activeNav}
          isVisible={isNavbarVisible}
        />

        {activePage === "contact" ? (
          <ContactSection />
        ) : activePage === "about" ? (
          <AboutPage />
        ) : activePage === "portfolio" ? (
          <PortfolioPage />
        ) : activePage === "clients" ? (
          <ClientsPage />
        ) : activePage === "web-development" ? (
          <WebDevelopmentPage onOpenContact={openContactSection} />
        ) : activePage === "graphic-designing" ? (
          <GraphicDesigningPage onOpenContact={openContactSection} />
        ) : activePage === "cloud-devops" ? (
          <GISSolutionPage onOpenContact={openContactSection} />
        ) : activePage === "e-commerce-development" ? (
          <ECommerceDevelopmentPage onOpenContact={openContactSection} />
        ) : activePage === "seo-content-writing" ? (
          <SEOContentWritingPage onOpenContact={openContactSection} />
        ) : activePage === "digital-marketing" ? (
          <DigitalMarketingPage onOpenContact={openContactSection} />
        ) : activePage === "privacy" ? (
          <PrivacyPage />
        ) : activePage === "terms" ? (
          <TermsPage />
        ) : (
          <>
            <Hero onOpenContact={openContactSection} />

            <div className="bg-gradient-to-b from-white to-slate-50/80">
              <div className="mt-8 sm:mt-12">
                <ClientLogoMarquee />
              </div>

              <TransformSection />

              <WhyChooseSection
                onOpenContact={openContactSection}
              />
            </div>

            <WhatWeProvideSection
              onWebDev={openWebDevelopmentPage}
              onGraphic={openGraphicDesigningPage}
              onEcommerce={openECommerceDevelopmentPage}
              onSEO={openSEOContentWritingPage}
            />

            <CustomizedSolutionsSection
              onWebDev={openWebDevelopmentPage}
              onSEO={openSEOContentWritingPage}
              onMarketing={openDigitalMarketingPage}
              onGraphic={openGraphicDesigningPage}
              onGis={openGISSolutionPage}
              onEcommerce={openECommerceDevelopmentPage}
            />

            <SupportSection />
          </>
        )}

        <Footer
          onNavClick={handleNavClick}
          onOpenPrivacy={openPrivacyPage}
          onOpenTerms={openTermsPage}
        />
      </main>
    </>
  );
}