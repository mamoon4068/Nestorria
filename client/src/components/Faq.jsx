const faqs = [
  { q: "How do I book a property?", a: "You can pick a listing, review the details, and contact the owner or agent through the booking flow." },
  { q: "Are the listings verified?", a: "Yes. We review each listing before it appears in the marketplace." },
  { q: "Do you help with agency registration?", a: "Yes. Registered owners can submit and manage property listings from the dashboard." },
];

const Faq = () => (
  <section className="max-padd-container py-20">
    <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
    <div className="mt-8 space-y-4">
      {faqs.map((item) => (
        <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-slate-900">{item.q}</h3>
          <p className="mt-2 text-slate-600">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Faq;