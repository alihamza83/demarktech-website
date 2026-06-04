import { useState, type FormEvent } from "react";
import InputField from "./InputField";




const contactItems = [
  { icon: "📞", title: "Phone number", text: "+92 (303) 339-2444" },
  { icon: "@", title: "Email address", text: "info@demarktech.co" },
  { icon: "📍" , title: "Physical address", text: "London, United Kingdom" },
  { icon: "🕒", title: "Working hours", text: "Mon-Fri" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    lastName:"",
    email: "",
    service:"",
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-transparent to-purple-500/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/100 to-white/40" />
        <div className="blob-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-[90px]" />
        <div className="blob-float blob-delay absolute right-10 top-8 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[100px]" />
        <div className="blob-float absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-[95px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">Get in Touch With Us</h2>
        <p className="mt-5 max-w-4xl text-base text-slate-900 sm:text-lg">
          DemarkTech partners with teams that want a calmer, faster path from idea to launch — combining strategy, design,
          and engineering without the typical agency drag.
        </p>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="group overflow-hidden rounded-xl border border-slate-200/50 bg-white/80 shadow-lg">
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
                <div key={src} className="group relative overflow-hidden rounded-lg border border-slate-200/50 bg-white/80 shadow-md">
                  <img
                    src={src}
                    alt={`Contact video thumbnail ${idx + 1}`}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition group-hover:from-black/35" />
                  <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm text-white shadow-lg">
                    ▶
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-xl border border-slate-200/50 bg-white/80 shadow-lg p-5">
              {contactItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 text-blue-600">{item.icon}</span>
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
  className="relative self-start overflow-hidden rounded-xl border border-white/20 p-6 bg-gradient-to-r from-[#00AEEF]/50 to-[#CB6CE6]/50 backdrop-blur-xl shadow-lg"
  onSubmit={onSubmit}
>
  <div className="pointer-events-none absolute inset-0 rounded-xl">
  <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
    <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
  </div>

  <div className="absolute right-0 top-0 h-full w-[2px] overflow-hidden">
    <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
  </div>

  <div className="absolute bottom-0 right-0 h-[2px] w-full overflow-hidden">
    <div className="animate-[shine_3s_linear_infinite] h-full w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
  </div>

  <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
    <div className="animate-[shineVertical_3s_linear_infinite] h-1/2 w-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
  </div>
</div>
            
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <InputField
                label="First Name"
                name="name"
                value={formData.name}
                placeholder="Jhon"
                onChange={onFieldChange}
                error={errors.name}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                placeholder="Doe"
                onChange={onFieldChange}
                error={errors.lastName}
              />
              
            </div>
            <div className="mt-4">
  <InputField
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    placeholder="john@comapny.com"
    onChange={onFieldChange}
    error={errors.email}
  />
</div>

           <div className="mt-4">
  <InputField
  label="Phone Number"
  name="phone"
  type="tel"
  value={formData.phone}
  onChange={(name, value) => {
    const numericValue = value.replace(/[^0-9]/g, "").slice(0, 11); ; // ✅ only numbers
    onFieldChange(name, numericValue);
  }}
  placeholder="(5555)000-000"
  error={errors.phone}
/>
</div>
           <div className="mt-4">
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Service You're Interested In
  </label>

  <select
    name="service"
    value={formData.service}
    onChange={(e) => onFieldChange("service", e.target.value)}
    className="w-full rounded-lg border border-slate-200 bg-white/80 p-3 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
  >
    <option value="">Select a service</option>
    <option>Digital Marketing</option>
    <option>SEO</option>
    <option>Paid Marketing (PPC)</option>
    <option>Social Media Management</option>
    <option>Content Marketing & Strategy</option>
    <option>Brand Identity</option>
    <option>Website Development</option>
    <option>E-Commerce Development</option>
    <option>App Development</option>
    <option>Video Production</option>
    <option>Cloud & DevOps</option>
    <option>UI/UX Design</option>
    <option>Multiple Services</option>
  </select>
</div>
            <div className="mt-4">
              <InputField
                label="Project details"
                name="details"
                value={formData.details}
                placeholder="Describe your project in detail..."
                onChange={onFieldChange}
                multiline
                rows={8}
                error={errors.details}
              />
            </div>            

            <button
  type="submit"
  className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_26px_rgba(59,130,246,0.45)]"
>
  Submit Form
</button>
          </form>
        </div>
      </div>
    </section>
  );
}
