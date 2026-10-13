const Hero = () => (
  <section className="bg-gradient-to-r from-[#fffbee] to-white pt-28 pb-16">
    <div className="max-padd-container grid gap-8 md:grid-cols-2 items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">Modern living</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-6xl">Find a home that fits your story.</h1>
        <p className="mt-4 max-w-xl text-lg text-slate-600">Browse premium apartments, family homes, and investment properties with confidence.</p>
        <div className="mt-8 flex gap-4">
          <button className="btn-primary">Explore Listings</button>
          <button className="btn-secondary">Speak to an Agent</button>
        </div>
      </div>
      <div className="rounded-3xl bg-slate-200 p-8 shadow-lg">
        <div className="h-72 rounded-2xl bg-gradient-to-br from-amber-200 via-white to-slate-200" />
      </div>
    </div>
  </section>
);

export default Hero;