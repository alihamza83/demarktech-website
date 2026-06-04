import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const ideaStats = [
  { value: "200+", label: "Successful projects" },
  { value: "99%", label: "On-time delivery" },
  { value: "120%", label: "Client satisfaction" },
];
function Counter({ value }: { value: string }) {
  const number = parseInt(value);
  const suffix = value.replace(number.toString(), "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, number, {
      duration: 2,
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [number]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function TransformSection() {
  return (
    <section className="relative w-full border-b border-t border-slate-900/50 overflow-hidden">
       {/* Smooth blend from Hero */}
  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />

    {/* Base gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-transparent to-purple-900/80" />

  {/* Light overlay (IMPORTANT for Hero-like brightness) */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-100/20" />

  {/* White soft fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid items-start gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-10"
        >
          <div className="max-w-md lg:max-w-none lg:pr-2">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.05rem]">
              Transforming Ideas
              <br />
              Into Impact
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
            {ideaStats.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-900 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
  <Counter value={item.value} />
</p>
                <p className="mt-3 text-base font-medium text-slate-900 sm:text-lg lg:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
