const featured = [
  { id: 1, title: "Cozy Apartment", location: "Downtown", price: "$1200/mo" },
  { id: 2, title: "City Villa", location: "North Hill", price: "$2400/mo" },
  { id: 3, title: "Family Home", location: "Riverside", price: "$3100/mo" },
];

const FeaturedProperties = () => (
  <section className="max-padd-container py-20">
    <h2 className="text-3xl font-bold text-slate-900">Featured properties</h2>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {featured.map((property) => (
        <div key={property.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="h-40 rounded-xl bg-gradient-to-br from-amber-100 to-slate-200" />
          <h3 className="mt-4 text-xl font-semibold text-slate-900">{property.title}</h3>
          <p className="text-slate-600">{property.location}</p>
          <p className="mt-3 text-lg font-bold text-amber-600">{property.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProperties;