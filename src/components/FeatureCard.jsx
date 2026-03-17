export default function FeatureCard({ icon: Icon, title, description, accent }) {
  return (
    <div className="rounded-[2rem] border border-charcoal/10 bg-white p-7 shadow-card">
      <div className="inline-flex rounded-2xl bg-forest p-3 text-sand">
        <Icon size={22} />
      </div>
      <h3 className="mt-6 font-serif text-3xl font-bold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{description}</p>
      <p className="mt-5 text-sm font-semibold text-forest">{accent}</p>
    </div>
  );
}
