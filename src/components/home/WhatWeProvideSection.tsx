import { type ReactNode } from "react";

const cards = {
  ecommerce: {
    title: "E-Commerce development",
    desc: "Stores and funnels tuned for conversion — performance, trust signals, and resilient checkout flows.",
  },
  webapp: {
    title: "Web & app development",
    desc: "Product-grade interfaces and integrations with an eye on maintainability and speed to market.",
  },
  seo: {
    title: "SEO & content",
    desc: "Search visibility and narrative that earns qualified clicks — structured for long-term compound growth.",
  },
  marketing: {
    title: "Digital marketing",
    desc: "Campaign systems that iterate on real signals: creative, messaging, and channel mix aligned to ROI.",
  },
  graphics: {
    title: "Graphic design",
    desc: "Identity and UI craft that carries across web, ads, decks, and print without losing cohesion.",
  },
} as const;

type CardProps = {
  title: string;
  description?: string;
  variant?: "large" | "small";
  imagePosition?: "top" | "bottom" | "full";
  contentAlign?: "top" | "center" | "bottom";
  imageUrl?: string;
  overlayStyle?: string;
  customLayout?: ReactNode;
  className?: string;
  bodyMinHeightClass?: string;
  contentMinHeightClass?: string;
};

function ServiceCard({
  title,
  description,
  variant = "small",
  imagePosition = "bottom",
  contentAlign = "bottom",
  imageUrl,
  overlayStyle = "bg-[linear-gradient(to_bottom,rgba(3,8,20,0.2),rgba(3,8,20,0.88))]",
  customLayout,
  className = "",
  bodyMinHeightClass,
  contentMinHeightClass,
}: CardProps) {
  const isLarge = variant === "large";
  const contentJustify =
    contentAlign === "bottom" ? "justify-end" : contentAlign === "center" ? "justify-center" : "justify-start";

  return (
    <div
      role="article"
      tabIndex={0}
      aria-label={title}
      className={[
        "group relative block cursor-default overflow-hidden rounded-2xl border border-cyan-300/30 bg-[linear-gradient(180deg,#0b2a6a_0%,#050811_55%,#03050d_100%)]",
        "shadow-[0_10px_40px_rgba(0,0,0,0.55)]",
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-[0_18px_60px_rgba(0,0,0,0.7)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-8 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
      </div>

      <div className="absolute left-0 top-0 z-20 h-[2px] w-full overflow-hidden">
        <div className="top-border-scan h-full w-[70%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {customLayout ? (
        <div className="relative h-full p-0">{customLayout}</div>
      ) : (
        <div
          className={
            isLarge
              ? "relative grid min-h-[320px] grid-cols-1 gap-6 p-6 sm:min-h-[380px] sm:p-8 md:grid-cols-2"
              : `relative ${bodyMinHeightClass ?? "min-h-[400px]"} overflow-hidden p-6 sm:p-7 ${className}`
          }
        >
          {imageUrl && (imagePosition === "full" || isLarge) ? (
            <div className="absolute inset-0">
              <img src={imageUrl} alt="" className="h-full w-full object-cover opacity-90" />
              <div className={`absolute inset-0 ${overlayStyle}`} />
            </div>
          ) : null}

          {imageUrl && imagePosition === "top" && !isLarge ? (
            <div className="absolute inset-x-0 top-0 h-[45%] overflow-hidden">
              <img src={imageUrl} alt="" className="h-full w-full object-cover opacity-90" />
              <div className={`absolute inset-0 ${overlayStyle}`} />
            </div>
          ) : null}

          {imageUrl && imagePosition === "bottom" && !isLarge ? (
            <div className="absolute inset-x-0 bottom-0 h-[30%] overflow-hidden">
              <img src={imageUrl} alt="" className="h-full w-full object-cover opacity-90" />
              <div className={`absolute inset-0 ${overlayStyle}`} />
            </div>
          ) : null}

          <div
            className={`relative z-10 flex h-full ${
              contentMinHeightClass ?? "min-h-[280px] sm:min-h-[400px]"
            } flex-col ${contentAlign === "bottom" ? "justify-end pb-8 sm:pb-10" : contentJustify}`}
          >
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description ? <p className="mt-3 max-w-md text-sm leading-6 text-gray-300">{description}</p> : null}
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
              Learn more <span aria-hidden="true">→</span>
            </span>
          </div>

          {!imageUrl && !isLarge ? (
            <div className="pointer-events-none absolute right-6 top-6 hidden h-20 w-20 rounded-2xl bg-cyan-400/10 blur-[1px] md:block" />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function WhatWeProvideSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <h2 className="text-center text-2xl font-semibold sm:text-3xl">What we provide</h2>
      <p className="mx-auto mt-4 max-w-3xl px-2 text-center text-sm leading-relaxed text-gray-300 sm:text-base">
        Strategy, engineering, design, and growth — stitched together so your digital presence works as one system.
      </p>

      <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ServiceCard
            title={cards.ecommerce.title}
            description={cards.ecommerce.desc}
            variant="large"
            contentAlign="top"
            imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            imagePosition="full"
          />
        </div>
        <div className="lg:col-span-1">
          <ServiceCard
            title={cards.webapp.title}
            description={cards.webapp.desc}
            imagePosition="top"
            contentAlign="bottom"
            className="pb-1"
            imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            overlayStyle="bg-[linear-gradient(to_bottom,rgba(3,8,20,0.15),rgba(3,8,20,0.9))]"
          />
        </div>

        <ServiceCard
          title={cards.seo.title}
          description={cards.seo.desc}
          contentAlign="top"
          imagePosition="bottom"
          className="min-h-[320px]"
          bodyMinHeightClass="min-h-[280px] sm:min-h-[350px]"
          contentMinHeightClass="min-h-0"
          imageUrl="https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80"
          overlayStyle="bg-[linear-gradient(to_top,rgba(3,8,20,0.12),rgba(3,8,20,0.92))]"
        />

        <ServiceCard
          title={cards.graphics.title}
          description={cards.graphics.desc}
          customLayout={
            <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl sm:min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
                alt="Design workspace"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative flex min-h-[260px] items-end justify-center pb-5 sm:min-h-[320px] sm:pb-6">
                <div className="w-[92%] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:w-[85%] sm:p-5">
                  <h3 className="font-semibold text-white">{cards.graphics.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-200">{cards.graphics.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </div>
          }
        />

        <ServiceCard
          title="Measurable brand growth"
          description={cards.marketing.desc}
          customLayout={
            <div className="relative overflow-hidden sm:min-h-[350px] flex flex-col">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,8,20,0.25),rgba(3,8,20,0.92))]" />
              <div className="pointer-events-none absolute left-1/2 top-6 h-20 w-48 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-[34px] sm:h-24 sm:w-72" />
              <div className="relative flex flex-1 flex-col px-4 pt-4 sm:px-6">
                <div>
                  <p className="text-lg font-semibold text-gray-200 sm:text-xl">Digital growth trajectory</p>
                  <p className="mt-2 text-6xl font-extrabold leading-none tracking-tight text-cyan-300 sm:text-8xl">100%</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 sm:px-6 sm:py-7 bg-black/40 backdrop-blur-md">
                  <p className="max-w-[70%] text-xs leading-relaxed text-gray-300 sm:text-sm sm:leading-6">
                    We design the core infrastructure for the data-driven future.
                  </p>
                  <div className="flex shrink-0 -space-x-2 sm:-space-x-3" aria-hidden="true">
                    {[11, 12, 13].map((img) => (
                      <img
                        key={img}
                        src={`https://i.pravatar.cc/48?img=${img}`}
                        alt=""
                        className="h-8 w-8 rounded-full border-2 border-[#050811] sm:h-9 sm:w-9"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
