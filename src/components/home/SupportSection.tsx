

export default function SupportSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-br from-white to-blue-200/50 p-6 sm:p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute -right-20 -top-28 h-[140%] w-[75%] rounded-[50%] border border-blue-400/40 shadow-[0_0_30px_rgba(59,130,246,0.25)]" />
          <div className="absolute -right-24 -top-24 h-[140%] w-[75%] rounded-[50%] border border border-purple-400/40 shadow-[0_0_30px_rgba(124,58,237,0.25)]" />
          <div className="absolute -right-80 -top-40 h-[140%] w-[75%] rounded-[50%] border border-purple-400/40 shadow-[0_0_30px_rgba(124,58,237,0.25)]" />
          <div className="absolute -right-80 -top-16 h-[140%] w-[75%] rounded-[50%] border border-purple-400/40 shadow-[0_0_30px_rgba(124,58,237,0.25)]" />
          <div className="absolute -right-80 -top-12 h-[140%] w-[75%] rounded-[50%] border border-blue-400/25" />  
          <div className="absolute -right-80 -top-8 h-[140%] w-[75%] rounded-[50%] border border-blue-400/20" />
          <div className="absolute -right-80 -top-4 h-[140%] w-[75%] rounded-[50%] border border-purple-300/10" />
        </div>

        <div className="relative max-w-xl">
          <h2 className="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            Dedicated Support Available in Every Language
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Dedicated experts available 24/7 for clear communication, quick assistance, and outstanding worldwide experiences.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[11px] text-white">
                ✓
              </span>
              <span>Expert guidance for code deployment and integration</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[11px] text-white">
                ✓
              </span>
              <span>Fast, reliable support for technical challenges</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-[11px] text-white">
                ✓
              </span>
              <span>Continuous improvement through feedback and collaboration</span>
            </li>
          </ul>
          <button
  type="button"
  onClick={() => window.open("https://wa.me/923001234567", "_blank")}
  className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 sm:px-7"
>
  WhatsApp
  <span aria-hidden="true">💬</span>
</button>
        </div>
      </div>
    </section>
  );
}
