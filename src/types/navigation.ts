export type NavLabel =
  | "HOME"
  | "OUR SERVICES"
  | "SOLUTIONS"
  | "ABOUT US"
  | "PORTFOLIO"
  | "CLIENTS"
  | "CONTACT";

export const SERVICES_DROPDOWN = [
  "Web Development",
  "Graphic Designing",
  "GIS Solutions",
  "E-Commerce Development",
  "SEO & Content Writing",
  "Digital Marketing",
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
};
