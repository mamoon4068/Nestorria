const About = () => (
  <section className="max-padd-container py-20">
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">Why choose us</p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Smart living starts with the right place.</h2>
        <p className="mt-4 text-slate-600">We help buyers, renters, and investors discover homes and spaces that fit their lifestyle and budget.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {["Verified listings", "Transparent pricing", "Local expertise", "Fast support"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 h-10 w-10 rounded-full bg-amber-100" />
            <h3 className="font-semibold text-slate-900">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;