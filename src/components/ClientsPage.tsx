const testimonials = [
  {
    stars: "★★★★★",
    quote:
      "DemarkTech completely transformed our online presence. Our website traffic doubled in just two months, and the quality of leads coming in has never been better.",
    name: "Sarah Ahmed",
    role: "CEO, NexaStartup",
    initials: "SA",
    avatarColor: "from-orange-500 to-red-500",
  },
  {
    stars: "★★★★★",
    quote:
      "We hired DemarkTech to build our e-commerce store and manage our social media. The results were incredible — sales went up 3x and our Instagram grew rapidly.",
    name: "Kareem Rashid",
    role: "Founder, StyleHub",
    initials: "KR",
    avatarColor: "from-slate-700 to-slate-900",
  },
  {
    stars: "★★★★★",
    quote:
      "As a startup, we needed a partner who could move fast and deliver big. DemarkTech did exactly that — from branding to our app launch, everything was seamless.",
    name: "Layla Patel",
    role: "Co-Founder, QuickEats",
    initials: "LP",
    avatarColor: "from-emerald-600 to-teal-700",
  },
  {
    stars: "★★★★★",
    quote:
      "Our SEO results are beyond what we expected. DemarkTech’s content strategy helped us rank for key terms and brought in clients we’d never reached before.",
    name: "Daniel Morris",
    role: "Managing Partner, LexPro",
    initials: "DM",
    avatarColor: "from-indigo-600 to-violet-700",
  },
];

export default function ClientsPage() {
  return (
    <section id="clients-page" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-transparent to-purple-500/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/100 to-white/40" />
        <div className="blob-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/18 to-purple-400/18 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-10 top-8 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/18 to-purple-500/18 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.28em] text-blue-600/80">CLIENT TESTIMONIALS</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">What Our Clients Say</h1>
        <p className="mt-5 max-w-3xl text-slate-900 sm:text-lg">
          Don&apos;t just take our word for it — here&apos;s what the businesses we&apos;ve partnered with have to say about working
          with DemarkTech.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-blue-300/20 bg-white/80 p-6 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)]"
            >
              <p className="text-xs tracking-widest text-blue-600">{item.stars}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.quote}</p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/50 pt-4">
                <div className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${item.avatarColor} text-xs font-semibold text-white`}>
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

