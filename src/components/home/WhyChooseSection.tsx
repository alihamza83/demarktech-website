import { motion } from "framer-motion";
import ShineFrame from "./ShineFrame";

const whyItems = [
  {
    title: "Proven expertise",
    description: "Backed by real-world experience delivering reliable, high-quality solutions.",
    icon: <span className="text-3xl text-white">✦</span>,
  },
  {
    title: "Tailored approach",
    description: "Every solution is tailored to fit your exact needs and goals.",
    icon: <span className="text-3xl text-white">⌁</span>,
  },
  {
    title: "End-to-end delivery",
    description: "From idea to launch, we handle every step seamlessly.",
    icon: <span className="text-3xl text-white">▣</span>,
  },
];

type WhyChooseSectionProps = {
  onOpenContact: () => void;
};

export default function WhyChooseSection({ onOpenContact }: WhyChooseSectionProps) {
  return (
    <section id="why-gitlayer" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute left-0 top-0 h-px w-full bg-white/10">
        <div className="h-full w-40 bg-cyan-400 shadow-[0_0_20px_#06b6d4]" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:grid-cols-[1.6fr_0.85fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Why choose DemarkTech?</h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
            From concept to launch, we shape digital experiences that feel premium, perform reliably, and move the metrics
            you care about.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[22px] border border-cyan-400/40 bg-black px-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 sm:min-h-[300px]"
              >
                <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden rounded-t-[22px]">
                  <div className="h-full w-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]" />
                </div>
                <ShineFrame roundedClass="rounded-[22px]" />
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-white">
                  {item.icon}
                </div>
                <div className="relative z-10 mt-5">
                  <h3 className="text-lg font-bold leading-snug text-white sm:text-[1.35rem]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-[15px] sm:leading-8">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[18rem] overflow-hidden rounded-[22px] border border-cyan-400/40 bg-black sm:min-h-[22rem] sm:rounded-[26px] lg:min-h-0">
        <ShineFrame roundedClass="rounded-[26px]" />
          <div className="absolute left-0 top-0 h-[2px] w-full">
            <div className="h-full w-full bg-cyan-400 shadow-[0_0_18px_#06b6d4]" />
          </div>

          <div className="pointer-events-none absolute right-0 top-0 hidden sm:block overflow-hidden">
  <img
    src="/images/blue-shape.png"
    alt=""
    className="absolute -right-10 -top-10 w-[950px] max-w-none object-contain opacity-90"
  />
</div>

          <div className="relative z-10 flex flex-col gap-0 px-1 py-5 sm:gap-0 px-4 sm:py-1">
            <div className="mx-auto w-full max-w-md lg:mx-0">
              <img
                src="/my-picc.jpeg"
                alt="GitLayer team collaboration"
                className="w-full max-h-64 rounded-2xl object-cover sm:max-h-80 lg:max-h-none"
              />
            </div>
            <div className="text-center ">
              <h3 className="mx-auto max-w-full whitespace-nowrap text-xl font-bold leading-snug text-white sm:text-[1.35rem]">
                Where strategy meets creativity
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-300 sm:text-[15px] sm:leading-7">
                Blending thoughtful planning with bold design, we deliver digital experiences that engage, convert, and elevate your brand.
              </p>
              <button
                type="button"
                onClick={onOpenContact}
                className="mt-8 mb-4 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 text-sm font-semibold text-[#032341] transition hover:bg-cyan-300 sm:w-auto"
              >
                Get started
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
