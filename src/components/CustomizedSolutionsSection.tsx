import { useState, type ReactNode } from "react";

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
    title: "SEO & Content Writing",
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

function FeatureCard({ solution }: { solution: Solution }) {
  const [lightPosition, setLightPosition] = useState({ x: 160, y: 90 });

  return (
    <article
      className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f14] p-10 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl">
        <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
          <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>
        <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
          <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
          <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        </div>
        <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
          <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:from-cyan-400/20 group-hover:to-blue-500/20 group-hover:opacity-100" />

      <div className="relative">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
          {solution.icon}
        </span>

        <div
          className="relative mt-5 overflow-hidden rounded-xl bg-white/5 p-5 transition-colors duration-300 group-hover:bg-white/10"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setLightPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(180px circle at ${lightPosition.x}px ${lightPosition.y}px, rgba(56,189,248,0.12), transparent 70%)`,
            }}
          />

          <div className="relative">
            <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
            <p className="mt-4 text-base leading-7 text-gray-400">{solution.description}</p>
            <button className="mt-5 text-sm font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
              Get Started Now →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CustomizedSolutionsSection() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">Our Customized Solutions</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400">
          Premium digital services designed to improve speed, visibility, and business outcomes at every stage.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <FeatureCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
