import { useState } from "react";

const AgencyReg = () => {
  const [form, setForm] = useState({ name: "", email: "", city: "", contact: "" });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <section className="max-padd-container pt-28 pb-10">
      <div className="rounded-3xl bg-slate-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Register your agency</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Agency name" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
          <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact" className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300" />
        </div>
        <button className="mt-6 btn-primary">Submit</button>
      </div>
    </section>
  );
};

export default AgencyReg;