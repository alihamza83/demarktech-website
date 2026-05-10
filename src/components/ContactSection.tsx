import { useState, type FormEvent } from "react";
import BudgetSelector from "./BudgetSelector";
import InputField from "./InputField";

const budgetOptions = ["10K - 20K", "20K - 30K", "30K - 40K", "40K - 50K", "More than 50K"];
const contactItems = [
  { icon: "📞", title: "Phone number", text: "+7 (495) 123-45-67" },
  { icon: "@", title: "Email address", text: "info@demarktech.com" },
  { icon: "📍", title: "Physical address", text: "Nevada, 47284 Queenie Drive Suite 865" },
  { icon: "🕒", title: "Working hours", text: "Mon-Fri: 09:00 AM - 06:00 PM" },
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState("20K - 30K");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    details: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "This field is required";
    if (!formData.email.trim()) nextErrors.email = "This field is required";
    if (!formData.company.trim()) nextErrors.company = "This field is required";
    if (!formData.phone.trim()) nextErrors.phone = "This field is required";
    if (!formData.details.trim()) nextErrors.details = "This field is required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      window.alert("Form submitted successfully.");
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden px-6 pb-20 pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0a2c3a_0%,#060915_45%,#03050d_100%)]" />
        <div className="blob-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-10 top-8 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="blob-float absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-400/20 blur-[95px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Get in Touch With Us</h2>
        <p className="mt-5 max-w-4xl text-base text-gray-300 sm:text-lg">
          DemarkTech partners with teams that want a calmer, faster path from idea to launch — combining strategy, design,
          and engineering without the typical agency drag.
        </p>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Team discussing project"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
              ].map((src, idx) => (
                <div key={src} className="group relative overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={src}
                    alt={`Contact video thumbnail ${idx + 1}`}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />
                  <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-sm text-black">
                    ▶
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
              {contactItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="rounded-full bg-cyan-500/20 p-3 text-cyan-300">{item.icon}</span>
                  <div>
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
  className="relative self-start overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
  onSubmit={onSubmit}
>
  <div className="pointer-events-none absolute inset-0 rounded-xl">
  <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
    <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
  </div>

  <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
    <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
  </div>

  <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
    <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
  </div>

  <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
    <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
  </div>
</div>
            <BudgetSelector options={budgetOptions} selected={selectedBudget} onSelect={setSelectedBudget} />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <InputField
                label="Your name"
                name="name"
                value={formData.name}
                onChange={onFieldChange}
                error={errors.name}
              />
              <InputField
                label="Your email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onFieldChange}
                error={errors.email}
              />
              <InputField
                label="Company name"
                name="company"
                value={formData.company}
                onChange={onFieldChange}
                error={errors.company}
              />
              <InputField
                label="Phone number"
                name="phone"
                value={formData.phone}
                onChange={onFieldChange}
                error={errors.phone}
              />
            </div>
            <div className="mt-4">
              <InputField
                label="Project details"
                name="details"
                value={formData.details}
                onChange={onFieldChange}
                multiline
                rows={11}
                error={errors.details}
              />
            </div>            

            <button
              type="submit"
              className="mt-6 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-[#021226] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(34,211,238,0.45)]"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
