const Item = ({ title, subtitle, price }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="h-40 rounded-xl bg-gradient-to-br from-slate-100 to-amber-100" />
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600">{subtitle}</p>
    <p className="mt-2 text-amber-600 font-bold">{price}</p>
  </div>
);

export default Item;