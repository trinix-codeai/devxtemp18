export default function GearChecklist({ categories, values, onToggle }) {
  return (
    <div className="rounded-[2rem] border border-charcoal/10 bg-charcoal p-6 text-sand shadow-card">
      <div className="border-b border-white/10 pb-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-tan">Master checklist</p>
        <h3 className="mt-3 font-serif text-3xl font-bold">Gear vault</h3>
        <p className="mt-3 text-sm leading-7 text-sand/70">
          Mark packed items at the trip level so every day plan stays grounded in what is actually ready.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-tan">{category}</p>
            <div className="mt-3 space-y-3">
              {items.map((item) => (
                <label className="flex items-center gap-3 text-sm text-sand/80" key={item}>
                  <input
                    checked={values[item] ?? false}
                    className="h-4 w-4 rounded border-white/20 bg-transparent text-tan focus:ring-tan"
                    onChange={(event) => onToggle(item, event.target.checked)}
                    type="checkbox"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
