import { useAppContext } from "../context/useAppContext";

const Listing = () => {
  const { properties } = useAppContext();

  return (
    <section className="max-padd-container py-28">
      <h1 className="text-3xl font-bold text-slate-900">Property listings</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {(properties.length ? properties : [{ id: 1, title: "Sample Property", price: "$1200/mo" }]).map((property) => (
          <div key={property.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="h-40 rounded-xl bg-gradient-to-br from-amber-100 to-slate-200" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{property.title}</h3>
            <p className="mt-2 text-amber-600 font-bold">{property.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listing;