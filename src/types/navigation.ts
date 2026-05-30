export type NavLabel =
  | "HOME"
  | "OUR SERVICES"
  | "SOLUTIONS"
  | "ABOUT US"
  | "PORTFOLIO"
  | "CLIENTS"
  | "CONTACT"
  | "WEB DEVELOPMENT"
  | "GRAPHIC DESIGNING"
  | "GIS SOLUTION"
  | "E-COMMERCE DEVELOPMENT"
  | "SEO & CONTENT WRITING"
  | "DIGITAL MARKETING";

export const SERVICES_DROPDOWN = [
  { label: "WEB DEVELOPMENT" as const, text: "Web Development" },
  { label: "GRAPHIC DESIGNING" as const, text: "Graphic Designing" },
  { label: "GIS SOLUTION" as const, text: "GIS Solution" },
  { label: "E-COMMERCE DEVELOPMENT" as const, text: "E-Commerce Development" },
  { label: "SEO & CONTENT WRITING" as const, text: "SEO & Content Writing" },
  { label: "DIGITAL MARKETING" as const, text: "Digital Marketing" },
] as const;

export const MOBILE_NAV_ITEMS: NavLabel[] = [
  "HOME",
  "OUR SERVICES",
  "ABOUT US",
  "PORTFOLIO",
  "CLIENTS",
  "SOLUTIONS",
  "CONTACT",
];

export const NAV_DISPLAY: Record<NavLabel, string> = {
  HOME: "Home",
  "OUR SERVICES": "Our services",
  "ABOUT US": "About us",
  PORTFOLIO: "Portfolio",
  CLIENTS: "Clients",
  SOLUTIONS: "Solutions",
  CONTACT: "Contact",
  "WEB DEVELOPMENT": "Web Development",
  "GRAPHIC DESIGNING": "Graphic Designing",
  "GIS SOLUTION": "GIS Solution",
  "E-COMMERCE DEVELOPMENT": "E-Commerce Development",
  "SEO & CONTENT WRITING": "SEO & Content Writing",
  "DIGITAL MARKETING": "Digital Marketing",
};
