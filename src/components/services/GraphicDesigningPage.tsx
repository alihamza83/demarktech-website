type Props = {
  onOpenContact: () => void;
};
export default function GraphicDesigningPage({ onOpenContact }: Props) {
  const features = [
    {
      title: "UX Research & Strategy",
      desc: "User interviews, heuristic audits, and competitive analysis that surface real pain points — so every design decision is grounded in evidence, not guesswork.",
      icon: "🎨",
    },
    {
      title: "Product & Web Design",
      desc: "End-to-end design for SaaS products, web apps, and marketing sites — from information architecture through to high-fidelity, developer-ready screens.",
      icon: "📱",
    },
    {
      title: "Mobile App Design",
      desc: "Native iOS and Android experiences designed to platform standards, with intuitive gestures, accessible touch targets, and delightful micro-interactions.",
      icon: "✨",
    },
    {
      title: "Design Systems",
      desc: "Scalable component libraries and token-based design systems that keep your product consistent across every surface and empower your dev team to ship faster.",
      icon: "📄",
    },
    {
      title: "Brand & Visual Identity",
      desc: "Logo, typography, colour palette, and brand guidelines that communicate who you are in an instant — and hold together across every digital and print touchpoint.",
      icon: "🔷",
    },
    {
      title: "UX Audits & Redesigns",
      desc: "A forensic review of your existing product — identifying drop-off points, usability issues, and quick wins — followed by a prioritised redesign roadmap.",
      icon: "🎬",
    },
  ];

  const process = [
    { step: "01", title: "Research", desc: "User interviews, analytics review, and competitor benchmarking to understand the problem space." },
    { step: "02", title: "DEFINE", desc: "User personas, journey maps, and a clear design brief that aligns the team before a pixel is drawn." },
    { step: "03", title: "Design", desc: "Low-fidelity flows evolving into polished, interactive prototypes ready for stakeholder review." },
    { step: "04", title: "Validation", desc: "Usability testing with real users and iterative refinement until the experience truly works." },
    { step: "05", title: "Delivery", desc: "Providing final assets in all required formats for print and digital use." },
  ];

  return (
    <section id="graphic-designing" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-transparent to-purple-500/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/100 to-white/70" />
        <div className="blob-float absolute -left-24 top-20 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/18 to-purple-400/18 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-8 top-12 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/18 to-purple-500/18 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] bg-gradient-to-r from-[#00AEEF] to-[#CB6CE6] text-transparent bg-clip-text">
            UI/UX Design
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Design That Captivates & Converts
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-900 sm:text-lg">
            We create stunning visual designs that tell your brand story and resonate with your audience. From logos to complete brand identities, we craft designs that make lasting impressions and drive engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-blue-300/20 bg-white/80 p-6 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)]"
            >
              <div className="neon-perimeter">
                <div className="neon-perimeter-line top animate-[neonBorderX_3.2s_linear_infinite]" />
                <div className="neon-perimeter-line bottom animate-[neonBorderX_3.2s_linear_infinite]" style={{ animationDelay: '1.6s' }} />
                <div className="neon-perimeter-line left animate-[neonBorderY_3.2s_linear_infinite]" style={{ animationDelay: '0.8s' }} />
                <div className="neon-perimeter-line right animate-[neonBorderY_3.2s_linear_infinite]" style={{ animationDelay: '2.4s' }} />
              </div>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Design Process</h2>
          <p className="text-lg text-slate-600 mb-6">
            Five stages from research to a live, validated product
          </p>
          <div className="grid gap-6 md:grid-cols-5">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm shadow-md"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00AEEF] to-[#CB6CE6] bg-clip-text text-transparent mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 rounded-2xl border border-blue-300/20 bg-white/80 p-8 backdrop-blur-sm shadow-md">
          <h2 className="text-3xl font-bold text-slate-900 mb-6"> Technologies we work with</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Figma & Framer</h3>
                <p className="text-sm text-slate-600">Industry-leading design and prototyping tools for crafting pixel-perfect, interactive UI at any fidelity.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">User Research Tools</h3>
                <p className="text-sm text-slate-600">Maze and UserTesting for moderated and unmoderated usability sessions that surface real user insights.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Analytics & Heatmaps</h3>
                <p className="text-sm text-slate-600">Hotjar and Google Analytics to understand how users behave and where they drop off in your product.
</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Adobe Creative Suite</h3>
                <p className="text-sm text-slate-600">Illustrator and Photoshop for brand identity, iconography, and high-quality visual asset production.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-sm shadow-md text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Got a product that needs a design overhaul?</h2>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free UX audit and get a prioritised list of improvements within 48 hours.
          </p>
          <button 
          onClick={onOpenContact}
          className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
