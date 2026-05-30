export default function DigitalMarketingPage() {
  const features = [
    {
      title: "Social Media Marketing",
      desc: "Strategic social media campaigns that build brand awareness and engage your target audience.",
      icon: "📱",
    },
    {
      title: "PPC Campaigns",
      desc: "Data-driven pay-per-click advertising on Google, Facebook, and other platforms for immediate results.",
      icon: "🎯",
    },
    {
      title: "Lead Generation",
      desc: "Comprehensive lead generation strategies that fill your pipeline with qualified prospects.",
      icon: "📈",
    },
    {
      title: "Brand Growth",
      desc: "Building and scaling your brand presence across digital channels for long-term success.",
      icon: "🚀",
    },
    {
      title: "Marketing Strategies",
      desc: "Custom marketing strategies aligned with your business goals and market opportunities.",
      icon: "💡",
    },
    {
      title: "Analytics & Insights",
      desc: "Data-driven marketing decisions with comprehensive analytics and performance tracking.",
      icon: "📊",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Understanding your business, market, and marketing objectives." },
    { step: "02", title: "Strategy", desc: "Developing a comprehensive digital marketing strategy tailored to your goals." },
    { step: "03", title: "Execution", desc: "Implementing campaigns across channels with creative and precision targeting." },
    { step: "04", title: "Optimization", desc: "Continuous testing, refinement, and optimization for maximum ROI." },
    { step: "05", title: "Scale", desc: "Scaling successful campaigns and expanding reach for sustained growth." },
  ];

  return (
    <section id="digital-marketing" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
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
            DIGITAL MARKETING
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Grow Your Brand with Data-Driven Marketing
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-900 sm:text-lg">
            We deliver digital marketing strategies that drive real results. From social media campaigns to PPC advertising, we help you reach your target audience, generate leads, and scale your business with measurable impact.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Marketing Process</h2>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Results-Driven</h3>
                <p className="text-sm text-slate-600">Focus on measurable outcomes and ROI rather than vanity metrics.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Multi-Channel Expertise</h3>
                <p className="text-sm text-slate-600">Proficiency across all major digital marketing platforms and channels.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Creative Excellence</h3>
                <p className="text-sm text-slate-600">Compelling creatives and copy that capture attention and drive action.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Continuous Optimization</h3>
                <p className="text-sm text-slate-600">Ongoing testing and refinement to improve campaign performance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-sm shadow-md text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Let's develop a digital marketing strategy that drives results and scales your business.
          </p>
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
