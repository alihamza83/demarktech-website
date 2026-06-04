import { useState, type ReactNode } from "react";

type Props = {
  onWebDev?: () => void;
  onSEO?: () => void;
  onMarketing?: () => void;
  onGraphic?: () => void;
  onEcommerce?: () => void;
  onGis?: () => void;
};

type Solution = {
  title: string;
  description: string;
  icon: ReactNode;
};

const solutions: Solution[] = [
  {
    title: "Web Development",
    description: "Scalable websites engineered for performance, reliability, and seamless customer journeys.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 5h18v14H3z" />
        <path d="M3 9h18" />
        <path d="M8 13h2M12 13h4" />
      </svg>
    ),
  },
  {
    title: "SEO Content Optimization",
    description: "Search-optimized content that increases discoverability and converts qualified traffic.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="10" cy="10" r="6" />
        <path d="M21 21l-4.3-4.3" />
        <path d="M8 10h4M10 8v4" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaign systems designed to accelerate growth across key channels.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 14v4M10 10v8M16 6v12M22 3v15" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description: "Elegant user experiences crafted to reduce friction and maximize product engagement.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description: "Conversion-focused commerce experiences built for speed, trust, and repeat revenue.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 7h15l-1.5 8h-11z" />
        <path d="M6 7L5 4H2" />
        <circle cx="10" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    description: "Reliable CI/CD and infrastructure automation that scales with your product roadmap.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.5-1.5A4 4 0 0 0 7 18z" />
        <path d="M12 10v6M9.5 13.5h5" />
      </svg>
    ),
  },
];

function FeatureCard({
  solution,
  onWebDev,
  onSEO,
  onMarketing,
  onGraphic,
  onEcommerce,
  onGis,
}: {
  solution: Solution;
  onWebDev?: () => void;
  onSEO?: () => void;
  onMarketing?: () => void;
  onGraphic?: () => void;
  onEcommerce?: () => void;
  onGis?: () => void;
}) {
  const [lightPosition, setLightPosition] = useState({ x: 160, y: 90 });

  return (
    <article
      className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-10 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] shadow-md"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
          <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>
        <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
          <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
          <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>
        <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
          <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-400/0 to-purple-500/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:from-blue-400/20 group-hover:to-purple-500/20 group-hover:opacity-100" />

      <div className="relative">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
          {solution.icon}
        </span>

        <div
          className="relative mt-5 overflow-hidden rounded-xl bg-slate-50/80 p-5 transition-colors duration-300 group-hover:bg-slate-100/90"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setLightPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(180px circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(59,130,246,0.12), transparent 70%)`,
            }}
          />

          <div className="relative">
            <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{solution.description}</p>
            <button
  className="mt-5 text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700"
  onClick={() => {
  if (solution.title === "Web Development") onWebDev?.();
  if (solution.title === "SEO Content Optimization") onSEO?.();
  if (solution.title === "Digital Marketing") onMarketing?.();
  if (solution.title === "UI/UX Design") onGraphic?.();
  if (solution.title === "E-Commerce Solutions") onEcommerce?.();
  if (solution.title === "Cloud & DevOps") onGis?.();
}}
>
  Get Started Now →
</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CustomizedSolutionsSection({
  onWebDev,
  onSEO,
  onMarketing,
  onGraphic,
  onEcommerce,
  onGis,
}: Props) {
  return (
    <section id="solutions" className="relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-100/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <h2 className="text-center text-3xl font-semibold text-slate-900 sm:text-4xl">
          Our Customized Solutions
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
          Premium digital services designed to improve speed, visibility, and business outcomes.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              solution={solution}
              onWebDev={onWebDev}
              onSEO={onSEO}
              onMarketing={onMarketing}
              onGraphic={onGraphic}
              onGis={onGis}
              onEcommerce={onEcommerce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
