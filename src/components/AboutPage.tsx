export default function AboutPage() {
  return (
    
    <section
      id="about-page"
      className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b2d40_0%,#050813_45%,#03050d_100%)]" />
        <div className="blob-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-10 top-8 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl">

  {/* TOP HEADING */}
  <div className="mb-12">
  <p className="text-xs font-semibold tracking-[0.3em] text-cyan-300/80">
    ABOUT US
  </p>

  <h1 className="mt-4 font-['Orbitron'] text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-[72px]">
  We are DeMarkTech —
  <br />
  <span className="inline-block max-w-full text-cyan-300 sm:whitespace-nowrap">
    More than a marketing agency
  </span>
</h1>
</div>

  {/* TOP GRID: left details + right big block */}
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">

    {/* LEFT */}
    <div className="text-left">

      <div className="space-y-6 text-[15px] leading-7 text-gray-300">
              <p>
                Founded to help ambitious teams ship faster, GitLayer blends creative craft with pragmatic delivery. We work
                with B2B companies, consumer brands, and startups on strategies that are clear, measurable, and built to last.
              </p>
              <p>
                From brand systems to performance sites, campaigns, and content — we keep the work cohesive so every touchpoint
                reinforces the same story. Your goals stay at the center; our process is designed to reduce noise, not add it.
              </p>
              <p>
                Our team of strategists, designers, developers, and storytellers works collaboratively to deliver solutions that
                aren't just beautiful — they perform.
              </p>
            </div>

            {/* 4 boxes under text */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Results First",
                  body: "Every decision is driven by data and tied to your business goals.",
                  icon: "📈",
                },
                {
                  title: "True Partnership",
                  body: "We work as an extension of your team, not just a vendor.",
                  icon: "🤝",
                },
                {
                  title: "Creative Thinking",
                  body: "Bold ideas that stand out and make your brand unforgettable.",
                  icon: "💡",
                },
                {
                  title: "Agile & Fast",
                  body: "Quick execution without compromising quality or strategy.",
                  icon: "⚡",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400/15 text-lg text-cyan-200">
                      {card.icon}
                    </span>
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">{card.body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT: big block */}
          <div className="mt-20 self-start lg:mt-30">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/25 bg-white/5 p-8 backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[60px]" />
              <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[70px]" />

              <h2 className="text-2xl font-extrabold leading-snug text-white sm:text-[30px]">
  Built for Businesses That
  <br />
  Want to Grow
</h2>
              <p className="mt-5 text-sm leading-7 text-gray-300">
                Whether you are finding product–market fit or scaling a mature channel mix, GitLayer brings senior attention
                across strategy, UX, engineering, and growth. We have shipped alongside teams in SaaS, commerce, healthcare, media,
                and more.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {["B2B Specialists", "B2C Experts", "Startup-Friendly", "New Business Support", "Full-Service Agency"].map(
                  (pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200"
                    >
                      {pill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}