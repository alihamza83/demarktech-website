export default function PortfolioPage() {
  const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "StyleHub — Online Fashion Store",
    desc: "Built a full-featured Shopify store with custom UX, resulting in a 3x increase in conversions within 3 months of launch.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
  {
    title: "Brand Identity + Digital Marketing",
    subtitle: "NexaStartup — B2B SaaS Brand",
    desc: "Complete brand identity from scratch — logo, messaging, website, and a LinkedIn lead-gen campaign that brought in 200+ qualified leads in 60 days.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
  {
    title: "App Development",
    subtitle: "QuickEats — Food Delivery App",
    desc: "Cross-platform mobile app with real-time tracking, payment integration, and an intuitive UI that achieved 10,000+ downloads in its first month.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
  {
    title: "Video Production + Social Media",
    subtitle: "GreenLeaf — Organic Products Brand",
    desc: "Produced a full brand video series and managed social media, growing their Instagram from 800 to 45K followers in under 6 months.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
  {
    title: "SEO + Content Marketing",
    subtitle: "LexPro — Legal Services Firm",
    desc: "SEO and content strategy that moved 40+ keywords to Google's first page, increasing organic traffic by 280% year-over-year.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
  {
    title: "Website Development + PPC",
    subtitle: "BuildRight — Construction Company",
    desc: "Redesigned their website and launched a Google Ads campaign, reducing cost-per-lead by 45% while doubling inbound inquiries.",
    color: "bg-gradient-to-r from-[#0077A8] to-[#7A3FBF] bg-clip-text text-transparent",
  },
];
  return (
    <section id="portfolio-page" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/50" />
        <div className="blob-float absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/18 to-purple-400/18 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-8 top-12 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/18 to-purple-500/18 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Work We're Proud Of</h1>
        <p className="mt-5 max-w-3xl text-slate-600 sm:text-lg">
          A glimpse into some of the projects where we've helped brands grow, convert, and stand out.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
  <article
    key={i}
    className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-white/80 p-6 shadow-md"
  >
     {/* ANIMATED NEON BORDER */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl">

      {/* TOP */}
      <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
        <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      {/* RIGHT */}
      <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
        <div className="animate-[shineVertical_3s_linear_infinite] w-full h-1/2 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      </div>

      {/* BOTTOM */}
      <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
        <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      {/* LEFT */}
      <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
        <div className="animate-[shineVertical_3s_linear_infinite] w-full h-1/2 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
      </div>

    </div>
    
    <div className="flex h-40 w-full items-center justify-center rounded-xl border border-blue-500/25 bg-white/80 shadow-md">

  {i === 0 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 shadow-[0_0_40px_rgba(59,130,246,0.45)]">
      <span className="text-6xl">🛒</span>
    </div>
  )}

  {i === 1 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 shadow-[0_0_40px_rgba(168,85,247,0.45)]">
      <span className="text-6xl">🚀</span>
    </div>
  )}

  {i === 2 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 shadow-[0_0_40px_rgba(59,130,246,0.45)]">
      <span className="text-6xl">📱</span>
    </div>
  )}

  {i === 3 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.45)]">
      <span className="text-6xl">🎬</span>
    </div>
  )}

  {i === 4 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 shadow-[0_0_40px_rgba(34,197,94,0.45)]">
      <span className="text-6xl">📈</span>
    </div>
  )}

  {i === 5 && (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 shadow-[0_0_40px_rgba(249,115,22,0.45)]">
      <span className="text-6xl">💻</span>
    </div>
  )}

</div>
    
   <h3 className={`mt-4 text-sm font-bold ${project.color}`}>
  {project.title}
</h3>

<h4 className="mt-2 text-lg font-semibold text-slate-900">
  {project.subtitle}
</h4>

    <p className="mt-2 text-sm text-slate-600">
      {project.desc}
    </p>

    <button className="mt-4 text-sm font-medium bg-gradient-to-r from-[#00AEEF] to-[#CB6CE6] bg-clip-text text-transparent">
  View Case Study →
</button>
  </article>
))}
        </div>
      </div>
    </section>
  );
}

