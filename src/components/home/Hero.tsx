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
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
        <div className="absolute left-1/2 top-14 h-[18rem] w-[18rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-[120px] sm:h-[24rem] sm:w-[24rem] md:h-[28rem] md:w-[28rem]" />
        <div className="absolute left-4 top-40 h-48 w-48 rounded-full bg-gradient-to-r from-blue-300/15 to-purple-300/15 blur-[120px] sm:left-8 sm:h-72 sm:w-72 sm:top-52" />
        <div className="absolute bottom-14 right-4 h-48 w-48 rounded-full bg-gradient-to-r from-purple-300/12 to-blue-300/12 blur-[120px] sm:right-10 sm:h-72 sm:w-72" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-8 lg:px-8">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <h1 className="max-w-xl font-[Space_Grotesk,ui-sans-serif,system-ui] text-4xl font-extrabold leading-[0.95] tracking-tight text-slate-900 sm:max-w-2xl sm:text-5xl md:text-6xl lg:max-w-5xl lg:text-7xl">
            <span className="block">We build</span>
            <span className="block">brands that</span>
            <span className="block pt-1">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(59,130,246,0.35)]">
                Dominate
              </span>{" "}
              <span className="text-slate-900">the</span>
            </span>
            <span className="block pt-1 text-slate-900">digital world</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            DeMarkTech is a full-service marketing agency helping B2B companies, B2C brands, startups, and new businesses grow faster through smart strategy, creative execution, and data-driven results.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="min-h-[48px] w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 sm:w-auto"
            >
              Get started now
            </button>
            <button
              type="button"
              className="min-h-[48px] w-full rounded-xl border border-slate-300/50 bg-white/80 backdrop-blur-lg px-6 py-3 text-center text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-900 sm:w-auto"
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
                  className="h-10 w-10 rounded-full border-2 border-white object-cover sm:h-11 sm:w-11"
                  width={44}
                  height={44}
                />
              ))}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-slate-600">Trusted by teams shipping real products</p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-blue-600">
                <span aria-hidden="true">★★★★★</span>
                <span className="font-medium text-slate-900">4.9</span>
                <span className="text-slate-500">average partner rating</span>
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
              <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[22px] border border-blue-300/40 bg-gradient-to-br from-[#EEF7FF] via-[#F3EEFF] to-[#F9F3FF] p-0 sm:min-h-[24rem] sm:rounded-[26px] sm:p-0 md:h-[456px]">
                <ShineFrame />
                <div className="relative pt-8 text-center sm:pt-10">
                  <p className="text-5xl font-extrabold leading-none sm:text-6xl">
                    {projectsCount}
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      +
                   </span>
                  </p>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-slate-900 sm:text-[18px]">
                    Projects, countless
                    <br />
                    successes
                  </p>
                </div>
                <div className="h-36 sm:h-[180px] overflow-hidden rounded-[18px] sm:rounded-[22px]">
             
             </div>
              </div>

              <div className="relative flex min-h-[72px] items-center justify-center overflow-hidden rounded-[20px] border border-blue-300/40 bg-gradient-to-br from-[#EEF7FF] via-[#F3EEFF] to-[#F9F3FF] text-center sm:min-h-[82px] sm:rounded-[22px]">
                <ShineFrame roundedClass="rounded-[20px] sm:rounded-[22px]" />
                <p className="relative z-10 px-2 text-base font-bold tracking-tight text-slate-900 sm:text-[20px]">
                  100% digital excellence
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-blue-300/40 sm:rounded-[20px]">
               <img
                src="/hero2.png"
                alt=""
                   className="absolute inset-0 h-full w-full object-cover"
                  />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent" />
             </div>

              <div className="relative flex min-h-[11rem] w-full flex-col items-center justify-center overflow-hidden rounded-[22px] border border-blue-300/40 bg-gradient-to-br from-[#F5FBFF] via-[#F3F0FF] to-[#FAF5FF] px-4 py-6 text-center sm:min-h-[170px] sm:rounded-[26px] md:max-w-[300px] md:justify-self-end">
                <ShineFrame />
                <p className="relative z-10 text-5xl font-extrabold leading-none sm:text-6xl">
                  {years}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    +
                  </span>
                </p>
                <p className="relative z-10 mt-3 text-base font-semibold leading-relaxed text-slate-900 sm:text-[18px]">
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
