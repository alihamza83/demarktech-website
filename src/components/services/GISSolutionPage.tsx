type Props = {
  onOpenContact: () => void;
};
export default function GISSolutionPage({ onOpenContact }: Props) {
  const features = [
    {
      title: "Cloud Migration",
      desc: "Seamless lift-and-shift or full re-architecture migrations to AWS, Azure, or Google Cloud — with zero downtime and a clear rollback plan.",
      icon: "🗺️",
    },
    {
      title: "CI/CD Pipeline Design",
      desc: "Automated build, test, and deployment pipelines that eliminate bottlenecks and let your engineers ship with confidence every single day.",
      icon: "📍",
    },
    {
      title: "Infrastructure as Code",
      desc: "Repeatable, version-controlled infrastructure using Terraform and Ansible — no more manual configs, no more configuration drift.",
      icon: "📊",
    },
    {
      title: "Cloud Security & Compliance",
      desc: "Zero-trust architecture, IAM policies, and audit-ready compliance frameworks (SOC 2, ISO 27001) built into every layer of your stack.",
      icon: "🌍",
    },
    {
      title: "Monitoring & Observability",
      desc: "Full-stack visibility with Datadog, Grafana, and custom alerting — so your team knows about problems before your customers do.",
      icon: "🎯",
    },
    {
      title: "Cost Optimisation",
      desc: "Cloud spend audits, right-sizing, and reserved capacity planning that cut waste without touching performance or reliability.",
      icon: "📱",
    },
  ];

  const process = [
    { step: "01", title: "Assess", desc: "We map your current infrastructure, identify risks, and define a target architecture aligned to your business goals." },
    { step: "02", title: "Design", desc: "A detailed cloud-native design — networks, security, scalability, and cost modelling — reviewed and approved before a single resource is provisioned." },
    { step: "03", title: "Build", desc: "Hands-on delivery by certified engineers. Infrastructure as code from day one, with full documentation and knowledge transfer." },
    { step: "04", title: "Optimise", desc: "Continuous monitoring, cost reviews, and quarterly roadmap sessions to keep your platform ahead of your growth curve. " },
    { step: "05", title: "Training", desc: "Providing comprehensive training and documentation for your team." },
  ];

  return (
    <section id="gis-solution" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
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
            Cloud & DevOps
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Infrastructure That Scales With Your Ambition
          </h1>
          <p className="mt-5 max-w-3xl text-base text-slate-900 sm:text-lg">
            We design, migrate, and automate cloud environments that keep your teams moving fast and your systems resilient — from Day 1 to global scale
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
          <p className="text-lg text-slate-600 mb-6">
  A five-phase process — from audit to continuous improvement
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
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Technologies we work with</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Cloud Platforms</h3>
                <p className="text-sm text-slate-600">Deep expertise across AWS, Microsoft Azure, and Google Cloud for any scale of deployment.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Infrastructure as Code</h3>
                <p className="text-sm text-slate-600">Repeatable, version-controlled environments using Terraform, Ansible, and Helm charts.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Containers & Orchestration</h3>
                <p className="text-sm text-slate-600">Docker and Kubernetes-powered workloads designed for resilience, portability, and auto-scaling.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">CI/CD Pipelines</h3>
                <p className="text-sm text-slate-600">Automated delivery with Jenkins, GitHub Actions, and GitLab CI — ship faster with full confidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-blue-300/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 backdrop-blur-sm shadow-md text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready To Modernise Your Infrastructure?</h2>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free 30-minute architecture review with a Demark Tech cloud engineer.
          </p>
          <button 
          onClick={onOpenContact}
          className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

