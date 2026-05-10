import { motion } from "framer-motion";

const ideaStats = [
  { value: "200+", label: "Successful projects" },
  { value: "99%", label: "On-time delivery" },
  { value: "120%", label: "Client satisfaction" },
];

export default function TransformSection() {
  return (
    <section className="border-b border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid items-start gap-10 sm:gap-12 lg:grid-cols-4 lg:gap-10"
        >
          <div className="max-w-md lg:max-w-none lg:pr-2">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.05rem]">
              Transforming ideas
              <br />
              into impact
            </h2>
          </div>

          <div className="col-span-full grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
            {ideaStats.map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-extrabold text-cyan-400 sm:text-5xl md:text-6xl lg:text-7xl">{item.value}</p>
                <p className="mt-3 text-base font-medium text-white sm:text-lg lg:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
