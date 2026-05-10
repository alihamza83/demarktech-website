import { motion } from "framer-motion";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";
import ShineFrame from "./ShineFrame";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type HeroProps = {
  onOpenContact: () => void;
};

export default function Hero({ onOpenContact }: HeroProps) {
  const years = useAnimatedCounter(10, 1000);
  const projectsCount = useAnimatedCounter(500, 1200);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt- ">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030816_0%,#07153a_46%,#0a2a62_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_-10%,rgba(21,63,148,0.36),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_78%,rgba(34,211,238,0.16),transparent_72%)]" />
        <div className="absolute left-1/2 top-14 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[120px] sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute left-4 top-40 h-48 w-48 rounded-full bg-cyan-500/14 blur-[120px] sm:left-8 sm:h-72 sm:w-72 sm:top-52" />
        <div className="absolute bottom-14 right-4 h-48 w-48 rounded-full bg-sky-400/12 blur-[120px] sm:right-10 sm:h-72 sm:w-72" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-8 lg:px-8">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <h1 className="max-w-xl font-[Space_Grotesk,ui-sans-serif,system-ui] text-4xl font-extrabold leading-[0.95] tracking-tight text-white sm:max-w-2xl sm:text-5xl md:text-6xl lg:max-w-5xl lg:text-7xl">
            <span className="block">We build</span>
            <span className="block">brands that</span>
            <span className="block pt-1">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]">
                Dominate
              </span>{" "}
              <span className="text-white">the</span>
            </span>
            <span className="block pt-1 text-white">digital world</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
            DeMarkTech is a full-service marketing agency helping B2B companies, B2C brands, startups, and new businesses grow faster through smart strategy, creative execution, and data-driven results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="min-h-[48px] w-full rounded-xl bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-[#032341] transition hover:brightness-110 sm:w-auto"
            >
              Get started now
            </button>
            <button
              type="button"
              className="min-h-[48px] w-full rounded-xl border border-cyan-200/30 px-6 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:bg-white/10 sm:w-auto"
            >
              Learn more
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#0a0f2c] object-cover sm:h-11 sm:w-11"
                  width={44}
                  height={44}
                />
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-300">Trusted by teams shipping real products</p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-cyan-400">
                <span aria-hidden="true">★★★★★</span>
                <span className="font-medium text-white">4.9</span>
                <span className="text-gray-400">average partner rating</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center justify-center gap-6 sm:gap-8 lg:items-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid w-full max-w-lg grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:max-w-none sm:gap-5 lg:max-w-none">
            <div className="flex flex-col gap-4">
              <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[22px] border border-cyan-300/40 bg-gradient-to-b from-[#06122f] to-[#020817] p-0 sm:min-h-[24rem] sm:rounded-[26px] sm:p-0 md:h-[456px]">
                <ShineFrame />
                <div className="relative pt-8 text-center sm:pt-10">
                  <p className="text-5xl font-extrabold leading-none sm:text-6xl">
                    {projectsCount}
                    <span className="text-cyan-300">+</span>
                  </p>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-white sm:text-[18px]">
                    Projects, countless
                    <br />
                    successes
                  </p>
                </div>
                <div className="h-36 sm:h-[180px] overflow-hidden rounded-[18px] sm:rounded-[22px]">
              <img
               src="/herocard.PNG"
              alt=""
                 className="h-full w-full object-cover block"
                style={{ objectPosition: "left center" }}
           />
             </div>
              </div>

              <div className="relative flex min-h-[72px] items-center justify-center overflow-hidden rounded-[20px] border border-cyan-300/40 bg-gradient-to-b from-[#06122f] to-[#020817] text-center sm:min-h-[82px] sm:rounded-[22px]">
                <ShineFrame roundedClass="rounded-[20px] sm:rounded-[22px]" />
                <p className="relative z-10 px-2 text-base font-bold tracking-tight text-white sm:text-[20px]">
                  100% digital excellence
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-cyan-300/40 sm:rounded-[20px]">
               <img
                src="/hero2.png"
                alt=""
                   className="absolute inset-0 h-full w-full object-cover"
                  />
               <div className="absolute inset-0 bg-cyan-400/0" />
             </div>

              <div className="relative flex min-h-[11rem] w-full flex-col items-center justify-center overflow-hidden rounded-[22px] border border-cyan-300/40 bg-gradient-to-b from-[#06122f] to-[#020817] px-4 py-6 text-center sm:min-h-[170px] sm:rounded-[26px] md:max-w-[300px] md:justify-self-end">
                <ShineFrame />
                <p className="relative z-10 text-5xl font-extrabold leading-none sm:text-6xl">
                  {years}
                  <span className="text-cyan-300">+</span>
                </p>
                <p className="relative z-10 mt-3 text-base font-semibold leading-relaxed text-white sm:text-[18px]">
                  Years of combined
                  <br />
                  team experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
