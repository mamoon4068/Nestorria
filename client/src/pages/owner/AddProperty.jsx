const AddProperty = () => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">Add a property</h2>
    <form className="mt-6 grid gap-4 md:grid-cols-2">
      <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Property name" />
      <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Location" />
      <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Price" />
      <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Type" />
      <button type="button" className="btn-primary md:col-span-2">Save property</button>
    </form>
  </div>
);

export default AddProperty;