import { motion } from "framer-motion";
import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]" />  
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-purple-100/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(59,130,246,0.35)]">
                Dominate
              </span>{" "}
              <span className="text-slate-900">the</span>
            </span>
            <span className="block pt-1 text-slate-900">digital world</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-900 sm:text-lg">
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
              <p className="text-sm text-slate-900">Trusted by teams shipping real products</p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-blue-600">
                <span aria-hidden="true">★★★★★</span>
                <span className="font-medium text-slate-900">4.9</span>
                <span className="text-slate-700">average partner rating</span>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex w-full items-center justify-center lg:items-end lg:justify-end"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-md perspective-1000">
            <motion.div
              className="relative w-full rounded-3xl border border-blue-400/30 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
              initial={{ rotateY: -5, rotateX: 5 }}
              whileHover={{ 
                rotateY: 0, 
                rotateX: 0,
                y: -10,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-5deg) rotateX(5deg)"
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-pulse" />
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-3xl animate-float" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-3xl animate-float-delay" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6">
                  <p className="text-7xl font-extrabold leading-none bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] sm:text-8xl">
                    {projectsCount}
                    <span className="text-5xl sm:text-6xl">+</span>
                  </p>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 sm:text-2xl">
                  Projects Delivered
                </h3>

                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                    <span className="text-2xl font-bold text-cyan-300">{years}+</span>
                    <span className="text-sm text-cyan-200">Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30">
                    <span className="text-2xl font-bold text-purple-300">100%</span>
                    <span className="text-sm text-purple-200">Excellence</span>
                  </div>
                </div>

                <p className="text-sm text-cyan-100/80 leading-relaxed max-w-xs">
                  Countless successes across industries, delivering premium digital solutions that drive real results.
                </p>
              </div>

              {/* 3D depth effect layers */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
