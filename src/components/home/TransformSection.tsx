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
    <section className="border-b border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid items-start gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-10"
        >
          <div className="max-w-md lg:max-w-none lg:pr-2">
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.05rem]">
              Transforming ideas
              <br />
              into impact
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
            {ideaStats.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-[#00AEEF] to-[#CB6CE6] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
  <Counter value={item.value} />
</p>
                <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg lg:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
